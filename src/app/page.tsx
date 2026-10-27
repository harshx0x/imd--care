'use client';

import React from 'react';
import Link from 'next/link';
import {
  CalendarCheck,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Droplets,
  Activity,
  HeartPulse,
  Clock,
  Sparkles
} from 'lucide-react';
import { Hero } from '@/components/Hero';
import { FeatureHighlights } from '@/components/FeatureHighlights';
import { useApp } from '@/context/AppContext';

export default function HomePage() {
  const { language, openEmergencyModal, openDisclaimerModal } = useApp();

  return (
    <div className="space-y-0">
      {/* 1. Dark Navy Hero Section */}
      <Hero
        language={language}
        openEmergencyModal={() => openEmergencyModal('Hero National Emergency Triage Request')}
      />

      {/* 2. Three Compact Feature Cards Linking to Dedicated Pages */}
      <FeatureHighlights language={language} />

      {/* 3. Small Preventive Care Preview */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#F0FBF7] to-[#DDF5EF]/40 rounded-2xl border border-[#BCE7DC] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
            <div className="space-y-3 max-w-xl text-center md:text-left">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#0F766E]/10 text-[#0F766E] text-xs font-bold uppercase tracking-wider">
                <CalendarCheck className="w-3.5 h-3.5" />
                <span>Habit & Reminder Tracking</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#102A43]">
                Daily Indian Wellness & Medication Reminders
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Stay on top of prescriptions, clinical follow-ups, hydration goals, and pranayama routines. Data stays private in your browser.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-slate-700 font-medium justify-center md:justify-start">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0F766E]" />
                  <span>Local Storage Privacy</span>
                </span>
                <span className="flex items-center gap-1.5">
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
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Medical Disclaimer Strip */}
      <section className="py-8 bg-[#F8FAFC] border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-4 bg-slate-100 rounded-xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
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
