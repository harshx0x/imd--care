import { NextRequest, NextResponse } from 'next/server';
import { getSystemHealthReport } from '@/lib/monitoring/health-service';
import { checkRateLimit } from '@/lib/security/rate-limiter';
import { metricsTracker } from '@/lib/monitoring/metrics-tracker';

export async function GET(req: NextRequest) {
  const start = Date.now();

  const rateCheck = checkRateLimit(req, 'health');
  if (!rateCheck.allowed) {
    metricsTracker.recordRequest('/api/status', 'GET', 429, Date.now() - start);
    return NextResponse.json(
      { error: 'Too many requests. Please slow down.' },
      { status: 429, headers: { 'Retry-After': String(rateCheck.resetInSeconds) } }
    );
  }

  try {
    const health = await getSystemHealthReport();
    const duration = Date.now() - start;
    metricsTracker.recordRequest('/api/status', 'GET', 200, duration);

    return NextResponse.json({
      status: health.status,
      openAIConfigured: health.services.aiProviders.openAI.configured,
      model: health.services.aiProviders.openAI.configured
        ? health.services.aiProviders.openAI.model
        : 'synthetic-demo-mode',
      medGemma: {
        configured: health.services.aiProviders.medGemma.configured,
        connected: health.services.aiProviders.medGemma.connected,
        model: health.services.aiProviders.medGemma.model
      },
      demoMode: !health.services.aiProviders.openAI.configured && !health.services.aiProviders.medGemma.connected,
      emergencyHelpline: '112',
      ambulanceHelpline: '108',
      emergencyNumbers: health.services.emergencyTriage.activeNationalNumbers,
      uptimeSeconds: health.uptimeSeconds,
      systemTime: health.timestamp
    });
  } catch {
    const duration = Date.now() - start;
    metricsTracker.recordRequest('/api/status', 'GET', 500, duration);
    return NextResponse.json(
      { error: 'Failed to retrieve system status' },
      { status: 500 }
    );
  }
}
