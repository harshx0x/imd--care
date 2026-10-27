import { getOpenAIClient, getOpenAIModel, isOpenAIConfigured } from '../openai';
import { isMedGemmaConfigured, generateMedGemmaCompletion, checkMedGemmaConnection } from './medgemma';

export type AIProvider = 'medgemma' | 'openai' | 'curated-offline-engine';

export interface AICompletionResult {
  text: string;
  provider: AIProvider;
  model: string;
  durationMs: number;
}

export interface AIStatusSummary {
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
  offlineEngine: {
    available: boolean;
    name: string;
  };
}

/**
 * Returns the status of all available AI providers.
 */
export async function getAIServicesStatus(): Promise<AIStatusSummary> {
  const medGemmaCheck = await checkMedGemmaConnection();

  return {
    medGemma: {
      configured: medGemmaCheck.configured,
      connected: medGemmaCheck.connected,
      model: medGemmaCheck.model,
      endpoint: medGemmaCheck.endpoint
    },
    openAI: {
      configured: isOpenAIConfigured(),
      model: getOpenAIModel()
    },
    offlineEngine: {
      available: true,
      name: 'grounded-curated-knowledge-engine'
    }
  };
}

/**
 * Executes chat completion trying providers in prioritized order:
 * 1. MedGemma (if configured & reachable)
 * 2. OpenAI (if configured)
 * Returns null if both remote providers are unavailable so the caller can use grounded RAG synthesis.
 */
export async function generateAICompletion(
  prompt: string,
  systemPrompt?: string,
  temperature: number = 0.3
): Promise<AICompletionResult | null> {
  const start = Date.now();

  // 1. Try MedGemma if configured
  if (isMedGemmaConfigured()) {
    try {
      const medGemmaRes = await generateMedGemmaCompletion(prompt, systemPrompt, temperature);
      if (medGemmaRes && medGemmaRes.text) {
        return {
          text: medGemmaRes.text,
          provider: 'medgemma',
          model: medGemmaRes.model,
          durationMs: medGemmaRes.durationMs
        };
      }
    } catch (err) {
      console.warn('MedGemma call failed, proceeding to next provider:', err);
    }
  }

  // 2. Try OpenAI if configured
  if (isOpenAIConfigured()) {
    const openai = getOpenAIClient();
    if (openai) {
      try {
        const model = getOpenAIModel();
        const messages: Array<{ role: 'system' | 'user'; content: string }> = [];
        if (systemPrompt) {
          messages.push({ role: 'system', content: systemPrompt });
        }
        messages.push({ role: 'user', content: prompt });

        const completion = await openai.chat.completions.create({
          model,
          messages,
          temperature,
          max_tokens: 850
        });

        const text = completion.choices[0]?.message?.content || '';
        if (text) {
          return {
            text,
            provider: 'openai',
            model: `openai:${model}`,
            durationMs: Date.now() - start
          };
        }
      } catch (err) {
        console.warn('OpenAI completion failed, proceeding to offline engine:', err);
      }
    }
  }

  // Caller handles offline / curated fallback
  return null;
}

