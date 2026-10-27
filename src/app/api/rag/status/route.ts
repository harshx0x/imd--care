import { NextResponse } from 'next/server';
import { getVectorStore } from '@/lib/rag/vector-store';
import { isSupabaseConfigured } from '@/lib/supabase/client';
import { isOpenAIConfigured, getOpenAIEmbeddingModel } from '@/lib/openai';

export async function GET() {
  try {
    const store = getVectorStore();
    const stats = await store.getStats();

    return NextResponse.json({
      status: 'ok',
      ragEnabled: true,
      vectorStoreProvider: stats.provider,
      totalChunksIndexed: stats.totalChunks,
      documentsCount: stats.documentsCount,
      supabaseConfigured: isSupabaseConfigured(),
      openAIConfigured: isOpenAIConfigured(),
      embeddingModel: getOpenAIEmbeddingModel(),
      curatedSourcesIncluded: [
        'Ministry of Health and Family Welfare (MoHFW) India',
        'Indian Council of Medical Research (ICMR)',
        'World Health Organization (WHO)',
        'All India Institute of Medical Sciences (AIIMS)',
        'Anemia Mukt Bharat Mission'
      ],
      timestamp: new Date().toISOString()
    });
  } catch (err: unknown) {
    return NextResponse.json(
      {
        status: 'error',
        error: err instanceof Error ? err.message : 'Failed to query RAG stats'
      },
      { status: 500 }
    );
  }
}
