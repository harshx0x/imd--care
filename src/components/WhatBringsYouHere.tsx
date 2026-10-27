'use client';

import React from 'react';
import Link from 'next/link';
import {
  Stethoscope,
  FileSpreadsheet,
  MessageSquareHeart,
  CalendarCheck,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { Language } from '@/lib/types';

interface WhatBringsYouHereProps {
  language: Language;
}

export function WhatBringsYouHere({ language }: WhatBringsYouHereProps) {
  const content = {
    en: {
      badge: 'Interactive Health Pathways',
      title: 'What Brings You Here Today?',
      subtitle:
        'Choose a personalized entry point to explore symptoms, demystify clinical test numbers, or chat with your AI guide.',
      cards: [
        {
          id: 'symptoms',
          href: '/symptoms',
          icon: Stethoscope,
          title: 'Smart Symptom Guidance',
          badge: 'Safe 112 Triage',
          description:
            'Experiencing discomfort? Evaluate duration and severity with conservative guidance and clear doctor consult timelines.',
          cta: 'Check Symptoms',
          highlights: ['Duration & severity review', 'Conservative emergency filters']
        },
        {
          id: 'reports',
          href: '/reports',
          icon: FileSpreadsheet,
          title: 'Medical Report Simplifier',
          badge: 'Biomarker Clarifier',
          description:
            'Demystify confusing laboratory test numbers (HbA1c, CBC, Lipid) into plain language with smart doctor questions.',
          cta: 'Decode Report',
          highlights: ['Reference range breakdown', 'Questions for doctor visit']
        },
        {
          id: 'assistant',
          href: '/assistant',
          icon: MessageSquareHeart,
          title: 'AI Health Assistant',
          badge: 'Multilingual Chat',
          description:
            'Ask lifestyle, preventive wellness, and everyday health questions in English, Hindi, or Marathi with empathetic AI.',
          cta: 'Chat with AI',
          highlights: ['English, Hindi & Marathi', 'Evidence-based explanations']
        },
        {
          id: 'preventive',
          href: '/preventive-care',
          icon: CalendarCheck,
          title: 'Preventive Care',
          badge: 'Private & Local',
          description:
            'Track hydration goals, 100-step post-meal walks, and private medication reminders strictly in your local browser.',
          cta: 'Track Habits',
          highlights: ['Local browser privacy', 'Hydration & sleep logging']
        }
      ]
    },
    hi: {
      badge: 'इंटरएक्टिव स्वास्थ्य मार्ग',
      title: 'आज आप यहाँ किस उद्देश्य से आए हैं?',
      subtitle:
        'लक्षणों की जांच, लैब रिपोर्टों को समझने या अपने AI स्वास्थ्य साथी से बातचीत के लिए उपयुक्त विकल्प चुनें।',
      cards: [
        {
          id: 'symptoms',
          href: '/symptoms',
          icon: Stethoscope,
          badge: 'सुरक्षित 112 ट्राइएज',
          title: 'लक्षण संबंधी मार्गदर्शन',
          description:
            'असहज महसूस कर रहे हैं? अवधि और गंभीरता के आधार पर संभावित कारण और डॉक्टर से मिलने का सही समय जानें।',
          cta: 'लक्षण जांचें',
          highlights: ['अवधि व गंभीरता का मूल्यांकन', 'आपातकालीन सुरक्षा फ़िल्टर']
        },
        {
          id: 'reports',
          href: '/reports',
          icon: FileSpreadsheet,
          title: 'मेडिकल रिपोर्ट को सरल भाषा में समझें',
          badge: 'बायोमार्कर्स',
          description:
            'खून और लैब टेस्टों (शुगर, CBC, थायरॉइड) के आंकड़ों को आसान हिंदी में समझें और डॉक्टर से पूछने के सवाल पाएं।',
          cta: 'रिपोर्ट समझें',
          highlights: ['संदर्भ सीमा (Range) का विश्लेषण', 'डॉक्टर से पूछने योग्य सवाल']
        },
        {
          id: 'assistant',
          href: '/assistant',
          icon: MessageSquareHeart,
          title: 'एआई स्वास्थ्य सहायक',
          badge: 'बहुभाषी AI',
          description:
            'खानपान, जीवनशैली और सामान्य स्वास्थ्य पर अंग्रेजी, हिंदी या मराठी में अपने AI साथी से संवाद करें।',
          cta: 'AI से पूछें',
          highlights: ['अंग्रेजी, हिंदी व मराठी में उपलब्ध', 'प्रमाण-आधारित सरल सलाह']
        },
        {
          id: 'preventive',
          href: '/preventive-care',
          icon: CalendarCheck,
          title: 'निवारक स्वास्थ्य देखभाल',
          badge: 'निजी ब्राउज़र डेटा',
          description:
            'दैनिक पानी की मात्रा, शतपावली व प्राणायाम का रिकॉर्ड रखें और दवाइयों के समय पर अनुस्मारक लगाएं।',
          cta: 'आदतें ट्रैक करें',
          highlights: ['निजी स्थानीय स्टोरेज', 'हाइड्रेशन व नींद का ट्रैकर']
        }
      ]
    },
    mr: {
      badge: 'इंटरअॅक्टिव्ह आरोग्य पर्याय',
      title: 'आज आपण येथे कोणत्या उद्देशाने आला आहात?',
      subtitle:
        'लक्षणे तपासण्यासाठी, वैद्यकीय अहवाल समजून घेण्यासाठी किंवा आपल्या AI मित्राशी संवाद साधण्यासाठी एक पर्याय निवडा.',
      cards: [
        {
          id: 'symptoms',
          href: '/symptoms',
          icon: Stethoscope,
          badge: '112 सुरक्षितता',
          title: 'लक्षणांबाबत मार्गदर्शन',
          description:
            'काही त्रास जाणवतोय? कालावधी आणि तीव्रतेनुसार प्राथमिक माहिती आणि डॉक्टरांचा सल्ला घेण्याची योग्य वेळ जाणून घ्या.',
          cta: 'लक्षणे तपासा',
          highlights: ['कालावधी व तीव्रतेचे विश्लेषण', 'तातडीच्या प्रसंगी 112 सुरक्षा']
        },
        {
          id: 'reports',
          href: '/reports',
          icon: FileSpreadsheet,
          title: 'वैद्यकीय अहवाल सोप्या भाषेत समजून घ्या',
          badge: 'लॅब बायोमार्कर्स',
          description:
            'रक्त तपासणी आणि लॅब रिपोर्टचे कठीण आकडे समजण्यास सोप्या भाषेत मिळवा आणि डॉक्टरांसाठी महत्त्वाचे प्रश्न तयार करा.',
          cta: 'अहवाल विश्लेषित करा',
          highlights: ['नॉर्मल रेंजशी तुलना', 'डॉक्टरांना विचारण्यासाठी प्रश्न']
        },
        {
          id: 'assistant',
          href: '/assistant',
          icon: MessageSquareHeart,
          title: 'एआई आरोग्य सहाय्यक',
          badge: 'बहुभाषिक AI',
          description:
            'आहार, व्यायाम आणि जीवनशैलीच्या शंकांचे मराठी, हिंदी किंवा इंग्रजीत AI आरोग्य सहाय्यकाकडून निरसन करून घ्या.',
          cta: 'AI शी संवाद साधा',
          highlights: ['मराठी, हिंदी व इंग्रजीत उपलब्ध', 'विश्वासार्ह साधे मार्गदर्शन']
        },
        {
          id: 'preventive',
          href: '/preventive-care',
          icon: CalendarCheck,
          title: 'प्रतिबंधात्मक आरोग्यसेवा',
          badge: 'खाजगी डेटा',
          description:
            'पाण्याचे उद्दिष्ट, जेवणानंतरची शतपावली आणि औषधांची स्मरणपत्रे आपल्या फोनमध्ये पूर्णपणे खाजगीरित्या सांभाळा.',
          cta: 'सवयी ट्रॅक करा',
          highlights: ['ब्राउझर स्थानिक स्टोरेज', 'पाणी व विश्रांती ट्रॅकर']
        }
      ]
    }
  };

  const current = content[language] || content.en;

  return (
    <section id="what-brings-you" className="py-12 sm:py-16 bg-[#E8F7F5] border-t border-[#CDE8E2]/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-10 sm:mb-12">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#D9F3EC] text-[#0F766E] text-xs font-bold tracking-wide uppercase border border-[#35B8A6]/30 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#35B8A6]" />
            <span>{current.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102A43] tracking-tight">
            {current.title}
          </h2>
          <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
            {current.subtitle}
          </p>
        </div>

        {/* 4 Interactive Feature Cards Grid with Staggered Entrance Animations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {current.cards.map((card, idx) => {
            const Icon = card.icon;
            const delayClass =
              idx === 0
                ? 'delay-100'
                : idx === 1
                ? 'delay-200'
                : idx === 2
                ? 'delay-300'
                : 'delay-400';
            return (
              <Link
                key={card.id}
                href={card.href}
                className={`group relative bg-white rounded-2xl p-5 sm:p-6 border border-[#CDE8E2] shadow-sm hover:shadow-xl hover:border-[#35B8A6] card-hover-lift animate-fade-in-up ${delayClass} flex flex-col justify-between cursor-pointer block focus:outline-none focus:ring-2 focus:ring-[#0F766E]`}
              >
                <div className="space-y-3.5">
                  {/* Top Icon & Badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-2xl bg-[#D9F3EC] text-[#0F766E] group-hover:bg-[#0F766E] group-hover:text-white transition-colors duration-200 flex items-center justify-center shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#D9F3EC]/80 text-[#0F766E] group-hover:bg-[#0F766E] group-hover:text-white transition border border-[#CDE8E2]">
                      {card.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-base font-bold text-[#102A43] group-hover:text-[#0F766E] transition-colors leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-xs text-[#64748B] mt-2 leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  {/* Key Highlights */}
                  <div className="pt-2 space-y-1 border-t border-[#CDE8E2]/60">
                    {card.highlights.map((h, i) => (
                      <div key={i} className="flex items-center space-x-1.5 text-[10.5px] text-[#243447] font-medium">
                        <CheckCircle2 className="w-3 h-3 text-[#0F766E] shrink-0" />
                        <span className="truncate">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Indicator */}
                <div className="pt-3 mt-4 border-t border-[#CDE8E2]/60 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#0F766E] group-hover:underline flex items-center gap-1.5">
                    <span>{card.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#35B8A6] group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="text-[10px] text-[#64748B] font-semibold">Open Page</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
