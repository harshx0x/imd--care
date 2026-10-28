'use client';

import React, { useState, useMemo } from 'react';
import {
  Sun,
  SunMedium,
  Sunset,
  Moon,
  CheckCircle2,
  RotateCcw,
  Sparkles,
  Award,
  Info,
  Footprints,
  Apple,
  Droplets,
  Brain,
  Bed,
  ArrowRight
} from 'lucide-react';
import { HEALTHY_DAY_ACTIVITIES } from '@/lib/healthquest/data';
import { DayTimeSlot, ActivityCategory } from '@/lib/healthquest/types';
import { Language } from '@/lib/types';
import { HEALTHQUEST_TRANSLATIONS } from '@/lib/translations/healthquest';
import { recordHealthyDayResult } from '@/lib/healthquest/store';
import { ConfettiEffect } from './ConfettiEffect';

interface HealthyDayViewProps {
  onFinish: (score: number, xpGained: number, newBadges: string[]) => void;
  onExit: () => void;
  language: Language;
}

export function HealthyDayView({ onFinish, onExit, language }: HealthyDayViewProps) {
  const t = HEALTHQUEST_TRANSLATIONS[language] || HEALTHQUEST_TRANSLATIONS.en;

  // Selected activity IDs
  const [selectedIds, setSelectedIds] = useState<string[]>([
    'm_walk_sunlight',
    'a_balanced_thali',
    'e_sports_movement',
    'n_early_light_dinner'
  ]);
  const [isEvaluated, setIsEvaluated] = useState(false);
  const [evaluationResult, setEvaluationResult] = useState<{
    score: number;
    xpGained: number;
    newBadges: string[];
  } | null>(null);

  // Group activities by time slot
  const slots: Array<{ slot: DayTimeSlot; label: string; icon: React.ReactNode; color: string }> = [
    {
      slot: 'morning',
      label: t.dayBuilder.slots.morning,
      icon: <Sun className="w-5 h-5 text-amber-500" />,
      color: 'border-amber-200 bg-amber-50/40 text-amber-900'
    },
    {
      slot: 'afternoon',
      label: t.dayBuilder.slots.afternoon,
      icon: <SunMedium className="w-5 h-5 text-orange-500" />,
      color: 'border-orange-200 bg-orange-50/40 text-orange-900'
    },
    {
      slot: 'evening',
      label: t.dayBuilder.slots.evening,
      icon: <Sunset className="w-5 h-5 text-rose-500" />,
      color: 'border-rose-200 bg-rose-50/40 text-rose-900'
    },
    {
      slot: 'night',
      label: t.dayBuilder.slots.night,
      icon: <Moon className="w-5 h-5 text-indigo-500" />,
      color: 'border-indigo-200 bg-indigo-50/40 text-indigo-900'
    }
  ];

  // Calculate real-time balance score (supports multiple flexible, reasonable healthy routines)
  const { currentScore, coachingText } = useMemo(() => {
    let rawSum = 0;
    const slotsCovered = new Set<DayTimeSlot>();

    for (const act of HEALTHY_DAY_ACTIVITIES) {
      if (selectedIds.includes(act.id)) {
        rawSum += act.healthScoreDelta;
        if (act.isOptimal) {
          slotsCovered.add(act.timeSlot);
        }
      }
    }

    let calculated = 0;
    // A balanced routine has at least 1 healthy choice across key slots and avoids major traps
    if (rawSum > 0) {
      // Benchmark: ~90-110 raw points with 3+ slots covered gives 85-100%
      const basePercent = (rawSum / 110) * 100;
      const slotBonus = slotsCovered.size >= 4 ? 8 : slotsCovered.size >= 3 ? 4 : 0;
      calculated = Math.min(100, Math.max(10, Math.round(basePercent + slotBonus)));
    } else if (selectedIds.length === 0) {
      calculated = 50; // Neutral starting baseline
    } else {
      calculated = Math.max(0, 50 + Math.round(rawSum / 2));
    }

    let feedback = t.dayBuilder.coachingFeedback.unbalanced;
    if (calculated >= 85) {
      feedback = t.dayBuilder.coachingFeedback.optimal;
    } else if (calculated >= 60) {
      feedback = t.dayBuilder.coachingFeedback.good;
    }

    return { currentScore: calculated, coachingText: feedback };
  }, [selectedIds, t]);

  const toggleActivity = (id: string) => {
    if (isEvaluated) return;
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleReset = () => {
    if (isEvaluated) return;
    setSelectedIds([]);
  };

  const handleEvaluate = () => {
    if (isEvaluated) return;
    const result = recordHealthyDayResult(currentScore);
    setEvaluationResult({
      score: currentScore,
      xpGained: result.xpGained,
      newBadges: result.newBadges
    });
    setIsEvaluated(true);
  };

  const handleContinue = () => {
    if (evaluationResult) {
      onFinish(evaluationResult.score, evaluationResult.xpGained, evaluationResult.newBadges);
    } else {
      onExit();
    }
  };

  const getCategoryIcon = (cat: ActivityCategory) => {
    switch (cat) {
      case 'movement':
        return <Footprints className="w-3.5 h-3.5" />;
      case 'nutrition':
        return <Apple className="w-3.5 h-3.5" />;
      case 'hydration':
        return <Droplets className="w-3.5 h-3.5" />;
      case 'mindfulness':
        return <Brain className="w-3.5 h-3.5" />;
      case 'sleep':
        return <Bed className="w-3.5 h-3.5" />;
      default:
        return <Sparkles className="w-3.5 h-3.5" />;
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {isEvaluated && currentScore >= 85 && <ConfettiEffect active={true} />}

      {/* Top Header Card */}
      <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-teal-50 text-[#0F766E] text-xs font-bold border border-[#0F766E]/20 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.categories.healthy_day.subtitle}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#102A43]">
              {t.dayBuilder.title}
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
              {t.dayBuilder.subtitle}
            </p>
          </div>

          {!isEvaluated && (
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 transition cursor-pointer self-start sm:self-auto"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{t.dayBuilder.resetDayBtn}</span>
            </button>
          )}
        </div>

        {/* Live Balance Gauge Bar */}
        <div className="pt-4 border-t border-slate-100 space-y-3">
          <div className="flex items-center justify-between text-xs font-semibold">
            <span className="text-slate-700 flex items-center gap-1.5">
              <span>{t.dayBuilder.balanceScore}</span>
              <span className="text-slate-400 font-normal">
                ({selectedIds.length} habits selected)
              </span>
            </span>
            <span
              className={`font-black text-base ${
                currentScore >= 85
                  ? 'text-teal-700'
                  : currentScore >= 60
                  ? 'text-amber-700'
                  : 'text-rose-600'
              }`}
            >
              {currentScore}%
            </span>
          </div>

          <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden p-0.5 border border-slate-200">
            <div
              className={`h-full rounded-full transition-all duration-500 ease-out ${
                currentScore >= 85
                  ? 'bg-linear-to-r from-teal-500 to-[#35B8A6]'
                  : currentScore >= 60
                  ? 'bg-linear-to-r from-amber-400 to-amber-500'
                  : 'bg-linear-to-r from-rose-400 to-rose-500'
              }`}
              style={{ width: `${Math.max(5, currentScore)}%` }}
            />
          </div>

          {/* Coaching Tip Bubble */}
          <div
            className={`p-3.5 rounded-2xl text-xs leading-relaxed flex items-start space-x-2 border ${
              currentScore >= 85
                ? 'bg-teal-50/80 border-teal-200 text-teal-900'
                : currentScore >= 60
                ? 'bg-amber-50/80 border-amber-200 text-amber-900'
                : 'bg-rose-50/80 border-rose-200 text-rose-900'
            }`}
          >
            <Info className="w-4 h-4 shrink-0 mt-0.5" />
            <p className="font-medium">{coachingText}</p>
          </div>
        </div>
      </div>

      {/* Evaluation Results Banner (when submitted) */}
      {isEvaluated && evaluationResult && (
        <div className="bg-linear-to-br from-[#102A43] to-[#0F766E] rounded-3xl p-6 sm:p-8 text-white space-y-4 shadow-lg animate-in zoom-in-95 duration-200">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-teal-300">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold">
                {currentScore >= 85
                  ? t.results.congratulations
                  : t.results.challengeFinished}
              </h3>
              <p className="text-xs text-teal-100 mt-0.5">
                {t.results.scoreSummary}: {currentScore}% Circadian Harmony • +{evaluationResult.xpGained} XP
              </p>
            </div>
          </div>

          {evaluationResult.newBadges.length > 0 && (
            <div className="p-3 bg-white/15 rounded-2xl text-xs font-semibold text-teal-200 flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-amber-300 shrink-0" />
              <span>
                {t.results.badgesUnlocked}: {evaluationResult.newBadges.join(', ')}
              </span>
            </div>
          )}

          <div className="pt-2">
            <button
              type="button"
              onClick={handleContinue}
              className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-white text-[#102A43] font-bold text-sm hover:bg-teal-50 transition shadow-sm cursor-pointer flex items-center justify-center space-x-2"
            >
              <span>{t.continueBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* 4 Time Slots Grid */}
      <div className="space-y-6">
        {slots.map(({ slot, label, icon, color }) => {
          const slotActivities = HEALTHY_DAY_ACTIVITIES.filter((a) => a.timeSlot === slot);

          return (
            <div key={slot} className="space-y-3">
              {/* Slot Header */}
              <div
                className={`inline-flex items-center space-x-2 px-4 py-2 rounded-2xl border text-xs font-bold ${color}`}
              >
                {icon}
                <span>{label}</span>
              </div>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-4.5">
                {slotActivities.map((act) => {
                  const isSelected = selectedIds.includes(act.id);
                  const title = act.title[language] || act.title.en;
                  const desc = act.description[language] || act.description.en;
                  const tip = act.educationalTip[language] || act.educationalTip.en;

                  return (
                    <div
                      key={act.id}
                      onClick={() => toggleActivity(act.id)}
                      className={`relative rounded-3xl p-5 border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? act.isOptimal
                            ? 'bg-[#E8F7F5]/70 border-[#35B8A6] ring-2 ring-[#0F766E]/20 shadow-xs'
                            : 'bg-rose-50/70 border-rose-300 ring-2 ring-rose-300/30 shadow-xs'
                          : 'bg-white border-slate-200/90 hover:border-slate-300 hover:shadow-xs'
                      }`}
                    >
                      <div className="space-y-3">
                        {/* Card Top Meta */}
                        <div className="flex items-center justify-between">
                          <span
                            className={`inline-flex items-center space-x-1 text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                              act.isOptimal
                                ? 'bg-teal-100/70 text-[#0F766E]'
                                : 'bg-rose-100/70 text-rose-700'
                            }`}
                          >
                            {getCategoryIcon(act.category)}
                            <span>{act.category}</span>
                          </span>

                          <div
                            className={`w-6 h-6 rounded-full flex items-center justify-center border transition ${
                              isSelected
                                ? act.isOptimal
                                  ? 'bg-[#0F766E] border-[#0F766E] text-white'
                                  : 'bg-rose-600 border-rose-600 text-white'
                                : 'border-slate-300 bg-white'
                            }`}
                          >
                            {isSelected && <CheckCircle2 className="w-4 h-4" />}
                          </div>
                        </div>

                        {/* Activity Title */}
                        <h4 className="font-bold text-sm text-[#102A43] leading-snug">
                          {title}
                        </h4>

                        {/* Description */}
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {desc}
                        </p>
                      </div>

                      {/* Educational Tip Footer */}
                      <div className="pt-3 mt-3 border-t border-slate-100/80">
                        <p className="text-[11px] text-slate-500 leading-normal italic">
                          💡 {tip}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Sticky Action Bar (when not evaluated) */}
      {!isEvaluated && (
        <div className="sticky bottom-6 z-10 bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200 p-4 shadow-lg flex items-center justify-between gap-4">
          <div className="text-xs text-slate-600">
            <span className="font-bold text-[#102A43]">{selectedIds.length}</span> habits chosen
            • Score: <span className="font-black text-[#0F766E]">{currentScore}%</span>
          </div>

          <button
            type="button"
            onClick={handleEvaluate}
            className="px-6 py-3 rounded-xl bg-linear-to-r from-[#0F766E] to-[#35B8A6] hover:from-[#0c5e58] hover:to-[#2ea192] text-white font-bold text-sm transition shadow-sm cursor-pointer flex items-center space-x-2"
          >
            <span>{t.dayBuilder.evaluateBtn}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}
