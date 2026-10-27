'use client';

import React, { useState } from 'react';
import {
  FileSpreadsheet,
  CheckCircle,
  AlertCircle,
  HelpCircle,
  ArrowRight,
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
      setError('Unable to simplify lab report. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  const getStatusBadge = (status: ReportExplanationResult['status']) => {
    switch (status) {
      case 'below':
        return (
          <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-300">
            Below Standard Reference Range
          </span>
        );
      case 'above':
        return (
          <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-300">
            Above Standard Reference Range
          </span>
        );
      case 'normal':
        return (
          <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
            Within Standard Reference Range
          </span>
        );
      default:
        return (
          <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-800 border border-slate-300">
            Reference Range Comparison Pending
          </span>
        );
    }
  };

  return (
    <section id="reports" className="py-16 sm:py-20 bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#DDF5EF] text-[#0F766E] text-xs font-bold uppercase tracking-wider">
            <FileSpreadsheet className="w-3.5 h-3.5" />
            <span>Biomarker Translation Engine</span>
          </div>
          <h2 className="text-3xl font-extrabold text-[#102A43]">
            {language === 'hi' ? 'मेडिकल रिपोर्ट सरलीकरण' : language === 'mr' ? 'वैद्यकीय अहवाल विश्लेषण' : 'Medical Report Simplifier'}
          </h2>
          <p className="text-xs sm:text-sm text-[#486581]">
            Demystify diagnostic lab numbers. Get clear layman explanations and empowered questions for your next doctor appointment.
          </p>
        </div>

        {/* Synthetic Sample Selection Strip */}
        <div className="mb-8 bg-[#F8FAFC] border border-slate-200 rounded-2xl p-4 sm:p-5">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#0F766E]" />
              Choose a Ready-to-Use Synthetic Sample Report:
            </span>
            <span className="text-[11px] font-semibold text-emerald-800 bg-[#DDF5EF] px-2.5 py-0.5 rounded-full border border-[#0F766E]/20">
              100% Synthetic & Confidential
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
                      : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-200'
                  }`}
                >
                  <span className={`text-[10px] uppercase font-bold block ${isSelected ? 'text-[#DDF5EF]' : 'text-slate-400'}`}>
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
          <div className="lg:col-span-5 bg-[#F8FAFC] rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs">
            <h3 className="text-base font-bold text-[#102A43] mb-4 flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#0F766E]" />
              <span>Lab Test Input Details</span>
            </h3>

            <form onSubmit={handleExplain} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">
                  Test Name *
                </label>
                <input
                  type="text"
                  value={testName}
                  onChange={(e) => setTestName(e.target.value)}
                  placeholder="e.g. Hemoglobin, LDL Cholesterol, TSH"
                  required
                  className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 focus:ring-2 focus:ring-[#0F766E] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">
                    Result Value *
                  </label>
                  <input
                    type="text"
                    value={resultValue}
                    onChange={(e) => setResultValue(e.target.value)}
                    placeholder="e.g. 10.2, 148"
                    required
                    className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 focus:ring-2 focus:ring-[#0F766E] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">
                    Unit *
                  </label>
                  <input
                    type="text"
                    value={unit}
                    onChange={(e) => setUnit(e.target.value)}
                    placeholder="e.g. g/dL, mg/dL, %"
                    required
                    className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 focus:ring-2 focus:ring-[#0F766E] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">
                  Laboratory Reference Range
                </label>
                <input
                  type="text"
                  value={referenceRange}
                  onChange={(e) => setReferenceRange(e.target.value)}
                  placeholder="e.g. 12.0 - 15.5 g/dL (Adult Female)"
                  className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 focus:ring-2 focus:ring-[#0F766E] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">
                  Clinical Context / Notes (Optional)
                </label>
                <input
                  type="text"
                  value={clinicalContext}
                  onChange={(e) => setClinicalContext(e.target.value)}
                  placeholder="e.g. Fasting test, routine wellness review"
                  className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 focus:ring-2 focus:ring-[#0F766E] focus:outline-none"
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
                    <span>Analyzing Lab Biomarker...</span>
                  </>
                ) : (
                  <>
                    <FileSpreadsheet className="w-4 h-4" />
                    <span>Explain This Lab Test</span>
                  </>
                )}
              </button>

              {error && (
                <p className="text-xs text-red-600 bg-red-50 p-2.5 rounded-lg border border-red-200">
                  {error}
                </p>
              )}
            </form>
          </div>

          {/* Explanation Output Column */}
          <div className="lg:col-span-7">
            {!explanation ? (
              <div className="bg-[#F8FAFC] rounded-2xl border border-slate-200 p-8 text-center space-y-4 shadow-xs flex flex-col items-center justify-center min-h-[380px]">
                <div className="w-16 h-16 rounded-2xl bg-[#DDF5EF] text-[#0F766E] flex items-center justify-center shadow-inner">
                  <FileSpreadsheet className="w-8 h-8" />
                </div>
                <div className="max-w-md">
                  <h4 className="text-base font-bold text-[#102A43]">
                    Ready to Simplify Your Lab Report
                  </h4>
                  <p className="text-xs text-[#486581] mt-1.5 leading-relaxed">
                    Select one of the synthetic samples above or type in your test values. Click &quot;Explain This Lab Test&quot; to generate an accessible summary and doctor-visit questions.
                  </p>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-sm space-y-5 animate-in fade-in duration-200">
                {/* Result Header & Status */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-3">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400">
                      Report Explanation
                    </span>
                    <h3 className="text-lg font-bold text-[#102A43]">
                      {explanation.testName}
                    </h3>
                    <p className="text-xs text-slate-600 mt-0.5 font-medium">
                      Entered: <strong>{resultValue} {unit}</strong> (Reference Range: {referenceRange || 'Standard Lab Range'})
                    </p>
                  </div>
                  <div>{getStatusBadge(explanation.status)}</div>
                </div>

                {/* Plain-Language Explanation */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                    <Info className="w-4 h-4 text-[#0F766E]" />
                    What this test means in plain language:
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-[#F8FAFC] p-4 rounded-xl border border-slate-100">
                    {explanation.plainLanguageExplanation}
                  </p>
                </div>

                {/* Factors to Consider */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Everyday factors that can influence this result:
                  </h4>
                  <ul className="text-xs text-slate-700 space-y-1.5 pl-1">
                    {explanation.factorsToConsider.map((factor, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[#0F766E] shrink-0 mt-0.5" />
                        <span>{factor}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Questions for Doctor */}
                <div className="space-y-2 bg-[#DDF5EF]/40 p-4 rounded-xl border border-[#0F766E]/20">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F766E] flex items-center gap-1.5">
                    <HelpCircle className="w-4 h-4" />
                    Recommended Questions to Ask Your Doctor:
                  </h4>
                  <ul className="text-xs text-slate-800 space-y-2">
                    {explanation.questionsForDoctor.map((q, i) => (
                      <li key={i} className="flex items-start gap-2 italic">
                        <span className="font-bold text-[#0F766E] not-italic shrink-0">{i + 1}.</span>
                        <span>{q}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Educational Disclaimer */}
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-[11px] text-slate-500 flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#0F766E] shrink-0 mt-0.5" />
                  <p>
                    <strong>Synthetic Educational Interpretation:</strong> {explanation.disclaimer} Always present your original diagnostic report to a registered medical practitioner.
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
