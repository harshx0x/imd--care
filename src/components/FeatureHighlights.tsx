'use client';

import React from 'react';
import {
  MessageSquareHeart,
  Stethoscope,
  FileSpreadsheet,
  ArrowRight,
  ShieldCheck,
  CheckCircle,
  Sparkles,
  CalendarCheck,
  Activity
} from 'lucide-react';
import { Language } from '@/lib/types';

interface FeatureHighlightsProps {
  onSelectFeature: (featureId: string) => void;
  language: Language;
}

export function FeatureHighlights({ onSelectFeature, language }: FeatureHighlightsProps) {
  const translations = {
    en: {
      sectionBadge: 'Core Intelligence Modules',
      sectionTitle: 'Complete Health Understanding Suite',
      sectionSubtitle: 'Designed to bridge the communication gap between patients and modern clinical care.',
      cards: [
        {
          id: 'assistant',
          icon: MessageSquareHeart,
          title: 'AI Health Assistant',
          badge: 'Multilingual Conversational AI',
          description:
            'Engage in culturally aware, empathetic health conversations in English, Hindi, and Marathi. Get clear explanations for lifestyle, preventive wellness, and everyday health questions.',
          highlights: ['English, Hindi & Marathi', 'Evidence-based explanations', 'Clear medical boundaries'],
          actionText: 'Start Health Chat'
        },
        {
          id: 'symptoms',
          icon: Stethoscope,
          badge: 'Conservative 112 Triage',
          title: 'Smart Symptom Guidance',
          description:
            'Review non-emergency health discomfort with duration and severity evaluation. Organizes findings into possible causes, self-care, doctor consult timelines, and red-flag alerts.',
          highlights: ['Conservative emergency rules', 'When to see a physician', 'No dangerous self-prescription'],
          actionText: 'Check Symptoms'
        },
        {
          id: 'reports',
          icon: FileSpreadsheet,
          badge: 'Synthetic Lab Clarifier',
          title: 'Medical Report Simplifier',
          description:
            'Transform complex laboratory biomarkers into easy-to-understand plain language. Review synthetic test panels (CBC, HbA1c, Lipid, TSH) and prepare empowered questions for your doctor.',
          highlights: ['Synthetic sample panels', 'Reference range breakdown', 'Questions for doctor visit'],
          actionText: 'Simplify Lab Report'
        }
      ]
    },
    hi: {
      sectionBadge: 'मुख्य स्वास्थ्य मॉड्यूल',
      sectionTitle: 'संपूर्ण स्वास्थ्य समझ और साक्षरता',
      sectionSubtitle: 'मरीजों और आधुनिक चिकित्सा देखभाल के बीच भाषा और समझ की दूरी को पाटने के लिए निर्मित।',
      cards: [
        {
          id: 'assistant',
          icon: MessageSquareHeart,
          badge: 'बहुभाषी स्वास्थ्य AI',
          title: 'AI स्वास्थ्य सहायक',
          description:
            'अंग्रेजी, हिंदी और मराठी में स्वास्थ्य संबंधी प्रश्न पूछें। जीवनशैली, निवारक स्वास्थ्य और घरेलू प्राथमिक देखभाल पर स्पष्ट, विश्वसनीय उत्तर प्राप्त करें।',
          highlights: ['अंग्रेजी, हिंदी व मराठी में उपलब्ध', 'प्रमाण-आधारित सरल मार्गदर्शन', 'सुरक्षित प्राथमिक सलाह'],
          actionText: 'चैट शुरू करें'
        },
        {
          id: 'symptoms',
          icon: Stethoscope,
          badge: 'सुरक्षित 112 ट्राइएज',
          title: 'स्मार्ट लक्षण मार्गदर्शन',
          description:
            'लक्षणों की अवधि और गंभीरता के आधार पर संभावित कारणों, घरेलू देखभाल और डॉक्टर से कब मिलना चाहिए, इसकी व्यवस्थित जानकारी प्राप्त करें।',
          highlights: ['आपातकालीन सुरक्षा फिल्टर', 'डॉक्टर परामर्श की समय-सीमा', 'स्व-दवा से सुरक्षा'],
          actionText: 'लक्षण जांचें'
        },
        {
          id: 'reports',
          icon: FileSpreadsheet,
          badge: 'लैब रिपोर्ट सरलीकरण',
          title: 'मेडिकल रिपोर्ट विश्लेषक',
          description:
            'जटिल लैब टेस्टों (CBC, HbA1c, थायरॉइड, लिपिड) को सरल हिंदी में समझें और अगली डॉक्टर विजिट के लिए महत्वपूर्ण प्रश्न तैयार करें।',
          highlights: ['सिंथेटिक डेमो टेस्ट उपलब्ध', 'संदर्भ सीमा की तुलना', 'डॉक्टर से पूछने योग्य सवाल'],
          actionText: 'रिपोर्ट समझें'
        }
      ]
    },
    mr: {
      sectionBadge: 'प्रमुख आरोग्य मॉड्यूल्स',
      sectionTitle: 'आरोग्य साक्षरतेची संपूर्ण प्रणाली',
      sectionSubtitle: 'वैद्यकीय माहिती समजण्यास सोपी बनवण्यासाठी विशेष रचना.',
      cards: [
        {
          id: 'assistant',
          icon: MessageSquareHeart,
          badge: 'बहुभाषिक AI सहाय्यक',
          title: 'AI आरोग्य सहाय्यक',
          description:
            'मराठी, हिंदी आणि इंग्रजीमध्ये आरोग्यविषयक शंकांचे निरसन करा. दैनंदिन आरोग्य आणि जीवनशैलीबद्दल विश्वासार्ह माहिती मिळवा.',
          highlights: ['मराठी भाषेचा पूर्ण पाठिंबा', 'सोपे आणि शास्त्रीय मार्गदर्शन', 'सुरक्षित माहिती'],
          actionText: 'संभाषण सुरू करा'
        },
        {
          id: 'symptoms',
          icon: Stethoscope,
          badge: 'तातडीचे ११२ ट्रायज',
          title: 'स्मार्ट लक्षण मार्गदर्शन',
          description:
            'लक्षणे, त्यांचा कालावधी आणि तीव्रता नोंदवून संभाव्य कारणे, घरगुती काळजी आणि डॉक्टरांचा सल्ला कधी घ्यावा हे समजून घ्या.',
          highlights: ['आणीबाणी सुरक्षा नियम', 'डॉक्टरांच्या सल्ल्याची वेळ', 'कोणतेही परस्पर औषध नाही'],
          actionText: 'लक्षणे तपासा'
        },
        {
          id: 'reports',
          icon: FileSpreadsheet,
          badge: 'लॅब अहवाल विश्लेषण',
          title: 'वैद्यकीय अहवाल सोपा करा',
          description:
            'रक्त तपासणी आणि लॅब रिपोर्टचे किचकट आकडे सोप्या भाषेत समजून घ्या आणि डॉक्टरांना विचारण्यासाठी योग्य प्रश्न तयार करा.',
          highlights: ['सिंथेटिक नमुने उपलब्ध', 'संदर्भ श्रेणीची तुलना', 'डॉक्टरांसाठी महत्त्वाचे प्रश्न'],
          actionText: 'अहवाल तपासा'
        }
      ]
    }
  };

  const t = translations[language] || translations.en;

  return (
    <section id="features-overview" className="py-16 sm:py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#DDF5EF] text-[#0F766E] text-xs font-bold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.sectionBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102A43] tracking-tight">
            {t.sectionTitle}
          </h2>
          <p className="text-sm sm:text-base text-[#486581] leading-relaxed">
            {t.sectionSubtitle}
          </p>
        </div>

        {/* 3 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                onClick={() => onSelectFeature(card.id)}
                className="group relative bg-white rounded-2xl p-7 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-[#0F766E]/40 transition-all duration-200 flex flex-col justify-between cursor-pointer transform hover:-translate-y-1"
              >
                <div className="space-y-5">
                  {/* Icon & Badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-[#DDF5EF] text-[#0F766E] group-hover:bg-[#0F766E] group-hover:text-white transition-colors duration-200 flex items-center justify-center shadow-inner">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 group-hover:bg-[#DDF5EF] group-hover:text-[#0F766E] transition">
                      {card.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-xl font-bold text-[#102A43] group-hover:text-[#0F766E] transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#486581] mt-2.5 leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  {/* Key Highlights */}
                  <div className="pt-2 space-y-2 border-t border-slate-100">
                    {card.highlights.map((h, i) => (
                      <div key={i} className="flex items-center space-x-2 text-xs text-slate-700 font-medium">
                        <CheckCircle className="w-3.5 h-3.5 text-[#0F766E] shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Button */}
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#0F766E] group-hover:underline flex items-center gap-1.5">
                    {card.actionText}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium">Click to open</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
