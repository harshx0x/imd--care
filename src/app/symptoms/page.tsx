'use client';

import React from 'react';
import { SymptomGuidance } from '@/components/SymptomGuidance';
import { useApp } from '@/context/AppContext';

export default function SymptomsPage() {
  const { language, openEmergencyModal } = useApp();

  return (
    <div className="py-6 sm:py-8">
      <SymptomGuidance
        language={language}
        openEmergencyModal={() => openEmergencyModal('Symptom Intake Triage Emergency Alert')}
      />
    </div>
  );
}
