import React from 'react';

type WordmarkProps = {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
};

const sizes = {
  sm: 'h-[30px] w-auto',
  md: 'h-[42px] w-auto',
  lg: 'h-[54px] w-auto'
};

/** Uses the supplied video.surf wordmark asset so the contest build stays faithful to the brand. */
export function Wordmark({ size = 'sm', className = '' }: WordmarkProps) {
  return (
    <img
      src="/video-surf-wordmark.png"
      alt="video.surf"
      className={`${sizes[size]} ${className}`}
    />
  );
}
