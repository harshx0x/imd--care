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
  Home,
  MessageSquareHeart,
  Stethoscope,
  FileSpreadsheet,
  CalendarCheck,
  LogIn,
  LogOut
} from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { Language } from '@/lib/types';
import { APP_TRANSLATIONS } from '@/lib/translations/app';

export function TopNav() {
  const pathname = usePathname();
  const { language, setLanguage, isDemoMode, openEmergencyModal, openDisclaimerModal, user, signOut } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const t = APP_TRANSLATIONS[language] || APP_TRANSLATIONS.en;

  const languages: { code: Language; name: string; native: string }[] = [
    { code: 'en', name: 'English', native: 'English' },
    { code: 'hi', name: 'Hindi', native: 'हिंदी' },
    { code: 'mr', name: 'Marathi', native: 'मराठी' }
  ];

  const currentLangObj = languages.find((l) => l.code === language) || languages[0];

  const pageTitles: Record<string, { title: string; subtitle: string }> = {
    '/': t.nav.pageTitles.home,
    '/assistant': t.nav.pageTitles.assistant,
    '/symptoms': t.nav.pageTitles.symptoms,
    '/reports': t.nav.pageTitles.reports,
    '/preventive-care': t.nav.pageTitles.preventive
  };

  const currentPage = pageTitles[pathname] || t.nav.pageTitles.default;

  const navLinks = [
    { href: '/', icon: Home, label: t.nav.home },
    { href: '/assistant', icon: MessageSquareHeart, label: t.nav.assistant },
    { href: '/symptoms', icon: Stethoscope, label: t.nav.symptoms },
    { href: '/reports', icon: FileSpreadsheet, label: t.nav.reports },
    { href: '/preventive-care', icon: CalendarCheck, label: t.nav.preventive }
  ];

  return (
    <>
      <header className="sticky top-0 z-20 bg-white/95 backdrop-blur-md border-b border-[#CDE8E2] px-4 sm:px-6 py-3 transition-all shadow-xs">
        <div className="flex items-center justify-between">
          {/* Left: Mobile hamburger or Desktop Page Title */}
          <div className="flex items-center space-x-3">
            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-xl text-[#243447] hover:text-[#0F766E] hover:bg-[#E8F7F5] transition cursor-pointer"
              aria-label={t.nav.openMenuAria}
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Mobile Brand Logo */}
            <Link href="/" className="lg:hidden flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#0F766E] to-[#35B8A6] flex items-center justify-center text-white shadow-xs">
                <HeartPulse className="w-5 h-5 text-white" />
              </div>
              <span className="font-extrabold text-base text-[#102A43]">{t.common.appName}</span>
            </Link>

            {/* Desktop Section Heading */}
            <div className="hidden lg:block">
              <h1 className="text-base font-bold text-[#102A43] leading-tight">
                {currentPage.title}
              </h1>
              <p className="text-[11px] text-[#64748B] font-medium">
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
                  ? 'bg-amber-50 border-amber-300 text-amber-900'
                  : 'bg-[#D9F3EC] border-[#35B8A6]/40 text-[#0F766E]'
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  isDemoMode ? 'bg-amber-500 animate-pulse' : 'bg-[#35B8A6]'
                }`}
              />
              <span>{isDemoMode ? t.common.demoMode : t.common.openAIActive}</span>
            </div>

            {/* Multilingual Selector */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-[#E8F7F5] hover:bg-[#D9F3EC] text-xs font-semibold text-[#243447] transition border border-[#CDE8E2] cursor-pointer"
                aria-expanded={langDropdownOpen}
              >
                <Globe className="w-3.5 h-3.5 text-[#0F766E]" />
                <span>{currentLangObj.native}</span>
                <ChevronDown className="w-3 h-3 text-[#64748B]" />
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 mt-2 w-36 rounded-xl bg-white text-[#243447] shadow-xl border border-[#CDE8E2] py-1.5 z-50 animate-in fade-in zoom-in-95 duration-100">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLanguage(l.code);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 text-xs font-medium flex items-center justify-between hover:bg-[#E8F7F5] transition cursor-pointer ${
                        language === l.code ? 'text-[#0F766E] font-bold bg-[#D9F3EC]' : 'text-[#243447]'
                      }`}
                    >
                      <span>{l.native}</span>
                      <span className="text-[10px] text-[#64748B]">{l.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Emergency 112 CTA */}
            <button
              onClick={() => openEmergencyModal('Top Navigation Emergency Request')}
              className="flex items-center space-x-1 px-3 py-1.5 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white text-xs font-bold rounded-xl transition shadow-xs border border-red-500 cursor-pointer"
            >
              <PhoneCall className="w-3.5 h-3.5 animate-bounce" />
              <span className="hidden sm:inline">112 {t.nav.emergencyGuidanceBtn}</span>
              <span className="sm:hidden">112</span>
            </button>

            {/* User Profile / Log In Button (Desktop) */}
            {user ? (
              <div className="hidden sm:flex items-center space-x-2 bg-[#E8F7F5] border border-[#CDE8E2] rounded-xl px-2.5 py-1 text-xs">
                <div className="w-5 h-5 rounded-full bg-[#0F766E] text-white flex items-center justify-center font-bold text-[10px] shrink-0">
                  {user.user_metadata?.full_name
                    ? user.user_metadata.full_name[0].toUpperCase()
                    : user.email?.[0].toUpperCase() || 'U'}
                </div>
                <span className="font-semibold text-[#102A43] max-w-[110px] truncate">
                  {user.user_metadata?.full_name || user.email?.split('@')[0]}
                </span>
                <button
                  onClick={() => signOut()}
                  className="text-[#64748B] hover:text-red-600 transition cursor-pointer p-0.5"
                  title={t.nav.signOut}
                >
                  <LogOut className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <Link
                href="/login"
                className="hidden sm:flex items-center space-x-1.5 px-3 py-1.5 bg-[#E8F7F5] hover:bg-[#D9F3EC] text-[#0F766E] font-bold text-xs rounded-xl border border-[#CDE8E2] transition shadow-xs cursor-pointer"
              >
                <LogIn className="w-3.5 h-3.5" />
                <span>{t.nav.signInRegister}</span>
              </Link>
            )}
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
          <div className="relative w-72 max-w-[85%] bg-white h-full shadow-2xl flex flex-col justify-between p-5 z-10 animate-in slide-in-from-left duration-200 border-r border-[#CDE8E2]">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#CDE8E2]">
                <div className="flex items-center space-x-2">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#0F766E] to-[#35B8A6] flex items-center justify-center text-white shadow-xs">
                    <HeartPulse className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-extrabold text-base text-[#102A43]">{t.common.appName}</span>
                    <span className="text-[10px] text-[#64748B] block font-medium">{t.nav.mobilePlatformTag}</span>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-[#E8F7F5]"
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
                          ? 'bg-[#D9F3EC] text-[#0F766E] font-bold border-l-4 border-[#0F766E]'
                          : 'text-[#243447] hover:text-[#0F766E] hover:bg-[#E8F7F5]'
                      }`}
                    >
                      <Icon className={`w-4 h-4 ${isActive ? 'text-[#0F766E]' : 'text-[#64748B]'}`} />
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-[#CDE8E2] space-y-3">
              {/* User Authentication in Mobile Menu */}
              {user ? (
                <div className="p-3 bg-[#D9F3EC]/80 rounded-xl border border-[#CDE8E2] flex items-center justify-between">
                  <div className="flex items-center space-x-2.5 min-w-0">
                    <div className="w-8 h-8 rounded-full bg-[#0F766E] text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-xs">
                      {user.user_metadata?.full_name
                        ? user.user_metadata.full_name[0].toUpperCase()
                        : user.email?.[0].toUpperCase() || 'U'}
                    </div>
                    <div className="min-w-0">
                      <span className="text-xs font-bold text-[#102A43] block truncate">
                        {user.user_metadata?.full_name || user.email?.split('@')[0]}
                      </span>
                      <span className="text-[10px] text-[#64748B] block truncate">
                        {user.email}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      signOut();
                    }}
                    className="p-1.5 text-[#64748B] hover:text-red-600 transition cursor-pointer"
                    title={t.nav.signOut}
                  >
                    <LogOut className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <Link
                  href="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-2.5 px-3 bg-[#E8F7F5] hover:bg-[#D9F3EC] text-[#0F766E] border border-[#CDE8E2] rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 shadow-xs"
                >
                  <LogIn className="w-4 h-4" />
                  <span>{t.nav.signInRegister}</span>
                </Link>
              )}

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openEmergencyModal('Mobile Menu Emergency');
                }}
                className="w-full py-2.5 bg-red-600 text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 shadow-xs cursor-pointer"
              >
                <PhoneCall className="w-4 h-4" />
                <span>{t.nav.mobileCall112}</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openDisclaimerModal();
                }}
                className="w-full text-center text-xs text-[#64748B] hover:text-[#0F766E] cursor-pointer"
              >
                {t.nav.mobileDisclaimer}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
