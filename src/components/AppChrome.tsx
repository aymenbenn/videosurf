import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MapIcon, FilmIcon, CameraIcon, UserRoundIcon } from 'lucide-react';

/** Status bar. Pages are drawn under it, so it only carries the system glyphs. */
export function StatusBar() {
  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-40 flex h-11 items-end justify-between px-6 pb-1 text-[13px] font-medium text-ink md:hidden">
      <span>7:41</span>
      <span className="flex items-center gap-1.5">
        <svg viewBox="0 0 18 12" className="h-3 w-4" aria-hidden="true">
          <g fill="currentColor">
            <rect x="0" y="8" width="3" height="4" rx="1" />
            <rect x="5" y="6" width="3" height="6" rx="1" />
            <rect x="10" y="3" width="3" height="9" rx="1" />
            <rect x="15" y="0" width="3" height="12" rx="1" opacity="0.35" />
          </g>
        </svg>
        <svg viewBox="0 0 26 12" className="h-3 w-6" aria-hidden="true">
          <rect x="0.5" y="0.5" width="21" height="11" rx="3" fill="none" stroke="currentColor" opacity="0.5" />
          <rect x="2" y="2" width="15" height="8" rx="2" fill="currentColor" />
          <rect x="23" y="4" width="2" height="4" rx="1" fill="currentColor" opacity="0.5" />
        </svg>
      </span>
    </div>);

}

const tabs = [
{ label: 'Spots', to: '/', icon: MapIcon },
{ label: 'My waves', to: '/waves', icon: FilmIcon },
{ label: 'Studio', to: '/studio', icon: CameraIcon },
{ label: 'Account', to: '/account', icon: UserRoundIcon }];


/** Native tab bar. Only present in the app build. */
export function TabBar() {
  const { pathname } = useLocation();
  return (
    <nav
      aria-label="App tabs"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-sand/95 pb-[18px] pt-2 backdrop-blur md:hidden">
      
      <ul className="flex items-stretch justify-around">
        {tabs.map((tab) => {
          const active = tab.to === '/' ? pathname === '/' || pathname.startsWith('/spot') : pathname.startsWith(tab.to);
          const Icon = tab.icon;
          return (
            <li key={tab.to} className="flex-1">
              <Link
                to={tab.to}
                className={[
                'flex min-h-[44px] flex-col items-center justify-center gap-1 text-[10.5px] tracking-[0.01em] transition-colors duration-150 ease-out',
                active ? 'text-ocean' : 'text-muted'].
                join(' ')}
                aria-current={active ? 'page' : undefined}>
                
                <Icon className="h-[21px] w-[21px]" strokeWidth={active ? 2 : 1.6} aria-hidden="true" />
                {tab.label}
              </Link>
            </li>);

        })}
      </ul>
    </nav>);

}