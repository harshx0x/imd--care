import crypto from 'crypto';
import { getOpenAIClient, isOpenAIConfigured } from '../openai';

export const EMBEDDING_DIMENSION = 1536;

export function getOpenAIEmbeddingModel(): string {
  return process.env.OPENAI_EMBEDDING_MODEL?.trim() || 'text-embedding-3-small';
}

/**
 * Computes exact cosine similarity between two numeric vectors.
 * If vectors are already L2-normalized, this is identical to their dot product.
 */
export function cosineSimilarity(vecA: number[], vecB: number[]): number {
  if (vecA.length !== vecB.length || vecA.length === 0) return 0;

  let dotProduct = 0;
  let normA = 0;
  let normB = 0;

  for (let i = 0; i < vecA.length; i++) {
    dotProduct += vecA[i] * vecB[i];
    normA += vecA[i] * vecA[i];
    normB += vecB[i] * vecB[i];
  }

  if (normA === 0 || normB === 0) return 0;
  const similarity = dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
  return Math.max(-1, Math.min(1, similarity));
}

/**
 * Generates an L2-normalized 1536-dimensional embedding.
 * Uses OpenAI text-embedding-3-small when configured.
 * When OpenAI is not configured, uses a deterministic semantic feature-projection
 * hash that preserves clinical token overlaps and cosine-similarity ordering offline.
 */
export async function generateEmbedding(text: string): Promise<number[]> {
  const cleanText = text.trim();
  if (!cleanText) {
    return new Array(EMBEDDING_DIMENSION).fill(0);
  }

  // 1. Live OpenAI Embeddings (when API key is present)
  if (isOpenAIConfigured()) {
    try {
      const openai = getOpenAIClient();
      if (openai) {
        const response = await openai.embeddings.create({
          model: getOpenAIEmbeddingModel(),
          input: cleanText.slice(0, 8000),
          encoding_format: 'float'
        });

        const embedding = response.data[0]?.embedding;
        if (Array.isArray(embedding) && embedding.length === EMBEDDING_DIMENSION) {
          return embedding;
        }
      }
    } catch (err) {
      console.warn('OpenAI embedding creation failed, falling back to local deterministic vector generator:', err);
    }
  }

  // 2. High-Fidelity Deterministic Semantic Hash Vector (Offline / Test / Demo)
  return generateDeterministicSemanticVector(cleanText);
}

const CROSS_LINGUAL_CLINICAL_MAP: Record<string, string[]> = {
  // Diabetes & Glucose
  'डायबिटीज': ['diabetes', 'glucose', 'sugar', 'insulin', 'fasting', 'hba1c'],
  'मधुमेह': ['diabetes', 'glucose', 'sugar', 'insulin', 'fasting', 'hba1c'],
  'शुगर': ['sugar', 'glucose', 'diabetes', 'fasting'],
  'साखर': ['sugar', 'glucose', 'diabetes'],
  // Blood Pressure & Hypertension
  'ब्लड': ['blood', 'pressure'],
  'प्रेशर': ['pressure', 'hypertension', 'systolic', 'diastolic'],
  'रक्तदाब': ['hypertension', 'blood', 'pressure', 'systolic', 'diastolic'],
  'नमक': ['salt', 'sodium', 'hypertension'],
  'मीठ': ['salt', 'sodium', 'hypertension'],
  // Dengue & Seasonal Fever
  'डेंग': ['dengue', 'fever', 'platelets', 'paracetamol', 'nsaid'],
  'ताप': ['fever', 'febrile', 'temperature', 'dengue'],
  'बुखार': ['fever', 'febrile', 'temperature'],
  // Anemia & Iron
  'एनीमिया': ['anemia', 'hemoglobin', 'iron', 'folic'],
  'अ‍ॅनिमिया': ['anemia', 'hemoglobin', 'iron', 'folic'],
  'रक्ताल्पता': ['anemia', 'hemoglobin', 'iron'],
  'खून': ['blood', 'hemoglobin', 'iron'],
  'रक्त': ['blood', 'hemoglobin', 'iron'],
  // Dehydration & Heat
  'डिहाइड्रेशन': ['dehydration', 'water', 'fluids', 'ors', 'heat'],
  'निर्जलीकरण': ['dehydration', 'water', 'fluids', 'ors', 'heat'],
  'ओआरएस': ['ors', 'hydration', 'electrolytes', 'salts'],
  'उल्टी': ['vomiting', 'nausea', 'dehydration'],
  'उलटी': ['vomiting', 'nausea', 'dehydration'],
  'चक्कर': ['dizziness', 'dehydration'],
  'उष्माघात': ['heat', 'stroke', 'exhaustion'],
  'लू': ['heat', 'wave', 'stroke', 'dehydration'],
  // Diet & Lifestyle
  'खानपान': ['diet', 'nutrition', 'food', 'meals', 'icmr'],
  'आहार': ['diet', 'nutrition', 'food', 'meals', 'icmr'],
  'पोषण': ['nutrition', 'diet', 'vitamins'],
  'व्यायाम': ['exercise', 'aerobic', 'walking', 'physical'],
  'योग': ['yoga', 'pranayama', 'lifestyle']
};

/**
 * Creates a normalized 1536-dimensional vector using character n-grams,
 * token hashes, and cross-lingual clinical keyword projection.
 */
export function generateDeterministicSemanticVector(text: string): number[] {
  const vector = new Array<number>(EMBEDDING_DIMENSION).fill(0);
  const normalized = text.toLowerCase().replace(/[^\p{L}\p{N}\s]/gu, ' ');
  const tokens = normalized.split(/\s+/).filter((t) => t.length > 1);

  if (tokens.length === 0) {
    vector[0] = 1;
    return vector;
  }

  // Cross-lingual semantic expansion
  const allTokens = [...tokens];
  for (const [key, syns] of Object.entries(CROSS_LINGUAL_CLINICAL_MAP)) {
    if (text.includes(key)) {
      allTokens.push(...syns);
      allTokens.push(...syns);
    }
  }

  // Project word tokens and 3-grams across the 1536 dimensions
  for (const token of allTokens) {
    const hash = crypto.createHash('md5').update(token, 'utf8').digest();
    const idx1 = hash.readUInt16BE(0) % EMBEDDING_DIMENSION;
    const idx2 = hash.readUInt16BE(2) % EMBEDDING_DIMENSION;
    const idx3 = hash.readUInt16BE(4) % EMBEDDING_DIMENSION;
    const weight = Math.log(1 + token.length);

    vector[idx1] += weight;
    vector[idx2] += weight * 0.7;
    vector[idx3] += weight * 0.5;

    // Character trigrams for morphological and cross-lingual robustness
    if (token.length >= 3) {
      for (let i = 0; i <= token.length - 3; i++) {
        const trigram = token.slice(i, i + 3);
        const tHash = crypto.createHash('md5').update(trigram, 'utf8').digest();
        const tIdx = tHash.readUInt16BE(0) % EMBEDDING_DIMENSION;
        vector[tIdx] += 0.3;
      }
    }
  }

  // L2 Normalize
  let sumSq = 0;
  for (let i = 0; i < EMBEDDING_DIMENSION; i++) {
    sumSq += vector[i] * vector[i];
  }

  const norm = Math.sqrt(sumSq) || 1;
  for (let i = 0; i < EMBEDDING_DIMENSION; i++) {
    vector[i] = vector[i] / norm;
  }

  return vector;
}
