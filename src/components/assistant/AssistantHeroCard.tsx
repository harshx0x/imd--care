'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Sparkles,
  Send,
  ArrowRight,
  ShieldAlert,
  CheckCircle2,
  Info
} from 'lucide-react';
import { Language } from '@/lib/types';
import { useApp } from '@/context/AppContext';

interface AssistantHeroCardProps {
  language: Language;
}

export function AssistantHeroCard({ language }: AssistantHeroCardProps) {
  const router = useRouter();
  const { openEmergencyModal } = useApp();
  const [questionInput, setQuestionInput] = useState('');
  const [inlineLoading, setInlineLoading] = useState(false);
  const [inlineAnswer, setInlineAnswer] = useState<string | null>(null);

  const chips: Record<Language, { label: string; query: string }[]> = {
    en: [
      { label: 'Explain this health term', query: 'Can you explain what systolic and diastolic blood pressure mean in simple words?' },
      { label: 'How can I sleep better?', query: 'What are 4 scientifically proven habits to improve sleep quality naturally?' },
      { label: 'What do common symptoms mean?', query: 'What causes mild acid reflux or heartburn after meals, and what helps?' },
      { label: 'Help me understand a lab result', query: 'What does a mildly elevated HbA1c test result indicate for diabetes awareness?' }
    ],
    hi: [
      { label: 'स्वास्थ्य शब्द समझें', query: 'सिस्टोलिक और डायस्टोलिक ब्लड प्रेशर का आसान भाषा में क्या मतलब है?' },
      { label: 'अच्छी नींद कैसे लें?', query: 'प्राकृतिक रूप से गहरी और अच्छी नींद पाने के 4 सरल उपाय क्या हैं?' },
      { label: 'सामान्य लक्षणों का क्या अर्थ है?', query: 'भोजन के बाद एसिडिटी या सीने में जलन क्यों होती है और क्या घरेलू उपाय करें?' },
      { label: 'लैब रिपोर्ट समझने में मदद', query: 'HbA1c जांच का थोड़ा बढ़ा हुआ स्तर क्या संकेत देता है?' }
    ],
    mr: [
      { label: 'वैद्यकीय संज्ञा समजून घ्या', query: 'रक्तदाबातील सिस्टॉलिक आणि डायस्टॉलिक म्हणजे नेमके काय?' },
      { label: 'शांत झोप कशी मिळवावी?', query: 'शांत आणि गाढ झोप लागण्यासाठी ४ सोपे व शास्त्रीय उपाय कोणते?' },
      { label: 'सामान्य लक्षणांचा अर्थ काय?', query: 'जेवणानंतर छातीत जळजळ (ॲसिडिटी) का होते आणि काय काळजी घ्यावी?' },
      { label: 'लॅब रिपोर्ट समजून घ्या', query: 'HbA1c चे प्रमाण किंचित वाढलेले असल्यास त्याचा नेमका अर्थ काय?' }
    ]
  };

  const t = {
    en: {
      badge: 'Responsible AI Health Companion',
      tagline: 'Your personal health companion',
      headline: 'Clear, compassionate answers to your health questions.',
      desc: 'Decipher complex medical terms, understand preventive wellness, and prepare confident questions for your next doctor appointment.',
      askButton: 'Open Full Health Assistant',
      inputPlaceholder: 'Ask a health question in English, हिंदी, or मराठी...',
      sendBtn: 'Ask AI',
      suggestedHeading: 'Popular questions to start:',
      emergencyNotice: 'Emergency alert? If symptoms are acute or severe, call 112 or 108 immediately.',
      capabilities: [
        'Plain-language medical translations',
        'Verified clinical reference citations',
        'Follow-up questions welcome',
        '100% confidential and secure'
      ]
    },
    hi: {
      badge: 'जिम्मेदार AI स्वास्थ्य साथी',
      tagline: 'आपका व्यक्तिगत स्वास्थ्य साथी',
      headline: 'आपके स्वास्थ्य प्रश्नों के स्पष्ट और सरल उत्तर।',
      desc: 'कठिन मेडिकल शब्दों को समझें, जीवनशैली में सुधार लाएं और अगली डॉक्टर विजिट के लिए सही सवाल तैयार करें।',
      askButton: 'पूर्ण स्वास्थ्य सहायक खोलें',
      inputPlaceholder: 'स्वास्थ्य प्रश्न पूछें (हिंदी, अंग्रेजी या मराठी में)...',
      sendBtn: 'पूछें',
      suggestedHeading: 'शुरुआत के लिए लोकप्रिय प्रश्न:',
      emergencyNotice: 'आपातकालीन स्थिति? यदि लक्षण गंभीर हैं तो तुरंत 112 या 108 पर कॉल करें।',
      capabilities: [
        'कठिन शब्दों की सरल हिंदी व्याख्या',
        'प्रमाणित चिकित्सीय स्रोतों का आधार',
        'अनुवर्ती प्रश्न पूछने की सुविधा',
        'पूर्णतः सुरक्षित और गोपनीय'
      ]
    },
    mr: {
      badge: 'जबाबदार AI आरोग्य मित्र',
      tagline: 'आपला वैयक्तिक आरोग्य मित्र',
      headline: 'आपल्या आरोग्यविषयक प्रश्नांची सोपी आणि स्पष्ट उत्तरे.',
      desc: 'क्लिष्ट वैद्यकीय संज्ञा समजून घ्या, जीवनशैली निरोगी ठेवा आणि डॉक्टरांना योग्य प्रश्न विचारण्याची तयारी करा.',
      askButton: 'संपूर्ण आरोग्य सहाय्यक उघडा',
      inputPlaceholder: 'आरोग्याविषयी प्रश्न विचारा (मराठी, इंग्रजी किंवा हिंदीत)...',
      sendBtn: 'विचारा',
      suggestedHeading: 'सुरुवातीसाठी काही उपयुक्त प्रश्न:',
      emergencyNotice: 'तातडीची मदत हवी आहे? लक्षणे गंभीर असल्यास तात्काळ ११२ किंवा १०८ वर संपर्क करा.',
      capabilities: [
        'वैद्यकीय संज्ञांची सोपी समजूत',
        'तज्ज्ञ वैद्यकीय मार्गदर्शक तत्त्वे',
        'शंकांचे निरसन करण्याची सोय',
        '१००% खाजगी आणि सुरक्षित'
      ]
    }
  }[language];

  const handleAsk = async (queryText: string) => {
    const q = queryText.trim();
    if (!q) return;

    setInlineLoading(true);
    setInlineAnswer(null);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: q,
          language: language,
          history: []
        })
      });

      if (res.ok) {
        const data = await res.json();
        setInlineAnswer(data.response || 'Guidance formulated successfully.');
      } else {
        router.push(`/assistant?q=${encodeURIComponent(q)}`);
      }
    } catch {
      router.push(`/assistant?q=${encodeURIComponent(q)}`);
    } finally {
      setInlineLoading(false);
    }
  };

  const currentChips = chips[language] || chips.en;

  return (
    <section className="py-8 bg-gradient-to-b from-[#102A43] via-[#0E243A] to-[#0A1926] text-white overflow-hidden relative">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0F766E]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#35B8A6]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Greeting, Headline, Features, and Prominent CTA */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F766E]/40 border border-[#35B8A6]/40 text-xs font-semibold text-[#D9F3EC]">
              <Sparkles className="w-3.5 h-3.5 text-[#35B8A6]" />
              <span>{t.badge}</span>
            </div>

            <div>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#35B8A6]">
                {t.tagline}
              </p>
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mt-1 leading-tight">
                {t.headline}
              </h1>
            </div>

            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {t.desc}
            </p>

            {/* 4 Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-left">
              {t.capabilities.map((cap, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#35B8A6] shrink-0" />
                  <span>{cap}</span>
                </div>
              ))}
            </div>

            {/* Emergency Hotline Banner */}
            <div className="p-3 bg-rose-950/40 border border-rose-500/30 rounded-xl text-2xs sm:text-xs text-rose-200 flex items-center justify-between gap-3 text-left">
              <div className="flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0" />
                <span>{t.emergencyNotice}</span>
              </div>
              <button
                type="button"
                onClick={() => openEmergencyModal('Assistant Hero Triage')}
                className="shrink-0 px-2.5 py-1 bg-rose-600 hover:bg-rose-500 text-white font-bold rounded-lg text-2xs cursor-pointer"
              >
                112 / 108
              </button>
            </div>
          </div>

          {/* Right Column: Clean Interactive Assistant Card with Friendly Avatar */}
          <div className="lg:col-span-6 bg-white text-[#102A43] rounded-3xl p-6 sm:p-7 shadow-xl border border-slate-200/90 relative">
            {/* Header: Friendly Avatar + Assistant Name */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#0F766E] to-[#2DD4BF] p-0.5 shadow-sm shrink-0 flex items-center justify-center">
                  <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
                    <circle cx="24" cy="22" r="14" fill="#FFFFFF" />
                    <circle cx="19" cy="20" r="2" fill="#0F766E" />
                    <circle cx="29" cy="20" r="2" fill="#0F766E" />
                    <path d="M18 25C20 28 28 28 30 25" stroke="#0F766E" strokeWidth="2" strokeLinecap="round" />
                    <path d="M10 22C10 14 14 8 24 8C34 8 38 14 38 22" stroke="#D9F3EC" strokeWidth="2.5" strokeLinecap="round" />
                    <circle cx="10" cy="22" r="2.5" fill="#35B8A6" />
                    <circle cx="38" cy="22" r="2.5" fill="#35B8A6" />
                    <circle cx="36" cy="10" r="4" fill="#FEF3C7" />
                    <path d="M36 8V12M34 10H38" stroke="#D97706" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                </div>

                <div>
                  <h2 className="font-bold text-base text-[#102A43] flex items-center gap-1.5">
                    <span>IMD Care AI Assistant</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  </h2>
                  <p className="text-2xs text-slate-500">
                    Grounded in AIIMS &amp; ICMR Clinical Guidelines
                  </p>
                </div>
              </div>

              <Link
                href="/assistant"
                className="text-xs font-bold text-[#0F766E] hover:text-[#0D655F] hover:underline flex items-center gap-1"
              >
                <span>{t.askButton}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Interactive Query Input */}
            <div className="pt-4 space-y-3">
              <div className="relative">
                <input
                  type="text"
                  value={questionInput}
                  onChange={(e) => setQuestionInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleAsk(questionInput);
                  }}
                  placeholder={t.inputPlaceholder}
                  className="w-full pl-4 pr-24 py-3 bg-slate-50 border border-slate-300 rounded-2xl text-xs sm:text-sm text-[#102A43] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0F766E]/40 focus:bg-white transition-all"
                />
                <button
                  type="button"
                  disabled={inlineLoading || !questionInput.trim()}
                  onClick={() => handleAsk(questionInput)}
                  className="absolute right-1.5 top-1.5 bottom-1.5 px-4 bg-[#0F766E] hover:bg-[#0D655F] disabled:opacity-40 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer"
                >
                  {inlineLoading ? (
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>{t.sendBtn}</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>

              {/* Inline Answer Preview */}
              {inlineAnswer && (
                <div className="p-4 bg-[#E8F7F5]/50 border border-[#0F766E]/20 rounded-2xl text-xs text-slate-700 space-y-2 animate-fade-in">
                  <div className="flex items-center justify-between font-bold text-[#0F766E] text-2xs uppercase tracking-wider">
                    <span className="flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      AI Health Guidance:
                    </span>
                    <Link
                      href={`/assistant?q=${encodeURIComponent(questionInput)}`}
                      className="hover:underline flex items-center gap-0.5"
                    >
                      Continue in Chat <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                  <p className="line-clamp-4 leading-relaxed whitespace-pre-line">
                    {inlineAnswer}
                  </p>
                </div>
              )}

              {/* Suggested Question Chips */}
              <div className="pt-2">
                <span className="text-2xs font-semibold text-slate-500 uppercase tracking-wider block mb-2">
                  {t.suggestedHeading}
                </span>
                <div className="flex flex-wrap gap-2">
                  {currentChips.map((chip, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => {
                        setQuestionInput(chip.query);
                        handleAsk(chip.query);
                      }}
                      className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-[#E8F7F5] hover:text-[#0F766E] border border-slate-200 text-2xs sm:text-xs font-medium text-slate-700 transition-colors cursor-pointer text-left flex items-center gap-1.5 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0F766E]/60 group-hover:bg-[#0F766E]" />
                      <span>{chip.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Footer Note */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-2xs text-slate-500">
                <span className="flex items-center gap-1">
                  <Info className="w-3 h-3 text-slate-400" />
                  Educational literacy platform — not a diagnosis.
                </span>
                <Link
                  href="/assistant"
                  className="font-bold text-[#0F766E] hover:underline"
                >
                  Full Assistant Screen →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

