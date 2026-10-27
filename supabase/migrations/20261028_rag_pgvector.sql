-- ==============================================================================
-- IMD Care — RAG Knowledge Base with pgvector
-- Migration: 20261028_rag_pgvector.sql
-- Description: Sets up pgvector extension, knowledge_chunks table, HNSW indexes,
--              Row Level Security, and similarity search function for verified health guidelines.
-- ==============================================================================

-- 1. Enable the pgvector extension for vector storage & cosine similarity
CREATE EXTENSION IF NOT EXISTS vector;

-- 2. Knowledge Chunks Table
CREATE TABLE IF NOT EXISTS public.knowledge_chunks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  document_id TEXT NOT NULL,
  chunk_index INT NOT NULL,
  source_title TEXT NOT NULL,
  canonical_url TEXT NOT NULL,
  publisher TEXT NOT NULL,
  topic TEXT NOT NULL,
  language TEXT NOT NULL DEFAULT 'en',
  content TEXT NOT NULL,
  heading TEXT,
  hash TEXT UNIQUE NOT NULL,
  published_at TIMESTAMPTZ,
  updated_at TIMESTAMPTZ,
  ingested_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  metadata JSONB DEFAULT '{}'::jsonb,
  -- 1536-dimensional embedding matching text-embedding-3-small
  embedding VECTOR(1536)
);

-- 3. High-Performance HNSW Index for Cosine Similarity Searches
-- HNSW provides sub-millisecond approximate nearest neighbor search
CREATE INDEX IF NOT EXISTS knowledge_chunks_embedding_idx
ON public.knowledge_chunks
USING hnsw (embedding vector_cosine_ops)
WITH (m = 16, ef_construction = 64);

-- 4. B-Tree Indexes for Fast Metadata Filtering
CREATE INDEX IF NOT EXISTS knowledge_chunks_topic_idx ON public.knowledge_chunks(topic);
CREATE INDEX IF NOT EXISTS knowledge_chunks_lang_idx ON public.knowledge_chunks(language);
CREATE INDEX IF NOT EXISTS knowledge_chunks_doc_idx ON public.knowledge_chunks(document_id);
CREATE INDEX IF NOT EXISTS knowledge_chunks_hash_idx ON public.knowledge_chunks(hash);

-- 5. Row Level Security (RLS) Policies
ALTER TABLE public.knowledge_chunks ENABLE ROW LEVEL SECURITY;

-- Public read access: Authenticated and anonymous visitors can retrieve verified chunks
-- (The raw vector embedding column is omitted in typical frontend selects via API)
CREATE POLICY "Allow public read access to knowledge chunks"
ON public.knowledge_chunks
FOR SELECT
TO authenticated, anon
USING (true);

-- Privileged write access: ONLY service_role (server backend) can insert, update, or delete
CREATE POLICY "Allow service role full access to knowledge chunks"
ON public.knowledge_chunks
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- 6. Similarity Search Stored Function (match_knowledge_chunks)
-- Called via Supabase RPC: supabase.rpc('match_knowledge_chunks', { query_embedding, ... })
CREATE OR REPLACE FUNCTION public.match_knowledge_chunks(
  query_embedding VECTOR(1536),
  match_threshold FLOAT DEFAULT 0.60,
  match_count INT DEFAULT 5,
  filter_topic TEXT DEFAULT NULL,
  filter_language TEXT DEFAULT NULL
)
RETURNS TABLE (
  id UUID,
  document_id TEXT,
  chunk_index INT,
  source_title TEXT,
  canonical_url TEXT,
  publisher TEXT,
  topic TEXT,
  language TEXT,
  content TEXT,
  heading TEXT,
  published_at TIMESTAMPTZ,
  updated_at TIMESTAMPTZ,
  metadata JSONB,
  similarity FLOAT
)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  RETURN QUERY
  SELECT
    kc.id,
    kc.document_id,
    kc.chunk_index,
    kc.source_title,
    kc.canonical_url,
    kc.publisher,
    kc.topic,
    kc.language,
    kc.content,
    kc.heading,
    kc.published_at,
    kc.updated_at,
    kc.metadata,
    -- Cosine similarity is 1 minus cosine distance (<=> operator)
    (1 - (kc.embedding <=> query_embedding))::FLOAT AS similarity
  FROM public.knowledge_chunks kc
  WHERE
    kc.embedding IS NOT NULL
    AND (filter_topic IS NULL OR kc.topic = filter_topic)
    AND (filter_language IS NULL OR kc.language = filter_language)
    AND (1 - (kc.embedding <=> query_embedding)) >= match_threshold
  ORDER BY kc.embedding <=> query_embedding ASC
  LIMIT match_count;
END;
$$;

-- Grant execution permission to public roles
GRANT EXECUTE ON FUNCTION public.match_knowledge_chunks TO anon, authenticated, service_role;
