import React, { useState } from 'react';
import { CheckIcon, ChevronRightIcon, CopyIcon, ExternalLinkIcon, PencilIcon, PlusIcon } from 'lucide-react';
import { shoots, bookings, studioStats } from '../data/studio';

const status: Record<string, string> = { live: 'Published', uploading: 'Uploading', processing: 'Processing', draft: 'Draft' };

type Props = { isApp: boolean };

export function Studio({ isApp }: Props) {
  const [copied, setCopied] = useState(false);
  const today = shoots[0];
  const copy = () => { setCopied(true); window.setTimeout(() => setCopied(false), 1400); };

  return (
    <div className={isApp ? 'pb-28' : 'pb-10'}>
      {/* Photographer hero: photography first, illustration only as a subtle brand accent. */}
      <section className="relative mx-auto max-w-[1280px] overflow-hidden border-x border-b border-line bg-white md:mx-4 lg:mx-auto lg:rounded-b-[2px]">
        <div className="absolute inset-0">
          <img src="/video img/imgi_43_keramas.jpeg" alt="Surf session" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#faf6f0] via-[#faf6f0]/90 via-[48%] to-[#faf6f0]/15" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1d2933]/10 to-transparent" />
        </div>
        <div className="relative min-h-[335px] px-5 py-8 md:min-h-[300px] md:px-10 md:py-9 lg:min-h-[315px]">
          <div className="max-w-[600px]">
            <p className="text-[9px] font-medium uppercase tracking-[.18em] text-muted">video.surf / photographer workspace</p>
            <h1 className="mt-3 font-display text-[43px] leading-[.95] tracking-[-.03em] text-ocean md:text-[56px]">Made Surf Shots</h1>
            <p className="mt-4 max-w-[520px] text-[13px] leading-relaxed text-muted md:text-[14px]">Your surf sessions. Their best memories. Manage shoots, publish captures and keep track of your sales.</p>
          </div>

          <div className="absolute bottom-6 left-5 flex gap-2 md:left-10">
            <button className="min-h-11 rounded-full border border-line bg-white px-5 text-[12px] font-medium text-ocean shadow-soft">Public page</button>
            <button className="flex min-h-11 items-center gap-2 rounded-full bg-coral px-6 text-[12px] font-medium text-white shadow-soft"><PlusIcon className="h-4 w-4" /> New shoot</button>
          </div>

          <div className="absolute bottom-0 right-4 hidden items-end gap-3 md:flex lg:right-10">
            <div className="relative h-[205px] w-[250px] overflow-hidden rounded-t-[18px] bg-white/10">
              <img src="/profil and images/imgi_151_cfaq_outcome_Freelance_Photographer.png" alt="Photographer profile" className="absolute bottom-0 left-1/2 h-[225px] w-[225px] -translate-x-1/2 object-contain drop-shadow-[0_12px_20px_rgba(29,41,51,.18)]" />
            </div>
            <button className="mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/80 bg-white/95 text-ocean shadow-soft" aria-label="Edit profile"><PencilIcon className="h-4 w-4" /></button>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-10">
        {/* Mobile keeps the same IA as the reference, but gives it native-sized controls. */}
        <div className="relative z-10 -mt-5 flex justify-center md:hidden">
          <div className="flex w-[320px] rounded-full border border-line bg-white p-1 shadow-lift">
            <button className="min-h-11 flex-1 rounded-full bg-[#e7eef0] text-[13px] font-medium text-ocean">Studio</button>
            <button className="min-h-11 flex-1 rounded-full text-[13px] text-muted">Public page</button>
          </div>
        </div>

        <section className="mt-6 grid grid-cols-3 gap-2 md:mt-7 md:gap-4">
          {[['Captures', studioStats.liveCaptures], ['Views', studioStats.views.toLocaleString('en-US')], ['Sales', `$${studioStats.monthRevenue}`]].map(([label, value]) => (
            <div key={label} className="rounded-[15px] border border-line bg-white px-3 py-4 shadow-soft md:px-5 md:py-5">
              <p className="font-display text-[29px] leading-none text-ocean md:text-[40px]">{value}</p>
              <p className="mt-2 text-[10px] text-muted md:text-[12px]">{label}</p>
            </div>
          ))}
        </section>

        <section className="mt-4 overflow-hidden rounded-[17px] border border-line bg-white shadow-soft md:mt-5">
          <div className="grid md:grid-cols-[260px_1fr] lg:grid-cols-[300px_1fr]">
            <img src={today.image} alt="Latest shoot" className="h-[185px] w-full object-cover md:h-full md:min-h-[190px]" />
            <div className="p-5 md:p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[9px] uppercase tracking-[.16em] text-muted">Today · {today.window}</p>
                  <h2 className="mt-1 font-display text-[25px] text-ocean">{today.spot}</h2>
                  <p className="mt-1 text-[11px] text-muted">{today.captures} captures uploading</p>
                </div>
                <span className="rounded-full bg-coral/10 px-3 py-1.5 text-[10px] text-coral">{status[today.status]}</span>
              </div>
              <div className="mt-6 h-2 rounded-full bg-sandDeep"><div className="h-2 rounded-full bg-coral" style={{ width: `${today.progress ?? 0}%` }} /></div>
              <div className="mt-2 flex justify-between text-[10px] text-muted"><span>{today.progress}% uploaded</span><span>Surfers see it as it lands</span></div>
            </div>
          </div>
        </section>

        <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_340px]">
          <section>
            <div className="flex items-end justify-between">
              <div><h2 className="font-display text-[30px] text-ocean">Recent shoots</h2><p className="mt-1 text-[11.5px] text-muted">Your latest sessions and sales.</p></div>
              <button className="text-[11px] text-ocean">View all <ChevronRightIcon className="ml-1 inline h-3.5 w-3.5 align-[-2px]" /></button>
            </div>

            <div className="mt-3 overflow-hidden rounded-[17px] border border-line bg-white shadow-soft">
              {shoots.slice(1).map((s) => (
                <button key={s.id} className="group flex w-full items-center gap-3 border-b border-line px-3 py-3.5 text-left last:border-b-0 hover:bg-sand md:px-4">
                  <img src={s.image} alt="" className="h-[62px] w-[88px] shrink-0 rounded-[9px] object-cover" />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[13px] font-medium text-ink md:text-[14px]">{s.spot}</p>
                    <p className="mt-1 text-[10.5px] text-muted">{s.date} · {s.captures} captures</p>
                  </div>
                  <div className="hidden text-right md:block"><p className="text-[10.5px] text-muted">{s.views} views</p><p className="mt-1 font-display text-[16px] text-ocean">${s.revenue}</p></div>
                  <span className={`hidden rounded-full px-2.5 py-1 text-[9.5px] sm:block ${s.status === 'live' ? 'bg-[#e7eef0] text-ocean' : 'bg-coral/10 text-coral'}`}>{status[s.status]}</span>
                  <ChevronRightIcon className="h-4 w-4 shrink-0 text-muted transition-transform group-hover:translate-x-0.5" />
                </button>
              ))}
            </div>
          </section>

          <aside className="space-y-5">
            <section className="overflow-hidden rounded-[17px] border border-line bg-white shadow-soft">
              <div className="relative h-[135px] overflow-hidden bg-sandDeep px-4">
                <img src="/illustrations/coastal-line-art.svg" alt="" className="h-full w-full object-contain" />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-4"><div><h2 className="font-display text-[23px] text-ocean">Give your surfers this</h2><p className="mt-1.5 text-[11.5px] leading-relaxed text-muted">Share your public page on the beach so surfers can find their waves later.</p></div><ExternalLinkIcon className="mt-1 h-4 w-4 shrink-0 text-ocean" /></div>
                <div className="mt-4 flex items-center justify-between rounded-[11px] border border-line bg-sand px-3.5 py-2.5"><span className="truncate font-display text-[15px] text-ink">video.surf/madesurfshots</span><button onClick={copy} className="ml-2 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-ocean" aria-label="Copy page link">{copied ? <CheckIcon className="h-4 w-4" /> : <CopyIcon className="h-4 w-4" />}</button></div>
                <p className="mt-2 text-[10px] text-muted">{copied ? 'Link copied.' : 'Your page · your prices · your payouts.'}</p>
              </div>
            </section>

            <section className="rounded-[17px] border border-line bg-white p-5 shadow-soft">
              <div className="flex items-end justify-between"><h2 className="font-display text-[23px] text-ocean">Private sessions</h2><span className="text-[10.5px] text-muted">{bookings.length} booked</span></div>
              <div className="mt-3 space-y-2.5">
                {bookings.map((b) => <div key={b.id} className="flex gap-3 rounded-[11px] bg-sand p-2.5"><img src={b.image} alt="" className="h-[52px] w-[68px] rounded-[8px] object-cover" /><div className="min-w-0 flex-1"><div className="flex justify-between gap-2"><div><p className="text-[11.5px] font-medium">{b.client}</p><p className="mt-0.5 truncate text-[10px] text-muted">{b.spot} · {b.when}</p></div><strong className="font-display text-[15px] text-ocean">${b.price}</strong></div><p className={`mt-1.5 text-[10px] ${b.status === 'Confirmed' ? 'text-ocean' : 'text-coral'}`}>{b.status}</p></div></div>)}
              </div>
              <button className="mt-3 min-h-11 w-full rounded-full border border-line text-[11px] font-medium text-ocean">Set my availability</button>
            </section>
          </aside>
        </div>

        <section className="relative mt-8 hidden overflow-hidden rounded-[17px] border border-line bg-white md:block">
          <div className="grid min-h-[145px] grid-cols-[1fr_420px] items-center">
            <div className="px-7 py-6"><p className="text-[9px] uppercase tracking-[.17em] text-muted">Made Surf Shots</p><h2 className="mt-1 font-display text-[27px] text-ocean">Shoot. Publish. Get paid.</h2><p className="mt-1 max-w-[560px] text-[11.5px] text-muted">A simple workspace for the people behind the lens.</p></div>
            <div className="h-full overflow-hidden bg-sand"><img src="/illustrations/coastal-line-art.svg" alt="" className="h-full w-full object-contain object-right opacity-85" /></div>
          </div>
        </section>
      </main>
    </div>
  );
}
