'use client';

import React from 'react';
import { HealthAssistant } from '@/components/HealthAssistant';
import { useApp } from '@/context/AppContext';

export default function AssistantPage() {
  const { language, setLanguage, openEmergencyModal, isDemoMode } = useApp();

  return (
    <div className="py-6 sm:py-8">
      <HealthAssistant
        language={language}
        setLanguage={setLanguage}
        openEmergencyModal={() => openEmergencyModal('Conversational AI Health Alert')}
        isDemoMode={isDemoMode}
      />
    </div>
  );
}
