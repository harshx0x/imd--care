import { getVectorStore } from '../rag/vector-store';
import { getAIServicesStatus } from '../ai/ai-service';
import { getIndianEmergencyNumbers } from '../emergency';

export interface SystemHealthReport {
  status: 'healthy' | 'degraded';
  timestamp: string;
  uptimeSeconds: number;
  environment: string;
  memory: {
    rssMb: number;
    heapUsedMb: number;
    heapTotalMb: number;
  };
  services: {
    vectorStore: {
      status: string;
      provider: string;
      totalChunksIndexed: number;
      curatedDocumentsCount: number;
    };
    aiProviders: {
      medGemma: {
        configured: boolean;
        connected: boolean;
        model: string;
        endpoint: string | null;
      };
      openAI: {
        configured: boolean;
        model: string;
      };
      offlineGroundedEngine: {
        available: boolean;
        name: string;
      };
    };
    emergencyTriage: {
      status: string;
      activeNationalNumbers: Array<{ name: string; number: string; description: string }>;
      rulesLoaded: number;
    };
  };
}

export async function getSystemHealthReport(): Promise<SystemHealthReport> {
  const mem = process.memoryUsage();
  const uptimeSeconds = Math.round(process.uptime());

  // Check vector store
  let vectorStoreStatus = 'operational';
  let chunkCount = 0;
  let docCount = 0;
  let provider = 'in-memory';

  try {
    const store = getVectorStore();
    const stats = await store.getStats();
    chunkCount = stats.totalChunks;
    docCount = stats.documentsCount;
    provider = stats.provider;
  } catch (err) {
    vectorStoreStatus = `error: ${err instanceof Error ? err.message : 'failed'}`;
  }

  // Check AI providers
  const aiStatus = await getAIServicesStatus();

  // Emergency triage
  const emergencyNumbers = getIndianEmergencyNumbers();

  const isHealthy = vectorStoreStatus === 'operational';

  return {
    status: isHealthy ? 'healthy' : 'degraded',
    timestamp: new Date().toISOString(),
    uptimeSeconds,
    environment: process.env.NODE_ENV || 'development',
    memory: {
      rssMb: Math.round(mem.rss / (1024 * 1024)),
      heapUsedMb: Math.round(mem.heapUsed / (1024 * 1024)),
      heapTotalMb: Math.round(mem.heapTotal / (1024 * 1024))
    },
    services: {
      vectorStore: {
        status: vectorStoreStatus,
        provider,
        totalChunksIndexed: chunkCount,
        curatedDocumentsCount: docCount
      },
      aiProviders: {
        medGemma: aiStatus.medGemma,
        openAI: aiStatus.openAI,
        offlineGroundedEngine: aiStatus.offlineEngine
      },
      emergencyTriage: {
        status: 'operational',
        activeNationalNumbers: emergencyNumbers,
        rulesLoaded: 12
      }
    }
  };
}
