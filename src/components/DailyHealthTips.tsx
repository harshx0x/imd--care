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
  Info,
  BookOpen,
  X,
  Stethoscope
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
  const [tipIndex, setTipIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string>(defaultCategory);
  const [isChanging, setIsChanging] = useState(false);
  const [isLearnMoreModalOpen, setIsLearnMoreModalOpen] = useState(false);

  // Filter tips if a category is selected
  const filteredTips = useMemo(() => {
    if (selectedCategory === 'all') return HEALTH_TIPS;
    return HEALTH_TIPS.filter((t) => t.categoryKey === selectedCategory);
  }, [selectedCategory]);

  const activeTip: HealthTip = filteredTips[tipIndex % filteredTips.length] || HEALTH_TIPS[0];

  // Hydration-safe initial tip selection
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

  // Helper to render tailored SVG illustration artwork for category
  const renderIllustrationArtwork = (categoryKey: string) => {
    switch (categoryKey) {
      case 'hydration':
        return (
          <svg viewBox="0 0 120 120" className="w-full h-full" fill="none">
            <rect width="120" height="120" rx="24" fill="#E8F7F5" />
            <path d="M42 36L48 90C48.5 94 51.5 96 56 96H64C68.5 96 71.5 94 72 90L78 36H42Z" fill="#35B8A6" fillOpacity="0.25" stroke="#0F766E" strokeWidth="2.5" strokeLinejoin="round" />
            <path d="M46 54L48 90C48.5 94 51.5 96 56 96H64C68.5 96 71.5 94 72 90L74 54C70 56 64 53 60 54C56 55 50 56 46 54Z" fill="#0F766E" fillOpacity="0.4" />
            <path d="M60 22C60 22 53 30 53 34C53 37.866 56.134 41 60 41C63.866 41 67 37.866 67 34C67 30 60 22 60 22Z" fill="#0F766E" />
            <circle cx="78" cy="28" r="3" fill="#2DD4BF" />
            <circle cx="84" cy="40" r="2" fill="#35B8A6" />
          </svg>
        );
      case 'nutrition':
      case 'eating_habits':
        return (
          <svg viewBox="0 0 120 120" className="w-full h-full" fill="none">
            <rect width="120" height="120" rx="24" fill="#FEF3C7" />
            <circle cx="60" cy="60" r="36" fill="#FFFFFF" stroke="#D97706" strokeWidth="2.5" />
            <circle cx="60" cy="60" r="28" stroke="#FDE68A" strokeWidth="1.5" strokeDasharray="3 3" />
            <circle cx="50" cy="52" r="10" fill="#34D399" fillOpacity="0.8" />
            <circle cx="70" cy="52" r="9" fill="#F59E0B" fillOpacity="0.8" />
            <ellipse cx="60" cy="72" rx="12" ry="6" fill="#F87171" fillOpacity="0.8" />
            <circle cx="86" cy="30" r="3" fill="#D97706" />
          </svg>
        );
      case 'activity':
      case 'posture':
        return (
          <svg viewBox="0 0 120 120" className="w-full h-full" fill="none">
            <rect width="120" height="120" rx="24" fill="#E0F2FE" />
            <path d="M30 74L44 74C48 74 52 72 56 68L68 56C72 52 78 50 84 50H92V62C92 70 86 76 78 76H30V74Z" fill="#0284C7" fillOpacity="0.3" stroke="#0369A1" strokeWidth="2.5" strokeLinejoin="round" />
            <path d="M26 76H94V82C94 84 92 86 90 86H30C28 86 26 84 26 82V76Z" fill="#0369A1" />
            <path d="M60 52L68 58M64 48L72 54" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" />
            <path d="M22 66H14M20 72H12" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
          </svg>
        );
      case 'sleep':
        return (
          <svg viewBox="0 0 120 120" className="w-full h-full" fill="none">
            <rect width="120" height="120" rx="24" fill="#EDE9FE" />
            <path d="M64 30C50 32 40 44 40 58C40 73 52 85 67 85C74 85 80 82 85 78C74 78 64 68 64 56C64 46 69 38 76 34C72 31 68 30 64 30Z" fill="#7C3AED" fillOpacity="0.3" stroke="#6D28D9" strokeWidth="2.5" strokeLinejoin="round" />
            <circle cx="36" cy="38" r="2.5" fill="#8B5CF6" />
            <circle cx="84" cy="40" r="3" fill="#A78BFA" />
            <circle cx="78" cy="24" r="2" fill="#8B5CF6" />
            <circle cx="48" cy="80" r="2" fill="#A78BFA" />
          </svg>
        );
      case 'hygiene':
      case 'oral_health':
      case 'food_safety':
        return (
          <svg viewBox="0 0 120 120" className="w-full h-full" fill="none">
            <rect width="120" height="120" rx="24" fill="#DCFCE7" />
            <rect x="40" y="52" width="40" height="26" rx="10" fill="#16A34A" fillOpacity="0.3" stroke="#15803D" strokeWidth="2.5" />
            <circle cx="50" cy="40" r="8" fill="#86EFAC" fillOpacity="0.6" stroke="#16A34A" strokeWidth="1.5" />
            <circle cx="68" cy="36" r="6" fill="#86EFAC" fillOpacity="0.6" stroke="#16A34A" strokeWidth="1.5" />
            <circle cx="78" cy="46" r="4" fill="#86EFAC" fillOpacity="0.6" stroke="#16A34A" strokeWidth="1.5" />
          </svg>
        );
      default:
        return (
          <svg viewBox="0 0 120 120" className="w-full h-full" fill="none">
            <rect width="120" height="120" rx="24" fill="#E8F7F5" />
            <circle cx="60" cy="60" r="30" fill="#35B8A6" fillOpacity="0.3" stroke="#0F766E" strokeWidth="2.5" />
            <path d="M50 60L57 67L72 52" stroke="#0F766E" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
    }
  };

  const tUI = HEALTH_TIPS_UI;
  const currentNum = (tipIndex % filteredTips.length) + 1;
  const totalNum = filteredTips.length;

  const learnMoreModalStrings = {
    en: {
      modalTitle: 'Clinical Context & Discussion Guide',
      clinicalRationale: 'Evidence-Based Medical Rationale:',
      doctorQuestions: 'Questions to discuss with your healthcare provider:',
      personalizedNotice: 'Health recommendations vary depending on age, preexisting conditions, and climate. Never replace personal physician consultation with general wellness advice.',
      closeBtn: 'Close Guide'
    },
    hi: {
      modalTitle: 'चिकित्सीय संदर्भ और चर्चा मार्गदर्शिका',
      clinicalRationale: 'प्रमाण-आधारित चिकित्सीय दृष्टिकोण:',
      doctorQuestions: 'अपने डॉक्टर से पूछने योग्य महत्वपूर्ण प्रश्न:',
      personalizedNotice: 'स्वास्थ्य सलाह उम्र, पूर्व बीमारियों और जलवायु के अनुसार भिन्न हो सकती है। व्यक्तिगत डॉक्टर की सलाह का कोई विकल्प नहीं है।',
      closeBtn: 'बंद करें'
    },
    mr: {
      modalTitle: 'वैद्यकीय संदर्भ व चर्चा मार्गदर्शक',
      clinicalRationale: 'पुरावा-आधारित शास्त्रीय पार्श्वभूमी:',
      doctorQuestions: 'आपल्या डॉक्टरांशी चर्चा करण्यासाठी महत्त्वाचे प्रश्न:',
      personalizedNotice: 'आरोग्यविषयक गरजा वय, जुने आजार आणि हवामानानुसार बदलतात. आपल्या वैयक्तिक डॉक्टरांचा सल्ला नेहमी सर्वोच्च मानला पाहिजे.',
      closeBtn: 'मार्गदर्शक बंद करा'
    }
  }[language];

  /* ========================================================================= */
  /* VARIANT 1: COMPACT (for Assistant, Symptoms, Reports, Auth pages)          */
  /* ========================================================================= */
  if (variant === 'compact') {
    return (
      <div className={`bg-white rounded-2xl border border-[#CDE8E2] p-4 sm:p-5 shadow-xs card-hover-lift ${className}`}>
        <div className="flex items-center justify-between gap-2 pb-3 border-b border-[#CDE8E2]">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-xl bg-[#D9F3EC] flex items-center justify-center text-[#0F766E] shrink-0 border border-[#35B8A6]/30">
              {renderTipIcon(activeTip.icon, 'w-4 h-4 text-[#0F766E]')}
            </div>
            <div>
              <span className="text-3xs font-bold uppercase tracking-wider text-[#0F766E] block">
                {tUI.headerBadge[language]}
              </span>
              <span className="text-xs font-semibold text-[#102A43] block">
                {activeTip.category[language]}
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-2xs font-semibold text-[#64748B] bg-[#E8F7F5] px-2 py-0.5 rounded-full border border-[#CDE8E2]">
              {tUI.tipCounter[language](currentNum, totalNum)}
            </span>
            <button
              onClick={handleNextTip}
              title={tUI.nextTipBtn[language]}
              aria-label={tUI.nextTipBtn[language]}
              className="p-1.5 rounded-lg bg-[#E8F7F5] hover:bg-[#D9F3EC] text-[#0F766E] border border-[#CDE8E2] transition cursor-pointer"
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
            <p className="text-2xs text-[#102A43] font-medium leading-tight">
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
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition cursor-pointer border ${
                  isSelected
                    ? 'bg-[#0F766E] text-white border-[#0F766E] shadow-xs'
                    : 'bg-white text-[#243447] border-[#CDE8E2] hover:bg-[#D9F3EC] hover:text-[#0F766E]'
                }`}
              >
                {cat.label[language]}
              </button>
            );
          })}
        </div>

        {/* Featured Tip Card */}
        <div className="bg-white rounded-3xl border border-[#CDE8E2] p-6 sm:p-8 shadow-xs relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-[#CDE8E2]">
            <div className="flex items-center space-x-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#D9F3EC] flex items-center justify-center text-[#0F766E] shadow-2xs border border-[#35B8A6]/40 shrink-0">
                {renderTipIcon(activeTip.icon, 'w-6 h-6 text-[#0F766E]')}
              </div>
              <div>
                <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-[#0F766E]/10 text-[#0F766E] text-2xs font-bold uppercase tracking-wider border border-[#35B8A6]/30">
                  <Sparkles className="w-3 h-3 text-[#0F766E]" />
                  <span>{tUI.headerBadge[language]}</span>
                </div>
                <h3 className="text-base sm:text-lg font-extrabold text-[#102A43] mt-0.5">
                  {activeTip.category[language]}
                </h3>
              </div>
            </div>

            <div className="flex items-center space-x-3 self-end sm:self-center">
              <span className="text-xs font-bold text-[#102A43] bg-[#E8F7F5] px-3 py-1.5 rounded-xl border border-[#CDE8E2]">
                {tUI.tipCounter[language](currentNum, totalNum)}
              </span>
              <button
                onClick={handleNextTip}
                className="inline-flex items-center space-x-2 px-4 py-2 bg-[#0F766E] hover:bg-[#0D655F] text-white rounded-xl text-xs sm:text-sm font-bold shadow-xs transition cursor-pointer"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isChanging ? 'animate-spin' : ''}`} />
                <span>{tUI.nextTipBtn[language]}</span>
              </button>
            </div>
          </div>

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

            <div className="bg-[#D9F3EC] rounded-2xl p-4 sm:p-5 border border-[#35B8A6]/40 flex items-start space-x-3.5 shadow-2xs">
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

          <div className="mt-5 pt-3 border-t border-[#CDE8E2] flex items-center space-x-2 text-2xs text-[#64748B]">
            <Info className="w-3.5 h-3.5 text-[#0F766E] shrink-0" />
            <p>{tUI.disclaimer[language]}</p>
          </div>
        </div>
      </div>
    );
  }

  /* ========================================================================= */
  /* VARIANT 3: FEATURED (Homepage Section 5: Illustrated Visual Tip)          */
  /* ========================================================================= */
  return (
    <section className={`py-8 bg-white border-y border-slate-200/80 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-50 via-white to-[#E8F7F5]/30 rounded-3xl border border-slate-200/90 p-6 sm:p-8 md:p-10 shadow-xs relative overflow-hidden">
          {/* Top Bar: Category Pill, Counter, and Next Tip Action */}
          <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200/80">
            <div className="flex items-center space-x-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#0F766E] text-white flex items-center justify-center shadow-xs shrink-0">
                {renderTipIcon(activeTip.icon, 'w-6 h-6 text-white')}
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F7F5] text-[#0F766E] text-2xs font-bold uppercase tracking-wider border border-[#0F766E]/20">
                  <Sparkles className="w-3 h-3 text-[#35B8A6]" />
                  <span>{tUI.headerBadge[language]}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-black text-[#102A43] tracking-tight mt-0.5">
                  {activeTip.category[language]}
                </h3>
              </div>
            </div>

            {/* Right Controls: Tip Index Counter + Next Tip Button */}
            <div className="flex items-center space-x-3 self-end md:self-center">
              <span className="text-xs font-bold text-[#102A43] bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-2xs">
                {tUI.tipCounter[language](currentNum, totalNum)}
              </span>
              <button
                type="button"
                onClick={handleNextTip}
                className="inline-flex items-center space-x-2 px-4 py-2 bg-[#0F766E] hover:bg-[#0D655F] active:bg-[#0B544F] text-white rounded-xl text-xs sm:text-sm font-bold shadow-xs transition-colors cursor-pointer"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isChanging ? 'animate-spin' : ''}`} />
                <span>{tUI.nextTipBtn[language]}</span>
              </button>
            </div>
          </div>

          {/* Main Tip Body with Illustrated Artwork Column */}
          <div
            key={activeTip.id}
            className={`grid grid-cols-1 md:grid-cols-12 gap-6 items-center pt-6 transition-all duration-200 ${
              isChanging ? 'opacity-30 scale-[0.99]' : 'opacity-100 scale-100 animate-fade-in'
            }`}
          >
            {/* Left 3 cols: Tailored SVG Artwork Illustration */}
            <div className="md:col-span-3 flex items-center justify-center">
              <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-3xl p-2 shadow-2xs">
                {renderIllustrationArtwork(activeTip.categoryKey)}
              </div>
            </div>

            {/* Right 9 cols: Title, Explanation, Action Pill, and Learn More CTA */}
            <div className="md:col-span-9 space-y-4">
              <div>
                <h4 className="text-xl sm:text-2xl font-black text-[#102A43] tracking-tight leading-snug">
                  {activeTip.title[language]}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2 max-w-3xl">
                  {activeTip.explanation[language]}
                </p>
              </div>

              {/* Action Box */}
              <div className="bg-[#E8F7F5] rounded-2xl p-4 border border-[#0F766E]/20 flex items-start space-x-3 shadow-2xs">
                <div className="p-1 rounded-full bg-[#0F766E] text-white mt-0.5 shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-2xs font-extrabold uppercase tracking-wider text-[#0F766E] block">
                    {tUI.actionStepLabel[language]}
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-[#102A43] leading-relaxed mt-0.5">
                    {activeTip.action[language]}
                  </p>
                </div>
              </div>

              {/* Action Buttons: Learn More & Explore More */}
              <div className="pt-2 flex items-center gap-4 flex-wrap">
                <button
                  type="button"
                  onClick={() => setIsLearnMoreModalOpen(true)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold transition-colors cursor-pointer border border-slate-200"
                >
                  <BookOpen className="w-3.5 h-3.5 text-[#0F766E]" />
                  <span>Learn More &amp; Doctor Discussion</span>
                </button>

                {showExploreLink && (
                  <Link
                    href="/preventive-care"
                    className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#0F766E] hover:underline"
                  >
                    <span>{tUI.exploreMore[language]}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* Bottom Bar: Medical Disclaimer */}
          <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center space-x-2 text-2xs text-slate-500">
            <Info className="w-3.5 h-3.5 text-[#0F766E] shrink-0" />
            <p>{tUI.disclaimer[language]}</p>
          </div>
        </div>
      </div>

      {/* Learn More Interactive Modal with Real Medical Grounding */}
      {isLearnMoreModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs animate-fade-in">
          <div className="bg-white rounded-3xl p-6 sm:p-7 max-w-lg w-full shadow-2xl border border-slate-200 space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Stethoscope className="w-5 h-5 text-[#0F766E]" />
                <h3 className="text-base sm:text-lg font-bold text-[#102A43]">
                  {learnMoreModalStrings.modalTitle}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsLearnMoreModalOpen(false)}
                className="p-1 text-slate-400 hover:text-slate-600 rounded-lg cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div>
              <span className="text-2xs font-bold text-[#0F766E] uppercase tracking-wider block">
                {activeTip.category[language]}
              </span>
              <h4 className="text-base font-bold text-[#102A43] mt-0.5">
                {activeTip.title[language]}
              </h4>
            </div>

            {/* Medical Rationale */}
            <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200/80 text-xs text-slate-700 space-y-1.5">
              <span className="font-bold text-[#102A43] block">
                {learnMoreModalStrings.clinicalRationale}
              </span>
              <p className="leading-relaxed">
                {activeTip.explanation[language]}
              </p>
              <div className="text-2xs text-[#0F766E] font-semibold pt-1">
                Source: AIIMS / ICMR Preventive Health Reference Guidelines
              </div>
            </div>

            {/* Doctor Questions */}
            <div className="space-y-2">
              <span className="font-bold text-xs text-[#102A43] block">
                {learnMoreModalStrings.doctorQuestions}
              </span>
              <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-5">
                <li>How does this habit interact with my current blood pressure or sugar readings?</li>
                <li>Are there any specific dietary adjustments recommended for my age group?</li>
                <li>How frequently should I schedule routine preventive check-ups?</li>
              </ul>
            </div>

            {/* Disclaimer */}
            <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-2xs text-amber-800 leading-relaxed flex items-start gap-2">
              <Info className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
              <span>{learnMoreModalStrings.personalizedNotice}</span>
            </div>

            {/* Close button */}
            <div className="pt-2 text-right">
              <button
                type="button"
                onClick={() => setIsLearnMoreModalOpen(false)}
                className="px-4 py-2 bg-[#0F766E] hover:bg-[#0D655F] text-white font-semibold text-xs rounded-xl shadow-xs transition-colors cursor-pointer"
              >
                {learnMoreModalStrings.closeBtn}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
