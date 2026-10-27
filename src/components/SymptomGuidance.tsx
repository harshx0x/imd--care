'use client';

import React, { useState } from 'react';
import {
  Stethoscope,
  AlertTriangle,
  Clock,
  ShieldCheck,
  CheckCircle,
  HelpCircle,
  ArrowRight,
  RefreshCw,
  PhoneCall,
  Activity,
  HeartPulse,
  Info
} from 'lucide-react';
import { SymptomRequest, SymptomResult, Language } from '@/lib/types';
import { checkEmergencySymptoms } from '@/lib/emergency';

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

  const quickSymptoms: Record<Language, { label: string; text: string }[]> = {
    en: [
      { label: 'Tension Headache', text: 'Dull throbbing tension headache across forehead with eye strain' },
      { label: 'Seasonal Dry Cough', text: 'Persistent dry cough and mild scratchy throat for 3 days' },
      { label: 'Acid Reflux / Heartburn', text: 'Burning sensation in upper chest after eating heavy spicy dinner' },
      { label: 'Morning Knee Stiffness', text: 'Mild joint stiffness in both knees in the morning, eases after walking' },
      { label: 'Low Grade Fever & Body Ache', text: 'Low-grade fever (99.8°F) with general fatigue and muscle soreness' }
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
        emergencyEval.reason || 'Critical emergency warning detected. Please contact emergency services (112 / 108) immediately.'
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
      setError('Unable to complete symptom evaluation. Please try again.');
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
    <section id="symptoms" className="py-16 sm:py-20 bg-[#F8FAFC] border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#DDF5EF] text-[#0F766E] text-xs font-bold uppercase tracking-wider">
            <Stethoscope className="w-3.5 h-3.5" />
            <span>Structured Health Triage</span>
          </div>
          <h2 className="text-3xl font-extrabold text-[#102A43]">
            {language === 'hi' ? 'स्मार्ट लक्षण मार्गदर्शन' : language === 'mr' ? 'स्मार्ट लक्षण मार्गदर्शन' : 'Smart Symptom Guidance'}
          </h2>
          <p className="text-xs sm:text-sm text-[#486581]">
            Educational review of non-emergency symptoms. Not a clinical diagnosis or treatment prescription.
          </p>
        </div>

        {/* Immediate Emergency Client-Side Alert Banner */}
        {immediateEmergencyWarning && (
          <div className="mb-8 p-5 rounded-2xl bg-red-600 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4 animate-in fade-in duration-200">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                <AlertTriangle className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="font-black text-base tracking-wide">
                  IMMEDIATE EMERGENCY WARNING DETECTED
                </h3>
                <p className="text-xs text-red-100 mt-0.5">{immediateEmergencyWarning}</p>
                <p className="text-xs text-red-200 font-semibold mt-1">
                  National Emergency: <strong>112</strong> | Medical Ambulance: <strong>108</strong>
                </p>
              </div>
            </div>
            <button
              onClick={openEmergencyModal}
              className="px-5 py-2.5 bg-white text-red-700 hover:bg-red-50 font-bold text-xs rounded-xl shadow-md shrink-0 flex items-center gap-1.5 cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Open Emergency Instructions</span>
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Form Column */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-sm">
            <h3 className="text-lg font-bold text-[#102A43] mb-4 flex items-center gap-2">
              <Activity className="w-5 h-5 text-[#0F766E]" />
              <span>Symptom Intake Form</span>
            </h3>

            <form onSubmit={handleEvaluate} className="space-y-5">
              {/* Symptom Input */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                  Describe what you are experiencing *
                </label>
                <textarea
                  value={symptom}
                  onChange={(e) => setSymptom(e.target.value)}
                  placeholder="e.g., Dull headache on forehead with sensitivity to computer lights, feeling tired..."
                  rows={3}
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0F766E] focus:border-transparent transition resize-none"
                />
              </div>

              {/* Quick Prompt Chips */}
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1.5">
                  Or select a common demonstration symptom:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {quickSymptoms[language]?.map((item, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleQuickSymptom(item.text)}
                      className="text-[11px] bg-slate-100 hover:bg-[#DDF5EF] hover:text-[#0F766E] text-slate-700 px-2.5 py-1 rounded-lg border border-slate-200/60 font-medium transition cursor-pointer"
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
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                    Duration
                  </label>
                  <select
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs sm:text-sm text-slate-800 focus:ring-2 focus:ring-[#0F766E] focus:outline-none"
                  >
                    <option value="Less than 24 hours">&lt; 24 Hours</option>
                    <option value="1-3 days">1 to 3 Days</option>
                    <option value="4-7 days">4 to 7 Days</option>
                    <option value="More than 1 week">&gt; 1 Week</option>
                    <option value="Chronic (> 1 month)">Chronic (&gt; 1 Month)</option>
                  </select>
                </div>

                {/* Severity */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                    Severity
                  </label>
                  <div className="grid grid-cols-3 gap-1 bg-slate-100 p-1 rounded-xl">
                    {(['mild', 'moderate', 'severe'] as const).map((sev) => (
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
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        {sev}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Age Group and Optional Conditions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                    Age Group
                  </label>
                  <select
                    value={ageGroup}
                    onChange={(e) => setAgeGroup(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs sm:text-sm text-slate-800 focus:ring-2 focus:ring-[#0F766E] focus:outline-none"
                  >
                    <option value="Child (0-12)">Child (0–12 yrs)</option>
                    <option value="Adolescent (13-17)">Adolescent (13–17 yrs)</option>
                    <option value="Young Adult (18-39)">Young Adult (18–39 yrs)</option>
                    <option value="Adult (40-59)">Adult (40–59 yrs)</option>
                    <option value="Senior (60+)">Senior (60+ yrs)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                    Existing Conditions (Optional)
                  </label>
                  <input
                    type="text"
                    value={existingConditions}
                    onChange={(e) => setExistingConditions(e.target.value)}
                    placeholder="e.g. Diabetes, Hypertension"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs sm:text-sm text-slate-800 focus:ring-2 focus:ring-[#0F766E] focus:outline-none"
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
                    <span>Evaluating Symptoms...</span>
                  </>
                ) : (
                  <>
                    <Stethoscope className="w-4 h-4" />
                    <span>Review Symptom Guidance</span>
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

          {/* Right Results Column */}
          <div className="lg:col-span-7 space-y-5">
            {!result ? (
              <div className="bg-white rounded-2xl border border-slate-200/80 p-8 text-center space-y-4 shadow-sm flex flex-col items-center justify-center min-h-[380px]">
                <div className="w-16 h-16 rounded-2xl bg-[#DDF5EF] text-[#0F766E] flex items-center justify-center shadow-inner">
                  <Stethoscope className="w-8 h-8" />
                </div>
                <div className="max-w-md">
                  <h4 className="text-base font-bold text-[#102A43]">
                    Awaiting Symptom Details
                  </h4>
                  <p className="text-xs text-[#486581] mt-1.5 leading-relaxed">
                    Enter your symptoms or pick a pre-set demonstration scenario on the left. The system will categorize your inquiry into four clear, educational review sections.
                  </p>
                </div>
                <div className="pt-2 flex items-center gap-2 text-[11px] text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-[#0F766E]" />
                  <span>Conservative Indian 112 emergency verification active</span>
                </div>
              </div>
            ) : (
              <div className="space-y-4 animate-in fade-in duration-200">
                {/* Result Controls Header */}
                <div className="flex items-center justify-between bg-white px-5 py-3 rounded-xl border border-slate-200">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-bold text-[#102A43]">Guidance Summary</span>
                    {result.isDemo && (
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">
                        Demo Mode Guidance
                      </span>
                    )}
                  </div>
                  <button
                    onClick={resetForm}
                    className="text-xs text-[#0F766E] hover:underline font-semibold flex items-center gap-1 cursor-pointer"
                  >
                    <RefreshCw className="w-3 h-3" />
                    <span>Evaluate New Symptoms</span>
                  </button>
                </div>

                {/* 4 Organized Guidance Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Card 1: Possible Explanations */}
                  <div className="bg-white rounded-xl p-5 border border-emerald-100 shadow-xs space-y-3">
                    <div className="flex items-center space-x-2 text-[#0F766E]">
                      <Info className="w-4 h-4" />
                      <h4 className="font-bold text-xs uppercase tracking-wider text-slate-800">
                        1. Possible Explanations
                      </h4>
                    </div>
                    <ul className="text-xs text-slate-700 space-y-2">
                      {result.possibleExplanations.map((exp, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0F766E] shrink-0 mt-1.5" />
                          <span>{exp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card 2: General Self-Care */}
                  <div className="bg-white rounded-xl p-5 border border-teal-100 shadow-xs space-y-3">
                    <div className="flex items-center space-x-2 text-teal-700">
                      <CheckCircle className="w-4 h-4" />
                      <h4 className="font-bold text-xs uppercase tracking-wider text-slate-800">
                        2. General Self-Care
                      </h4>
                    </div>
                    <ul className="text-xs text-slate-700 space-y-2">
                      {result.selfCareAdvice.map((care, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-teal-600 shrink-0 mt-1.5" />
                          <span>{care}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card 3: When to Consult a Doctor */}
                  <div className="bg-white rounded-xl p-5 border border-amber-200 shadow-xs space-y-3">
                    <div className="flex items-center space-x-2 text-amber-700">
                      <Clock className="w-4 h-4" />
                      <h4 className="font-bold text-xs uppercase tracking-wider text-slate-800">
                        3. When to Consult a Doctor
                      </h4>
                    </div>
                    <ul className="text-xs text-slate-700 space-y-2">
                      {result.whenToConsultDoctor.map((doc, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0 mt-1.5" />
                          <span>{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card 4: Red Flag Warning Signs */}
                  <div className="bg-red-50/70 rounded-xl p-5 border border-red-200 shadow-xs space-y-3">
                    <div className="flex items-center space-x-2 text-red-700">
                      <AlertTriangle className="w-4 h-4" />
                      <h4 className="font-bold text-xs uppercase tracking-wider text-red-900">
                        4. Warning Signs (Seek Immediate Care)
                      </h4>
                    </div>
                    <ul className="text-xs text-red-900 space-y-2">
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
                <div className="p-4 bg-slate-100 rounded-xl border border-slate-200 text-xs text-slate-600 leading-relaxed flex items-start gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-[#0F766E] shrink-0 mt-0.5" />
                  <p>
                    <strong>Medical Safety Notice:</strong> {result.disclaimer} Always consult a licensed clinical medical officer for prescription management or definitive triage.
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
