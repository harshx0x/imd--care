'use client';

import React, { useState } from 'react';
import {
  HeartPulse,
  Globe,
  PhoneCall,
  Menu,
  X,
  ShieldCheck,
  ChevronDown
} from 'lucide-react';
import { Language } from '@/lib/types';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  openEmergencyModal: () => void;
  openDisclaimerModal: () => void;
  isDemoMode: boolean;
}

export function Navbar({
  activeSection,
  setActiveSection,
  language,
  setLanguage,
  openEmergencyModal,
  openDisclaimerModal,
  isDemoMode
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const navItems = [
    { id: 'assistant', label: language === 'hi' ? 'AI सहायक' : language === 'mr' ? 'AI सहाय्यक' : 'AI Assistant' },
    { id: 'symptoms', label: language === 'hi' ? 'लक्षण मार्गदर्शन' : language === 'mr' ? 'लक्षण मार्गदर्शन' : 'Symptom Guidance' },
    { id: 'reports', label: language === 'hi' ? 'रिपोर्ट सरलीकरण' : language === 'mr' ? 'रिपोर्ट विश्लेषण' : 'Report Simplifier' },
    { id: 'preventive', label: language === 'hi' ? 'निवारक देखभाल' : language === 'mr' ? 'प्रतिबंधक काळजी' : 'Preventive Care' }
  ];

  const languages: { code: Language; name: string; native: string }[] = [
    { code: 'en', name: 'English', native: 'English' },
    { code: 'hi', name: 'Hindi', native: 'हिंदी' },
    { code: 'mr', name: 'Marathi', native: 'मराठी' }
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentLangObj = languages.find((l) => l.code === language) || languages[0];

  return (
    <header className="sticky top-0 z-40 bg-[#102A43]/95 backdrop-blur-md border-b border-white/10 text-white transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo & Brand */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleNavClick('hero')}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#0F766E] to-[#2DD4BF] flex items-center justify-center shadow-lg shadow-[#0F766E]/20 text-white border border-[#DDF5EF]/30">
              <HeartPulse className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-extrabold text-xl tracking-tight text-white">IMD Care</span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#0F766E]/50 text-[#DDF5EF] border border-[#2DD4BF]/30">
                  AI Health
                </span>
              </div>
              <span className="text-[11px] text-[#DDF5EF]/80 font-medium block">
                Better Health Understanding
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-all ${
                    isActive
                      ? 'bg-[#0F766E] text-white shadow-sm'
                      : 'text-slate-200 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Group */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* Status Pill */}
            <div
              className={`flex items-center space-x-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${
                isDemoMode
                  ? 'bg-amber-500/10 border-amber-400/30 text-amber-300'
                  : 'bg-emerald-500/10 border-emerald-400/30 text-emerald-300'
              }`}
              title={isDemoMode ? 'Running in Offline Demo Mode with pre-vetted synthetic clinical data' : 'Connected to OpenAI API'}
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  isDemoMode ? 'bg-amber-400 animate-pulse' : 'bg-emerald-400'
                }`}
              />
              <span>{isDemoMode ? 'Demo Mode' : 'OpenAI Live'}</span>
            </div>

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-xs font-semibold text-slate-100 transition border border-white/10"
                aria-expanded={langDropdownOpen}
              >
                <Globe className="w-3.5 h-3.5 text-[#2DD4BF]" />
                <span>{currentLangObj.native}</span>
                <ChevronDown className="w-3 h-3 text-slate-300" />
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 mt-2 w-36 rounded-xl bg-white text-slate-800 shadow-xl border border-slate-100 py-1.5 z-50 animate-in fade-in zoom-in-95 duration-150">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLanguage(l.code);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 text-xs font-medium flex items-center justify-between hover:bg-[#DDF5EF]/50 transition ${
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
              onClick={openEmergencyModal}
              className="flex items-center space-x-1.5 px-3.5 py-1.5 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white text-xs font-bold rounded-lg transition shadow-md shadow-red-900/30 border border-red-400/40"
            >
              <PhoneCall className="w-3.5 h-3.5 animate-bounce" />
              <span>112 Emergency</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 sm:hidden">
            <button
              onClick={openEmergencyModal}
              className="px-2.5 py-1 bg-red-600 text-white text-xs font-bold rounded-md flex items-center space-x-1"
            >
              <PhoneCall className="w-3 h-3" />
              <span>112</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-white/10 bg-[#0A1926] px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-150">
          <div className="flex items-center justify-between pb-2 border-b border-white/10">
            <span className="text-xs text-slate-400">Language:</span>
            <div className="flex space-x-1">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLanguage(l.code)}
                  className={`px-2 py-1 rounded text-xs font-semibold ${
                    language === l.code ? 'bg-[#0F766E] text-white' : 'bg-white/10 text-slate-300'
                  }`}
                >
                  {l.native}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium ${
                  activeSection === item.id
                    ? 'bg-[#0F766E] text-white'
                    : 'text-slate-200 hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-2 flex flex-col space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openDisclaimerModal();
              }}
              className="text-xs text-slate-300 hover:text-white text-left px-3 py-1 flex items-center gap-1.5"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#2DD4BF]" />
              <span>Medical Safety & Privacy Notice</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
