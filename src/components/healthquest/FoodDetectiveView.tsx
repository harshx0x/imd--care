'use client';

import React, { useState } from 'react';
import {
  Search,
  CheckCircle2,
  XCircle,
  Lightbulb,
  ShieldCheck,
  AlertTriangle,
  Info
} from 'lucide-react';
import { HealthQuestion, FictionalNutritionFacts } from '@/lib/healthquest/types';
import { Language } from '@/lib/types';
import { HEALTHQUEST_TRANSLATIONS } from '@/lib/translations/healthquest';

interface FoodDetectiveViewProps {
  question: HealthQuestion;
  onAnswer: (selectedOptionId: string, isCorrect: boolean) => void;
  language: Language;
}

export function FoodDetectiveView({
  question,
  onAnswer,
  language
}: FoodDetectiveViewProps) {
  const t = HEALTHQUEST_TRANSLATIONS[language] || HEALTHQUEST_TRANSLATIONS.en;
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const questionText = question.question[language] || question.question.en;
  const explanationText = question.explanation[language] || question.explanation.en;
  const hintText = question.hint[language] || question.hint.en;

  const comparison = question.foodComparison;

  const handleSelect = (optionId: string) => {
    if (isAnswered) return;
    setSelectedId(optionId);
    setIsAnswered(true);
    const isCorrect = optionId === question.correctOptionId;
    onAnswer(optionId, isCorrect);
  };

  const renderNutritionPanel = (product: FictionalNutritionFacts, labelBadge: string, badgeColor: string) => {
    const name = product.productName[language] || product.productName.en;
    const sub = product.productSubtitle[language] || product.productSubtitle.en;
    const ingredients = product.keyIngredients[language] || product.keyIngredients.en;
    const warning = product.warningFlag?.[language] || product.warningFlag?.en;

    return (
      <div className="flex-1 bg-slate-50/80 rounded-2xl border border-slate-200 p-4 sm:p-5 space-y-3.5 font-sans flex flex-col justify-between">
        <div className="space-y-3">
          {/* Header */}
          <div className="flex items-center justify-between pb-2 border-b border-slate-200">
            <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${badgeColor}`}>
              {labelBadge}
            </span>
            <span className="text-[10px] text-slate-500 font-mono">FSSAI Format</span>
          </div>

          <div>
            <h4 className="text-sm sm:text-base font-bold text-[#102A43]">{name}</h4>
            <p className="text-[11px] text-slate-500 mt-0.5">{sub}</p>
          </div>

          {/* Nutritional Values Grid */}
          <div className="bg-white rounded-xl border border-slate-200/90 divide-y divide-slate-100 text-xs shadow-2xs">
            <div className="py-2 px-3 flex justify-between font-bold bg-slate-100/70 rounded-t-xl text-[11px] text-slate-700">
              <span>Serving Size</span>
              <span>{product.servingSize}</span>
            </div>
            <div className="py-2 px-3 flex justify-between">
              <span className="text-slate-600">Energy (Calories)</span>
              <span className="font-bold text-slate-800">{product.caloriesPerServing} kcal</span>
            </div>
            <div className="py-2 px-3 flex justify-between">
              <span className="text-slate-600">Total Fat</span>
              <span className="font-semibold text-slate-800">{product.totalFat}</span>
            </div>
            <div className="py-2 px-3 flex justify-between">
              <span className="text-slate-700 font-semibold pl-2">↳ Saturated Fat</span>
              <span className={`font-bold ${product.saturatedFat.includes('High') ? 'text-rose-600' : 'text-slate-800'}`}>
                {product.saturatedFat}
              </span>
            </div>
            <div className="py-2 px-3 flex justify-between">
              <span className="text-slate-700 font-semibold pl-2">↳ Trans Fat</span>
              <span className="text-slate-800">{product.transFat}</span>
            </div>
            <div className="py-2 px-3 flex justify-between bg-amber-50/40">
              <span className="text-amber-950 font-bold">Sodium</span>
              <span className={`font-black ${product.sodiumMg > 500 ? 'text-rose-600' : 'text-emerald-700'}`}>
                {product.sodiumMg} mg
              </span>
            </div>
            <div className="py-2 px-3 flex justify-between">
              <span className="text-slate-600">Added Sugars</span>
              <span className={`font-bold ${product.addedSugarGrams > 10 ? 'text-rose-600' : 'text-slate-800'}`}>
                {product.addedSugarGrams} g
              </span>
            </div>
            <div className="py-2 px-3 flex justify-between">
              <span className="text-slate-600">Protein</span>
              <span className="font-semibold text-slate-800">{product.protein}</span>
            </div>
          </div>

          {/* Warning Flag */}
          {warning && (
            <div className="p-2.5 rounded-xl bg-rose-50 border border-rose-200 text-[11px] text-rose-800 font-bold flex items-center gap-1.5">
              <AlertTriangle className="w-3.5 h-3.5 text-rose-600 shrink-0" />
              <span>{warning}</span>
            </div>
          )}
        </div>

        {/* Ingredients */}
        <div className="pt-2 border-t border-slate-200/60">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Key Ingredients (in order of weight):</p>
          <p className="text-[11px] text-slate-600 leading-snug mt-1">
            {ingredients.join(', ')}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between text-xs text-slate-500">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-teal-50 text-[#0F766E] font-bold border border-[#0F766E]/20">
            <Search className="w-3.5 h-3.5" />
            <span>{t.categories.food_detective.subtitle}</span>
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

        {/* Hint Box */}
        {showHint && (
          <div className="p-4 bg-amber-50/80 border border-amber-200 rounded-2xl text-xs text-amber-900 leading-relaxed flex items-start space-x-2 animate-in fade-in duration-150">
            <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">{t.inGame.hintRevealed}: </span>
              <span>{hintText}</span>
            </div>
          </div>
        )}

        {/* Question Statement */}
        <h2 className="text-base sm:text-xl font-bold text-[#102A43] leading-relaxed">
          {questionText}
        </h2>

        {/* Side-by-side Nutrition Panels (if comparison exists) */}
        {comparison && (
          <div className="space-y-2">
            <div className="flex flex-col md:flex-row gap-4">
              {renderNutritionPanel(comparison.productA, 'Product A', 'bg-slate-200 text-slate-800')}
              {renderNutritionPanel(comparison.productB, 'Product B', 'bg-teal-100 text-teal-800')}
            </div>
            <p className="text-[10px] text-slate-400 italic text-center">
              {t.inGame.fictionalLabelNote}
            </p>
          </div>
        )}

        {/* Answer Options */}
        <div className="grid grid-cols-1 gap-3 pt-2">
          {question.options.map((opt, idx) => {
            const isSelected = selectedId === opt.id;
            const isCorrectOption = opt.id === question.correctOptionId;

            let buttonStyles = 'border-slate-200/90 bg-slate-50/60 hover:bg-slate-100 text-slate-700 hover:border-[#0F766E]/40';
            if (isAnswered) {
              if (isCorrectOption) {
                buttonStyles = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-bold ring-2 ring-emerald-500/20';
              } else if (isSelected) {
                buttonStyles = 'border-rose-400 bg-rose-50 text-rose-900 font-bold';
              } else {
                buttonStyles = 'border-slate-200 bg-slate-50/40 text-slate-400 opacity-60';
              }
            }

            const label = opt.text[language] || opt.text.en;
            const optionLetter = String.fromCharCode(65 + idx);

            return (
              <button
                key={opt.id}
                type="button"
                disabled={isAnswered}
                onClick={() => handleSelect(opt.id)}
                className={`p-4 rounded-2xl border text-left transition-all duration-150 flex items-center justify-between cursor-pointer disabled:cursor-default ${buttonStyles}`}
              >
                <div className="flex items-center space-x-3 min-w-0 pr-2">
                  <span className={`w-7 h-7 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 ${
                    isAnswered && isCorrectOption
                      ? 'bg-emerald-600 text-white'
                      : isAnswered && isSelected
                      ? 'bg-rose-600 text-white'
                      : 'bg-white border border-slate-300 text-slate-700'
                  }`}>
                    {optionLetter}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold leading-relaxed">
                    {label}
                  </span>
                </div>

                <div className="shrink-0">
                  {isAnswered && isCorrectOption && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  )}
                  {isAnswered && isSelected && !isCorrectOption && (
                    <XCircle className="w-5 h-5 text-rose-500" />
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Clinical Explanation Card */}
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

