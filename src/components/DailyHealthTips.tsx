'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  RefreshCw,
  CheckCircle2,
  Droplets,
  Salad,
  Activity,
  Moon,
  ShieldCheck,
  Eye,
  Heart,
  Sun,
  Utensils,
  Pill,
  Calendar,
  UserCheck,
  Apple,
  CigaretteOff,
  Wind,
  ArrowRight,
  Info
} from 'lucide-react';
import { Language } from '@/lib/types';
import {
  HEALTH_TIPS,
  HEALTH_TIPS_CATEGORIES,
  HEALTH_TIPS_UI,
  HealthTip,
  getInitialClientTipIndex,
  advanceToNextTipIndex
} from '@/lib/health-tips';

interface DailyHealthTipsProps {
  language: Language;
  variant?: 'featured' | 'expanded' | 'compact';
  defaultCategory?: string;
  showExploreLink?: boolean;
  className?: string;
}

export function DailyHealthTips({
  language,
  variant = 'featured',
  defaultCategory = 'all',
  showExploreLink = true,
  className = ''
}: DailyHealthTipsProps) {
  // Start with index 0 to guarantee SSR match
  const [tipIndex, setTipIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string>(defaultCategory);
  const [isChanging, setIsChanging] = useState(false);

  // Filter tips if a category is selected (used mainly in 'expanded' variant)
  const filteredTips = useMemo(() => {
    if (selectedCategory === 'all') return HEALTH_TIPS;
    return HEALTH_TIPS.filter((t) => t.categoryKey === selectedCategory);
  }, [selectedCategory]);

  const activeTip: HealthTip = filteredTips[tipIndex % filteredTips.length] || HEALTH_TIPS[0];

  // Hydration-safe initial tip selection from localStorage rotation queue
  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      const initialIndex = getInitialClientTipIndex(filteredTips.length);
      setTipIndex(initialIndex % filteredTips.length);
    });
    return () => cancelAnimationFrame(raf);
  }, [filteredTips.length]);

  const handleNextTip = () => {
    setIsChanging(true);
    setTimeout(() => {
      const nextIdx = advanceToNextTipIndex(tipIndex, filteredTips.length);
      setTipIndex(nextIdx);
      setIsChanging(false);
    }, 140);
  };

  const handleCategorySelect = (categoryKey: string) => {
    if (categoryKey === selectedCategory) return;
    setIsChanging(true);
    setTimeout(() => {
      setSelectedCategory(categoryKey);
      setTipIndex(0);
      setIsChanging(false);
    }, 140);
  };

  // Helper to render icon matching tip
  const renderTipIcon = (iconName: string, iconClass: string) => {
    switch (iconName) {
      case 'droplets':
        return <Droplets className={iconClass} />;
      case 'salad':
        return <Salad className={iconClass} />;
      case 'activity':
        return <Activity className={iconClass} />;
      case 'moon':
        return <Moon className={iconClass} />;
      case 'shield':
        return <ShieldCheck className={iconClass} />;
      case 'sparkles':
        return <Sparkles className={iconClass} />;
      case 'eye':
        return <Eye className={iconClass} />;
      case 'heart':
        return <Heart className={iconClass} />;
      case 'sun':
        return <Sun className={iconClass} />;
      case 'utensils':
        return <Utensils className={iconClass} />;
      case 'pill':
        return <Pill className={iconClass} />;
      case 'calendar':
        return <Calendar className={iconClass} />;
      case 'user-check':
        return <UserCheck className={iconClass} />;
      case 'apple':
        return <Apple className={iconClass} />;
      case 'smoke':
        return <CigaretteOff className={iconClass} />;
      case 'wind':
        return <Wind className={iconClass} />;
      default:
        return <Sparkles className={iconClass} />;
    }
  };

  const tUI = HEALTH_TIPS_UI;
  const currentNum = (tipIndex % filteredTips.length) + 1;
  const totalNum = filteredTips.length;

  /* ========================================================================= */
  /* VARIANT 1: COMPACT (for Assistant, Symptoms, Reports, Auth pages)          */
  /* ========================================================================= */
  if (variant === 'compact') {
    return (
      <div
        className={`bg-white rounded-2xl border border-[#CDE8E2] p-4 sm:p-5 shadow-xs card-hover-lift ${className}`}
      >
        <div className="flex items-center justify-between gap-2 pb-3 border-b border-[#CDE8E2]">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-xl bg-[#D9F3EC] flex items-center justify-center text-[#0F766E] shrink-0 border border-[#35B8A6]/30">
              {renderTipIcon(activeTip.icon, 'w-4 h-4 text-[#0F766E]')}
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#0F766E] block">
                {tUI.headerBadge[language]}
              </span>
              <span className="text-xs font-semibold text-[#102A43] block">
                {activeTip.category[language]}
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-[11px] font-semibold text-[#64748B] bg-[#E8F7F5] px-2 py-0.5 rounded-full border border-[#CDE8E2]">
              {tUI.tipCounter[language](currentNum, totalNum)}
            </span>
            <button
              onClick={handleNextTip}
              title={tUI.nextTipBtn[language]}
              aria-label={tUI.nextTipBtn[language]}
              className="p-1.5 rounded-lg bg-[#E8F7F5] hover:bg-[#D9F3EC] text-[#0F766E] border border-[#CDE8E2] transition cursor-pointer btn-interactive"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isChanging ? 'animate-spin' : ''}`} />
            </button>
          </div>
        </div>

        <div
          key={activeTip.id}
          className={`pt-3 space-y-2 transition-all duration-200 ${
            isChanging ? 'opacity-40 scale-[0.99]' : 'opacity-100 scale-100 animate-fade-in'
          }`}
        >
          <h4 className="text-xs sm:text-sm font-bold text-[#102A43] leading-snug">
            {activeTip.title[language]}
          </h4>
          <p className="text-xs text-[#243447] leading-relaxed line-clamp-2">
            {activeTip.explanation[language]}
          </p>

          <div className="bg-[#D9F3EC]/70 rounded-xl p-2.5 border border-[#35B8A6]/30 flex items-start space-x-2 mt-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#0F766E] shrink-0 mt-0.5" />
            <p className="text-[11px] text-[#102A43] font-medium leading-tight">
              <strong className="text-[#0F766E] font-bold">{tUI.actionStepLabel[language]}: </strong>
              {activeTip.action[language]}
            </p>
          </div>
        </div>
      </div>
    );
  }

  /* ========================================================================= */
  /* VARIANT 2: EXPANDED (for Preventive Care page with category filters)      */
  /* ========================================================================= */
  if (variant === 'expanded') {
    return (
      <div className={`space-y-6 ${className}`}>
        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
          {HEALTH_TIPS_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => handleCategorySelect(cat.key)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition cursor-pointer btn-interactive border ${
                  isSelected
                    ? 'bg-[#0F766E] text-white border-[#0F766E] shadow-sm'
                    : 'bg-white text-[#243447] border-[#CDE8E2] hover:bg-[#D9F3EC] hover:text-[#0F766E]'
                }`}
              >
                {cat.label[language]}
              </button>
            );
          })}
        </div>

        {/* Featured Tip Card for Preventive Care */}
        <div className="bg-white rounded-3xl border border-[#CDE8E2] p-6 sm:p-8 shadow-sm relative overflow-hidden card-hover-lift">
          {/* Subtle Decorative Aqua Radial Accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#35B8A6]/10 to-transparent rounded-full pointer-events-none" />

          {/* Header Row */}
          <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-[#CDE8E2]">
            <div className="flex items-center space-x-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#D9F3EC] flex items-center justify-center text-[#0F766E] shadow-xs border border-[#35B8A6]/40 shrink-0">
                {renderTipIcon(activeTip.icon, 'w-6 h-6 text-[#0F766E]')}
              </div>
              <div>
                <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-[#0F766E]/10 text-[#0F766E] text-[11px] font-bold uppercase tracking-wider border border-[#35B8A6]/30">
                  <Sparkles className="w-3 h-3 text-[#0F766E]" />
                  <span>{tUI.headerBadge[language]}</span>
                </div>
                <h3 className="text-base sm:text-lg font-extrabold text-[#102A43] mt-0.5">
                  {activeTip.category[language]}
                </h3>
              </div>
            </div>

            {/* Tip Counter & Next Tip Button */}
            <div className="flex items-center space-x-3 self-end sm:self-center">
              <span className="text-xs font-bold text-[#102A43] bg-[#E8F7F5] px-3 py-1.5 rounded-xl border border-[#CDE8E2]">
                {tUI.tipCounter[language](currentNum, totalNum)}
              </span>
              <button
                onClick={handleNextTip}
                className="inline-flex items-center space-x-2 px-4 py-2 bg-[#0F766E] hover:bg-[#0D655F] text-white rounded-xl text-xs sm:text-sm font-bold shadow-sm transition btn-interactive cursor-pointer"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isChanging ? 'animate-spin' : ''}`} />
                <span>{tUI.nextTipBtn[language]}</span>
              </button>
            </div>
          </div>

          {/* Main Tip Body with Animation */}
          <div
            key={activeTip.id}
            className={`relative pt-5 space-y-4 transition-all duration-200 ${
              isChanging ? 'opacity-30 scale-[0.99]' : 'opacity-100 scale-100 animate-fade-in'
            }`}
          >
            <h4 className="text-lg sm:text-xl font-extrabold text-[#102A43] leading-snug">
              {activeTip.title[language]}
            </h4>
            <p className="text-xs sm:text-sm text-[#243447] leading-relaxed">
              {activeTip.explanation[language]}
            </p>

            {/* Action Box */}
            <div className="bg-[#D9F3EC] rounded-2xl p-4 sm:p-5 border border-[#35B8A6]/40 flex items-start space-x-3.5 shadow-xs">
              <div className="p-1 rounded-full bg-[#0F766E] text-white mt-0.5 shrink-0">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#0F766E] block">
                  {tUI.actionStepLabel[language]}
                </span>
                <p className="text-xs sm:text-sm font-semibold text-[#102A43] leading-relaxed">
                  {activeTip.action[language]}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Footnote */}
          <div className="mt-5 pt-3 border-t border-[#CDE8E2] flex items-center space-x-2 text-[11px] text-[#64748B]">
            <Info className="w-3.5 h-3.5 text-[#0F766E] shrink-0" />
            <p>{tUI.disclaimer[language]}</p>
          </div>
        </div>
      </div>
    );
  }

  /* ========================================================================= */
  /* VARIANT 3: FEATURED (Prominent Homepage Section)                          */
  /* ========================================================================= */
  return (
    <section className={`py-10 bg-[#E8F7F5] border-t border-[#CDE8E2] ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#CDE8E2] p-6 sm:p-8 md:p-10 shadow-sm relative overflow-hidden card-hover-lift">
          {/* Subtle Background Aqua/Mint Gradient Accents */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#35B8A6]/15 via-[#0F766E]/5 to-transparent rounded-full pointer-events-none" />

          {/* Top Bar: Badge, Category, Counter, and Next Tip Button */}
          <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#CDE8E2]">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#0F766E] to-[#35B8A6] flex items-center justify-center text-white shadow-md border border-[#D9F3EC]/50 shrink-0">
                {renderTipIcon(activeTip.icon, 'w-7 h-7 text-white')}
              </div>
              <div className="space-y-1">
                <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#0F766E]/10 text-[#0F766E] text-xs font-bold uppercase tracking-wider border border-[#35B8A6]/30">
                  <Sparkles className="w-3.5 h-3.5 text-[#0F766E]" />
                  <span>{tUI.headerBadge[language]}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-[#102A43]">
                  {activeTip.category[language]}
                </h3>
              </div>
            </div>

            {/* Right Action Controls: Counter & Next Tip Button */}
            <div className="flex items-center space-x-3 self-end md:self-center">
              <span className="text-xs sm:text-sm font-bold text-[#102A43] bg-[#E8F7F5] px-3.5 py-2 rounded-xl border border-[#CDE8E2]">
                {tUI.tipCounter[language](currentNum, totalNum)}
              </span>
              <button
                onClick={handleNextTip}
                className="inline-flex items-center space-x-2 px-5 py-2.5 bg-[#0F766E] hover:bg-[#0D655F] active:bg-[#0B544F] text-white rounded-xl text-xs sm:text-sm font-bold shadow-md transition transform btn-interactive cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#35B8A6]"
              >
                <RefreshCw className={`w-4 h-4 ${isChanging ? 'animate-spin' : ''}`} />
                <span>{tUI.nextTipBtn[language]}</span>
              </button>
            </div>
          </div>

          {/* Main Tip Body with Animation */}
          <div
            key={activeTip.id}
            className={`relative pt-6 space-y-4 transition-all duration-200 ${
              isChanging ? 'opacity-30 scale-[0.99]' : 'opacity-100 scale-100 animate-fade-in'
            }`}
          >
            <h4 className="text-xl sm:text-2xl font-extrabold text-[#102A43] leading-tight">
              {activeTip.title[language]}
            </h4>
            <p className="text-xs sm:text-sm md:text-base text-[#243447] leading-relaxed max-w-4xl">
              {activeTip.explanation[language]}
            </p>

            {/* Practical Action Step Card */}
            <div className="bg-[#D9F3EC] rounded-2xl p-4 sm:p-5 border border-[#35B8A6]/40 flex items-start space-x-3.5 shadow-xs">
              <div className="p-1.5 rounded-full bg-[#0F766E] text-white mt-0.5 shrink-0">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#0F766E] block">
                  {tUI.actionStepLabel[language]}
                </span>
                <p className="text-xs sm:text-sm font-semibold text-[#102A43] leading-relaxed">
                  {activeTip.action[language]}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar: Medical Disclaimer & Optional Link to Preventive Care */}
          <div className="mt-6 pt-4 border-t border-[#CDE8E2] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#64748B]">
            <div className="flex items-center space-x-2 text-center sm:text-left">
              <Info className="w-4 h-4 text-[#0F766E] shrink-0" />
              <p>{tUI.disclaimer[language]}</p>
            </div>

            {showExploreLink && (
              <Link
                href="/preventive-care"
                className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#0F766E] hover:text-[#0D655F] hover:underline underline-offset-4 shrink-0 transition"
              >
                <span>{tUI.exploreMore[language]}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#35B8A6]" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
