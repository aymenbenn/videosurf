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

const shots = ["/96fbc2db-0585-42be-a447-34852aade202.jpg", "/2c7fbf0a-5503-432b-8e3a-a425463d7e88.jpg", "/ecaaff3f-8054-47ac-9f5e-aadf57e8a6b6.jpg", "/087fddb3-f257-49e7-8d92-9d7721d5ef71.jpg", "/338bb294-325f-4e92-af2f-47a728591267.jpg", "/b55687d2-9f53-4136-aaf0-ab6846bf4c07.jpg"];








export const illustrations = {
  homeBand: "/520fca80-2912-44c2-aa8e-077b3722f341.jpg",
  spotHeader: "/9b8d3543-6d86-4a09-9c11-dbbab18272ba.jpg",
  studioBand: "/ebac486c-e8a1-4906-9544-db0c8556bf8a.jpg",
  spotThumb: "/d57f542a-496d-4c43-a02c-a3418796857a.jpg"
};

export const spotThumbs: Record<string, string> = {
  pererenan: shots[0],
  'batu-bolong': shots[1],
  'echo-beach': shots[2],
  berawa: shots[3],
  seseh: shots[4],
  balian: shots[5]
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
{ id: 'c9', kind: 'video', time: '07:58', duration: '0:16', price: 9, photographer: 'Léo Mahé', thumb: shots[3] }];


export type Photographer = {
  name: string;
  sessions: number;
  from: number;
  shootingToday: boolean;
};

export const photographers: Photographer[] = [
{ name: 'Léo Mahé', sessions: 214, from: 9, shootingToday: true },
{ name: 'Ayu Pratiwi', sessions: 168, from: 6, shootingToday: true },
{ name: 'Marco Silva', sessions: 92, from: 9, shootingToday: false }];