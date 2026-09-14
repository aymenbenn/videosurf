import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRightIcon } from 'lucide-react';
import { Spot } from '../data/spots';

type Props = {
  spot: Spot;
  shootingToday: number;
  fromPrice: number;
  onBook: () => void;
};

export function SpotHeader({ spot, shootingToday, fromPrice, onBook }: Props) {
  return (
    <header className="relative overflow-hidden border-b border-line bg-sandDeep">
      <img
        src="/Gemini_Generated_Image_pacbnipacbnipacb.jpg"
        alt=""
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 h-full w-[58%] object-cover object-left mix-blend-multiply opacity-80 md:w-[46%]"
      />
      <div className="absolute bottom-0 right-0 h-full w-[58%] bg-sandDeep/35 md:w-[46%]" />
      <div className="relative mx-auto max-w-[1280px] px-5 pb-7 pt-6 md:px-10 md:pb-8 md:pt-8">
        <div className="mb-3 flex items-center justify-between md:hidden">
          <Link to="/" aria-label="video.surf home"><img src="/imgi_4_video-surf-inline-c66eb9e3.png" alt="video.surf" className="h-[30px] w-auto" /></Link>
          <button className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-ocean" aria-label="Menu">☰</button>
        </div>
        <Link to="/" className="inline-flex min-h-10 items-center gap-1.5 text-[12px] text-muted hover:text-ocean">
          ← All spots
        </Link>
        <div className="mt-5 grid items-end gap-7 md:grid-cols-[1fr_auto]">
          <div className="max-w-[620px]">
            <p className="text-[12px] font-medium uppercase tracking-[.13em] text-muted">{spot.area} · {spot.country}</p>
            <h1 className="mt-2 font-display text-[44px] leading-none tracking-[-.02em] text-ocean md:text-[58px]">{spot.name}</h1>
            <p className="mt-3 max-w-[540px] text-[13px] leading-relaxed text-muted md:text-[14px]">
              Every wave shot from the beach. Find yourself, select your waves and buy them in HD.
            </p>
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-[11.5px] text-muted">
              <span>{spot.captures} captures</span>
              <span>{spot.photographers} photographers</span>
              <span>{spot.level}</span>
            </div>
          </div>
          <div className="relative z-10 rounded-[18px] border border-line bg-white/95 p-4 shadow-soft backdrop-blur md:w-[300px]">
            <p className="font-display text-[20px] text-ocean">Get your session filmed</p>
            <p className="mt-1 text-[12px] leading-relaxed text-muted">40 min · one surfer · all your waves</p>
            <div className="mt-3 flex items-center justify-between gap-3">
              <span className="font-display text-[23px] text-ink">from ${fromPrice}</span>
              <button onClick={onBook} className="min-h-11 rounded-full bg-coral px-5 text-[13px] font-medium text-white hover:bg-[#df5c3e]">Book a photographer</button>
            </div>
            {shootingToday > 0 && <p className="mt-2 text-[10.5px] text-muted">{shootingToday} photographers shooting today</p>}
          </div>
        </div>
      </div>
    </header>
  );
}
