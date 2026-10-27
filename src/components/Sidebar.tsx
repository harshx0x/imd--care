'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Home,
  MessageSquareHeart,
  Stethoscope,
  FileSpreadsheet,
  CalendarCheck,
  HeartPulse,
  PhoneCall,
  ShieldCheck,
  LogIn,
  LogOut
} from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { APP_TRANSLATIONS } from '@/lib/translations/app';

export function Sidebar() {
  const pathname = usePathname();
  const { language, openEmergencyModal, openDisclaimerModal, user, signOut } = useApp();
  const t = APP_TRANSLATIONS[language] || APP_TRANSLATIONS.en;

  const navLinks = [
    {
      href: '/',
      icon: Home,
      label: t.nav.home,
      badge: ''
    },
    {
      href: '/assistant',
      icon: MessageSquareHeart,
      label: t.nav.assistant,
      badge: t.common.openAI
    },
    {
      href: '/symptoms',
      icon: Stethoscope,
      label: t.nav.symptoms,
      badge: t.common.emergency112
    },
    {
      href: '/reports',
      icon: FileSpreadsheet,
      label: t.nav.reports,
      badge: t.common.syntheticBadge
    },
    {
      href: '/preventive-care',
      icon: CalendarCheck,
      label: t.nav.preventive,
      badge: t.common.remindersBadge
    }
  ];

  return (
    <aside className="hidden lg:flex flex-col w-64 bg-white/95 backdrop-blur-md border-r border-[#CDE8E2] h-screen sticky top-0 shrink-0 z-30 justify-between select-none shadow-xs">
      {/* Brand Header */}
      <div>
        <div className="p-5 border-b border-[#CDE8E2]/70 bg-gradient-to-b from-white to-[#E8F7F5]/30">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#0F766E] to-[#35B8A6] flex items-center justify-center shadow-md shadow-[#0F766E]/20 text-white border border-[#D9F3EC]/50 group-hover:scale-105 transition-transform">
              <HeartPulse className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="font-extrabold text-lg tracking-tight text-[#102A43]">{t.common.appName}</span>
                <span className="text-[9px] uppercase font-bold px-1.5 py-0.2 rounded-md bg-[#D9F3EC] text-[#0F766E] border border-[#35B8A6]/30">
                  {t.common.aiBadge}
                </span>
              </div>
              <span className="text-[11px] text-[#64748B] font-medium block">
                {t.nav.brandSubtitle}
              </span>
            </div>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="p-4 space-y-1.5">
          <span className="px-3 text-[10px] uppercase font-bold tracking-wider text-[#64748B] block mb-2">
            {t.nav.menuHeading}
          </span>

          <nav className="space-y-1.5">
            {navLinks.map((item) => {
              const Icon = item.icon;
              const isActive = item.href === '/'
                ? pathname === '/'
                : pathname === item.href || pathname.startsWith(item.href + '/');

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm transition-all duration-150 ${
                    isActive
                      ? 'bg-[#D9F3EC] text-[#0F766E] font-bold border-l-4 border-[#0F766E] shadow-xs translate-x-0.5'
                      : 'text-[#243447] hover:text-[#0F766E] hover:bg-[#E8F7F5] font-medium'
                  }`}
                >
                  <div className="flex items-center space-x-3 min-w-0">
                    <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-[#0F766E]' : 'text-[#64748B]'}`} />
                    <span className="truncate">{item.label}</span>
                  </div>
                  {item.badge && (
                    <span
                      className={`text-[9px] font-semibold px-1.5 py-0.5 rounded-md shrink-0 ml-1.5 ${
                        isActive
                          ? 'bg-[#0F766E] text-white'
                          : 'bg-[#D9F3EC]/80 text-[#0F766E]'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Bottom User Profile & Emergency Card */}
      <div className="p-4 border-t border-[#CDE8E2]/70 space-y-3 bg-gradient-to-t from-[#E8F7F5]/40 to-transparent">
        {/* User Authentication Status */}
        {user ? (
          <div className="p-2.5 bg-[#D9F3EC]/70 rounded-xl border border-[#CDE8E2] flex items-center justify-between shadow-xs">
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
              onClick={() => signOut()}
              title={t.nav.signOut}
              className="p-1.5 text-[#64748B] hover:text-red-600 hover:bg-white rounded-lg transition cursor-pointer shrink-0"
              aria-label={t.nav.signOut}
            >
              <LogOut className="w-3.5 h-3.5" />
            </button>
          </div>
        ) : (
          <Link
            href="/login"
            className="flex items-center justify-center space-x-2 w-full py-2 px-3 bg-[#E8F7F5] hover:bg-[#D9F3EC] text-[#0F766E] border border-[#CDE8E2] rounded-xl text-xs font-bold transition shadow-xs cursor-pointer"
          >
            <LogIn className="w-3.5 h-3.5 text-[#0F766E]" />
            <span>{t.nav.signInRegister}</span>
          </Link>
        )}

        {/* Quick Emergency 112 Banner with Pale Red Background */}
        <div className="bg-[#FEE2E2]/90 border border-red-200 rounded-xl p-3 space-y-2 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase font-extrabold text-red-700 tracking-wider flex items-center gap-1">
              <PhoneCall className="w-3 h-3 text-red-600 animate-pulse" />
              {t.nav.emergencyHelplines}
            </span>
            <span className="text-xs font-black text-red-600">112 / 108</span>
          </div>
          <p className="text-[11px] text-red-900 leading-tight">
            {t.nav.emergencyTriageDesc}
          </p>
          <button
            onClick={() => openEmergencyModal('Sidebar Emergency Hotline Access')}
            className="w-full py-1.5 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white text-[11px] font-bold rounded-lg transition shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <PhoneCall className="w-3 h-3" />
            <span>{t.nav.emergencyGuidanceBtn}</span>
          </button>
        </div>

        {/* Disclaimer Link & Version */}
        <div className="flex items-center justify-between pt-1 px-1">
          <button
            onClick={openDisclaimerModal}
            className="text-[11px] text-[#64748B] hover:text-[#0F766E] flex items-center gap-1 transition cursor-pointer"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-[#35B8A6]" />
            <span>{t.nav.medicalDisclaimerLink}</span>
          </button>
          <span className="text-[10px] text-[#64748B] font-mono">{t.nav.version}</span>
        </div>
      </div>
    </aside>
  );
}
