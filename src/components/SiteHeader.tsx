import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDownIcon, MenuIcon, XIcon } from 'lucide-react';

export function SiteHeader() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const isStudio = pathname.startsWith('/studio') || pathname.startsWith('/money');
  const isSpot = pathname.startsWith('/spot') || pathname.startsWith('/waves') || pathname.startsWith('/cart');
  const isHome = pathname === '/';
  const language = isStudio ? '🇫🇷' : isSpot ? '🇬🇧' : '🇫🇷';

  const nav = isStudio
    ? [{ label: 'Studio', to: '/studio' }, { label: 'My money', to: '/money' }]
    : isSpot
      ? [{ label: 'Saved waves', to: '/waves' }, { label: 'Cart', to: '/cart' }]
      : [{ label: 'Explore', to: '/' }, { label: 'How it works', to: '/how-it-works' }, { label: 'For photographers', to: '/studio' }];

  return (
    <header className="sticky top-0 z-[100] border-b border-line bg-sand/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[74px] max-w-[1280px] items-center px-5 md:px-8 lg:px-10">
        <Link to="/" className="flex h-[62px] w-[138px] shrink-0 items-center" aria-label="video.surf home">
          <img src="/imgi_1_logo-f9e815eb.png" alt="video.surf" className="h-[58px] w-auto object-contain" />
        </Link>

        <nav className="ml-auto hidden items-center gap-1 md:flex" aria-label="Main navigation">
          <div className="flex items-center gap-1">
            {nav.map(item => {
              const active = item.to === '/' ? pathname === '/' : pathname.startsWith(item.to);
              return <Link key={item.label} to={item.to} className={`flex min-h-11 items-center rounded-full px-4 text-[12px] transition-colors ${active ? 'bg-white text-ocean shadow-soft' : 'text-muted hover:bg-white/70 hover:text-ink'}`}>{item.label}</Link>;
            })}
          </div>
          <div className="ml-5 flex items-center gap-1">
            {isHome ? <>
              <Link to="/account" className="flex min-h-11 items-center rounded-full px-4 text-[12px] text-muted hover:text-ink">Log in</Link>
              <Link to="/account" className="flex min-h-11 items-center rounded-full bg-coral px-5 text-[12px] font-medium text-white shadow-soft">Sign up</Link>
            </> : <Link to="/account" className="flex min-h-11 items-center gap-1 rounded-full px-4 text-[12px] text-muted hover:bg-white/70 hover:text-ink">Account <ChevronDownIcon className="h-3.5 w-3.5" /></Link>}
            <button className="flex min-h-11 min-w-11 items-center justify-center rounded-full text-[13px]" aria-label="Language">{language}</button>
          </div>
        </nav>

        <div className="ml-auto flex items-center gap-2 md:hidden">
          <button className="flex h-10 min-w-10 items-center justify-center rounded-full border border-line bg-white text-[13px] shadow-soft" aria-label="Language">{language}</button>
          <button onClick={() => setOpen(v => !v)} className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-ocean shadow-soft" aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <XIcon className="h-5 w-5"/> : <MenuIcon className="h-5 w-5"/>}</button>
        </div>
      </div>
      {open && <div className="border-t border-line bg-sand px-5 py-3 md:hidden"><div className="mx-auto max-w-[1280px] space-y-1">{nav.map(item => <Link key={item.label} onClick={() => setOpen(false)} to={item.to} className="flex min-h-11 items-center rounded-[10px] px-3 text-[13px] text-ink">{item.label}</Link>)}<Link onClick={() => setOpen(false)} to="/account" className="flex min-h-11 items-center rounded-[10px] px-3 text-[13px] text-ink">{isHome ? 'Log in / Sign up' : 'Account'}</Link></div></div>}
    </header>
  );}
