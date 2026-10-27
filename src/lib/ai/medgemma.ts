/**
 * MedGemma AI Integration Module
 *
 * Configurable through server-side environment variables:
 * - MEDGEMMA_API_ENDPOINT: e.g., https://your-medgemma-vllm-or-vertex-endpoint/v1
 * - MEDGEMMA_API_KEY: optional Bearer token
 * - MEDGEMMA_MODEL: e.g., google/medgemma-2b or google/medgemma-4b
 *
 * CRITICAL RULE: Never claim MedGemma is connected unless a real connection test succeeds.
 */

export interface MedGemmaConfig {
  endpoint: string | null;
  apiKey: string | null;
  model: string;
}

export interface MedGemmaConnectionStatus {
  configured: boolean;
  connected: boolean;
  endpoint: string | null;
  model: string;
  responseTimeMs?: number;
  error?: string;
  lastChecked: string;
}

export function getMedGemmaConfig(): MedGemmaConfig {
  const endpoint = process.env.MEDGEMMA_API_ENDPOINT?.trim() || null;
  const apiKey = process.env.MEDGEMMA_API_KEY?.trim() || null;
  const model = process.env.MEDGEMMA_MODEL?.trim() || 'google/medgemma-2b';

  return { endpoint, apiKey, model };
}

export function isMedGemmaConfigured(): boolean {
  const { endpoint } = getMedGemmaConfig();
  if (!endpoint) return false;
  return endpoint.startsWith('http://') || endpoint.startsWith('https://');
}

/**
 * Conducts a real connection test to the configured MedGemma endpoint.
 * Returns true/connected ONLY if a real HTTP probe returns status 200.
 */
export async function checkMedGemmaConnection(): Promise<MedGemmaConnectionStatus> {
  const { endpoint, apiKey, model } = getMedGemmaConfig();
  const now = new Date().toISOString();

  if (!isMedGemmaConfigured() || !endpoint) {
    return {
      configured: false,
      connected: false,
      endpoint: null,
      model,
      lastChecked: now,
      error: 'MEDGEMMA_API_ENDPOINT is not configured in server environment variables.'
    };
  }

  const startTime = Date.now();
  const probeTimeout = 2500; // 2.5s timeout for health check probe

  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), probeTimeout);

    const headers: Record<string, string> = {
      'Content-Type': 'application/json'
    };
    if (apiKey) {
      headers['Authorization'] = `Bearer ${apiKey}`;
    }

    // Try standard OpenAI-compatible /models endpoint or root health endpoint
    const probeUrl = endpoint.endsWith('/') ? `${endpoint}models` : `${endpoint}/models`;
    const res = await fetch(probeUrl, {
      method: 'GET',
      headers,
      signal: controller.signal
    }).catch(async () => {
      // Fallback to health endpoint probe
      const healthUrl = endpoint.endsWith('/') ? `${endpoint}health` : `${endpoint}/health`;
      return fetch(healthUrl, {
        method: 'GET',
        headers,
        signal: controller.signal
      });
    });

    clearTimeout(timer);
    const duration = Date.now() - startTime;

    if (res && (res.status === 200 || res.status === 204)) {
      return {
        configured: true,
        connected: true,
        endpoint,
        model,
        responseTimeMs: duration,
        lastChecked: now
      };
    }

    return {
      configured: true,
      connected: false,
      endpoint,
      model,
      responseTimeMs: duration,
      lastChecked: now,
      error: `MedGemma endpoint responded with HTTP ${res ? res.status : 'No response'}.`
    };
  } catch (err: unknown) {
    const errMsg = err instanceof Error ? err.message : 'Connection failed or timed out';
    return {
      configured: true,
      connected: false,
      endpoint,
      model,
      lastChecked: now,
      error: `MedGemma connection probe failed: ${errMsg}`
    };
  }
}

/**
 * Executes inference on the configured MedGemma endpoint.
 * Returns null if not configured, unreachable, or on error.
 */
export async function generateMedGemmaCompletion(
  prompt: string,
  systemPrompt?: string,
  temperature: number = 0.2
): Promise<{ text: string; model: string; durationMs: number } | null> {
  const { endpoint, apiKey, model } = getMedGemmaConfig();
  if (!isMedGemmaConfigured() || !endpoint) {
    return null;
  }

  const startTime = Date.now();
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 12000); // 12s timeout

  try {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json'
    };
    if (apiKey) {
      headers['Authorization'] = `Bearer ${apiKey}`;
    }

    const messages = [];
    if (systemPrompt) {
      messages.push({ role: 'system', content: systemPrompt });
    }
    messages.push({ role: 'user', content: prompt });

    const chatUrl = endpoint.endsWith('/') ? `${endpoint}chat/completions` : `${endpoint}/chat/completions`;
    const res = await fetch(chatUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        model,
        messages,
        temperature,
        max_tokens: 850
      }),
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    if (!res.ok) {
      console.warn(`MedGemma inference returned HTTP ${res.status}`);
      return null;
    }

    const data = await res.json();
    const content = data.choices?.[0]?.message?.content || data.generated_text || '';

    if (!content) return null;

    return {
      text: content,
      model: `medgemma:${model}`,
      durationMs: Date.now() - startTime
    };
  } catch (err) {
    clearTimeout(timeoutId);
    console.warn('MedGemma inference error:', err);
    return null;
  }
}

