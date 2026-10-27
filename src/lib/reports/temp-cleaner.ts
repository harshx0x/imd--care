import fs from 'fs';
import path from 'path';

/**
 * Manages safe creation and immediate deterministic cleanup of temporary files.
 */
export async function withTempFile<T>(
  buffer: Buffer,
  extension: string,
  fn: (tempPath: string) => Promise<T>
): Promise<T> {
  const tempDir = path.join('/tmp', 'imd-care-temp');
  if (!fs.existsSync(tempDir)) {
    try {
      fs.mkdirSync(tempDir, { recursive: true });
    } catch {}
  }

  const randomName = `report_${Date.now()}_${Math.random().toString(36).slice(2, 9)}.${extension.replace(/^\./, '')}`;
  const filePath = path.join(tempDir, randomName);

  try {
    fs.writeFileSync(filePath, buffer);
    return await fn(filePath);
  } finally {
    // ALWAYS clean up in finally block regardless of success or failure
    try {
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    } catch (cleanupErr) {
      console.warn('Failed to clean up temporary file:', filePath, cleanupErr);
    }
  }
}

/**
 * Cleans up any orphaned files in the temporary directory older than 15 minutes.
 */
export function purgeOrphanedTempFiles(): void {
  const tempDir = path.join('/tmp', 'imd-care-temp');
  if (!fs.existsSync(tempDir)) return;

  const now = Date.now();
  const maxAgeMs = 15 * 60 * 1000;

  try {
    const files = fs.readdirSync(tempDir);
    for (const f of files) {
      const fullPath = path.join(tempDir, f);
      const stat = fs.statSync(fullPath);
      if (now - stat.mtimeMs > maxAgeMs) {
        fs.unlinkSync(fullPath);
      }
    }
  } catch (err) {
    console.warn('Temporary directory purge error:', err);
  }
}

