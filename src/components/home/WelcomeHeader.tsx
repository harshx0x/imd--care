'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Sparkles, Calendar, PhoneCall, LogIn, LogOut } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { Language } from '@/lib/types';

interface WelcomeHeaderProps {
  language: Language;
}

export function WelcomeHeader({ language }: WelcomeHeaderProps) {
  const { user, signOut, openEmergencyModal } = useApp();
  const [greeting, setGreeting] = useState('');
  const [currentDateFormatted, setCurrentDateFormatted] = useState('');

  useEffect(() => {
    let cancel = false;
    const raf = requestAnimationFrame(() => {
      if (cancel) return;
      const hour = new Date().getHours();
      let timePeriod: 'morning' | 'afternoon' | 'evening' = 'morning';
      if (hour >= 12 && hour < 17) timePeriod = 'afternoon';
      else if (hour >= 17 || hour < 5) timePeriod = 'evening';

      const greetings: Record<Language, Record<typeof timePeriod, string>> = {
        en: {
          morning: 'Namaste, Good Morning',
          afternoon: 'Namaste, Good Afternoon',
          evening: 'Namaste, Good Evening'
        },
        hi: {
          morning: 'नमस्ते, शुभ प्रभात',
          afternoon: 'नमस्ते, शुभ दोपहर',
          evening: 'नमस्ते, शुभ संध्या'
        },
        mr: {
          morning: 'नमस्कार, शुभ सकाळ',
          afternoon: 'नमस्कार, शुभ दुपार',
          evening: 'नमस्कार, शुभ संध्याकाळ'
        }
      };

      setGreeting(greetings[language]?.[timePeriod] || greetings.en[timePeriod]);

      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      };
      const localeMap: Record<Language, string> = {
        en: 'en-IN',
        hi: 'hi-IN',
        mr: 'mr-IN'
      };
      setCurrentDateFormatted(now.toLocaleDateString(localeMap[language] || 'en-IN', options));
    });

    return () => {
      cancel = true;
      cancelAnimationFrame(raf);
    };
  }, [language]);

  const welcomeSubtext: Record<Language, string> = {
    en: 'Your trusted companion for understandable, responsible healthcare.',
    hi: 'सरल, जिम्मेदार और भरोसेमंद स्वास्थ्य मार्गदर्शन के लिए आपका साथी।',
    mr: 'सुलभ, जबाबदार आणि विश्वासार्ह आरोग्यविषयक मार्गदर्शनासाठी आपला मित्र.'
  };

  const emergencyNotice: Record<Language, string> = {
    en: 'National Helpline: 112 / 108',
    hi: 'आपातकालीन हेल्पलाइन: 112 / 108',
    mr: 'आपत्कालीन हेल्पलाइन: ११२ / १०८'
  };

  const accountText: Record<Language, { signIn: string; welcomeBack: string; guest: string }> = {
    en: {
      signIn: 'Sign In / Register',
      welcomeBack: 'Welcome back,',
      guest: 'Welcome, Guest'
    },
    hi: {
      signIn: 'साइन इन / रजिस्टर',
      welcomeBack: 'स्वागत है,',
      guest: 'नमस्ते, अतिथि'
    },
    mr: {
      signIn: 'साइन इन / नोंदणी',
      welcomeBack: 'पुन्हा स्वागत,',
      guest: 'नमस्कार, पाहुणे'
    }
  };

  const displayName = user?.email
    ? user.email.split('@')[0]
    : null;

  return (
    <section className="pt-2 pb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/80 backdrop-blur-xs border border-slate-200/80 rounded-2xl p-4 sm:p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Left Greeting & Date */}
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#E8F7F5] text-[#0F766E] text-xs font-semibold border border-[#0F766E]/20">
                <Sparkles className="w-3.5 h-3.5 text-[#35B8A6]" />
                IMD Care Health Hub
              </span>
              {currentDateFormatted && (
                <span className="hidden sm:inline-flex items-center gap-1 text-xs text-slate-500 font-medium">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  {currentDateFormatted}
                </span>
              )}
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-[#102A43] tracking-tight">
              {greeting || 'Namaste'}
              {displayName && (
                <span className="text-[#0F766E]">, {displayName}</span>
              )}
              !
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
              {welcomeSubtext[language]}
            </p>
          </div>

          {/* Right Actions: Account & Emergency Helpline Pill */}
          <div className="flex items-center gap-3 shrink-0 self-start md:self-center">
            {/* 112 / 108 Emergency Quick Pill */}
            <button
              type="button"
              onClick={() => openEmergencyModal('Welcome Header Quick Dial')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200/80 text-xs font-bold transition-colors cursor-pointer group"
              title="National Emergency Services"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-600" />
              </span>
              <PhoneCall className="w-3.5 h-3.5 text-rose-600 group-hover:scale-110 transition-transform" />
              <span className="hidden xs:inline">{emergencyNotice[language]}</span>
              <span className="xs:hidden">112 / 108</span>
            </button>

            {/* Auth Action */}
            {user ? (
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#E8F7F5] border border-[#0F766E]/20 text-[#0F766E] flex items-center justify-center font-bold text-xs uppercase">
                  {displayName?.charAt(0) || 'U'}
                </div>
                <button
                  type="button"
                  onClick={signOut}
                  className="p-1.5 text-slate-500 hover:text-rose-600 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                  title="Sign Out"
                  aria-label="Sign Out"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <Link
                href="/login"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#0F766E] hover:bg-[#0D655F] text-white text-xs font-semibold shadow-xs hover:shadow-sm transition-all"
              >
                <LogIn className="w-3.5 h-3.5" />
                <span>{accountText[language].signIn}</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

