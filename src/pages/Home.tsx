import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchIcon, ArrowRightIcon, XIcon } from 'lucide-react';
import { SpotMap } from '../components/SpotMap';
import { Wordmark } from '../components/Wordmark';
import { SwellLines, Birds } from '../components/Illustrations';
import { Spot, nearbySpots, spots } from '../data/spots';
import { spotThumbs, illustrations } from '../data/captures';

type HomeProps = {isApp: boolean;};

const MY_COAST: [number, number] = [-8.652, 115.125];
const MY_ZOOM = 12.5;

export function Home({ isApp }: HomeProps) {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [preview, setPreview] = useState<Spot | null>(null);
  const near = nearbySpots();

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return spots.
    filter((s) => `${s.name} ${s.area} ${s.country}`.toLowerCase().includes(q)).
    slice(0, 6);
  }, [query]);

  const enter = (spot: Spot) => navigate(`/spot/${spot.slug}`);

  const rail =
  <div className="flex flex-col">
      {/* On the phone the page carries the wordmark (there is no site header in the app) */}
      <div className="md:hidden">
        <img src="/video-surf-logo.png" alt="video.surf" className="h-[72px] w-auto object-contain object-left" />
      </div>

      <h1 className="mt-6 max-w-[330px] font-display text-[29px] leading-[1.12] tracking-[-0.02em] text-ocean md:mt-0 md:text-[33px]">
        Every wave you rode, shot from the beach.
      </h1>

      <div className="relative mt-5">
        <SearchIcon
        className="pointer-events-none absolute left-4 top-1/2 h-[17px] w-[17px] -translate-y-1/2 text-muted"
        aria-hidden="true" />
      
        <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="search"
        placeholder="Search a spot, a beach, a coast"
        aria-label="Search a spot"
        className="h-12 w-full rounded-full border border-line bg-white pl-11 pr-10 text-[14px] text-ink shadow-soft outline-none transition-colors duration-150 ease-out placeholder:text-muted/80 focus:border-oceanSoft/50" />
      
        {query &&
      <button
        type="button"
        onClick={() => setQuery('')}
        aria-label="Clear search"
        className="absolute right-2 top-1/2 flex h-11 w-9 -translate-y-1/2 items-center justify-center text-muted transition-colors duration-150 ease-out hover:text-ink">
        
            <XIcon className="h-4 w-4" aria-hidden="true" />
          </button>
      }
        {results.length > 0 &&
      <ul className="absolute z-20 mt-2 w-full overflow-hidden rounded-card border border-line bg-white py-1 shadow-lift">
            {results.map((s) =>
        <li key={s.slug}>
                <button
            type="button"
            onClick={() => enter(s)}
            className="flex min-h-[44px] w-full items-center justify-between px-4 text-left transition-colors duration-150 ease-out hover:bg-sand">
            
                  <span className="text-[14px] text-ink">{s.name}</span>
                  <span className="text-[12px] text-muted">
                    {s.area}, {s.country}
                  </span>
                </button>
              </li>
        )}
          </ul>
      }
      </div>

      {/* The two things you can do here. Stated once, plainly, above the map. */}
      <div className="mt-5 grid gap-3">
        <div className="rounded-card border border-line bg-white p-4 shadow-soft">
          <p className="font-display text-[19px] leading-none text-ocean">Find your videos</p>
          <p className="mt-2 text-[13px] leading-relaxed text-muted">
            Open your spot, pick the session you surfed. Watch every wave before you buy.
          </p>
          <p className="mt-2.5 flex items-center gap-1.5 text-[12.5px] text-ink">
            One tap on the map
            <ArrowRightIcon className="h-3.5 w-3.5 text-coral" aria-hidden="true" />
          </p>
        </div>

        <div className="rounded-card border border-line bg-white p-4 shadow-soft">
          <p className="font-display text-[19px] leading-none text-ocean">Book a photographer</p>
          <p className="mt-2 text-[13px] leading-relaxed text-muted">
            A private session at your spot: 40 min, one surfer, all your waves. From $45.
          </p>
          <button
          type="button"
          onClick={() => navigate('/booking')}
          className="mt-3.5 flex min-h-[44px] w-full items-center justify-center rounded-full bg-coral px-5 text-[14px] font-medium text-white transition-transform duration-150 ease-out hover:bg-[#df5c3e] active:scale-[0.985] md:w-auto md:px-6">
          
            Book a session
          </button>
        </div>
      </div>

      <div className="mt-7">
        <div className="flex items-baseline justify-between">
          <h2 className="font-display text-[17px] text-ink">Closest to you</h2>
          <span className="text-[12px] text-muted">Near you · Canggu, Bali</span>
        </div>
        <ul className="mt-2 divide-y divide-line border-y border-line">
          {near.map((s) =>
        <li key={s.slug}>
              <button
            type="button"
            onClick={() => enter(s)}
            onMouseEnter={() => setPreview(s)}
            onMouseLeave={() => setPreview(null)}
            className="flex min-h-[60px] w-full items-center gap-3 py-2.5 text-left transition-colors duration-150 ease-out hover:bg-white">
            
                <img
              src={spotThumbs[s.slug] ?? illustrations.spotThumb}
              alt=""
              className="h-11 w-11 flex-none rounded-[9px] object-cover" />
            
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-[14px] text-ink">{s.name}</span>
                  <span className="block text-[12px] text-muted">
                    {s.captures > 0 ?
                `${s.captures} waves today · ${s.photographers} shooting` :
                'No one shooting yet'}
                  </span>
                </span>
                {s.captures > 0 && <span className="h-[6px] w-[6px] flex-none rounded-full bg-coral" aria-hidden="true" />}
              </button>
            </li>
        )}
        </ul>
        <div className="pointer-events-none relative mt-6 h-[112px] overflow-hidden rounded-card border border-line bg-sandDeep md:mt-8">
          <img
            src="/video-surf-coast-illustration.png"
            alt=""
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-full w-full object-cover object-right opacity-75 mix-blend-multiply"
          />
          <div className="relative z-10 max-w-[190px] px-4 py-3">
            <p className="font-display text-[16px] leading-tight text-ocean">Shot from the shore.</p>
            <p className="mt-1 text-[11.5px] leading-relaxed text-muted">Real sessions, from beaches around the world.</p>
          </div>
        </div>
      </div>
    </div>;


  return (
    <div className="md:flex md:h-[calc(100vh-68px)] md:overflow-hidden">
      {/* Rail: the offer and the shortcuts. The map keeps the space. */}
      <div className="relative md:w-[392px] md:flex-none md:overflow-y-auto md:border-r md:border-line">
        <SwellLines className="pointer-events-none absolute -top-4 right-0 h-28 w-[80%] text-ocean/20 md:hidden" />
        <Birds className="pointer-events-none absolute right-5 top-3 h-7 text-ocean/30 md:hidden" />
        <div className={`relative px-5 pb-6 md:px-8 md:py-10 ${isApp ? 'pt-14' : 'pt-7'}`}>{rail}</div>
      </div>

      {/* The map: real tiles, real pan and zoom, our spots on top. One instance, both layouts. */}
      <div
        className={`relative px-5 md:flex-1 md:px-0 ${isApp ? 'pb-24 md:pb-0' : 'pb-10 md:pb-0'}`}>
        
        <SpotMap
          center={MY_COAST}
          zoom={MY_ZOOM}
          onEnter={enter}
          onPreview={setPreview}
          className="h-[58vh] min-h-[320px] rounded-card border border-line shadow-soft md:h-full md:min-h-0 md:rounded-none md:border-0 md:shadow-none" />
        
        <p className="mt-2.5 text-center text-[12px] text-muted md:hidden">
          Tap a spot to open its sessions.
        </p>

        {preview &&
        <div className="pointer-events-none absolute left-5 top-5 z-[500] hidden w-[268px] overflow-hidden rounded-card border border-line bg-white shadow-lift md:block">
            <img
            src={spotThumbs[preview.slug] ?? illustrations.spotThumb}
            alt=""
            className="h-[116px] w-full object-cover" />
          
            <div className="p-4">
              <p className="font-display text-[20px] leading-none text-ocean">{preview.name}</p>
              <p className="mt-1.5 text-[12.5px] text-muted">
                {preview.area}, {preview.country}
              </p>
              <p className="mt-2.5 text-[12.5px] text-ink">
                {preview.captures > 0 ?
              `${preview.captures} waves today · from $6` :
              'No session yet — ask for a photographer'}
              </p>
            </div>
          </div>
        }
      </div>
    </div>);

}