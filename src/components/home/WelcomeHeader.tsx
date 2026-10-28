'use client';

import React, { useState, useEffect } from 'react';
import { Sparkles, Calendar } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { Language } from '@/lib/types';

interface WelcomeHeaderProps {
  language: Language;
}

export function WelcomeHeader({ language }: WelcomeHeaderProps) {
  const { user } = useApp();
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

  const displayName = user?.email
    ? user.email.split('@')[0]
    : null;

  return (
    <section className="pt-2 pb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/80 backdrop-blur-xs border border-slate-200/80 rounded-2xl p-5 sm:p-6 shadow-xs text-center">
          <div className="flex flex-col items-center justify-center text-center space-y-2 max-w-2xl mx-auto">
            {/* Top row: IMD Care Health Hub badge & Calendar date (centered) */}
            <div className="flex items-center justify-center gap-2 flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#E8F7F5] text-[#0F766E] text-xs font-semibold border border-[#0F766E]/20">
                <Sparkles className="w-3.5 h-3.5 text-[#35B8A6]" />
                IMD Care Health Hub
              </span>
              {currentDateFormatted && (
                <span className="inline-flex items-center gap-1 text-xs text-slate-500 font-medium">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  {currentDateFormatted}
                </span>
              )}
            </div>

            {/* Greeting Heading (centered) */}
            <h2 className="text-xl sm:text-2xl font-bold text-[#102A43] tracking-tight text-center">
              {greeting || 'Namaste'}
              {displayName && (
                <span className="text-[#0F766E]">, {displayName}</span>
              )}
              !
            </h2>

            {/* Subtitle (centered) */}
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-center">
              {welcomeSubtext[language]}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
