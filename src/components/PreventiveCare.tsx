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
  Info,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { Reminder, WellnessItem, Language } from '@/lib/types';

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
  const [reminders, setReminders] = useState<Reminder[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

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

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('imd_care_reminders');
      if (stored) {
        setReminders(JSON.parse(stored));
      } else {
        setReminders(DEFAULT_REMINDERS);
        localStorage.setItem('imd_care_reminders', JSON.stringify(DEFAULT_REMINDERS));
      }

      const storedWellness = localStorage.getItem('imd_care_wellness');
      if (storedWellness) {
        const parsed = JSON.parse(storedWellness);
        setWaterGlasses(parsed.waterGlasses ?? 5);
        setWalkDone(parsed.walkDone ?? true);
        setSleepDone(parsed.sleepDone ?? true);
        setPranayamaDone(parsed.pranayamaDone ?? false);
        setNutritionDone(parsed.nutritionDone ?? true);
      }
    } catch (e) {
      console.warn('LocalStorage access issue:', e);
      setReminders(DEFAULT_REMINDERS);
    } finally {
      setIsLoaded(true);
    }
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
    // Water: up to 25 points (8 glasses)
    score += Math.min(25, Math.round((waterGlasses / 8) * 25));
    // Walk: 25 points
    if (walkDone) score += 25;
    // Sleep: 20 points
    if (sleepDone) score += 20;
    // Pranayama: 15 points
    if (pranayamaDone) score += 15;
    // Nutrition: 15 points
    if (nutritionDone) score += 15;
    return Math.min(100, score);
  };

  const wellnessScore = calculateWellnessScore();

  return (
    <section id="preventive" className="py-16 sm:py-20 bg-[#F8FAFC] border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#DDF5EF] text-[#0F766E] text-xs font-bold uppercase tracking-wider">
            <CalendarCheck className="w-3.5 h-3.5" />
            <span>Preventive Wellness Routine</span>
          </div>
          <h2 className="text-3xl font-extrabold text-[#102A43]">
            {language === 'hi' ? 'निवारक देखभाल और अनुस्मारक' : language === 'mr' ? 'प्रतिबंधक काळजी आणि स्मरणपत्रे' : 'Basic Preventive Care & Reminders'}
          </h2>
          <p className="text-xs sm:text-sm text-[#486581]">
            Track essential daily habits, medications, and doctor appointments locally on your device.
          </p>
        </div>

        {/* Local storage privacy notice */}
        <div className="mb-8 p-3.5 bg-blue-50/70 border border-blue-200 rounded-xl text-xs text-blue-900 flex items-start gap-2.5">
          <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
          <p>
            <strong>Privacy Assurance:</strong> Reminders and wellness counts are stored <strong>strictly in your local browser storage</strong>. No sensitive clinical scheduling data is uploaded or tracked on external servers.
            <span className="block mt-0.5 text-blue-700">Notice: Browser-local demo reminders do not send background push notifications or SMS. Please keep clinical reminders in your primary calendar or alarm.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Reminders Manager */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-[#DDF5EF] text-[#0F766E] flex items-center justify-center">
                  <Pill className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-[#102A43]">Health Reminders</h3>
                  <span className="text-[11px] text-slate-500">
                    {reminders.filter((r) => !r.completed).length} active items
                  </span>
                </div>
              </div>

              <button
                onClick={() => setShowAddForm(!showAddForm)}
                className="px-3.5 py-1.5 bg-[#0F766E] hover:bg-[#0D655F] text-white text-xs font-semibold rounded-xl flex items-center gap-1.5 transition cursor-pointer shadow-xs"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>{showAddForm ? 'Cancel' : 'Add Reminder'}</span>
              </button>
            </div>

            {/* Add Reminder Inline Form */}
            {showAddForm && (
              <form
                onSubmit={handleAddReminder}
                className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3 animate-in fade-in duration-150"
              >
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  New Reminder Entry
                </h4>

                <div>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="e.g. Amlodipine 5mg, Thyroid Follow-up"
                    required
                    className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs sm:text-sm text-slate-800 focus:ring-2 focus:ring-[#0F766E] focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <div>
                    <label className="text-[10px] uppercase font-bold text-slate-500 block mb-1">
                      Category
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value as Reminder['category'])}
                      className="w-full bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs text-slate-800 focus:outline-none"
                    >
                      <option value="medication">Medication</option>
                      <option value="appointment">Doctor Visit</option>
                      <option value="lab_test">Lab Test</option>
                      <option value="lifestyle">Lifestyle / Exercise</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[10px] uppercase font-bold text-slate-500 block mb-1">
                      Time
                    </label>
                    <input
                      type="text"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      placeholder="e.g. 08:30 AM"
                      className="w-full bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs text-slate-800 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] uppercase font-bold text-slate-500 block mb-1">
                      Frequency
                    </label>
                    <input
                      type="text"
                      value={frequency}
                      onChange={(e) => setFrequency(e.target.value)}
                      placeholder="e.g. Daily, Weekly"
                      className="w-full bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs text-slate-800 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <input
                    type="text"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Optional notes (e.g. Take with warm water)"
                    className="w-full bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-xs text-slate-800 focus:outline-none"
                  />
                </div>

                <div className="flex justify-end gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => setShowAddForm(false)}
                    className="px-3 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-200 rounded-lg"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-1.5 bg-[#0F766E] hover:bg-[#0D655F] text-white text-xs font-bold rounded-lg transition"
                  >
                    Save Reminder
                  </button>
                </div>
              </form>
            )}

            {/* Reminders List */}
            <div className="space-y-2.5">
              {reminders.length === 0 ? (
                <div className="p-8 text-center text-slate-400 text-xs">
                  No reminders added yet. Click &quot;Add Reminder&quot; to create one.
                </div>
              ) : (
                reminders.map((r) => {
                  return (
                    <div
                      key={r.id}
                      className={`p-3.5 rounded-xl border transition flex items-center justify-between gap-3 ${
                        r.completed
                          ? 'bg-slate-50 border-slate-200 opacity-60'
                          : 'bg-white border-slate-200 hover:border-[#0F766E]/40 shadow-xs'
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
                            <span className="text-[9px] uppercase font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
                              {r.category}
                            </span>
                          </div>
                          <div className="flex items-center gap-3 text-[11px] text-slate-500 mt-1">
                            <span className="flex items-center gap-1 font-medium">
                              <Clock className="w-3 h-3 text-[#0F766E]" />
                              {r.time} ({r.frequency})
                            </span>
                            {r.notes && <span className="italic">{r.notes}</span>}
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() => handleDeleteReminder(r.id)}
                        className="text-slate-400 hover:text-red-600 p-1.5 rounded-lg hover:bg-slate-100 transition cursor-pointer"
                        title="Delete reminder"
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
          <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs space-y-6">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-lg bg-[#DDF5EF] text-[#0F766E] flex items-center justify-center">
                    <Activity className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-[#102A43]">Daily Wellness Tracker</h3>
                    <span className="text-[11px] text-slate-500">Essential lifestyle pillars</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-lg font-black text-[#0F766E]">{wellnessScore}%</span>
                  <span className="text-[10px] text-slate-400 block font-semibold">Today's Score</span>
                </div>
              </div>

              {/* Score Progress Bar */}
              <div className="w-full bg-slate-100 rounded-full h-2 mt-3 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-[#0F766E] to-[#2DD4BF] h-2 transition-all duration-300 rounded-full"
                  style={{ width: `${wellnessScore}%` }}
                />
              </div>
            </div>

            {/* Checklist Items */}
            <div className="space-y-4">
              {/* 1. Hydration Tracker */}
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                    <Droplets className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Hydration Target</h4>
                    <span className="text-[11px] text-slate-500">Aim for 8 glasses / 2.5 Liters</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => {
                      const next = Math.max(0, waterGlasses - 1);
                      setWaterGlasses(next);
                      saveWellness({ waterGlasses: next });
                    }}
                    className="w-7 h-7 rounded-md bg-white border border-slate-200 text-slate-700 font-bold flex items-center justify-center hover:bg-slate-100 transition cursor-pointer"
                  >
                    -
                  </button>
                  <span className="text-xs font-bold font-mono px-1">{waterGlasses}/8</span>
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
                className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between cursor-pointer hover:bg-slate-100/80 transition"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Physical Activity</h4>
                    <span className="text-[11px] text-slate-500">30 mins brisk walking, jogging or yoga</span>
                  </div>
                </div>
                <div>
                  {walkDone ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  ) : (
                    <Circle className="w-5 h-5 text-slate-300" />
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
                className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between cursor-pointer hover:bg-slate-100/80 transition"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center">
                    <Moon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Restorative Sleep</h4>
                    <span className="text-[11px] text-slate-500">7 to 8 hours uninterrupted rest</span>
                  </div>
                </div>
                <div>
                  {sleepDone ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  ) : (
                    <Circle className="w-5 h-5 text-slate-300" />
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
                className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between cursor-pointer hover:bg-slate-100/80 transition"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center">
                    <Wind className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Pranayama / Breathing</h4>
                    <span className="text-[11px] text-slate-500">10 mins Anulom Vilom or meditation</span>
                  </div>
                </div>
                <div>
                  {pranayamaDone ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  ) : (
                    <Circle className="w-5 h-5 text-slate-300" />
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
                className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between cursor-pointer hover:bg-slate-100/80 transition"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center">
                    <Salad className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Nutrient-Rich Diet</h4>
                    <span className="text-[11px] text-slate-500">Fiber, lentils (dal), raw salad & low salt</span>
                  </div>
                </div>
                <div>
                  {nutritionDone ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  ) : (
                    <Circle className="w-5 h-5 text-slate-300" />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
