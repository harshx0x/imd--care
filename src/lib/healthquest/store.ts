import { PlayerProgress, HealthQuestion, GameMode } from './types';
import { HEALTHQUEST_QUESTIONS } from './data';

const STORAGE_KEY = 'imd_healthquest_progress_v2';

export const DEFAULT_PLAYER_PROGRESS: PlayerProgress = {
  totalXp: 0,
  streakDays: 1,
  lastPlayedDate: '',
  completedQuestionIds: [],
  unlockedBadgeIds: [],
  modeStats: {
    myth_buster: { completed: 0, correct: 0 },
    knowledge_quiz: { completed: 0, correct: 0 },
    food_detective: { completed: 0, correct: 0 },
    emergency_quest: { completed: 0, correct: 0 },
    healthy_day: { completed: 0, correct: 0 }
  },
  dailyChallengeDate: '',
  dailyChallengeCompleted: false
};

/**
 * Loads saved player progress from localStorage in a hydration-safe manner.
 */
export function loadPlayerProgress(): PlayerProgress {
  if (typeof window === 'undefined') {
    return DEFAULT_PLAYER_PROGRESS;
  }

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_PLAYER_PROGRESS;
    const parsed = JSON.parse(raw);
    return {
      ...DEFAULT_PLAYER_PROGRESS,
      ...parsed,
      modeStats: {
        ...DEFAULT_PLAYER_PROGRESS.modeStats,
        ...(parsed.modeStats || {})
      }
    };
  } catch (err) {
    console.warn('Failed to load HealthQuest progress:', err);
    return DEFAULT_PLAYER_PROGRESS;
  }
}

/**
 * Persists player progress safely to localStorage.
 */
export function savePlayerProgress(progress: PlayerProgress): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (err) {
    console.warn('Failed to save HealthQuest progress:', err);
  }
}

export interface PlayerLevelInfo {
  level: number;
  titleKey: 'apprentice' | 'explorer' | 'champion' | 'master';
  currentLevelXp: number;
  nextLevelXp: number;
  progressPercent: number;
}

/**
 * Calculates current level and progress bar percentage from total XP.
 */
export function getPlayerLevelInfo(totalXp: number): PlayerLevelInfo {
  if (totalXp < 100) {
    return {
      level: 1,
      titleKey: 'apprentice',
      currentLevelXp: totalXp,
      nextLevelXp: 100,
      progressPercent: Math.min(100, Math.round((totalXp / 100) * 100))
    };
  }
  if (totalXp < 250) {
    return {
      level: 2,
      titleKey: 'explorer',
      currentLevelXp: totalXp - 100,
      nextLevelXp: 150,
      progressPercent: Math.min(100, Math.round(((totalXp - 100) / 150) * 100))
    };
  }
  if (totalXp < 500) {
    return {
      level: 3,
      titleKey: 'champion',
      currentLevelXp: totalXp - 250,
      nextLevelXp: 250,
      progressPercent: Math.min(100, Math.round(((totalXp - 250) / 250) * 100))
    };
  }
  return {
    level: 4,
    titleKey: 'master',
    currentLevelXp: totalXp,
    nextLevelXp: totalXp,
    progressPercent: 100
  };
}

/**
 * Evaluates answer, calculates streak bonuses, awards XP, and checks for newly unlocked badges.
 */
export function recordAnswerInStore(
  question: HealthQuestion,
  isCorrect: boolean,
  currentStreak: number,
  isDailyChallenge: boolean = false
): {
  updatedProgress: PlayerProgress;
  xpGained: number;
  streakBonus: number;
  newBadges: string[];
} {
  const progress = loadPlayerProgress();
  const todayStr = new Date().toISOString().split('T')[0];

  let streakBonus = 0;
  let basePoints = 0;

  if (isCorrect) {
    basePoints = question.points;
    // Streak bonus: +5 XP for 2 streak, +10 XP for 3+, capped at +25
    if (currentStreak >= 2) {
      streakBonus = Math.min(25, (currentStreak - 1) * 5);
    }
  }

  const totalGained = basePoints + streakBonus;
  const newXp = progress.totalXp + totalGained;

  // Track completed question
  const completedSet = new Set(progress.completedQuestionIds);
  completedSet.add(question.id);

  // Update mode stats
  const modeKey = question.mode;
  const currentModeStats = progress.modeStats[modeKey] || { completed: 0, correct: 0 };
  const updatedModeStats = {
    ...progress.modeStats,
    [modeKey]: {
      completed: currentModeStats.completed + 1,
      correct: currentModeStats.correct + (isCorrect ? 1 : 0)
    }
  };

  // Daily challenge tracking
  let dailyCompleted = progress.dailyChallengeCompleted;
  if (isDailyChallenge && isCorrect) {
    dailyCompleted = true;
  }

  const newBadges: string[] = [];
  const unlockedBadges = new Set(progress.unlockedBadgeIds);

  // Badge 1: Myth Buster (3 myth answers correct)
  if (updatedModeStats.myth_buster.correct >= 3 && !unlockedBadges.has('myth_buster')) {
    unlockedBadges.add('myth_buster');
    newBadges.push('myth_buster');
  }

  // Badge 2: Food Detective (1 food detective correct)
  if (updatedModeStats.food_detective.correct >= 1 && !unlockedBadges.has('food_detective')) {
    unlockedBadges.add('food_detective');
    newBadges.push('food_detective');
  }

  // Badge 3: Emergency Guardian (1 emergency quest correct)
  if (updatedModeStats.emergency_quest.correct >= 1 && !unlockedBadges.has('emergency_guardian')) {
    unlockedBadges.add('emergency_guardian');
    newBadges.push('emergency_guardian');
  }

  // Badge 4: Hygiene Hero (100+ XP in knowledge quiz or total)
  if (newXp >= 100 && !unlockedBadges.has('hygiene_hero')) {
    unlockedBadges.add('hygiene_hero');
    newBadges.push('hygiene_hero');
  }

  // Badge 5: Streak Champion (streak >= 3)
  if (currentStreak >= 3 && !unlockedBadges.has('streak_champion')) {
    unlockedBadges.add('streak_champion');
    newBadges.push('streak_champion');
  }

  const updatedProgress: PlayerProgress = {
    totalXp: newXp,
    streakDays: isCorrect ? Math.max(progress.streakDays, currentStreak) : progress.streakDays,
    lastPlayedDate: todayStr,
    completedQuestionIds: Array.from(completedSet),
    unlockedBadgeIds: Array.from(unlockedBadges),
    modeStats: updatedModeStats,
    dailyChallengeDate: todayStr,
    dailyChallengeCompleted: dailyCompleted
  };

  savePlayerProgress(updatedProgress);

  return {
    updatedProgress,
    xpGained: totalGained,
    streakBonus,
    newBadges
  };
}

