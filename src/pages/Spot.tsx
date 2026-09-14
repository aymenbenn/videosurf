import React, { useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { HeartIcon, ShoppingBagIcon, ChevronLeftIcon, ChevronRightIcon, CalendarDaysIcon } from 'lucide-react';
import { SpotHeader } from '../components/SpotHeader';
import { CaptureCard } from '../components/CaptureCard';
import { spotBySlug, spots } from '../data/spots';
import { captures, photographers, Capture } from '../data/captures';
import { illustrations } from '../data/captures';

type Props = { isApp: boolean };
const days = [
  { label: 'Mon', date: '8' }, { label: 'Tue', date: '9' }, { label: 'Wed', date: '10' },
  { label: 'Thu', date: '11' }, { label: 'Fri', date: '12' }, { label: 'Today', date: '13' }
];
function dayCaptures(day: number): Capture[] { const offset = day % captures.length; return [...captures.slice(offset), ...captures.slice(0, offset)]; }

export function Spot({ isApp }: Props) {
  const { slug } = useParams(); const navigate = useNavigate();
  const spot = spotBySlug(slug ?? '') ?? spots[0];
  const [day, setDay] = useState(days.length - 1); const [filter, setFilter] = useState('all'); const [selected, setSelected] = useState<string[]>([]);
  const dayShots = useMemo(() => dayCaptures(day), [day]);
  const shown = useMemo(() => filter === 'all' ? dayShots : filter === 'video' || filter === 'photo' ? dayShots.filter(c => c.kind === filter) : dayShots.filter(c => c.photographer === filter), [filter, dayShots]);
  const filters = [{ key: 'all', label: 'All' }, { key: 'photo', label: 'Photos' }, { key: 'video', label: 'Videos' }, ...photographers.filter(p => p.shootingToday).map(p => ({ key: p.name, label: p.name }))];
  const toggle = (id: string) => setSelected(s => s.includes(id) ? s.filter(x => x !== id) : [...s, id]);
  const findWaves = () => setSelected(shown.slice(0, Math.min(3, shown.length)).map(c => c.id));

  return <div className={isApp ? 'pb-36' : 'pb-28'}>
    <SpotHeader spot={spot} shootingToday={photographers.filter(p => p.shootingToday).length} fromPrice={45} onBook={() => navigate(`/booking?spot=${spot.slug}`)} isApp={isApp} />
    <main className="mx-auto max-w-[1280px] px-0 md:px-8 lg:px-10">
      <div className="px-4 pt-4 md:px-0 md:pt-5">
        <section className="flex items-center gap-2">
          <button onClick={() => setDay(d => Math.max(0, d - 1))} className="hidden h-10 w-10 items-center justify-center rounded-full border border-line bg-white md:flex"><ChevronLeftIcon className="h-4 w-4" /></button>
          <div className="no-scrollbar flex flex-1 gap-2 overflow-x-auto pb-1">
            {days.map((d, i) => <button key={d.date} onClick={() => { setDay(i); setSelected([]); }} className={`min-h-10 min-w-[70px] rounded-full border px-3 text-[11px] ${i === day ? 'border-ocean bg-ocean text-white' : 'border-line bg-white text-ink'}`}><span className="block opacity-70">{d.label}</span><strong className="font-display text-[15px]">{d.date}</strong></button>)}
          </div>
          <button onClick={() => setDay(d => Math.min(days.length - 1, d + 1))} className="hidden h-10 w-10 items-center justify-center rounded-full border border-line bg-white md:flex"><ChevronRightIcon className="h-4 w-4" /></button>
        </section>
        <section className="mt-4 flex flex-col gap-3 rounded-[16px] border border-line bg-white p-4 shadow-soft md:flex-row md:items-center md:justify-between md:p-4">
          <div><p className="font-display text-[23px] text-ocean">Find your waves</p><p className="mt-0.5 text-[11.5px] text-muted">Select one wave you recognize. We'll help bring back the others.</p></div>
          <button onClick={findWaves} className="min-h-11 rounded-full bg-coral px-5 text-[12px] font-medium text-white">Find my waves →</button>
        </section>
        <div className="mt-4 flex items-center gap-2 overflow-x-auto pb-1">
          {filters.map(f => <button key={f.key} onClick={() => setFilter(f.key)} className={`min-h-10 whitespace-nowrap rounded-full border px-4 text-[11.5px] ${filter === f.key ? 'border-ocean bg-ocean text-white' : 'border-line bg-white text-ink'}`}>{f.label}</button>)}
        </div>
      </div>

      <div className="mt-3 md:grid md:grid-cols-[minmax(0,1fr)_260px] md:gap-7 md:px-0">
        <section>
          <div className="mb-2 flex items-center justify-between px-4 md:px-0"><div><h2 className="font-display text-[24px] text-ocean">{dayShots.length} captures available</h2><p className="mt-1 text-[11px] text-muted">{dayShots.length} waves in this session</p></div><div className="hidden items-center gap-1 text-[11px] text-muted md:flex"><CalendarDaysIcon className="h-3.5 w-3.5" /> July 04, 2026</div></div>
          <div className="grid grid-cols-2 gap-[2px] md:grid-cols-4 md:gap-3">
            {shown.map(c => <CaptureCard key={c.id} capture={c} selected={selected.includes(c.id)} onSelect={toggle} />)}
          </div>
        </section>
        <aside className="hidden md:block">
          <div className="sticky top-24 space-y-4">
            <section className="rounded-[14px] border border-line bg-white p-5 shadow-soft"><p className="font-display text-[22px] text-ocean">Behind the lens</p><p className="mt-1 text-[13px] font-medium text-ink">Léo Mahé</p><p className="mt-1 text-[11px] text-muted">13 captures</p><div className="mt-4 space-y-2 text-[12px]"><div className="flex justify-between"><span>Photo</span><strong>Rp 75,000</strong></div><div className="flex justify-between"><span>Video</span><strong>Rp 150,000</strong></div><p className="pt-1 text-[10px] text-ocean">−15% from 5 captures</p></div></section>
            <img src={illustrations.homePanorama} alt="" className="h-[180px] w-full object-cover rounded-[14px] mix-blend-multiply" />
          </div>
        </aside>
      </div>
      <section className="mx-4 my-8 rounded-[18px] border border-line bg-white px-5 py-7 text-center md:mx-0 md:py-8"><p className="font-display text-[24px] text-ocean">No one in the water with a camera?</p><p className="mx-auto mt-2 max-w-[560px] text-[12.5px] leading-relaxed text-muted">Tell the photographers who shoot around here that you'll be out. They come, they shoot, their photos land on video.surf.</p><button onClick={() => navigate(`/booking?spot=${spot.slug}`)} className="mt-4 min-h-11 rounded-full bg-coral px-6 text-[12px] font-medium text-white">Book a private session</button></section>
    </main>
    {selected.length > 0 && <div className={`fixed inset-x-0 bottom-0 z-[90] border-t border-line bg-white/96 px-3 py-2.5 shadow-lift backdrop-blur ${isApp ? 'bottom-[72px]' : 'md:bottom-4 md:left-1/2 md:w-[640px] md:-translate-x-1/2 md:rounded-full md:border'}`}><div className="mx-auto flex max-w-[700px] items-center gap-2"><span className="hidden text-[11px] text-muted md:block">{selected.length} selected</span><button onClick={findWaves} className="min-h-11 flex-1 rounded-full bg-coral px-4 text-[11.5px] font-medium text-white">Find my waves</button><button className="min-h-11 rounded-full border border-line bg-white px-4 text-[11px] text-ink"><HeartIcon className="mr-1 inline h-4 w-4" />Save</button><button onClick={() => navigate('/cart')} className="min-h-11 rounded-full border border-line bg-white px-4 text-[11px] text-ink"><ShoppingBagIcon className="mr-1 inline h-4 w-4" />Cart</button></div></div>}
  </div>;
}
