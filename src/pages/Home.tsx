import React, { useMemo, useState } from 'react';
import { SearchIcon, XIcon, ArrowRightIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SpotMap } from '../components/SpotMap';
import { spots, Spot } from '../data/spots';
import { spotThumbs, illustrations } from '../data/captures';

const CENTER: [number, number] = [-8.66, 115.13];
const ZOOM = 11;

type HomeProps = { isApp: boolean };

export function Home({ isApp }: HomeProps) {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [preview, setPreview] = useState<Spot | null>(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return spots.filter(s => `${s.name} ${s.area} ${s.country}`.toLowerCase().includes(q)).slice(0, 5);
  }, [query]);

  const near = spots.filter(s => ['pererenan', 'echo-beach', 'batu-bolong', 'berawa', 'seseh', 'balian'].includes(s.slug));

  const enter = (spot: Spot) => navigate(`/spot/${spot.slug}`);

  const search = (
    <div className="relative">
      <SearchIcon className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-muted" />
      <input
        value={query}
        onChange={e => setQuery(e.target.value)}
        type="search"
        placeholder="Search a spot, a coast or a country..."
        aria-label="Search a spot"
        className="h-[58px] w-full rounded-full border border-line bg-white pl-14 pr-12 text-[14px] text-ink shadow-soft outline-none placeholder:text-muted/70 focus:border-ocean/50"
      />
      {query && (
        <button onClick={() => setQuery('')} aria-label="Clear search" className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center text-muted">
          <XIcon className="h-4 w-4" />
        </button>
      )}
      {results.length > 0 && (
        <ul className="absolute left-0 right-0 top-[64px] z-[1000] overflow-hidden rounded-[16px] border border-line bg-white shadow-lift">
          {results.map(s => (
            <li key={s.slug}>
              <button onClick={() => enter(s)} className="flex min-h-[48px] w-full items-center justify-between px-5 text-left hover:bg-sand">
                <span className="text-[13px] text-ink">{s.name}</span>
                <span className="text-[11px] text-muted">{s.area} · {s.country}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  return (
    <div className={isApp ? 'pb-24 md:pb-0' : 'pb-8'}>
      <main className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
        {/* Editorial hero */}
        <section className={`relative overflow-hidden rounded-b-[24px] border-x border-b border-line bg-sandDeep ${isApp ? 'pt-12' : ''}`}>
          {isApp && (
            <div className="relative z-20 px-5 pt-2">
              <img src="/imgi_1_logo-f9e815eb.png" alt="video.surf" className="h-[54px] w-auto object-contain" />
            </div>
          )}
          <img src="/Gemini_Generated_Image_r1q4vhr1q4vhr1q4.jpg" alt="" aria-hidden className="pointer-events-none absolute right-0 top-0 h-full w-[52%] object-cover object-right mix-blend-multiply opacity-80 md:w-[45%]" style={{maskImage:"linear-gradient(to right, transparent 0%, black 35%, black 100%)", WebkitMaskImage:"linear-gradient(to right, transparent 0%, black 35%, black 100%)"}} />
          <div className="relative grid min-h-[350px] items-end gap-8 px-6 pb-7 pt-12 md:grid-cols-[1fr_390px] md:px-10 md:pb-9 md:pt-16">
            <div className="max-w-[590px]">
              <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-ocean/75">Shot from the beach · Around the world</p>
              <h1 className="mt-4 max-w-[590px] font-display text-[42px] leading-[.98] tracking-[-.025em] text-ocean md:text-[64px]">
                Find the waves<br className="hidden md:block" /> you surfed.
              </h1>
              <p className="mt-4 max-w-[470px] text-[14px] leading-relaxed text-muted md:text-[15px]">
                Browse photos and videos captured from the beach. Find your session in a few taps.
              </p>
              <div className="mt-6 flex flex-wrap gap-2.5">
                <button onClick={() => document.getElementById('map')?.scrollIntoView({ behavior: 'smooth' })} className="min-h-11 rounded-full bg-coral px-6 text-[13px] font-medium text-white hover:bg-[#df5c3e]">
                  Find my spot
                </button>
                <button onClick={() => navigate('/booking')} className="min-h-11 rounded-full border border-line bg-white px-6 text-[13px] font-medium text-ocean hover:bg-sand">
                  Book a photographer
                </button>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-auto max-w-[390px] rounded-[18px] border border-line/80 bg-white/90 p-4 shadow-soft backdrop-blur">
                <p className="font-display text-[22px] text-ocean">Your session, waiting.</p>
                <p className="mt-1 text-[12.5px] leading-relaxed text-muted">Open a spot, choose a wave, and let “Find your waves” bring the rest back.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Map is the product, not a background illustration */}
        <section id="map" className="relative mt-4 overflow-hidden rounded-[24px] border border-line bg-[#e6f0ee] shadow-soft">
          <div className="absolute left-4 right-4 top-4 z-[600] md:left-8 md:right-8 md:top-6">
            <div className="mx-auto max-w-[650px]">{search}</div>
          </div>
          <SpotMap center={CENTER} zoom={ZOOM} onEnter={enter} onPreview={setPreview} className="h-[590px] md:h-[610px]" />
          {preview && (
            <div className="pointer-events-none absolute bottom-5 left-5 z-[600] hidden w-[280px] overflow-hidden rounded-[18px] border border-line bg-white shadow-lift md:block">
              <img src={spotThumbs[preview.slug] ?? illustrations.spotThumb} alt="" className="h-[118px] w-full object-cover" />
              <div className="p-4">
                <p className="font-display text-[22px] text-ocean">{preview.name}</p>
                <p className="text-[12px] text-muted">{preview.area} · {preview.country}</p>
                <p className="mt-2 text-[12px] text-ink">{preview.captures ? `${preview.captures} captures · tap to open` : 'No session yet'}</p>
              </div>
            </div>
          )}
          <div className="pointer-events-none absolute bottom-4 left-4 z-[600] rounded-full bg-sand/90 px-3 py-1.5 text-[10px] text-muted backdrop-blur md:left-auto md:right-4">
            Pan · zoom · choose any coast
          </div>
        </section>

        {/* Clear, compact supporting offers */}
        <section className="mt-4 grid gap-3 md:grid-cols-2">
          <button onClick={() => document.getElementById('map')?.scrollIntoView({ behavior: 'smooth' })} className="group rounded-[20px] border border-line bg-white p-5 text-left shadow-soft transition hover:-translate-y-0.5">
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="font-display text-[24px] text-ocean">Find your videos</p>
                <p className="mt-1.5 max-w-[460px] text-[13px] leading-relaxed text-muted">Open your spot, pick the session you surfed, then watch every wave before you buy.</p>
              </div>
              <span className="mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full bg-sand text-ocean group-hover:bg-ocean group-hover:text-white"><ArrowRightIcon className="h-4 w-4" /></span>
            </div>
          </button>
          <button onClick={() => navigate('/booking')} className="group rounded-[20px] border border-line bg-white p-5 text-left shadow-soft transition hover:-translate-y-0.5">
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="font-display text-[24px] text-ocean">Book a photographer</p>
                <p className="mt-1.5 max-w-[460px] text-[13px] leading-relaxed text-muted">A private session at your spot: 40 min, one surfer, all your waves. From $45.</p>
              </div>
              <span className="mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full bg-coral text-white group-hover:bg-ocean"><ArrowRightIcon className="h-4 w-4" /></span>
            </div>
          </button>
        </section>

        <section className="mt-8 pb-4">
          <div className="flex items-end justify-between">
            <div>
              <p className="font-display text-[26px] text-ocean">Closest spots</p>
              <p className="mt-1 text-[12px] text-muted">Start with the beaches near you.</p>
            </div>
            <span className="hidden text-[12px] text-muted md:block">Canggu, Bali</span>
          </div>
          <div className="no-scrollbar mt-3 flex gap-3 overflow-x-auto pb-2">
            {near.map(s => (
              <button key={s.slug} onClick={() => enter(s)} className="w-[230px] flex-none overflow-hidden rounded-[18px] border border-line bg-white text-left shadow-soft">
                <img src={spotThumbs[s.slug] ?? illustrations.spotThumb} alt="" className="h-[120px] w-full object-cover" />
                <div className="p-3.5">
                  <p className="font-display text-[20px] text-ocean">{s.name}</p>
                  <p className="mt-0.5 text-[11.5px] text-muted">{s.area} · {s.captures} captures</p>
                </div>
              </button>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
