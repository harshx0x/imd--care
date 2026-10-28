'use client';

import React from 'react';
import Link from 'next/link';
import {
  MessageSquareHeart,
  Stethoscope,
  FileSpreadsheet,
  CalendarCheck,
  Gamepad2,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { Language } from '@/lib/types';

interface HealthToolsGridProps {
  language: Language;
}

export function HealthToolsGrid({ language }: HealthToolsGridProps) {
  const t = {
    en: {
      badge: 'Integrated Capabilities',
      title: 'Explore IMD Care Health Tools',
      subtitle: 'Five specialized healthcare literacy modules designed to empower you with clear knowledge and confidence.',
      tools: [
        {
          id: 'assistant',
          title: 'AI Health Assistant',
          badge: '24/7 Knowledge',
          badgeColor: 'bg-teal-50 text-teal-700 border-teal-200',
          desc: 'Ask lifestyle and wellness questions with verified citations from Indian clinical guidelines.',
          href: '/assistant',
          icon: MessageSquareHeart,
          actionText: 'Ask Question'
        },
        {
          id: 'symptoms',
          title: 'Smart Symptom Guidance',
          badge: 'Safe Triage',
          badgeColor: 'bg-sky-50 text-sky-700 border-sky-200',
          desc: 'Check warning signs, doctor consultation timelines, and home self-care without fake diagnoses.',
          href: '/symptoms',
          icon: Stethoscope,
          actionText: 'Evaluate Symptoms'
        },
        {
          id: 'reports',
          title: 'Lab Report Simplifier',
          badge: 'OCR & Reference Ranges',
          badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
          desc: 'Upload PDF or images of blood reports to clearly understand what abnormal numbers signify.',
          href: '/reports',
          icon: FileSpreadsheet,
          actionText: 'Simplify Report'
        },
        {
          id: 'preventive',
          title: 'Preventive Care Guidelines',
          badge: 'ICMR Age Milestones',
          badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
          desc: 'Evidence-based screening schedules, vaccination milestones, and dietary checklists for your age.',
          href: '/preventive-care',
          icon: CalendarCheck,
          actionText: 'View Guidelines'
        },
        {
          id: 'healthquest',
          title: 'HealthQuest India Edition',
          badge: 'Interactive Game',
          badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
          desc: '100 trilingual health quizzes, myth-busters, label challenges, and first-aid scenarios in a fun game.',
          href: '/healthquest',
          icon: Gamepad2,
          actionText: 'Play HealthQuest'
        }
      ]
    },
    hi: {
      badge: 'एकीकृत स्वास्थ्य साधन',
      title: 'IMD Care स्वास्थ्य टूल्स देखें',
      subtitle: 'पांच विशेष स्वास्थ्य साक्षरता साधन जो आपको सही ज्ञान और आत्मविश्वास प्रदान करते हैं।',
      tools: [
        {
          id: 'assistant',
          title: 'AI स्वास्थ्य सहायक',
          badge: '24/7 ज्ञान',
          badgeColor: 'bg-teal-50 text-teal-700 border-teal-200',
          desc: 'भारतीय चिकित्सीय दिशानिर्देशों के आधार पर जीवनशैली और स्वास्थ्य से जुड़े सवाल पूछें।',
          href: '/assistant',
          icon: MessageSquareHeart,
          actionText: 'प्रश्न पूछें'
        },
        {
          id: 'symptoms',
          title: 'लक्षण मार्गदर्शन',
          badge: 'सुरक्षित सलाह',
          badgeColor: 'bg-sky-50 text-sky-700 border-sky-200',
          desc: 'संभावित कारण, डॉक्टर विजिट की समयसीमा और घरेलू सावधानियां जानें बिना किसी झूठे निदान के।',
          href: '/symptoms',
          icon: Stethoscope,
          actionText: 'लक्षण जांचें'
        },
        {
          id: 'reports',
          title: 'लैब रिपोर्ट विश्लेषक',
          badge: 'OCR व सामान्य सीमाएं',
          badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
          desc: 'खून की जांच रिपोर्ट (PDF/फोटो) अपलोड कर समझें कि कौन से पैरामीटर सामान्य सीमा से बाहर हैं।',
          href: '/reports',
          icon: FileSpreadsheet,
          actionText: 'रिपोर्ट समझें'
        },
        {
          id: 'preventive',
          title: 'निवारक स्वास्थ्य दिशानिर्देश',
          badge: 'उम्र अनुसार जांच',
          badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
          desc: 'आईसीएमआर आधारित नियमित स्क्रीनिंग, टीकाकरण सूची और उम्र के अनुसार स्वास्थ्य सावधानियां।',
          href: '/preventive-care',
          icon: CalendarCheck,
          actionText: 'दिशानिर्देश देखें'
        },
        {
          id: 'healthquest',
          title: 'HealthQuest भारत संस्करण',
          badge: 'इंटरैक्टिव खेल',
          badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
          desc: '100 रोचक स्वास्थ्य प्रश्न, अंधविश्वास निवारण और आपातकालीन प्राथमिक चिकित्सा का ज्ञान।',
          href: '/healthquest',
          icon: Gamepad2,
          actionText: 'खेल खेलें'
        }
      ]
    },
    mr: {
      badge: 'आरोग्य साधने',
      title: 'IMD Care आरोग्य टूल्स',
      subtitle: 'आरोग्य साक्षरता वाढवणारी ५ उपयुक्त साधने, जी तुम्हाला योग्य निर्णय घेण्यास सक्षम बनवतात.',
      tools: [
        {
          id: 'assistant',
          title: 'AI आरोग्य सहाय्यक',
          badge: '२४/७ माहिती',
          badgeColor: 'bg-teal-50 text-teal-700 border-teal-200',
          desc: 'वैद्यकीय मार्गदर्शक तत्त्वांवर आधारित आरोग्यविषयक व जीवनशैलीच्या शंकांचे निरसन करा.',
          href: '/assistant',
          icon: MessageSquareHeart,
          actionText: 'प्रश्न विचारा'
        },
        {
          id: 'symptoms',
          title: 'लक्षण मार्गदर्शन',
          badge: 'सुरक्षित सल्ला',
          badgeColor: 'bg-sky-50 text-sky-700 border-sky-200',
          desc: 'लक्षणे केव्हा गंभीर असू शकतात, घरगुती काळजी आणि डॉक्टरांना कधी भेटावे याचे स्पष्ट मार्गदर्शन.',
          href: '/symptoms',
          icon: Stethoscope,
          actionText: 'लक्षणे तपासा'
        },
        {
          id: 'reports',
          title: 'लॅब रिपोर्ट विश्लेषक',
          badge: 'सुलभ स्पष्टीकरण',
          badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
          desc: 'रक्ततपासणीच्या रिपोर्टमधील किचकट संख्या आणि वैद्यकीय शब्दांचे सोपे दैनंदिन स्पष्टीकरण मिळवा.',
          href: '/reports',
          icon: FileSpreadsheet,
          actionText: 'रिपोर्ट समजून घ्या'
        },
        {
          id: 'preventive',
          title: 'प्रतिबंधात्मक आरोग्य काळजी',
          badge: 'वयानुसार चाचण्या',
          badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
          desc: 'वयानुसार आवश्यक वैद्यकीय तपासण्या, लसीकरण आणि निरोगी आहाराचे सोपे मार्गदर्शक तत्त्वे.',
          href: '/preventive-care',
          icon: CalendarCheck,
          actionText: 'माहिती पहा'
        },
        {
          id: 'healthquest',
          title: 'HealthQuest भारत आवृत्ती',
          badge: 'मनोरंजक खेळ',
          badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
          desc: '१०० रंजक आरोग्य प्रश्न, गैरसमज निवारण आणि आपत्कालीन प्रथमोपचाराची उपयुक्त माहिती खेळाद्वारे शिका.',
          href: '/healthquest',
          icon: Gamepad2,
          actionText: 'गेम खेळा'
        }
      ]
    }
  }[language];

  return (
    <section className="py-8 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F7F5] text-[#0F766E] text-xs font-semibold border border-[#0F766E]/20 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#35B8A6]" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#102A43] tracking-tight">
            {t.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            {t.subtitle}
          </p>
        </div>

        {/* 5-Card Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <div
                key={tool.id}
                className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#E8F7F5] text-[#0F766E] flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-2xs font-bold px-2.5 py-1 rounded-full border ${tool.badgeColor}`}>
                      {tool.badge}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#102A43] group-hover:text-[#0F766E] transition-colors">
                    {tool.title}
                  </h3>

                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {tool.desc}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-100">
                  <Link
                    href={tool.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0F766E] group-hover:text-[#0D655F] group-hover:translate-x-0.5 transition-all"
                  >
                    <span>{tool.actionText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

