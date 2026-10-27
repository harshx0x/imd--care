'use client';

import React, { useState } from 'react';
import {
  FileSpreadsheet,
  CheckCircle,
  HelpCircle,
  RefreshCw,
  Sparkles,
  Info,
  ShieldCheck,
  FileText
} from 'lucide-react';
import { SYNTHETIC_LAB_REPORTS } from '@/lib/synthetic-data';
import {
  ReportExplanationRequest,
  ReportExplanationResult,
  LabReportSample,
  Language
} from '@/lib/types';
import { APP_TRANSLATIONS } from '@/lib/translations/app';

interface ReportSimplifierProps {
  language: Language;
}

export function ReportSimplifier({ language }: ReportSimplifierProps) {
  const [selectedSample, setSelectedSample] = useState<LabReportSample | null>(SYNTHETIC_LAB_REPORTS[0]);
  const [testName, setTestName] = useState(SYNTHETIC_LAB_REPORTS[0].testName);
  const [resultValue, setResultValue] = useState(SYNTHETIC_LAB_REPORTS[0].resultValue);
  const [unit, setUnit] = useState(SYNTHETIC_LAB_REPORTS[0].unit);
  const [referenceRange, setReferenceRange] = useState(SYNTHETIC_LAB_REPORTS[0].referenceRange);
  const [clinicalContext, setClinicalContext] = useState('');
  const [loading, setLoading] = useState(false);
  const [explanation, setExplanation] = useState<ReportExplanationResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const t = APP_TRANSLATIONS[language] || APP_TRANSLATIONS.en;

  const handleSelectSample = (sample: LabReportSample) => {
    setSelectedSample(sample);
    setTestName(sample.testName);
    setResultValue(sample.resultValue);
    setUnit(sample.unit);
    setReferenceRange(sample.referenceRange);
    setClinicalContext(`Synthetic example: ${sample.description}`);
    setExplanation(null);
  };

  const handleExplain = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!testName.trim() || !resultValue.trim() || loading) return;

    setError(null);
    setLoading(true);

    try {
      const payload: ReportExplanationRequest = {
        testName: testName.trim(),
        resultValue: resultValue.trim(),
        unit: unit.trim(),
        referenceRange: referenceRange.trim(),
        clinicalContext: clinicalContext.trim(),
        language
      };

      const res = await fetch('/api/reports', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        throw new Error(`Report simplification failed with status: ${res.status}`);
      }

      const data: ReportExplanationResult = await res.json();
      setExplanation(data);
    } catch (err: unknown) {
      console.error('Report simplification error:', err);
      setError(t.reports.errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const getStatusBadge = (status: ReportExplanationResult['status']) => {
    switch (status) {
      case 'below':
        return (
          <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-300">
            {t.reports.statusBadges.below}
          </span>
        );
      case 'above':
        return (
          <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-300">
            {t.reports.statusBadges.above}
          </span>
        );
      case 'normal':
        return (
          <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
            {t.reports.statusBadges.normal}
          </span>
        );
      default:
        return (
          <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-800 border border-slate-300">
            {t.reports.statusBadges.inconclusive}
          </span>
        );
    }
  };

  return (
    <section id="reports" className="py-8 sm:py-12 bg-[#E8F7F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#D9F3EC] text-[#0F766E] text-xs font-bold uppercase tracking-wider border border-[#35B8A6]/30">
            <FileSpreadsheet className="w-3.5 h-3.5 text-[#35B8A6]" />
            <span>{t.reports.sectionBadge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A43]">
            {t.reports.title}
          </h2>
          <p className="text-xs sm:text-sm text-[#64748B]">
            {t.reports.description}
          </p>
        </div>

        {/* Synthetic Sample Selection Strip */}
        <div className="mb-8 bg-white border border-[#CDE8E2] rounded-2xl p-4 sm:p-5 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#243447] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#35B8A6]" />
              {t.reports.sampleStripLabel}
            </span>
            <span className="text-[11px] font-semibold text-[#0F766E] bg-[#D9F3EC] px-2.5 py-0.5 rounded-full border border-[#35B8A6]/30">
              {t.reports.sampleStripBadge}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
            {SYNTHETIC_LAB_REPORTS.map((sample) => {
              const isSelected = selectedSample?.id === sample.id;
              return (
                <button
                  key={sample.id}
                  onClick={() => handleSelectSample(sample)}
                  className={`p-3 rounded-xl border text-left transition flex flex-col justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-[#0F766E] text-white border-[#0F766E] shadow-sm'
                      : 'bg-[#E8F7F5]/50 hover:bg-[#D9F3EC] text-[#243447] border-[#CDE8E2]'
                  }`}
                >
                  <span className={`text-[10px] uppercase font-bold block ${isSelected ? 'text-[#D9F3EC]' : 'text-[#64748B]'}`}>
                    {sample.category.split('/')[0]}
                  </span>
                  <span className="text-xs font-bold mt-1 line-clamp-1">
                    {sample.testName.split('(')[0]}
                  </span>
                  <span className={`text-[11px] mt-2 font-mono font-semibold ${isSelected ? 'text-white' : 'text-[#0F766E]'}`}>
                    {sample.resultValue} {sample.unit}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Form & Output Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form Column */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-[#CDE8E2] p-6 sm:p-7 shadow-sm">
            <h3 className="text-base font-bold text-[#102A43] mb-4 flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#0F766E]" />
              <span>{t.reports.formTitle}</span>
            </h3>

            <form onSubmit={handleExplain} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#243447] mb-1 uppercase tracking-wider">
                  {t.reports.testNameLabel}
                </label>
                <input
                  type="text"
                  value={testName}
                  onChange={(e) => setTestName(e.target.value)}
                  placeholder={t.reports.testNamePlaceholder}
                  required
                  className="w-full bg-[#E8F7F5]/30 border border-[#CDE8E2] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#243447] focus:ring-2 focus:ring-[#0F766E] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#243447] mb-1 uppercase tracking-wider">
                    {t.reports.resultValueLabel}
                  </label>
                  <input
                    type="text"
                    value={resultValue}
                    onChange={(e) => setResultValue(e.target.value)}
                    placeholder={t.reports.resultValuePlaceholder}
                    required
                    className="w-full bg-[#E8F7F5]/30 border border-[#CDE8E2] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#243447] focus:ring-2 focus:ring-[#0F766E] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#243447] mb-1 uppercase tracking-wider">
                    {t.reports.unitLabel}
                  </label>
                  <input
                    type="text"
                    value={unit}
                    onChange={(e) => setUnit(e.target.value)}
                    placeholder={t.reports.unitPlaceholder}
                    required
                    className="w-full bg-[#E8F7F5]/30 border border-[#CDE8E2] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#243447] focus:ring-2 focus:ring-[#0F766E] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#243447] mb-1 uppercase tracking-wider">
                  {t.reports.rangeLabel}
                </label>
                <input
                  type="text"
                  value={referenceRange}
                  onChange={(e) => setReferenceRange(e.target.value)}
                  placeholder={t.reports.rangePlaceholder}
                  className="w-full bg-[#E8F7F5]/30 border border-[#CDE8E2] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#243447] focus:ring-2 focus:ring-[#0F766E] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#243447] mb-1 uppercase tracking-wider">
                  {t.reports.contextLabel}
                </label>
                <input
                  type="text"
                  value={clinicalContext}
                  onChange={(e) => setClinicalContext(e.target.value)}
                  placeholder={t.reports.contextPlaceholder}
                  className="w-full bg-[#E8F7F5]/30 border border-[#CDE8E2] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#243447] focus:ring-2 focus:ring-[#0F766E] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading || !testName.trim() || !resultValue.trim()}
                className="w-full py-3.5 bg-[#0F766E] hover:bg-[#0D655F] active:bg-[#0B544F] disabled:bg-slate-300 text-white font-bold text-sm rounded-xl shadow-md transition transform active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
              >
                {loading ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>{t.reports.loadingCta}</span>
                  </>
                ) : (
                  <>
                    <FileSpreadsheet className="w-4 h-4" />
                    <span>{t.reports.submitCta}</span>
                  </>
                )}
              </button>

              {error && (
                <p className="text-xs text-red-700 bg-[#FEE2E2] p-2.5 rounded-lg border border-red-200">
                  {error}
                </p>
              )}
            </form>
          </div>

          {/* Explanation Output Column */}
          <div className="lg:col-span-7">
            {!explanation ? (
              <div className="bg-white rounded-2xl border border-[#CDE8E2] p-8 text-center space-y-4 shadow-sm flex flex-col items-center justify-center min-h-[380px]">
                <div className="w-16 h-16 rounded-2xl bg-[#D9F3EC] text-[#0F766E] flex items-center justify-center shadow-inner">
                  <FileSpreadsheet className="w-8 h-8" />
                </div>
                <div className="max-w-md">
                  <h4 className="text-base font-bold text-[#102A43]">
                    {t.reports.awaitingTitle}
                  </h4>
                  <p className="text-xs text-[#64748B] mt-1.5 leading-relaxed">
                    {t.reports.awaitingDesc}
                  </p>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-[#CDE8E2] p-6 sm:p-7 shadow-sm space-y-5 animate-in fade-in duration-200">
                {/* Result Header & Status */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#CDE8E2]/60 gap-3">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#64748B]">
                      {t.reports.reportSummaryBadge}
                    </span>
                    <h3 className="text-lg font-bold text-[#102A43]">
                      {explanation.testName}
                    </h3>
                    <p className="text-xs text-[#243447] mt-0.5 font-medium">
                      {t.reports.enteredLabel} <strong>{resultValue} {unit}</strong> ({t.reports.rangeLabelText} {referenceRange || t.reports.defaultRangeFallback})
                    </p>
                  </div>
                  <div>{getStatusBadge(explanation.status)}</div>
                </div>

                {/* Plain-Language Explanation */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#102A43] flex items-center gap-1.5">
                    <Info className="w-4 h-4 text-[#0F766E]" />
                    {t.reports.plainLanguageHeader}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#243447] leading-relaxed bg-[#E8F7F5]/50 p-4 rounded-xl border border-[#CDE8E2]">
                    {explanation.plainLanguageExplanation}
                  </p>
                </div>

                {/* Factors to Consider */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#102A43]">
                    {t.reports.factorsHeader}
                  </h4>
                  <ul className="text-xs text-[#243447] space-y-1.5 pl-1">
                    {explanation.factorsToConsider.map((factor, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[#0F766E] shrink-0 mt-0.5" />
                        <span>{factor}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Questions for Doctor in Soft Mint */}
                <div className="space-y-2 bg-[#D9F3EC]/70 p-4 rounded-xl border border-[#CDE8E2]">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F766E] flex items-center gap-1.5">
                    <HelpCircle className="w-4 h-4 text-[#35B8A6]" />
                    {t.reports.questionsHeader}
                  </h4>
                  <ul className="text-xs text-[#243447] space-y-2">
                    {explanation.questionsForDoctor.map((q, i) => (
                      <li key={i} className="flex items-start gap-2 italic">
                        <span className="font-bold text-[#0F766E] not-italic shrink-0">{i + 1}.</span>
                        <span>{q}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Educational Disclaimer */}
                <div className="p-3 bg-white rounded-xl border border-[#CDE8E2] text-[11px] text-[#64748B] flex items-start gap-2 shadow-2xs">
                  <ShieldCheck className="w-4 h-4 text-[#0F766E] shrink-0 mt-0.5" />
                  <p>
                    <strong>{t.reports.disclaimerPrefix}</strong> {explanation.disclaimer} {t.reports.disclaimerSuffix}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