/**
 * Evaluates Build Your Healthy Day routine score, awards XP, and checks for day_architect badge.
 */
export function recordHealthyDayResult(score: number): {
  updatedProgress: PlayerProgress;
  xpGained: number;
  newBadges: string[];
} {
  const progress = loadPlayerProgress();
  const todayStr = new Date().toISOString().split('T')[0];

  const xpGained = score >= 85 ? 50 : score >= 60 ? 35 : 20;
  const newXp = progress.totalXp + xpGained;

  const currentModeStats = progress.modeStats.healthy_day || { completed: 0, correct: 0 };
  const updatedModeStats = {
    ...progress.modeStats,
    healthy_day: {
      completed: currentModeStats.completed + 1,
      correct: currentModeStats.correct + (score >= 70 ? 1 : 0)
    }
  };

  const newBadges: string[] = [];
  const unlockedBadges = new Set(progress.unlockedBadgeIds);

  // Badge 6: Day Architect (score >= 85)
  if (score >= 85 && !unlockedBadges.has('day_architect')) {
    unlockedBadges.add('day_architect');
    newBadges.push('day_architect');
  }

  // Check if total XP reached 100 for hygiene_hero
  if (newXp >= 100 && !unlockedBadges.has('hygiene_hero')) {
    unlockedBadges.add('hygiene_hero');
    newBadges.push('hygiene_hero');
  }

  const updatedProgress: PlayerProgress = {
    ...progress,
    totalXp: newXp,
    lastPlayedDate: todayStr,
    unlockedBadgeIds: Array.from(unlockedBadges),
    modeStats: updatedModeStats
  };

  savePlayerProgress(updatedProgress);

  return {
    updatedProgress,
    xpGained,
    newBadges
  };
}

/**
 * Deterministic Fisher-Yates array shuffling without modifying the original array.
 */
export function shuffleArray<T>(array: T[]): T[] {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/**
 * Returns filtered questions for a given mode, optionally shuffled and limited to a round size.
 */
export function getQuestionsForMode(
  mode: GameMode,
  shouldShuffle: boolean = true,
  limit?: number
): HealthQuestion[] {
  const filtered = HEALTHQUEST_QUESTIONS.filter((q) => q.mode === mode);
  const pool = shouldShuffle ? shuffleArray(filtered) : filtered;
  const sliced = limit && limit > 0 ? pool.slice(0, limit) : pool;

  return sliced.map((q) => {
    // For multiple choice questions (except myth buster which has fixed True/False/Depends)
    if (q.mode !== 'myth_buster' && q.options.length > 2) {
      return {
        ...q,
        options: shuffleArray(q.options)
      };
    }
    return q;
  });
}

/**
 * Returns the fixed Daily Challenge question based on today's date so all players
 * get a synchronized daily scenario.
 */
export function getDailyChallengeQuestion(): HealthQuestion {
  const today = new Date();
  const dayOfYear = Math.floor(
    (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24)
  );
  // Pick from rich emergency or myth questions
  const candidatePool = HEALTHQUEST_QUESTIONS.filter(
    (q) => q.mode === 'emergency_quest' || q.mode === 'food_detective' || q.mode === 'myth_buster'
  );
  return candidatePool[dayOfYear % candidatePool.length] || HEALTHQUEST_QUESTIONS[0];
}

/**
 * Resets local player progress.
 */
export function resetPlayerProgress(): PlayerProgress {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(STORAGE_KEY);
  }
  return DEFAULT_PLAYER_PROGRESS;
}
