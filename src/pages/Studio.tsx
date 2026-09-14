import React, { useState } from 'react';
import { CheckIcon, ChevronRightIcon, CopyIcon } from 'lucide-react';
import { shoots, bookings, studioStats } from '../data/studio';
import { illustrations } from '../data/captures';

type Props = { isApp: boolean };
const status: Record<string,string> = { live:'Live', uploading:'Uploading', processing:'Processing', draft:'Draft' };

export function Studio({ isApp }: Props) {
  const [copied,setCopied]=useState(false); const today=shoots[0];
  const copy=()=>{setCopied(true);window.setTimeout(()=>setCopied(false),1400)};
  return <div className={isApp?'pb-24':'pb-8'}>
    <section className="relative overflow-hidden bg-sandDeep md:mx-auto md:max-w-[1280px] md:border-x md:border-b md:border-line">
      <div className="absolute inset-0"><img src="/imgi_46_playgrounds.jpeg" alt="Surf session" className="h-full w-full object-cover"/><div className="absolute inset-0 bg-gradient-to-r from-sand via-sand/80 to-sand/20"/></div>
      <div className="relative mx-auto min-h-[365px] max-w-[1280px] px-5 pb-8 pt-8 md:min-h-[300px] md:px-8 md:pt-8 lg:px-10">
        <div className="max-w-[570px]"><p className="text-[10px] font-medium uppercase tracking-[.16em] text-muted">video.surf / photographer workspace</p><h1 className="mt-3 font-display text-[44px] leading-[.95] text-ocean md:text-[56px]">Made Surf Shots</h1><p className="mt-3 max-w-[460px] text-[13px] leading-relaxed text-muted">Your surf sessions. Their best memories. Manage shoots, publish captures and keep track of your sales.</p></div>
        <div className="absolute bottom-5 right-5 flex items-end gap-2 md:right-8"><img src="/imgi_43_keramas.jpeg" alt="Recent surf" className="h-[150px] w-[105px] rounded-[12px] object-cover shadow-lift md:h-[185px] md:w-[130px]"/><button className="mb-1 flex h-12 w-12 items-center justify-center rounded-full border border-white/80 bg-white/90 text-ocean shadow-soft" aria-label="Edit profile">✎</button></div>
        <div className="absolute bottom-6 left-5 flex gap-2 md:left-auto md:right-[170px]"><button className="min-h-11 rounded-full border border-line bg-white px-5 text-[12px] font-medium text-ocean shadow-soft">Public page</button><button className="min-h-11 rounded-full bg-coral px-6 text-[12px] font-medium text-white shadow-soft">New shoot</button></div>
      </div>
      <div className="relative z-20 -mt-1 flex justify-center px-5 md:hidden">
        <div className="flex w-full max-w-[360px] rounded-full border border-line bg-white p-1 shadow-lift">
          <button className="min-h-11 flex-1 rounded-full bg-[#e7eef0] text-[13px] font-medium text-ocean">Studio</button>
          <button className="min-h-11 flex-1 rounded-full text-[13px] text-muted">Public page</button>
        </div>
      </div>
    </section>

    <main className="mx-auto max-w-[1280px] px-5 pt-5 md:px-8 md:pt-7 lg:px-10">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_330px]">
        <div>
          <section className="grid grid-cols-3 gap-2 md:gap-4">{[['Captures',studioStats.liveCaptures],['Views',studioStats.views.toLocaleString('en-US')],['Sales',`$${studioStats.monthRevenue}`]].map(([label,value])=><div key={label} className="rounded-[14px] border border-line bg-white p-4 shadow-soft md:p-5"><p className="font-display text-[30px] leading-none text-ocean md:text-[38px]">{value}</p><p className="mt-2 text-[10.5px] text-muted md:text-[12px]">{label}</p></div>)}</section>
          <section className="mt-5 overflow-hidden rounded-[16px] border border-line bg-white shadow-soft"><div className="grid md:grid-cols-[220px_1fr]"><img src={today.image} alt="Latest shoot" className="h-[155px] w-full object-cover md:h-full"/><div className="p-5 md:p-6"><div className="flex justify-between gap-3"><div><p className="text-[10px] uppercase tracking-[.14em] text-muted">Today · {today.window}</p><h2 className="mt-1 font-display text-[24px] text-ocean">{today.spot}</h2><p className="mt-1 text-[11.5px] text-muted">{today.captures} captures uploading</p></div><span className="rounded-full bg-coral/10 px-3 py-1.5 text-[10px] text-coral">{status[today.status]}</span></div><div className="mt-5 h-2 rounded-full bg-sandDeep"><div className="h-2 rounded-full bg-coral" style={{width:`${today.progress}%`}}/></div><div className="mt-2 flex justify-between text-[10px] text-muted"><span>{today.progress}% uploaded</span><span>Surfers see it as it lands</span></div></div></div></section>
          <section className="mt-8"><div className="flex items-end justify-between"><div><h2 className="font-display text-[28px] text-ocean">Recent shoots</h2><p className="mt-1 text-[11.5px] text-muted">Your latest sessions and sales.</p></div><button className="text-[11px] text-ocean">View all →</button></div><div className="mt-3 overflow-hidden rounded-[16px] border border-line bg-white shadow-soft">{shoots.slice(1).map(s=><button key={s.id} className="flex min-h-[82px] w-full items-center gap-3 border-b border-line px-3 py-3 text-left last:border-b-0 hover:bg-sand md:px-5"><img src={s.image} alt="" className="h-[58px] w-[82px] shrink-0 rounded-[9px] object-cover"/><div className="min-w-0 flex-1"><p className="truncate text-[13px] font-medium text-ink md:text-[14px]">{s.spot}</p><p className="mt-1 text-[10.5px] text-muted">{s.date} · {s.captures} captures</p></div><span className="hidden text-[10.5px] text-muted md:block">{s.views} views</span><span className="font-display text-[17px] text-ocean">${s.revenue}</span><span className={`hidden w-10 text-right text-[10px] sm:block ${s.status==='live'?'text-ocean':'text-coral'}`}>{status[s.status]}</span><ChevronRightIcon className="h-4 w-4 text-muted"/></button>)}</div></section>
        </div>
        <aside className="space-y-5">
          <section className="overflow-hidden rounded-[16px] border border-line bg-white shadow-soft"><img src="/imgi_38_nusa-dua.jpeg" alt="Surf session" className="h-[150px] w-full object-cover"/><div className="p-5"><h2 className="font-display text-[23px] text-ocean">Give your surfers this</h2><p className="mt-1.5 text-[11.5px] leading-relaxed text-muted">Share your page on the beach so surfers can find their waves later.</p><div className="mt-4 flex items-center justify-between rounded-[11px] border border-line bg-sand px-3.5 py-2.5"><span className="font-display text-[17px] text-ink">video<span className="text-coral">.</span>surf/madesurfshots</span><button onClick={copy} className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-ocean" aria-label="Copy page link">{copied?<CheckIcon className="h-4 w-4"/>:<CopyIcon className="h-4 w-4"/>}</button></div><p className="mt-2 text-[10px] text-muted">{copied?'Link copied.':'Your page · your prices · your payouts.'}</p></div></section>
          <section className="rounded-[16px] border border-line bg-white p-5 shadow-soft"><div className="flex items-end justify-between"><h2 className="font-display text-[23px] text-ocean">Private sessions</h2><span className="text-[10.5px] text-muted">{bookings.length} booked</span></div><div className="mt-3 space-y-2.5">{bookings.map(b=><div key={b.id} className="flex gap-3 rounded-[11px] bg-sand p-2.5"><img src={b.image} alt="" className="h-[52px] w-[68px] rounded-[8px] object-cover"/><div className="min-w-0 flex-1"><div className="flex justify-between gap-2"><div><p className="text-[11.5px] font-medium">{b.client}</p><p className="mt-0.5 truncate text-[10px] text-muted">{b.spot} · {b.when}</p></div><strong className="font-display text-[15px] text-ocean">${b.price}</strong></div><p className={`mt-1.5 text-[10px] ${b.status==='Confirmed'?'text-ocean':'text-coral'}`}>{b.status}</p></div></div>)}</div><button className="mt-3 min-h-11 w-full rounded-full border border-line text-[11px] text-ocean">Set my availability</button></section>
        </aside>
      </div>
      <img src={illustrations.homePanorama} alt="" aria-hidden className="mx-auto mt-8 hidden h-[110px] w-[360px] object-cover mix-blend-multiply opacity-75 md:block"/>
    </main>
  </div>;
}
