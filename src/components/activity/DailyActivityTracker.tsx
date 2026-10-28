'use client';

import React, { useState, useEffect, useMemo } from 'react';
import {
  Footprints,
  Flame,
  MapPin,
  Trophy,
  Plus,
  Settings2,
  RotateCcw,
  Info,
  CheckCircle2,
  TrendingUp,
  X
} from 'lucide-react';
import { Language } from '@/lib/types';

interface DailyActivityTrackerProps {
  language: Language;
}

interface ActivityState {
  todaySteps: number;
  dailyGoal: number;
  weeklySteps: number[]; // Mon to Sun [day0...day6]
  lastUpdatedDate: string; // YYYY-MM-DD
}

const STORAGE_KEY = 'imd_care_activity_tracker_v1';

export function DailyActivityTracker({ language }: DailyActivityTrackerProps) {
  // Initial state with standard demo day (4,250 / 7,000)
  const [activity, setActivity] = useState<ActivityState>({
    todaySteps: 4250,
    dailyGoal: 7000,
    weeklySteps: [5400, 6800, 4250, 7200, 6100, 8300, 4250],
    lastUpdatedDate: '2026-10-28'
  });

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isGoalModalOpen, setIsGoalModalOpen] = useState(false);
  const [customStepsInput, setCustomStepsInput] = useState('');
  const [customGoalInput, setCustomGoalInput] = useState('');
  const [showCelebrationBadge, setShowCelebrationBadge] = useState(false);

  // Hydrate from localStorage safely on mount
  useEffect(() => {
    let cancel = false;
    const raf = requestAnimationFrame(() => {
      if (cancel) return;
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
          const parsed = JSON.parse(saved);
          if (typeof parsed.todaySteps === 'number' && typeof parsed.dailyGoal === 'number') {
            const todayStr = new Date().toISOString().split('T')[0];
            if (parsed.lastUpdatedDate !== todayStr) {
              setActivity({
                todaySteps: 0,
                dailyGoal: parsed.dailyGoal || 7000,
                weeklySteps: Array.isArray(parsed.weeklySteps)
                  ? [...parsed.weeklySteps.slice(1), 0]
                  : [5400, 6800, 4250, 7200, 6100, 8300, 0],
                lastUpdatedDate: todayStr
              });
            } else {
              setActivity(parsed);
            }
          }
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

  // Save to localStorage when state changes
  const saveState = (newState: ActivityState) => {
    setActivity(newState);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newState));
    } catch {
      // ignore
    }
  };

  const percent = Math.min(100, Math.round((activity.todaySteps / (activity.dailyGoal || 1)) * 100));

  // Calculations (clearly labeled as estimates)
  // Average stride ~0.75m -> km = (steps * 0.75) / 1000
  const estimatedKm = ((activity.todaySteps * 0.75) / 1000).toFixed(1);
  // Average calories ~0.04 kcal per step
  const estimatedKcal = Math.round(activity.todaySteps * 0.04);

  // SVG Circular progress constants
  const radius = 78;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percent / 100) * circumference;

  // Milestone achievements
  const milestones = useMemo(() => {
    return [
      {
        threshold: 25,
        title: { en: 'First Quarter', hi: 'शुरुआती लक्ष्य', mr: 'पहिली पायरी' },
        desc: { en: '25% of goal reached', hi: '25% लक्ष्य पूर्ण', mr: '२५% उद्दिष्ट गाठले' }
      },
      {
        threshold: 50,
        title: { en: 'Halfway Hero', hi: 'आधा सफर तय', mr: 'अर्धा टप्पा पार' },
        desc: { en: '50% of goal reached', hi: '50% लक्ष्य पूर्ण', mr: '५०% उद्दिष्ट गाठले' }
      },
      {
        threshold: 75,
        title: { en: 'Almost There', hi: 'लक्ष्य के बहुत करीब', mr: 'उद्दिष्टाच्या अगदी जवळ' },
        desc: { en: '75% of goal reached', hi: '75% लक्ष्य पूर्ण', mr: '७५% उद्दिष्ट गाठले' }
      },
      {
        threshold: 100,
        title: { en: 'Goal Champion! 🏆', hi: 'दैनिक लक्ष्य विजेता! 🏆', mr: 'दैनिक उद्दिष्ट साध्य! 🏆' },
        desc: { en: '100% daily goal achieved', hi: '100% दैनिक लक्ष्य पूर्ण', mr: '१००% दैनिक उद्दिष्ट गाठले' }
      }
    ];
  }, []);

  const currentMilestone = milestones
    .slice()
    .reverse()
    .find((m) => percent >= m.threshold);

  const handleAddSteps = (amount: number) => {
    const newSteps = activity.todaySteps + amount;
    const todayIndex = 6;
    const newWeekly = [...activity.weeklySteps];
    newWeekly[todayIndex] = newSteps;

    saveState({
      ...activity,
      todaySteps: newSteps,
      weeklySteps: newWeekly
    });

    if (newSteps >= activity.dailyGoal && activity.todaySteps < activity.dailyGoal) {
      setShowCelebrationBadge(true);
      setTimeout(() => setShowCelebrationBadge(false), 5000);
    }
    setIsAddModalOpen(false);
    setCustomStepsInput('');
  };

  const handleUpdateGoal = (newGoal: number) => {
    if (newGoal < 1000) return;
    saveState({
      ...activity,
      dailyGoal: newGoal
    });
    setIsGoalModalOpen(false);
    setCustomGoalInput('');
  };

  const handleResetToday = () => {
    const todayIndex = 6;
    const newWeekly = [...activity.weeklySteps];
    newWeekly[todayIndex] = 0;
    saveState({
      ...activity,
      todaySteps: 0,
      weeklySteps: newWeekly
    });
  };

  // Localized texts
  const t = {
    en: {
      badge: 'Interactive Health Tracking',
      title: 'Daily Activity Tracker',
      subtitle: 'Track your movement, set realistic milestones, and build gentle daily habits.',
      steps: 'steps',
      ofGoal: 'of',
      goalLabel: 'daily goal',
      distanceLabel: 'Est. Distance',
      caloriesLabel: 'Est. Calories',
      weeklyTrend: '7-Day Activity Trend',
      addStepsBtn: 'Add Steps',
      editGoalBtn: 'Edit Goal',
      resetTodayBtn: 'Reset Today',
      demoDisclaimer:
        '*Manually recorded & demo activity tracker. Wearable device sync coming soon. Browser alone cannot detect real background movement.',
      quickAddModalTitle: 'Log Your Steps',
      quickAddModalDesc: 'Select a quick amount or enter the steps recorded from your phone/pedometer:',
      customInputPlaceholder: 'Enter custom steps (e.g. 1500)',
      addBtn: 'Log Steps',
      editGoalModalTitle: 'Adjust Daily Target',
      editGoalModalDesc: 'Pick a comfortable daily target that fits your lifestyle:',
      saveGoalBtn: 'Save Target',
      emptyTodayTitle: 'No steps recorded today yet',
      emptyTodayDesc: 'Take a short 10-minute walk or log your steps to see your progress ring light up!',
      milestoneUnlocked: 'Milestone Unlocked!',
      days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Today']
    },
    hi: {
      badge: 'इंटरैक्टिव स्वास्थ्य ट्रैकिंग',
      title: 'दैनिक गतिविधि ट्रैकर',
      subtitle: 'अपनी दैनिक गतिशीलता को मापें, आसान लक्ष्य बनाएं और स्वस्थ आदतें विकसित करें।',
      steps: 'कदम',
      ofGoal: 'कुल लक्ष्य:',
      goalLabel: 'दैनिक लक्ष्य',
      distanceLabel: 'अनुमानित दूरी',
      caloriesLabel: 'अनुमानित कैलोरी',
      weeklyTrend: '7-दिवसीय गतिविधि रुझान',
      addStepsBtn: 'कदम जोड़ें',
      editGoalBtn: 'लक्ष्य बदलें',
      resetTodayBtn: 'आज का रीसेट',
      demoDisclaimer:
        '*मैन्युअल रूप से दर्ज और डेमो गतिविधि ट्रैकर। स्मार्टवॉच सिंक जल्द उपलब्ध होगा। केवल ब्राउज़र वास्तविक कदम नहीं गिन सकता।',
      quickAddModalTitle: 'कदम दर्ज करें',
      quickAddModalDesc: 'त्वरित विकल्प चुनें या अपने फोन/पेड़ोमीटर के अनुसार कदम दर्ज करें:',
      customInputPlaceholder: 'कदम संख्या लिखें (जैसे 1500)',
      addBtn: 'कदम जोड़ें',
      editGoalModalTitle: 'दैनिक लक्ष्य निर्धारित करें',
      editGoalModalDesc: 'अपनी दिनचर्या के अनुकूल दैनिक कदम लक्ष्य चुनें:',
      saveGoalBtn: 'लक्ष्य सुरक्षित करें',
      emptyTodayTitle: 'आज अभी तक कोई कदम दर्ज नहीं',
      emptyTodayDesc: '10 मिनट की हल्की सैर करें या प्रगति देखने के लिए अपने कदम जोड़ें!',
      milestoneUnlocked: 'उपलब्धि हासिल!',
      days: ['सोम', 'मंगल', 'बुध', 'गुरु', 'शुक्र', 'शनि', 'आज']
    },
    mr: {
      badge: 'इंटरॅक्टिव्ह ॲक्टिव्हिटी ट्रॅकिंग',
      title: 'दैनिक हालचाल ट्रॅकर',
      subtitle: 'आपल्या चालण्यावर लक्ष ठेवा, साध्य उद्दिष्टे ठरवा आणि आरोग्याची सवय जपा.',
      steps: 'पावले',
      ofGoal: 'एकूण उद्दिष्ट:',
      goalLabel: 'दैनिक उद्दिष्ट',
      distanceLabel: 'अंदाजे अंतर',
      caloriesLabel: 'अंदाजे कॅलरीज',
      weeklyTrend: '७ दिवसांचा हालचाल आलेख',
      addStepsBtn: 'पावले जोडा',
      editGoalBtn: 'उद्दिष्ट बदला',
      resetTodayBtn: 'आजचे रीसेट',
      demoDisclaimer:
        '*नोंदवलेली आणि डेमो हालचाल माहिती. स्मार्टवॉच जोडणी लवकरच उपलब्ध होईल. केवळ ब्राऊझर आपोआप पावले मोजू शकत नाही.',
      quickAddModalTitle: 'पावले नोंदवा',
      quickAddModalDesc: 'त्वरित पर्याय निवडा किंवा फोन/पेड़ोमीटरमधील संख्या लिहा:',
      customInputPlaceholder: 'पावलांची संख्या (उदा. १५००)',
      addBtn: 'पावले जोडा',
      editGoalModalTitle: 'दैनिक उद्दिष्ट ठरवा',
      editGoalModalDesc: 'आपल्या जीवनशैलीनुसार सोपे दैनिक उद्दिष्ट निवडा:',
      saveGoalBtn: 'उद्दिष्ट जतन करा',
      emptyTodayTitle: 'आज अद्याप कोणतीही पावले नोंदवली नाहीत',
      emptyTodayDesc: '१० मिनिटे फेरफटका मारा किंवा प्रगती पाहण्यासाठी पावले जोडा!',
      milestoneUnlocked: 'नवीन यश प्राप्त!',
      days: ['सोम', 'मंगळ', 'बुध', 'गुरू', 'शुक्र', 'शनि', 'आज']
    }
  }[language];

  const maxWeeklySteps = Math.max(...activity.weeklySteps, activity.dailyGoal, 10000);

  return (
    <section className="py-8 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F7F5] text-[#0F766E] text-xs font-semibold border border-[#0F766E]/20 mb-2">
              <Footprints className="w-3.5 h-3.5 text-[#35B8A6]" />
              <span>{t.badge}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#102A43] tracking-tight">
              {t.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
              {t.subtitle}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 flex-wrap">
            <button
              type="button"
              onClick={() => setIsAddModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#0F766E] hover:bg-[#0D655F] text-white text-xs sm:text-sm font-semibold shadow-xs hover:shadow-sm transition-all cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>{t.addStepsBtn}</span>
            </button>

            <button
              type="button"
              onClick={() => setIsGoalModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-semibold border border-slate-200 transition-colors cursor-pointer"
              title="Edit Daily Target"
            >
              <Settings2 className="w-4 h-4 text-slate-500" />
              <span>{t.editGoalBtn}</span>
            </button>

            <button
              type="button"
              onClick={handleResetToday}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 border border-slate-200 transition-colors cursor-pointer"
              title={t.resetTodayBtn}
              aria-label={t.resetTodayBtn}
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Milestone Celebration Banner */}
        {showCelebrationBadge && (
          <div className="mb-6 p-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-md flex items-center justify-between animate-fade-in">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-xs flex items-center justify-center shrink-0">
                <Trophy className="w-6 h-6 text-amber-300" />
              </div>
              <div>
                <p className="font-bold text-sm sm:text-base">
                  {t.milestoneUnlocked} {currentMilestone?.title[language]}
                </p>
                <p className="text-xs text-white/90">
                  {currentMilestone?.desc[language]}
                </p>
              </div>
            </div>
            <button
              onClick={() => setShowCelebrationBadge(false)}
              className="p-1 text-white/80 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Main Grid: Circular Progress on Left, Stats & Weekly Chart on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Left Column: Circular Progress Ring & Walking Illustration */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-50 to-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs flex flex-col items-center justify-center text-center relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#E8F7F5] rounded-full blur-2xl pointer-events-none" />

            {/* Circular Ring SVG */}
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 180 180">
                <circle
                  cx="90"
                  cy="90"
                  r={radius}
                  className="text-slate-100"
                  strokeWidth="12"
                  stroke="currentColor"
                  fill="transparent"
                />
                <defs>
                  <linearGradient id="trackerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#35B8A6" />
                    <stop offset="50%" stopColor="#0F766E" />
                    <stop offset="100%" stopColor="#2DD4BF" />
                  </linearGradient>
                </defs>
                <circle
                  cx="90"
                  cy="90"
                  r={radius}
                  stroke="url(#trackerGradient)"
                  strokeWidth="12"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  fill="transparent"
                  className="transition-all duration-1000 ease-out"
                />
              </svg>

              {/* Inside the circle */}
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none px-4">
                {/* Walking Character SVG Illustration */}
                <div className="w-12 h-12 mb-1 text-[#0F766E]">
                  <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
                    <circle cx="32" cy="14" r="7" fill="#0F766E" />
                    <path
                      d="M26 24C26 22.8954 26.8954 22 28 22H36C37.1046 22 38 22.8954 38 24V38H26V24Z"
                      fill="#0F766E"
                    />
                    <path
                      d="M26 25L18 33"
                      stroke="#0F766E"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M38 25L46 32"
                      stroke="#0F766E"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M28 38L22 54"
                      stroke="#0F766E"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                    <path
                      d="M36 38L42 46L38 54"
                      stroke="#0F766E"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <ellipse cx="20" cy="54" rx="4" ry="2" fill="#35B8A6" />
                    <ellipse cx="38" cy="54" rx="4" ry="2" fill="#35B8A6" />
                  </svg>
                </div>

                <span className="text-3xl sm:text-4xl font-black text-[#102A43] tracking-tight">
                  {activity.todaySteps.toLocaleString()}
                </span>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  {t.steps}
                </span>

                <div className="mt-1 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#E8F7F5] text-[#0F766E] text-xs font-bold">
                  <span>{percent}% {t.ofGoal} {activity.dailyGoal.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Current Milestone Badge */}
            {currentMilestone && (
              <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold">
                <Trophy className="w-3.5 h-3.5 text-amber-500" />
                <span>{currentMilestone.title[language]}: {currentMilestone.desc[language]}</span>
              </div>
            )}
          </div>

          {/* Right Column: Key Metric Cards & Weekly Activity Chart */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top 3 Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Card 1: Daily Target */}
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80 shadow-2xs">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-slate-500">{t.goalLabel}</span>
                  <div className="w-7 h-7 rounded-lg bg-teal-100/60 text-[#0F766E] flex items-center justify-center">
                    <Trophy className="w-3.5 h-3.5" />
                  </div>
                </div>
                <div className="text-xl font-bold text-[#102A43]">
                  {activity.dailyGoal.toLocaleString()} <span className="text-xs font-normal text-slate-500">{t.steps}</span>
                </div>
                <div className="mt-1 text-2xs text-slate-500 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-teal-600" />
                  <span>{percent >= 100 ? 'Goal achieved today!' : `${(activity.dailyGoal - activity.todaySteps > 0 ? activity.dailyGoal - activity.todaySteps : 0).toLocaleString()} to go`}</span>
                </div>
              </div>

              {/* Card 2: Estimated Distance */}
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80 shadow-2xs">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-slate-500">{t.distanceLabel}</span>
                  <div className="w-7 h-7 rounded-lg bg-sky-100/60 text-sky-700 flex items-center justify-center">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                </div>
                <div className="text-xl font-bold text-[#102A43]">
                  {estimatedKm} <span className="text-xs font-normal text-slate-500">km</span>
                </div>
                <div className="mt-1 text-2xs text-slate-500">
                  ~0.75m per stride average
                </div>
              </div>

              {/* Card 3: Estimated Calories */}
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80 shadow-2xs">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-slate-500">{t.caloriesLabel}</span>
                  <div className="w-7 h-7 rounded-lg bg-amber-100/60 text-amber-700 flex items-center justify-center">
                    <Flame className="w-3.5 h-3.5" />
                  </div>
                </div>
                <div className="text-xl font-bold text-[#102A43]">
                  {estimatedKcal} <span className="text-xs font-normal text-slate-500">kcal</span>
                </div>
                <div className="mt-1 text-2xs text-slate-500">
                  ~0.04 kcal/step estimate
                </div>
              </div>
            </div>

            {/* Weekly Activity Bar Chart */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-2xs">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-[#0F766E]" />
                  <span className="text-xs sm:text-sm font-bold text-[#102A43]">
                    {t.weeklyTrend}
                  </span>
                </div>
                <span className="text-2xs text-slate-400">
                  Daily Target: {activity.dailyGoal.toLocaleString()}
                </span>
              </div>

              {/* Bar Chart Container */}
              <div className="h-36 flex items-end justify-between gap-2 pt-4 pb-2 border-b border-slate-100">
                {activity.weeklySteps.map((stepCount, index) => {
                  const isCurrentDay = index === 6;
                  const barHeightPercent = Math.min(100, Math.max(10, Math.round((stepCount / maxWeeklySteps) * 100)));
                  const achievedTarget = stepCount >= activity.dailyGoal;

                  return (
                    <div key={index} className="flex-1 flex flex-col items-center h-full justify-end group relative">
                      <div className="absolute -top-7 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 text-white text-2xs font-bold px-1.5 py-0.5 rounded shadow pointer-events-none whitespace-nowrap z-10">
                        {stepCount.toLocaleString()} {t.steps}
                      </div>

                      <div
                        style={{ height: `${barHeightPercent}%` }}
                        className={`w-full max-w-[32px] rounded-t-lg transition-all duration-500 ease-out ${
                          isCurrentDay
                            ? 'bg-gradient-to-t from-[#0F766E] to-[#35B8A6] shadow-xs'
                            : achievedTarget
                            ? 'bg-teal-200 group-hover:bg-teal-300'
                            : 'bg-slate-200 group-hover:bg-slate-300'
                        }`}
                      />

                      <span
                        className={`mt-2 text-2xs font-semibold ${
                          isCurrentDay ? 'text-[#0F766E]' : 'text-slate-400'
                        }`}
                      >
                        {t.days[index]}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Goal Line Indicator Note */}
              <div className="flex items-center justify-between text-2xs text-slate-500 mt-3 pt-1">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-xs bg-[#0F766E]" />
                  <span>Today&apos;s Active Step Count</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-xs bg-teal-200" />
                  <span>Target Achieved (Past Days)</span>
                </div>
              </div>
            </div>

            {/* Transparent Disclaimer */}
            <p className="text-2xs text-slate-500 leading-relaxed italic bg-slate-50 p-2.5 rounded-xl border border-slate-200/60">
              <Info className="w-3.5 h-3.5 inline mr-1 text-slate-400 -mt-0.5" />
              {t.demoDisclaimer}
            </p>
          </div>
        </div>
      </div>

      {/* Modal 1: Quick Add Steps */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs animate-fade-in">
          <div className="bg-white rounded-3xl p-6 max-w-md w-full shadow-xl border border-slate-200 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-[#102A43]">
                {t.quickAddModalTitle}
              </h3>
              <button
                type="button"
                onClick={() => setIsAddModalOpen(false)}
                className="p-1 text-slate-400 hover:text-slate-600 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-slate-600">
              {t.quickAddModalDesc}
            </p>

            <div className="grid grid-cols-3 gap-2">
              {[500, 1000, 2500].map((amt) => (
                <button
                  key={amt}
                  type="button"
                  onClick={() => handleAddSteps(amt)}
                  className="py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-[#E8F7F5] hover:text-[#0F766E] border border-slate-200 text-xs font-bold text-[#102A43] transition-colors cursor-pointer"
                >
                  +{amt.toLocaleString()}
                </button>
              ))}
            </div>

            <div className="pt-2">
              <div className="flex gap-2">
                <input
                  type="number"
                  min="50"
                  max="50000"
                  value={customStepsInput}
                  onChange={(e) => setCustomStepsInput(e.target.value)}
                  placeholder={t.customInputPlaceholder}
                  className="flex-1 px-3.5 py-2 text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0F766E]/40"
                />
                <button
                  type="button"
                  disabled={!customStepsInput || parseInt(customStepsInput, 10) <= 0}
                  onClick={() => handleAddSteps(parseInt(customStepsInput, 10) || 0)}
                  className="px-4 py-2 bg-[#0F766E] hover:bg-[#0D655F] disabled:opacity-50 text-white font-semibold text-xs rounded-xl shadow-xs cursor-pointer"
                >
                  {t.addBtn}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal 2: Edit Goal */}
      {isGoalModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs animate-fade-in">
          <div className="bg-white rounded-3xl p-6 max-w-md w-full shadow-xl border border-slate-200 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-[#102A43]">
                {t.editGoalModalTitle}
              </h3>
              <button
                type="button"
                onClick={() => setIsGoalModalOpen(false)}
                className="p-1 text-slate-400 hover:text-slate-600 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-slate-600">
              {t.editGoalModalDesc}
            </p>

            <div className="grid grid-cols-3 gap-2">
              {[5000, 7000, 10000].map((goalVal) => (
                <button
                  key={goalVal}
                  type="button"
                  onClick={() => handleUpdateGoal(goalVal)}
                  className={`py-2.5 px-3 rounded-xl border text-xs font-bold transition-colors cursor-pointer ${
                    activity.dailyGoal === goalVal
                      ? 'bg-[#0F766E] text-white border-[#0F766E]'
                      : 'bg-slate-100 hover:bg-[#E8F7F5] text-[#102A43] border-slate-200'
                  }`}
                >
                  {goalVal.toLocaleString()}
                </button>
              ))}
            </div>

            <div className="pt-2">
              <div className="flex gap-2">
                <input
                  type="number"
                  min="1000"
                  max="50000"
                  value={customGoalInput}
                  onChange={(e) => setCustomGoalInput(e.target.value)}
                  placeholder="Custom target (e.g. 8500)"
                  className="flex-1 px-3.5 py-2 text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0F766E]/40"
                />
                <button
                  type="button"
                  disabled={!customGoalInput || parseInt(customGoalInput, 10) < 1000}
                  onClick={() => handleUpdateGoal(parseInt(customGoalInput, 10) || 7000)}
                  className="px-4 py-2 bg-[#0F766E] hover:bg-[#0D655F] disabled:opacity-50 text-white font-semibold text-xs rounded-xl shadow-xs cursor-pointer"
                >
                  {t.saveGoalBtn}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

