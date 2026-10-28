'use client';

import React, { useState, useEffect } from 'react';
import {
  Heart,
  Wind,
  CheckCircle2,
  Calendar,
  ShieldCheck,
  Play,
  Pause,
  X
} from 'lucide-react';
import { Language } from '@/lib/types';

interface MoodCheckInProps {
  language: Language;
}

export type MoodType = 'happy' | 'calm' | 'okay' | 'tired' | 'stressed' | 'sad';

interface MoodItem {
  id: MoodType;
  label: Record<Language, string>;
  sublabel: Record<Language, string>;
  color: string;
  bgLight: string;
  borderColor: string;
  supportiveMsg: Record<Language, string>;
  activityTitle: Record<Language, string>;
  activityDesc: Record<Language, string>;
  activityType: 'breathing' | 'stretch' | 'reflection' | 'hydration' | 'walk';
}

const MOODS: MoodItem[] = [
  {
    id: 'happy',
    label: { en: 'Happy', hi: 'प्रसन्न', mr: 'आनंदी' },
    sublabel: { en: 'Energized & joyful', hi: 'ऊर्जावान और खुश', mr: 'उत्साही आणि समाधानी' },
    color: '#D97706',
    bgLight: '#FEF3C7',
    borderColor: '#FDE68A',
    supportiveMsg: {
      en: 'Wonderful to hear! Hold onto this positive energy throughout your day.',
      hi: 'बहुत बढ़िया! इस सकारात्मक ऊर्जा को अपने पूरे दिन में बनाए रखें।',
      mr: 'खूप छान! ही सकारात्मक ऊर्जा दिवसभर तुमच्यासोबत राहू द्या.'
    },
    activityTitle: { en: '5-Minute Mindful Walk', hi: '5 मिनट की आनंदमयी सैर', mr: '५ मिनिटांचा फेरफटका' },
    activityDesc: {
      en: 'Take a short outdoor stroll or share a warm smile with a friend or colleague.',
      hi: 'खुली हवा में थोड़ा टहलें या किसी मित्र या साथी के साथ मुस्कान साझा करें।',
      mr: 'बाहेर थोडा फेरफटका मारा किंवा मित्राशी मनमोकळे संभाषण करा.'
    },
    activityType: 'walk'
  },
  {
    id: 'calm',
    label: { en: 'Calm', hi: 'शांत', mr: 'शांत' },
    sublabel: { en: 'Relaxed & centered', hi: 'स्थिर और संतुलित', mr: 'तणावमुक्त आणि स्थिर' },
    color: '#0F766E',
    bgLight: '#E8F7F5',
    borderColor: '#CDE8E2',
    supportiveMsg: {
      en: 'A calm mind supports lower blood pressure and steady, restorative health.',
      hi: 'शांत मन ब्लड प्रेशर को संतुलित रखता है और शारीरिक स्वास्थ्य को बढ़ाता है।',
      mr: 'शांत मन रक्तदाब नियंत्रणात ठेवते आणि शरीराचे आरोग्य सुधारते.'
    },
    activityTitle: { en: 'Mindful Gratitude Pause', hi: 'कृतज्ञता के दो पल', mr: 'कृतज्ञतेचे दोन क्षण' },
    activityDesc: {
      en: 'Think of 2 small things from today that you feel quietly grateful for.',
      hi: 'आज की ऐसी 2 छोटी बातों को याद करें जिनके लिए आप मन से आभारी महसूस करते हैं।',
      mr: 'आजच्या दिवसातील अशा २ चांगल्या गोष्टी आठवा ज्याबद्दल तुम्हाला कृतज्ञ वाटते.'
    },
    activityType: 'reflection'
  },
  {
    id: 'okay',
    label: { en: 'Okay', hi: 'ठीक-ठाक', mr: 'बरे' },
    sublabel: { en: 'Neutral & steady', hi: 'सामान्य और संतुलित', mr: 'सर्वसामान्य आणि स्थिर' },
    color: '#475569',
    bgLight: '#F1F5F9',
    borderColor: '#E2E8F0',
    supportiveMsg: {
      en: 'Being steady and balanced is a healthy place to be. Take good care of your pace.',
      hi: 'संतुलित रहना भी एक अच्छी स्थिति है। अपने काम की गति सहज और सामान्य रखें।',
      mr: 'स्थिर आणि संतुलित राहणे आरोग्यासाठी उत्तम आहे. स्वतःची योग्य काळजी घ्या.'
    },
    activityTitle: { en: 'Hydration & Posture Reset', hi: 'पानी और पोस्चर रीसेट', mr: 'पाणी आणि शरीराची बैठक' },
    activityDesc: {
      en: 'Drink a glass of fresh water and roll your shoulders back 5 times.',
      hi: 'एक गिलास ताजा पानी पिएं और अपने कंधों को 5 बार पीछे घुमाकर सीधा बैठें।',
      mr: 'एक ग्लास ताजे पाणी प्या आणि खांदे ५ वेळा गोलाकार फिरवून सरळ बसा.'
    },
    activityType: 'hydration'
  },
  {
    id: 'tired',
    label: { en: 'Tired', hi: 'थका हुआ', mr: 'थकल्यासारखे' },
    sublabel: { en: 'Low energy & sleepy', hi: 'सुस्ती और थकान', mr: 'कमी ऊर्जा व सुस्ती' },
    color: '#7C3AED',
    bgLight: '#EDE9FE',
    borderColor: '#DDD6FE',
    supportiveMsg: {
      en: 'Your body is asking for rest. Honor your limits and allow yourself time to recharge.',
      hi: 'आपका शरीर आराम मांग रहा है। अपनी थकान को समझें और खुद को थोड़ा विश्राम दें।',
      mr: 'तुमच्या शरीराला विश्रांतीची गरज आहे. थोडे थांबून शरीराला पुन्हा ऊर्जा मिळू द्या.'
    },
    activityTitle: { en: '2-Minute Neck & Eye Break', hi: '2 मिनट गर्दन और आंखों का आराम', mr: '२ मिनिटे मान व डोळ्यांना विश्रांती' },
    activityDesc: {
      en: 'Close your eyes for 60 seconds, gently tilt your head side to side, and rest tired eyes.',
      hi: '60 सेकंड आंखें बंद करें, सिर को दोनों तरफ धीरे-धीरे झुकाएं और गहरी सांस लें।',
      mr: '६० सेकंद डोळे मिटून बसा, मान हळूच दोन्ही बाजूला झुकवा आणि विश्रांती घ्या.'
    },
    activityType: 'stretch'
  },
  {
    id: 'stressed',
    label: { en: 'Stressed', hi: 'तनावग्रस्त', mr: 'ताणतणाव' },
    sublabel: { en: 'Overwhelmed & tense', hi: 'अत्यधिक दबाव और चिंता', mr: 'जास्त ताण किंवा काळजी' },
    color: '#D97706',
    bgLight: '#FEF3C7',
    borderColor: '#FDE68A',
    supportiveMsg: {
      en: 'You are doing the best you can. Let us take a moment together to slow your breathing.',
      hi: 'आप अपनी पूरी कोशिश कर रहे हैं। आइए साथ मिलकर सांसों को धीमा और शांत करें।',
      mr: 'तुम्ही शक्य तितके चांगले करत आहात. चला, दीर्घ श्वास घेऊन मन थोडे शांत करूया.'
    },
    activityTitle: { en: '2-Minute Box Breathing', hi: '2 मिनट का बॉक्स ब्रीदिंग प्राणायाम', mr: '२ मिनिटे बॉक्स ब्रीदिंग प्राणायाम' },
    activityDesc: {
      en: 'Inhale 4s, hold 4s, exhale 4s, hold 4s. Clinically proven to calm stress quickly.',
      hi: '4 सेकंड सांस लें, 4 सेकंड रोकें, 4 सेकंड छोड़ें, 4 सेकंड रोकें। यह तुरंत मन को शांत करता है।',
      mr: '४ सेकंद श्वास घ्या, ४ सेकंद रोखा, ४ सेकंद सोडा, ४ सेकंद थांबा. ताण तात्काळ कमी होतो.'
    },
    activityType: 'breathing'
  },
  {
    id: 'sad',
    label: { en: 'Sad', hi: 'उदास', mr: 'उदासीन' },
    sublabel: { en: 'Down & quiet', hi: 'मन भारी और शांत', mr: 'मन जड किंवा उदास' },
    color: '#2563EB',
    bgLight: '#DBEAFE',
    borderColor: '#BFDBFE',
    supportiveMsg: {
      en: 'It is okay not to feel okay. Be gentle with yourself today — you do not have to carry everything alone.',
      hi: 'कभी-कभी मन उदास होना स्वाभाविक है। खुद पर अधिक दबाव न डालें — आप अकेले नहीं हैं।',
      mr: 'कधीतरी मन उदास वाटणे साहजिक आहे. स्वतःशी दयाळू राहा — प्रत्येक भार एकट्याने वाहण्याची गरज नाही.'
    },
    activityTitle: { en: 'Gentle Self-Compassion Note', hi: 'आत्म-स्नेह और शांत विचार', mr: 'आत्म-संवाद व शांत विचार' },
    activityDesc: {
      en: 'Drink warm water or tea, wrap yourself in comfort, and speak to yourself like a caring friend.',
      hi: 'गुनगुना पानी या हर्बल चाय पिएं, आरामदायक जगह पर बैठें और खुद से एक अच्छे दोस्त की तरह बात करें।',
      mr: 'कोमट पाणी किंवा चहा घ्या, शांत बसा आणि स्वतःशी एखाद्या चांगल्या मित्रासारखे प्रेमाने बोला.'
    },
    activityType: 'reflection'
  }
];

