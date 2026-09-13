import React, { useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CheckIcon, HeartIcon, ShoppingBagIcon, SparklesIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { SpotHeader, SpotHeaderVariant } from '../components/SpotHeader';
import { CaptureCard } from '../components/CaptureCard';
import { WaveRule, SwellLines, SunDisc } from '../components/Illustrations';
import { spotBySlug, spots } from '../data/spots';
import { captures, photographers, Capture } from '../data/captures';

type SpotProps = { isApp: boolean; headerVariant: SpotHeaderVariant; };

const days = [
  { label: 'Mon', date: '8' }, { label: 'Tue', date: '9' }, { label: 'Wed', date: '10' },
  { label: 'Thu', date: '11' }, { label: 'Fri', date: '12' }, { label: 'Today', date: '13' }
];

function dayCaptures(day: number): Capture[] {
  if (captures.length === 0) return [];
  const offset = day % captures.length;
  return [...captures.slice(offset), ...captures.slice(0, offset)];
}

export function Spot({ isApp, headerVariant }: SpotProps) {
  const { slug } = useParams();
  const navigate = useNavigate();
  const spot = spotBySlug(slug ?? '') ?? spots[0];
  const [day, setDay] = useState(days.length - 1);
  const [filter, setFilter] = useState<'all' | 'video' | 'photo' | string>('all');
  const [selected, setSelected] = useState<string[]>([]);
  const [found, setFound] = useState(false);

  const shooting = photographers.filter((p) => p.shootingToday).length;
  const fromPrice = 45;
  const hasCaptures = spot.captures > 0;
  const dayShots = useMemo(() => dayCaptures(day), [day]);

  const shown = useMemo(() => {
    if (filter === 'all') return dayShots;
    if (filter === 'video' || filter === 'photo') return dayShots.filter((c) => c.kind === filter);
    return dayShots.filter((c) => c.photographer === filter);
  }, [filter, dayShots]);

  const filters = [
    { key: 'all', label: 'All waves', count: dayShots.length },
    { key: 'video', label: 'Clips', count: dayShots.filter((c) => c.kind === 'video').length },
    { key: 'photo', label: 'Photos', count: dayShots.filter((c) => c.kind === 'photo').length },
    ...photographers.filter((p) => p.shootingToday).map((p) => ({
      key: p.name, label: p.name, count: dayShots.filter((c) => c.photographer === p.name).length
    }))
  ];

  const toggle = (id: string) => {
    setSelected((current) => current.includes(id) ? current.filter((x) => x !== id) : [...current, id]);
    setFound(false);
  };

  const findYourWaves = () => {
    const matches = shown.slice(0, Math.min(3, shown.length)).map((c) => c.id);
    setSelected(matches);
    setFound(matches.length > 0);
  };

  const clearSelection = () => {
    setSelected([]);
    setFound(false);
  };

  return (
    <div className={isApp ? 'pb-[148px] md:pb-0' : 'pb-[104px] md:pb-0'}>
      <SpotHeader
        spot={spot}
        variant={headerVariant}
        shootingToday={shooting}
        fromPrice={fromPrice}
        onBook={() => navigate(`/booking?spot=${spot.slug}`)}
      />

      <main className="mx-auto w-full max-w-[1280px] px-5 md:px-10">
        <section aria-label="Pick a day" className="flex items-center gap-2 pt-5 md:pt-6">
          <button type="button" onClick={() => setDay((d) => Math.max(0, d - 1))} aria-label="Previous day"
            className="hidden h-11 w-11 flex-none items-center justify-center rounded-full border border-line bg-white text-ink hover:bg-sandDeep md:flex">
            <ChevronLeftIcon className="h-4 w-4" aria-hidden="true" />
          </button>
          <ul className="no-scrollbar flex flex-1 gap-2 overflow-x-auto">
            {days.map((d, i) => {
              const active = i === day;
              return <li key={d.date}>
                <button type="button" onClick={() => { setDay(i); setSelected([]); setFound(false); }} aria-current={active ? 'date' : undefined}
                  className={[
                    'flex min-h-[48px] min-w-[62px] flex-col items-center justify-center rounded-[12px] border px-3',
                    active ? 'border-ocean bg-ocean text-white' : 'border-line bg-white text-ink hover:bg-sandDeep'
                  ].join(' ')}>
                  <span className={`text-[11px] ${active ? 'text-white/75' : 'text-muted'}`}>{d.label}</span>
                  <span className="font-display text-[16px] leading-tight">{d.date}</span>
                </button>
              </li>;
            })}
          </ul>
          <button type="button" onClick={() => setDay((d) => Math.min(days.length - 1, d + 1))} aria-label="Next day"
            className="hidden h-11 w-11 flex-none items-center justify-center rounded-full border border-line bg-white text-ink hover:bg-sandDeep md:flex">
            <ChevronRightIcon className="h-4 w-4" aria-hidden="true" />
          </button>
        </section>

        {hasCaptures ? <>
          <div className="mt-6 flex flex-wrap items-end justify-between gap-x-6 gap-y-2">
            <div>
              <h2 className="font-display text-[22px] leading-none text-ink md:text-[25px]">{spot.captures} waves today</h2>
              <p className="mt-1.5 text-[12px] text-muted">Showing {shown.length} preview captures · choose the ones that look like you.</p>
            </div>
            <p className="text-[12.5px] text-muted">06:10–08:05 · {shooting} photographers · clips from $9</p>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            <ul className="no-scrollbar flex gap-2 overflow-x-auto pb-1">
              {filters.map((f) => {
                const active = filter === f.key;
                return <li key={f.key}>
                  <button type="button" onClick={() => setFilter(f.key)} aria-pressed={active}
                    className={[
                      'flex min-h-[38px] items-center gap-1.5 whitespace-nowrap rounded-full border px-3.5 text-[13px]',
                      active ? 'border-ocean bg-ocean text-white' : 'border-line bg-white text-ink hover:bg-sandDeep'
                    ].join(' ')}>
                    {f.label}<span className={active ? 'text-white/70' : 'text-muted'}>{f.count}</span>
                  </button>
                </li>;
              })}
            </ul>
            <button type="button" onClick={findYourWaves}
              className="flex min-h-[40px] items-center gap-2 rounded-full border border-ocean bg-white px-4 text-[13px] font-medium text-ocean hover:bg-sandDeep">
              <SparklesIcon className="h-3.5 w-3.5" aria-hidden="true" /> Find your waves
            </button>
          </div>

          {found && (
            <div className="mt-3 flex items-center justify-between gap-3 rounded-[12px] border border-ocean/20 bg-ocean/[0.06] px-4 py-3 text-[13px] text-ink">
              <span><strong>{selected.length} possible waves</strong> selected from this session.</span>
              <button type="button" onClick={clearSelection} className="text-ocean underline underline-offset-2">Clear</button>
            </div>
          )}

          <section aria-label="Captures" className="mt-4 grid grid-cols-2 gap-3 md:mt-5 md:grid-cols-3 md:gap-5">
            {shown.map((c, i) =>
              <CaptureCard key={c.id} capture={c} featured={i === 0 && filter === 'all'} selected={selected.includes(c.id)} onSelect={toggle} />
            )}
          </section>

          <div className="mt-9 flex flex-col items-center">
            <WaveRule className="h-3 w-[220px] text-ocean/35" />
            <p className="mt-4 max-w-[420px] text-center text-[13px] leading-relaxed text-muted">
              Didn&apos;t find yourself? New sessions land within an hour of the photographer leaving the beach.
            </p>
          </div>
        </> : (
          <section className="relative mt-6 overflow-hidden rounded-card border border-line bg-white px-6 py-10 text-center md:py-14">
            <SunDisc className="pointer-events-none absolute -top-10 left-1/2 h-40 w-40 -translate-x-1/2" />
            <SwellLines className="pointer-events-none absolute inset-x-0 bottom-0 h-24 w-full text-ocean/25" />
            <div className="relative">
              <h2 className="font-display text-[26px] leading-tight text-ocean md:text-[30px]">No one shoots {spot.name} yet</h2>
              <p className="mx-auto mt-3 max-w-[420px] text-[14px] leading-relaxed text-muted">
                Tell the photographers shooting nearby that you&apos;ll be out. They come, they shoot, their waves land here.
              </p>
              <button type="button" onClick={() => navigate(`/booking?spot=${spot.slug}`)}
                className="mt-6 inline-flex min-h-[44px] items-center justify-center rounded-full bg-coral px-7 text-[14.5px] font-medium text-white">
                Book a private session
              </button>
              <p className="mt-3 text-[12.5px] text-muted">From ${fromPrice} · 3 photographers within 20 km</p>
            </div>
          </section>
        )}
      </main>

      {selected.length > 0 && (
        <div className={['fixed inset-x-0 z-40 border-t border-line bg-white/95 px-5 py-3 shadow-lift backdrop-blur md:bottom-4 md:left-1/2 md:right-auto md:w-[min(760px,calc(100%-40px))] md:-translate-x-1/2 md:rounded-full md:border', isApp ? 'bottom-[74px]' : 'bottom-0'].join(' ')}>
          <div className="mx-auto flex max-w-[760px] items-center gap-2">
            <div className="hidden flex-1 items-center gap-2 text-[13px] text-ink md:flex">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ocean text-white"><CheckIcon className="h-4 w-4" /></span>
              <strong>{selected.length} selected</strong>
            </div>
            <div className="flex w-full flex-1 gap-2 md:w-auto md:flex-none">
              <button type="button" onClick={findYourWaves} className="flex min-h-[44px] flex-1 items-center justify-center gap-1.5 rounded-full bg-ocean px-4 text-[12.5px] font-medium text-white">
                <SparklesIcon className="h-3.5 w-3.5" /> Find your waves
              </button>
              <button type="button" onClick={() => {}} className="flex min-h-[44px] items-center justify-center gap-1.5 rounded-full border border-line bg-white px-3.5 text-[12.5px] text-ink">
                <HeartIcon className="h-3.5 w-3.5" /> <span className="hidden sm:inline">Save</span>
              </button>
              <button type="button" onClick={() => navigate('/cart')} className="flex min-h-[44px] items-center justify-center gap-1.5 rounded-full border border-line bg-white px-3.5 text-[12.5px] text-ink">
                <ShoppingBagIcon className="h-3.5 w-3.5" /> <span className="hidden sm:inline">Cart</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {selected.length === 0 && <div className="fixed inset-x-0 z-30 border-t border-line bg-sand/95 px-5 py-3 backdrop-blur md:hidden">
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="truncate font-display text-[15px] leading-tight text-ocean">Your own session at {spot.name}</p>
            <p className="text-[11.5px] text-muted">From ${fromPrice} · 40 min · {shooting} available</p>
          </div>
          <button type="button" onClick={() => navigate(`/booking?spot=${spot.slug}`)}
            className="flex min-h-[44px] flex-none items-center justify-center rounded-full bg-coral px-5 text-[14px] font-medium text-white">Book</button>
        </div>
      </div>}
    </div>
  );
}
