import React from 'react';
import { CopyIcon, CheckIcon, ChevronRightIcon } from 'lucide-react';
import { Wordmark } from '../components/Wordmark';
import { SwellLines, Birds, WaveRule } from '../components/Illustrations';
import { bookings, homeSpot, photographerName, shoots, studioStats } from '../data/studio';

type StudioProps = {isApp: boolean;};

const statusStyle: Record<string, string> = {
  live: 'text-ocean',
  uploading: 'text-coral',
  processing: 'text-coral',
  draft: 'text-muted'
};

const statusLabel: Record<string, string> = {
  live: 'Live',
  uploading: 'Uploading',
  processing: 'Processing',
  draft: 'Draft'
};

export function Studio({ isApp }: StudioProps) {
  const [copied, setCopied] = React.useState(false);
  const today = shoots[0];

  const copy = () => {
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };

  return (
    <div className={isApp ? 'pb-28 md:pb-0' : 'pb-14'}>
      {/* Workspace header: same sand, same ink lines as the rest of the product */}
      <header className="relative overflow-hidden border-b border-line bg-sandDeep">
        <SwellLines className="pointer-events-none absolute bottom-0 right-0 h-[76%] w-[92%] text-ocean/28" />
        <Birds className="pointer-events-none absolute right-8 top-6 hidden h-7 text-ocean/35 md:block" />
        <div className={`relative mx-auto w-full max-w-[1280px] px-5 pb-7 md:flex md:items-end md:justify-between md:gap-10 md:px-10 md:pb-9 md:pt-9 ${isApp ? 'pt-14' : 'pt-7'}`}>
          <div>
            {/* The photographer always has the name in front of them — they give it on the beach */}
            <div className="flex items-center gap-2.5">
              <Wordmark size={isApp ? 'md' : 'sm'} />
              <span className="mt-0.5 self-center rounded-full border border-line bg-white px-2.5 py-1 text-[11.5px] tracking-[0.01em] text-ocean">
                Studio
              </span>
            </div>
            <h1 className="mt-5 font-display text-[30px] leading-[1.08] tracking-[-0.02em] text-ocean md:text-[38px]">
              Morning, {photographerName.split(' ')[0]}
            </h1>
            <p className="mt-2 text-[13.5px] text-muted">
              {homeSpot} · shooting since 06:10 · 2 sessions this week
            </p>
          </div>

          <div className="mt-6 flex items-center gap-2.5 md:mt-0">
            <button
              type="button"
              className="flex min-h-[44px] items-center rounded-full border border-line bg-white px-5 text-[14px] text-ocean shadow-soft transition-colors duration-150 ease-out hover:bg-sand">
              
              Public page
            </button>
            <button
              type="button"
              className="flex min-h-[44px] flex-1 items-center justify-center rounded-full bg-coral px-6 text-[14px] font-medium text-white transition-transform duration-150 ease-out hover:bg-[#df5c3e] active:scale-[0.985] md:flex-none">
              
              New shoot
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-[1280px] px-5 pt-7 md:grid md:grid-cols-[1fr_320px] md:items-start md:gap-8 md:px-10 md:pt-9">
        <div>
          {/* What matters every morning: is today's session up, and what did the month earn */}
          <section className="rounded-card border border-line bg-white p-5 shadow-soft md:p-6">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-[12.5px] text-muted">This month</p>
                <p className="mt-1 font-display text-[42px] leading-none text-ink md:text-[52px]">
                  ${studioStats.monthRevenue}
                </p>
                <p className="mt-2 text-[12.5px] text-muted">
                  {studioStats.monthDelta} · {studioStats.payoutDate}
                </p>
              </div>
              <dl className="grid grid-cols-3 gap-x-6 gap-y-1 text-right md:text-left">
                {[
                ['Sales', String(studioStats.sales)],
                ['Views', studioStats.views.toLocaleString('en-US')],
                ['Conversion', studioStats.conversion]].
                map(([label, value]) =>
                <div key={label}>
                    <dt className="text-[11.5px] text-muted">{label}</dt>
                    <dd className="font-display text-[19px] leading-tight text-ocean">{value}</dd>
                  </div>
                )}
              </dl>
            </div>
          </section>

          {/* Today's upload, with its real state */}
          <section className="mt-4 rounded-card border border-line bg-white p-5 shadow-soft">
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="font-display text-[19px] leading-none text-ocean">
                {today.spot} · {today.date}
              </h2>
              <span className={`text-[12.5px] ${statusStyle[today.status]}`}>
                {statusLabel[today.status]}
              </span>
            </div>
            <p className="mt-2 text-[13px] text-muted">
              {today.window} · {today.captures} captures · priced at $9 per clip
            </p>
            <div className="mt-4 h-[6px] w-full overflow-hidden rounded-full bg-sandDeep">
              <div
                className="h-full rounded-full bg-coral transition-[width] duration-300 ease-out"
                style={{ width: `${today.progress ?? 0}%` }}
                role="progressbar"
                aria-valuenow={today.progress ?? 0}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label="Upload progress" />
              
            </div>
            <p className="mt-2 text-[12px] text-muted">
              {today.progress}% uploaded — surfers see the session as soon as it lands.
            </p>
          </section>

          <section className="mt-8">
            <div className="flex items-baseline justify-between">
              <h2 className="font-display text-[19px] text-ink">Recent shoots</h2>
              <button
                type="button"
                className="flex min-h-[36px] items-center gap-1 text-[13px] text-ocean transition-colors duration-150 ease-out hover:text-ink">
                
                All shoots
                <ChevronRightIcon className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
            </div>

            <ul className="mt-3 divide-y divide-line overflow-hidden rounded-card border border-line bg-white">
              {shoots.slice(1).map((s) =>
              <li key={s.id}>
                  <button
                  type="button"
                  className="flex min-h-[64px] w-full items-center gap-4 px-4 py-3 text-left transition-colors duration-150 ease-out hover:bg-sand">
                  
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-[14px] text-ink">{s.spot}</span>
                      <span className="block text-[12px] text-muted">
                        {s.date} · {s.window} · {s.captures} captures
                      </span>
                    </span>
                    <span className="hidden w-[72px] flex-none text-right text-[12.5px] text-muted md:block">
                      {s.views} views
                    </span>
                    <span className="hidden w-[64px] flex-none text-right text-[12.5px] text-muted md:block">
                      {s.sales} sales
                    </span>
                    <span className="w-[68px] flex-none text-right font-display text-[17px] text-ocean">
                      ${s.revenue}
                    </span>
                    <span className={`w-[64px] flex-none text-right text-[11.5px] ${statusStyle[s.status]}`}>
                      {statusLabel[s.status]}
                    </span>
                  </button>
                </li>
              )}
            </ul>
          </section>
        </div>

        {/* Side column: the two things they do from the beach */}
        <aside className="mt-8 md:mt-0">
          <section className="rounded-card border border-line bg-white p-5 shadow-soft">
            <h2 className="font-display text-[19px] leading-none text-ocean">Give your surfers this</h2>
            <p className="mt-2 text-[13px] leading-relaxed text-muted">
              Say it on the beach, they find their waves tonight.
            </p>
            <div className="mt-3.5 flex items-center justify-between gap-3 rounded-[11px] border border-line bg-sand px-4 py-3">
              <span className="font-display text-[19px] leading-none text-ink">
                video<span className="text-coral">.</span>
                <span className="italic">surf</span>
                <span className="font-sans text-[13px] font-normal text-muted">/leo</span>
              </span>
              <button
                type="button"
                onClick={copy}
                aria-label="Copy your link"
                className="flex h-11 w-11 flex-none items-center justify-center rounded-full text-muted transition-colors duration-150 ease-out hover:text-ink">
                
                {copied ?
                <CheckIcon className="h-[17px] w-[17px] text-ocean" aria-hidden="true" /> :

                <CopyIcon className="h-[17px] w-[17px]" aria-hidden="true" />
                }
              </button>
            </div>
            <p className="mt-2 text-[12px] text-muted" aria-live="polite">
              {copied ? 'Link copied.' : 'Your page, your prices, your payouts.'}
            </p>
          </section>

          <section className="mt-4 rounded-card border border-line bg-white p-5 shadow-soft">
            <div className="flex items-baseline justify-between">
              <h2 className="font-display text-[19px] leading-none text-ocean">Private sessions</h2>
              <span className="text-[12px] text-muted">{bookings.length} booked</span>
            </div>
            <ul className="mt-3 divide-y divide-line">
              {bookings.map((b) =>
              <li key={b.id} className="flex items-center justify-between gap-3 py-3 first:pt-0 last:pb-0">
                  <span className="min-w-0">
                    <span className="block truncate text-[13.5px] text-ink">{b.client}</span>
                    <span className="block text-[12px] text-muted">
                      {b.spot} · {b.when}
                    </span>
                  </span>
                  <span className="flex-none text-right">
                    <span className="block font-display text-[17px] leading-none text-ocean">${b.price}</span>
                    <span
                    className={`block text-[11px] ${b.status === 'Confirmed' ? 'text-muted' : 'text-coral'}`}>
                    
                      {b.status}
                    </span>
                  </span>
                </li>
              )}
            </ul>
            <button
              type="button"
              className="mt-4 flex min-h-[44px] w-full items-center justify-center rounded-full border border-line bg-white px-5 text-[14px] text-ocean transition-colors duration-150 ease-out hover:bg-sand">
              
              Set my availability
            </button>
          </section>

          <div className="mt-6 flex justify-center md:justify-start">
            <WaveRule className="h-3 w-[180px] text-ocean/30" />
          </div>
        </aside>
      </main>
    </div>);

}