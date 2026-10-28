'use client';

import React from 'react';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import { WelcomeHeader } from '@/components/home/WelcomeHeader';
import { AssistantHeroCard } from '@/components/assistant/AssistantHeroCard';
import { MoodCheckIn } from '@/components/mood/MoodCheckIn';
import { DailyActivityTracker } from '@/components/activity/DailyActivityTracker';
import { DailyHealthTips } from '@/components/DailyHealthTips';
import { HealthToolsGrid } from '@/components/home/HealthToolsGrid';
import { HowItWorks } from '@/components/HowItWorks';
import { useApp } from '@/context/AppContext';

export default function HomePage() {
  const { language, openDisclaimerModal } = useApp();

  const disclaimerText = {
    en: 'Medical Disclaimer: IMD Care is an AI health literacy and education platform designed to make health information easier to understand. It does not provide medical diagnoses, clinical prescriptions, or emergency triage. Always consult a qualified healthcare professional for medical concerns. In an acute emergency, dial 112 or 108 immediately.',
    hi: 'चिकित्सा अस्वीकरण (Medical Disclaimer): IMD Care एक AI स्वास्थ्य साक्षरता मंच है जो स्वास्थ्य जानकारी को आसान बनाने के लिए बनाया गया है। यह किसी रोग का निश्चित निदान, दवा की पर्ची या आपातकालीन सहायता प्रदान नहीं करता। किसी भी स्वास्थ्य समस्या के लिए योग्य चिकित्सक से परामर्श लें। आपात स्थिति में तुरंत 112 या 108 पर संपर्क करें।',
    mr: 'वैद्यकीय अस्वीकरण (Medical Disclaimer): IMD Care हे आरोग्यविषयक माहिती सुलभ करण्यासाठी विकसित केलेले AI व्यासपीठ आहे. हे अंतिम रोगनिदान किंवा उपचारांची शिफारस करत नाही. कोणत्याही वैद्यकीय समस्येसाठी तज्ज्ञ डॉक्टरांचा सल्ला घ्या. आणीबाणीच्या प्रसंगी तात्काळ ११२ किंवा १०८ वर संपर्क साधा.'
  };

  const learnMore = {
    en: 'Review Clinical Safety Guidelines',
    hi: 'सुरक्षा दिशानिर्देश पढ़ें',
    mr: 'सुरक्षा मार्गदर्शक तत्त्वे पहा'
  };

  return (
    <div className="space-y-0 pb-6">
      {/* 1. Welcome Header: Friendly greeting, date, and user account / emergency pill */}
      <WelcomeHeader language={language} />

      {/* 2. Primary Health Section: Hero introducing IMD Care & AI Health Assistant */}
      <AssistantHeroCard language={language} />

      {/* 3. Mood Check-in: "How are you feeling today?" with interactive activity & weekly log */}
      <MoodCheckIn language={language} />

      {/* 4. Daily Activity Tracker: Circular step ring, goal editor, and weekly activity chart */}
      <DailyActivityTracker language={language} />

      {/* 5. Daily Health Tip: Illustrated tip with tailored SVG artwork and Learn More modal */}
      <DailyHealthTips language={language} variant="featured" />

      {/* 6. Health Tools: Compact links to Assistant, Symptoms, Reports, Preventive Care, and HealthQuest */}
      <HealthToolsGrid language={language} />

      {/* Educational 3-Step Flow */}
      <HowItWorks language={language} />

      {/* 7. Medical Safety & Disclaimer Banner */}
      <section className="py-8 bg-slate-100/80 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-5 bg-white rounded-2xl border border-slate-200/90 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xs">
            <div className="flex items-center space-x-3 text-center md:text-left">
              <div className="w-9 h-9 rounded-xl bg-[#E8F7F5] flex items-center justify-center shrink-0 text-[#0F766E] border border-[#0F766E]/20">
                <ShieldCheck className="w-5 h-5 text-[#0F766E]" />
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-4xl">
                {disclaimerText[language]}
              </p>
            </div>

            <button
              type="button"
              onClick={openDisclaimerModal}
              className="shrink-0 text-xs font-bold text-[#0F766E] hover:text-[#0D655F] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>{learnMore[language]}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
