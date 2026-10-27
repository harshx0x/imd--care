'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  HeartPulse,
  PhoneCall,
  Menu,
  X,
  LogIn,
  LogOut,
  Home,
  MessageSquareHeart,
  Stethoscope,
  FileSpreadsheet,
  CalendarCheck
} from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { Language } from '@/lib/types';
import { APP_TRANSLATIONS } from '@/lib/translations/app';

export function Navbar() {
  const pathname = usePathname();
  const {
    language,
    setLanguage,
    openEmergencyModal,
    user,
    signOut
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = APP_TRANSLATIONS[language] || APP_TRANSLATIONS.en;

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'hi', label: 'हिंदी' },
    { code: 'mr', label: 'मराठी' }
  ];

  const navLinks = [
    { href: '/', label: t.nav.home, icon: Home },
    { href: '/assistant', label: t.nav.assistant, icon: MessageSquareHeart },
    { href: '/symptoms', label: t.nav.symptoms, icon: Stethoscope },
    { href: '/reports', label: t.nav.reports, icon: FileSpreadsheet },
    { href: '/preventive-care', label: t.nav.preventive, icon: CalendarCheck }
  ];

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
  }

  const isLinkActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(href + '/');
  };

  return (
    <header className="sticky top-0 z-50 w-full px-4 sm:px-6 lg:px-8 pt-3 pb-2 transition-all">
      {/* Floating Smooth Curved Navbar Container */}
      <nav
        aria-label="Primary Navigation"
        className="max-w-7xl mx-auto bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl shadow-xs shadow-slate-900/5 px-4 sm:px-6 h-16 flex items-center justify-between transition-all"
      >
        {/* Brand Logo & Name */}
        <Link
          href="/"
          className="flex items-center space-x-2.5 group focus:outline-none focus:ring-2 focus:ring-[#0F766E]/40 rounded-xl py-1 pr-2 transition-transform"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#0F766E] to-[#2DD4BF] flex items-center justify-center text-white shadow-sm shadow-[#0F766E]/25 group-hover:scale-105 transition-transform">
            <HeartPulse className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-lg tracking-tight text-[#102A43] antialiased">
            IMD Care
          </span>
        </Link>

        {/* Center: Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-1">
          {navLinks.map((item) => {
            const active = isLinkActive(item.href);
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ease-out ${
                  active
                    ? 'bg-[#0F766E]/10 text-[#0F766E] font-semibold shadow-xs'
                    : 'text-slate-600 hover:text-[#102A43] hover:bg-slate-100/70 hover:-translate-y-0.5 active:translate-y-0'
                }`}
                aria-current={active ? 'page' : undefined}
              >
                <Icon className={`w-4 h-4 ${active ? 'text-[#0F766E]' : 'text-slate-400'}`} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>

        {/* Right Controls: Segmented Language Switcher, 112 Emergency Pill, Sign In / Profile */}
        <div className="hidden sm:flex items-center space-x-2.5">
          {/* Smooth Segmented Language Switcher (Curved Pill) */}
          <div className="flex items-center p-1 bg-slate-100/90 rounded-full border border-slate-200 text-xs font-semibold">
            {languages.map((l) => {
              const active = language === l.code;
              return (
                <button
                  key={l.code}
                  type="button"
                  onClick={() => setLanguage(l.code)}
                  className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                    active
                      ? 'bg-white text-[#0F766E] shadow-xs font-bold'
                      : 'text-slate-600 hover:text-[#102A43]'
                  }`}
                  aria-pressed={active}
                >
                  {l.label}
                </button>
              );
            })}
          </div>

          {/* Emergency 112 Curved Pill */}
          <button
            type="button"
            onClick={() => openEmergencyModal('Navbar 112 emergency click')}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-rose-50 hover:bg-rose-100 active:bg-rose-200 text-rose-700 text-xs font-semibold transition-all border border-rose-200/80 shadow-xs cursor-pointer focus:outline-none focus:ring-2 focus:ring-rose-400"
            title="Dial 112 National Emergency"
          >
            <span className="flex h-2 w-2 rounded-full bg-rose-600 animate-pulse" />
            <PhoneCall className="w-3.5 h-3.5 text-rose-600" />
            <span>112</span>
          </button>

          {/* Sign In / User Profile */}
          {user ? (
            <div className="flex items-center space-x-2 pl-1">
              <div className="flex items-center space-x-1.5 px-3 py-1.5 bg-slate-50 border border-slate-200/80 rounded-full text-xs font-medium text-slate-700">
                <div className="w-5 h-5 rounded-full bg-[#0F766E] text-white flex items-center justify-center font-bold text-[10px]">
                  {user.user_metadata?.full_name?.[0] || user.email?.[0] || 'U'}
                </div>
                <span className="max-w-[100px] truncate">
                  {user.user_metadata?.full_name || user.email?.split('@')[0]}
                </span>
                <button
                  type="button"
                  onClick={() => signOut()}
                  className="text-slate-400 hover:text-rose-600 ml-1 transition cursor-pointer"
                  title={t.nav.signOut}
                >
                  <LogOut className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ) : (
            <Link
              href="/login"
              className="flex items-center space-x-1.5 px-4 py-1.5 rounded-full bg-[#0F766E] hover:bg-[#0D655F] active:bg-[#0B544F] text-white font-semibold text-xs transition-all shadow-xs hover:shadow-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#0F766E]"
            >
              <LogIn className="w-3.5 h-3.5" />
              <span>{t.nav.signInRegister}</span>
            </Link>
          )}
        </div>

        {/* Mobile Controls: Quick Language Switcher & Hamburger */}
        <div className="flex items-center space-x-2 sm:hidden">
          {/* Quick Language Toggle Pill */}
          <button
            type="button"
            onClick={() => {
              const next: Language = language === 'en' ? 'hi' : language === 'hi' ? 'mr' : 'en';
              setLanguage(next);
            }}
            className="px-2.5 py-1 rounded-full bg-slate-100 text-xs font-bold text-slate-700 border border-slate-200"
          >
            {language === 'en' ? 'EN' : language === 'hi' ? 'हिंदी' : 'मराठी'}
          </button>

          {/* Emergency 112 Icon */}
          <button
            type="button"
            onClick={() => openEmergencyModal('Mobile 112 click')}
            className="p-1.5 rounded-full bg-rose-50 text-rose-700 border border-rose-200"
            aria-label="Call 112"
          >
            <PhoneCall className="w-4 h-4 text-rose-600" />
          </button>

          {/* Hamburger Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#0F766E]"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Box with Smooth Curved Edges */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 max-w-7xl mx-auto bg-white/98 backdrop-blur-md border border-slate-200/90 rounded-2xl shadow-xl p-4 space-y-3 animate-in fade-in slide-in-from-top-2 duration-150">
          {/* Nav Links */}
          <nav className="space-y-1">
            {navLinks.map((item) => {
              const active = isLinkActive(item.href);
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition ${
                    active
                      ? 'bg-[#0F766E]/10 text-[#0F766E] font-semibold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${active ? 'text-[#0F766E]' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Language Selector */}
          <div className="pt-2 border-t border-slate-100">
            <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-100 rounded-xl">
              {languages.map((l) => (
                <button
                  key={l.code}
                  type="button"
                  onClick={() => setLanguage(l.code)}
                  className={`py-1.5 rounded-lg text-xs font-semibold text-center transition ${
                    language === l.code
                      ? 'bg-white text-[#0F766E] shadow-xs font-bold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          {/* User Profile / Sign In */}
          <div className="pt-2 border-t border-slate-100">
            {user ? (
              <div className="flex items-center justify-between p-2.5 bg-slate-50 rounded-xl">
                <div className="flex items-center space-x-2 min-w-0">
                  <div className="w-7 h-7 rounded-full bg-[#0F766E] text-white flex items-center justify-center font-bold text-xs shrink-0">
                    {user.user_metadata?.full_name?.[0] || user.email?.[0] || 'U'}
                  </div>
                  <div className="truncate text-xs">
                    <p className="font-semibold text-slate-800 truncate">{user.user_metadata?.full_name || 'Member'}</p>
                    <p className="text-[11px] text-slate-500 truncate">{user.email}</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    signOut();
                    setMobileMenuOpen(false);
                  }}
                  className="px-2.5 py-1 text-xs font-semibold text-rose-600 hover:bg-rose-50 rounded-lg transition"
                >
                  {t.nav.signOut}
                </button>
              </div>
            ) : (
              <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 bg-[#0F766E] text-white font-semibold text-xs rounded-xl shadow-xs"
              >
                <LogIn className="w-4 h-4" />
                <span>{t.nav.signInRegister}</span>
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
