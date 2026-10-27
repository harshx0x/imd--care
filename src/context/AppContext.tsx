'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '@/lib/types';

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isDemoMode: boolean;
  emergencyModalOpen: boolean;
  emergencyReason?: string;
  openEmergencyModal: (reason?: string) => void;
  closeEmergencyModal: () => void;
  disclaimerModalOpen: boolean;
  openDisclaimerModal: () => void;
  closeDisclaimerModal: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');
  const [isDemoMode, setIsDemoMode] = useState(true);
  const [emergencyModalOpen, setEmergencyModalOpen] = useState(false);
  const [emergencyReason, setEmergencyReason] = useState<string | undefined>(undefined);
  const [disclaimerModalOpen, setDisclaimerModalOpen] = useState(false);

  // Load language preference from localStorage if available
  useEffect(() => {
    try {
      const savedLang = localStorage.getItem('imd_care_lang');
      if (savedLang && ['en', 'hi', 'mr'].includes(savedLang)) {
        setLanguageState(savedLang as Language);
      }
    } catch {
      // ignore
    }

    // Query API status
    async function checkStatus() {
      try {
        const res = await fetch('/api/status');
        if (res.ok) {
          const data = await res.json();
          setIsDemoMode(Boolean(data.demoMode));
        }
      } catch {
        setIsDemoMode(true);
      }
    }
    checkStatus();
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('imd_care_lang', lang);
    } catch {
      // ignore
    }
  };

  const openEmergencyModal = (reason?: string) => {
    setEmergencyReason(reason);
    setEmergencyModalOpen(true);
  };

  const closeEmergencyModal = () => {
    setEmergencyModalOpen(false);
    setEmergencyReason(undefined);
  };

  const openDisclaimerModal = () => setDisclaimerModalOpen(true);
  const closeDisclaimerModal = () => setDisclaimerModalOpen(false);

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        isDemoMode,
        emergencyModalOpen,
        emergencyReason,
        openEmergencyModal,
        closeEmergencyModal,
        disclaimerModalOpen,
        openDisclaimerModal,
        closeDisclaimerModal
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
