'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Menu,
  X,
  Globe,
  ChevronDown,
  PhoneCall,
  HeartPulse,
  Sparkles,
  ShieldCheck,
  Home,
  MessageSquareHeart,
  Stethoscope,
  FileSpreadsheet,
  CalendarCheck
} from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { Language } from '@/lib/types';

export function TopNav() {
  const pathname = usePathname();
  const { language, setLanguage, isDemoMode, openEmergencyModal, openDisclaimerModal } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const languages: { code: Language; name: string; native: string }[] = [
    { code: 'en', name: 'English', native: 'English' },
    { code: 'hi', name: 'Hindi', native: 'हिंदी' },
    { code: 'mr', name: 'Marathi', native: 'मराठी' }
  ];

  const currentLangObj = languages.find((l) => l.code === language) || languages[0];

  const pageTitles: Record<string, { title: string; subtitle: string }> = {
    '/': { title: 'Health Overview', subtitle: 'Better Health Understanding Starts Here' },
    '/assistant': { title: 'AI Health Assistant', subtitle: 'Conversational Guidance in EN, HI & MR' },
    '/symptoms': { title: 'Smart Symptom Guidance', subtitle: 'Conservative 112 Triage & Review' },
    '/reports': { title: 'Medical Report Simplifier', subtitle: 'Translating Diagnostic Lab Biomarkers' },
    '/preventive-care': { title: 'Preventive Care', subtitle: 'Medication Reminders & Daily Wellness' }
  };

  const currentPage = pageTitles[pathname] || {
    title: 'IMD Care',
    subtitle: 'Intelligent Medical Guidance'
  };

  const navLinks = [
    { href: '/', icon: Home, label: language === 'hi' ? 'होम' : language === 'mr' ? 'मुख्य पृष्ठ' : 'Home' },
    { href: '/assistant', icon: MessageSquareHeart, label: language === 'hi' ? 'AI स्वास्थ्य सहायक' : language === 'mr' ? 'AI आरोग्य सहाय्यक' : 'AI Health Assistant' },
    { href: '/symptoms', icon: Stethoscope, label: language === 'hi' ? 'लक्षण मार्गदर्शन' : language === 'mr' ? 'लक्षण मार्गदर्शन' : 'Smart Symptom Guidance' },
    { href: '/reports', icon: FileSpreadsheet, label: language === 'hi' ? 'मेडिकल रिपोर्ट' : language === 'mr' ? 'वैद्यकीय अहवाल' : 'Medical Report Simplifier' },
    { href: '/preventive-care', icon: CalendarCheck, label: language === 'hi' ? 'निवारक देखभाल' : language === 'mr' ? 'प्रतिबंधक काळजी' : 'Preventive Care' }
  ];

  return (
    <>
      <header className="sticky top-0 z-20 bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 sm:px-6 py-3 transition-all">
        <div className="flex items-center justify-between">
          {/* Left: Mobile hamburger or Desktop Page Title */}
          <div className="flex items-center space-x-3">
            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition cursor-pointer"
              aria-label="Open navigation menu"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Mobile Brand Logo */}
            <Link href="/" className="lg:hidden flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#0F766E] to-[#2DD4BF] flex items-center justify-center text-white shadow-xs">
                <HeartPulse className="w-5 h-5 text-white" />
              </div>
              <span className="font-extrabold text-base text-[#102A43]">IMD Care</span>
            </Link>

            {/* Desktop Section Heading */}
            <div className="hidden lg:block">
              <h1 className="text-base font-bold text-[#102A43] leading-tight">
                {currentPage.title}
              </h1>
              <p className="text-[11px] text-slate-500 font-medium">
                {currentPage.subtitle}
              </p>
            </div>
          </div>

          {/* Right Action Controls */}
          <div className="flex items-center space-x-2.5">
            {/* Demo Mode / OpenAI Connected Status Pill */}
            <div
              className={`hidden sm:flex items-center space-x-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border ${
                isDemoMode
                  ? 'bg-amber-500/10 border-amber-300 text-amber-800'
                  : 'bg-emerald-500/10 border-emerald-300 text-emerald-800'
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  isDemoMode ? 'bg-amber-500 animate-pulse' : 'bg-emerald-500'
                }`}
              />
              <span>{isDemoMode ? 'Demo Mode' : 'OpenAI Active'}</span>
            </div>

            {/* Multilingual Selector */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200/80 text-xs font-semibold text-slate-700 transition border border-slate-200/80 cursor-pointer"
                aria-expanded={langDropdownOpen}
              >
                <Globe className="w-3.5 h-3.5 text-[#0F766E]" />
                <span>{currentLangObj.native}</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 mt-2 w-36 rounded-xl bg-white text-slate-800 shadow-xl border border-slate-200 py-1.5 z-50 animate-in fade-in zoom-in-95 duration-100">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLanguage(l.code);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 text-xs font-medium flex items-center justify-between hover:bg-[#DDF5EF]/50 transition cursor-pointer ${
                        language === l.code ? 'text-[#0F766E] font-bold bg-[#DDF5EF]/30' : 'text-slate-700'
                      }`}
                    >
                      <span>{l.native}</span>
                      <span className="text-[10px] text-slate-400">{l.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Emergency 112 CTA */}
            <button
              onClick={() => openEmergencyModal('Top Navigation Emergency Request')}
              className="flex items-center space-x-1 px-3 py-1.5 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white text-xs font-bold rounded-xl transition shadow-sm border border-red-500 cursor-pointer"
            >
              <PhoneCall className="w-3.5 h-3.5 animate-bounce" />
              <span className="hidden sm:inline">112 Emergency</span>
              <span className="sm:hidden">112</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="relative w-72 max-w-[85%] bg-white h-full shadow-2xl flex flex-col justify-between p-5 z-10 animate-in slide-in-from-left duration-200">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center space-x-2">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#0F766E] to-[#2DD4BF] flex items-center justify-center text-white shadow-xs">
                    <HeartPulse className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-extrabold text-base text-[#102A43]">IMD Care</span>
                    <span className="text-[10px] text-slate-400 block font-medium">Multi-Page Health AI</span>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="mt-5 space-y-1.5">
                {navLinks.map((item) => {
                  const Icon = item.icon;
                  const isActive = item.href === '/'
                    ? pathname === '/'
                    : pathname === item.href || pathname.startsWith(item.href + '/');

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center space-x-3 px-3.5 py-3 rounded-xl text-sm transition ${
                        isActive
                          ? 'bg-[#DDF5EF] text-[#0F766E] font-bold border-l-4 border-[#0F766E]'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                      }`}
                    >
                      <Icon className={`w-4 h-4 ${isActive ? 'text-[#0F766E]' : 'text-slate-400'}`} />
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-slate-100 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openEmergencyModal('Mobile Menu Emergency');
                }}
                className="w-full py-2.5 bg-red-600 text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 shadow-xs"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call 112 / Emergency Guidance</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openDisclaimerModal();
                }}
                className="w-full text-center text-xs text-slate-500 hover:text-slate-800"
              >
                Medical Safety & Privacy Disclaimer
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
