'use client';

import React from 'react';
import {
  UploadCloud,
  Cpu,
  FileCheck2,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { Language } from '@/lib/types';

interface HowItWorksProps {
  language: Language;
}

export function HowItWorks({ language }: HowItWorksProps) {
  const content = {
    en: {
      badge: 'Simple 3-Step Process',
      title: 'How IMD Care Works',
      subtitle: 'Bridging the gap between complicated clinical data and everyday patient understanding.',
      steps: [
        {
          num: '01',
          icon: UploadCloud,
          title: 'Ask or Upload',
          description:
            'Ask any health question, describe symptoms and duration, or upload a lab test report (PDF, JPG, PNG up to 10 MB).',
          badge: 'User Input'
        },
        {
          num: '02',
          icon: Cpu,
          title: 'AI Clinical Clarification',
          description:
            'Our system decodes medical terminology, cross-references clinical reference intervals, and evaluates safety red flags.',
          badge: 'Grounded Analysis'
        },
        {
          num: '03',
          icon: FileCheck2,
          title: 'Empowered Next Steps',
          description:
            'Receive plain-language explanations, self-care tips, warning signs to watch for, and targeted questions for your doctor.',
          badge: 'Doctor-Ready Guidance'
        }
      ]
    },
    hi: {
      badge: 'सरल 3-चरणीय प्रक्रिया',
      title: 'IMD Care कैसे काम करता है',
      subtitle: 'जटिल चिकित्सीय जानकारी और आम समझ के बीच की दूरी को पाटने के लिए तैयार किया गया।',
      steps: [
        {
          num: '01',
          icon: UploadCloud,
          title: 'पूछें या रिपोर्ट अपलोड करें',
          description:
            'कोई भी स्वास्थ्य प्रश्न पूछें, लक्षण दर्ज करें या अपनी लैब रिपोर्ट (PDF, JPG, PNG 10 MB तक) सुरक्षित रूप से अपलोड करें।',
          badge: 'उपयोगकर्ता इनपुट'
        },
        {
          num: '02',
          icon: Cpu,
          title: 'AI नैदानिक सरलीकरण',
          description:
            'हमारा सिस्टम चिकित्सा भाषा को सरल बनाता है, मानक संदर्भ सीमाओं से तुलना करता है और आपातकालीन चेतावनियों की जांच करता है।',
          badge: 'सत्यापित विश्लेषण'
        },
        {
          num: '03',
          icon: FileCheck2,
          title: 'सशक्त व स्पष्ट मार्गदर्शन',
          description:
            'आसान भाषा में सारांश, घरेलू प्राथमिक देखभाल, चेतावनी संकेत और अगली डॉक्टर विजिट के लिए महत्वपूर्ण प्रश्न प्राप्त करें।',
          badge: 'परामर्श योग्य सहायता'
        }
      ]
    },
    mr: {
      badge: 'सोपी ३-टप्प्यांची पद्धत',
      title: 'IMD Care कसे कार्य करते',
      subtitle: 'क्लिष्ट वैद्यकीय माहिती आणि रुग्ण यांच्यातील संवादातील दरी भरून काढण्यासाठी विकसित.',
      steps: [
        {
          num: '01',
          icon: UploadCloud,
          title: 'विचारा किंवा रिपोर्ट अपलोड करा',
          description:
            'कोणतीही आरोग्य शंका विचारा, लक्षणे नोंदवा किंवा आपली लॅब रिपोर्ट (PDF, JPG, PNG १० MB पर्यंत) अपलोड करा.',
          badge: 'इनपुट'
        },
        {
          num: '02',
          icon: Cpu,
          title: 'AI वैद्यकीय सुलभिकरण',
          description:
            'क्लिष्ट वैद्यकीय संज्ञांचे सोप्या भाषेत रूपांतर होते, प्रमाणित संदर्भ श्रेणींशी तुलना होते आणि धोक्याच्या लक्षणांची तपासणी होते.',
          badge: 'सत्यापित प्रक्रिया'
        },
        {
          num: '03',
          icon: FileCheck2,
          title: 'सक्षम पुढील पावले',
          description:
            'सोप्या भाषेतील स्पष्टीकरण, घरगुती काळजी, सावधगिरीच्या सूचना आणि डॉक्टरांना विचारण्यासाठी योग्य प्रश्न मिळवा.',
          badge: 'मार्गदर्शन'
        }
      ]
    }
  };

  const c = content[language] || content.en;

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3 reveal-on-scroll">
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

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {c.steps.map((step, idx) => {
            const Icon = step.icon;
            const staggerClass = idx === 0 ? 'stagger-1' : idx === 1 ? 'stagger-2' : 'stagger-3';
            return (
              <div
                key={idx}
                className={`relative bg-[#F8FAFC] rounded-2xl border border-slate-200/90 p-7 sm:p-8 flex flex-col justify-between card-hover-lift reveal-on-scroll ${staggerClass} hover:border-[#0F766E]/40 group`}
              >
                {/* Step Number Background Accent */}
                <span className="absolute top-5 right-6 text-4xl font-black text-slate-200 group-hover:text-[#0F766E]/20 transition-colors duration-250 select-none">
                  {step.num}
                </span>

                <div className="space-y-4">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#0F766E] to-[#2DD4BF] text-white flex items-center justify-center shadow-md shadow-[#0F766E]/20 transition-transform duration-300 ease-out group-hover:scale-110">
                    <Icon className="w-6 h-6 icon-hover-scale" />
                  </div>

                  {/* Badge */}
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-[#0F766E] px-2 py-0.5 rounded-md bg-[#E6F4F1]">
                    {step.badge}
                  </span>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#102A43] tracking-tight">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200/60 flex items-center text-xs font-bold text-[#0F766E] group-hover:translate-x-1 transition-transform">
                  <span>Step {idx + 1} of 3</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

