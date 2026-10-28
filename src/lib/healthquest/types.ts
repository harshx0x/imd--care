import { Language } from '../types';

export type GameMode =
  | 'myth_buster'
  | 'knowledge_quiz'
  | 'food_detective'
  | 'emergency_quest'
  | 'healthy_day';

export type MythChoice = 'true' | 'false' | 'depends';

export interface QuestionOption {
  id: string;
  text: Record<Language, string>;
}

export interface FictionalNutritionFacts {
  productName: Record<Language, string>;
  productSubtitle: Record<Language, string>;
  servingSize: string;
  servingsPerContainer: number;
  caloriesPerServing: number;
  totalFat: string;
  saturatedFat: string;
  transFat: string;
  sodiumMg: number;
  totalCarbs: string;
  addedSugarGrams: number;
  protein: string;
  keyIngredients: Record<Language, string[]>;
  warningFlag?: Record<Language, string>;
}

export interface FoodComparisonDetails {
  productA: FictionalNutritionFacts;
  productB: FictionalNutritionFacts;
  focusNutrient: Record<Language, string>;
}

export interface EmergencyScenarioDetails {
  scenarioTitle: Record<Language, string>;
  victimProfile: Record<Language, string>;
  symptomsObserved: Record<Language, string[]>;
  vitalSignsHint?: Record<Language, string>;
  urgencyLevel: 'immediate_112' | 'urgent_clinic' | 'first_aid_then_doctor';
}

export interface HealthQuestion {
  id: string;
  mode: GameMode;
  difficulty: 'easy' | 'medium' | 'hard';
  points: number;
  question: Record<Language, string>;
  contextPreamble?: Record<Language, string>;
  options: QuestionOption[];
  correctOptionId: string;
  explanation: Record<Language, string>;
  contextNotes?: Record<Language, string>; // Subtlety for "Depends" or balanced nutrition
  source: string; // e.g., "ICMR-NIN Dietary Guidelines 2024", "AIIMS First-Aid Protocols"
  hint: Record<Language, string>;
  foodComparison?: FoodComparisonDetails;
  emergencyScenario?: EmergencyScenarioDetails;
}

export type DayTimeSlot = 'morning' | 'afternoon' | 'evening' | 'night';
export type ActivityCategory = 'sleep' | 'nutrition' | 'movement' | 'hydration' | 'mindfulness';

export interface HealthyDayActivity {
  id: string;
  category: ActivityCategory;
  timeSlot: DayTimeSlot;
  title: Record<Language, string>;
  description: Record<Language, string>;
  healthScoreDelta: number; // positive for balanced, negative for unhealthy traps
  isOptimal: boolean;
  educationalTip: Record<Language, string>;
}

export interface HealthBadge {
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  icon: string;
  unlockedAt?: string;
  requirement: Record<Language, string>;
}

export interface PlayerProgress {
  totalXp: number;
  streakDays: number;
  lastPlayedDate: string;
  completedQuestionIds: string[];
  unlockedBadgeIds: string[];
  modeStats: Record<GameMode, { completed: number; correct: number }>;
  dailyChallengeDate: string;
  dailyChallengeCompleted: boolean;
}

export interface GameSessionState {
  currentMode: GameMode;
  currentQuestionIndex: number;
  score: number;
  xpEarnedThisSession: number;
  consecutiveCorrect: number;
  selectedOptionId: string | null;
  isAnswerSubmitted: boolean;
  hintsUsedCount: number;
  isHintRevealed: boolean;
  isFinished: boolean;
  userAnswers: Array<{
    questionId: string;
    selectedOptionId: string;
    isCorrect: boolean;
  }>;
}
