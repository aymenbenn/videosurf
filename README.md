# video.surf — contest prototype

Responsive redesign of the three requested screens:
- Home
- Spot
- Studio

Designed for the requested 1280px desktop and 390px mobile layouts. The same responsive React pages are used for desktop and mobile, with the mobile app chrome available through the existing `platform="ios"` prop.

## Visual direction
Warm sand background, ocean blue typography, coral reserved for primary actions, Fraunces + Sora, restrained borders/shadows, and the supplied coastal illustrations integrated into the UI rather than used as hero photography.

## Assets
The supplied project images in `public/` are used for:
- video.surf logo / wordmark
- coastal illustrations
- surf capture thumbnails
- spot cards

## Run
```bash
npm install
npm run dev
```

Build:
```bash
npm run build
```

The real Leaflet map remains interactive and uses the global spot data. Clicking a spot marker opens the Spot page directly.
