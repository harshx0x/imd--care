'use client';

import React from 'react';
import {
  X,
  Trophy,
  ShieldAlert,
  Search,
  Siren,
  Sparkles,
  Clock,
  Flame,
  CheckCircle2,
  Lock
} from 'lucide-react';
import { Language } from '@/lib/types';
import { HEALTH_BADGES } from '@/lib/healthquest/badges';
import { HEALTHQUEST_TRANSLATIONS } from '@/lib/translations/healthquest';

interface BadgesModalProps {
  isOpen: boolean;
  onClose: () => void;
  unlockedBadgeIds: string[];
  language: Language;
}

export function BadgesModal({
  isOpen,
  onClose,
  unlockedBadgeIds,
  language
}: BadgesModalProps) {
  if (!isOpen) return null;

  const t = HEALTHQUEST_TRANSLATIONS[language] || HEALTHQUEST_TRANSLATIONS.en;

  const getBadgeIcon = (iconName: string, isUnlocked: boolean) => {
    const iconClass = `w-6 h-6 ${isUnlocked ? 'text-[#0F766E]' : 'text-slate-400'}`;
    switch (iconName) {
      case 'ShieldAlert':
        return <ShieldAlert className={iconClass} />;
      case 'Search':
        return <Search className={iconClass} />;
      case 'Siren':
        return <Siren className={iconClass} />;
      case 'Sparkles':
        return <Sparkles className={iconClass} />;
      case 'Clock':
        return <Clock className={iconClass} />;
      case 'Flame':
        return <Flame className={iconClass} />;
      default:
        return <Trophy className={iconClass} />;
    }
  };

  const unlockedCount = unlockedBadgeIds.length;
  const totalCount = HEALTH_BADGES.length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-gradient-to-r from-teal-50/50 to-white">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-[#0F766E] text-white flex items-center justify-center shadow-md shadow-[#0F766E]/20">
              <Trophy className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-[#102A43]">
                {t.badgesModal.title}
              </h2>
              <p className="text-xs text-slate-500">
                {unlockedCount} of {totalCount} Badges Unlocked ({Math.round((unlockedCount / totalCount) * 100)}%)
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Badges Grid */}
        <div className="p-6 overflow-y-auto space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {HEALTH_BADGES.map((badge) => {
              const isUnlocked = unlockedBadgeIds.includes(badge.id);
              const title = badge.title[language] || badge.title.en;
              const desc = badge.description[language] || badge.description.en;
              const req = badge.requirement[language] || badge.requirement.en;

              return (
                <div
                  key={badge.id}
                  className={`p-4 rounded-2xl border transition-all flex items-start space-x-3 ${
                    isUnlocked
                      ? 'bg-teal-50/50 border-[#0F766E]/30 shadow-xs'
                      : 'bg-slate-50/80 border-slate-200/80 opacity-75'
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-xs ${
                      isUnlocked
                        ? 'bg-white border border-[#0F766E]/20'
                        : 'bg-slate-200/70 border border-slate-300/70'
                    }`}
                  >
                    {getBadgeIcon(badge.icon, isUnlocked)}
                  </div>

                  <div className="space-y-1 min-w-0">
                    <div className="flex items-center justify-between gap-1">
                      <h3 className="text-xs sm:text-sm font-bold text-[#102A43] truncate">
                        {title}
                      </h3>
                      {isUnlocked ? (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 flex items-center gap-0.5 shrink-0">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                          <span>{t.badgesModal.unlockedBadge}</span>
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-slate-200 text-slate-600 flex items-center gap-0.5 shrink-0">
                          <Lock className="w-2.5 h-2.5 text-slate-500" />
                          <span>{t.badgesModal.lockedBadge}</span>
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {desc}
                    </p>

                    <p className="text-[11px] text-slate-500 pt-1 border-t border-slate-200/50">
                      <span className="font-semibold text-slate-700">Requirement:</span> {req}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-[#0F766E] hover:bg-[#0D655F] text-white text-xs font-bold transition shadow-xs cursor-pointer"
          >
            Close Trophy Case
          </button>
        </div>
      </div>
    </div>
  );
}

