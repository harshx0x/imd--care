'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  CalendarCheck,
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { Hero } from '@/components/Hero';
import { WhatBringsYouHere } from '@/components/WhatBringsYouHere';
import { WellnessInspiration } from '@/components/WellnessInspiration';
import { FeatureHighlights } from '@/components/FeatureHighlights';
import { CompanionWelcomeModal } from '@/components/CompanionWelcomeModal';
import { useApp } from '@/context/AppContext';

export default function HomePage() {
  const { language, setLanguage, openEmergencyModal, openDisclaimerModal } = useApp();
  const [companionModalOpen, setCompanionModalOpen] = useState(false);

  return (
    <div className="space-y-0">
      {/* 1. Indian-Inspired Welcome Hero with Language Switcher & Interactive Mascot */}
      <Hero
        language={language}
        setLanguage={setLanguage}
        openEmergencyModal={() => openEmergencyModal('Hero National Emergency Triage Request')}
        onOpenCompanion={() => setCompanionModalOpen(true)}
      />

      {/* 2. Interactive Welcome Companion Modal Panel */}
      <CompanionWelcomeModal
        isOpen={companionModalOpen}
        onClose={() => setCompanionModalOpen(false)}
        language={language}
      />

      {/* 3. Interactive “What Brings You Here Today?” 4-Card Section */}
      <WhatBringsYouHere language={language} />

      {/* 4. “A Little Health Inspiration” Daily Wellness Card */}
      <WellnessInspiration language={language} />

      {/* 5. Core Feature Modules Overview */}
      <FeatureHighlights language={language} />

      {/* 6. Small Preventive Care Preview in Soft Mint */}
      <section className="py-12 bg-[#E8F7F5] border-t border-[#CDE8E2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#D9F3EC] rounded-2xl border border-[#CDE8E2] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="space-y-3 max-w-xl text-center md:text-left">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#0F766E]/15 text-[#0F766E] text-xs font-bold uppercase tracking-wider border border-[#35B8A6]/30">
                <CalendarCheck className="w-3.5 h-3.5 text-[#0F766E]" />
                <span>Habit & Reminder Tracking</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#102A43]">
                Daily Indian Wellness & Medication Reminders
              </h3>
              <p className="text-xs sm:text-sm text-[#243447] leading-relaxed">
                Stay on top of prescriptions, clinical follow-ups, hydration goals, and pranayama routines. Data stays private in your browser.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-[#243447] font-medium justify-center md:justify-start">
                <span className="flex items-center gap-1.5 bg-white/80 px-2.5 py-1 rounded-lg border border-[#CDE8E2]">
                  <CheckCircle2 className="w-4 h-4 text-[#0F766E]" />
                  <span>Local Storage Privacy</span>
                </span>
                <span className="flex items-center gap-1.5 bg-white/80 px-2.5 py-1 rounded-lg border border-[#CDE8E2]">
                  <CheckCircle2 className="w-4 h-4 text-[#0F766E]" />
                  <span>Hydration & Sleep Tracker</span>
                </span>
              </div>
            </div>

            <div className="shrink-0 w-full md:w-auto text-center">
              <Link
                href="/preventive-care"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#0F766E] hover:bg-[#0D655F] text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition transform hover:-translate-y-0.5 cursor-pointer"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Open Preventive Care</span>
                <ArrowRight className="w-4 h-4 text-[#35B8A6]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Medical Disclaimer Strip */}
      <section className="py-8 bg-[#E8F7F5] border-t border-[#CDE8E2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-4 bg-white rounded-xl border border-[#CDE8E2] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#243447] shadow-xs">
            <div className="flex items-center space-x-3 text-center sm:text-left">
              <ShieldCheck className="w-5 h-5 text-[#0F766E] shrink-0" />
              <p>
                <strong>Medical Notice:</strong> IMD Care is an AI-powered health literacy platform built for educational guidance. Never ignore emergency symptoms or modify prescription dosages without consulting a licensed physician.
              </p>
            </div>
            <button
              onClick={openDisclaimerModal}
              className="text-xs font-bold text-[#0F766E] hover:underline whitespace-nowrap shrink-0 cursor-pointer"
            >
              Read Full Safety Terms →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
