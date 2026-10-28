'use client';

import React, { Suspense } from 'react';
import { useApp } from '@/context/AppContext';
import { HealthQuestHub } from '@/components/healthquest/HealthQuestHub';

function HealthQuestContent() {
  const { language } = useApp();

  return (
    <div className="py-6 sm:py-8">
      <HealthQuestHub language={language} />
    </div>
  );
}

export default function HealthQuestPage() {
  return (
    <Suspense fallback={<div className="py-12 text-center text-sm text-slate-400">Loading HealthQuest...</div>}>
      <HealthQuestContent />
    </Suspense>
  );
}
