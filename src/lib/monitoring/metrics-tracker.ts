export interface RequestMetric {
  endpoint: string;
  method: string;
  statusCode: number;
  durationMs: number;
  timestamp: number;
}

export interface EndpointSummary {
  endpoint: string;
  totalRequests: number;
  errorCount: number;
  errorRatePercent: number;
  avgDurationMs: number;
  p50DurationMs: number;
  p95DurationMs: number;
}

export interface SystemMetricsReport {
  uptimeSeconds: number;
  totalRequestsHandled: number;
  requestsPerMinute: number;
  overallErrorRatePercent: number;
  overallLatency: {
    avgMs: number;
    p50Ms: number;
    p95Ms: number;
    p99Ms: number;
  };
  endpointBreakdown: EndpointSummary[];
  aiServiceActivity: {
    medGemmaCalls: number;
    medGemmaErrors: number;
    openAICalls: number;
    openAIErrors: number;
    offlineEngineFallbacks: number;
  };
  reportProcessingStats: {
    totalReportsProcessed: number;
    pdfStructuredCount: number;
    ocrTesseractCount: number;
    validationRejections: number;
  };
  privacyNotice: string;
}

class MetricsTracker {
  private static instance: MetricsTracker;
  private readonly maxBufferSize = 2000;
  private ringBuffer: RequestMetric[] = [];
  private startTime = Date.now();

  private aiStats = {
    medGemmaCalls: 0,
    medGemmaErrors: 0,
    openAICalls: 0,
    openAIErrors: 0,
    offlineEngineFallbacks: 0
  };

  private reportStats = {
    totalReportsProcessed: 0,
    pdfStructuredCount: 0,
    ocrTesseractCount: 0,
    validationRejections: 0
  };

  public static getInstance(): MetricsTracker {
    if (!MetricsTracker.instance) {
      MetricsTracker.instance = new MetricsTracker();
    }
    return MetricsTracker.instance;
  }

  /**
   * Records an API request.
   * STRICT PRIVACY: Only stores endpoint, method, statusCode, and duration.
   * NO patient data, message text, or user IDs are accepted.
   */
  public recordRequest(endpoint: string, method: string, statusCode: number, durationMs: number): void {
    const metric: RequestMetric = {
      endpoint,
      method,
      statusCode,
      durationMs: Math.max(0, Math.round(durationMs)),
      timestamp: Date.now()
    };

    if (this.ringBuffer.length >= this.maxBufferSize) {
      this.ringBuffer.shift();
    }
    this.ringBuffer.push(metric);
  }

  public recordAICall(provider: 'medgemma' | 'openai' | 'offline', isError: boolean = false): void {
    if (provider === 'medgemma') {
      this.aiStats.medGemmaCalls++;
      if (isError) this.aiStats.medGemmaErrors++;
    } else if (provider === 'openai') {
      this.aiStats.openAICalls++;
      if (isError) this.aiStats.openAIErrors++;
    } else {
      this.aiStats.offlineEngineFallbacks++;
    }
  }

  public recordReportProcessed(method: 'pdf_text_structured' | 'ocr_tesseract', rejected: boolean = false): void {
    if (rejected) {
      this.reportStats.validationRejections++;
    } else {
      this.reportStats.totalReportsProcessed++;
      if (method === 'pdf_text_structured') {
        this.reportStats.pdfStructuredCount++;
      } else {
        this.reportStats.ocrTesseractCount++;
      }
    }
  }

  /**
   * Generates real system metrics aggregated from live recorded requests.
   */
  public getMetricsReport(): SystemMetricsReport {
    const now = Date.now();
    const uptimeSeconds = Math.round((now - this.startTime) / 1000);
    const totalRequests = this.ringBuffer.length;

    // Requests in the last 60 seconds
    const recentRequests = this.ringBuffer.filter((m) => now - m.timestamp < 60 * 1000);
    const requestsPerMinute = recentRequests.length;

    // Durations for percentiles
    const allDurations = this.ringBuffer.map((m) => m.durationMs).sort((a, b) => a - b);
    const avgMs = allDurations.length ? Math.round(allDurations.reduce((a, b) => a + b, 0) / allDurations.length) : 0;
    const p50Ms = allDurations.length ? allDurations[Math.floor(allDurations.length * 0.5)] : 0;
    const p95Ms = allDurations.length ? allDurations[Math.floor(allDurations.length * 0.95)] : 0;
    const p99Ms = allDurations.length ? allDurations[Math.floor(allDurations.length * 0.99)] : 0;

    const errorCount = this.ringBuffer.filter((m) => m.statusCode >= 400).length;
    const overallErrorRate = totalRequests ? parseFloat(((errorCount / totalRequests) * 100).toFixed(1)) : 0;

    // Per-endpoint grouping
    const endpointMap = new Map<string, RequestMetric[]>();
    for (const metric of this.ringBuffer) {
      const list = endpointMap.get(metric.endpoint) || [];
      list.push(metric);
      endpointMap.set(metric.endpoint, list);
    }

    const endpointBreakdown: EndpointSummary[] = [];
    endpointMap.forEach((metrics, endpoint) => {
      const epDurations = metrics.map((m) => m.durationMs).sort((a, b) => a - b);
      const epErrors = metrics.filter((m) => m.statusCode >= 400).length;
      const epAvg = Math.round(epDurations.reduce((a, b) => a + b, 0) / epDurations.length);

      endpointBreakdown.push({
        endpoint,
        totalRequests: metrics.length,
        errorCount: epErrors,
        errorRatePercent: parseFloat(((epErrors / metrics.length) * 100).toFixed(1)),
        avgDurationMs: epAvg,
        p50DurationMs: epDurations[Math.floor(epDurations.length * 0.5)] || 0,
        p95DurationMs: epDurations[Math.floor(epDurations.length * 0.95)] || 0
      });
    });

    return {
      uptimeSeconds,
      totalRequestsHandled: totalRequests,
      requestsPerMinute,
      overallErrorRatePercent: overallErrorRate,
      overallLatency: { avgMs, p50Ms, p95Ms, p99Ms },
      endpointBreakdown: endpointBreakdown.sort((a, b) => b.totalRequests - a.totalRequests),
      aiServiceActivity: { ...this.aiStats },
      reportProcessingStats: { ...this.reportStats },
      privacyNotice: 'Zero patient data or clinical questions are stored in telemetry metrics. All metrics are aggregated.'
    };
  }

  public reset(): void {
    this.ringBuffer = [];
    this.startTime = Date.now();
    this.aiStats = {
      medGemmaCalls: 0,
      medGemmaErrors: 0,
      openAICalls: 0,
      openAIErrors: 0,
      offlineEngineFallbacks: 0
    };
    this.reportStats = {
      totalReportsProcessed: 0,
      pdfStructuredCount: 0,
      ocrTesseractCount: 0,
      validationRejections: 0
    };
  }
}

export const metricsTracker = MetricsTracker.getInstance();

