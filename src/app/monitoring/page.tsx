'use client';

import React, { useState, useEffect, useCallback } from 'react';
import {
  Activity,
  ShieldCheck,
  Clock,
  Cpu,
  FileCheck2,
  AlertTriangle,
  RefreshCw,
  Lock,
  KeyRound,
  CheckCircle2,
  Server,
  Zap
} from 'lucide-react';
import { SystemMetricsReport } from '@/lib/monitoring/metrics-tracker';
import { SystemHealthReport } from '@/lib/monitoring/health-service';

export default function DeveloperMonitoringPage() {
  const [devKey, setDevKey] = useState<string>('imd-dev-hackathon-2026');
  const [inputKey, setInputKey] = useState<string>('imd-dev-hackathon-2026');
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [metrics, setMetrics] = useState<SystemMetricsReport | null>(null);
  const [health, setHealth] = useState<SystemHealthReport | null>(null);
  const [autoRefresh, setAutoRefresh] = useState<boolean>(true);
  const [lastRefreshed, setLastRefreshed] = useState<string>('');

  const fetchTelemetry = useCallback(async (keyToUse: string) => {
    if (!keyToUse) return;

    try {
      // 1. Fetch protected metrics
      const resMetrics = await fetch('/api/monitoring', {
        headers: {
          'x-developer-key': keyToUse
        }
      });

      if (resMetrics.status === 401) {
        setIsAuthorized(false);
        setError('Unauthorized: Invalid Developer Access Key.');
        setLoading(false);
        return;
      }

      if (!resMetrics.ok) {
        setError(`Failed to fetch monitoring metrics (HTTP ${resMetrics.status})`);
        setLoading(false);
        return;
      }

      const dataMetrics = await resMetrics.json();
      setMetrics(dataMetrics.liveMetrics);
      setIsAuthorized(true);
      setError(null);
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('imd_dev_key', keyToUse);
      }

      // 2. Fetch system health
      const resHealth = await fetch('/api/health');
      if (resHealth.ok) {
        const dataHealth = await resHealth.json();
        setHealth(dataHealth);
      }

      setLastRefreshed(new Date().toLocaleTimeString());
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Network error while fetching metrics');
    } finally {
      setLoading(false);
    }
  }, []);

  // Initial fetch and auto-refresh interval
  useEffect(() => {
    let ignore = false;
    const run = async () => {
      if (!ignore) {
        await fetchTelemetry(devKey);
      }
    };
    run();

    let intervalId: NodeJS.Timeout | null = null;
    if (autoRefresh) {
      intervalId = setInterval(() => {
        if (!ignore) fetchTelemetry(devKey);
      }, 5000);
    }

    return () => {
      ignore = true;
      if (intervalId) clearInterval(intervalId);
    };
  }, [devKey, autoRefresh, fetchTelemetry]);

  const handleKeySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDevKey(inputKey.trim());
    fetchTelemetry(inputKey.trim());
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-in fade-in duration-200">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#E6F4F1] text-[#0F766E] text-xs font-bold uppercase tracking-wider mb-2 border border-[#0F766E]/20">
            <Activity className="w-3.5 h-3.5 text-[#0F766E]" />
            <span>Developer Telemetry & Health</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#102A43] tracking-tight">
            Backend Observability Dashboard
          </h1>
          <p className="text-sm text-slate-600 mt-1">
            Real-time API latency, error rates, AI service availability, and clinical document extraction metrics.
          </p>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setAutoRefresh(!autoRefresh)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold border flex items-center gap-1.5 transition ${
              autoRefresh
                ? 'bg-emerald-50 text-emerald-700 border-emerald-300'
                : 'bg-slate-100 text-slate-600 border-slate-300'
            }`}
          >
            <span className={`w-2 h-2 rounded-full ${autoRefresh ? 'bg-emerald-500 animate-pulse' : 'bg-slate-400'}`} />
            <span>{autoRefresh ? 'Live Polling (5s)' : 'Polling Paused'}</span>
          </button>

          <button
            type="button"
            onClick={() => fetchTelemetry(devKey)}
            disabled={loading}
            className="p-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 transition shadow-xs cursor-pointer"
            title="Refresh Metrics"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          </button>
        </div>
      </div>

      {/* Developer Authorization Banner / Key Input */}
      {!isAuthorized && (
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 shadow-xs space-y-4">
          <div className="flex items-start space-x-3">
            <Lock className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-bold text-amber-900">Developer Access Required</h3>
              <p className="text-xs text-amber-800 mt-1">
                This endpoint and page are restricted to authorized hackathon developers to protect infrastructure observability. Enter your server developer key below (Default demo key: <code className="bg-amber-100 px-1.5 py-0.5 rounded font-mono text-amber-900">imd-dev-hackathon-2026</code>).
              </p>
            </div>
          </div>

          <form onSubmit={handleKeySubmit} className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <div className="relative w-full sm:w-96">
              <KeyRound className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="password"
                value={inputKey}
                onChange={(e) => setInputKey(e.target.value)}
                placeholder="Enter DEV_ACCESS_KEY..."
                className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#0F766E] focus:outline-none bg-white font-mono"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto px-5 py-2 bg-[#0F766E] text-white rounded-xl text-xs font-bold hover:bg-[#0D655F] transition shadow-xs cursor-pointer"
            >
              Authorize & Connect
            </button>
          </form>

          {error && (
            <p className="text-xs font-semibold text-rose-600">{error}</p>
          )}
        </div>
      )}

      {/* Main Telemetry Visuals */}
      {isAuthorized && metrics && (
        <div className="space-y-6">
          {/* Key Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Total Requests */}
            <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Total Requests</p>
                <p className="text-2xl font-black text-[#102A43] mt-1">{metrics.totalRequestsHandled}</p>
                <p className="text-[11px] text-slate-500 mt-0.5">{metrics.requestsPerMinute} req / min (live window)</p>
              </div>
              <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <Server className="w-5 h-5" />
              </div>
            </div>

            {/* Overall Latency */}
            <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Response Time</p>
                <div className="flex items-baseline space-x-2 mt-1">
                  <span className="text-2xl font-black text-[#102A43]">{metrics.overallLatency.p50Ms} ms</span>
                  <span className="text-xs text-slate-500 font-medium">p50</span>
                </div>
                <p className="text-[11px] text-slate-500 mt-0.5">p95: {metrics.overallLatency.p95Ms} ms | p99: {metrics.overallLatency.p99Ms} ms</p>
              </div>
              <div className="w-11 h-11 rounded-xl bg-teal-50 text-[#0F766E] flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
            </div>

            {/* Error Rate */}
            <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">API Error Rate</p>
                <p className="text-2xl font-black text-[#102A43] mt-1">{metrics.overallErrorRatePercent}%</p>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  {metrics.overallErrorRatePercent === 0 ? 'Zero active faults' : 'Monitoring error spikes'}
                </p>
              </div>
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                metrics.overallErrorRatePercent > 5 ? 'bg-rose-50 text-rose-600' : 'bg-emerald-50 text-emerald-600'
              }`}>
                {metrics.overallErrorRatePercent > 5 ? <AlertTriangle className="w-5 h-5" /> : <ShieldCheck className="w-5 h-5" />}
              </div>
            </div>

            {/* System Uptime */}
            <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">System Uptime</p>
                <p className="text-2xl font-black text-[#102A43] mt-1">{Math.floor(metrics.uptimeSeconds / 60)}m {metrics.uptimeSeconds % 60}s</p>
                <p className="text-[11px] text-slate-500 mt-0.5">Updated: {lastRefreshed || 'Just now'}</p>
              </div>
              <div className="w-11 h-11 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* AI Providers & Medical RAG Status */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs space-y-4">
            <h2 className="text-base font-bold text-[#102A43] flex items-center gap-2">
              <Cpu className="w-5 h-5 text-[#0F766E]" />
              <span>AI Engine & Medical RAG Providers</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* MedGemma */}
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-700">Google MedGemma</span>
                  {health?.services.aiProviders.medGemma.connected ? (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Connected
                    </span>
                  ) : health?.services.aiProviders.medGemma.configured ? (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800 flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3 text-amber-600" /> Endpoint Unreachable
                    </span>
                  ) : (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-slate-200 text-slate-600">
                      Not Configured
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-600">
                  Model: <span className="font-mono text-slate-800">{health?.services.aiProviders.medGemma.model || 'google/medgemma-2b'}</span>
                </p>
                <p className="text-[11px] text-slate-500">
                  Calls: {metrics.aiServiceActivity.medGemmaCalls} | Errors: {metrics.aiServiceActivity.medGemmaErrors}
                </p>
              </div>

              {/* OpenAI */}
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-700">OpenAI Fallback</span>
                  {health?.services.aiProviders.openAI.configured ? (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Configured
                    </span>
                  ) : (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-slate-200 text-slate-600">
                      Unset (Demo Mode)
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-600">
                  Model: <span className="font-mono text-slate-800">{health?.services.aiProviders.openAI.model || 'gpt-4o-mini'}</span>
                </p>
                <p className="text-[11px] text-slate-500">
                  Calls: {metrics.aiServiceActivity.openAICalls} | Errors: {metrics.aiServiceActivity.openAIErrors}
                </p>
              </div>

              {/* Curated RAG Engine */}
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-700">Curated Clinical RAG</span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Active (Offline-Ready)
                  </span>
                </div>
                <p className="text-xs text-slate-600">
                  Indexed Chunks: <span className="font-bold text-slate-800">{health?.services.vectorStore.totalChunksIndexed || 17}</span> (ICMR/AIIMS/WHO)
                </p>
                <p className="text-[11px] text-slate-500">
                  Synthesized Fallbacks: {metrics.aiServiceActivity.offlineEngineFallbacks}
                </p>
              </div>
            </div>
          </div>

          {/* Per-Endpoint Telemetry Table */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs space-y-4">
            <h2 className="text-base font-bold text-[#102A43] flex items-center gap-2">
              <Server className="w-5 h-5 text-[#0F766E]" />
              <span>Real-Time Endpoint Performance</span>
            </h2>

            {metrics.endpointBreakdown.length === 0 ? (
              <p className="text-xs text-slate-500 italic">No API requests recorded yet in current server session.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold uppercase tracking-wider text-[11px]">
                    <tr>
                      <th className="py-3 px-4">Endpoint</th>
                      <th className="py-3 px-4">Total Hits</th>
                      <th className="py-3 px-4">Errors</th>
                      <th className="py-3 px-4">Error Rate</th>
                      <th className="py-3 px-4">Avg Latency</th>
                      <th className="py-3 px-4">p95 Latency</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
                    {metrics.endpointBreakdown.map((ep) => (
                      <tr key={ep.endpoint} className="hover:bg-slate-50/80 transition">
                        <td className="py-3 px-4 font-mono font-bold text-[#0F766E]">{ep.endpoint}</td>
                        <td className="py-3 px-4">{ep.totalRequests}</td>
                        <td className="py-3 px-4">
                          {ep.errorCount > 0 ? (
                            <span className="text-rose-600 font-bold">{ep.errorCount}</span>
                          ) : (
                            <span className="text-slate-400">0</span>
                          )}
                        </td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                            ep.errorRatePercent > 5 ? 'bg-rose-100 text-rose-700' : 'bg-emerald-100 text-emerald-700'
                          }`}>
                            {ep.errorRatePercent}%
                          </span>
                        </td>
                        <td className="py-3 px-4 font-mono">{ep.avgDurationMs} ms</td>
                        <td className="py-3 px-4 font-mono">{ep.p95DurationMs} ms</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Clinical Document Processing Statistics */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs space-y-4">
            <h2 className="text-base font-bold text-[#102A43] flex items-center gap-2">
              <FileCheck2 className="w-5 h-5 text-[#0F766E]" />
              <span>Medical Report Processing Pipeline</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <p className="text-xs text-slate-500 font-semibold">Total Processed</p>
                <p className="text-xl font-bold text-slate-800 mt-1">{metrics.reportProcessingStats.totalReportsProcessed}</p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <p className="text-xs text-slate-500 font-semibold">Structured PDF Parser</p>
                <p className="text-xl font-bold text-slate-800 mt-1">{metrics.reportProcessingStats.pdfStructuredCount}</p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <p className="text-xs text-slate-500 font-semibold">Tesseract OCR Pipeline</p>
                <p className="text-xl font-bold text-slate-800 mt-1">{metrics.reportProcessingStats.ocrTesseractCount}</p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <p className="text-xs text-slate-500 font-semibold">Validation Rejections</p>
                <p className="text-xl font-bold text-slate-800 mt-1">{metrics.reportProcessingStats.validationRejections}</p>
              </div>
            </div>
          </div>

          {/* Patient Privacy Guarantee */}
          <div className="p-5 rounded-2xl bg-teal-50/70 border border-[#0F766E]/20 flex items-start space-x-3">
            <ShieldCheck className="w-5 h-5 text-[#0F766E] shrink-0 mt-0.5" />
            <div className="text-xs text-slate-700 leading-relaxed">
              <span className="font-bold text-[#0F766E]">Zero Patient Data Telemetry Guarantee:</span> {metrics.privacyNotice} No patient names, telephone numbers, clinical chat messages, or lab values are ever serialized into metrics or server telemetry.
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
