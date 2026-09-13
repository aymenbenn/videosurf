import React, { useEffect, useMemo, useState } from 'react';
import { MapContainer, TileLayer, Marker, ZoomControl, useMap, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import { CrosshairIcon } from 'lucide-react';
import { Spot, spots } from '../data/spots';

type SpotMapProps = {
  center: [number, number];
  zoom: number;
  activeSlug?: string;
  onEnter: (spot: Spot) => void;
  onPreview?: (spot: Spot | null) => void;
  className?: string;
};

function pillIcon(spot: Spot, active: boolean) {
  const quiet = spot.captures === 0;
  const count = spot.captures > 0 ? `<em class="vs-count">${spot.captures}</em>` : '';
  return L.divIcon({
    className: 'vs-marker',
    iconSize: [0, 0],
    iconAnchor: [0, 0],
    html: `<span class="vs-pill ${active ? 'is-active' : ''} ${quiet ? 'is-quiet' : ''}"><span class="vs-dot"></span>${spot.name}${count}</span>`
  });
}

function dotIcon() {
  return L.divIcon({
    className: 'vs-marker',
    iconSize: [0, 0],
    iconAnchor: [0, 0],
    html: '<span class="vs-dotmark"></span>'
  });
}

function ZoomWatcher({ onZoom }: {onZoom: (z: number) => void;}) {
  useMapEvents({
    zoomend: (e) => onZoom(e.target.getZoom())
  });
  return null;
}

/** The container can be laid out after the map mounts (responsive rail), so re-measure. */
function SizeGuard() {
  const map = useMap();
  useEffect(() => {
    const measure = () => map.invalidateSize({ animate: false });
    const raf = window.requestAnimationFrame(measure);
    window.addEventListener('resize', measure);
    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener('resize', measure);
    };
  }, [map]);
  return null;
}

function LocateButton({ center, zoom }: {center: [number, number];zoom: number;}) {
  const map = useMap();
  const backToMe = () => {
    // A zero-size container makes Leaflet's fly interpolation divide by nothing.
    if (map.getSize().x < 40) {
      map.invalidateSize({ animate: false });
      map.setView(center, zoom, { animate: false });
      return;
    }
    map.flyTo(center, zoom, { duration: 0.6 });
  };
  return (
    <button
      type="button"
      onClick={backToMe}
      aria-label="Back to the spots near me"
      className="absolute bottom-5 right-4 z-[500] flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-ocean shadow-soft transition-transform duration-150 ease-out active:scale-[0.96]">
      
      <CrosshairIcon className="h-[18px] w-[18px]" aria-hidden="true" />
    </button>);

}

/**
 * The real map. Custom tiles tinted to the sand/ocean palette, spot markers as
 * white pills that read as the product's navigation element. One tap on a marker
 * opens the spot — no second step on a thumbnail.
 */
export function SpotMap({ center, zoom, activeSlug, onEnter, onPreview, className = '' }: SpotMapProps) {
  const [z, setZ] = useState(zoom);
  const labelled = z >= 9;

  const markers = useMemo(
    () =>
    spots.map((spot) =>
    <Marker
      key={spot.slug}
      position={[spot.lat, spot.lng]}
      icon={labelled ? pillIcon(spot, spot.slug === activeSlug) : dotIcon()}
      keyboard
      title={`${spot.name} — ${spot.area}`}
      alt={`${spot.name}, ${spot.area}`}
      eventHandlers={{
        click: () => onEnter(spot),
        mouseover: () => onPreview?.(spot),
        mouseout: () => onPreview?.(null)
      }} />

    ),
    [labelled, activeSlug, onEnter, onPreview]
  );

  return (
    <div className={`vs-map relative overflow-hidden ${className}`}>
      <MapContainer
        center={center}
        zoom={zoom}
        minZoom={2}
        zoomControl={false}
        scrollWheelZoom
        className="h-full w-full">
        
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/rastertiles/light_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; OpenStreetMap &copy; CARTO'
          subdomains="abcd"
          maxZoom={19} />
        
        <ZoomControl position="topright" />
        <ZoomWatcher onZoom={setZ} />
        <SizeGuard />
        <LocateButton center={center} zoom={zoom} />
        {markers}
      </MapContainer>
    </div>);

}