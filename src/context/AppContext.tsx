'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import type { User, Session } from '@supabase/supabase-js';
import { Language } from '@/lib/types';
import { getSupabaseBrowserClient, isSupabaseConfigured } from '@/lib/supabase/client';

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

  // Authentication State
  user: User | null;
  session: Session | null;
  isAuthLoading: boolean;
  isSupabaseReady: boolean;
  signOut: () => Promise<void>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');
  const [isDemoMode, setIsDemoMode] = useState(true);
  const [emergencyModalOpen, setEmergencyModalOpen] = useState(false);
  const [emergencyReason, setEmergencyReason] = useState<string | undefined>(undefined);
  const [disclaimerModalOpen, setDisclaimerModalOpen] = useState(false);

  // Auth states
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const isSupabaseReady = isSupabaseConfigured();
  const [isAuthLoading, setIsAuthLoading] = useState(isSupabaseReady);

  // Load language preference from localStorage if available
  useEffect(() => {
    let cancel = false;
    try {
      const savedLang = localStorage.getItem('imd_care_lang');
      if (savedLang && ['en', 'hi', 'mr'].includes(savedLang)) {
        requestAnimationFrame(() => {
          if (!cancel) {
            setLanguageState(savedLang as Language);
          }
        });
        if (typeof document !== 'undefined') {
          document.documentElement.lang = savedLang;
        }
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
          if (!cancel) {
            setIsDemoMode(Boolean(data.demoMode));
          }
        }
      } catch {
        if (!cancel) {
          setIsDemoMode(true);
        }
      }
    }
    checkStatus();

    return () => {
      cancel = true;
    };
  }, []);

  // Initialize Supabase Auth session listener
  useEffect(() => {
    if (!isSupabaseReady) {
      return;
    }

    const supabase = getSupabaseBrowserClient();
    if (!supabase) {
      return;
    }

    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setIsAuthLoading(false);
    });

    // Listen to real-time auth changes
    const {
      data: { subscription }
    } = supabase.auth.onAuthStateChange((_event, currentSession) => {
      setSession(currentSession);
      setUser(currentSession?.user ?? null);
      setIsAuthLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [isSupabaseReady]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('imd_care_lang', lang);
      if (typeof document !== 'undefined') {
        document.documentElement.lang = lang;
      }
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

  const signOut = async () => {
    const supabase = getSupabaseBrowserClient();
    if (supabase) {
      await supabase.auth.signOut();
    }
    setUser(null);
    setSession(null);
  };

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
        closeDisclaimerModal,
        user,
        session,
        isAuthLoading,
        isSupabaseReady,
        signOut
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
