import { Language } from '../types';

/**
 * Metadata for a verified, authoritative medical or public health document.
 */
export interface TrustedHealthDocument {
  id: string;
  title: string;
  canonicalUrl: string;
  publisher: string;
  topic: string;
  language: Language | 'en';
  publishedAt?: string;
  updatedAt?: string;
  license?: string;
  content: string;
  author?: string;
  summary?: string;
}

/**
 * An individual chunk of text stored in the vector database with its embedding.
 */
export interface KnowledgeChunk {
  id: string;
  documentId: string;
  chunkIndex: number;
  content: string;
  heading?: string;
  sourceTitle: string;
  canonicalUrl: string;
  publisher: string;
  topic: string;
  language: string;
  publishedAt?: string;
  updatedAt?: string;
  ingestedAt: string;
  hash: string;
  embedding?: number[];
  metadata?: Record<string, unknown>;
}

/**
 * Result of similarity search against vector store.
 */
export interface RetrievalResult {
  chunk: KnowledgeChunk;
  similarity: number;
}

/**
 * Search options for vector retrieval.
 */
export interface RAGQueryOptions {
  topK?: number;
  minSimilarityThreshold?: number;
  filterTopic?: string;
  filterLanguage?: string;
}

/**
 * Clickable citation card surfaced to the user.
 */
export interface KnowledgeCitation {
  id: string;
  sourceTitle: string;
  canonicalUrl: string;
  publisher: string;
  topic?: string;
  relevanceScore: number;
  heading?: string;
  snippet?: string;
}

/**
 * Result returned by the RAG generation pipeline.
 */
export interface RAGResponse {
  answer: string;
  citations: KnowledgeCitation[];
  isEvidenceSufficient: boolean;
  isRAGEnabled: boolean;
  modelUsed?: string;
  durationMs?: number;
  retrievedCount: number;
  warningNotice?: string;
}

/**
 * Summary report returned after an ingestion run.
 */
export interface IngestionSummary {
  processedDocs: number;
  totalChunks: number;
  inserted: number;
  updated: number;
  skipped: number;
  errors: Array<{ documentId: string; error: string }>;
  durationMs: number;
}
