'use client';

import React from 'react';

/**
 * Subtle Indian-inspired geometric accents:
 * Delicate jali lattice, understated mandala ring, and warm emerald/mint flourishes.
 */
export function IndianJaliPattern({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`pointer-events-none opacity-[0.06] ${className}`}
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="jali-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          {/* Subtle 8-point geometric Indian jali motif */}
          <path
            d="M 20 0 L 40 20 L 20 40 L 0 20 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.8"
          />
          <circle cx="20" cy="20" r="4" fill="none" stroke="currentColor" strokeWidth="0.8" />
          <path
            d="M 0 0 L 10 10 M 40 0 L 30 10 M 40 40 L 30 30 M 0 40 L 10 30"
            stroke="currentColor"
            strokeWidth="0.6"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#jali-grid)" />
    </svg>
  );
}

export function MandalaRings({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={`pointer-events-none opacity-20 ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="100" cy="100" r="90" stroke="#0F766E" strokeWidth="0.75" strokeDasharray="3 3" />
      <circle cx="100" cy="100" r="70" stroke="#2DD4BF" strokeWidth="1" />
      <circle cx="100" cy="100" r="50" stroke="#DDF5EF" strokeWidth="0.75" strokeDasharray="2 4" />
      <circle cx="100" cy="100" r="30" stroke="#0F766E" strokeWidth="1.2" />
      {/* 8 petaled subtle symmetry */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <line
          key={i}
          x1="100"
          y1="30"
          x2="100"
          y2="10"
          stroke="#2DD4BF"
          strokeWidth="1"
          transform={`rotate(${angle} 100 100)`}
        />
      ))}
    </svg>
  );
}
