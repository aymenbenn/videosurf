import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SiteHeader } from './components/SiteHeader';
import { StatusBar, TabBar } from './components/AppChrome';
import { Home } from './pages/Home';
import { Spot } from './pages/Spot';
import { Studio } from './pages/Studio';
import { Soon } from './pages/Soon';

type Platform = 'web' | 'ios';
type SpotHeaderStyle = 'illustration' | 'sand';

interface AppProps {
  /** 'web' renders the site header; 'ios' drops it for the native tab bar and draws under the status bar. */
  platform?: Platform;
  /** Two directions for the spot page header: a per-spot ink drawing, or a worked sand band. */
  spotHeaderStyle?: SpotHeaderStyle;
}

export function App({ platform = 'web', spotHeaderStyle = 'illustration' }: AppProps) {
  const isApp = platform === 'ios';

  return (
    <BrowserRouter>
      <div className="min-h-full w-full bg-sand">
        {isApp ?
        <>
            <StatusBar />
            {/* Above 640 px the app build falls back to the desktop site */}
            <div className="hidden md:block">
              <SiteHeader />
            </div>
          </> :

        <SiteHeader />
        }

        <Routes>
          <Route path="/" element={<Home isApp={isApp} />} />
          <Route path="/spot/:slug" element={<Spot isApp={isApp} headerVariant={spotHeaderStyle} />} />
          <Route path="/studio" element={<Studio isApp={isApp} />} />
          <Route path="/waves" element={<Soon title="My waves" isApp={isApp} />} />
          <Route path="/money" element={<Soon title="My money" isApp={isApp} />} />
          <Route path="/account" element={<Soon title="Account" isApp={isApp} />} />
          <Route path="/booking" element={<Soon title="Book a photographer" isApp={isApp} />} />
          <Route path="/cart" element={<Soon title="Cart" isApp={isApp} />} />
          <Route path="*" element={<Soon title="Not found" isApp={isApp} />} />
        </Routes>

        {isApp && <TabBar />}
      </div>
    </BrowserRouter>);

}