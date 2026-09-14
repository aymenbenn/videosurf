import React, { useState } from 'react';
import { CheckIcon, ChevronRightIcon, CopyIcon, ExternalLinkIcon, UploadCloudIcon, CameraIcon, EyeIcon, WalletCardsIcon } from 'lucide-react';
import { Wordmark } from '../components/Wordmark';
import { bookings, shoots, studioStats } from '../data/studio';

type Props = { isApp: boolean };
const status: Record<string, string> = { live: 'Live', uploading: 'Uploading', processing: 'Processing', draft: 'Draft' };

export function Studio({ isApp }: Props) {
  const [copied, setCopied] = useState(false);
  const today = shoots[0];
  const copy = () => { setCopied(true); window.setTimeout(() => setCopied(false), 1500); };

  return (
    <div className={isApp ? 'pb-24' : 'pb-10'}>
      <section className={`relative overflow-hidden border-b border-line bg-[#eee7db] ${isApp ? 'pt-11' : ''}`}>
        <div className="absolute inset-0">
          <img src="/Gemini_Generated_Image_x21v4xx21v4xx21v.jpg" alt="" aria-hidden className="h-full w-full object-cover object-center opacity-100" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#faf6f0]/95 via-[#faf6f0]/82 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-[1280px] px-5 pb-8 pt-6 md:px-8 md:pb-10 md:pt-8 lg:px-10">
          <div className="flex items-center gap-3">
            <Wordmark size="md" />
            <span className="rounded-full border border-line bg-white/90 px-3 py-1.5 text-[11px] font-medium text-ocean">Studio</span>
          </div>
          <div className="mt-8 max-w-[570px]">
            <p className="text-[11px] font-medium uppercase tracking-[.18em] text-muted">video.surf / photographer workspace</p>
            <h1 className="mt-2 font-display text-[42px] leading-[.95] text-ocean md:text-[58px]">Studio</h1>
            <p className="mt-3 max-w-[430px] text-[13px] leading-relaxed text-muted md:text-[14px]">Your surf sessions. Their best memories. Everything you need to publish from the beach.</p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              <button className="min-h-11 rounded-full border border-line bg-white px-5 text-[12px] font-medium text-ocean shadow-soft">Public page <ExternalLinkIcon className="ml-1.5 inline h-3.5 w-3.5" /></button>
              <button className="min-h-11 rounded-full bg-coral px-6 text-[12px] font-medium text-white shadow-soft">New shoot <UploadCloudIcon className="ml-1.5 inline h-3.5 w-3.5" /></button>
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-[1280px] px-5 pt-5 md:px-8 md:pt-7 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_330px]">
          <div className="min-w-0">
            <section className="grid grid-cols-3 gap-2.5 md:gap-4">
              {[
                ['Captures', studioStats.liveCaptures, CameraIcon],
                ['Views', studioStats.views.toLocaleString('en-US'), EyeIcon],
                ['Sales', `$${studioStats.monthRevenue}`, WalletCardsIcon],
              ].map(([label, value, Icon]) => {
                const I = Icon as React.ComponentType<{ className?: string }>;
                return <div key={label as string} className="rounded-[16px] border border-line bg-white p-4 shadow-soft md:p-5">
                  <I className="h-4 w-4 text-ocean" />
                  <p className="mt-3 font-display text-[26px] leading-none text-ocean md:text-[34px]">{value as string}</p>
                  <p className="mt-2 text-[10.5px] text-muted md:text-[12px]">{label as string}</p>
                </div>;
              })}
            </section>

            <section className="mt-5 overflow-hidden rounded-[18px] border border-line bg-white shadow-soft">
              <div className="grid md:grid-cols-[180px_minmax(0,1fr)]">
                <img src={today.image} alt="Latest surf session" className="h-[150px] w-full object-cover md:h-full" />
                <div className="p-5 md:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div><p className="text-[10.5px] font-medium uppercase tracking-[.12em] text-muted">Today · {today.window}</p><h2 className="mt-1 font-display text-[24px] text-ocean">{today.spot} shoot</h2><p className="mt-1 text-[12px] text-muted">{today.captures} captures ready to publish</p></div>
                    <span className="shrink-0 rounded-full bg-coral/10 px-3 py-1.5 text-[10.5px] text-coral">{status[today.status]}</span>
                  </div>
                  <div className="mt-5 h-2 overflow-hidden rounded-full bg-sandDeep"><div className="h-full rounded-full bg-coral" style={{ width: `${today.progress ?? 0}%` }} /></div>
                  <div className="mt-2 flex justify-between text-[10.5px] text-muted"><span>{today.progress}% uploaded</span><span>Visible to surfers as it lands</span></div>
                </div>
              </div>
            </section>

            <section className="mt-8">
              <div className="flex items-end justify-between"><div><h2 className="font-display text-[27px] text-ocean">Recent shoots</h2><p className="mt-1 text-[11.5px] text-muted">Sessions, captures and sales at a glance.</p></div><button className="flex min-h-10 items-center text-[12px] text-ocean">View all <ChevronRightIcon className="ml-1 h-4 w-4" /></button></div>
              <div className="mt-3 overflow-hidden rounded-[18px] border border-line bg-white shadow-soft">
                {shoots.slice(1).map(s => <button key={s.id} className="group flex min-h-[82px] w-full items-center gap-3 border-b border-line px-3 py-3 text-left last:border-b-0 hover:bg-sand md:px-4">
                  <img src={s.image} alt="" className="h-[56px] w-[78px] shrink-0 rounded-[10px] object-cover" />
                  <div className="min-w-0 flex-1"><p className="truncate text-[13px] font-medium text-ink md:text-[14px]">{s.spot}</p><p className="mt-1 text-[10.5px] text-muted">{s.date} · {s.captures} captures</p></div>
                  <span className="hidden text-[11px] text-muted xl:block">{s.views} views</span><span className="font-display text-[17px] text-ocean">${s.revenue}</span><span className={`w-[44px] text-right text-[10.5px] ${s.status === 'live' ? 'text-ocean' : 'text-coral'}`}>{status[s.status]}</span><ChevronRightIcon className="h-4 w-4 text-muted" />
                </button>)}
              </div>
            </section>
          </div>

          <aside className="space-y-5">
            <section className="overflow-hidden rounded-[18px] border border-line bg-white shadow-soft">
              <div className="relative h-[126px] bg-[#eee7db]"><img src="/Gemini_Generated_Image_i1mck0i1mck0i1mc.jpg" alt="" className="h-full w-full object-cover" /></div>
              <div className="p-5"><p className="font-display text-[22px] text-ocean">Give your surfers this</p><p className="mt-1.5 text-[12px] leading-relaxed text-muted">Say it on the beach. They can find their waves tonight.</p>
                <div className="mt-4 flex items-center justify-between rounded-[12px] border border-line bg-sand px-3.5 py-3"><span className="font-display text-[17px] text-ink">video<span className="text-coral">.</span><i>surf</i>/leo</span><button onClick={copy} aria-label="Copy photographer link" className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-ocean">{copied ? <CheckIcon className="h-4 w-4" /> : <CopyIcon className="h-4 w-4" />}</button></div>
                <p className="mt-2 text-[10.5px] text-muted">{copied ? 'Link copied.' : 'Your page · your prices · your payouts.'}</p>
              </div>
            </section>

            <section className="rounded-[18px] border border-line bg-white p-5 shadow-soft"><div className="flex items-end justify-between"><h2 className="font-display text-[22px] text-ocean">Private sessions</h2><span className="text-[10.5px] text-muted">{bookings.length} booked</span></div>
              <div className="mt-3 space-y-3">{bookings.map(b => <div key={b.id} className="flex gap-3 rounded-[12px] bg-sand p-2.5"><img src={b.image} alt="" className="h-[54px] w-[68px] shrink-0 rounded-[9px] object-cover" /><div className="min-w-0 flex-1"><div className="flex justify-between gap-2"><div><p className="text-[12px] font-medium text-ink">{b.client}</p><p className="mt-0.5 truncate text-[10.5px] text-muted">{b.spot} · {b.when}</p></div><span className="font-display text-[16px] text-ocean">${b.price}</span></div><p className={`mt-2 text-[10px] ${b.status === 'Confirmed' ? 'text-ocean' : 'text-coral'}`}>{b.status}</p></div></div>)}</div>
              <button className="mt-3 min-h-11 w-full rounded-full border border-line bg-white text-[12px] font-medium text-ocean">Set my availability</button>
            </section>
          </aside>
        </div>
      </main>
    </div>
  );
}
