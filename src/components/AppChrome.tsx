import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MapPinIcon, BookmarkIcon, ShoppingCartIcon, MoreHorizontalIcon, CameraIcon, WalletCardsIcon } from 'lucide-react';

export function StatusBar() {
  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[80] flex h-11 items-end justify-between px-6 pb-1 text-[13px] font-medium text-ink md:hidden">
      <span>9:41</span>
      <span className="flex items-center gap-2 text-ink">
        <span className="text-[10px] tracking-[.18em]">••••</span>
        <span className="text-[16px]">◔</span>
      </span>
    </div>
  );
}

const surferTabs = [
  { label: 'Spots', to: '/', icon: MapPinIcon },
  { label: 'Saved waves', to: '/waves', icon: BookmarkIcon },
  { label: 'Cart', to: '/cart', icon: ShoppingCartIcon },
  { label: 'More', to: '/account', icon: MoreHorizontalIcon },
];

const studioTabs = [
  { label: 'Studio', to: '/studio', icon: CameraIcon },
  { label: 'My money', to: '/money', icon: WalletCardsIcon },
  { label: 'More', to: '/account', icon: MoreHorizontalIcon },
];

export function TabBar() {
  const { pathname } = useLocation();
  const tabs = pathname.startsWith('/studio') || pathname.startsWith('/money') ? studioTabs : surferTabs;

  return (
    <nav aria-label="App navigation" className="fixed inset-x-0 bottom-0 z-[80] border-t border-line bg-sand/96 pb-[17px] pt-1.5 backdrop-blur-xl md:hidden">
      <ul className="mx-auto flex max-w-[520px]">
        {tabs.map(tab => {
          const active = tab.to === '/' ? pathname === '/' || pathname.startsWith('/spot') : pathname.startsWith(tab.to);
          const Icon = tab.icon;
          return (
            <li key={tab.label} className="flex-1">
              <Link to={tab.to} className={`mx-auto flex min-h-[52px] max-w-[116px] flex-col items-center justify-center gap-1 rounded-full text-[9.5px] ${active ? 'bg-[#e9eef0] text-coral' : 'text-ink/75'}`}>
                <Icon className="h-[20px] w-[20px]" strokeWidth={active ? 2.1 : 1.7} />
                <span>{tab.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
