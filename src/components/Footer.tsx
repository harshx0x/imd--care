'use client';

import React from 'react';
import {
  HeartPulse,
  ShieldCheck,
  PhoneCall,
  Lock,
  FileText,
  Heart,
  Globe,
  ExternalLink
} from 'lucide-react';
import { IndianJaliPattern } from './IndianPatternDecorations';
import { Language } from '@/lib/types';

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
  return (
    <footer className="relative bg-[#102A43] text-white pt-16 pb-12 border-t border-white/10 overflow-hidden">
      <div className="absolute inset-0">
        <IndianJaliPattern className="w-full h-full text-[#DDF5EF]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Emergency Highlight Banner */}
        <div className="bg-[#0A1926]/90 border border-white/10 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-xl bg-red-600 text-white flex items-center justify-center shrink-0 shadow-lg shadow-red-900/40">
              <PhoneCall className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">
                India National Emergency Response Support System (ERSS)
              </h3>
              <p className="text-xs text-slate-300 mt-0.5">
                Immediate clinical assistance across all States & Union Territories: Dial <strong>112</strong> (All-in-One) or <strong>108</strong> (Ambulance).
              </p>
            </div>
          </div>
          <button
            onClick={openEmergencyModal}
            className="px-5 py-2.5 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold text-xs rounded-xl shadow-md transition flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Emergency Guidance (112)</span>
          </button>
        </div>

        {/* 4 Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Col 1: Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#0F766E] to-[#2DD4BF] flex items-center justify-center shadow-md">
                <HeartPulse className="w-5 h-5 text-white" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">IMD Care</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Better Health Understanding Starts Here. Bridging the medical literacy divide across India with culturally nuanced, multi-lingual AI assistance.
            </p>
            <div className="flex items-center space-x-2 text-[11px] text-[#2DD4BF] font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Ethical AI & Clinical Safety First</span>
            </div>
          </div>

          {/* Col 2: Core Capabilities */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Core Platform
            </h4>
            <ul className="text-xs text-slate-300 space-y-2">
              <li>
                <a href="#assistant" className="hover:text-white transition">
                  AI Health Assistant (EN, HI, MR)
                </a>
              </li>
              <li>
                <a href="#symptoms" className="hover:text-white transition">
                  Smart Symptom Guidance
                </a>
              </li>
              <li>
                <a href="#reports" className="hover:text-white transition">
                  Medical Report Simplifier
                </a>
              </li>
              <li>
                <a href="#preventive" className="hover:text-white transition">
                  Preventive Care & Reminders
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: India Health Helplines */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Government Helplines
            </h4>
            <ul className="text-xs text-slate-300 space-y-2">
              <li>
                <a href="tel:112" className="hover:text-white flex items-center gap-1">
                  <span>National Emergency:</span>
                  <strong className="text-white">112</strong>
                </a>
              </li>
              <li>
                <a href="tel:108" className="hover:text-white flex items-center gap-1">
                  <span>Medical Ambulance:</span>
                  <strong className="text-white">108</strong>
                </a>
              </li>
              <li>
                <a href="tel:1075" className="hover:text-white flex items-center gap-1">
                  <span>MoHFW Health Helpline:</span>
                  <strong className="text-white">1075</strong>
                </a>
              </li>
              <li>
                <a href="tel:14416" className="hover:text-white flex items-center gap-1">
                  <span>Tele-MANAS Mental Health:</span>
                  <strong className="text-white">14416</strong>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Trust, Safety & Hackathon */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Trust & Ethics
            </h4>
            <ul className="text-xs text-slate-300 space-y-2">
              <li>
                <button
                  onClick={openDisclaimerModal}
                  className="hover:text-white transition text-left flex items-center gap-1 cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5 text-[#2DD4BF]" />
                  <span>Medical Disclaimer</span>
                </button>
              </li>
              <li>
                <button
                  onClick={openDisclaimerModal}
                  className="hover:text-white transition text-left flex items-center gap-1 cursor-pointer"
                >
                  <Lock className="w-3.5 h-3.5 text-[#2DD4BF]" />
                  <span>Zero Data Retention Privacy</span>
                </button>
              </li>
              <li>
                <span className="text-[11px] text-slate-400 block pt-1">
                  Built for the Healthcare AI Hackathon. Real OpenAI integration with robust offline synthetic demo fallback.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <p>© 2025–2026 IMD Care. All synthetic healthcare examples reserved for hackathon evaluation.</p>
          <div className="flex items-center space-x-4">
            <button onClick={openDisclaimerModal} className="hover:text-white transition cursor-pointer">
              Privacy Policy
            </button>
            <span>•</span>
            <button onClick={openDisclaimerModal} className="hover:text-white transition cursor-pointer">
              Medical Triage Safety
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
