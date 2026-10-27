'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  HeartPulse,
  ArrowLeft,
  Globe,
  CheckCircle2,
  ShieldCheck,
  AlertTriangle,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { Language } from '@/lib/types';
import { AUTH_TRANSLATIONS } from '@/lib/translations/auth';
import { IndianJaliPattern, MandalaRings } from '@/components/IndianPatternDecorations';
import { IndianHealthCompanion } from '@/components/IndianHealthCompanion';
import { DailyHealthTips } from '@/components/DailyHealthTips';

interface AuthLayoutProps {
  children: React.ReactNode;
  activeTab: 'login' | 'register' | 'forgot-password';
}

export function AuthLayout({ children, activeTab }: AuthLayoutProps) {
  const { language, setLanguage, isSupabaseReady } = useApp();
  const [showSetupGuide, setShowSetupGuide] = useState(false);

  const t = AUTH_TRANSLATIONS[language] || AUTH_TRANSLATIONS.en;

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-[#E8F7F5] text-[#243447]">
      {/* Left Column: Dark Navy Brand & Healthcare Companion (Desktop) */}
      <div className="relative w-full lg:w-5/12 bg-gradient-to-b from-[#102A43] via-[#0E243A] to-[#0A1926] text-white p-8 sm:p-12 lg:p-16 flex flex-col justify-between overflow-hidden shrink-0">
        {/* Subtle Indian Geometric Motifs */}
        <div className="absolute inset-0 pointer-events-none">
          <IndianJaliPattern className="w-full h-full text-[#35B8A6]/15" />
        </div>
        <div className="absolute top-0 right-0 w-80 h-80 -mr-16 -mt-16 pointer-events-none">
          <MandalaRings className="w-full h-full text-[#0F766E]" />
        </div>

        {/* Top Header in Left Column */}
        <div className="relative z-10 space-y-6">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-xs font-semibold text-[#D9F3EC] hover:text-white transition group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-[#35B8A6] group-hover:-translate-x-1 transition-transform" />
            <span>{t.backToHome}</span>
          </Link>

          <div className="flex items-center space-x-3 pt-2">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#0F766E] to-[#35B8A6] flex items-center justify-center text-white shadow-lg border border-[#D9F3EC]/40">
              <HeartPulse className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="font-extrabold text-xl tracking-tight text-white">IMD Care</span>
                <span className="text-[10px] uppercase font-bold px-1.5 py-0.2 rounded-md bg-[#D9F3EC] text-[#0F766E] border border-[#35B8A6]/30">
                  AI
                </span>
              </div>
              <span className="text-xs text-[#D9F3EC]/80 font-medium">
                Ethical Healthcare Literacy
              </span>
            </div>
          </div>
        </div>

        {/* Middle: Friendly Mascot & Welcoming Text */}
        <div className="relative z-10 my-8 lg:my-10 space-y-6">
          {/* Welcoming Text */}
          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              {t.welcomeTitle}
            </h1>
            <p className="text-sm text-[#35B8A6] font-semibold">
              {t.welcomeSubtitle}
            </p>
          </div>

          {/* Interactive Mascot Visual */}
          <div className="py-2 flex items-center justify-center lg:justify-start">
            <div className="scale-90 sm:scale-95 origin-center lg:origin-left">
              <IndianHealthCompanion
                language={language}
                onOpenWelcome={() => {}}
              />
            </div>
          </div>

          {/* Trust Guarantees */}
          <div className="space-y-2.5 pt-2 border-t border-white/10">
            {t.heroPoints.map((point, idx) => (
              <div key={idx} className="flex items-center space-x-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-[#35B8A6] shrink-0" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Left Footer: Privacy Notice */}
        <div className="relative z-10 pt-4 border-t border-white/10 text-[11px] text-slate-400 flex items-center space-x-2">
          <ShieldCheck className="w-4 h-4 text-[#35B8A6] shrink-0" />
          <span>{t.privacyGuarantee}</span>
        </div>
      </div>

      {/* Right Column: Clean Pale Aqua Surface & Auth Card */}
      <div className="flex-1 flex flex-col justify-between p-4 sm:p-8 lg:p-12 overflow-y-auto">
        {/* Top Utility Bar: Language Selector & Logo */}
        <div className="flex items-center justify-between pb-6 max-w-xl mx-auto w-full">
          <Link href="/" className="lg:hidden flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#0F766E] to-[#35B8A6] flex items-center justify-center text-white shadow-xs">
              <HeartPulse className="w-4 h-4 text-white" />
            </div>
            <span className="font-extrabold text-base text-[#102A43]">IMD Care</span>
          </Link>

          <div className="hidden lg:block">
            <span className="text-xs font-semibold text-[#64748B]">
              {activeTab === 'login' && t.loginHeading}
              {activeTab === 'register' && t.registerHeading}
              {activeTab === 'forgot-password' && t.forgotPasswordHeading}
            </span>
          </div>

          {/* Multilingual Selector */}
          <div className="flex items-center space-x-1 bg-white p-1 rounded-xl border border-[#CDE8E2] shadow-xs text-xs font-semibold">
            <Globe className="w-3.5 h-3.5 text-[#0F766E] ml-2 mr-1" />
            {(['en', 'hi', 'mr'] as Language[]).map((code) => {
              const label = code === 'en' ? 'English' : code === 'hi' ? 'हिंदी' : 'मराठी';
              const isActive = language === code;
              return (
                <button
                  key={code}
                  type="button"
                  onClick={() => setLanguage(code)}
                  className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#0F766E] text-white shadow-xs font-bold'
                      : 'text-[#243447] hover:text-[#0F766E] hover:bg-[#E8F7F5]'
                  }`}
                  aria-pressed={isActive}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Card Container */}
        <div className="max-w-xl mx-auto w-full my-auto">
          {/* Supabase Setup State Notice (if credentials are not configured) */}
          {!isSupabaseReady && (
            <div className="mb-6 bg-amber-50/90 border border-amber-300 rounded-2xl p-4 sm:p-5 text-xs text-amber-950 shadow-sm animate-in fade-in duration-200">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                  <AlertTriangle className="w-4 h-4" />
                </div>
                <div className="space-y-1 flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-amber-900 text-sm">
                      {t.setupBannerTitle}
                    </h4>
                    <button
                      type="button"
                      onClick={() => setShowSetupGuide(!showSetupGuide)}
                      className="text-amber-800 font-bold hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>{showSetupGuide ? t.setupInstructionsClose : t.setupInstructionsBtn}</span>
                      {showSetupGuide ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                  <p className="text-amber-800 leading-relaxed">
                    {t.setupBannerDesc}
                  </p>

                  {showSetupGuide && (
                    <div className="mt-3 pt-3 border-t border-amber-200/80 space-y-2 text-amber-900 animate-in fade-in duration-150">
                      <p className="font-semibold text-xs text-amber-950">
                        Setup Instructions:
                      </p>
                      <ol className="list-decimal list-inside space-y-1 text-[11px] text-amber-800">
                        <li>{t.setupStep1}</li>
                        <li>{t.setupStep2}</li>
                        <li>{t.setupStep3}</li>
                      </ol>
                      <div className="bg-amber-100/70 p-2.5 rounded-xl font-mono text-[10.5px] text-amber-950 border border-amber-200 select-all">
                        NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co<br />
                        NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* The White Card containing the active form with smooth entrance animation */}
          <div className="bg-white rounded-3xl border border-[#CDE8E2] shadow-xl p-6 sm:p-8 lg:p-10 transition-all card-hover-lift animate-fade-in-up">
            {children}
          </div>

          {/* Subtle Daily Medical Tip for Auth Users */}
          <div className="mt-6 animate-fade-in-up delay-150">
            <DailyHealthTips language={language} variant="compact" />
          </div>
        </div>

        {/* Right Footer */}
        <div className="max-w-xl mx-auto w-full pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#64748B] gap-2">
          <span>© 2025–2026 IMD Care. Healthcare Literacy Platform.</span>
          <div className="flex items-center space-x-3">
            <Link href="/" className="hover:text-[#0F766E] transition">
              Home
            </Link>
            <span>•</span>
            <Link href="/symptoms" className="hover:text-[#0F766E] transition">
              Symptoms
            </Link>
            <span>•</span>
            <Link href="/reports" className="hover:text-[#0F766E] transition">
              Reports
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
