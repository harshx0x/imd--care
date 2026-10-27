import { NextRequest, NextResponse } from 'next/server';
import { getSystemHealthReport } from '@/lib/monitoring/health-service';
import { checkRateLimit } from '@/lib/security/rate-limiter';
import { metricsTracker } from '@/lib/monitoring/metrics-tracker';

export async function GET(req: NextRequest) {
  const start = Date.now();

  const rateCheck = checkRateLimit(req, 'health');
  if (!rateCheck.allowed) {
    metricsTracker.recordRequest('/api/health', 'GET', 429, Date.now() - start);
    return NextResponse.json(
      { error: 'Too many requests. Please slow down.' },
      { status: 429, headers: { 'Retry-After': String(rateCheck.resetInSeconds) } }
    );
  }

  try {
    const report = await getSystemHealthReport();
    const duration = Date.now() - start;
    metricsTracker.recordRequest('/api/health', 'GET', 200, duration);

    return NextResponse.json(report, {
      status: report.status === 'healthy' ? 200 : 503
    });
  } catch (err: unknown) {
    const duration = Date.now() - start;
    metricsTracker.recordRequest('/api/health', 'GET', 500, duration);
    return NextResponse.json(
      {
        status: 'error',
        error: err instanceof Error ? err.message : 'Health check failed'
      },
      { status: 500 }
    );
  }
}

