import React, { useMemo, useState } from 'react';
import { SearchIcon, XIcon, ArrowRightIcon, LocateFixedIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SpotMap } from '../components/SpotMap';
import { spots, Spot } from '../data/spots';
import { spotThumbs, illustrations } from '../data/captures';

const CENTER: [number, number] = [-8.66, 115.13];
const ZOOM = 11;
type Props = { isApp: boolean };

export function Home({ isApp }: Props) {
  const navigate = useNavigate(); const [query, setQuery] = useState(''); const [preview, setPreview] = useState<Spot | null>(null);
  const results = useMemo(() => { const q = query.trim().toLowerCase(); return q ? spots.filter(s => `${s.name} ${s.area} ${s.country}`.toLowerCase().includes(q)).slice(0, 5) : []; }, [query]);
  const near = spots.filter(s => ['pererenan','echo-beach','batu-bolong','berawa','seseh','balian'].includes(s.slug));
  const search = <div className="relative"><SearchIcon className="pointer-events-none absolute left-5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" /><input value={query} onChange={e => setQuery(e.target.value)} type="search" placeholder="Search a spot, a coast or a country..." aria-label="Search a spot" className="h-[54px] w-full rounded-full border border-ocean/60 bg-white px-12 text-[13px] text-ink shadow-soft outline-none placeholder:text-muted/70 focus:border-ocean" />{query && <button onClick={() => setQuery('')} className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center text-muted" aria-label="Clear search"><XIcon className="h-4 w-4" /></button>}{results.length > 0 && <ul className="absolute left-0 right-0 top-[60px] z-[1000] overflow-hidden rounded-[16px] border border-line bg-white shadow-lift">{results.map(s => <li key={s.slug}><button onClick={() => navigate(`/spot/${s.slug}`)} className="flex min-h-[48px] w-full items-center justify-between px-5 text-left hover:bg-sand"><span className="text-[12px]">{s.name}</span><span className="text-[10px] text-muted">{s.area} · {s.country}</span></button></li>)}</ul>}</div>;

  return <div className={isApp ? 'pb-24' : 'pb-8'}>
    <main className="mx-auto max-w-[1280px] px-0 md:px-8 lg:px-10">
      <section className="relative min-h-[360px] overflow-hidden border-b border-line bg-sandDeep md:rounded-b-[22px]">
        <img src={illustrations.homeBand} alt="" aria-hidden className="pointer-events-none absolute bottom-0 right-0 h-[310px] w-[68%] object-contain object-right mix-blend-multiply md:h-[390px] md:w-[63%]" />
        <div className="relative z-10 max-w-[700px] px-5 pb-7 pt-9 md:px-8 md:pb-8 md:pt-10">
          <h1 className="font-display text-[40px] leading-[.98] tracking-[-.03em] text-ocean md:text-[58px]">Find your videos<br className="hidden md:block" /> from the waves you surfed.</h1>
          <p className="mt-4 max-w-[480px] text-[13px] leading-relaxed text-muted md:text-[14px]">Browse photos and videos captured from the beach. Find your session, save your waves, and download them in HD.</p>
          <div className="mt-5 flex flex-wrap gap-2.5"><button onClick={() => document.getElementById('map')?.scrollIntoView({behavior:'smooth'})} className="min-h-11 rounded-full bg-coral px-6 text-[12px] font-medium text-white">Find my spot</button><button onClick={() => navigate('/booking')} className="min-h-11 rounded-full border border-line bg-white px-6 text-[12px] font-medium text-ocean">Book a photographer</button></div>
        </div>
        <div className="pointer-events-none absolute bottom-4 right-5 hidden font-display text-[16px] italic text-ocean/80 md:block">Same waves. New perspectives.</div>
      </section>

      <section id="map" className="relative mt-3 overflow-hidden md:rounded-[22px] md:border md:border-line md:shadow-soft">
        <div className="absolute left-4 right-4 top-4 z-[600] md:left-8 md:right-8 md:top-5"><div className="mx-auto max-w-[660px]">{search}</div></div>
        <div className="absolute right-4 top-[76px] z-[600] md:left-8 md:right-auto md:top-[88px]"><button className="flex h-10 items-center gap-2 rounded-full border border-line bg-white px-4 text-[11px] text-ocean shadow-soft"><LocateFixedIcon className="h-3.5 w-3.5" /> Near me</button></div>
        <SpotMap center={CENTER} zoom={ZOOM} onEnter={s => navigate(`/spot/${s.slug}`)} onPreview={setPreview} className="h-[520px] md:h-[610px]" />
        {preview && <div className="pointer-events-none absolute bottom-5 left-5 z-[600] hidden w-[270px] overflow-hidden rounded-[16px] border border-line bg-white shadow-lift md:block"><img src={spotThumbs[preview.slug] ?? illustrations.spotThumb} alt="" className="h-[110px] w-full object-cover" /><div className="p-4"><p className="font-display text-[22px] text-ocean">{preview.name}</p><p className="text-[11px] text-muted">{preview.area} · {preview.country}</p><p className="mt-1.5 text-[11px] text-ink">{preview.captures} captures</p></div></div>}
      </section>

      <section className="grid gap-3 px-4 pt-4 md:grid-cols-2 md:px-0"><button onClick={() => document.getElementById('map')?.scrollIntoView({behavior:'smooth'})} className="group rounded-[18px] border border-line bg-white p-5 text-left shadow-soft"><div className="flex items-start justify-between gap-4"><div><p className="font-display text-[24px] text-ocean">Find your videos</p><p className="mt-1.5 text-[12px] leading-relaxed text-muted">Open your spot, choose a wave you recognize, then find the rest.</p></div><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sand text-ocean"><ArrowRightIcon className="h-4 w-4" /></span></div></button><button onClick={() => navigate('/booking')} className="group rounded-[18px] border border-line bg-white p-5 text-left shadow-soft"><div className="flex items-start justify-between gap-4"><div><p className="font-display text-[24px] text-ocean">Book a photographer</p><p className="mt-1.5 text-[12px] leading-relaxed text-muted">Private session at your spot. One surfer, all your waves.</p></div><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-coral text-white"><ArrowRightIcon className="h-4 w-4" /></span></div></button></section>

      <section className="px-4 pb-4 pt-8 md:px-0"><div className="flex items-end justify-between"><div><h2 className="font-display text-[26px] text-ocean">Closest spots</h2><p className="mt-1 text-[11.5px] text-muted">Start with the beaches near you.</p></div></div><div className="no-scrollbar mt-3 flex gap-3 overflow-x-auto pb-2">{near.map(s => <button key={s.slug} onClick={() => navigate(`/spot/${s.slug}`)} className="w-[220px] flex-none overflow-hidden rounded-[16px] border border-line bg-white text-left shadow-soft"><img src={spotThumbs[s.slug] ?? illustrations.spotThumb} alt="" className="h-[115px] w-full object-cover" /><div className="p-3.5"><p className="font-display text-[19px] text-ocean">{s.name}</p><p className="mt-0.5 text-[10.5px] text-muted">{s.area} · {s.captures} captures</p></div></button>)}</div></section>
    </main>
  </div>;
}
