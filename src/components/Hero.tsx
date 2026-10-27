'use client';

import React from 'react';
import Link from 'next/link';
import {
  MessageSquareHeart,
  ArrowRight,
  ShieldCheck,
  Activity,
  Sparkles,
  PhoneCall,
  CheckCircle2,
  Globe,
  Compass
} from 'lucide-react';
import { IndianJaliPattern, MandalaRings } from './IndianPatternDecorations';
import { IndianHealthCompanion } from './IndianHealthCompanion';
import { Language } from '@/lib/types';

interface HeroProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  openEmergencyModal: () => void;
  onOpenCompanion: () => void;
}

export function Hero({
  language,
  setLanguage,
  openEmergencyModal,
  onOpenCompanion
}: HeroProps) {
  const translations = {
    en: {
      greeting: 'Namaste 🙏, Welcome to IMD Care.',
      hindiSubgreeting: 'स्वस्थ रहें, जागरूक रहें। (Stay healthy, stay informed.)',
      headlinePrefix: 'Your Health. Your Questions.',
      headlineHighlight: 'A Healthier You.',
      subtext:
        'Understand health information, explore everyday wellness, and discover informed next steps with your AI health companion.',
      primaryCta: "Let's Get Started",
      secondaryCta: 'Meet Your Health Companion',
      badges: [
        'Multilingual: EN, HI, MR',
        'Conservative 112 Safety',
        'Zero Sensitive Logging'
      ],
      emergencyTicker: 'Immediate Medical Emergency in India? Dial 112 or 108 without waiting.'
    },
    hi: {
      greeting: 'नमस्ते 🙏, IMD Care में आपका स्वागत है।',
      hindiSubgreeting: 'स्वस्थ रहें, जागरूक रहें।',
      headlinePrefix: 'आपका स्वास्थ्य। आपके सवाल।',
      headlineHighlight: 'एक स्वस्थ आप।',
      subtext:
        'स्वास्थ्य संबंधी जानकारी को समझें, दैनिक कल्याण का अन्वेषण करें, और अपने AI स्वास्थ्य साथी के साथ सोच-समझकर कदम उठाएं।',
      primaryCta: 'आइए शुरुआत करें',
      secondaryCta: 'स्वास्थ्य साथी से मिलें',
      badges: [
        'हिंदी, अंग्रेजी व मराठी में उपलब्ध',
        '112 आपातकालीन सुरक्षा ट्राइएज',
        'शून्य संवेदनशील डेटा लॉगिंग'
      ],
      emergencyTicker: 'भारत में कोई भी चिकित्सीय आपात स्थिति? तुरंत 112 या 108 डायल करें।'
    },
    mr: {
      greeting: 'नमस्कार 🙏, IMD Care मध्ये आपले स्वागत आहे.',
      hindiSubgreeting: 'निरोगी राहा, सजग राहा.',
      headlinePrefix: 'आपले आरोग्य. आपले प्रश्न.',
      headlineHighlight: 'निरोगी आपण.',
      subtext:
        'आरोग्याची माहिती समजून घ्या, दैनंदिन स्वास्थ्य जोपासा आणि आपल्या AI आरोग्य सहाय्यकासह योग्य निर्णय घ्या.',
      primaryCta: 'चला सुरुवात करूया',
      secondaryCta: 'आरोग्य मित्राला भेटा',
      badges: [
        'मराठी, हिंदी व इंग्रजीत उपलब्ध',
        '112 सुरक्षित आपत्कालीन ट्रायज',
        'खाजगी व सुरक्षित मार्गदर्शन'
      ],
      emergencyTicker: 'भारतात तातडीची वैद्यकीय आणीबाणी? त्वरित 112 किंवा 108 वर कॉल करा.'
    }
  };

  const t = translations[language] || translations.en;

  const scrollToPathways = () => {
    const el = document.getElementById('what-brings-you');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative bg-gradient-to-b from-[#102A43] via-[#0E243A] to-[#0A1926] text-white overflow-hidden pt-10 pb-16 sm:pt-14 sm:pb-24">
      {/* Background Indian Jali & Mandala Accents */}
      <div className="absolute inset-0 pointer-events-none">
        <IndianJaliPattern className="w-full h-full text-[#35B8A6]/15" />
      </div>
      <div className="absolute top-0 right-0 w-96 h-96 -mr-20 -mt-20 pointer-events-none">
        <MandalaRings className="w-full h-full text-[#0F766E]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Floating Language Switcher Banner */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-8 pb-4 border-b border-white/10">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#0F766E]/40 border border-[#35B8A6]/40 text-xs font-semibold text-[#D9F3EC]">
            <Sparkles className="w-3.5 h-3.5 text-[#35B8A6]" />
            <span>Healthcare AI Built for Bharat</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#35B8A6]" />
            <span className="text-slate-300">OpenAI Powered</span>
          </div>

          {/* Quick Multilingual Pill Selector */}
          <div className="flex items-center space-x-1.5 bg-white/10 backdrop-blur-md p-1 rounded-xl border border-white/15 text-xs font-semibold">
            <Globe className="w-3.5 h-3.5 text-[#35B8A6] ml-2 mr-1" />
            {(['en', 'hi', 'mr'] as Language[]).map((code) => {
              const label = code === 'en' ? 'English' : code === 'hi' ? 'हिंदी' : 'मराठी';
              const isActive = language === code;
              return (
                <button
                  key={code}
                  onClick={() => setLanguage(code)}
                  className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#0F766E] text-white shadow-sm font-bold'
                      : 'text-slate-300 hover:text-white hover:bg-white/10'
                  }`}
                  aria-pressed={isActive}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Welcome Greeting, Headline and CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* 1. Warm Greeting & Hindi Tag */}
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 text-base sm:text-lg font-bold text-[#D9F3EC]">
                <span>{t.greeting}</span>
              </div>
              <p className="text-xs sm:text-sm text-[#35B8A6] font-semibold tracking-wide">
                {t.hindiSubgreeting}
              </p>
            </div>

            {/* 2. Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.2]">
              {t.headlinePrefix}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#35B8A6] via-[#2DD4BF] to-[#D9F3EC]">
                {t.headlineHighlight}
              </span>
            </h1>

            {/* 3. Supporting Text */}
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {t.subtext}
            </p>

            {/* 4. Action CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-1">
              {/* Primary: Let's Get Started (smooth scrolls to what brings you here pathways) */}
              <button
                onClick={scrollToPathways}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#0F766E] hover:bg-[#0D655F] active:bg-[#0B544F] text-white font-bold text-xs sm:text-sm tracking-wide shadow-lg shadow-[#0F766E]/30 hover:shadow-[#0F766E]/50 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#35B8A6]"
              >
                <Compass className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                <span>{t.primaryCta}</span>
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform text-[#35B8A6]" />
              </button>

              {/* Secondary: Meet Your Health Companion (triggers companion welcome modal) */}
              <button
                onClick={onOpenCompanion}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 active:bg-white/20 text-white font-semibold text-xs sm:text-sm border border-white/20 backdrop-blur-sm transition-all flex items-center justify-center gap-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#35B8A6]"
              >
                <MessageSquareHeart className="w-4 h-4 text-[#35B8A6]" />
                <span>{t.secondaryCta}</span>
              </button>
            </div>

            {/* 5. Trust Badges */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-2.5 border-t border-white/10 max-w-xl mx-auto lg:mx-0 text-left">
              {t.badges.map((b, i) => (
                <div key={i} className="flex items-center space-x-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#35B8A6] shrink-0" />
                  <span className="truncate">{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Animated Indian Healthcare Companion */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            <IndianHealthCompanion
              onOpenWelcome={onOpenCompanion}
              language={language}
            />
          </div>
        </div>

        {/* Emergency Ticker Bar */}
        <div className="mt-12 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-300">
          <div className="flex items-center space-x-2 text-center sm:text-left">
            <span className="flex h-2 w-2 rounded-full bg-red-500 animate-ping" />
            <span className="font-semibold text-slate-200">{t.emergencyTicker}</span>
          </div>
          <button
            onClick={openEmergencyModal}
            className="text-xs font-bold text-red-400 hover:text-red-300 underline underline-offset-4 flex items-center gap-1 cursor-pointer"
          >
            <span>View National Emergency Protocols</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </section>
  );
}
