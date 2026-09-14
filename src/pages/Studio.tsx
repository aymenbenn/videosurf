import React, { useState } from 'react';
import { CheckIcon, ChevronRightIcon, CopyIcon } from 'lucide-react';
import { Wordmark } from '../components/Wordmark';
import { SwellLines } from '../components/Illustrations';
import { bookings, homeSpot, photographerName, shoots, studioStats } from '../data/studio';

type Props = { isApp: boolean };

const status: Record<string, string> = { live: 'Live', uploading: 'Uploading', processing: 'Processing', draft: 'Draft' };

export function Studio({ isApp }: Props) {
  const [copied, setCopied] = useState(false);
  const today = shoots[0];

  const copy = () => {
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className={isApp ? 'pb-24' : 'pb-10'}>
      <header className={`relative overflow-hidden border-b border-line bg-sandDeep ${isApp ? 'pt-11' : ''}`}>
        <img src="/Gemini_Generated_Image_x21v4xx21v4xx21v.jpg" alt="" aria-hidden className="pointer-events-none absolute bottom-0 right-0 h-full w-[48%] object-cover object-left mix-blend-multiply opacity-70 md:w-[38%]" />
        <div className="relative mx-auto max-w-[1280px] px-5 pb-6 pt-5 md:px-8 md:pb-8 md:pt-8 lg:px-10">
          <div className="flex items-center gap-3">
            <Wordmark size="md" />
            <span className="rounded-full border border-line bg-white px-3 py-1.5 text-[11px] font-medium text-ocean">Studio</span>
          </div>
          <div className="mt-5 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <h1 className="font-display text-[38px] leading-none text-ocean md:text-[52px]">Studio</h1>
              <p className="mt-2 text-[13px] text-muted">Your surf sessions. Their best memories.</p>
            </div>
            <div className="flex gap-2">
              <button className="min-h-11 rounded-full border border-line bg-white px-5 text-[12px] text-ocean">Public page</button>
              <button className="min-h-11 rounded-full bg-coral px-6 text-[12px] font-medium text-white">New shoot</button>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1280px] px-5 pt-5 md:px-8 md:pt-7 lg:px-10">
        <div className="grid gap-5 md:grid-cols-[1fr_330px]">
          <div className="min-w-0">
            <section className="grid grid-cols-3 gap-2.5 md:gap-3">
              {[
                ['Captures', studioStats.liveCaptures],
                ['Views', studioStats.views.toLocaleString('en-US')],
                ['Sales', `$${studioStats.monthRevenue}`],
              ].map(([label, value]) => (
                <div key={label} className="rounded-[16px] border border-line bg-white p-4 shadow-soft md:p-5">
                  <p className="font-display text-[27px] leading-none text-ocean md:text-[34px]">{value}</p>
                  <p className="mt-2 text-[10.5px] text-muted md:text-[12px]">{label}</p>
                </div>
              ))}
            </section>

            <section className="mt-4 rounded-[18px] border border-line bg-white p-5 shadow-soft md:p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[10.5px] font-medium uppercase tracking-[.12em] text-muted">Today · {homeSpot}</p>
                  <h2 className="mt-1 font-display text-[23px] text-ocean">{today.spot} shoot</h2>
                  <p className="mt-1 text-[12px] text-muted">{today.window} · {today.captures} captures</p>
                </div>
                <span className="rounded-full bg-coral/10 px-3 py-1.5 text-[11px] text-coral">{status[today.status]}</span>
              </div>
              <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-sandDeep">
                <div className="h-full rounded-full bg-coral" style={{ width: `${today.progress ?? 0}%` }} />
              </div>
              <div className="mt-2 flex justify-between text-[10.5px] text-muted">
                <span>{today.progress}% uploaded</span><span>Surfers see it as soon as it lands</span>
              </div>
            </section>

            <section className="mt-7">
              <div className="flex items-end justify-between">
                <div>
                  <h2 className="font-display text-[25px] text-ocean">Recent shoots</h2>
                  <p className="mt-1 text-[11.5px] text-muted">Your latest sessions and sales.</p>
                </div>
                <button className="flex min-h-10 items-center text-[12px] text-ocean">View all <ChevronRightIcon className="ml-1 h-4 w-4" /></button>
              </div>
              <div className="mt-3 overflow-hidden rounded-[18px] border border-line bg-white shadow-soft">
                {shoots.slice(1).map(s => (
                  <button key={s.id} className="flex min-h-[68px] w-full items-center gap-3 border-b border-line px-4 py-3 text-left last:border-b-0 hover:bg-sand md:px-5">
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[13px] font-medium text-ink">{s.spot}</p>
                      <p className="mt-0.5 text-[10.5px] text-muted">{s.date} · {s.captures} captures</p>
                    </div>
                    <span className="hidden text-[11px] text-muted md:block">{s.views} views</span>
                    <span className="font-display text-[17px] text-ocean">${s.revenue}</span>
                    <span className={`w-[52px] text-right text-[10.5px] ${s.status === 'live' ? 'text-ocean' : 'text-coral'}`}>{status[s.status]}</span>
                  </button>
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-4">
            <section className="rounded-[18px] border border-line bg-white p-5 shadow-soft">
              <p className="font-display text-[22px] text-ocean">Give your surfers this</p>
              <p className="mt-1.5 text-[12px] leading-relaxed text-muted">Say it on the beach. They can find their waves tonight.</p>
              <div className="mt-4 flex items-center justify-between rounded-[12px] border border-line bg-sand px-3.5 py-3">
                <span className="font-display text-[18px] text-ink">video<span className="text-coral">.</span><i>surf</i>/leo</span>
                <button onClick={copy} aria-label="Copy photographer link" className="flex h-10 w-10 items-center justify-center rounded-full text-ocean">
                  {copied ? <CheckIcon className="h-4 w-4" /> : <CopyIcon className="h-4 w-4" />}
                </button>
              </div>
              <p className="mt-2 text-[10.5px] text-muted">{copied ? 'Link copied.' : 'Your page · your prices · your payouts.'}</p>
            </section>

            <section className="rounded-[18px] border border-line bg-white p-5 shadow-soft">
              <div className="flex items-end justify-between">
                <h2 className="font-display text-[22px] text-ocean">Private sessions</h2>
                <span className="text-[10.5px] text-muted">{bookings.length} booked</span>
              </div>
              <div className="mt-3 space-y-3">
                {bookings.map(b => (
                  <div key={b.id} className="rounded-[12px] bg-sand px-3.5 py-3">
                    <div className="flex justify-between gap-3">
                      <div><p className="text-[12px] font-medium text-ink">{b.client}</p><p className="mt-0.5 text-[10.5px] text-muted">{b.spot} · {b.when}</p></div>
                      <span className="font-display text-[16px] text-ocean">${b.price}</span>
                    </div>
                    <p className={`mt-2 text-[10px] ${b.status === 'Confirmed' ? 'text-ocean' : 'text-coral'}`}>{b.status}</p>
                  </div>
                ))}
              </div>
              <button className="mt-3 min-h-11 w-full rounded-full border border-line bg-white text-[12px] text-ocean">Set my availability</button>
            </section>

            <div className="hidden overflow-hidden rounded-[18px] border border-line md:block">
              <img src="/Gemini_Generated_Image_i1mck0i1mck0i1mc.jpg" alt="" className="h-[130px] w-full object-cover mix-blend-multiply opacity-85" />
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
