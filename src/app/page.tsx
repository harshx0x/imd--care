'use client';

import React, { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { FeatureHighlights } from '@/components/FeatureHighlights';
import { HealthAssistant } from '@/components/HealthAssistant';
import { SymptomGuidance } from '@/components/SymptomGuidance';
import { ReportSimplifier } from '@/components/ReportSimplifier';
import { PreventiveCare } from '@/components/PreventiveCare';
import { EmergencyModal } from '@/components/EmergencyModal';
import { DisclaimerModal } from '@/components/DisclaimerModal';
import { Footer } from '@/components/Footer';
import { Language } from '@/lib/types';
import { ShieldAlert, AlertTriangle } from 'lucide-react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');
  const [language, setLanguage] = useState<Language>('en');
  const [isDemoMode, setIsDemoMode] = useState(true);
  const [emergencyModalOpen, setEmergencyModalOpen] = useState(false);
  const [emergencyReason, setEmergencyReason] = useState<string | undefined>(undefined);
  const [disclaimerModalOpen, setDisclaimerModalOpen] = useState(false);

  // Check system API status on initial mount
  useEffect(() => {
    async function checkStatus() {
      try {
        const res = await fetch('/api/status');
        if (res.ok) {
          const data = await res.json();
          setIsDemoMode(Boolean(data.demoMode));
        }
      } catch (err) {
        console.warn('Could not query status endpoint, defaulting to demo mode safety:', err);
        setIsDemoMode(true);
      }
    }
    checkStatus();
  }, []);

  const handleOpenEmergency = (reason?: string) => {
    setEmergencyReason(reason);
    setEmergencyModalOpen(true);
  };

  const handleSelectFeature = (featureId: string) => {
    setActiveSection(featureId);
    const elem = document.getElementById(featureId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] overflow-x-hidden">
      {/* Sticky Navigation */}
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        language={language}
        setLanguage={setLanguage}
        openEmergencyModal={() => handleOpenEmergency()}
        openDisclaimerModal={() => setDisclaimerModalOpen(true)}
        isDemoMode={isDemoMode}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreFeatures={() => handleSelectFeature('features-overview')}
          onAskAssistant={() => handleSelectFeature('assistant')}
          language={language}
          openEmergencyModal={() => handleOpenEmergency('User requested Indian Emergency Services & Triage Protocol')}
        />

        {/* 3 Core Feature Highlights */}
        <FeatureHighlights
          onSelectFeature={handleSelectFeature}
          language={language}
        />

        {/* Feature A: AI Health Assistant */}
        <HealthAssistant
          language={language}
          setLanguage={setLanguage}
          openEmergencyModal={() => handleOpenEmergency('Acute symptom alert detected during conversational health consultation')}
          isDemoMode={isDemoMode}
        />

        {/* Feature B: Smart Symptom Guidance */}
        <SymptomGuidance
          language={language}
          openEmergencyModal={() => handleOpenEmergency('Conservative emergency safety check triggered in symptom intake form')}
        />

        {/* Feature C: Medical Report Simplifier */}
        <ReportSimplifier language={language} />

        {/* Feature D: Basic Preventive Care */}
        <PreventiveCare language={language} />
      </main>

      {/* Footer */}
      <Footer
        language={language}
        openEmergencyModal={() => handleOpenEmergency('Emergency assistance requested from footer hotline')}
        openDisclaimerModal={() => setDisclaimerModalOpen(true)}
      />

      {/* Emergency Guidance Modal */}
      <EmergencyModal
        isOpen={emergencyModalOpen}
        onClose={() => setEmergencyModalOpen(false)}
        reason={emergencyReason}
      />

      {/* Disclaimer & Privacy Modal */}
      <DisclaimerModal
        isOpen={disclaimerModalOpen}
        onClose={() => setDisclaimerModalOpen(false)}
      />
    </div>
  );
}
