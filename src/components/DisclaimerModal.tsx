'use client';

import React from 'react';
import { ShieldCheck, X, AlertCircle, Lock, BookOpen } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { APP_TRANSLATIONS } from '@/lib/translations/app';

interface DisclaimerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DisclaimerModal({ isOpen, onClose }: DisclaimerModalProps) {
  const { language } = useApp();
  if (!isOpen) return null;

  const t = APP_TRANSLATIONS[language] || APP_TRANSLATIONS.en;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-[#CDE8E2] overflow-hidden max-h-[85vh] flex flex-col animate-fade-in-scale">
        {/* Header */}
        <div className="bg-[#102A43] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-[#0F766E] flex items-center justify-center text-white shadow-xs">
              <ShieldCheck className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-bold">{t.modals.disclaimer.title}</h2>
              <p className="text-xs text-[#D9F3EC]">{t.modals.disclaimer.subtitle}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white p-1 rounded-lg hover:bg-white/10 transition cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-sm text-[#243447]">
          <div className="p-3.5 bg-amber-50/90 border border-amber-200 rounded-xl flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <p className="text-xs text-amber-950 leading-relaxed font-medium">
              <strong>{t.modals.disclaimer.alertTitle}</strong> {t.modals.disclaimer.alertBody}
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold text-[#102A43] text-xs uppercase tracking-wider flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#0F766E]" />
              {t.modals.disclaimer.principlesHeading}
            </h3>
            <ul className="text-xs space-y-2 text-[#243447] list-disc list-inside">
              <li>{t.modals.disclaimer.principles.noRelationship}</li>
              <li>{t.modals.disclaimer.principles.syntheticReports}</li>
              <li>{t.modals.disclaimer.principles.emergencyProtocol}</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold text-[#102A43] text-xs uppercase tracking-wider flex items-center gap-2">
              <Lock className="w-4 h-4 text-[#0F766E]" />
              {t.modals.disclaimer.privacyHeading}
            </h3>
            <p className="text-xs text-[#64748B] leading-relaxed">
              {t.modals.disclaimer.privacyBody}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#D9F3EC]/50 px-6 py-3 border-t border-[#CDE8E2] flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#0F766E] hover:bg-[#0D655F] text-white text-xs font-semibold rounded-lg shadow-sm transition cursor-pointer"
          >
            {t.modals.disclaimer.acknowledgeBtn}
          </button>
        </div>
      </div>
    </div>
  );
}
