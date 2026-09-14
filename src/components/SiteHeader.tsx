import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDownIcon } from 'lucide-react';

const nav = [
  { label: 'Explore', to: '/' },
  { label: 'How it works', to: '/how-it-works' },
  { label: 'For photographers', to: '/studio' },
];

export function SiteHeader() {
  const { pathname } = useLocation();
  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-sand/92 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between px-5 md:px-8 lg:px-10">
        <Link to="/" className="flex h-11 items-center rounded-md" aria-label="video.surf home">
          <img src="/imgi_1_logo-f9e815eb.png" alt="video.surf" className="h-[42px] w-auto object-contain" />
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {nav.map((item) => {
            const active = item.to === '/' ? pathname === '/' : pathname.startsWith(item.to);
            return (
              <Link
                key={item.label}
                to={item.to}
                className={`flex min-h-11 items-center rounded-full px-4 text-[13px] transition-colors ${
                  active ? 'bg-white text-ocean shadow-soft' : 'text-muted hover:text-ink'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-1">
          <Link to="/account" className="hidden min-h-11 items-center rounded-full px-4 text-[13px] text-muted hover:text-ink md:flex">
            Log in
          </Link>
          <Link to="/account" className="flex min-h-11 items-center rounded-full bg-coral px-5 text-[13px] font-medium text-white shadow-soft hover:bg-[#df5c3e]">
            Sign up
          </Link>
          <button className="ml-1 hidden min-h-11 items-center gap-1 rounded-full px-3 text-[13px] text-muted hover:text-ink lg:flex">
            Account <ChevronDownIcon className="h-3.5 w-3.5" />
          </button>
          <button aria-label="Language: English" className="hidden h-11 w-11 items-center justify-center text-[12px] text-muted sm:flex">
            EN
          </button>
        </div>
      </div>
    </header>
  );
}
