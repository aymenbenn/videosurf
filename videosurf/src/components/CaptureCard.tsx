import React from 'react';
import { CheckIcon, PlayIcon, ImagesIcon } from 'lucide-react';
import { Capture } from '../data/captures';

type Props = { capture: Capture; selected?: boolean; onSelect?: (id: string) => void };

export function CaptureCard({ capture, selected = false, onSelect }: Props) {
  const isVideo = capture.kind === 'video';
  return (
    <article className={`group relative overflow-hidden bg-white ${selected ? 'ring-2 ring-ocean ring-inset' : ''}`}>
      <button type="button" onClick={() => onSelect?.(capture.id)} aria-pressed={selected}
        className={`absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full border ${selected ? 'border-ocean bg-ocean text-white' : 'border-white bg-white/90 text-ocean'} shadow-soft backdrop-blur`}>
        {selected ? <CheckIcon className="h-4 w-4" /> : <span className="h-3.5 w-3.5 rounded-full border border-ocean/70" />}
      </button>
      <button type="button" className="relative block w-full text-left" aria-label={`Preview ${capture.time}`}>
        <div className="aspect-[4/3] overflow-hidden bg-sandDeep">
          <img src={capture.thumb} alt="" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.025]" />
        </div>
        <span className="absolute bottom-3 left-3 flex min-h-[25px] items-center gap-1.5 rounded-full bg-white/92 px-2.5 text-[11px] font-medium text-ink shadow-sm">
          {isVideo ? <PlayIcon className="h-3 w-3 fill-current" /> : <ImagesIcon className="h-3 w-3" />}
          {capture.time}
        </span>
      </button>
    </article>
  );
}
