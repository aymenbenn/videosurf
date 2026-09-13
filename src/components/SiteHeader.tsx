import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDownIcon } from 'lucide-react';
import { Wordmark } from './Wordmark';

const nav = [
{ label: 'Studio', to: '/studio' },
{ label: 'My money', to: '/money' }];


/** Web-only chrome. The iOS app renders the same pages without this header. */
export function SiteHeader() {
  const { pathname } = useLocation();
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-sand/90 backdrop-blur">
      <div className="mx-auto flex h-[68px] w-full max-w-[1280px] items-center justify-between px-5 md:px-10">
        <Link
          to="/"
          aria-label="video.surf — home"
          className="rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-ocean/40">
          
          <Wordmark size="sm" />
        </Link>

        <nav aria-label="Main" className="flex items-center gap-1">
          {nav.map((item) => {
            const active = pathname.startsWith(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={[
                'flex h-11 items-center rounded-full px-4 text-[14px] transition-colors duration-150 ease-out',
                active ?
                'bg-white text-ocean shadow-soft' :
                'text-muted hover:text-ink'].
                join(' ')}>
                
                {item.label}
              </Link>);

          })}
          <button
            type="button"
            className="ml-1 flex h-11 items-center gap-1 rounded-full px-3 text-[14px] text-muted transition-colors duration-150 ease-out hover:text-ink">
            
            Account
            <ChevronDownIcon className="h-4 w-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Language: English"
            className="ml-1 flex h-11 w-11 items-center justify-center rounded-full text-[13px] text-muted transition-colors duration-150 ease-out hover:text-ink">
            
            EN
          </button>
        </nav>
      </div>
    </header>);

}