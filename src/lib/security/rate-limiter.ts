import { NextRequest } from 'next/server';

interface RateLimitRecord {
  timestamps: number[];
}

export type RateLimitCategory = 'chat' | 'symptoms' | 'reports' | 'monitoring' | 'health' | 'default';

const TIER_LIMITS: Record<RateLimitCategory, { maxRequests: number; windowSeconds: number }> = {
  chat: { maxRequests: 30, windowSeconds: 60 },
  symptoms: { maxRequests: 30, windowSeconds: 60 },
  reports: { maxRequests: 15, windowSeconds: 60 },
  monitoring: { maxRequests: 60, windowSeconds: 60 },
  health: { maxRequests: 120, windowSeconds: 60 },
  default: { maxRequests: 45, windowSeconds: 60 }
};

// In-memory sliding window store: Map<"category:ip", RateLimitRecord>
const rateLimitStore = new Map<string, RateLimitRecord>();

// Clean up stale entries every 5 minutes to prevent memory leaks
let lastCleanup = Date.now();
function cleanupStaleEntries() {
  const now = Date.now();
  if (now - lastCleanup < 5 * 60 * 1000) return;
  lastCleanup = now;

  for (const [key, record] of rateLimitStore.entries()) {
    const validTimestamps = record.timestamps.filter((ts) => now - ts < 60 * 1000);
    if (validTimestamps.length === 0) {
      rateLimitStore.delete(key);
    } else {
      record.timestamps = validTimestamps;
    }
  }
}

/**
 * Extracts a client IP address safely from standard proxy headers or fallback
 */
export function getClientIp(req: NextRequest): string {
  const forwarded = req.headers.get('x-forwarded-for');
  if (forwarded) {
    const firstIp = forwarded.split(',')[0].trim();
    if (firstIp) return firstIp;
  }
  const realIp = req.headers.get('x-real-ip');
  if (realIp) return realIp.trim();

  return '127.0.0.1';
}

export interface RateLimitResult {
  allowed: boolean;
  limit: number;
  remaining: number;
  resetInSeconds: number;
}

/**
 * Enforces sliding window rate limit for an incoming Next.js request.
 */
export function checkRateLimit(
  req: NextRequest,
  category: RateLimitCategory = 'default'
): RateLimitResult {
  cleanupStaleEntries();

  const ip = getClientIp(req);
  const key = `${category}:${ip}`;
  const config = TIER_LIMITS[category] || TIER_LIMITS.default;
  const now = Date.now();
  const windowMs = config.windowSeconds * 1000;

  let record = rateLimitStore.get(key);
  if (!record) {
    record = { timestamps: [] };
    rateLimitStore.set(key, record);
  }

  // Filter timestamps within current sliding window
  record.timestamps = record.timestamps.filter((ts) => now - ts < windowMs);

  if (record.timestamps.length >= config.maxRequests) {
    const oldest = record.timestamps[0];
    const resetInSeconds = Math.max(1, Math.ceil((oldest + windowMs - now) / 1000));
    return {
      allowed: false,
      limit: config.maxRequests,
      remaining: 0,
      resetInSeconds
    };
  }

  record.timestamps.push(now);
  const remaining = Math.max(0, config.maxRequests - record.timestamps.length);

  return {
    allowed: true,
    limit: config.maxRequests,
    remaining,
    resetInSeconds: config.windowSeconds
  };
}

/**
 * Reset rate limit store (used in testing)
 */
export function resetRateLimits(): void {
  rateLimitStore.clear();
}

