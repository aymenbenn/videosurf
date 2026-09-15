export type Capture = {
  id: string;
  kind: 'video' | 'photo';
  time: string;
  duration?: string;
  frames?: number;
  price: number;
  photographer: string;
  thumb: string;
  featured?: boolean;
};

const shots = [
  '/imgi_46_playgrounds.jpeg', '/imgi_43_keramas.jpeg', '/imgi_41_sanur-reef.jpeg',
  '/imgi_37_green-bowl.jpeg', '/imgi_45_lacerations.jpeg', '/imgi_44_shipwrecks.jpeg'
];

export const illustrations = {
  homeBand: '/banners/ChatGPT Image 15 sept. 2026, 01_24_51.png',
  homePanorama: '/banners/ChatGPT Image 15 sept. 2026, 01_19_08.png',
  spotHeader: '/banners/imgi_5_vague-03-point-break-haze-sun-bbc8f515.png',
  studioBand: '/banners/ChatGPT Image 15 sept. 2026, 01_19_08.png',
  spotThumb: '/banners/imgi_5_vague-03-point-break-haze-sun-bbc8f515.png'
};

export const spotThumbs: Record<string, string> = {
  pererenan: shots[0], 'batu-bolong': shots[1], 'echo-beach': shots[2],
  berawa: shots[3], seseh: shots[4], balian: shots[5]
};

export const captures: Capture[] = [
  { id: 'c1', kind: 'video', time: '06:14', duration: '0:24', price: 9, photographer: 'Léo Mahé', thumb: shots[0], featured: true },
  { id: 'c2', kind: 'video', time: '06:22', duration: '0:18', price: 9, photographer: 'Léo Mahé', thumb: shots[2] },
  { id: 'c3', kind: 'photo', time: '06:31', frames: 6, price: 6, photographer: 'Ayu Pratiwi', thumb: shots[1] },
  { id: 'c4', kind: 'video', time: '06:48', duration: '0:31', price: 12, photographer: 'Ayu Pratiwi', thumb: shots[3] },
  { id: 'c5', kind: 'photo', time: '07:02', frames: 4, price: 6, photographer: 'Léo Mahé', thumb: shots[4] },
  { id: 'c6', kind: 'video', time: '07:15', duration: '0:22', price: 9, photographer: 'Marco Silva', thumb: shots[5] },
  { id: 'c7', kind: 'video', time: '07:29', duration: '0:27', price: 9, photographer: 'Marco Silva', thumb: shots[2] },
  { id: 'c8', kind: 'photo', time: '07:41', frames: 9, price: 8, photographer: 'Ayu Pratiwi', thumb: shots[0] },
  { id: 'c9', kind: 'video', time: '07:58', duration: '0:16', price: 9, photographer: 'Léo Mahé', thumb: shots[3] },
  { id: 'c10', kind: 'video', time: '08:14', duration: '0:24', price: 9, photographer: 'Léo Mahé', thumb: shots[4] },
  { id: 'c11', kind: 'video', time: '08:15', duration: '0:21', price: 9, photographer: 'Marco Silva', thumb: shots[1] },
  { id: 'c12', kind: 'video', time: '08:16', duration: '0:19', price: 9, photographer: 'Ayu Pratiwi', thumb: shots[5] }
];

export type Photographer = { name: string; sessions: number; from: number; shootingToday: boolean };
export const photographers: Photographer[] = [
  { name: 'Léo Mahé', sessions: 214, from: 9, shootingToday: true },
  { name: 'Ayu Pratiwi', sessions: 168, from: 6, shootingToday: true },
  { name: 'Marco Silva', sessions: 92, from: 9, shootingToday: false }
];
