import crypto from 'crypto';

/**
 * Redacts Personally Identifiable Information (PII) and Protected Health Information (PHI)
 * from strings before logging or telemetry.
 */
export function redactSensitiveData(text: string): string {
  if (!text) return '';

  return (
    text
      // Redact email addresses
      .replace(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g, '[REDACTED_EMAIL]')
      // Redact 10-12 digit phone numbers / Indian Aadhaar numbers
      .replace(/\b(?:\+91[-\s]?)?[6-9]\d{9}\b/g, '[REDACTED_PHONE]')
      .replace(/\b\d{4}\s?\d{4}\s?\d{4}\b/g, '[REDACTED_ID]')
      // Redact API keys / Bearer tokens
      .replace(/(?:sk-|Bearer\s+|key=)[a-zA-Z0-9_\-]{16,}/gi, '[REDACTED_SECRET]')
      // Redact Patient / MRN identifiers
      .replace(/(?:MRN|Patient ID|UID)[\s:]+[a-zA-Z0-9_-]+/gi, '[REDACTED_PATIENT_ID]')
  );
}

/**
 * Creates an anonymous cryptographic hash of a query string for telemetry deduplication
 * without storing or exposing the actual clinical question.
 */
export function hashQueryForTelemetry(query: string): string {
  return crypto.createHash('sha256').update(query.trim().toLowerCase()).digest('hex').slice(0, 16);
}

/**
 * Sanitizes headers for safe logging (strips Authorization, Cookie, etc.)
 */
export function sanitizeHeadersForLog(headers: Headers): Record<string, string> {
  const safe: Record<string, string> = {};
  const sensitiveKeys = new Set(['authorization', 'cookie', 'set-cookie', 'x-developer-key', 'api-key']);

  headers.forEach((val, key) => {
    const lk = key.toLowerCase();
    if (sensitiveKeys.has(lk)) {
      safe[key] = '[REDACTED]';
    } else {
      safe[key] = val;
    }
  });

  return safe;
}

