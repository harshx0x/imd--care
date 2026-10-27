'use client';

import React from 'react';
import { AppProvider, useApp } from '@/context/AppContext';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { EmergencyModal } from './EmergencyModal';
import { DisclaimerModal } from './DisclaimerModal';
import { PageTransition } from './PageTransition';
import { ScrollRevealInit } from './ScrollRevealInit';

function AppLayoutInner({ children }: { children: React.ReactNode }) {
  const {
    language,
    emergencyModalOpen,
    emergencyReason,
    closeEmergencyModal,
    openEmergencyModal,
    disclaimerModalOpen,
    closeDisclaimerModal,
    openDisclaimerModal
  } = useApp();

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#102A43] overflow-x-hidden">
      {/* Polished Unified Navigation Bar */}
      <Navbar />

      {/* Dynamic Page Content with smooth route transitions and generous whitespace */}
      <main className="flex-1 min-w-0">
        <PageTransition>
          {children}
        </PageTransition>
      </main>

      {/* Global Consistent Footer */}
      <Footer
        language={language}
        openEmergencyModal={() => openEmergencyModal('Footer emergency call link')}
        openDisclaimerModal={openDisclaimerModal}
      />

      {/* Global Modals */}
      <EmergencyModal
        isOpen={emergencyModalOpen}
        onClose={closeEmergencyModal}
        reason={emergencyReason}
      />

      <DisclaimerModal
        isOpen={disclaimerModalOpen}
        onClose={closeDisclaimerModal}
      />

      <ScrollRevealInit />
    </div>
  );
}

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <AppProvider>
      <AppLayoutInner>{children}</AppLayoutInner>
    </AppProvider>
  );
}
