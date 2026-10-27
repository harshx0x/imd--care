'use client';

import React from 'react';
import Link from 'next/link';
import {
  MessageSquareHeart,
  Stethoscope,
  FileSpreadsheet,
  CalendarCheck,
  ArrowRight,
  CheckCircle,
  Sparkles
} from 'lucide-react';
import { Language } from '@/lib/types';

interface FeatureHighlightsProps {
  language: Language;
}

export function FeatureHighlights({ language }: FeatureHighlightsProps) {
  const content = {
    en: {
      badge: 'Core Platform Features',
      title: 'Four Core Healthcare Capabilities',
      subtitle:
        'Designed to address the real-world healthcare literacy challenge: clear answers, responsible symptom evaluation, diagnostic report clarity, and everyday wellness.',
      cards: [
        {
          id: 'assistant',
          href: '/assistant',
          icon: MessageSquareHeart,
          badge: 'Context-Aware AI',
          title: 'AI Health Assistant',
          description:
            'Ask health questions and receive clear, understandable answers without repetitive introductions. Supports follow-up questions with verified medical citations.',
          highlights: ['English, Hindi & Marathi', 'No repetitive canned intros', 'Verified clinical references'],
          actionText: 'Ask a Question'
        },
        {
          id: 'symptoms',
          href: '/symptoms',
          icon: Stethoscope,
          badge: 'Responsible Triage',
          title: 'Smart Symptom Guidance',
          description:
            'Enter symptoms, duration, and details. Receive possible explanations, general self-care, doctor visit timelines, and red-flag warnings without a fake diagnosis.',
          highlights: ['Possible explanations', 'Clear warning red flags', 'Never a confirmed diagnosis'],
          actionText: 'Check Symptoms'
        },
        {
          id: 'reports',
          href: '/reports',
          icon: FileSpreadsheet,
          badge: 'PDF / Image OCR',
          title: 'Medical Report Simplifier',
          description:
            'Upload laboratory test reports in PDF, JPG, or PNG up to 10 MB. Extracts test values, units, and reference ranges; flags uncertain results; and never invents missing data.',
          highlights: ['PDF, JPG & PNG up to 10 MB', 'Highlights values outside range', 'Empowering doctor questions'],
          actionText: 'Understand a Lab Report'
        },
        {
          id: 'preventive',
          href: '/preventive-care',
          icon: CalendarCheck,
          badge: 'Daily Wellness',
          title: 'Preventive Care',
          description:
            'Interactive daily health tips, hydration guidance, sleep advice, physical activity suggestions, and habit reminders with tip rotation on refresh.',
          highlights: ['Hydration & sleep guidance', 'Interactive Next Tip button', 'Private browser storage'],
          actionText: 'Explore Preventive Care'
        }
      ]
    },
    hi: {
      badge: 'मुख्य मंच सुविधाएं',
      title: 'चार मुख्य स्वास्थ्य क्षमताएं',
      subtitle:
        'स्वास्थ्य समझ की वास्तविक चुनौतियों का समाधान: सरल उत्तर, जिम्मेदार लक्षण समीक्षा, रिपोर्ट स्पष्टता और दैनिक स्वास्थ्य देखभाल।',
      cards: [
        {
          id: 'assistant',
          href: '/assistant',
          icon: MessageSquareHeart,
          badge: 'संदर्भ-सचेत AI',
          title: 'AI स्वास्थ्य सहायक',
          description:
            'स्वास्थ्य संबंधी प्रश्न पूछें और बिना किसी दोहराव वाली भूमिका के सीधे, स्पष्ट उत्तर प्राप्त करें। सत्यापित संदर्भों के साथ फॉलो-अप प्रश्नों का समर्थन करता है।',
          highlights: ['अंग्रेजी, हिंदी और मराठी', 'सीधे और स्पष्ट उत्तर', 'सत्यापित संदर्भ व दिशानिर्देश'],
          actionText: 'प्रश्न पूछें'
        },
        {
          id: 'symptoms',
          href: '/symptoms',
          icon: Stethoscope,
          badge: 'जिम्मेदार ट्राइएज',
          title: 'स्मार्ट लक्षण मार्गदर्शन',
          description:
            'लक्षण, अवधि और विवरण दर्ज करें। बिना किसी नकली निदान के संभावित कारणों, घरेलू देखभाल, डॉक्टर से मिलने का समय और चेतावनी संकेतों को समझें।',
          highlights: ['संभावित स्वास्थ्य कारण', 'स्पष्ट चेतावनी संकेत (Red Flags)', 'स्व-दवा से पूर्ण सुरक्षा'],
          actionText: 'लक्षण जांचें'
        },
        {
          id: 'reports',
          href: '/reports',
          icon: FileSpreadsheet,
          badge: 'PDF / इमेज OCR',
          title: 'मेडिकल रिपोर्ट सरलीकरण',
          description:
            'PDF, JPG या PNG में 10 MB तक की लैब रिपोर्ट अपलोड करें। मान, इकाइयां और सामान्य सीमाएं निकालें, असामान्य मानों को हाइलाइट करें और लापता मान कभी न गढ़ें।',
          highlights: ['10 MB तक PDF, JPG, PNG', 'संदर्भ सीमा से बाहर मान हाइलाइट', 'डॉक्टर से पूछने योग्य प्रश्न'],
          actionText: 'लैब रिपोर्ट समझें'
        },
        {
          id: 'preventive',
          href: '/preventive-care',
          icon: CalendarCheck,
          badge: 'दैनिक कल्याण',
          title: 'निवारक देखभाल',
          description:
            'उपयोगी स्वास्थ्य सुझाव, हाइड्रेशन मार्गदर्शन, नींद की सलाह, शारीरिक गतिविधि सुझाव और रिफ्रेश पर घूमने वाले सुझावों के साथ दैनिक दिनचर्या।',
          highlights: ['जल और नींद का मार्गदर्शन', 'नेक्स्ट टिप (Next Tip) बटन', 'निजी ब्राउज़र मेमोरी'],
          actionText: 'निवारक देखभाल देखें'
        }
      ]
    },
    mr: {
      badge: 'मुख्य व्यासपीठ वैशिष्ट्ये',
      title: 'चार मुख्य आरोग्य क्षमता',
      subtitle:
        'आरोग्य साक्षरतेच्या आव्हानांवर मात: स्पष्ट उत्तरे, जबाबदार लक्षण मूल्यमापन, लॅब रिपोर्ट सुलभता आणि प्रतिबंधक काळजी.',
      cards: [
        {
          id: 'assistant',
          href: '/assistant',
          icon: MessageSquareHeart,
          badge: 'संदर्भ-सजग AI',
          title: 'AI आरोग्य सहाय्यक',
          description:
            'आरोग्यविषयक प्रश्न विचारा आणि वारंवार प्रास्ताविक न येता थेट स्पष्ट उत्तरे मिळवा. पुराव्यांसह पुढील प्रश्नांचे अचूक निरसन करते.',
          highlights: ['इंग्रजी, हिंदी व मराठी', 'थेट आणि मुद्देसूद उत्तरे', 'सत्यापित वैद्यकीय संदर्भ'],
          actionText: 'प्रश्न विचारा'
        },
        {
          id: 'symptoms',
          href: '/symptoms',
          icon: Stethoscope,
          badge: 'जबाबदार मूल्यमापन',
          title: 'स्मार्ट लक्षण मार्गदर्शन',
          description:
            'लक्षणे, कालावधी आणि माहिती प्रविष्ट करा. अंतिम रोगनिदान न देता संभाव्य कारणे, घरगुती काळजी आणि धोक्याचे संकेत समजून घ्या.',
          highlights: ['संभाव्य आरोग्य कारणे', 'धोक्याचे इशारे (Red Flags)', 'डॉक्टरांच्या सल्ल्याची वेळ'],
          actionText: 'लक्षणे तपासा'
        },
        {
          id: 'reports',
          href: '/reports',
          icon: FileSpreadsheet,
          badge: 'PDF / इमेज OCR',
          title: 'वैद्यकीय रिपोर्ट सुलभिकरण',
          description:
            '१० MB पर्यंत PDF, JPG किंवा PNG रिपोर्ट अपलोड करा. चाचण्यांचे मूल्य, युनिट आणि संदर्भ श्रेणी तपासा, विसंगती ओळखा आणि गहाळ मूल्ये कधीही कल्पित न करणे.',
          highlights: ['१० MB पर्यंत PDF/JPG/PNG', 'मर्यादेबाहेरील घटक हायलाइट', 'डॉक्टरांसाठी विचारण्याजोगे प्रश्न'],
          actionText: 'लॅब रिपोर्ट समजून घ्या'
        },
        {
          id: 'preventive',
          href: '/preventive-care',
          icon: CalendarCheck,
          badge: 'दैनिक स्वास्थ्य',
          title: 'प्रतिबंधक काळजी',
          description:
            'आरोग्य टिप्स, पाणी पिण्याचे मार्गदर्शन, झोपेचा सल्ला, शारीरिक हालचाली आणि रिफ्रेशवर फिरणाऱ्या टिप्ससह दैनंदिन सवयींचे ट्रॅकिंग.',
          highlights: ['पाणी आणि झोपेचे नियोजन', 'नेक्स्ट टिप (Next Tip) बटण', 'ब्राउझरमधील खाजगी डेटा'],
          actionText: 'प्रतिबंधक काळजी एक्सप्लोर करा'
        }
      ]
    }
  };

  const c = content[language] || content.en;

  return (
    <section className="py-16 sm:py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3 reveal-on-scroll">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#E6F4F1] text-[#0F766E] text-xs font-bold uppercase tracking-wider border border-[#0F766E]/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{c.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102A43] tracking-tight">
            {c.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {c.subtitle}
          </p>
        </div>

        {/* 4 Core Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {c.cards.map((card, idx) => {
            const Icon = card.icon;
            const staggerClass = idx === 0 ? 'stagger-1' : idx === 1 ? 'stagger-2' : idx === 2 ? 'stagger-3' : 'stagger-4';
            return (
              <div
                key={card.id}
                className={`bg-white rounded-2xl border border-slate-200/90 p-7 sm:p-8 flex flex-col justify-between shadow-xs card-hover-lift reveal-on-scroll ${staggerClass} hover:border-[#0F766E]/40 group`}
              >
                <div className="space-y-5">
                  {/* Top Bar with Icon and Badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#0F766E] to-[#2DD4BF] text-white flex items-center justify-center shadow-md shadow-[#0F766E]/20 transition-transform duration-300 ease-out group-hover:scale-110">
                      <Icon className="w-6 h-6 icon-hover-scale" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#0F766E] px-2.5 py-1 rounded-full bg-[#E6F4F1] border border-[#0F766E]/15">
                      {card.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-[#102A43] group-hover:text-[#0F766E] transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  {/* Feature Highlights Bullets */}
                  <div className="pt-2 space-y-1.5 border-t border-slate-100">
                    {card.highlights.map((h, i) => (
                      <div key={i} className="flex items-center space-x-2 text-xs text-slate-600">
                        <CheckCircle className="w-4 h-4 text-[#0F766E] shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="pt-6 mt-6 border-t border-slate-100">
                  <Link
                    href={card.href}
                    className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-slate-50 group-hover:bg-[#0F766E] text-slate-800 group-hover:text-white font-bold text-xs sm:text-sm transition-all duration-200 shadow-xs cursor-pointer btn-interactive"
                  >
                    <span>{card.actionText}</span>
                    <ArrowRight className="w-4 h-4 text-[#0F766E] group-hover:text-white group-hover:translate-x-1 transition-transform" />
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
