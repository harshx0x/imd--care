export type Language = 'en' | 'hi' | 'mr';

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  language?: Language;
  timestamp: string;
  isDemo?: boolean;
}

export interface SymptomRequest {
  symptom: string;
  duration: string;
  severity: 'mild' | 'moderate' | 'severe';
  ageGroup?: string;
  existingConditions?: string;
  language: Language;
}

export interface SymptomResult {
  isEmergency: boolean;
  emergencyReason?: string;
  possibleExplanations: string[];
  selfCareAdvice: string[];
  whenToConsultDoctor: string[];
  warningSigns: string[];
  disclaimer: string;
  language: Language;
  isDemo?: boolean;
}

export interface LabReportSample {
  id: string;
  name: string;
  category: string;
  testName: string;
  resultValue: string;
  unit: string;
  referenceRange: string;
  description: string;
}

export interface ReportExplanationRequest {
  testName: string;
  resultValue: string;
  unit: string;
  referenceRange: string;
  clinicalContext?: string;
  language: Language;
}

export interface ReportExplanationResult {
  testName: string;
  resultSummary: string;
  status: 'below' | 'normal' | 'above' | 'inconclusive';
  plainLanguageExplanation: string;
  factorsToConsider: string[];
  questionsForDoctor: string[];
  disclaimer: string;
  language: Language;
  isDemo?: boolean;
}

export interface Reminder {
  id: string;
  title: string;
  category: 'medication' | 'appointment' | 'lab_test' | 'lifestyle';
  time: string;
  frequency: string;
  notes?: string;
  completed: boolean;
  createdAt: string;
}

export interface WellnessItem {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  target: number;
  current: number;
  unit: string;
  completed: boolean;
}
