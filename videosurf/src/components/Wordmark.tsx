import React from 'react';

type Props = { size?: 'sm' | 'md' | 'lg'; className?: string };

const sizes = { sm: 'h-[30px]', md: 'h-[40px]', lg: 'h-[52px]' };

export function Wordmark({ size = 'sm', className = '' }: Props) {
  return <img src="/imgi_4_video-surf-inline-c66eb9e3.png" alt="video.surf" className={`${sizes[size]} w-auto object-contain ${className}`} />;
}
