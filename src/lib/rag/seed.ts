import { ingestCuratedSources } from './ingestion';
import { getVectorStore } from './vector-store';

/**
 * Seeding script that populates the vector store with curated medical guidelines.
 */
export async function seedRAGKnowledgeBase() {
  console.log('======================================================');
  console.log('   IMD CARE — RAG KNOWLEDGE BASE SEEDING SCRIPT       ');
  console.log('======================================================\n');

  const store = getVectorStore();
  const initialStats = await store.getStats();
  console.log(`Initial Vector Store Provider: ${initialStats.provider}`);
  console.log(`Current Chunks: ${initialStats.totalChunks}`);
  console.log(`Ingesting authoritative guidelines (MoHFW, ICMR, WHO, AIIMS)...\n`);

  const summary = await ingestCuratedSources();

  console.log('--- INGESTION SUMMARY ---');
  console.log(`Documents Processed: ${summary.processedDocs}`);
  console.log(`Total Chunks:        ${summary.totalChunks}`);
  console.log(`Chunks Inserted:     ${summary.inserted}`);
  console.log(`Chunks Updated:      ${summary.updated}`);
  console.log(`Chunks Skipped:      ${summary.skipped}`);
  console.log(`Errors:              ${summary.errors.length}`);
  console.log(`Duration:            ${summary.durationMs}ms`);

  if (summary.errors.length > 0) {
    console.warn('\nIngestion encountered errors:');
    for (const err of summary.errors) {
      console.warn(`  - [${err.documentId}]: ${err.error}`);
    }
  }

  const finalStats = await store.getStats();
  console.log(`\nFinal Vector Store Total Chunks: ${finalStats.totalChunks}`);
  console.log('Seeding completed successfully!\n');

  return summary;
}

// Allow direct execution via tsx / node
if (process.argv[1] && process.argv[1].endsWith('seed.ts')) {
  seedRAGKnowledgeBase().catch((err) => {
    console.error('Fatal seeding error:', err);
    process.exit(1);
  });
}
