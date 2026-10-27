import { TrustedHealthDocument, IngestionSummary } from './types';
import { validateSourceUrl, CURATED_HEALTH_DOCUMENTS } from './curated-sources';
import { chunkMedicalDocument } from './text-chunker';
import { generateEmbedding } from './embeddings';
import { getVectorStore } from './vector-store';

export interface IngestDocumentResult {
  success: boolean;
  documentId: string;
  totalChunks: number;
  inserted: number;
  updated: number;
  skipped: number;
  error?: string;
}

/**
 * Ingests a single authorized healthcare document into the vector store.
 * Strictly verifies that the canonical URL originates from an approved domain.
 */
export async function ingestTrustedDocument(
  doc: TrustedHealthDocument
): Promise<IngestDocumentResult> {
  // 1. Enforce strict authority domain validation
  const validation = validateSourceUrl(doc.canonicalUrl);
  if (!validation.isValid) {
    return {
      success: false,
      documentId: doc.id,
      totalChunks: 0,
      inserted: 0,
      updated: 0,
      skipped: 0,
      error: validation.reason
    };
  }

  // 2. Validate content integrity
  if (!doc.content || doc.content.trim().length < 100) {
    return {
      success: false,
      documentId: doc.id,
      totalChunks: 0,
      inserted: 0,
      updated: 0,
      skipped: 0,
      error: 'Document content is too brief or empty for clinical grounding.'
    };
  }

  try {
    // 3. Chunk text into semantically coherent overlapping windows
    const chunks = chunkMedicalDocument(doc);
    if (chunks.length === 0) {
      return {
        success: false,
        documentId: doc.id,
        totalChunks: 0,
        inserted: 0,
        updated: 0,
        skipped: 0,
        error: 'No chunks could be produced from document.'
      };
    }

    // 4. Generate embeddings for each chunk
    for (const chunk of chunks) {
      chunk.embedding = await generateEmbedding(chunk.content);
    }

    // 5. Upsert into vector store with deduplication
    const store = getVectorStore();
    const { inserted, updated, skipped } = await store.upsertChunks(chunks);

    return {
      success: true,
      documentId: doc.id,
      totalChunks: chunks.length,
      inserted,
      updated,
      skipped
    };
  } catch (err: unknown) {
    return {
      success: false,
      documentId: doc.id,
      totalChunks: 0,
      inserted: 0,
      updated: 0,
      skipped: 0,
      error: err instanceof Error ? err.message : 'Unknown ingestion failure'
    };
  }
}

/**
 * Batch ingests all curated health guidelines into the active vector store.
 * Continues safely even if an individual document encounters an issue.
 */
export async function ingestCuratedSources(): Promise<IngestionSummary> {
  const start = Date.now();
  let processedDocs = 0;
  let totalChunks = 0;
  let inserted = 0;
  let updated = 0;
  let skipped = 0;
  const errors: Array<{ documentId: string; error: string }> = [];

  for (const doc of CURATED_HEALTH_DOCUMENTS) {
    const result = await ingestTrustedDocument(doc);
    processedDocs++;
    if (result.success) {
      totalChunks += result.totalChunks;
      inserted += result.inserted;
      updated += result.updated;
      skipped += result.skipped;
    } else {
      errors.push({ documentId: doc.id, error: result.error || 'Ingestion failed' });
    }
  }

  return {
    processedDocs,
    totalChunks,
    inserted,
    updated,
    skipped,
    errors,
    durationMs: Date.now() - start
  };
}
