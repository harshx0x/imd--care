'use client';

import React from 'react';
import Link from 'next/link';
import {
  MessageSquareHeart,
  Stethoscope,
  FileSpreadsheet,
  ArrowRight,
  ShieldCheck,
  Activity,
  Heart,
  Sparkles,
  PhoneCall,
  CheckCircle2
} from 'lucide-react';
import { IndianJaliPattern, MandalaRings } from './IndianPatternDecorations';
import { Language } from '@/lib/types';

interface HeroProps {
  onExploreFeatures?: () => void;
  onAskAssistant?: () => void;
  language: Language;
  openEmergencyModal: () => void;
}

export function Hero({
  onExploreFeatures,
  onAskAssistant,
  language,
  openEmergencyModal
}: HeroProps) {
  const translations = {
    en: {
      tag: 'Made for Bharat Health Literacy',
      headline: 'Better Health Understanding Starts Here.',
      subtext:
        'Understand symptoms, simplify medical reports, and make informed healthcare decisions with AI-powered guidance.',
      primaryCta: 'Ask AI Health Assistant',
      secondaryCta: 'Explore Features',
      vitalsBadge: 'Smart Triage AI',
      emergencyTicker: 'Immediate Medical Emergency in India? Dial 112 or 108 without waiting.',
    },
    hi: {
      tag: 'भारत स्वास्थ्य साक्षरता मिशन',
      headline: 'बेहतर स्वास्थ्य समझ की शुरुआत यहीं से होती है।',
      subtext:
        'लक्षणों को समझें, मेडिकल रिपोर्टों को सरल बनाएं और AI-संचालित मार्गदर्शन से सुविचारित स्वास्थ्य निर्णय लें।',
      primaryCta: 'AI स्वास्थ्य सहायक से पूछें',
      secondaryCta: 'सुविधाएं देखें',
      vitalsBadge: 'स्मार्ट ट्राइएज AI',
      emergencyTicker: 'भारत में कोई भी चिकित्सीय आपात स्थिति? तुरंत 112 या 108 डायल करें।',
    },
    mr: {
      tag: 'आरोग्य साक्षरता व्यासपीठ',
      headline: 'आरोग्याची उत्तम समज येथून सुरू होते.',
      subtext:
        'लक्षणे समजून घ्या, वैद्यकीय अहवाल सोप्या भाषेत वाचा आणि AI मार्गदर्शनासह योग्य आरोग्य निर्णय घ्या.',
      primaryCta: 'AI आरोग्य सहाय्यक विचारा',
      secondaryCta: 'वैशिष्ट्ये एक्सप्लोर करा',
      vitalsBadge: 'स्मार्ट ट्रायज AI',
      emergencyTicker: 'भारतात तातडीची वैद्यकीय आणीबाणी? त्वरित 112 किंवा 108 वर कॉल करा.',
    }
  };

  const t = translations[language] || translations.en;

  return (
    <section id="hero" className="relative bg-gradient-to-b from-[#102A43] via-[#0E243A] to-[#0A1926] text-white overflow-hidden pt-12 pb-20 sm:pt-16 sm:pb-28">
      {/* Background Indian Jali & Mandala Accents */}
      <div className="absolute inset-0">
        <IndianJaliPattern className="w-full h-full text-[#DDF5EF]" />
      </div>
      <div className="absolute top-0 right-0 w-96 h-96 -mr-20 -mt-20">
        <MandalaRings className="w-full h-full text-[#0F766E]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline and CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Tag Badge */}
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#0F766E]/30 border border-[#2DD4BF]/30 text-xs font-semibold text-[#DDF5EF]">
              <Sparkles className="w-3.5 h-3.5 text-[#2DD4BF]" />
              <span>{t.tag}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF]" />
              <span className="text-slate-300">OpenAI Powered</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Better Health Understanding{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2DD4BF] to-[#DDF5EF]">
                Starts Here.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {t.subtext}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/assistant"
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-[#0F766E] hover:bg-[#0D655F] active:bg-[#0B544F] text-white font-bold text-sm tracking-wide shadow-lg shadow-[#0F766E]/30 hover:shadow-[#0F766E]/50 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <MessageSquareHeart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>{t.primaryCta}</span>
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="#features-overview"
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-white/10 hover:bg-white/15 active:bg-white/20 text-white font-semibold text-sm border border-white/15 backdrop-blur-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{t.secondaryCta}</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-white/10 max-w-xl mx-auto lg:mx-0 text-left">
              <div className="flex items-center space-x-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-[#2DD4BF] shrink-0" />
                <span>Multilingual: EN, HI, MR</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-[#2DD4BF] shrink-0" />
                <span>Conservative 112 Safety</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-[#2DD4BF] shrink-0" />
                <span>Zero Sensitive Logging</span>
              </div>
            </div>
          </div>

          {/* Right Column: Abstract AI-Health Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#0F766E] to-[#2DD4BF] rounded-3xl blur-xl opacity-30 animate-pulse" />

              {/* Polished Healthcare Startup Visual Card */}
              <div className="relative rounded-2xl bg-[#0F2236]/90 backdrop-blur-xl border border-white/15 p-6 shadow-2xl space-y-5">
                {/* Visual Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#0F766E] to-[#2DD4BF] flex items-center justify-center text-white shadow-md">
                      <Activity className="w-5 h-5 animate-pulse" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-white flex items-center gap-1.5">
                        <span>IMD Health Intelligence</span>
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      </h3>
                      <p className="text-[11px] text-slate-400">Clinical Knowledge Platform</p>
                    </div>
                  </div>
                  <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Live Demo
                  </span>
                </div>

                {/* Simulated AI Assistant Chat Bubble */}
                <div className="space-y-3 text-xs">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-slate-300 space-y-1">
                    <div className="flex items-center justify-between text-[10px] text-slate-400">
                      <span className="font-semibold text-slate-300">Patient Inquiry</span>
                      <span>Just now</span>
                    </div>
                    <p className="text-white font-medium">
                      &quot;How do I understand my HbA1c result of 6.2%? Is it diabetes?&quot;
                    </p>
                  </div>

                  <div className="bg-[#0F766E]/20 border border-[#2DD4BF]/30 rounded-xl p-3.5 space-y-2">
                    <div className="flex items-center justify-between text-[10px]">
                      <span className="font-bold text-[#2DD4BF] flex items-center gap-1">
                        <Sparkles className="w-3 h-3" /> IMD Care AI Guide
                      </span>
                      <span className="text-slate-400 text-[10px]">Empathetic & Evidence-based</span>
                    </div>
                    <p className="text-slate-200 text-xs leading-relaxed">
                      An HbA1c of <strong>6.2%</strong> falls within the prediabetes interval (5.7% – 6.4%). This is an early window of opportunity where diet, daily walking, and medical guidance can help return blood sugar to normal.
                    </p>
                    <div className="flex items-center gap-1.5 pt-1 text-[11px] text-[#DDF5EF] font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2DD4BF]" />
                      <span>Ready with practical questions for your physician</span>
                    </div>
                  </div>
                </div>

                {/* Interactive Vitals / Metric Ribbon */}
                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/10 text-center">
                  <div className="bg-white/5 rounded-lg p-2.5">
                    <span className="text-[10px] text-slate-400 block">Emergency</span>
                    <span className="text-sm font-bold text-red-400 flex items-center justify-center gap-1">
                      <PhoneCall className="w-3 h-3" /> 112
                    </span>
                  </div>
                  <div className="bg-white/5 rounded-lg p-2.5">
                    <span className="text-[10px] text-slate-400 block">Languages</span>
                    <span className="text-sm font-bold text-[#2DD4BF]">EN / HI / MR</span>
                  </div>
                  <div className="bg-white/5 rounded-lg p-2.5">
                    <span className="text-[10px] text-slate-400 block">Verification</span>
                    <span className="text-sm font-bold text-emerald-300">Synthetic Labs</span>
                  </div>
                </div>
              </div>
            </div>
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
