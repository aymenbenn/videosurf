export type Shoot = {
  id: string;
  spot: string;
  date: string;
  window: string;
  captures: number;
  views: number;
  sales: number;
  revenue: number;
  status: 'uploading' | 'processing' | 'live' | 'draft';
  progress?: number;
  image: string;
};

export const photographerName = 'Léo Mahé';
export const homeSpot = 'Canggu, Bali';

export const shoots: Shoot[] = [
  { id: 's1', spot: 'Pererenan', date: 'Today', window: '06:10 – 08:05', captures: 128, views: 0, sales: 0, revenue: 0, status: 'uploading', progress: 64, image: '/imgi_46_playgrounds.jpeg' },
  { id: 's2', spot: 'Batu Bolong', date: 'Yesterday', window: '06:30 – 08:20', captures: 96, views: 412, sales: 11, revenue: 99, status: 'live', image: '/imgi_43_keramas.jpeg' },
  { id: 's3', spot: 'Echo Beach', date: 'Thu 10 Sep', window: '16:20 – 18:00', captures: 74, views: 286, sales: 7, revenue: 63, status: 'live', image: '/imgi_41_sanur-reef.jpeg' },
  { id: 's4', spot: 'Pererenan', date: 'Wed 9 Sep', window: '06:05 – 07:40', captures: 112, views: 531, sales: 18, revenue: 162, status: 'live', image: '/imgi_38_nusa-dua.jpeg' },
  { id: 's5', spot: 'Seseh', date: 'Tue 8 Sep', window: '06:40 – 08:10', captures: 58, views: 173, sales: 4, revenue: 36, status: 'live', image: '/imgi_37_green-bowl.jpeg' },
  { id: 's6', spot: 'Berawa', date: 'Mon 7 Sep', window: '17:00 – 18:30', captures: 41, views: 96, sales: 2, revenue: 18, status: 'draft', image: '/imgi_44_shipwrecks.jpeg' },
];

export const studioStats = {
  monthRevenue: 1284,
  monthDelta: '+18% vs August',
  payoutDate: 'Payout on 1 Oct',
  sales: 142,
  views: 5840,
  conversion: '2.4%',
  liveCaptures: 509,
};

export const bookings = [
  { id: 'b1', client: 'Marta R.', spot: 'Pererenan', when: 'Tomorrow · 06:15', price: 45, status: 'To confirm', image: '/imgi_46_playgrounds.jpeg' },
  { id: 'b2', client: 'Tom K.', spot: 'Batu Bolong', when: 'Tue 15 Sep · 06:30', price: 45, status: 'Confirmed', image: '/imgi_39_sri-lanka.jpeg' },
];
