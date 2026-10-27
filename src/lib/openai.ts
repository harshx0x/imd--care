import OpenAI from 'openai';

let openaiClientInstance: OpenAI | null = null;

export function getOpenAIClient(): OpenAI | null {
  const apiKey = process.env.OPENAI_API_KEY?.trim();
  if (!apiKey || apiKey === '' || apiKey.startsWith('your_') || apiKey === 'undefined') {
    return null;
  }

  if (!openaiClientInstance) {
    openaiClientInstance = new OpenAI({
      apiKey: apiKey,
    });
  }

  return openaiClientInstance;
}

export function isOpenAIConfigured(): boolean {
  const apiKey = process.env.OPENAI_API_KEY?.trim();
  return Boolean(apiKey && apiKey.length > 10 && !apiKey.startsWith('your_'));
}

export function getOpenAIModel(): string {
  return process.env.OPENAI_MODEL?.trim() || 'gpt-4o-mini';
}

export function getOpenAIEmbeddingModel(): string {
  return process.env.OPENAI_EMBEDDING_MODEL?.trim() || 'text-embedding-3-small';
}
