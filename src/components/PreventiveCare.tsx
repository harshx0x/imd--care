'use client';

import React, { useState, useEffect } from 'react';
import {
  CalendarCheck,
  Pill,
  Clock,
  Plus,
  Trash2,
  CheckCircle2,
  Circle,
  Droplets,
  Activity,
  Moon,
  Wind,
  Salad,
  Info
} from 'lucide-react';
import { Reminder, Language } from '@/lib/types';
import { APP_TRANSLATIONS } from '@/lib/translations/app';
import { DailyHealthTips } from '@/components/DailyHealthTips';

interface PreventiveCareProps {
  language: Language;
}

const DEFAULT_REMINDERS: Reminder[] = [
  {
    id: 'rem-1',
    title: 'Vitamin D3 (60,000 IU)',
    category: 'medication',
    time: '09:00 AM',
    frequency: 'Once weekly (Sunday)',
    notes: 'Take after breakfast with milk or water',
    completed: false,
    createdAt: '2025-01-01T08:00:00.000Z'
  },
  {
    id: 'rem-2',
    title: 'Routine BP & Sugar Follow-up Visit',
    category: 'appointment',
    time: '11:30 AM',
    frequency: 'Upcoming Wednesday',
    notes: 'Bring previous 3 months fasting blood sugar log',
    completed: false,
    createdAt: '2025-01-01T08:00:00.000Z'
  },
  {
    id: 'rem-3',
    title: 'Morning 30-min Brisk Walk / Yoga',
    category: 'lifestyle',
    time: '06:30 AM',
    frequency: 'Daily',
    notes: 'Gentle warm-up followed by 10 mins Surya Namaskar',
    completed: true,
    createdAt: '2025-01-01T08:00:00.000Z'
  }
];

