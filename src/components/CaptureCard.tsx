import React from 'react';
import { CheckIcon, PlayIcon, ImagesIcon } from 'lucide-react';
import { Capture } from '../data/captures';

type CaptureCardProps = {
  capture: Capture;
  featured?: boolean;
  selected?: boolean;
  onSelect?: (id: string) => void;
};

export function CaptureCard({ capture, featured = false, selected = false, onSelect }: CaptureCardProps) {
  const isVideo = capture.kind === 'video';

  return (
    <article
      className={[
        'group relative flex h-full flex-col overflow-hidden rounded-card border bg-white shadow-soft transition-all duration-150',
        selected ? 'border-ocean ring-2 ring-ocean/15' : 'border-line',
        featured ? 'md:col-span-2 md:row-span-2' : ''
      ].join(' ')}
    >
      <button
        type="button"
        onClick={() => onSelect?.(capture.id)}
        aria-label={selected ? `Remove ${capture.time} from selection` : `Select ${capture.time}`}
        aria-pressed={selected}
        className={[
          'absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full border shadow-soft backdrop-blur transition-colors',
          selected ? 'border-ocean bg-ocean text-white' : 'border-white/80 bg-sand/90 text-ocean hover:bg-white'
        ].join(' ')}
      >
        {selected ? <CheckIcon className="h-4 w-4" aria-hidden="true" /> : <span className="h-3.5 w-3.5 rounded-full border border-ocean/70" aria-hidden="true" />}
      </button>

      <button
        type="button"
        className="relative block w-full overflow-hidden text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-ocean/40"
        aria-label={`Preview the ${isVideo ? 'clip' : 'photo set'} from ${capture.time}`}
      >
        <div className={featured ? 'aspect-[4/3] md:aspect-[16/10]' : 'aspect-[4/3]'}>
          <img
            src={capture.thumb}
            alt={`Surfer at ${capture.time}, shot by ${capture.photographer}`}
            className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
          />
        </div>
        <span className="absolute left-3 top-3 flex min-h-[26px] items-center gap-1.5 rounded-full bg-sand/92 px-2.5 text-[11.5px] font-medium text-ink backdrop-blur">
          {isVideo ? <PlayIcon className="h-3 w-3 fill-current" aria-hidden="true" /> : <ImagesIcon className="h-3 w-3" aria-hidden="true" />}
          {capture.time}
        </span>
        <span className="absolute bottom-3 right-3 rounded-full bg-ink/68 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur">
          {isVideo ? capture.duration : `${capture.frames} frames`}
        </span>
      </button>

      <div className="flex flex-1 items-end justify-between gap-3 px-3.5 py-3">
        <div className="min-w-0">
          <p className="truncate text-[13px] text-ink">{capture.photographer}</p>
          <p className="text-[11.5px] text-muted">{isVideo ? 'Clip · HD, no watermark' : 'Photo set · HD'}</p>
        </div>
        <p className="font-display text-[19px] leading-none text-ocean">${capture.price}</p>
      </div>
    </article>
  );
}
