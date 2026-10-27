import { NextRequest, NextResponse } from 'next/server';
import { isDeveloperAuthorized } from '@/lib/auth/auth-service';
import { checkRateLimit } from '@/lib/security/rate-limiter';
import { metricsTracker } from '@/lib/monitoring/metrics-tracker';
import { getAIServicesStatus } from '@/lib/ai/ai-service';

export async function GET(req: NextRequest) {
  const start = Date.now();

  // 1. Enforce Developer Authorization Check
  if (!isDeveloperAuthorized(req)) {
    metricsTracker.recordRequest('/api/monitoring', 'GET', 401, Date.now() - start);
    return NextResponse.json(
      {
        error: 'Developer authorization required.',
        message: 'Please provide a valid x-developer-key header or devKey query parameter.'
      },
      { status: 401 }
    );
  }

  // 2. Enforce Rate Limiting
  const rateCheck = checkRateLimit(req, 'monitoring');
  if (!rateCheck.allowed) {
    metricsTracker.recordRequest('/api/monitoring', 'GET', 429, Date.now() - start);
    return NextResponse.json(
      { error: 'Too many monitoring requests. Please slow down.' },
      { status: 429, headers: { 'Retry-After': String(rateCheck.resetInSeconds) } }
    );
  }

  try {
    const metrics = metricsTracker.getMetricsReport();
    const aiStatus = await getAIServicesStatus();
    const duration = Date.now() - start;
    metricsTracker.recordRequest('/api/monitoring', 'GET', 200, duration);

    return NextResponse.json({
      success: true,
      timestamp: new Date().toISOString(),
      liveMetrics: metrics,
      aiProviderStatus: aiStatus,
      serverEnvironment: process.env.NODE_ENV || 'development'
    });
  } catch (err: unknown) {
    const duration = Date.now() - start;
    metricsTracker.recordRequest('/api/monitoring', 'GET', 500, duration);
    return NextResponse.json(
      {
        error: 'Failed to generate developer monitoring metrics',
        details: err instanceof Error ? err.message : 'Internal error'
      },
      { status: 500 }
    );
  }
}