export function PreventiveCare({ language }: PreventiveCareProps) {
  const [reminders, setReminders] = useState<Reminder[]>(DEFAULT_REMINDERS);

  // New Reminder Form State
  const [showAddForm, setShowAddForm] = useState(false);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<Reminder['category']>('medication');
  const [time, setTime] = useState('08:00 AM');
  const [frequency, setFrequency] = useState('Daily after breakfast');
  const [notes, setNotes] = useState('');

  // Daily Wellness Checklist State
  const [waterGlasses, setWaterGlasses] = useState(5);
  const [walkDone, setWalkDone] = useState(true);
  const [sleepDone, setSleepDone] = useState(true);
  const [pranayamaDone, setPranayamaDone] = useState(false);
  const [nutritionDone, setNutritionDone] = useState(true);

  const t = APP_TRANSLATIONS[language] || APP_TRANSLATIONS.en;

  // Load from localStorage on mount
  useEffect(() => {
    let cancel = false;
    try {
      const stored = localStorage.getItem('imd_care_reminders');
      const storedWellness = localStorage.getItem('imd_care_wellness');

      requestAnimationFrame(() => {
        if (cancel) return;
        if (stored) {
          try {
            const parsed = JSON.parse(stored);
            if (Array.isArray(parsed) && parsed.length > 0) {
              setReminders(parsed);
            }
          } catch {
            // ignore JSON parse error
          }
        } else {
          localStorage.setItem('imd_care_reminders', JSON.stringify(DEFAULT_REMINDERS));
        }

        if (storedWellness) {
          try {
            const parsed = JSON.parse(storedWellness);
            setWaterGlasses(parsed.waterGlasses ?? 5);
            setWalkDone(parsed.walkDone ?? true);
            setSleepDone(parsed.sleepDone ?? true);
            setPranayamaDone(parsed.pranayamaDone ?? false);
            setNutritionDone(parsed.nutritionDone ?? true);
          } catch {
            // ignore JSON parse error
          }
        }
      });
    } catch (e) {
      console.warn('LocalStorage access issue:', e);
    }
    return () => {
      cancel = true;
    };
  }, []);

  // Save reminders to localStorage
  const saveReminders = (newReminders: Reminder[]) => {
    setReminders(newReminders);
    try {
      localStorage.setItem('imd_care_reminders', JSON.stringify(newReminders));
    } catch (e) {
      console.warn('LocalStorage save issue:', e);
    }
  };

  // Save wellness to localStorage
  const saveWellness = (updates: {
    waterGlasses?: number;
    walkDone?: boolean;
    sleepDone?: boolean;
    pranayamaDone?: boolean;
    nutritionDone?: boolean;
  }) => {
    try {
      const current = {
        waterGlasses: updates.waterGlasses ?? waterGlasses,
        walkDone: updates.walkDone ?? walkDone,
        sleepDone: updates.sleepDone ?? sleepDone,
        pranayamaDone: updates.pranayamaDone ?? pranayamaDone,
        nutritionDone: updates.nutritionDone ?? nutritionDone
      };
      localStorage.setItem('imd_care_wellness', JSON.stringify(current));
    } catch (e) {
      console.warn('Wellness save issue:', e);
    }
  };

  const handleAddReminder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newReminder: Reminder = {
      id: 'rem-' + Date.now(),
      title: title.trim(),
      category,
      time,
      frequency,
      notes: notes.trim(),
      completed: false,
      createdAt: new Date().toISOString()
    };

    const updated = [newReminder, ...reminders];
    saveReminders(updated);
    setTitle('');
    setNotes('');
    setShowAddForm(false);
  };

  const handleToggleComplete = (id: string) => {
    const updated = reminders.map((r) =>
      r.id === id ? { ...r, completed: !r.completed } : r
    );
    saveReminders(updated);
  };

  const handleDeleteReminder = (id: string) => {
    const updated = reminders.filter((r) => r.id !== id);
    saveReminders(updated);
  };

  // Calculate wellness score out of 100
  const calculateWellnessScore = () => {
    let score = 0;
    score += Math.min(25, Math.round((waterGlasses / 8) * 25));
    if (walkDone) score += 25;
    if (sleepDone) score += 20;
    if (pranayamaDone) score += 15;
    if (nutritionDone) score += 15;
    return Math.min(100, score);
  };

  const wellnessScore = calculateWellnessScore();

  const getCategoryLabel = (cat: Reminder['category']) => {
    switch (cat) {
      case 'medication':
        return t.preventive.categories.medication;
      case 'appointment':
        return t.preventive.categories.appointment;
      case 'lab_test':
        return t.preventive.categories.lab_test;
      case 'lifestyle':
        return t.preventive.categories.lifestyle;
      default:
        return cat;
    }
  };

  return (
    <section id="preventive" className="py-16 sm:py-20 bg-[#E8F7F5] border-t border-[#CDE8E2]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#D9F3EC] text-[#0F766E] text-xs font-bold uppercase tracking-wider border border-[#35B8A6]/30">
            <CalendarCheck className="w-3.5 h-3.5" />
            <span>{t.preventive.sectionBadge}</span>
          </div>
          <h2 className="text-3xl font-extrabold text-[#102A43]">
            {t.preventive.title}
          </h2>
          <p className="text-xs sm:text-sm text-[#64748B]">
            {t.preventive.description}
          </p>
        </div>

        {/* Local storage privacy notice */}
        <div className="mb-8 p-3.5 bg-[#D9F3EC]/80 border border-[#CDE8E2] rounded-xl text-xs text-[#243447] flex items-start gap-2.5 shadow-xs">
          <Info className="w-4 h-4 text-[#0F766E] shrink-0 mt-0.5" />
          <p>
            <strong className="text-[#102A43]">{t.preventive.privacyTitle}</strong> {t.preventive.privacyBody}
            <span className="block mt-0.5 text-[#0F766E] font-medium">{t.preventive.privacyNotice}</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Reminders Manager */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-[#CDE8E2] p-6 sm:p-7 shadow-sm space-y-5 card-hover-lift animate-fade-in-up delay-100">
            <div className="flex items-center justify-between pb-3 border-b border-[#CDE8E2]/60">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-[#D9F3EC] text-[#0F766E] flex items-center justify-center">
                  <Pill className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-[#102A43]">{t.preventive.remindersHeader}</h3>
                  <span className="text-[11px] text-[#64748B]">
                    {t.preventive.activeItemsText(reminders.filter((r) => !r.completed).length)}
                  </span>
                </div>
              </div>

              <button
                onClick={() => setShowAddForm(!showAddForm)}
                className="px-3.5 py-1.5 bg-[#0F766E] hover:bg-[#0D655F] text-white text-xs font-semibold rounded-xl flex items-center gap-1.5 transition cursor-pointer shadow-xs"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>{showAddForm ? t.preventive.cancelBtn : t.preventive.addReminderBtn}</span>
              </button>
            </div>

            {/* Add Reminder Inline Form */}
            {showAddForm && (
              <form
                onSubmit={handleAddReminder}
                className="p-4 bg-[#E8F7F5]/50 rounded-xl border border-[#CDE8E2] space-y-3 animate-in fade-in duration-150"
              >
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#102A43]">
                  {t.preventive.newReminderTitle}
                </h4>

                <div>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder={t.preventive.titlePlaceholder}
                    required
                    className="w-full bg-white border border-[#CDE8E2] rounded-lg px-3 py-2 text-xs sm:text-sm text-[#243447] focus:ring-2 focus:ring-[#0F766E] focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <div>
                    <label className="text-[10px] uppercase font-bold text-[#64748B] block mb-1">
                      {t.preventive.categoryLabel}
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value as Reminder['category'])}
                      className="w-full bg-white border border-[#CDE8E2] rounded-lg px-2.5 py-1.5 text-xs text-[#243447] focus:outline-none"
                    >
                      <option value="medication">{t.preventive.categories.medication}</option>
                      <option value="appointment">{t.preventive.categories.appointment}</option>
                      <option value="lab_test">{t.preventive.categories.lab_test}</option>
                      <option value="lifestyle">{t.preventive.categories.lifestyle}</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[10px] uppercase font-bold text-[#64748B] block mb-1">
                      {t.preventive.timeLabel}
                    </label>
                    <input
                      type="text"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      placeholder={t.preventive.timePlaceholder}
                      className="w-full bg-white border border-[#CDE8E2] rounded-lg px-2.5 py-1.5 text-xs text-[#243447] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] uppercase font-bold text-[#64748B] block mb-1">
                      {t.preventive.frequencyLabel}
                    </label>
                    <input
                      type="text"
                      value={frequency}
                      onChange={(e) => setFrequency(e.target.value)}
                      placeholder={t.preventive.frequencyPlaceholder}
                      className="w-full bg-white border border-[#CDE8E2] rounded-lg px-2.5 py-1.5 text-xs text-[#243447] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <input
                    type="text"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder={t.preventive.notesPlaceholder}
                    className="w-full bg-white border border-[#CDE8E2] rounded-lg px-3 py-1.5 text-xs text-[#243447] focus:outline-none"
                  />
                </div>

                <div className="flex justify-end gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => setShowAddForm(false)}
                    className="px-3 py-1.5 text-xs font-semibold text-[#64748B] hover:bg-[#E8F7F5] rounded-lg transition cursor-pointer"
                  >
                    {t.preventive.cancelBtn}
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-1.5 bg-[#0F766E] hover:bg-[#0D655F] text-white text-xs font-bold rounded-lg transition shadow-xs cursor-pointer"
                  >
                    {t.preventive.saveReminderBtn}
                  </button>
                </div>
              </form>
            )}

            {/* Reminders List */}
            <div className="space-y-2.5">
              {reminders.length === 0 ? (
                <div className="p-8 text-center text-[#64748B] text-xs">
                  {t.preventive.noRemindersText}
                </div>
              ) : (
                reminders.map((r) => {
                  return (
                    <div
                      key={r.id}
                      className={`p-3.5 rounded-xl border transition flex items-center justify-between gap-3 ${
                        r.completed
                          ? 'bg-[#E8F7F5]/40 border-[#CDE8E2] opacity-60'
                          : 'bg-white border-[#CDE8E2] hover:border-[#35B8A6] shadow-xs'
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        <button
                          onClick={() => handleToggleComplete(r.id)}
                          className="mt-0.5 text-slate-400 hover:text-[#0F766E] transition cursor-pointer"
                        >
                          {r.completed ? (
                            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                          ) : (
                            <Circle className="w-5 h-5" />
                          )}
                        </button>
                        <div>
                          <div className="flex items-center gap-2">
                            <span
                              className={`text-xs sm:text-sm font-bold ${
                                r.completed ? 'line-through text-slate-500' : 'text-[#102A43]'
                              }`}
                            >
                              {r.title}
                            </span>
                            <span className="text-[9px] uppercase font-bold px-2 py-0.5 rounded-md bg-[#D9F3EC] text-[#0F766E] border border-[#CDE8E2]">
                              {getCategoryLabel(r.category)}
                            </span>
                          </div>
                          <div className="flex items-center gap-3 text-[11px] text-[#64748B] mt-1">
                            <span className="flex items-center gap-1 font-medium text-[#243447]">
                              <Clock className="w-3 h-3 text-[#0F766E]" />
                              {r.time} ({r.frequency})
                            </span>
                            {r.notes && <span className="italic text-[#64748B]">{r.notes}</span>}
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() => handleDeleteReminder(r.id)}
                        className="text-[#64748B] hover:text-red-600 p-1.5 rounded-lg hover:bg-red-50 transition cursor-pointer"
                        title={t.preventive.deleteReminderAria}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  );
                })
              )}
            </div>
          </div>

          {/* Right Column: Daily Wellness Checklist */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-[#CDE8E2] p-6 sm:p-7 shadow-sm space-y-6 card-hover-lift animate-fade-in-up delay-200">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[#CDE8E2]/60">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-lg bg-[#D9F3EC] text-[#0F766E] flex items-center justify-center">
                    <Activity className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-[#102A43]">{t.preventive.trackerHeader}</h3>
                    <span className="text-[11px] text-[#64748B]">{t.preventive.trackerSubtitle}</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-lg font-black text-[#0F766E]">{wellnessScore}%</span>
                  <span className="text-[10px] text-[#64748B] block font-semibold">{t.preventive.todayScoreText}</span>
                </div>
              </div>

              {/* Score Progress Bar */}
              <div className="w-full bg-[#E8F7F5] rounded-full h-2 mt-3 overflow-hidden border border-[#CDE8E2]/60">
                <div
                  className="bg-gradient-to-r from-[#0F766E] to-[#35B8A6] h-2 transition-all duration-300 rounded-full"
                  style={{ width: `${wellnessScore}%` }}
                />
              </div>
            </div>

            {/* Checklist Items */}
            <div className="space-y-4">
              {/* 1. Hydration Tracker */}
              <div className="p-3.5 bg-[#E8F7F5]/40 hover:bg-[#D9F3EC]/50 rounded-xl border border-[#CDE8E2] flex items-center justify-between transition">
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center">
                    <Droplets className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#102A43]">{t.preventive.pillars.hydrationTitle}</h4>
                    <span className="text-[11px] text-[#64748B]">{t.preventive.pillars.hydrationSub}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => {
                      const next = Math.max(0, waterGlasses - 1);
                      setWaterGlasses(next);
                      saveWellness({ waterGlasses: next });
                    }}
                    className="w-7 h-7 rounded-md bg-white border border-[#CDE8E2] text-[#243447] font-bold flex items-center justify-center hover:bg-[#E8F7F5] transition cursor-pointer"
                  >
                    -
                  </button>
                  <span className="text-xs font-bold font-mono px-1 text-[#102A43]">{waterGlasses}/8</span>
                  <button
                    onClick={() => {
                      const next = Math.min(12, waterGlasses + 1);
                      setWaterGlasses(next);
                      saveWellness({ waterGlasses: next });
                    }}
                    className="w-7 h-7 rounded-md bg-[#0F766E] text-white font-bold flex items-center justify-center hover:bg-[#0D655F] transition cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* 2. Physical Activity */}
              <div
                onClick={() => {
                  const next = !walkDone;
                  setWalkDone(next);
                  saveWellness({ walkDone: next });
                }}
                className="p-3.5 bg-[#E8F7F5]/40 hover:bg-[#D9F3EC]/50 rounded-xl border border-[#CDE8E2] flex items-center justify-between cursor-pointer transition"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-lg bg-[#D9F3EC] text-[#0F766E] flex items-center justify-center">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#102A43]">{t.preventive.pillars.physicalTitle}</h4>
                    <span className="text-[11px] text-[#64748B]">{t.preventive.pillars.physicalSub}</span>
                  </div>
                </div>
                <div>
                  {walkDone ? (
                    <CheckCircle2 className="w-5 h-5 text-[#0F766E]" />
                  ) : (
                    <Circle className="w-5 h-5 text-[#64748B]/40" />
                  )}
                </div>
              </div>

              {/* 3. Restful Sleep */}
              <div
                onClick={() => {
                  const next = !sleepDone;
                  setSleepDone(next);
                  saveWellness({ sleepDone: next });
                }}
                className="p-3.5 bg-[#E8F7F5]/40 hover:bg-[#D9F3EC]/50 rounded-xl border border-[#CDE8E2] flex items-center justify-between cursor-pointer transition"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center">
                    <Moon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#102A43]">{t.preventive.pillars.sleepTitle}</h4>
                    <span className="text-[11px] text-[#64748B]">{t.preventive.pillars.sleepSub}</span>
                  </div>
                </div>
                <div>
                  {sleepDone ? (
                    <CheckCircle2 className="w-5 h-5 text-[#0F766E]" />
                  ) : (
                    <Circle className="w-5 h-5 text-[#64748B]/40" />
                  )}
                </div>
              </div>

              {/* 4. Mindful Pranayama */}
              <div
                onClick={() => {
                  const next = !pranayamaDone;
                  setPranayamaDone(next);
                  saveWellness({ pranayamaDone: next });
                }}
                className="p-3.5 bg-[#E8F7F5]/40 hover:bg-[#D9F3EC]/50 rounded-xl border border-[#CDE8E2] flex items-center justify-between cursor-pointer transition"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-lg bg-[#D9F3EC] text-[#0F766E] flex items-center justify-center">
                    <Wind className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#102A43]">{t.preventive.pillars.pranayamaTitle}</h4>
                    <span className="text-[11px] text-[#64748B]">{t.preventive.pillars.pranayamaSub}</span>
                  </div>
                </div>
                <div>
                  {pranayamaDone ? (
                    <CheckCircle2 className="w-5 h-5 text-[#0F766E]" />
                  ) : (
                    <Circle className="w-5 h-5 text-[#64748B]/40" />
                  )}
                </div>
              </div>

              {/* 5. Balanced Indian Diet */}
              <div
                onClick={() => {
                  const next = !nutritionDone;
                  setNutritionDone(next);
                  saveWellness({ nutritionDone: next });
                }}
                className="p-3.5 bg-[#E8F7F5]/40 hover:bg-[#D9F3EC]/50 rounded-xl border border-[#CDE8E2] flex items-center justify-between cursor-pointer transition"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center">
                    <Salad className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#102A43]">{t.preventive.pillars.nutritionTitle}</h4>
                    <span className="text-[11px] text-[#64748B]">{t.preventive.pillars.nutritionSub}</span>
                  </div>
                </div>
                <div>
                  {nutritionDone ? (
                    <CheckCircle2 className="w-5 h-5 text-[#0F766E]" />
                  ) : (
                    <Circle className="w-5 h-5 text-[#64748B]/40" />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dedicated Interactive Medical Tips & Lifestyle Micro-Habits */}
        <div className="mt-12 pt-8 border-t border-[#CDE8E2]/80">
          <div className="mb-6">
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#102A43] tracking-tight">
              {language === 'hi'
                ? 'दैनिक स्वास्थ्य और जीवनशैली परामर्श'
                : language === 'mr'
                ? 'दैनिक आरोग्य आणि जीवनशैली सल्ला'
                : 'Daily Medical Health & Lifestyle Advice'}
            </h3>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              {language === 'hi'
                ? 'अपनी सुविधानुसार श्रेणी चुनें और चिकित्सकीय दृष्टि से प्रमाणित स्वस्थ आदतें अपनाएं।'
                : language === 'mr'
                ? 'आपल्या आवडीनुसार वर्ग निवडा आणि वैद्यकीयदृष्ट्या सिद्ध आरोग्यदायी सवयी अंगीकारा.'
                : 'Filter by category to explore verified micro-habits for sustainable wellness.'}
            </p>
          </div>
          <DailyHealthTips language={language} variant="expanded" />
        </div>
      </div>
    </section>
  );
}
