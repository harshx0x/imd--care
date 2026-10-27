'use client';

import React from 'react';
import { PreventiveCare } from '@/components/PreventiveCare';
import { useApp } from '@/context/AppContext';

export default function PreventiveCarePage() {
  const { language } = useApp();

  return (
    <div className="py-6 sm:py-8">
      <PreventiveCare language={language} />
    </div>
  );
}
