import React from 'react';

type IlloProps = { className?: string };

export function SwellLines({ className = '' }: IlloProps) {
  return (
    <svg viewBox="0 0 800 160" fill="none" aria-hidden="true" className={className}>
      <g stroke="currentColor" strokeWidth="1.25" strokeLinecap="round">
        <path d="M-10 34c60-10 120 8 180 0s110-14 170-4 120 14 180 4 110-12 170-2" />
        <path d="M-10 58c70-8 130 10 190 2s120-12 180-2 110 12 170 4 110-10 170 0" opacity=".72" />
        <path d="M-10 84c80-12 140 8 210 2s130-10 190 0 100 10 160 4 100-8 160 2" opacity=".5" />
        <path d="M-10 112c90-10 150 8 220 2s140-10 200 0 100 10 160 6" opacity=".3" />
      </g>
    </svg>
  );
}

export function SunDisc({ className = '' }: IlloProps) {
  return (
    <svg viewBox="0 0 120 120" fill="none" aria-hidden="true" className={className}>
      <circle cx="60" cy="60" r="48" fill="#e8684a" opacity=".20" />
    </svg>
  );
}

export function Birds({ className = '' }: IlloProps) {
  return (
    <svg viewBox="0 0 80 40" fill="none" aria-hidden="true" className={className}>
      <g stroke="currentColor" strokeWidth="1.25" strokeLinecap="round">
        <path d="M4 14c4-4 7-4 10 0 3-4 6-4 10 0" />
        <path d="M34 28c3-3 5-3 8 0 2-3 5-3 7 0" opacity=".65" />
        <path d="M58 8c3-3 6-3 8 0 3-3 5-3 8 0" opacity=".45" />
      </g>
    </svg>
  );
}

export function WaveRule({ className = '' }: IlloProps) {
  return (
    <svg viewBox="0 0 400 12" fill="none" aria-hidden="true" className={className}>
      <path d="M0 8h140c8 0 14-5 22-5s14 5 22 5h216" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  );
}