const STORAGE_KEY = 'imd_care_mood_tracker_v1';

export function MoodCheckIn({ language }: MoodCheckInProps) {
  const [selectedMood, setSelectedMood] = useState<MoodType | null>(null);
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [weeklyHistory, setWeeklyHistory] = useState<(MoodType | null)[]>([
    'calm', 'happy', 'okay', 'calm', 'tired', null, null
  ]);
  const [isActivityOpen, setIsActivityOpen] = useState(false);
  const [breathingPhase, setBreathingPhase] = useState<'Inhale' | 'Hold' | 'Exhale' | 'HoldEmpty'>('Inhale');
  const [breathingSeconds, setBreathingSeconds] = useState(4);
  const [isBreathingActive, setIsBreathingActive] = useState(false);

  // Load from localStorage safely via animation frame
  useEffect(() => {
    let cancel = false;
    const raf = requestAnimationFrame(() => {
      if (cancel) return;
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
          const parsed = JSON.parse(saved);
          if (parsed.currentMood) setSelectedMood(parsed.currentMood);
          if (Array.isArray(parsed.history)) setWeeklyHistory(parsed.history);
        }
      } catch {
        // ignore
      }
    });

    return () => {
      cancel = true;
      cancelAnimationFrame(raf);
    };
  }, []);

  // Save selection
  const handleSelectMood = (moodId: MoodType) => {
    setSelectedMood(moodId);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);

    const todayIndex = 6;
    const newHistory = [...weeklyHistory];
    newHistory[todayIndex] = moodId;
    setWeeklyHistory(newHistory);

    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          currentMood: moodId,
          history: newHistory,
          date: new Date().toISOString().split('T')[0]
        })
      );
    } catch {
      // ignore
    }
  };

  const handleResetMood = () => {
    setSelectedMood(null);
    setIsActivityOpen(false);
    setIsBreathingActive(false);
  };

  // Breathing circle timer logic
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isActivityOpen && isBreathingActive) {
      interval = setInterval(() => {
        setBreathingSeconds((prev) => {
          if (prev <= 1) {
            setBreathingPhase((currentPhase) => {
              if (currentPhase === 'Inhale') return 'Hold';
              if (currentPhase === 'Hold') return 'Exhale';
              if (currentPhase === 'Exhale') return 'HoldEmpty';
              return 'Inhale';
            });
            return 4;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActivityOpen, isBreathingActive]);

  const activeMoodItem = MOODS.find((m) => m.id === selectedMood);

  const t = {
    en: {
      badge: 'Emotional Wellbeing',
      title: 'How are you feeling today?',
      subtitle: 'A private, non-judgmental check-in to support your daily wellness and mind.',
      tryActivityBtn: 'Try This Activity',
      changeMoodBtn: 'Change selection',
      savedNotice: 'Mood logged privately to your device',
      weeklyHeading: 'Your 7-Day Mood Flow',
      privacyNote:
        'Your mood check-in is 100% private and stored only on your local device. IMD Care does not diagnose mental health conditions.',
      days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Today'],
      breathingTitle: '2-Minute Box Breathing Guide',
      startBtn: 'Begin Breathing',
      pauseBtn: 'Pause',
      phases: {
        Inhale: 'Breathe In Slowly (4s)...',
        Hold: 'Gently Hold (4s)...',
        Exhale: 'Breathe Out Gently (4s)...',
        HoldEmpty: 'Rest Empty (4s)...'
      }
    },
    hi: {
      badge: 'मानसिक व भावनात्मक स्वास्थ्य',
      title: 'आज आप कैसा महसूस कर रहे हैं?',
      subtitle: 'एक निजी और सरल चेक-इन जो आपके मन और स्वास्थ्य को समझने में मदद करता है।',
      tryActivityBtn: 'यह गतिविधि आजमाएं',
      changeMoodBtn: 'विकल्प बदलें',
      savedNotice: 'मनोस्थिति सुरक्षित रूप से दर्ज की गई',
      weeklyHeading: 'आपका 7-दिवसीय मूड प्रवाह',
      privacyNote:
        'आपकी मनोस्थिति की जानकारी 100% निजी है और केवल आपके फोन/कंप्यूटर पर रहती है। IMD Care कोई मानसिक रोग निदान नहीं करता।',
      days: ['सोम', 'मंगल', 'बुध', 'गुरु', 'शुक्र', 'शनि', 'आज'],
      breathingTitle: '2 मिनट बॉक्स ब्रीदिंग प्राणायाम',
      startBtn: 'शुरू करें',
      pauseBtn: 'रोकें',
      phases: {
        Inhale: 'धीरे-धीरे सांस अंदर लें (4s)...',
        Hold: 'सांस रोककर रखें (4s)...',
        Exhale: 'धीरे-धीरे सांस छोड़ें (4s)...',
        HoldEmpty: 'विश्राम करें (4s)...'
      }
    },
    mr: {
      badge: 'मानसिक व भावनिक स्वास्थ्य',
      title: 'आज आपल्याला कसे वाटत आहे?',
      subtitle: 'आपल्या मनाचे आणि आरोग्याचे निरीक्षण करणारा एक सोपा आणि खाजगी संवाद.',
      tryActivityBtn: 'हा सोपा उपाय करून पहा',
      changeMoodBtn: 'पर्याय बदला',
      savedNotice: 'माहिती आपल्या डिव्हाइसवर खाजगी ठेवली गेली',
      weeklyHeading: 'तुमचा ७ दिवसांचा मूड आलेख',
      privacyNote:
        'आपली माहिती १००% खाजगी असून केवळ आपल्या डिव्हाइसवर सुरक्षित राहते. IMD Care कोणताही मानसिक आजार निदान करत नाही.',
      days: ['सोम', 'मंगळ', 'बुध', 'गुरू', 'शुक्र', 'शनि', 'आज'],
      breathingTitle: '२ मिनिटे बॉक्स ब्रीदिंग प्राणायाम',
      startBtn: 'सुरू करा',
      pauseBtn: 'थांबवा',
      phases: {
        Inhale: 'हळुवार श्वास आत घ्या (४s)...',
        Hold: 'श्वास रोखून ठेवा (४s)...',
        Exhale: 'हळुवार श्वास बाहेर सोडा (४s)...',
        HoldEmpty: 'शांत विश्रांती घ्या (४s)...'
      }
    }
  }[language];

  // Helper SVG Mood Mascot
  const renderMoodIcon = (moodId: MoodType, sizeClass = 'w-10 h-10') => {
    switch (moodId) {
      case 'happy':
        return (
          <svg viewBox="0 0 48 48" className={sizeClass} fill="none">
            <circle cx="24" cy="24" r="22" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="2.5" />
            <circle cx="17" cy="19" r="3" fill="#D97706" />
            <circle cx="31" cy="19" r="3" fill="#D97706" />
            <path d="M15 27C17 32 31 32 33 27" stroke="#D97706" strokeWidth="3" strokeLinecap="round" />
            <circle cx="12" cy="26" r="2" fill="#FDE68A" />
            <circle cx="36" cy="26" r="2" fill="#FDE68A" />
          </svg>
        );
      case 'calm':
        return (
          <svg viewBox="0 0 48 48" className={sizeClass} fill="none">
            <circle cx="24" cy="24" r="22" fill="#E8F7F5" stroke="#0F766E" strokeWidth="2.5" />
            <path d="M14 20C16 18 19 18 21 20" stroke="#0F766E" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M27 20C29 18 32 18 34 20" stroke="#0F766E" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M18 28C21 31 27 31 30 28" stroke="#0F766E" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        );
      case 'okay':
        return (
          <svg viewBox="0 0 48 48" className={sizeClass} fill="none">
            <circle cx="24" cy="24" r="22" fill="#F1F5F9" stroke="#64748B" strokeWidth="2.5" />
            <circle cx="17" cy="20" r="2.5" fill="#475569" />
            <circle cx="31" cy="20" r="2.5" fill="#475569" />
            <path d="M17 28H31" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        );
      case 'tired':
        return (
          <svg viewBox="0 0 48 48" className={sizeClass} fill="none">
            <circle cx="24" cy="24" r="22" fill="#EDE9FE" stroke="#8B5CF6" strokeWidth="2.5" />
            <path d="M14 22L20 20" stroke="#7C3AED" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M34 22L28 20" stroke="#7C3AED" strokeWidth="2.5" strokeLinecap="round" />
            <ellipse cx="24" cy="29" rx="3.5" ry="4.5" fill="#7C3AED" />
          </svg>
        );
      case 'stressed':
        return (
          <svg viewBox="0 0 48 48" className={sizeClass} fill="none">
            <circle cx="24" cy="24" r="22" fill="#FEF3C7" stroke="#D97706" strokeWidth="2.5" />
            <path d="M14 17L20 21" stroke="#D97706" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M34 17L28 21" stroke="#D97706" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="17" cy="22" r="2" fill="#D97706" />
            <circle cx="31" cy="22" r="2" fill="#D97706" />
            <path d="M17 30Q24 26 31 30" stroke="#D97706" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        );
      case 'sad':
        return (
          <svg viewBox="0 0 48 48" className={sizeClass} fill="none">
            <circle cx="24" cy="24" r="22" fill="#DBEAFE" stroke="#2563EB" strokeWidth="2.5" />
            <circle cx="17" cy="21" r="2.5" fill="#1D4ED8" />
            <circle cx="31" cy="21" r="2.5" fill="#1D4ED8" />
            <path d="M17 31C19 28 29 28 31 31" stroke="#1D4ED8" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M34 26Q35 28 34 29" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
          </svg>
        );
    }
  };

  return (
    <section className="py-8 bg-gradient-to-b from-[#F0F8F7] to-[#F7FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-b from-[#F0F8F7] to-[#F7FAFC] rounded-3xl p-6 sm:p-8 border border-[#DCE9E7] shadow-xs relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#E0F4F0]/60 to-transparent rounded-bl-full pointer-events-none" />

          {/* Section Header */}
          <div className="mb-6 relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E0F4F0] text-[#0F766E] text-xs font-semibold border border-[#0F766E]/20 mb-2">
              <Heart className="w-3.5 h-3.5 text-[#0F766E]" />
              <span>{t.badge}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#102A43] tracking-tight">
              {t.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#526780] mt-1 max-w-2xl leading-relaxed">
              {t.subtitle}
            </p>
          </div>

          {/* Mood Choices Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 relative z-10">
            {MOODS.map((mood) => {
              const isSelected = selectedMood === mood.id;
              return (
                <button
                  key={mood.id}
                  type="button"
                  onClick={() => handleSelectMood(mood.id)}
                  aria-pressed={isSelected}
                  className={`p-4 rounded-2xl text-center flex flex-col items-center justify-between transition-all duration-200 cursor-pointer group ${
                    isSelected
                      ? 'bg-[#E0F4F0] border-2 border-[#0F766E] shadow-xs scale-[1.02]'
                      : 'bg-white border border-[#DCE9E7] shadow-2xs hover:border-[#0F766E]/40 hover:shadow-xs hover:-translate-y-0.5'
                  }`}
                >
                  <div className="mb-2 transition-transform duration-200 group-hover:scale-110">
                    {renderMoodIcon(mood.id)}
                  </div>
                  <div>
                    <span
                      className={`block text-sm font-bold tracking-tight ${
                        isSelected ? 'text-[#0F766E]' : 'text-[#102A43]'
                      }`}
                    >
                      {mood.label[language]}
                    </span>
                    <span className="block text-2xs text-[#526780] mt-0.5">
                      {mood.sublabel[language]}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Selected Mood Detail & Supportive Activity Offer */}
          {activeMoodItem && (
            <div className="mt-6 pt-6 border-t border-[#DCE9E7] animate-fade-in relative z-10">
              <div className="bg-gradient-to-r from-white via-[#F0F8F7]/80 to-white rounded-2xl p-5 border border-[#DCE9E7] shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex items-start gap-3.5">
                  <div className="mt-0.5">{renderMoodIcon(activeMoodItem.id, 'w-10 h-10')}</div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm text-[#102A43]">
                        {activeMoodItem.label[language]}
                      </span>
                      {savedSuccess && (
                        <span className="inline-flex items-center gap-1 text-2xs text-[#0F766E] bg-[#E0F4F0] px-2.5 py-0.5 rounded-full font-medium border border-[#0F766E]/20">
                          <CheckCircle2 className="w-3 h-3 text-[#0F766E]" />
                          {t.savedNotice}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[#526780] mt-0.5 leading-relaxed">
                      {activeMoodItem.supportiveMsg[language]}
                    </p>
                    <div className="mt-2 text-2xs text-[#526780] flex items-center gap-1">
                      <span className="font-semibold text-[#102A43]">{activeMoodItem.activityTitle[language]}:</span>
                      <span>{activeMoodItem.activityDesc[language]}</span>
                    </div>
                  </div>
                </div>

                {/* Activity Launch Button & Change selection */}
                <div className="flex items-center gap-2 self-end md:self-center shrink-0">
                  <button
                    type="button"
                    onClick={() => {
                      setIsActivityOpen(true);
                      if (activeMoodItem.id === 'stressed') {
                        setIsBreathingActive(true);
                        setBreathingSeconds(4);
                        setBreathingPhase('Inhale');
                      }
                    }}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#0F766E] hover:bg-[#0D655F] text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>{t.tryActivityBtn}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleResetMood}
                    className="text-xs text-[#526780] hover:text-[#102A43] underline px-2 py-1 cursor-pointer"
                  >
                    {t.changeMoodBtn}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Interactive Guided Activity Drawer / Card */}
          {isActivityOpen && activeMoodItem && (
            <div className="mt-4 p-6 bg-slate-900 text-white rounded-2xl shadow-lg border border-slate-700 animate-fade-in relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Wind className="w-5 h-5 text-teal-400" />
                  <h4 className="font-bold text-sm sm:text-base text-white">
                    {activeMoodItem.activityTitle[language]}
                  </h4>
                </div>
                <button
                  type="button"
                  onClick={() => setIsActivityOpen(false)}
                  className="p-1 text-slate-400 hover:text-white rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {activeMoodItem.activityType === 'breathing' ? (
                <div className="flex flex-col items-center justify-center py-6 text-center">
                  <div
                    className={`w-36 h-36 rounded-full border-4 flex flex-col items-center justify-center transition-all duration-1000 ${
                      breathingPhase === 'Inhale'
                        ? 'scale-125 border-teal-400 bg-teal-500/20 shadow-lg shadow-teal-500/30'
                        : breathingPhase === 'Hold'
                        ? 'scale-125 border-amber-400 bg-amber-500/20'
                        : breathingPhase === 'Exhale'
                        ? 'scale-90 border-sky-400 bg-sky-500/20'
                        : 'scale-90 border-slate-500 bg-slate-700/20'
                    }`}
                  >
                    <span className="text-3xl font-black text-white">{breathingSeconds}</span>
                    <span className="text-2xs uppercase tracking-wider text-teal-200 mt-0.5">
                      {breathingPhase}
                    </span>
                  </div>

                  <p className="text-sm font-semibold text-teal-300 mt-6">
                    {t.phases[breathingPhase]}
                  </p>
                  <p className="text-2xs text-slate-400 max-w-sm mt-1">
                    {activeMoodItem.activityDesc[language]}
                  </p>

                  <div className="mt-4 flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setIsBreathingActive(!isBreathingActive)}
                      className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-xs font-bold transition-colors cursor-pointer"
                    >
                      {isBreathingActive ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                      <span>{isBreathingActive ? t.pauseBtn : t.startBtn}</span>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="py-4 space-y-3">
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    {activeMoodItem.activityDesc[language]}
                  </p>
                  <div className="bg-slate-800/80 p-3.5 rounded-xl border border-slate-700 text-2xs text-teal-200 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                    <span>
                      Take 2 quiet minutes for yourself right now. You can return to this screen whenever you need.
                    </span>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Weekly Mood Flow Row */}
          <div className="mt-6 pt-5 border-t border-[#DCE9E7] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#526780]">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#526780]" />
              <span className="font-semibold text-[#102A43]">{t.weeklyHeading}:</span>
              <div className="flex items-center gap-1.5 ml-2">
                {weeklyHistory.map((dayMood, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center"
                    title={`${t.days[idx]}: ${dayMood || 'Not recorded'}`}
                  >
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                        dayMood
                          ? 'bg-[#E0F4F0] border border-[#0F766E]/40 text-[#0F766E]'
                          : 'bg-white border border-[#DCE9E7] text-[#526780]/60'
                      }`}
                    >
                      {dayMood ? dayMood.charAt(0).toUpperCase() : '·'}
                    </div>
                    <span className="text-3xs text-[#526780] mt-0.5">{t.days[idx]}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Privacy Shield Disclaimer */}
            <div className="flex items-center gap-1.5 text-2xs text-[#526780] max-w-md">
              <ShieldCheck className="w-4 h-4 text-[#0F766E] shrink-0" />
              <span>{t.privacyNote}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

