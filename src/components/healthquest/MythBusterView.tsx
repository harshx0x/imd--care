'use client';

import React, { useState } from 'react';
import {
  HelpCircle,
  CheckCircle2,
  XCircle,
  Lightbulb,
  ShieldCheck,
  BookOpen,
  Info
} from 'lucide-react';
import { HealthQuestion } from '@/lib/healthquest/types';
import { Language } from '@/lib/types';
import { HEALTHQUEST_TRANSLATIONS } from '@/lib/translations/healthquest';

interface MythBusterViewProps {
  question: HealthQuestion;
  onAnswer: (selectedOptionId: string, isCorrect: boolean) => void;
  language: Language;
}

export function MythBusterView({
  question,
  onAnswer,
  language
}: MythBusterViewProps) {
  const t = HEALTHQUEST_TRANSLATIONS[language] || HEALTHQUEST_TRANSLATIONS.en;
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const questionText = question.question[language] || question.question.en;
  const explanationText = question.explanation[language] || question.explanation.en;
  const contextNotes = question.contextNotes?.[language] || question.contextNotes?.en;
  const hintText = question.hint[language] || question.hint.en;

  const handleSelect = (optionId: string) => {
    if (isAnswered) return;
    setSelectedId(optionId);
    setIsAnswered(true);
    const isCorrect = optionId === question.correctOptionId;
    onAnswer(optionId, isCorrect);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Question Card */}
      <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs space-y-6">
        {/* Top Meta Bar */}
        <div className="flex items-center justify-between text-xs text-slate-500">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-teal-50 text-[#0F766E] font-bold border border-[#0F766E]/20">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{t.categories.myth_buster.subtitle}</span>
          </div>

          <button
            type="button"
            onClick={() => setShowHint(!showHint)}
            className="text-amber-700 hover:text-amber-800 font-semibold flex items-center gap-1 cursor-pointer transition"
          >
            <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
            <span>{showHint ? t.inGame.hintRevealed : t.inGame.showHintBtn}</span>
          </button>
        </div>

        {/* Hint Box (if toggled) */}
        {showHint && (
          <div className="p-4 bg-amber-50/80 border border-amber-200 rounded-2xl text-xs text-amber-900 leading-relaxed flex items-start space-x-2 animate-in fade-in duration-150">
            <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">{t.inGame.hintRevealed}: </span>
              <span>{hintText}</span>
            </div>
          </div>
        )}

        {/* The Myth Statement */}
        <div className="py-2">
          <h2 className="text-lg sm:text-2xl font-bold text-[#102A43] leading-snug tracking-tight">
            “{questionText}”
          </h2>
        </div>

        {/* 3 Choices: True / False / Depends */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          {question.options.map((opt) => {
            const isSelected = selectedId === opt.id;
            const isCorrectOption = opt.id === question.correctOptionId;

            let buttonStyles = 'border-slate-200/90 bg-slate-50/60 hover:bg-slate-100/80 text-slate-700 hover:border-[#0F766E]/40';
            if (isAnswered) {
              if (isCorrectOption) {
                buttonStyles = 'border-emerald-500 bg-emerald-50 text-emerald-900 font-bold ring-2 ring-emerald-500/20';
              } else if (isSelected) {
                buttonStyles = 'border-rose-400 bg-rose-50 text-rose-800 font-bold';
              } else {
                buttonStyles = 'border-slate-200 bg-slate-50/40 text-slate-400 opacity-60';
              }
            }

            const label = opt.text[language] || opt.text.en;

            return (
              <button
                key={opt.id}
                type="button"
                disabled={isAnswered}
                onClick={() => handleSelect(opt.id)}
                className={`p-4 sm:p-5 rounded-2xl border text-center transition-all duration-200 flex flex-col items-center justify-center space-y-1.5 cursor-pointer disabled:cursor-default ${buttonStyles}`}
              >
                <div className="flex items-center space-x-1.5">
                  {isAnswered && isCorrectOption && (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  )}
                  {isAnswered && isSelected && !isCorrectOption && (
                    <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                  )}
                  <span className="text-sm sm:text-base font-bold tracking-tight">
                    {label}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Clinical Explanation Card (Shown after selection) */}
        {isAnswered && (
          <div className="pt-4 border-t border-slate-100 space-y-4 animate-in fade-in duration-200">
            <div
              className={`p-4 rounded-2xl border ${
                selectedId === question.correctOptionId
                  ? 'bg-emerald-50/70 border-emerald-200 text-emerald-900'
                  : 'bg-amber-50/70 border-amber-200 text-amber-950'
              }`}
            >
              <div className="flex items-center space-x-2 mb-1.5">
                {selectedId === question.correctOptionId ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                ) : (
                  <Info className="w-4 h-4 text-amber-600" />
                )}
                <span className="text-xs font-bold uppercase tracking-wider">
                  {selectedId === question.correctOptionId
                    ? t.inGame.correctBadge
                    : t.inGame.incorrectBadge}
                </span>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed">
                {explanationText}
              </p>
            </div>

            {/* Context Subtlety Note (if question was "Depends") */}
            {contextNotes && (
              <div className="p-3.5 rounded-2xl bg-teal-50/60 border border-[#0F766E]/20 text-xs text-slate-700 leading-relaxed flex items-start space-x-2">
                <BookOpen className="w-4 h-4 text-[#0F766E] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#0F766E]">{t.inGame.contextSubtlety}: </span>
                  <span>{contextNotes}</span>
                </div>
              </div>
            )}

            {/* Source Reference */}
            <div className="flex items-center space-x-2 text-[11px] text-slate-500">
              <ShieldCheck className="w-3.5 h-3.5 text-[#0F766E]" />
              <span>{t.inGame.clinicalReference}: <strong className="text-slate-700">{question.source}</strong></span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
