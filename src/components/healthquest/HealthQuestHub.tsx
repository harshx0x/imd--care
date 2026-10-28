'use client';

import React, { useState, useMemo } from 'react';
import {
  Gamepad2,
  Trophy,
  Flame,
  Award,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  ShieldAlert,
  HelpCircle,
  Search,
  Siren,
  Clock,
  CheckCircle2,
  Calendar,
  AlertTriangle,
  Zap
} from 'lucide-react';
import { GameMode, HealthQuestion, PlayerProgress } from '@/lib/healthquest/types';
import { Language } from '@/lib/types';
import { HEALTHQUEST_TRANSLATIONS } from '@/lib/translations/healthquest';
import {
  loadPlayerProgress,
  getPlayerLevelInfo,
  getQuestionsForMode,
  getDailyChallengeQuestion,
  recordAnswerInStore
} from '@/lib/healthquest/store';
import { MythBusterView } from './MythBusterView';
import { QuizView } from './QuizView';
import { FoodDetectiveView } from './FoodDetectiveView';
import { EmergencyQuestView } from './EmergencyQuestView';
import { HealthyDayView } from './HealthyDayView';
import { BadgesModal } from './BadgesModal';
import { ResultsModal } from './ResultsModal';
import { ConfettiEffect } from './ConfettiEffect';

interface HealthQuestHubProps {
  language: Language;
}

