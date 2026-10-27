'use client';

import React from 'react';
import { ReportSimplifier } from '@/components/ReportSimplifier';
import { useApp } from '@/context/AppContext';

export default function ReportsPage() {
  const { language } = useApp();

  return (
    <div className="py-6 sm:py-8">
      <ReportSimplifier language={language} />
    </div>
  );
}
