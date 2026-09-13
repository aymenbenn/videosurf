import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from 'lucide-react';
import { Spot } from '../data/spots';
import { SwellLines, SunDisc, PalmHeadland, Birds, WaveRider } from './Illustrations';

export type SpotHeaderVariant = 'illustration' | 'sand';

type SpotHeaderProps = {
  spot: Spot;
  variant: SpotHeaderVariant;
  shootingToday: number;
  fromPrice: number;
  onBook?: () => void;
};

function Meta({ spot }: {spot: Spot;}) {
  return (
    <dl className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-[12.5px] text-muted">
      {[
      ['Swell', spot.swell],
      ['Tide', spot.tide],
      ['Wind', spot.wind]].
      map(([label, value]) =>
      <div key={label} className="flex items-baseline gap-1.5">
          <dt className="text-muted/75">{label}</dt>
          <dd className="text-ink">{value}</dd>
        </div>
      )}
    </dl>);

}

function BookPanel({ shootingToday, fromPrice, spot, onBook }: {shootingToday: number;fromPrice: number;spot: Spot;onBook?: () => void;}) {
  return (
    <div className="w-full max-w-[320px] rounded-card border border-line bg-white p-5 shadow-lift">
      <p className="font-display text-[19px] leading-snug text-ocean">Get your own session filmed</p>
      <p className="mt-1.5 text-[13px] leading-relaxed text-muted">
        {shootingToday > 0 ?
        `${shootingToday} photographers are shooting ${spot.name} today.` :
        `No one is shooting ${spot.name} today — ask and they come.`}{' '}
        40 min, one surfer, all your waves.
      </p>
      <p className="mt-3 font-display text-[26px] leading-none text-ink">
        ${fromPrice}
        <span className="ml-1.5 font-sans text-[12.5px] font-normal text-muted">per session</span>
      </p>
      <button
        type="button"
        onClick={onBook}
        className="mt-4 flex min-h-[44px] w-full items-center justify-center rounded-full bg-coral px-5 text-[14.5px] font-medium text-white transition-transform duration-150 ease-out hover:bg-[#df5c3e] active:scale-[0.985]">
        
        Book a photographer
      </button>
    </div>);

}

/**
 * Two header directions, swappable from the Controls panel:
 *  - 'illustration': the spot drawn in the product's ink style (one drawing per spot,
 *    generated from its photo, so it scales to a few dozen spots).
 *  - 'sand': no per-spot artwork at all — a worked sand band built from the
 *    illustration kit, which any page in the product can reuse.
 */
export function SpotHeader({ spot, variant, shootingToday, fromPrice, onBook }: SpotHeaderProps) {
  return (
    <header className="relative overflow-hidden border-b border-line bg-sandDeep">
      {variant === 'illustration' ?
      <>
          <img
          src="/video-surf-coast-illustration.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 h-full w-[78%] object-cover object-[65%_60%] opacity-95 mix-blend-multiply md:w-[62%]"
          style={{
            maskImage: 'linear-gradient(to right, transparent 0%, #000 34%, #000 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, #000 34%, #000 100%)'
          }} />
        
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-line" />
        </> :

      <>
          <SunDisc className="pointer-events-none absolute -top-6 right-8 h-40 w-40 md:right-[22%] md:h-56 md:w-56" />
          <SwellLines className="pointer-events-none absolute bottom-0 left-0 h-[62%] w-full text-ocean/45" />
          <PalmHeadland className="pointer-events-none absolute bottom-0 right-0 h-[58%] w-[42%] text-ocean/55 md:w-[26%]" />
          <WaveRider className="pointer-events-none absolute bottom-2 left-[6%] hidden h-[46%] text-ocean/50 md:block" />
          <Birds className="pointer-events-none absolute right-[46%] top-6 hidden h-8 text-ocean/40 md:block" />
        </>
      }

      <div className="relative mx-auto w-full max-w-[1280px] px-5 pb-7 pt-[58px] md:flex md:items-end md:justify-between md:gap-10 md:px-10 md:pb-9 md:pt-10">
        <div className="max-w-[560px]">
          <Link
            to="/"
            className="inline-flex min-h-[36px] items-center gap-1.5 text-[13px] text-muted transition-colors duration-150 ease-out hover:text-ink">
            
            <ArrowLeftIcon className="h-3.5 w-3.5" aria-hidden="true" />
            All spots
          </Link>
          <p className="mt-5 text-[13px] text-muted md:mt-6">
            {spot.area} · {spot.country}
          </p>
          <h1 className="mt-1 font-display text-[40px] leading-[1.03] tracking-[-0.02em] text-ocean md:text-[58px]">
            {spot.name}
          </h1>
          <p className="mt-3 max-w-[400px] text-[14px] leading-relaxed text-muted">
            Every wave shot from the beach today. Watch it, then download it in HD without the
            watermark.
          </p>
          <Meta spot={spot} />
        </div>

        <div className="mt-7 hidden md:mt-0 md:block">
          <BookPanel shootingToday={shootingToday} fromPrice={fromPrice} spot={spot} onBook={onBook} />
        </div>
      </div>
    </header>);

}