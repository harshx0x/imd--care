'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  MessageSquareHeart,
  FileSpreadsheet,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  PhoneCall,
  HeartPulse
} from 'lucide-react';
import { IndianJaliPattern, MandalaRings } from './IndianPatternDecorations';
import { Language } from '@/lib/types';

interface HeroProps {
  language: Language;
  openEmergencyModal: () => void;
}

export function Hero({ language, openEmergencyModal }: HeroProps) {
  const [activeTab, setActiveTab] = useState<'question' | 'report'>('question');

  const content = {
    en: {
      badge: 'Responsible AI Healthcare Platform',
      headline: 'Your Health. Better Understood.',
      description:
        'Millions struggle to decipher symptoms and complex laboratory reports. IMD Care translates medical terminology into clear, accessible guidance — empowering you to ask the right questions at your next doctor visit.',
      askButton: 'Ask a Health Question',
      reportButton: 'Understand a Lab Report',
      trust: [
        '100% Private & Confidential',
        'Available in English, हिंदी, मराठी',
        'Evidence-Grounded Explanations',
        'Supports Your Doctor Visit'
      ],
      previewQuestionTab: 'Health Question Example',
      previewReportTab: 'Lab Report Example',
      sampleQ: 'What does a mild tension headache feel like and how to relieve it?',
      sampleA:
        'Tension headaches often feel like a dull, steady band of pressure around the forehead or temples. Helpful first steps include resting in a quiet space, hydration, gentle neck stretches, and reducing screen eye strain. If accompanied by sudden numbness or speech difficulty, seek immediate medical care.',
      sampleSource: 'AIIMS & ICMR Clinical Guidelines [1]',
      sampleTestName: 'Hemoglobin (Hb)',
      sampleTestVal: '10.2 g/dL',
      sampleTestRange: '12.0 – 15.5 g/dL',
      sampleTestStatus: 'Mildly Low',
      sampleTestExplain:
        'Hemoglobin carries oxygen throughout your body. A mildly low value may cause fatigue and warrants discussing dietary iron or ferritin levels with your doctor.',
      tryInteractive: 'Try this live in',
      emergencyNotice: 'Facing an acute medical emergency in India? Call 112 or 108 immediately.'
    },
    hi: {
      badge: 'विश्वसनीय AI स्वास्थ्य मंच',
      headline: 'आपका स्वास्थ्य। बेहतर समझ के साथ।',
      description:
        'लाखों लोग अपने लक्षणों और जटिल मेडिकल रिपोर्टों को समझने में कठिनाई महसूस करते हैं। IMD Care कठिन चिकित्सा शब्दावली को सरल, आम भाषा में समझाता है — ताकि आप अगली डॉक्टर विजिट में सही सवाल पूछ सकें।',
      askButton: 'स्वास्थ्य संबंधी प्रश्न पूछें',
      reportButton: 'लैब रिपोर्ट समझें',
      trust: [
        '100% सुरक्षित एवं गोपनीय',
        'अंग्रेजी, हिंदी व मराठी में उपलब्ध',
        'प्रमाण-आधारित सरल विश्लेषण',
        'डॉक्टर के विकल्प के बिना सहायता'
      ],
      previewQuestionTab: 'स्वास्थ्य प्रश्न का उदाहरण',
      previewReportTab: 'लैब रिपोर्ट का उदाहरण',
      sampleQ: 'हल्के सिरदर्द के क्या कारण हैं और इससे घरेलू रूप से कैसे राहत पाएं?',
      sampleA:
        'तनाव सिरदर्द आमतौर पर माथे या कनपटी के आसपास हल्के दबाव जैसा महसूस होता है। पर्याप्त पानी पीना, स्क्रीन से आंखों को विश्राम देना और शांत वातावरण में आराम करना मददगार हो सकता है। यदि सिरदर्द अचानक बहुत तीव्र हो, तो तुरंत डॉक्टर से संपर्क करें।',
      sampleSource: 'एम्स एवं आईसीएमआर दिशानिर्देश [1]',
      sampleTestName: 'हीमोग्लोबिन (Hb)',
      sampleTestVal: '10.2 g/dL',
      sampleTestRange: '12.0 – 15.5 g/dL',
      sampleTestStatus: 'सामान्य से थोड़ा कम',
      sampleTestExplain:
        'हीमोग्लोबिन शरीर में ऑक्सीजन पहुंचाने का काम करता है। यह स्तर हल्का कम होने पर थकान हो सकती है। अपने चिकित्सक से आहार या आयरन की जांच पर चर्चा करें।',
      tryInteractive: 'इसे लाइव आजमाएं',
      emergencyNotice: 'भारत में किसी भी आपातकालीन स्थिति में तुरंत 112 या 108 डायल करें।'
    },
    mr: {
      badge: 'जबाबदार AI आरोग्य मंच',
      headline: 'तुमचे आरोग्य. अधिक चांगल्या प्रकारे समजून घ्या.',
      description:
        'लाखो लोकांना आपली लक्षणे आणि क्लिष्ट लॅब रिपोर्ट्स समजून घेणे कठीण जाते. IMD Care वैद्यकीय संज्ञा सोप्या आणि दैनंदिन भाषेत समजावून सांगते — जेणेकरून डॉक्टरांना योग्य प्रश्न विचारणे सोपे होईल.',
      askButton: 'आरोग्याविषयी प्रश्न विचारा',
      reportButton: 'लॅब रिपोर्ट समजून घ्या',
      trust: [
        '१००% खाजगी आणि गोपनीय',
        'इंग्रजी, हिंदी व मराठीत उपलब्ध',
        'पुरावा-आधारित सोपे मार्गदर्शन',
        'डॉक्टरांच्या सल्ल्याला पूरक'
      ],
      previewQuestionTab: 'आरोग्य शंकेचे उदाहरण',
      previewReportTab: 'लॅब रिपोर्टचे उदाहरण',
      sampleQ: 'कामाच्या ताणामुळे डोके दुखत असल्यास कोणते घरगुती उपाय करावेत?',
      sampleA:
        'ताणतणावामुळे होणारी डोकेदुखी कपाळावर हलक्या पट्ट्यासारखी जाणवते. भरपूर पाणी पिणे, डोळ्यांना स्क्रीनपासून विश्रांती देणे आणि शांत जागेत डोळे मिटून बसणे फायदेशीर ठरते. डोकेदुखी तीव्र असल्यास त्वरित डॉक्टरांशी संपर्क साधा.',
      sampleSource: 'वैद्यकीय मार्गदर्शक तत्त्वे [1]',
      sampleTestName: 'हिमोग्लोबिन (Hb)',
      sampleTestVal: '१०.२ g/dL',
      sampleTestRange: '१२.० – १५.५ g/dL',
      sampleTestStatus: 'किंचित कमी',
      sampleTestExplain:
        'हिमोग्लोबिन संपूर्ण शरीराला ऑक्सिजन पुरवण्याचे काम करते. प्रमाण किंचित कमी असल्यास थकवा जाणवू शकतो. डॉक्टरांशी योग्य आहाराबाबत चर्चा करा.',
      tryInteractive: 'हे प्रत्यक्ष वापरून पहा',
      emergencyNotice: 'भारतामध्ये कोणत्याही आपत्कालीन प्रसंगी लगेच ११२ किंवा १०८ वर संपर्क करा.'
    }
  };

  const c = content[language] || content.en;

  return (
    <section className="relative bg-gradient-to-b from-[#102A43] via-[#0E243A] to-[#0A1926] text-white overflow-hidden pt-12 pb-16 sm:pt-16 sm:pb-24">
      {/* Background Indian Jali & Mandala Accents */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <IndianJaliPattern className="w-full h-full text-[#35B8A6]/20" />
      </div>
      <div className="absolute top-0 right-0 w-96 h-96 -mr-20 -mt-20 pointer-events-none opacity-20">
        <MandalaRings className="w-full h-full text-[#0F766E]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Description, Two Prominent CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top Pill */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#0F766E]/40 border border-[#35B8A6]/40 text-xs font-semibold text-[#D9F3EC]">
              <Sparkles className="w-3.5 h-3.5 text-[#35B8A6]" />
              <span>{c.badge}</span>
            </div>

            {/* Clear Hero Headline: "Your Health. Better Understood." */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-[1.18]">
              {c.headline.split('. ')[0]}.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2DD4BF] via-[#35B8A6] to-[#DDF5EF]">
                {c.headline.split('. ')[1] || ''}
              </span>
            </h1>

            {/* Short Description */}
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {c.description}
            </p>

            {/* Two Prominent Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              {/* Button 1: "Ask a Health Question" */}
              <Link
                href="/assistant"
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-[#0F766E] hover:bg-[#0D655F] active:bg-[#0B544F] text-white font-bold text-sm tracking-wide shadow-xl shadow-[#0F766E]/30 hover:shadow-[#0F766E]/50 transition-all flex items-center justify-center gap-2 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#35B8A6] btn-interactive"
              >
                <MessageSquareHeart className="w-4 h-4 text-[#DDF5EF]" />
                <span>{c.askButton}</span>
                <ArrowRight className="w-4 h-4 text-[#35B8A6] group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Button 2: "Understand a Lab Report" */}
              <Link
                href="/reports"
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white/10 hover:bg-white/15 active:bg-white/20 text-white font-bold text-sm border border-white/20 backdrop-blur-sm transition-all flex items-center justify-center gap-2 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#35B8A6] btn-interactive"
              >
                <FileSpreadsheet className="w-4 h-4 text-[#35B8A6]" />
                <span>{c.reportButton}</span>
                <ArrowRight className="w-4 h-4 text-slate-300 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Trust Highlights */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-2 gap-3 border-t border-white/10 max-w-xl mx-auto lg:mx-0 text-left">
              {c.trust.map((item, idx) => (
                <div key={idx} className="flex items-center space-x-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#35B8A6] shrink-0" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Live Preview Card showcasing AI Clarity */}
          <div className="lg:col-span-5">
            <div className="bg-[#102A43]/90 backdrop-blur-md rounded-2xl border border-white/15 p-5 sm:p-6 shadow-2xl relative">
              {/* Header Tabs */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                <div className="flex items-center space-x-1.5 p-1 bg-white/5 rounded-xl border border-white/10 text-xs">
                  <button
                    type="button"
                    onClick={() => setActiveTab('question')}
                    className={`px-3 py-1.5 rounded-lg font-semibold transition ${
                      activeTab === 'question'
                        ? 'bg-[#0F766E] text-white shadow-xs'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    {c.previewQuestionTab}
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('report')}
                    className={`px-3 py-1.5 rounded-lg font-semibold transition ${
                      activeTab === 'report'
                        ? 'bg-[#0F766E] text-white shadow-xs'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    {c.previewReportTab}
                  </button>
                </div>

                <div className="flex items-center space-x-1 text-[11px] text-[#35B8A6] font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#35B8A6] animate-pulse" />
                  <span>AI Ready</span>
                </div>
              </div>

              {/* Tab 1: Health Question Preview */}
              {activeTab === 'question' && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  {/* User Query Bubble */}
                  <div className="flex items-start space-x-2.5">
                    <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center text-xs shrink-0 font-bold text-slate-300">
                      Q
                    </div>
                    <div className="bg-white/10 rounded-2xl rounded-tl-sm p-3 text-xs text-slate-200 leading-relaxed border border-white/10">
                      {c.sampleQ}
                    </div>
                  </div>

                  {/* AI Response Bubble */}
                  <div className="flex items-start space-x-2.5">
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#0F766E] to-[#2DD4BF] flex items-center justify-center text-xs shrink-0 text-white shadow-xs">
                      <HeartPulse className="w-4 h-4" />
                    </div>
                    <div className="space-y-2 bg-[#0A1926]/80 rounded-2xl rounded-tl-sm p-3.5 text-xs text-slate-200 leading-relaxed border border-[#35B8A6]/30 shadow-inner">
                      <p>{c.sampleA}</p>
                      <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-[#35B8A6]">
                        <span>{c.sampleSource}</span>
                        <Link
                          href="/assistant"
                          className="hover:underline flex items-center gap-1 font-bold text-white"
                        >
                          <span>{c.tryInteractive} AI Assistant</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2: Lab Report Preview */}
              {activeTab === 'report' && (
                <div className="space-y-3.5 animate-in fade-in duration-200">
                  <div className="bg-white/5 rounded-xl border border-white/10 p-3.5 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white">{c.sampleTestName}</span>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                        {c.sampleTestStatus}
                      </span>
                    </div>

                    <div className="flex items-baseline space-x-2">
                      <span className="text-xl font-black text-white">{c.sampleTestVal}</span>
                      <span className="text-xs text-slate-400">Ref: {c.sampleTestRange}</span>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed pt-1 border-t border-white/10">
                      {c.sampleTestExplain}
                    </p>
                  </div>

                  <div className="p-3 bg-[#0A1926]/80 rounded-xl border border-[#35B8A6]/30 flex items-center justify-between text-xs">
                    <span className="text-slate-300 text-[11px]">Empowering questions for your physician</span>
                    <Link
                      href="/reports"
                      className="text-[#35B8A6] font-bold hover:underline flex items-center gap-1 text-xs"
                    >
                      <span>{c.reportButton}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Emergency Ticker Bar */}
        <div className="mt-12 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-300">
          <div className="flex items-center space-x-2 text-center sm:text-left">
            <span className="flex h-2 w-2 rounded-full bg-red-500 animate-ping" />
            <span className="font-semibold text-slate-200">{c.emergencyNotice}</span>
          </div>
          <button
            type="button"
            onClick={openEmergencyModal}
            className="text-xs font-bold text-red-400 hover:text-red-300 underline underline-offset-4 flex items-center gap-1 cursor-pointer"
          >
            <PhoneCall className="w-3 h-3" />
            <span>National Emergency Helpline: 112</span>
          </button>
        </div>
      </div>
    </section>
  );
}
