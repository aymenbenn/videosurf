import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRightIcon } from 'lucide-react';
import { Spot } from '../data/spots';
import { illustrations } from '../data/captures';

type Props = { spot: Spot; shootingToday: number; fromPrice: number; onBook: () => void; isApp?: boolean };

export function SpotHeader({ spot, shootingToday, fromPrice, onBook, isApp = false }: Props) {
  return (
    <header className="relative overflow-hidden border-b border-line bg-sand">
      <div className="mx-auto max-w-[1280px] px-5 pb-5 pt-6 md:px-8 md:pb-6 lg:px-10">
        <div className="flex items-center justify-between gap-4">
          {isApp ? <div className="flex items-center gap-2"><Link to="/" className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-ocean shadow-soft" aria-label="Back">←</Link><span className="text-[11px] font-medium text-muted">{spot.name}</span></div> : <Link to="/" className="inline-flex min-h-10 items-center text-[12px] text-ocean hover:underline">← All spots</Link>}
          <div className="flex items-center gap-2">
            {isApp && <button className="flex h-10 min-w-10 items-center justify-center rounded-full border border-line bg-white text-[15px] shadow-soft" aria-label="Language">🇬🇧</button>}
            {isApp && <button className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-ocean shadow-soft" aria-label="Menu">☰</button>}
          </div>
          <div className="hidden md:flex items-center gap-2">
            <span className="rounded-full border border-line bg-white px-4 py-2 text-[11px] text-muted">13 captures</span>
            <span className="rounded-full border border-line bg-white px-4 py-2 text-[11px] text-muted">{spot.photographers} photographers</span>
          </div>
        </div>
        <div className="relative mt-2 grid items-center gap-6 md:grid-cols-[1fr_360px]">
          <div className="relative z-10 max-w-[650px]">
            <h1 className="font-display text-[44px] leading-none tracking-[-.025em] text-ocean md:text-[58px]">{spot.name}</h1>
            <p className="mt-2 text-[12px] text-muted">{spot.area} · {spot.country}</p>
            <p className="mt-3 max-w-[560px] text-[13px] leading-relaxed text-muted md:text-[14px]">Find your photos and videos, save your waves, and download them in HD without the watermark.</p>
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-muted md:hidden"><span>{spot.captures} captures</span><span>{spot.photographers} photographer{spot.photographers === 1 ? '' : 's'}</span></div>
          </div>
          <img src={illustrations.spotHeader} alt="" aria-hidden className="pointer-events-none absolute right-[-110px] top-[-12px] h-[170px] w-[430px] object-cover object-center mix-blend-multiply opacity-95 md:static md:h-[145px] md:w-full md:object-contain md:object-center" />
          <div className="relative z-10 hidden md:flex justify-end"><button onClick={onBook} className="min-h-11 rounded-full bg-coral px-6 text-[12px] font-medium text-white shadow-soft">Book a photographer <ChevronRightIcon className="ml-1 inline h-3.5 w-3.5" /></button></div>
        </div>
        <div className="mt-4 flex items-center justify-between gap-3 md:hidden">
          <span className="text-[11px] text-muted">{shootingToday} photographer{shootingToday === 1 ? '' : 's'} shooting today</span>
          <button onClick={onBook} className="min-h-11 rounded-full bg-coral px-5 text-[12px] font-medium text-white">Book a photographer · from ${fromPrice}</button>
        </div>
      </div>
    </header>
  );
}
