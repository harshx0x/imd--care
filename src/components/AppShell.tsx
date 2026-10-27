'use client';

import React from 'react';
import { AppProvider, useApp } from '@/context/AppContext';
import { Sidebar } from './Sidebar';
import { TopNav } from './TopNav';
import { Footer } from './Footer';
import { EmergencyModal } from './EmergencyModal';
import { DisclaimerModal } from './DisclaimerModal';

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
    <div className="min-h-screen flex bg-[#E8F7F5] text-[#243447] overflow-x-hidden">
      {/* Persistent Desktop Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 min-h-screen">
        {/* Minimal Clean Top Bar */}
        <TopNav />

        {/* Dynamic Page Content — scrolls naturally */}
        <main className="flex-1 min-w-0">
          {children}
        </main>

        {/* Global Consistent Footer */}
        <Footer
          language={language}
          openEmergencyModal={() => openEmergencyModal('Footer emergency call link')}
          openDisclaimerModal={openDisclaimerModal}
        />
      </div>

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
