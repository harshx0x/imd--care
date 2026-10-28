import { HealthQuestion } from '../types';
import { MYTH_QUESTIONS, HEALTH_MYTH_OPTIONS } from './myths';
import { QUIZ_QUESTIONS } from './quiz';
import { FOOD_QUESTIONS } from './food';
import { EMERGENCY_QUESTIONS } from './emergency';
import { HEALTHY_DAY_ACTIVITIES } from './healthy-day';

export {
  HEALTH_MYTH_OPTIONS,
  MYTH_QUESTIONS,
  QUIZ_QUESTIONS,
  FOOD_QUESTIONS,
  EMERGENCY_QUESTIONS,
  HEALTHY_DAY_ACTIVITIES
};

export const HEALTHQUEST_QUESTIONS: HealthQuestion[] = [
  ...MYTH_QUESTIONS,
  ...QUIZ_QUESTIONS,
  ...FOOD_QUESTIONS,
  ...EMERGENCY_QUESTIONS
];
