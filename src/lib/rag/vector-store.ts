import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { KnowledgeChunk, RetrievalResult, RAGQueryOptions } from './types';
import { cosineSimilarity } from './embeddings';
import { chunkMedicalDocument } from './text-chunker';
import { CURATED_HEALTH_DOCUMENTS } from './curated-sources';
import { generateDeterministicSemanticVector } from './embeddings';

export interface VectorStoreStats {
  totalChunks: number;
  documentsCount: number;
  provider: 'supabase_pgvector' | 'local_memory';
  isConfigured: boolean;
}

export interface VectorStore {
  upsertChunks(chunks: KnowledgeChunk[]): Promise<{ inserted: number; updated: number; skipped: number }>;
  search(queryEmbedding: number[], options?: RAGQueryOptions): Promise<RetrievalResult[]>;
  deleteDocument(documentId: string): Promise<number>;
  getAllChunks(): Promise<KnowledgeChunk[]>;
  getStats(): Promise<VectorStoreStats>;
}

/**
 * In-Memory Vector Store implementation with cosine similarity search.
 * Used when Supabase pgvector is not configured or during local development/tests.
 */
class LocalInMemoryVectorStore implements VectorStore {
  private chunks: Map<string, KnowledgeChunk> = new Map();
  private isSeeded = false;

  private async ensureSeeded() {
    if (this.isSeeded || this.chunks.size > 0) return;
    this.isSeeded = true;

    for (const doc of CURATED_HEALTH_DOCUMENTS) {
      const chunks = chunkMedicalDocument(doc);
      for (const ch of chunks) {
        if (!ch.embedding) {
          ch.embedding = generateDeterministicSemanticVector(ch.content);
        }
        this.chunks.set(ch.hash, ch);
      }
    }
  }

  async upsertChunks(chunks: KnowledgeChunk[]): Promise<{ inserted: number; updated: number; skipped: number }> {
    await this.ensureSeeded();
    let inserted = 0;
    let updated = 0;

    for (const ch of chunks) {
      if (!ch.embedding) {
        ch.embedding = generateDeterministicSemanticVector(ch.content);
      }
      if (this.chunks.has(ch.hash)) {
        this.chunks.set(ch.hash, ch);
        updated++;
      } else {
        this.chunks.set(ch.hash, ch);
        inserted++;
      }
    }

    return { inserted, updated, skipped: 0 };
  }

  async search(queryEmbedding: number[], options: RAGQueryOptions = {}): Promise<RetrievalResult[]> {
    await this.ensureSeeded();

    const topK = options.topK ?? 4;
    const minThreshold = options.minSimilarityThreshold ?? 0.20;
    const filterTopic = options.filterTopic?.toLowerCase();
    const filterLanguage = options.filterLanguage?.toLowerCase();

    const results: RetrievalResult[] = [];

    for (const chunk of this.chunks.values()) {
      if (!chunk.embedding) continue;

      if (filterTopic && chunk.topic.toLowerCase() !== filterTopic) {
        continue;
      }
      if (filterLanguage && chunk.language.toLowerCase() !== filterLanguage) {
        continue;
      }

      const similarity = cosineSimilarity(queryEmbedding, chunk.embedding);
      if (similarity >= minThreshold) {
        results.push({ chunk, similarity });
      }
    }

    results.sort((a, b) => b.similarity - a.similarity);
    return results.slice(0, topK);
  }

  async deleteDocument(documentId: string): Promise<number> {
    await this.ensureSeeded();
    let count = 0;
    for (const [hash, chunk] of this.chunks.entries()) {
      if (chunk.documentId === documentId) {
        this.chunks.delete(hash);
        count++;
      }
    }
    return count;
  }

  async getAllChunks(): Promise<KnowledgeChunk[]> {
    await this.ensureSeeded();
    return Array.from(this.chunks.values());
  }

  async getStats(): Promise<VectorStoreStats> {
    await this.ensureSeeded();
    const docIds = new Set<string>();
    for (const ch of this.chunks.values()) {
      docIds.add(ch.documentId);
    }
    return {
      totalChunks: this.chunks.size,
      documentsCount: docIds.size,
      provider: 'local_memory',
      isConfigured: true
    };
  }
}

/**
 * Supabase pgvector Store implementation.
 * Queries PostgreSQL pgvector via RPC 'match_knowledge_chunks'.
 */
class SupabasePgvectorStore implements VectorStore {
  private client: SupabaseClient;

  constructor(supabaseUrl: string, serviceRoleKey: string) {
    this.client = createClient(supabaseUrl, serviceRoleKey, {
      auth: { persistSession: false }
    });
  }

