'use client';

import React, { useState } from 'react';
import {
  Stethoscope,
  AlertTriangle,
  Clock,
  ShieldCheck,
  CheckCircle,
  RefreshCw,
  PhoneCall,
  Activity,
  Info
} from 'lucide-react';
import { SymptomRequest, SymptomResult, Language } from '@/lib/types';
import { checkEmergencySymptoms } from '@/lib/emergency';
import { APP_TRANSLATIONS } from '@/lib/translations/app';

interface SymptomGuidanceProps {
  language: Language;
  openEmergencyModal: () => void;
}

export function SymptomGuidance({ language, openEmergencyModal }: SymptomGuidanceProps) {
  const [symptom, setSymptom] = useState('');
  const [duration, setDuration] = useState('1-3 days');
  const [severity, setSeverity] = useState<'mild' | 'moderate' | 'severe'>('mild');
  const [ageGroup, setAgeGroup] = useState('Young Adult (18-39)');
  const [existingConditions, setExistingConditions] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<SymptomResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [immediateEmergencyWarning, setImmediateEmergencyWarning] = useState<string | null>(null);

  const t = APP_TRANSLATIONS[language] || APP_TRANSLATIONS.en;

  const quickSymptoms: Record<Language, { label: string; text: string }[]> = {
    en: [
      { label: 'Tension Headache', text: 'Dull throbbing tension headache across forehead with eye strain' },
      { label: 'Seasonal Dry Cough', text: 'Persistent dry cough and mild scratchy throat for 3 days' },
      { label: 'Acid Reflux / Heartburn', text: 'Burning sensation in upper chest after eating heavy spicy dinner' },
      { label: 'Morning Knee Stiffness', text: 'Mild joint stiffness in both knees in the morning, eases after walking' }
    ],
    hi: [
      { label: 'तनाव सिरदर्द', text: 'माथे पर हल्का भारीपन और तनाव के साथ सिरदर्द' },
      { label: 'मौसमी सूखी खांसी', text: '3 दिनों से लगातार सूखी खांसी और गले में खराश' },
      { label: 'पेट में जलन / एसिडिटी', text: 'भारी या तीखा खाना खाने के बाद सीने के ऊपरी हिस्से में जलन' },
      { label: 'सुबह जोड़ों में अकड़न', text: 'सुबह उठने पर घुटनों में हल्की अकड़न जो थोड़ा चलने पर ठीक होती है' }
    ],
    mr: [
      { label: 'डोकेदुखी आणि थकवा', text: 'कामाच्या ताणामुळे कपाळावर आणि डोळ्यांवर हलकी डोकेदुखी' },
      { label: 'कोरडा खोकला', text: '३ दिवसांपासून घशात खवखव आणि कोरडा खोकला' },
      { label: 'ॲसिडिटी / छातीत जळजळ', text: 'मसालेदार जेवणानंतर छातीच्या वरच्या भागात जळजळ होणे' }
    ]
  };

  const handleQuickSymptom = (text: string) => {
    setSymptom(text);
    setImmediateEmergencyWarning(null);
  };

  const handleEvaluate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!symptom.trim() || loading) return;

    setError(null);
    setImmediateEmergencyWarning(null);

    // Conservative Client-Side Emergency Check
    const emergencyEval = checkEmergencySymptoms(symptom);
    if (emergencyEval.isEmergency) {
      setImmediateEmergencyWarning(
        emergencyEval.reason ||
          (language === 'hi'
            ? 'गंभीर आपातकालीन चेतावनी पहचानी गई। कृपया तुरंत 112 / 108 पर संपर्क करें।'
            : language === 'mr'
            ? 'तातडीची वैद्यकीय आणीबाणी आढळली. कृपया त्वरित 112 / 108 वर संपर्क साधा.'
            : 'Critical emergency warning detected. Please contact emergency services (112 / 108) immediately.')
      );
      openEmergencyModal();
      return;
    }

    setLoading(true);

    try {
      const payload: SymptomRequest = {
        symptom: symptom.trim(),
        duration,
        severity,
        ageGroup,
        existingConditions: existingConditions.trim(),
        language
      };

      const res = await fetch('/api/symptoms', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        throw new Error(`Evaluation failed with status ${res.status}`);
      }

      const data: SymptomResult = await res.json();
      setResult(data);

      if (data.isEmergency) {
        openEmergencyModal();
      }
    } catch (err: unknown) {
      console.error('Symptom evaluation error:', err);
      setError(t.symptoms.errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setResult(null);
    setImmediateEmergencyWarning(null);
    setError(null);
  };

  return (
    <section id="symptoms" className="py-8 sm:py-12 bg-[#E8F7F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#D9F3EC] text-[#0F766E] text-xs font-bold uppercase tracking-wider border border-[#35B8A6]/30">
            <Stethoscope className="w-3.5 h-3.5 text-[#35B8A6]" />
            <span>{t.symptoms.sectionBadge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A43]">
            {t.symptoms.title}
          </h2>
          <p className="text-xs sm:text-sm text-[#64748B]">
            {t.symptoms.description}
          </p>
        </div>

        {/* Immediate Emergency Alert Banner */}
        {immediateEmergencyWarning && (
          <div className="mb-8 p-5 rounded-2xl bg-[#FEE2E2] border-2 border-red-500 text-red-950 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4 animate-in fade-in duration-200">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-xl bg-red-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                <AlertTriangle className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="font-black text-base tracking-wide text-red-900">
                  {t.symptoms.emergencyWarningTitle}
                </h3>
                <p className="text-xs text-red-800 mt-0.5">{immediateEmergencyWarning}</p>
                <p className="text-xs text-red-900 font-bold mt-1">
                  {t.symptoms.emergencyNumbersText}
                </p>
              </div>
            </div>
            <button
              onClick={openEmergencyModal}
              className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs rounded-xl shadow-xs shrink-0 flex items-center gap-1.5 cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" />
              <span>{t.symptoms.openEmergencyBtn}</span>
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Form Column */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-[#CDE8E2] p-6 sm:p-7 shadow-sm">
            <h3 className="text-base font-bold text-[#102A43] mb-4 flex items-center gap-2">
              <Activity className="w-5 h-5 text-[#0F766E]" />
              <span>{t.symptoms.formTitle}</span>
            </h3>

            <form onSubmit={handleEvaluate} className="space-y-4">
              {/* Symptom Input */}
              <div>
                <label className="block text-xs font-bold text-[#243447] mb-1.5 uppercase tracking-wider">
                  {t.symptoms.symptomLabel}
                </label>
                <textarea
                  value={symptom}
                  onChange={(e) => setSymptom(e.target.value)}
                  placeholder={t.symptoms.symptomPlaceholder}
                  rows={3}
                  required
                  className="w-full bg-[#E8F7F5]/40 border border-[#CDE8E2] rounded-xl p-3 text-xs sm:text-sm text-[#243447] focus:outline-none focus:ring-2 focus:ring-[#0F766E] focus:border-transparent transition resize-none"
                />
              </div>

              {/* Quick Prompt Chips */}
              <div>
                <span className="text-[10px] uppercase font-bold text-[#64748B] block mb-1.5">
                  {t.symptoms.scenarioLabel}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {quickSymptoms[language]?.map((item, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleQuickSymptom(item.text)}
                      className="text-[11px] bg-[#D9F3EC]/70 hover:bg-[#0F766E] hover:text-white text-[#0F766E] px-2.5 py-1 rounded-lg border border-[#CDE8E2] font-medium transition cursor-pointer"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Duration and Severity Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Duration */}
                <div>
                  <label className="block text-xs font-bold text-[#243447] mb-1.5 uppercase tracking-wider">
                    {t.symptoms.durationLabel}
                  </label>
                  <select
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="w-full bg-white border border-[#CDE8E2] rounded-xl px-3 py-2 text-xs sm:text-sm text-[#243447] focus:ring-2 focus:ring-[#0F766E] focus:outline-none"
                  >
                    <option value="Less than 24 hours">{t.symptoms.durations.less24h}</option>
                    <option value="1-3 days">{t.symptoms.durations.days1to3}</option>
                    <option value="4-7 days">{t.symptoms.durations.days4to7}</option>
                    <option value="More than 1 week">{t.symptoms.durations.weekPlus}</option>
                    <option value="Chronic (> 1 month)">{t.symptoms.durations.chronic}</option>
                  </select>
                </div>

                {/* Severity */}
                <div>
                  <label className="block text-xs font-bold text-[#243447] mb-1.5 uppercase tracking-wider">
                    {t.symptoms.severityLabel}
                  </label>
                  <div className="grid grid-cols-3 gap-1 bg-[#E8F7F5] p-1 rounded-xl border border-[#CDE8E2]">
                    {(['mild', 'moderate', 'severe'] as const).map((sev) => {
                      const label =
                        sev === 'mild'
                          ? t.symptoms.severities.mild
                          : sev === 'moderate'
                          ? t.symptoms.severities.moderate
                          : t.symptoms.severities.severe;

                      return (
                        <button
                          key={sev}
                          type="button"
                          onClick={() => setSeverity(sev)}
                          className={`py-1.5 text-xs font-semibold rounded-lg capitalize transition cursor-pointer ${
                            severity === sev
                              ? sev === 'severe'
                                ? 'bg-red-600 text-white shadow-xs'
                                : sev === 'moderate'
                                ? 'bg-amber-500 text-white shadow-xs'
                                : 'bg-[#0F766E] text-white shadow-xs'
                              : 'text-[#64748B] hover:text-[#243447]'
                          }`}
                        >
                          {label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Age Group and Optional Conditions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#243447] mb-1.5 uppercase tracking-wider">
                    {t.symptoms.ageGroupLabel}
                  </label>
                  <select
                    value={ageGroup}
                    onChange={(e) => setAgeGroup(e.target.value)}
                    className="w-full bg-white border border-[#CDE8E2] rounded-xl px-3 py-2 text-xs sm:text-sm text-[#243447] focus:ring-2 focus:ring-[#0F766E] focus:outline-none"
                  >
                    <option value="Child (0-12)">{t.symptoms.ageGroups.child}</option>
                    <option value="Adolescent (13-17)">{t.symptoms.ageGroups.adolescent}</option>
                    <option value="Young Adult (18-39)">{t.symptoms.ageGroups.youngAdult}</option>
                    <option value="Adult (40-59)">{t.symptoms.ageGroups.adult}</option>
                    <option value="Senior (60+)">{t.symptoms.ageGroups.senior}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#243447] mb-1.5 uppercase tracking-wider">
                    {t.symptoms.conditionsLabel}
                  </label>
                  <input
                    type="text"
                    value={existingConditions}
                    onChange={(e) => setExistingConditions(e.target.value)}
                    placeholder={t.symptoms.conditionsPlaceholder}
                    className="w-full bg-white border border-[#CDE8E2] rounded-xl px-3 py-2 text-xs sm:text-sm text-[#243447] focus:ring-2 focus:ring-[#0F766E] focus:outline-none"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={loading || !symptom.trim()}
                className="w-full py-3.5 bg-[#0F766E] hover:bg-[#0D655F] active:bg-[#0B544F] disabled:bg-slate-300 text-white font-bold text-sm rounded-xl shadow-md transition transform active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
              >
                {loading ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>{t.symptoms.loadingCta}</span>
                  </>
                ) : (
                  <>
                    <Stethoscope className="w-4 h-4" />
                    <span>{t.symptoms.submitCta}</span>
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

          {/* Right Results Column */}
          <div className="lg:col-span-7 space-y-5">
            {!result ? (
              <div className="bg-white rounded-2xl border border-[#CDE8E2] p-8 text-center space-y-4 shadow-sm flex flex-col items-center justify-center min-h-[380px]">
                <div className="w-16 h-16 rounded-2xl bg-[#D9F3EC] text-[#0F766E] flex items-center justify-center shadow-inner">
                  <Stethoscope className="w-8 h-8" />
                </div>
                <div className="max-w-md">
                  <h4 className="text-base font-bold text-[#102A43]">
                    {t.symptoms.awaitingTitle}
                  </h4>
                  <p className="text-xs text-[#64748B] mt-1.5 leading-relaxed">
                    {t.symptoms.awaitingDesc}
                  </p>
                </div>
                <div className="pt-2 flex items-center gap-2 text-[11px] text-[#64748B]">
                  <ShieldCheck className="w-4 h-4 text-[#0F766E]" />
                  <span>{t.symptoms.awaitingSafety}</span>
                </div>
              </div>
            ) : (
              <div className="space-y-4 animate-in fade-in duration-200">
                {/* Result Controls Header */}
                <div className="flex items-center justify-between bg-white px-5 py-3 rounded-xl border border-[#CDE8E2] shadow-xs">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-bold text-[#102A43]">{t.symptoms.summaryHeader}</span>
                    {result.isDemo && (
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                        {t.symptoms.demoBadge}
                      </span>
                    )}
                  </div>
                  <button
                    onClick={resetForm}
                    className="text-xs text-[#0F766E] hover:underline font-semibold flex items-center gap-1 cursor-pointer"
                  >
                    <RefreshCw className="w-3 h-3 text-[#35B8A6]" />
                    <span>{t.symptoms.evaluateNewBtn}</span>
                  </button>
                </div>

                {/* 4 Organized Guidance Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Card 1: Possible Explanations */}
                  <div className="bg-white rounded-xl p-5 border border-[#CDE8E2] shadow-xs space-y-3">
                    <div className="flex items-center space-x-2 text-[#0F766E]">
                      <Info className="w-4 h-4" />
                      <h4 className="font-bold text-xs uppercase tracking-wider text-[#102A43]">
                        {t.symptoms.card1Title}
                      </h4>
                    </div>
                    <ul className="text-xs text-[#243447] space-y-2">
                      {result.possibleExplanations.map((exp, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0F766E] shrink-0 mt-1.5" />
                          <span>{exp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card 2: General Self-Care */}
                  <div className="bg-white rounded-xl p-5 border border-[#CDE8E2] shadow-xs space-y-3">
                    <div className="flex items-center space-x-2 text-[#35B8A6]">
                      <CheckCircle className="w-4 h-4" />
                      <h4 className="font-bold text-xs uppercase tracking-wider text-[#102A43]">
                        {t.symptoms.card2Title}
                      </h4>
                    </div>
                    <ul className="text-xs text-[#243447] space-y-2">
                      {result.selfCareAdvice.map((care, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#35B8A6] shrink-0 mt-1.5" />
                          <span>{care}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card 3: When to Consult a Doctor */}
                  <div className="bg-white rounded-xl p-5 border border-amber-200 shadow-xs space-y-3">
                    <div className="flex items-center space-x-2 text-amber-700">
                      <Clock className="w-4 h-4" />
                      <h4 className="font-bold text-xs uppercase tracking-wider text-[#102A43]">
                        {t.symptoms.card3Title}
                      </h4>
                    </div>
                    <ul className="text-xs text-[#243447] space-y-2">
                      {result.whenToConsultDoctor.map((doc, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0 mt-1.5" />
                          <span>{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card 4: Red Flag Warning Signs */}
                  <div className="bg-[#FEE2E2]/80 rounded-xl p-5 border border-red-200 shadow-xs space-y-3">
                    <div className="flex items-center space-x-2 text-red-700">
                      <AlertTriangle className="w-4 h-4" />
                      <h4 className="font-bold text-xs uppercase tracking-wider text-red-950">
                        {t.symptoms.card4Title}
                      </h4>
                    </div>
                    <ul className="text-xs text-red-950 space-y-2">
                      {result.warningSigns.map((warn, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0 mt-1.5" />
                          <span>{warn}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Medical Safety Disclaimer Box */}
                <div className="p-4 bg-white rounded-xl border border-[#CDE8E2] text-xs text-[#64748B] leading-relaxed flex items-start gap-2.5 shadow-2xs">
                  <ShieldCheck className="w-5 h-5 text-[#0F766E] shrink-0 mt-0.5" />
                  <p>
                    <strong>{t.symptoms.safetyNoticeTitle}</strong> {result.disclaimer}{' '}
                    {t.symptoms.safetyNoticeSuffix}
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
