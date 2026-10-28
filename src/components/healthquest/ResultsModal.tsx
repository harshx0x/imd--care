'use client';

import React from 'react';
import {
  Trophy,
  Award,
  Flame,
  CheckCircle2,
  RefreshCw,
  Compass,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { Language } from '@/lib/types';
import { HEALTHQUEST_TRANSLATIONS } from '@/lib/translations/healthquest';
import { HEALTH_BADGES } from '@/lib/healthquest/badges';
import { ConfettiEffect } from './ConfettiEffect';

interface ResultsModalProps {
  isOpen: boolean;
  score: number;
  totalQuestions: number;
  xpEarned: number;
  streakCount: number;
  newBadgeIds: string[];
  takeaways: string[];
  onPlayAgain: () => void;
  onBackToHub: () => void;
  language: Language;
}

export function ResultsModal({
  isOpen,
  score,
  totalQuestions,
  xpEarned,
  streakCount,
  newBadgeIds,
  takeaways,
  onPlayAgain,
  onBackToHub,
  language
}: ResultsModalProps) {
  if (!isOpen) return null;

  const t = HEALTHQUEST_TRANSLATIONS[language] || HEALTHQUEST_TRANSLATIONS.en;
  const scorePercent = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 100;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/65 backdrop-blur-xs animate-in fade-in duration-200">
      <ConfettiEffect active={scorePercent >= 60} />

      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col">
        {/* Celebration Header */}
        <div className="p-6 text-center bg-gradient-to-b from-teal-50/80 via-emerald-50/40 to-white border-b border-slate-100 space-y-2">
          <div className="w-16 h-16 rounded-3xl bg-gradient-to-tr from-[#0F766E] to-[#2DD4BF] text-white flex items-center justify-center mx-auto shadow-lg shadow-[#0F766E]/25">
            <Trophy className="w-8 h-8" />
          </div>

          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>{t.results.congratulations}</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-[#102A43] tracking-tight">
            {t.results.challengeFinished}
          </h2>
        </div>

        {/* Score & XP Highlights */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div className="grid grid-cols-3 gap-3">
            {/* Score Card */}
            <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80 text-center space-y-0.5">
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Score</p>
              <p className="text-xl sm:text-2xl font-black text-[#102A43]">{score} / {totalQuestions}</p>
              <p className="text-[10px] text-slate-500">{scorePercent}% Accuracy</p>
            </div>

            {/* XP Gained */}
            <div className="p-3.5 bg-teal-50/70 rounded-2xl border border-[#0F766E]/20 text-center space-y-0.5">
              <p className="text-[10px] font-bold text-[#0F766E] uppercase tracking-wider">XP Earned</p>
              <p className="text-xl sm:text-2xl font-black text-[#0F766E]">+{xpEarned}</p>
              <p className="text-[10px] text-slate-500">Added to Profile</p>
            </div>

            {/* Streak */}
            <div className="p-3.5 bg-amber-50/70 rounded-2xl border border-amber-200 text-center space-y-0.5">
              <p className="text-[10px] font-bold text-amber-700 uppercase tracking-wider flex items-center justify-center gap-0.5">
                <Flame className="w-3 h-3 text-amber-600" />
                <span>Streak</span>
              </p>
              <p className="text-xl sm:text-2xl font-black text-amber-800">{streakCount}</p>
              <p className="text-[10px] text-slate-500">Max in Run</p>
            </div>
          </div>

          {/* Newly Unlocked Badges */}
          {newBadgeIds.length > 0 && (
            <div className="p-4 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/90 rounded-2xl space-y-2">
              <div className="flex items-center space-x-2 text-amber-900 font-bold text-xs uppercase tracking-wider">
                <Award className="w-4 h-4 text-amber-600" />
                <span>{t.results.badgesUnlocked}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {newBadgeIds.map((bId) => {
                  const badge = HEALTH_BADGES.find((b) => b.id === bId);
                  if (!badge) return null;
                  const title = badge.title[language] || badge.title.en;
                  return (
                    <div
                      key={bId}
                      className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-white rounded-xl border border-amber-300 text-xs font-bold text-amber-900 shadow-xs animate-bounce"
                    >
                      <Trophy className="w-3.5 h-3.5 text-amber-600" />
                      <span>{title}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Key Clinical Takeaways */}
          {takeaways.length > 0 && (
            <div className="space-y-2">
              <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0F766E]" />
                <span>{t.results.topicsToReview}</span>
              </h3>
              <div className="space-y-2">
                {takeaways.map((tip, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-700 leading-relaxed flex items-start space-x-2"
                  >
                    <span className="w-4 h-4 rounded-full bg-[#0F766E]/10 text-[#0F766E] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{tip}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            type="button"
            onClick={onBackToHub}
            className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <Compass className="w-4 h-4 text-slate-500" />
            <span>{t.results.tryAnotherCategory}</span>
          </button>

          <button
            type="button"
            onClick={onPlayAgain}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#0F766E] hover:bg-[#0D655F] text-white text-xs font-bold transition shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <RefreshCw className="w-4 h-4" />
            <span>{t.playAgain}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
