import React from 'react';

/**
 * The illustration kit — one ink weight (1.3px), one ocean colour, one coral watercolour
 * accent, everything drawn on sand. These pieces dress any page header the same way,
 * so the rest of the product can be extended without new artwork.
 */

type IlloProps = {className?: string;};

/** Long swell lines. The base layer of every header band. */
export function SwellLines({ className = '' }: IlloProps) {
  return (
    <svg viewBox="0 0 800 160" fill="none" aria-hidden="true" className={className}>
      <g stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" opacity="0.9">
        <path d="M-10 34c60-10 120 8 180 0s110-14 170-4 120 14 180 4 110-12 170-2" />
        <path d="M-10 58c70-8 130 10 190 2s120-12 180-2 110 12 170 4 110-10 170 0" opacity="0.8" />
        <path d="M-10 84c80-12 140 8 210 2s130-10 190 0 100 10 160 4 100-8 160 2" opacity="0.62" />
        <path d="M-10 112c90-10 150 8 220 2s140-10 200 0 100 10 160 6" opacity="0.42" />
        <path d="M-10 138c100-8 160 8 230 2s150-8 210 0" opacity="0.26" />
      </g>
      <g stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" opacity="0.75">
        <path d="M250 70c14-6 26-2 34 6" />
        <path d="M268 62c10-4 18-1 24 5" />
        <path d="M540 96c16-7 28-2 36 6" />
      </g>
    </svg>);

}

/** A peeling wave with a minimal line-figure rider. Used as a spot accent. */
export function WaveRider({ className = '' }: IlloProps) {
  return (
    <svg viewBox="0 0 260 140" fill="none" aria-hidden="true" className={className}>
      <g stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 104c34 2 62-8 84-26 22-18 42-34 70-34 26 0 44 16 52 34" />
        <path d="M162 46c16 2 28 14 34 30" opacity="0.7" />
        <path d="M34 116c46 4 86-6 120-28" opacity="0.55" />
        <path d="M96 96c10-8 20-12 30-12" opacity="0.6" />
        <path d="M126 62l-6 12 8 10-2 12" />
        <path d="M120 74l-12-2M128 84l12 2" />
        <path d="M126 62a4 4 0 100-8 4 4 0 000 8z" />
        <path d="M112 96h30" />
      </g>
    </svg>);

}

/** Soft coral sun. One per page maximum. */
export function SunDisc({ className = '' }: IlloProps) {
  return (
    <svg viewBox="0 0 120 120" aria-hidden="true" className={className}>
      <defs>
        <radialGradient id="vs-sun" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#e8684a" stopOpacity="0.34" />
          <stop offset="70%" stopColor="#e8684a" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#e8684a" stopOpacity="0.06" />
        </radialGradient>
      </defs>
      <circle cx="60" cy="60" r="52" fill="url(#vs-sun)" />
    </svg>);

}

/** Two palms on a small headland. The signature mark of the coastline scenes. */
export function PalmHeadland({ className = '' }: IlloProps) {
  return (
    <svg viewBox="0 0 200 140" fill="none" aria-hidden="true" className={className}>
      <g stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M96 104c10-16 28-26 50-26s40 10 50 26" />
        <path d="M120 104c6-10 16-16 28-16" opacity="0.55" />
        <path d="M132 84c-2-18-4-30-4-38" />
        <path d="M128 46c-8-8-18-10-26-6 8-6 18-6 26 0 0-10 6-18 14-20-6 6-10 12-10 20 8-6 18-6 26 0-10-2-18 0-24 8" />
        <path d="M160 88c2-16 4-26 4-34" />
        <path d="M164 54c-6-6-14-8-20-4 6-6 14-6 20-2 0-8 4-14 12-16-6 4-8 10-8 16 6-4 14-4 20 0-8 0-14 2-18 6" />
        <path d="M0 118c40-6 76 2 112 0s58-6 88-2" opacity="0.5" />
      </g>
    </svg>);

}

/** A hairline rule with a single wave crest — the section divider. */
export function WaveRule({ className = '' }: IlloProps) {
  return (
    <svg viewBox="0 0 400 12" fill="none" aria-hidden="true" className={className}>
      <path
        d="M0 8h140c8 0 14-5 22-5s14 5 22 5h216"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round" />
      
    </svg>);

}

/** Three birds. Used sparingly, top-right of a band. */
export function Birds({ className = '' }: IlloProps) {
  return (
    <svg viewBox="0 0 80 40" fill="none" aria-hidden="true" className={className}>
      <g stroke="currentColor" strokeWidth="1.3" strokeLinecap="round">
        <path d="M4 14c4-4 7-4 10 0 3-4 6-4 10 0" />
        <path d="M34 28c3-3 5-3 8 0 2-3 5-3 7 0" opacity="0.7" />
        <path d="M58 8c3-3 6-3 8 0 3-3 5-3 8 0" opacity="0.5" />
      </g>
    </svg>);

}