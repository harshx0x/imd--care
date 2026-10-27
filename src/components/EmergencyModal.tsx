'use client';

import React from 'react';
import { PhoneCall, AlertTriangle, X, ShieldAlert, HeartPulse, Clock, Activity } from 'lucide-react';
import { getIndianEmergencyNumbers } from '@/lib/emergency';

interface EmergencyModalProps {
  isOpen: boolean;
  onClose: () => void;
  reason?: string;
}

export function EmergencyModal({ isOpen, onClose, reason }: EmergencyModalProps) {
  if (!isOpen) return null;

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
              <h2 className="text-xl font-bold tracking-tight">CRITICAL EMERGENCY GUIDANCE</h2>
              <p className="text-xs text-red-100 font-medium">India National Medical Triage Alert</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {reason && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-start space-x-3">
              <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-red-900">Why this alert appeared:</h4>
                <p className="text-sm text-red-800 mt-0.5">{reason}</p>
              </div>
            </div>
          )}

          {/* Primary Action Numbers */}
          <div>
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
              Immediate Emergency Contact (India)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {emergencyNumbers.map((item) => (
                <a
                  key={item.number}
                  href={`tel:${item.number}`}
                  className="flex items-center justify-between p-4 bg-slate-50 hover:bg-red-50 border border-slate-200 hover:border-red-300 rounded-xl transition group"
                >
                  <div>
                    <span className="text-xs font-semibold text-slate-600 block">{item.name}</span>
                    <span className="text-2xl font-black text-red-600 group-hover:text-red-700">
                      {item.number}
                    </span>
                    <span className="text-xs text-slate-500 block mt-0.5">{item.description}</span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-red-100 group-hover:bg-red-600 flex items-center justify-center transition">
                    <PhoneCall className="w-5 h-5 text-red-600 group-hover:text-white transition" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Critical Steps */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-3">
            <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <Clock className="w-4 h-4 text-emerald-700" />
              Immediate Life-Safety Protocol
            </h4>
            <ul className="text-xs text-slate-700 space-y-2 list-disc list-inside">
              <li><strong>Do not drive yourself:</strong> Ask a family member, neighbor, or call an ambulance immediately.</li>
              <li><strong>Rest in a position of comfort:</strong> If experiencing chest pressure or breathlessness, sit upright in a comfortable chair. Loosen any tight clothing around the neck and chest.</li>
              <li><strong>FAST Stroke Check:</strong> If someone shows Facial drooping, Arm weakness, or Slurred speech, Time is critical — seek emergency hospital care within minutes.</li>
              <li><strong>Keep medical records ready:</strong> Have recent prescriptions, government ID (Aadhaar / Ayushman Bharat card), and any regular heart or diabetic medication details ready for emergency room doctors.</li>
            </ul>
          </div>

          {/* Disclaimer */}
          <p className="text-[11px] text-slate-500 italic text-center">
            IMD Care is an automated health literacy tool and does not provide clinical diagnosis or emergency triage. For genuine emergencies, immediately contact emergency medical services.
          </p>
        </div>

        {/* Footer */}
        <div className="bg-slate-100 px-6 py-3 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-600">Free 24/7 National Emergency Hotline: <strong>112</strong></span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white text-xs font-semibold rounded-lg transition"
          >
            I Understand, Close Guidance
          </button>
        </div>
      </div>
    </div>
  );
}
