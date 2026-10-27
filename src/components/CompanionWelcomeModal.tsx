'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  MessageSquareHeart,
  Stethoscope,
  FileSpreadsheet,
  CalendarCheck,
  X,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  HeartPulse,
  Info
} from 'lucide-react';
import { Language } from '@/lib/types';

interface CompanionWelcomeModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export function CompanionWelcomeModal({
  isOpen,
  onClose,
  language
}: CompanionWelcomeModalProps) {
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  // Focus and ESC handling
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Autofocus close button or first interactive element
    setTimeout(() => {
      closeBtnRef.current?.focus();
    }, 50);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const content = {
    en: {
      title: 'Meet Your IMD Care Health Companion',
      subtitle: 'Responsible AI Guidance for Everyday Wellness',
      greeting: "Namaste! I'm your IMD Care assistant. What would you like help with today?",
      subgreeting:
        'Choose a healthcare area below to start. I can explain symptoms, demystify medical reports, or guide you toward healthy Indian lifestyle habits.',
      options: [
        {
          href: '/assistant',
          icon: MessageSquareHeart,
          badge: 'Multilingual AI',
          title: 'Ask AI Health Assistant',
          desc: 'Have a conversational chat about everyday wellness, nutrition, or health queries in English, Hindi, or Marathi.'
        },
        {
          href: '/symptoms',
          icon: Stethoscope,
          badge: '112 Safe Triage',
          title: 'Smart Symptom Guidance',
          desc: 'Check non-emergency symptoms with conservative guidance and clear physician consultation timelines.'
        },
        {
          href: '/reports',
          icon: FileSpreadsheet,
          badge: 'Biomarkers',
          title: 'Medical Report Simplifier',
          desc: 'Translate complex lab reports (HbA1c, CBC, Lipid) into plain language with smart doctor-visit questions.'
        },
        {
          href: '/preventive-care',
          icon: CalendarCheck,
          badge: 'Private & Local',
          title: 'Build Healthier Habits',
          desc: 'Track hydration, daily 100-step strolls, and private medication reminders in your browser.'
        }
      ],
      disclaimerTitle: 'Ethical Healthcare Transparency:',
      disclaimerText:
        'I am an AI health literacy companion designed to help you understand medical topics and everyday wellness. I am not a doctor, I have not reviewed personal health records, and I cannot diagnose medical conditions or prescribe medications. For emergencies, always dial 112 or 108.',
      closeText: 'Close Panel'
    },
    hi: {
      title: 'अपने IMD Care स्वास्थ्य साथी से मिलें',
      subtitle: 'दैनिक स्वास्थ्य और जागरूकता के लिए सुरक्षित AI साथी',
      greeting: 'नमस्ते! मैं आपका IMD Care सहायक हूँ। आज मैं आपकी क्या सहायता कर सकता हूँ?',
      subgreeting:
        'शुरुआत करने के लिए नीचे किसी विकल्प को चुनें। मैं लक्षणों को समझने, लैब रिपोर्टों को सरल बनाने या स्वस्थ दिनचर्या में आपका मार्गदर्शन कर सकता हूँ।',
      options: [
        {
          href: '/assistant',
          icon: MessageSquareHeart,
          badge: 'बहुभाषी AI',
          title: 'AI स्वास्थ्य सहायक से पूछें',
          desc: 'अंग्रेजी, हिंदी या मराठी में दैनिक स्वास्थ्य, खानपान और जीवनशैली पर बातचीत करें।'
        },
        {
          href: '/symptoms',
          icon: Stethoscope,
          badge: 'सुरक्षित 112 ट्राइएज',
          title: 'स्मार्ट लक्षण मार्गदर्शन',
          desc: 'लक्षणों की गंभीरता समझें और डॉक्टर से परामर्श लेने का सही समय जानें।'
        },
        {
          href: '/reports',
          icon: FileSpreadsheet,
          badge: 'लैब रिपोर्ट',
          title: 'मेडिकल रिपोर्ट विश्लेषक',
          desc: 'जटिल लैब टेस्टों (CBC, शुगर, थायरॉइड) को सरल भाषा में समझें।'
        },
        {
          href: '/preventive-care',
          icon: CalendarCheck,
          badge: 'निजी ब्राउज़र डेटा',
          title: 'स्वस्थ आदतें और अनुस्मारक',
          desc: 'पानी पीने का लक्ष्य, योग-प्राणायाम और दवाइयों के समय का ध्यान रखें।'
        }
      ],
      disclaimerTitle: 'चिकित्सीय सुरक्षा सूचना:',
      disclaimerText:
        'मैं एक AI स्वास्थ्य साक्षरता साथी हूँ। मैं डॉक्टर नहीं हूँ, मैंने आपका व्यक्तिगत मेडिकल रिकॉर्ड नहीं देखा है, और मैं चिकित्सीय निदान या दवाइयां नहीं लिख सकता। आपात स्थिति में तुरंत 112 या 108 पर संपर्क करें।',
      closeText: 'बंद करें'
    },
    mr: {
      title: 'आपल्या IMD Care आरोग्य मित्राशी भेटा',
      subtitle: 'दैनंदिन आरोग्यासाठी विश्वासार्ह AI मार्गदर्शन',
      greeting: 'नमस्कार! मी आपला IMD Care सहाय्यक आहे. आज मी आपल्याला कशी मदत करू?',
      subgreeting:
        'सुरुवात करण्यासाठी खालीलपैकी एक पर्याय निवडा. मी लक्षणे समजून घेणे, लॅब रिपोर्ट सोपे करणे किंवा निरोगी सवयींमध्ये मदत करू शकतो.',
      options: [
        {
          href: '/assistant',
          icon: MessageSquareHeart,
          badge: 'बहुभाषिक AI',
          title: 'AI आरोग्य सहाय्यक विचारा',
          desc: 'मराठी, हिंदी किंवा इंग्रजीत आहार, व्यायाम आणि आरोग्याविषयी थेट संवाद साधा.'
        },
        {
          href: '/symptoms',
          icon: Stethoscope,
          badge: '112 सुरक्षितता',
          title: 'स्मार्ट लक्षण मार्गदर्शन',
          desc: 'लक्षणे तपासा आणि डॉक्टरांचा सल्ला कधी घ्यावा याची खात्रीशीर माहिती मिळवा.'
        },
        {
          href: '/reports',
          icon: FileSpreadsheet,
          badge: 'बायोमार्कर्स',
          title: 'वैद्यकीय अहवाल विश्लेषण',
          desc: 'रक्त तपासणी आणि वैद्यकीय अहवाल समजण्यास सोप्या भाषेत मिळवा.'
        },
        {
          href: '/preventive-care',
          icon: CalendarCheck,
          badge: 'खाजगी डेटा',
          title: 'निरोगी जीवनशैली सवयी',
          desc: 'पाण्याचे प्रमाण, शतपावली आणि औषधांची स्मरणपत्रे खाजगीरित्या सांभाळा.'
        }
      ],
      disclaimerTitle: 'सुरक्षितता व पारदर्शकता:',
      disclaimerText:
        'मी एक AI आरोग्य साक्षरता सहाय्यक आहे. मी डॉक्टर नाही, मी आपला वैयक्तिक वैद्यकीय इतिहास तपासलेला नाही आणि मी वैद्यकीय निदान किंवा औषधोपचार देत नाही. तातडीच्या प्रसंगी 112 किंवा 108 वर त्वरित संपर्क करा.',
      closeText: 'बंद करा'
    }
  };

  const current = content[language] || content.en;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="companion-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A1926]/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#CDE8E2] overflow-hidden max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-[#102A43] via-[#0F766E] to-[#102A43] text-white px-6 py-5 flex items-center justify-between border-b border-[#35B8A6]/20">
          <div className="flex items-center space-x-3.5">
            <div className="w-11 h-11 rounded-2xl bg-[#D9F3EC] text-[#0F766E] flex items-center justify-center shadow-md font-bold text-xl border border-white/30">
              🙏
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h2
                  id="companion-modal-title"
                  className="text-base sm:text-lg font-bold tracking-tight text-white"
                >
                  {current.title}
                </h2>
                <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-[#35B8A6]/25 text-[#D9F3EC] border border-[#35B8A6]/40">
                  AI Guide
                </span>
              </div>
              <p className="text-xs text-[#D9F3EC]/80 font-medium">
                {current.subtitle}
              </p>
            </div>
          </div>
          <button
            ref={closeBtnRef}
            onClick={onClose}
            className="text-white/80 hover:text-white p-2 rounded-xl hover:bg-white/10 transition cursor-pointer"
            aria-label="Close welcome panel"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 bg-gradient-to-b from-[#E8F7F5]/30 to-white">
          {/* Warm Welcome Speech Box */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#D9F3EC]/70 border border-[#35B8A6]/40 shadow-xs space-y-2">
            <div className="flex items-center space-x-2 text-[#0F766E] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-[#35B8A6]" />
              <span>Friendly AI Health Companion</span>
            </div>
            <p className="text-base sm:text-lg font-extrabold text-[#102A43] leading-snug">
              &ldquo;{current.greeting}&rdquo;
            </p>
            <p className="text-xs sm:text-sm text-[#243447] leading-relaxed">
              {current.subgreeting}
            </p>
          </div>

          {/* Quick Action Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {current.options.map((opt, i) => {
              const Icon = opt.icon;
              return (
                <Link
                  key={i}
                  href={opt.href}
                  onClick={onClose}
                  className="group p-4 rounded-2xl bg-white border border-[#CDE8E2] hover:border-[#35B8A6] hover:bg-[#E8F7F5]/50 shadow-xs hover:shadow-md transition-all flex flex-col justify-between cursor-pointer"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="w-9 h-9 rounded-xl bg-[#D9F3EC] text-[#0F766E] group-hover:bg-[#0F766E] group-hover:text-white transition flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#E8F7F5] text-[#0F766E] border border-[#CDE8E2]">
                        {opt.badge}
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-[#102A43] group-hover:text-[#0F766E] transition">
                      {opt.title}
                    </h3>
                    <p className="text-xs text-[#64748B] leading-relaxed line-clamp-2">
                      {opt.desc}
                    </p>
                  </div>
                  <div className="pt-3 mt-2 border-t border-[#CDE8E2]/60 flex items-center justify-between text-xs font-bold text-[#0F766E]">
                    <span>Open Feature</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#35B8A6] group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Clinical Safety & Non-Doctor Disclosure */}
          <div className="p-4 bg-amber-50/80 border border-amber-200 rounded-2xl text-xs text-amber-950 flex items-start gap-3 shadow-xs">
            <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <strong className="block font-bold text-[#102A43]">
                {current.disclaimerTitle}
              </strong>
              <p className="text-[11px] text-amber-900 leading-relaxed font-normal">
                {current.disclaimerText}
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-[#D9F3EC]/50 px-6 py-3.5 border-t border-[#CDE8E2] flex items-center justify-between">
          <div className="flex items-center space-x-2 text-xs text-[#0F766E] font-medium">
            <ShieldCheck className="w-4 h-4 text-[#35B8A6]" />
            <span>Ethical AI • No Personal Health Records Logged</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#102A43] hover:bg-[#0A1926] text-white text-xs font-bold rounded-xl transition cursor-pointer"
          >
            {current.closeText}
          </button>
        </div>
      </div>
    </div>
  );
}