export function HealthQuestHub({ language }: HealthQuestHubProps) {
  const t = HEALTHQUEST_TRANSLATIONS[language] || HEALTHQUEST_TRANSLATIONS.en;

  // Player progress from localStorage (lazy init to avoid useEffect setState)
  const [progress, setProgress] = useState<PlayerProgress>(() => loadPlayerProgress());

  // Active game session state
  const [activeMode, setActiveMode] = useState<GameMode | null>(null);
  const [isDailySession, setIsDailySession] = useState(false);
  const [activeQuestions, setActiveQuestions] = useState<HealthQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // In-session tracking
  const [sessionScore, setSessionScore] = useState(0);
  const [sessionXpEarned, setSessionXpEarned] = useState(0);
  const [currentStreak, setCurrentStreak] = useState(() => progress.streakDays || 1);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [sessionNewBadges, setSessionNewBadges] = useState<string[]>([]);
  const [sessionTakeaways, setSessionTakeaways] = useState<string[]>([]);

  // Modals
  const [isBadgesModalOpen, setIsBadgesModalOpen] = useState(false);
  const [isResultsModalOpen, setIsResultsModalOpen] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const [todayStr, setTodayStr] = useState<string>('');
  const [sessionKey, setSessionKey] = useState(0);

  // Hydrate client-only progress and date on mount
  React.useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const saved = loadPlayerProgress();
      setProgress(saved);
      setCurrentStreak(saved.streakDays || 1);
      setTodayStr(new Date().toISOString().split('T')[0]);
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  // Level info
  const levelInfo = useMemo(() => getPlayerLevelInfo(progress.totalXp), [progress.totalXp]);

  const levelTitle = t.levels[levelInfo.titleKey] || levelInfo.titleKey;

  // Check if daily challenge is completed today
  const isDailyCompletedToday =
    Boolean(todayStr) &&
    progress.dailyChallengeCompleted &&
    progress.dailyChallengeDate === todayStr;

  // Start a category
  const handleStartMode = (mode: GameMode) => {
    setIsDailySession(false);
    setActiveMode(mode);
    setCurrentIndex(0);
    setSessionScore(0);
    setSessionXpEarned(0);
    setIsAnswerSubmitted(false);
    setSessionNewBadges([]);
    setSessionTakeaways([]);
    setIsResultsModalOpen(false);
    setShowCelebration(false);
    setSessionKey((prev) => prev + 1);

    if (mode === 'healthy_day') {
      setActiveQuestions([]);
    } else {
      const questions = getQuestionsForMode(mode, true, 5);
      setActiveQuestions(questions);
    }

    // Scroll to top of game area
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Start Daily Challenge
  const handleStartDailyChallenge = () => {
    const dailyQ = getDailyChallengeQuestion();
    setIsDailySession(true);
    setActiveMode(dailyQ.mode);
    setActiveQuestions([dailyQ]);
    setCurrentIndex(0);
    setSessionScore(0);
    setSessionXpEarned(0);
    setIsAnswerSubmitted(false);
    setSessionNewBadges([]);
    setSessionTakeaways([]);
    setIsResultsModalOpen(false);
    setShowCelebration(false);
    setSessionKey((prev) => prev + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle answer submission in question-based modes
  const handleAnswerQuestion = (selectedOptionId: string, isCorrect: boolean) => {
    const currentQ = activeQuestions[currentIndex];
    if (!currentQ || isAnswerSubmitted) return;

    setIsAnswerSubmitted(true);

    const nextStreak = isCorrect ? currentStreak + 1 : 1;
    setCurrentStreak(nextStreak);

    if (isCorrect) {
      setSessionScore((prev) => prev + 1);
    } else {
      // Add topic to takeaways if missed
      const takeawayText = currentQ.question[language] || currentQ.question.en;
      setSessionTakeaways((prev) => [...prev, takeawayText]);
    }

    // Record in store
    const { updatedProgress, xpGained, newBadges } = recordAnswerInStore(
      currentQ,
      isCorrect,
      nextStreak,
      isDailySession
    );

    setProgress(updatedProgress);
    setSessionXpEarned((prev) => prev + xpGained);

    if (newBadges.length > 0) {
      setSessionNewBadges((prev) => [...prev, ...newBadges]);
      setShowCelebration(true);
    }
  };

  // Advance to next question or show results
  const handleNextQuestion = () => {
    if (currentIndex < activeQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setIsAnswerSubmitted(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // End of run
      setIsResultsModalOpen(true);
    }
  };

  // Healthy Day complete handler
  const handleHealthyDayFinish = (score: number, xpGained: number, newBadges: string[]) => {
    setSessionScore(score >= 70 ? 1 : 0);
    setSessionXpEarned(xpGained);
    if (newBadges.length > 0) {
      setSessionNewBadges(newBadges);
      setShowCelebration(true);
    }
    const updated = loadPlayerProgress();
    setProgress(updated);
    setIsResultsModalOpen(true);
  };

  // Exit back to lobby
  const handleExitToHub = () => {
    setActiveMode(null);
    setIsDailySession(false);
    setActiveQuestions([]);
    setCurrentIndex(0);
    setIsAnswerSubmitted(false);
    setIsResultsModalOpen(false);
    setShowCelebration(false);
  };

  // Current active question
  const currentQuestion = activeQuestions[currentIndex];

  // Category card definitions
  const categoriesList = [
    {
      mode: 'myth_buster' as GameMode,
      icon: <ShieldAlert className="w-6 h-6 text-emerald-600" />,
      title: t.categories.myth_buster.title,
      subtitle: t.categories.myth_buster.subtitle,
      desc: t.categories.myth_buster.desc,
      badge: t.categories.myth_buster.badge,
      countInfo: '25 Scenarios • 5/Round',
      color: 'bg-emerald-50 text-emerald-800 border-emerald-200 hover:border-emerald-300',
      tagColor: 'bg-emerald-100 text-emerald-800'
    },
    {
      mode: 'knowledge_quiz' as GameMode,
      icon: <HelpCircle className="w-6 h-6 text-teal-600" />,
      title: t.categories.knowledge_quiz.title,
      subtitle: t.categories.knowledge_quiz.subtitle,
      desc: t.categories.knowledge_quiz.desc,
      badge: t.categories.knowledge_quiz.badge,
      countInfo: '25 Questions • 5/Round',
      color: 'bg-teal-50 text-teal-800 border-teal-200 hover:border-teal-300',
      tagColor: 'bg-teal-100 text-teal-800'
    },
    {
      mode: 'food_detective' as GameMode,
      icon: <Search className="w-6 h-6 text-sky-600" />,
      title: t.categories.food_detective.title,
      subtitle: t.categories.food_detective.subtitle,
      desc: t.categories.food_detective.desc,
      badge: t.categories.food_detective.badge,
      countInfo: '15 Comparisons • 5/Round',
      color: 'bg-sky-50 text-sky-800 border-sky-200 hover:border-sky-300',
      tagColor: 'bg-sky-100 text-sky-800'
    },
    {
      mode: 'emergency_quest' as GameMode,
      icon: <Siren className="w-6 h-6 text-rose-600" />,
      title: t.categories.emergency_quest.title,
      subtitle: t.categories.emergency_quest.subtitle,
      desc: t.categories.emergency_quest.desc,
      badge: t.categories.emergency_quest.badge,
      countInfo: '15 Scenarios • 5/Round',
      color: 'bg-rose-50 text-rose-800 border-rose-200 hover:border-rose-300',
      tagColor: 'bg-rose-100 text-rose-800'
    },
    {
      mode: 'healthy_day' as GameMode,
      icon: <Clock className="w-6 h-6 text-amber-600" />,
      title: t.categories.healthy_day.title,
      subtitle: t.categories.healthy_day.subtitle,
      desc: t.categories.healthy_day.desc,
      badge: t.categories.healthy_day.badge,
      countInfo: '20 Challenges • 4 Slots',
      color: 'bg-amber-50 text-amber-800 border-amber-200 hover:border-amber-300',
      tagColor: 'bg-amber-100 text-amber-800'
    }
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-16">
      {showCelebration && <ConfettiEffect active={true} />}

      {/* ========================================================= */}
      {/* 1. LOBBY HUB VIEW (When no active mode is selected)        */}
      {/* ========================================================= */}
      {activeMode === null && (
        <div className="space-y-8 animate-in fade-in duration-200">
          {/* Hero Section */}
          <div className="relative overflow-hidden bg-linear-to-br from-[#102A43] via-[#0F766E] to-[#102A43] rounded-3xl p-8 sm:p-12 text-white shadow-xl">
            <div className="relative z-10 max-w-2xl space-y-4">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-xs text-xs font-bold text-teal-200 border border-white/20">
                <Gamepad2 className="w-4 h-4 text-[#35B8A6]" />
                <span>IMD Care Educational Games</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight text-white">
                {t.title}
              </h1>

              <p className="text-base sm:text-lg font-medium text-teal-100">
                {t.tagline}
              </p>

              <p className="text-sm text-slate-200/90 leading-relaxed max-w-xl">
                {t.subtitle}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={handleStartDailyChallenge}
                  className="px-6 py-3.5 rounded-2xl bg-linear-to-r from-[#35B8A6] to-teal-400 hover:from-teal-400 hover:to-[#35B8A6] text-slate-900 font-extrabold text-sm transition shadow-lg hover:shadow-xl cursor-pointer flex items-center space-x-2"
                >
                  <Zap className="w-4 h-4 fill-current text-slate-900" />
                  <span>{t.dailyChallenge.takeBtn}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setIsBadgesModalOpen(true)}
                  className="px-5 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm transition border border-white/20 cursor-pointer flex items-center space-x-2"
                >
                  <Trophy className="w-4 h-4 text-amber-300" />
                  <span>
                    {progress.unlockedBadgeIds.length}/6 {t.badgesModal.title}
                  </span>
                </button>
              </div>
            </div>

            {/* Subtle background decorative element */}
            <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />
          </div>

          {/* Player Progress Bar & Stats */}
          <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-xs grid grid-cols-1 sm:grid-cols-3 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            {/* Level & XP */}
            <div className="space-y-2 sm:pr-4">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-slate-500 uppercase tracking-wider">
                  {t.levelLabel} {levelInfo.level}
                </span>
                <span className="font-extrabold text-[#0F766E]">{levelTitle}</span>
              </div>

              <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                <div
                  className="bg-linear-to-r from-[#0F766E] to-[#35B8A6] h-full rounded-full transition-all duration-500"
                  style={{ width: `${levelInfo.progressPercent}%` }}
                />
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-500">
                <span>
                  {levelInfo.currentLevelXp} / {levelInfo.nextLevelXp} XP
                </span>
                <span className="font-semibold text-slate-700">
                  {progress.totalXp} Total XP
                </span>
              </div>
            </div>

            {/* Daily Streak */}
            <div className="pt-4 sm:pt-0 sm:px-6 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                  {t.streakNotice}
                </span>
                <div className="flex items-center space-x-2 mt-1">
                  <Flame className="w-6 h-6 text-amber-500 fill-amber-500 animate-pulse" />
                  <span className="text-2xl font-black text-[#102A43]">
                    {progress.streakDays}{' '}
                    <span className="text-xs font-bold text-slate-500">
                      {t.streakDays}
                    </span>
                  </span>
                </div>
              </div>

              <div className="text-[11px] text-slate-500 max-w-[140px] text-right">
                Answer daily questions to multiply XP streak bonuses!
              </div>
            </div>

            {/* Trophy Case Trigger */}
            <div className="pt-4 sm:pt-0 sm:pl-6 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                  {t.badgesModal.title}
                </span>
                <div className="flex items-center space-x-2 mt-1">
                  <Award className="w-6 h-6 text-teal-600" />
                  <span className="text-2xl font-black text-[#102A43]">
                    {progress.unlockedBadgeIds.length}
                    <span className="text-xs font-bold text-slate-400">/6</span>
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsBadgesModalOpen(true)}
                className="px-3.5 py-2 rounded-xl text-xs font-bold text-[#0F766E] bg-teal-50 hover:bg-teal-100 border border-teal-200 transition cursor-pointer"
              >
                View Badges
              </button>
            </div>
          </div>

          {/* Daily Challenge Banner */}
          <div className="bg-linear-to-r from-teal-900 to-[#102A43] rounded-3xl p-6 sm:p-7 text-white shadow-md flex flex-col md:flex-row md:items-center justify-between gap-6 border border-teal-700/50">
            <div className="space-y-2">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-black tracking-wider uppercase border border-amber-400/30">
                <Calendar className="w-3.5 h-3.5" />
                <span>{t.dailyChallenge.badge}</span>
              </div>
              <h3 className="text-xl font-bold text-white">
                {t.dailyChallenge.title}
              </h3>
              <p className="text-xs sm:text-sm text-teal-100/90 max-w-xl leading-relaxed">
                {t.dailyChallenge.description}
              </p>
            </div>

            <div>
              {isDailyCompletedToday ? (
                <div className="inline-flex items-center space-x-2 px-5 py-3 rounded-2xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold text-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>{t.dailyChallenge.completedBadge}</span>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={handleStartDailyChallenge}
                  className="w-full md:w-auto px-6 py-3.5 rounded-2xl bg-[#35B8A6] hover:bg-teal-400 text-[#102A43] font-black text-sm transition shadow-md cursor-pointer flex items-center justify-center space-x-2"
                >
                  <Zap className="w-4 h-4 fill-current" />
                  <span>{t.dailyChallenge.takeBtn}</span>
                </button>
              )}
            </div>
          </div>

          {/* 5 Interactive Game Category Cards */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-[#102A43]">
                {t.chooseCategory}
              </h2>
              <span className="text-xs text-slate-500 font-medium">
                5 Interactive Modes
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {categoriesList.map((cat) => (
                <div
                  key={cat.mode}
                  onClick={() => handleStartMode(cat.mode)}
                  className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-[#35B8A6] transition-all duration-200 cursor-pointer flex flex-col justify-between group"
                >
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:scale-105 transition-transform duration-200">
                        {cat.icon}
                      </div>
                      <span
                        className={`text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${cat.tagColor}`}
                      >
                        {cat.badge}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-lg font-bold text-[#102A43] group-hover:text-[#0F766E] transition-colors">
                        {cat.title}
                      </h3>
                      <p className="text-xs font-semibold text-slate-500">
                        {cat.subtitle}
                      </p>
                      <div className="pt-1">
                        <span className="inline-block px-2.5 py-0.5 rounded-md bg-slate-100 text-[10px] font-bold text-slate-600 tracking-wide">
                          {cat.countInfo}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed pt-1">
                      {cat.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0F766E]">
                    <span>{t.startPlaying}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Medical Disclaimer Banner */}
          <div className="p-5 rounded-3xl bg-slate-50 border border-slate-200/80 text-xs text-slate-600 leading-relaxed flex items-start space-x-3">
            <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <p>{t.medicalDisclaimer}</p>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 2. ACTIVE GAMEPLAY VIEW (In-Game Screen)                  */}
      {/* ========================================================= */}
      {activeMode !== null && (
        <div className="space-y-6">
          {/* Top Session Control Bar */}
          <div className="bg-white rounded-3xl border border-slate-200/90 p-4 sm:p-5 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <button
                type="button"
                onClick={handleExitToHub}
                className="p-2 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition cursor-pointer"
                title={t.backToHub}
              >
                <ArrowLeft className="w-5 h-5" />
              </button>

              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  {isDailySession
                    ? 'Daily Mission'
                    : t.categories[activeMode]?.title || activeMode}
                </span>
                <div className="text-sm font-bold text-[#102A43]">
                  {activeMode === 'healthy_day'
                    ? t.categories.healthy_day.subtitle
                    : `${t.inGame.questionCount} ${currentIndex + 1} / ${activeQuestions.length}`}
                </div>
              </div>
            </div>

            {/* Score & Session XP Chips */}
            <div className="flex items-center space-x-2 self-end sm:self-auto text-xs font-bold">
              <div className="px-3 py-1.5 rounded-xl bg-teal-50 text-[#0F766E] border border-teal-200 flex items-center space-x-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>+{sessionXpEarned} XP</span>
              </div>

              <div className="px-3 py-1.5 rounded-xl bg-amber-50 text-amber-800 border border-amber-200 flex items-center space-x-1.5">
                <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                <span>Streak {currentStreak}</span>
              </div>
            </div>
          </div>

          {/* Mode Progress Bar (for questions) */}
          {activeMode !== 'healthy_day' && activeQuestions.length > 0 && (
            <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden border border-slate-200">
              <div
                className="bg-linear-to-r from-[#0F766E] to-[#35B8A6] h-full rounded-full transition-all duration-300"
                style={{
                  width: `${Math.round(((currentIndex + 1) / activeQuestions.length) * 100)}%`
                }}
              />
            </div>
          )}

          {/* Render Mode View */}
          {activeMode === 'healthy_day' && (
            <HealthyDayView
              key={`healthy_day-${sessionKey}`}
              onFinish={handleHealthyDayFinish}
              onExit={handleExitToHub}
              language={language}
            />
          )}

          {activeMode === 'myth_buster' && currentQuestion && (
            <MythBusterView
              key={`${currentQuestion.id}-${sessionKey}`}
              question={currentQuestion}
              onAnswer={handleAnswerQuestion}
              language={language}
            />
          )}

          {activeMode === 'knowledge_quiz' && currentQuestion && (
            <QuizView
              key={`${currentQuestion.id}-${sessionKey}`}
              question={currentQuestion}
              onAnswer={handleAnswerQuestion}
              language={language}
            />
          )}

          {activeMode === 'food_detective' && currentQuestion && (
            <FoodDetectiveView
              key={`${currentQuestion.id}-${sessionKey}`}
              question={currentQuestion}
              onAnswer={handleAnswerQuestion}
              language={language}
            />
          )}

          {activeMode === 'emergency_quest' && currentQuestion && (
            <EmergencyQuestView
              key={`${currentQuestion.id}-${sessionKey}`}
              question={currentQuestion}
              onAnswer={handleAnswerQuestion}
              language={language}
            />
          )}

          {/* Bottom Continue Action Bar for question modes */}
          {activeMode !== 'healthy_day' && isAnswerSubmitted && (
            <div className="sticky bottom-6 z-10 bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200 p-4 shadow-lg flex items-center justify-between gap-4 animate-in slide-in-from-bottom-2 duration-150">
              <div className="text-xs text-slate-600 font-medium">
                {currentIndex < activeQuestions.length - 1
                  ? `${activeQuestions.length - (currentIndex + 1)} questions remaining`
                  : 'You have answered all questions in this set!'}
              </div>

              <button
                type="button"
                onClick={handleNextQuestion}
                className="px-6 py-3 rounded-xl bg-linear-to-r from-[#0F766E] to-[#35B8A6] hover:from-[#0c5e58] hover:to-[#2ea192] text-white font-bold text-sm transition shadow-sm cursor-pointer flex items-center space-x-2"
              >
                <span>
                  {currentIndex < activeQuestions.length - 1
                    ? t.continueBtn
                    : t.finishBtn}
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      )}

      {/* ========================================================= */}
      {/* 3. MODALS                                                 */}
      {/* ========================================================= */}
      <BadgesModal
        isOpen={isBadgesModalOpen}
        onClose={() => setIsBadgesModalOpen(false)}
        unlockedBadgeIds={progress.unlockedBadgeIds}
        language={language}
      />

      <ResultsModal
        isOpen={isResultsModalOpen}
        score={sessionScore}
        totalQuestions={
          activeMode === 'healthy_day' ? 1 : activeQuestions.length || 1
        }
        xpEarned={sessionXpEarned}
        streakCount={currentStreak}
        newBadgeIds={sessionNewBadges}
        takeaways={sessionTakeaways}
        onPlayAgain={() => {
          if (activeMode) {
            handleStartMode(activeMode);
          } else {
            handleExitToHub();
          }
        }}
        onBackToHub={handleExitToHub}
        language={language}
      />
    </div>
  );
}
