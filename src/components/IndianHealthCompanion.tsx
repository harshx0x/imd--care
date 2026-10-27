'use client';

import React from 'react';
import { Sparkles } from 'lucide-react';
import { Language } from '@/lib/types';

interface IndianHealthCompanionProps {
  onOpenWelcome: () => void;
  language: Language;
}

export function IndianHealthCompanion({
  onOpenWelcome,
  language
}: IndianHealthCompanionProps) {
  const speechText = {
    en: 'Namaste! Click me to explore 🙏',
    hi: 'नमस्ते! मुझसे बात करें 🙏',
    mr: 'नमस्कार! संवाद साधा 🙏'
  };

  const badgeText = {
    en: 'AI Health Companion',
    hi: 'AI स्वास्थ्य साथी',
    mr: 'AI आरोग्य मित्र'
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onOpenWelcome();
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center group">
      {/* Outer Glow Halo */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-[#0F766E]/40 via-[#35B8A6]/30 to-[#D9F3EC]/20 rounded-full blur-2xl animate-gentle-glow pointer-events-none" />

      {/* Floating Interactive Container */}
      <div
        role="button"
        tabIndex={0}
        onClick={onOpenWelcome}
        onKeyDown={handleKeyDown}
        aria-label="Click to open IMD Care interactive welcome companion"
        className="relative cursor-pointer transition-transform duration-300 transform hover:scale-[1.03] active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-[#35B8A6]/60 rounded-3xl p-2 select-none"
      >
        {/* Animated Speech Bubble */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap bg-white text-[#102A43] font-bold text-xs px-3.5 py-1.5 rounded-full shadow-lg border border-[#35B8A6]/40 flex items-center gap-1.5 animate-bounce">
          <span className="w-2 h-2 rounded-full bg-[#35B8A6] animate-pulse" />
          <span>{speechText[language] || speechText.en}</span>
          {/* Bubble tail */}
          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-b border-r border-[#35B8A6]/40 transform rotate-45" />
        </div>

        {/* Companion Mascot SVG with Animated Floating and Waving */}
        <div className="animate-companion-float">
          <svg
            viewBox="0 0 320 340"
            className="w-72 h-72 sm:w-80 sm:h-80 drop-shadow-2xl"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Radial gradient for glowing backdrop */}
              <radialGradient id="haloGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#D9F3EC" stopOpacity="0.85" />
                <stop offset="70%" stopColor="#35B8A6" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#102A43" stopOpacity="0" />
              </radialGradient>

              {/* Coat gradient */}
              <linearGradient id="coatGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#E8F7F5" />
              </linearGradient>

              {/* Teal trim */}
              <linearGradient id="tealGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0F766E" />
                <stop offset="100%" stopColor="#35B8A6" />
              </linearGradient>

              {/* Warm skin gradient */}
              <linearGradient id="skinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#F9C99F" />
                <stop offset="100%" stopColor="#EEA678" />
              </linearGradient>

              {/* Hair gradient */}
              <linearGradient id="hairGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2D1E16" />
                <stop offset="100%" stopColor="#120A05" />
              </linearGradient>
            </defs>

            {/* Background Halo Ring */}
            <circle cx="160" cy="170" r="130" fill="url(#haloGrad)" />

            {/* Subtle Mandala Decorative Concentric Rings */}
            <circle
              cx="160"
              cy="170"
              r="120"
              stroke="#35B8A6"
              strokeWidth="1.5"
              strokeDasharray="4 6"
              opacity="0.4"
            />
            <circle
              cx="160"
              cy="170"
              r="105"
              stroke="#0F766E"
              strokeWidth="1"
              strokeDasharray="2 4"
              opacity="0.3"
            />

            {/* Floating Health Sparkles Around */}
            <g opacity="0.85">
              <circle cx="65" cy="90" r="4" fill="#35B8A6" />
              <circle cx="255" cy="85" r="3.5" fill="#D9F3EC" />
              <circle cx="50" cy="210" r="3" fill="#D9F3EC" />
              <circle cx="270" cy="220" r="4.5" fill="#35B8A6" />
              {/* Plus icon sparkle */}
              <path
                d="M 260 130 L 260 142 M 254 136 L 266 136"
                stroke="#35B8A6"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M 60 140 L 60 150 M 55 145 L 65 145"
                stroke="#35B8A6"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </g>

            {/* Companion Torso / Lab Coat */}
            <g id="companion-body">
              {/* Under-kurti collar */}
              <path
                d="M 125 210 Q 160 235 195 210 L 210 320 L 110 320 Z"
                fill="url(#tealGrad)"
              />

              {/* White Clinical Coat */}
              <path
                d="M 100 220 Q 160 240 220 220 L 235 320 L 85 320 Z"
                fill="url(#coatGrad)"
                stroke="#CDE8E2"
                strokeWidth="1.5"
              />

              {/* Coat Lapels */}
              <path
                d="M 115 220 L 140 280 L 160 260 L 180 280 L 205 220"
                stroke="#CDE8E2"
                strokeWidth="2"
                fill="none"
              />
              <line x1="160" y1="260" x2="160" y2="320" stroke="#CDE8E2" strokeWidth="2" />

              {/* Stethoscope around neck */}
              <path
                d="M 130 215 C 130 265 145 285 160 285 C 175 285 190 265 190 215"
                stroke="#0F766E"
                strokeWidth="4"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M 160 285 L 160 300"
                stroke="#0F766E"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
              <circle
                cx="160"
                cy="305"
                r="7"
                fill="#35B8A6"
                stroke="#FFFFFF"
                strokeWidth="2"
              />

              {/* IMD Care Identity Badge */}
              <rect
                x="112"
                y="245"
                width="28"
                height="34"
                rx="4"
                fill="#FFFFFF"
                stroke="#35B8A6"
                strokeWidth="1.2"
              />
              <rect x="116" y="249" width="20" height="12" rx="2" fill="#D9F3EC" />
              <path
                d="M 120 255 L 123 255 L 124.5 252 L 126.5 258 L 128.5 253 L 130 255 L 132 255"
                stroke="#0F766E"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <line x1="116" y1="267" x2="136" y2="267" stroke="#35B8A6" strokeWidth="1.5" />
              <line x1="116" y1="272" x2="130" y2="272" stroke="#64748B" strokeWidth="1" />
            </g>

            {/* Neck */}
            <path
              d="M 145 185 L 145 220 Q 160 226 175 220 L 175 185 Z"
              fill="url(#skinGrad)"
            />

            {/* Head and Hair Base */}
            <g id="companion-head">
              {/* Hair Back */}
              <path
                d="M 115 140 C 110 80 210 80 205 140 C 205 180 215 210 200 220 C 185 225 135 225 120 220 C 105 210 115 180 115 140 Z"
                fill="url(#hairGrad)"
              />

              {/* Face */}
              <path
                d="M 125 135 C 125 95 195 95 195 135 C 195 175 185 198 160 198 C 135 198 125 175 125 135 Z"
                fill="url(#skinGrad)"
              />

              {/* Ears */}
              <ellipse cx="123" cy="142" rx="5" ry="9" fill="#EEA678" />
              <ellipse cx="197" cy="142" rx="5" ry="9" fill="#EEA678" />
              {/* Subtle gold earring studs */}
              <circle cx="122" cy="146" r="1.5" fill="#F59E0B" />
              <circle cx="198" cy="146" r="1.5" fill="#F59E0B" />

              {/* Modern Indian Hair Styling Front */}
              <path
                d="M 125 125 C 135 95 185 95 195 125 C 185 110 168 115 160 115 C 150 115 135 110 125 125 Z"
                fill="url(#hairGrad)"
              />

              {/* Small Red/Maroon Bindi */}
              <circle cx="160" cy="128" r="2.2" fill="#DC2626" />

              {/* Eyebrows */}
              <path
                d="M 137 134 Q 146 131 152 135"
                stroke="#2D1E16"
                strokeWidth="1.8"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M 168 135 Q 174 131 183 134"
                stroke="#2D1E16"
                strokeWidth="1.8"
                strokeLinecap="round"
                fill="none"
              />

              {/* Friendly, Smiling Eyes */}
              <ellipse cx="145" cy="142" rx="4.5" ry="4" fill="#243447" />
              <circle cx="146.5" cy="140.5" r="1.5" fill="#FFFFFF" />
              <path
                d="M 140 138 Q 145 136 150 138"
                stroke="#2D1E16"
                strokeWidth="1.2"
                strokeLinecap="round"
                fill="none"
              />

              <ellipse cx="175" cy="142" rx="4.5" ry="4" fill="#243447" />
              <circle cx="176.5" cy="140.5" r="1.5" fill="#FFFFFF" />
              <path
                d="M 170 138 Q 175 136 180 138"
                stroke="#2D1E16"
                strokeWidth="1.2"
                strokeLinecap="round"
                fill="none"
              />

              {/* Nose */}
              <path
                d="M 160 144 L 158 155 Q 160 157 162 155"
                stroke="#D98A5B"
                strokeWidth="1.6"
                strokeLinecap="round"
                fill="none"
              />

              {/* Warm Smile with rosy cheeks */}
              <circle cx="138" cy="154" r="5" fill="#F87171" opacity="0.25" />
              <circle cx="182" cy="154" r="5" fill="#F87171" opacity="0.25" />
              <path
                d="M 150 164 Q 160 174 170 164"
                stroke="#991B1B"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
              />
              {/* Subtle teeth highlight */}
              <path
                d="M 153 165 Q 160 169 167 165"
                fill="#FFFFFF"
              />
            </g>

            {/* Left Hand Holding Digital Health Tablet */}
            <g id="companion-left-arm">
              <path
                d="M 95 240 Q 80 270 95 300 L 115 300"
                stroke="url(#coatGrad)"
                strokeWidth="18"
                strokeLinecap="round"
                fill="none"
              />
              {/* Tablet device */}
              <rect
                x="85"
                y="265"
                width="34"
                height="48"
                rx="5"
                fill="#102A43"
                stroke="#35B8A6"
                strokeWidth="1.5"
                transform="rotate(-12 85 265)"
              />
              {/* Screen pulse glow */}
              <rect
                x="89"
                y="270"
                width="26"
                height="38"
                rx="3"
                fill="#0F766E"
                transform="rotate(-12 85 265)"
              />
              <circle cx="95" cy="285" r="2" fill="#D9F3EC" />
              <line x1="92" y1="292" x2="108" y2="288" stroke="#35B8A6" strokeWidth="1.5" />
            </g>

            {/* Right Arm & Waving Hand (Animated via CSS class .animate-companion-wave) */}
            <g id="companion-waving-arm" className="animate-companion-wave">
              {/* Arm sleeve */}
              <path
                d="M 225 240 Q 245 200 240 165"
                stroke="url(#coatGrad)"
                strokeWidth="18"
                strokeLinecap="round"
                fill="none"
              />
              {/* Teal cuff */}
              <rect
                x="233"
                y="155"
                width="14"
                height="6"
                rx="2"
                fill="#0F766E"
                transform="rotate(20 233 155)"
              />
              {/* Waving Palm & Fingers */}
              <path
                d="M 238 152 C 235 142 240 130 248 132 C 252 133 255 140 255 146"
                fill="url(#skinGrad)"
              />
              {/* 4 Fingers open in friendly wave */}
              <rect x="242" y="125" width="4.5" height="15" rx="2.2" fill="url(#skinGrad)" transform="rotate(-15 242 125)" />
              <rect x="248" y="122" width="4.5" height="16" rx="2.2" fill="url(#skinGrad)" transform="rotate(-5 248 122)" />
              <rect x="254" y="124" width="4.5" height="15" rx="2.2" fill="url(#skinGrad)" transform="rotate(8 254 124)" />
              <rect x="260" y="128" width="4" height="13" rx="2" fill="url(#skinGrad)" transform="rotate(18 260 128)" />
              {/* Thumb */}
              <path
                d="M 238 145 C 232 142 230 148 236 152 Z"
                fill="url(#skinGrad)"
              />
            </g>
          </svg>
        </div>

        {/* Mascot Bottom Pill */}
        <div className="mt-3 flex items-center justify-center">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#102A43]/80 backdrop-blur-md border border-[#35B8A6]/40 text-[#D9F3EC] text-xs font-semibold shadow-md group-hover:bg-[#0F766E] group-hover:text-white transition-colors">
            <Sparkles className="w-3.5 h-3.5 text-[#35B8A6] group-hover:text-white animate-spin" style={{ animationDuration: '6s' }} />
            <span>{badgeText[language] || badgeText.en}</span>
            <span className="text-[10px] opacity-80">• Tap to Talk</span>
          </div>
        </div>
      </div>
    </div>
  );
}
