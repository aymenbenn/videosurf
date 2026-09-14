import React, { useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CheckIcon, HeartIcon, ShoppingBagIcon, SparklesIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { SpotHeader } from '../components/SpotHeader';
import { CaptureCard } from '../components/CaptureCard';
import { SwellLines } from '../components/Illustrations';
import { spotBySlug, spots } from '../data/spots';
import { captures, photographers, Capture } from '../data/captures';

type Props = { isApp: boolean };

const days = [
  { label: 'Mon', date: '8' }, { label: 'Tue', date: '9' }, { label: 'Wed', date: '10' },
  { label: 'Thu', date: '11' }, { label: 'Fri', date: '12' }, { label: 'Today', date: '13' }
];

function dayCaptures(day: number): Capture[] {
  const offset = day % captures.length;
  return [...captures.slice(offset), ...captures.slice(0, offset)];
}

export function Spot({ isApp }: Props) {
  const { slug } = useParams();
  const navigate = useNavigate();
  const spot = spotBySlug(slug ?? '') ?? spots[0];
  const [day, setDay] = useState(days.length - 1);
  const [filter, setFilter] = useState('all');
  const [selected, setSelected] = useState<string[]>([]);
  const [found, setFound] = useState(false);
  const shooting = photographers.filter(p => p.shootingToday).length;
  const dayShots = useMemo(() => dayCaptures(day), [day]);
  const shown = useMemo(() => {
    if (filter === 'all') return dayShots;
    if (filter === 'video' || filter === 'photo') return dayShots.filter(c => c.kind === filter);
    return dayShots.filter(c => c.photographer === filter);
  }, [filter, dayShots]);

  const filters = [
    { key: 'all', label: 'All', count: dayShots.length },
    { key: 'video', label: 'Videos', count: dayShots.filter(c => c.kind === 'video').length },
    { key: 'photo', label: 'Photos', count: dayShots.filter(c => c.kind === 'photo').length },
    ...photographers.filter(p => p.shootingToday).map(p => ({ key: p.name, label: p.name, count: dayShots.filter(c => c.photographer === p.name).length }))
  ];

  const toggle = (id: string) => {
    setSelected(s => s.includes(id) ? s.filter(x => x !== id) : [...s, id]);
    setFound(false);
  };

  const findYourWaves = () => {
    const matches = shown.slice(0, 3).map(c => c.id);
    setSelected(matches);
    setFound(matches.length > 0);
  };

  return (
    <div className={isApp ? 'pb-36' : 'pb-28'}>
      <SpotHeader spot={spot} shootingToday={shooting} fromPrice={45} onBook={() => navigate(`/booking?spot=${spot.slug}`)} />

      <main className="mx-auto max-w-[1280px] px-4 md:px-8 lg:px-10">
        <section className="flex items-center gap-2 pt-4 md:pt-5">
          <button onClick={() => setDay(d => Math.max(0, d - 1))} className="hidden h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-ocean md:flex"><ChevronLeftIcon className="h-4 w-4" /></button>
          <div className="no-scrollbar flex flex-1 gap-2 overflow-x-auto">
            {days.map((d, i) => (
              <button key={d.date} onClick={() => { setDay(i); setSelected([]); setFound(false); }} className={`min-h-11 min-w-[68px] rounded-full border px-3 text-[11px] ${i === day ? 'border-ocean bg-ocean text-white' : 'border-line bg-white text-ink hover:bg-sand'}`}>
                <span className="block opacity-70">{d.label}</span><strong className="font-display text-[15px]">{d.date}</strong>
              </button>
            ))}
          </div>
          <button onClick={() => setDay(d => Math.min(days.length - 1, d + 1))} className="hidden h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-ocean md:flex"><ChevronRightIcon className="h-4 w-4" /></button>
        </section>

        <section className="relative mt-5 overflow-hidden rounded-[18px] border border-line bg-white p-4 shadow-soft md:p-5">
          <div className="pointer-events-none absolute right-0 top-0 h-full w-[34%] opacity-30"><SwellLines className="h-full w-full text-ocean" /></div>
          <div className="relative flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-display text-[25px] text-ocean">{spot.captures || dayShots.length} waves today</p>
              <p className="mt-1 text-[12px] text-muted">Find the first wave of yourself. One tap can bring back the rest.</p>
            </div>
            <button onClick={findYourWaves} className="min-h-11 rounded-full bg-coral px-5 text-[13px] font-medium text-white hover:bg-[#df5c3e]">Find your waves</button>
          </div>
        </section>

        <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
          {filters.map(f => (
            <button key={f.key} onClick={() => setFilter(f.key)} className={`min-h-10 whitespace-nowrap rounded-full border px-4 text-[12px] ${filter === f.key ? 'border-ocean bg-ocean text-white' : 'border-line bg-white text-ink'}`}>
              {f.label} <span className={filter === f.key ? 'text-white/70' : 'text-muted'}>{f.count}</span>
            </button>
          ))}
        </div>

        {found && (
          <div className="mt-3 flex items-center justify-between rounded-[12px] border border-ocean/20 bg-ocean/[.06] px-4 py-3 text-[12px]">
            <span><strong>{selected.length} possible waves</strong> selected.</span>
            <button onClick={() => { setSelected([]); setFound(false); }} className="text-ocean underline">Clear</button>
          </div>
        )}

        <section className="mt-4 grid grid-cols-2 gap-2.5 md:grid-cols-3 md:gap-4">
          {shown.map((c, i) => <CaptureCard key={c.id} capture={c} featured={i === 0 && filter === 'all'} selected={selected.includes(c.id)} onSelect={toggle} />)}
        </section>

        <div className="mx-auto mt-10 max-w-[640px] rounded-[18px] border border-line bg-sandDeep px-5 py-7 text-center">
          <p className="font-display text-[22px] text-ocean">No one in the water with a camera?</p>
          <p className="mx-auto mt-2 max-w-[520px] text-[12.5px] leading-relaxed text-muted">Book a private session and get all your waves delivered to your spot page.</p>
          <button onClick={() => navigate(`/booking?spot=${spot.slug}`)} className="mt-4 min-h-11 rounded-full bg-coral px-6 text-[13px] font-medium text-white">Book a private session</button>
        </div>
      </main>

      {selected.length > 0 && (
        <div className={`fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 px-4 py-3 shadow-lift backdrop-blur ${isApp ? 'bottom-[72px]' : 'md:bottom-4 md:left-1/2 md:w-[620px] md:-translate-x-1/2 md:rounded-full md:border'}`}>
          <div className="mx-auto flex max-w-[700px] items-center gap-2">
            <span className="hidden text-[12px] text-muted md:block">{selected.length} selected</span>
            <button onClick={findYourWaves} className="min-h-11 flex-1 rounded-full bg-coral px-4 text-[12px] font-medium text-white">Find your waves</button>
            <button className="min-h-11 rounded-full border border-line bg-white px-4 text-[12px] text-ink"><HeartIcon className="mr-1 inline h-4 w-4" />Save</button>
            <button onClick={() => navigate('/cart')} className="min-h-11 rounded-full border border-line bg-white px-4 text-[12px] text-ink"><ShoppingBagIcon className="mr-1 inline h-4 w-4" />Cart</button>
          </div>
        </div>
      )}
    </div>
  );
}
