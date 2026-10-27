'use client';

import React from 'react';
import { PhoneCall, AlertTriangle, X, ShieldAlert, Clock } from 'lucide-react';
import { getIndianEmergencyNumbers } from '@/lib/emergency';
import { useApp } from '@/context/AppContext';
import { APP_TRANSLATIONS } from '@/lib/translations/app';

interface EmergencyModalProps {
  isOpen: boolean;
  onClose: () => void;
  reason?: string;
}

export function EmergencyModal({ isOpen, onClose, reason }: EmergencyModalProps) {
  const { language } = useApp();
  if (!isOpen) return null;

  const t = APP_TRANSLATIONS[language] || APP_TRANSLATIONS.en;
  const emergencyNumbers = getIndianEmergencyNumbers();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border-2 border-red-500 overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center animate-pulse">
              <ShieldAlert className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold tracking-tight">{t.modals.emergency.title}</h2>
              <p className="text-xs text-red-100 font-medium">{t.modals.emergency.subtitle}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {reason && (
            <div className="p-4 bg-[#FEE2E2] border border-red-200 rounded-xl flex items-start space-x-3">
              <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-red-950">{t.modals.emergency.whyAlertAppeared}</h4>
                <p className="text-sm text-red-900 mt-0.5 font-medium">{reason}</p>
              </div>
            </div>
          )}

          {/* Primary Action Numbers */}
          <div>
            <h3 className="text-xs font-bold text-[#64748B] uppercase tracking-wider mb-3">
              {t.modals.emergency.immediateHelplinesHeading}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {emergencyNumbers.map((item) => (
                <a
                  key={item.number}
                  href={`tel:${item.number}`}
                  className="flex items-center justify-between p-4 bg-[#E8F7F5]/40 hover:bg-[#FEE2E2] border border-[#CDE8E2] hover:border-red-300 rounded-xl transition group shadow-xs"
                >
                  <div>
                    <span className="text-xs font-semibold text-[#243447] block">{item.name}</span>
                    <span className="text-2xl font-black text-red-600 group-hover:text-red-700">
                      {item.number}
                    </span>
                    <span className="text-xs text-[#64748B] block mt-0.5">{item.description}</span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-red-100 group-hover:bg-red-600 flex items-center justify-center transition">
                    <PhoneCall className="w-5 h-5 text-red-600 group-hover:text-white transition" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Critical Steps */}
          <div className="bg-[#E8F7F5]/50 p-4 rounded-xl border border-[#CDE8E2] space-y-3">
            <h4 className="text-sm font-bold text-[#102A43] flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#0F766E]" />
              {t.modals.emergency.protocolHeading}
            </h4>
            <ul className="text-xs text-[#243447] space-y-2 list-disc list-inside">
              {t.modals.emergency.rules.map((rule, idx) => (
                <li key={idx}>{rule}</li>
              ))}
            </ul>
          </div>

          {/* Disclaimer */}
          <p className="text-[11px] text-[#64748B] italic text-center">
            {t.modals.emergency.disclaimer}
          </p>
        </div>

        {/* Footer */}
        <div className="bg-[#D9F3EC]/50 px-6 py-3 border-t border-[#CDE8E2] flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white text-xs font-bold rounded-lg shadow-sm transition cursor-pointer"
          >
            {t.modals.emergency.closeBtn}
          </button>
        </div>
      </div>
    </div>
  );
}
