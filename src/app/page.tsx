'use client';

import React from 'react';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import { Hero } from '@/components/Hero';
import { HowItWorks } from '@/components/HowItWorks';
import { FeatureHighlights } from '@/components/FeatureHighlights';
import { DailyHealthTips } from '@/components/DailyHealthTips';
import { useApp } from '@/context/AppContext';

export default function HomePage() {
  const { language, openEmergencyModal, openDisclaimerModal } = useApp();

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
    <div className="space-y-0">
      {/* 1. Clear Hero Section (Headline: "Your Health. Better Understood.", Two CTAs, Interactive Preview) */}
      <Hero
        language={language}
        openEmergencyModal={() => openEmergencyModal('Hero National Emergency Triage Request')}
      />

      {/* 2. Simple Three-Step "How It Works" Section */}
      <HowItWorks language={language} />

      {/* 3. Refined Feature Section for the Four Core Features */}
      <FeatureHighlights language={language} />

      {/* 4. Daily Health Tip Section with Next Tip Button and Auto-Rotation on Refresh */}
      <DailyHealthTips language={language} variant="featured" />

      {/* 5. Medical Safety & Disclaimer Banner */}
      <section className="py-8 bg-slate-100/80 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-5 bg-white rounded-2xl border border-slate-200/90 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xs reveal-on-scroll">
            <div className="flex items-center space-x-3 text-center md:text-left">
              <div className="w-9 h-9 rounded-xl bg-[#E6F4F1] flex items-center justify-center shrink-0 text-[#0F766E] border border-[#0F766E]/20">
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
