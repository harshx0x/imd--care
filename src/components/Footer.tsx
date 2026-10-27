'use client';

import React from 'react';
import Link from 'next/link';
import {
  HeartPulse,
  ShieldCheck,
  PhoneCall,
  Lock,
  FileText
} from 'lucide-react';
import { IndianJaliPattern } from './IndianPatternDecorations';
import { Language } from '@/lib/types';
import { APP_TRANSLATIONS } from '@/lib/translations/app';

interface FooterProps {
  language: Language;
  openEmergencyModal: () => void;
  openDisclaimerModal: () => void;
}

export function Footer({
  language,
  openEmergencyModal,
  openDisclaimerModal
}: FooterProps) {
  const t = APP_TRANSLATIONS[language] || APP_TRANSLATIONS.en;

  return (
    <footer className="relative bg-[#102A43] text-white pt-16 pb-12 border-t border-white/10 overflow-hidden">
      <div className="absolute inset-0">
        <IndianJaliPattern className="w-full h-full text-[#35B8A6]/15" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Emergency Highlight Banner */}
        <div className="bg-[#0A1926]/90 border border-white/10 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4 shadow-lg">
          <div className="flex items-center space-x-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-xl bg-red-600 text-white flex items-center justify-center shrink-0 shadow-lg shadow-red-900/40">
              <PhoneCall className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">
                {t.footer.erssTitle}
              </h3>
              <p className="text-xs text-slate-300 mt-0.5">
                {t.footer.erssDesc}
              </p>
            </div>
          </div>
          <button
            onClick={openEmergencyModal}
            className="px-5 py-2.5 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold text-xs rounded-xl shadow-md transition flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <PhoneCall className="w-4 h-4" />
            <span>{t.footer.erssBtn}</span>
          </button>
        </div>

        {/* 4 Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Col 1: Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#0F766E] to-[#35B8A6] flex items-center justify-center shadow-md">
                <HeartPulse className="w-5 h-5 text-white" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">{t.common.appName}</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {t.footer.brandTagline}
            </p>
            <div className="flex items-center space-x-2 text-[11px] text-[#35B8A6] font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>{t.footer.safetyBadge}</span>
            </div>
          </div>

          {/* Col 2: Core Capabilities */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              {t.footer.corePlatformHeading}
            </h4>
            <ul className="text-xs text-slate-300 space-y-2">
              <li>
                <Link href="/assistant" className="hover:text-white transition">
                  {t.footer.assistantLink}
                </Link>
              </li>
              <li>
                <Link href="/symptoms" className="hover:text-white transition">
                  {t.footer.symptomsLink}
                </Link>
              </li>
              <li>
                <Link href="/reports" className="hover:text-white transition">
                  {t.footer.reportsLink}
                </Link>
              </li>
              <li>
                <Link href="/preventive-care" className="hover:text-white transition">
                  {t.footer.preventiveLink}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: India Health Helplines */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              {t.footer.helplinesHeading}
            </h4>
            <ul className="text-xs text-slate-300 space-y-2">
              <li>
                <a href="tel:112" className="hover:text-white flex items-center gap-1">
                  <span>{t.footer.nationalEmergency}</span>
                  <strong className="text-white">112</strong>
                </a>
              </li>
              <li>
                <a href="tel:108" className="hover:text-white flex items-center gap-1">
                  <span>{t.footer.ambulance}</span>
                  <strong className="text-white">108</strong>
                </a>
              </li>
              <li>
                <a href="tel:1075" className="hover:text-white flex items-center gap-1">
                  <span>{t.footer.mohfw}</span>
                  <strong className="text-white">1075</strong>
                </a>
              </li>
              <li>
                <a href="tel:14416" className="hover:text-white flex items-center gap-1">
                  <span>{t.footer.teleManas}</span>
                  <strong className="text-white">14416</strong>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Trust, Safety & Hackathon */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              {t.footer.trustHeading}
            </h4>
            <ul className="text-xs text-slate-300 space-y-2">
              <li>
                <button
                  onClick={openDisclaimerModal}
                  className="hover:text-white transition text-left flex items-center gap-1 cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5 text-[#35B8A6]" />
                  <span>{t.footer.medicalDisclaimer}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={openDisclaimerModal}
                  className="hover:text-white transition text-left flex items-center gap-1 cursor-pointer"
                >
                  <Lock className="w-3.5 h-3.5 text-[#35B8A6]" />
                  <span>{t.footer.zeroRetention}</span>
                </button>
              </li>
              <li>
                <span className="text-[11px] text-slate-400 block pt-1">
                  {t.footer.hackathonNote}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <p>{t.footer.copyright}</p>
          <div className="flex items-center space-x-4">
            <button onClick={openDisclaimerModal} className="hover:text-white transition cursor-pointer">
              {t.footer.privacyPolicy}
            </button>
            <span>•</span>
            <button onClick={openDisclaimerModal} className="hover:text-white transition cursor-pointer">
              {t.footer.triageSafety}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