  async upsertChunks(chunks: KnowledgeChunk[]): Promise<{ inserted: number; updated: number; skipped: number }> {
    let inserted = 0;
    const updated = 0;

    for (const chunk of chunks) {
      const record = {
        document_id: chunk.documentId,
        chunk_index: chunk.chunkIndex,
        source_title: chunk.sourceTitle,
        canonical_url: chunk.canonicalUrl,
        publisher: chunk.publisher,
        topic: chunk.topic,
        language: chunk.language,
        content: chunk.content,
        heading: chunk.heading,
        hash: chunk.hash,
        published_at: chunk.publishedAt,
        updated_at: chunk.updatedAt,
        ingested_at: chunk.ingestedAt,
        metadata: chunk.metadata || {},
        embedding: chunk.embedding
      };

      const { error } = await this.client
        .from('knowledge_chunks')
        .upsert(record, { onConflict: 'hash' });

      if (error) {
        console.error('Supabase chunk upsert error:', error);
      } else {
        inserted++;
      }
    }

    return { inserted, updated, skipped: 0 };
  }

  async search(queryEmbedding: number[], options: RAGQueryOptions = {}): Promise<RetrievalResult[]> {
    const topK = options.topK ?? 4;
    const minThreshold = options.minSimilarityThreshold ?? 0.60;

    const { data, error } = await this.client.rpc('match_knowledge_chunks', {
      query_embedding: queryEmbedding,
      match_threshold: minThreshold,
      match_count: topK,
      filter_topic: options.filterTopic || null,
      filter_language: options.filterLanguage || null
    });

    if (error) {
      console.error('Supabase match_knowledge_chunks RPC error:', error);
      return [];
    }

    if (!Array.isArray(data)) return [];

    return data.map((row) => ({
      chunk: {
        id: row.id,
        documentId: row.document_id,
        chunkIndex: row.chunk_index,
        sourceTitle: row.source_title,
        canonicalUrl: row.canonical_url,
        publisher: row.publisher,
        topic: row.topic,
        language: row.language,
        content: row.content,
        heading: row.heading,
        publishedAt: row.published_at,
        updatedAt: row.updated_at,
        ingestedAt: row.ingested_at || new Date().toISOString(),
        hash: row.hash || '',
        metadata: row.metadata
      },
      similarity: Number(row.similarity)
    }));
  }

  async deleteDocument(documentId: string): Promise<number> {
    const { data, error } = await this.client
      .from('knowledge_chunks')
      .delete()
      .eq('document_id', documentId)
      .select('id');

    if (error) {
      console.error('Supabase deleteDocument error:', error);
      return 0;
    }
    return data?.length || 0;
  }

  async getAllChunks(): Promise<KnowledgeChunk[]> {
    const { data, error } = await this.client
      .from('knowledge_chunks')
      .select('id, document_id, chunk_index, source_title, canonical_url, publisher, topic, language, content, heading, published_at, updated_at, ingested_at, hash, metadata')
      .limit(100);

    if (error || !data) return [];
    return data.map((row) => ({
      id: row.id,
      documentId: row.document_id,
      chunkIndex: row.chunk_index,
      sourceTitle: row.source_title,
      canonicalUrl: row.canonical_url,
      publisher: row.publisher,
      topic: row.topic,
      language: row.language,
      content: row.content,
      heading: row.heading,
      publishedAt: row.published_at,
      updatedAt: row.updated_at,
      ingestedAt: row.ingested_at,
      hash: row.hash,
      metadata: row.metadata
    }));
  }

  async getStats(): Promise<VectorStoreStats> {
    const { count, error } = await this.client
      .from('knowledge_chunks')
      .select('*', { count: 'exact', head: true });

    return {
      totalChunks: count || 0,
      documentsCount: count ? Math.ceil(count / 5) : 0,
      provider: 'supabase_pgvector',
      isConfigured: !error
    };
  }
}

// Singleton store instances
let activeStore: VectorStore | null = null;

export function getVectorStore(): VectorStore {
  if (activeStore) return activeStore;

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim();

  // If Supabase service role is present, use pgvector
  if (supabaseUrl && serviceRoleKey && !serviceRoleKey.startsWith('your_')) {
    activeStore = new SupabasePgvectorStore(supabaseUrl, serviceRoleKey);
  } else {
    // Fall back to lightweight, zero-dependency local in-memory vector store
    activeStore = new LocalInMemoryVectorStore();
  }

  return activeStore;
}
