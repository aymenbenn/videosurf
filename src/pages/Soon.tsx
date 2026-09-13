import React from 'react';
import { Link } from 'react-router-dom';
import { SwellLines, SunDisc } from '../components/Illustrations';

type SoonProps = {title: string;isApp: boolean;};

/** Placeholder for the screens outside the contest scope, dressed with the same kit. */
export function Soon({ title, isApp }: SoonProps) {
  return (
    <div className={`relative overflow-hidden ${isApp ? 'pt-14' : ''}`}>
      <SunDisc className="pointer-events-none absolute -top-10 right-6 h-44 w-44" />
      <SwellLines className="pointer-events-none absolute inset-x-0 bottom-0 h-40 w-full text-ocean/25" />
      <div className="relative mx-auto flex min-h-[60vh] w-full max-w-[520px] flex-col items-center justify-center px-6 text-center">
        <h1 className="font-display text-[32px] leading-tight text-ocean">{title}</h1>
        <p className="mt-3 text-[14px] leading-relaxed text-muted">
          Not part of the three contest pages — it will be built on the same headers and the same
          illustration kit.
        </p>
        <Link
          to="/"
          className="mt-6 flex min-h-[44px] items-center rounded-full border border-line bg-white px-6 text-[14px] text-ocean shadow-soft transition-colors duration-150 ease-out hover:bg-sandDeep">
          
          Back to the map
        </Link>
      </div>
    </div>);

}