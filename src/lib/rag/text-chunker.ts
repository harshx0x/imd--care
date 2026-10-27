import crypto from 'crypto';
import { TrustedHealthDocument, KnowledgeChunk } from './types';

export interface ChunkingOptions {
  maxChunkSize?: number;
  chunkOverlap?: number;
}

/**
 * Computes a deterministic SHA-256 hash of a chunk to support deduplication and update tracking.
 */
export function computeChunkHash(documentId: string, chunkIndex: number, content: string): string {
  const payload = `${documentId}::${chunkIndex}::${content.trim()}`;
  return crypto.createHash('sha256').update(payload, 'utf8').digest('hex');
}

/**
 * Splits medical text into semantic, overlapping chunks while preserving heading context.
 */
export function chunkMedicalDocument(
  doc: TrustedHealthDocument,
  options: ChunkingOptions = {}
): KnowledgeChunk[] {
  const maxChunkSize = options.maxChunkSize || 750;
  const chunkOverlap = options.chunkOverlap || 120;

  const rawLines = doc.content.split('\n');
  const sections: Array<{ heading: string; paragraphs: string[] }> = [];

  let currentHeading = doc.title;
  let currentParagraphs: string[] = [];

  for (const line of rawLines) {
    const trimmed = line.trim();
    if (!trimmed) continue;

    // Detect markdown headings or strong bold section titles
    if (trimmed.startsWith('#') || (trimmed.startsWith('**') && trimmed.endsWith('**') && trimmed.length < 90)) {
      if (currentParagraphs.length > 0) {
        sections.push({ heading: currentHeading, paragraphs: currentParagraphs });
        currentParagraphs = [];
      }
      currentHeading = trimmed.replace(/^#+\s*/, '').replace(/^\*\*/, '').replace(/\*\*$/, '').trim();
    } else {
      currentParagraphs.push(trimmed);
    }
  }

  if (currentParagraphs.length > 0) {
    sections.push({ heading: currentHeading, paragraphs: currentParagraphs });
  }

  const chunks: KnowledgeChunk[] = [];
  let chunkIndex = 0;
  const now = new Date().toISOString();

  for (const section of sections) {
    const sectionText = section.paragraphs.join('\n\n');

    // If section fits in one chunk, emit it directly
    if (sectionText.length <= maxChunkSize) {
      const content = `### ${section.heading}\n\n${sectionText}`;
      const hash = computeChunkHash(doc.id, chunkIndex, content);
      chunks.push({
        id: `${doc.id}-chunk-${chunkIndex}`,
        documentId: doc.id,
        chunkIndex,
        content,
        heading: section.heading,
        sourceTitle: doc.title,
        canonicalUrl: doc.canonicalUrl,
        publisher: doc.publisher,
        topic: doc.topic,
        language: doc.language,
        publishedAt: doc.publishedAt,
        updatedAt: doc.updatedAt,
        ingestedAt: now,
        hash,
        metadata: {
          license: doc.license,
          author: doc.author
        }
      });
      chunkIndex++;
      continue;
    }

    // Split longer sections with overlapping sentence windows
    const sentences = sectionText.split(/(?<=[.!?।])\s+/);
    let currentChunkSentences: string[] = [];
    let currentLength = 0;

    for (let sIdx = 0; sIdx < sentences.length; sIdx++) {
      const sentence = sentences[sIdx].trim();
      if (!sentence) continue;

      if (currentLength + sentence.length > maxChunkSize && currentChunkSentences.length > 0) {
        const chunkBody = currentChunkSentences.join(' ');
        const content = `### ${section.heading}\n\n${chunkBody}`;
        const hash = computeChunkHash(doc.id, chunkIndex, content);

        chunks.push({
          id: `${doc.id}-chunk-${chunkIndex}`,
          documentId: doc.id,
          chunkIndex,
          content,
          heading: section.heading,
          sourceTitle: doc.title,
          canonicalUrl: doc.canonicalUrl,
          publisher: doc.publisher,
          topic: doc.topic,
          language: doc.language,
          publishedAt: doc.publishedAt,
          updatedAt: doc.updatedAt,
          ingestedAt: now,
          hash,
          metadata: {
            license: doc.license,
            author: doc.author
          }
        });
        chunkIndex++;

        // Carry over overlap sentences
        const overlapSentences: string[] = [];
        let overlapLength = 0;
        for (let i = currentChunkSentences.length - 1; i >= 0; i--) {
          const sent = currentChunkSentences[i];
          if (overlapLength + sent.length <= chunkOverlap) {
            overlapSentences.unshift(sent);
            overlapLength += sent.length;
          } else {
            break;
          }
        }
        currentChunkSentences = [...overlapSentences, sentence];
        currentLength = currentChunkSentences.reduce((acc, s) => acc + s.length + 1, 0);
      } else {
        currentChunkSentences.push(sentence);
        currentLength += sentence.length + 1;
      }
    }

    if (currentChunkSentences.length > 0) {
      const chunkBody = currentChunkSentences.join(' ');
      const content = `### ${section.heading}\n\n${chunkBody}`;
      const hash = computeChunkHash(doc.id, chunkIndex, content);

      chunks.push({
        id: `${doc.id}-chunk-${chunkIndex}`,
        documentId: doc.id,
        chunkIndex,
        content,
        heading: section.heading,
        sourceTitle: doc.title,
        canonicalUrl: doc.canonicalUrl,
        publisher: doc.publisher,
        topic: doc.topic,
        language: doc.language,
        publishedAt: doc.publishedAt,
        updatedAt: doc.updatedAt,
        ingestedAt: now,
        hash,
        metadata: {
          license: doc.license,
          author: doc.author
        }
      });
      chunkIndex++;
    }
  }

  return chunks;
}
