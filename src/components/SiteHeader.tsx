import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDownIcon, MenuIcon } from 'lucide-react';

const nav = [
  { label: 'Explore', to: '/' },
  { label: 'How it works', to: '/how-it-works' },
  { label: 'For photographers', to: '/studio' },
];

export function SiteHeader() {
  const { pathname } = useLocation();
  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-sand/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[68px] max-w-[1280px] items-center px-5 md:px-8 lg:px-10">
        <Link to="/" className="flex h-12 w-[122px] items-center" aria-label="video.surf home">
          <img src="/imgi_1_logo-f9e815eb.png" alt="video.surf" className="h-[46px] w-auto object-contain" />
        </Link>

        <nav className="ml-8 hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {nav.map((item) => {
            const active = item.to === '/' ? pathname === '/' : pathname.startsWith(item.to);
            return (
              <Link key={item.label} to={item.to}
                className={`flex min-h-11 items-center rounded-full px-4 text-[12px] transition-all ${active ? 'bg-white text-ocean shadow-soft' : 'text-muted hover:bg-white/70 hover:text-ink'}`}>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-1.5">
          <Link to="/account" className="hidden min-h-11 items-center rounded-full px-4 text-[12px] text-muted hover:text-ink md:flex">Log in</Link>
          <Link to="/account" className="flex min-h-11 items-center rounded-full bg-coral px-5 text-[12px] font-medium text-white shadow-soft">Sign up</Link>
          <Link to="/account" className="hidden min-h-11 items-center gap-1 rounded-full px-4 text-[12px] text-muted hover:bg-white/70 hover:text-ink lg:flex">
            Account <ChevronDownIcon className="h-3.5 w-3.5" />
          </Link>
          <button className="hidden min-h-11 min-w-11 items-center justify-center rounded-full text-[12px] text-muted hover:bg-white/70 lg:flex" aria-label="Language: English">EN</button>
          <button className="ml-1 flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-ink md:hidden" aria-label="Open menu"><MenuIcon className="h-5 w-5" /></button>
        </div>
      </div>
    </header>
  );
}
