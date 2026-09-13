export type Spot = {
  slug: string;
  name: string;
  area: string;
  country: string;
  lat: number;
  lng: number;
  captures: number;
  photographers: number;
  swell: string;
  tide: string;
  wind: string;
  level: string;
};

/**
 * A global spot table. The map is a real map: these are the spots we have on it,
 * spread across every coast we operate on. Pan or zoom anywhere and the same
 * marker language applies.
 */
export const spots: Spot[] = [
// Bali
{ slug: 'pererenan', name: 'Pererenan', area: 'Canggu', country: 'Indonesia', lat: -8.6449, lng: 115.1195, captures: 128, photographers: 4, swell: '1.6 m · 12 s SW', tide: 'Mid, rising', wind: 'Offshore 8 kt', level: 'Intermediate' },
{ slug: 'echo-beach', name: 'Echo Beach', area: 'Canggu', country: 'Indonesia', lat: -8.6539, lng: 115.1279, captures: 96, photographers: 3, swell: '1.5 m · 11 s SW', tide: 'Mid', wind: 'Offshore 6 kt', level: 'Intermediate' },
{ slug: 'batu-bolong', name: 'Batu Bolong', area: 'Canggu', country: 'Indonesia', lat: -8.6607, lng: 115.132, captures: 212, photographers: 6, swell: '1.1 m · 12 s SW', tide: 'High', wind: 'Light', level: 'Beginner' },
{ slug: 'berawa', name: 'Berawa', area: 'Canggu', country: 'Indonesia', lat: -8.6687, lng: 115.1401, captures: 54, photographers: 2, swell: '1.4 m · 11 s SW', tide: 'Mid', wind: 'Cross-shore', level: 'Intermediate' },
{ slug: 'seseh', name: 'Seseh', area: 'Canggu', country: 'Indonesia', lat: -8.6302, lng: 115.1059, captures: 31, photographers: 1, swell: '1.7 m · 12 s SW', tide: 'Low', wind: 'Offshore 10 kt', level: 'Intermediate' },
{ slug: 'balian', name: 'Balian', area: 'West Bali', country: 'Indonesia', lat: -8.5232, lng: 114.9315, captures: 0, photographers: 0, swell: '2.1 m · 13 s SW', tide: 'Mid, dropping', wind: 'Offshore 7 kt', level: 'Intermediate' },
{ slug: 'uluwatu', name: 'Uluwatu', area: 'Bukit', country: 'Indonesia', lat: -8.8153, lng: 115.0885, captures: 184, photographers: 5, swell: '2.4 m · 14 s SW', tide: 'Mid', wind: 'Offshore 12 kt', level: 'Advanced' },
{ slug: 'bingin', name: 'Bingin', area: 'Bukit', country: 'Indonesia', lat: -8.8073, lng: 115.1069, captures: 74, photographers: 3, swell: '2.0 m · 14 s SW', tide: 'Low', wind: 'Offshore', level: 'Advanced' },
{ slug: 'padang-padang', name: 'Padang Padang', area: 'Bukit', country: 'Indonesia', lat: -8.8106, lng: 115.1022, captures: 42, photographers: 2, swell: '2.2 m · 14 s SW', tide: 'Low, rising', wind: 'Offshore', level: 'Advanced' },
{ slug: 'keramas', name: 'Keramas', area: 'East Bali', country: 'Indonesia', lat: -8.5946, lng: 115.3423, captures: 66, photographers: 2, swell: '1.8 m · 12 s SE', tide: 'Mid', wind: 'Offshore at dawn', level: 'Advanced' },
{ slug: 'medewi', name: 'Medewi', area: 'West Bali', country: 'Indonesia', lat: -8.4064, lng: 114.8073, captures: 18, photographers: 1, swell: '1.9 m · 13 s SW', tide: 'Mid', wind: 'Light', level: 'Beginner' },
{ slug: 'sanur', name: 'Sanur Reef', area: 'Sanur', country: 'Indonesia', lat: -8.6942, lng: 115.2635, captures: 12, photographers: 1, swell: '1.2 m · 11 s SE', tide: 'High', wind: 'Offshore', level: 'Advanced' },
{ slug: 'lakey-peak', name: 'Lakey Peak', area: 'Sumbawa', country: 'Indonesia', lat: -8.8672, lng: 118.2286, captures: 24, photographers: 1, swell: '1.8 m · 14 s S', tide: 'Mid', wind: 'Offshore', level: 'Advanced' },

// Portugal
{ slug: 'carcavelos', name: 'Carcavelos', area: 'Lisbon', country: 'Portugal', lat: 38.6796, lng: -9.3357, captures: 143, photographers: 5, swell: '1.4 m · 10 s NW', tide: 'Mid', wind: 'Cross-shore 9 kt', level: 'Intermediate' },
{ slug: 'caparica', name: 'Costa da Caparica', area: 'Lisbon', country: 'Portugal', lat: 38.6457, lng: -9.2372, captures: 88, photographers: 3, swell: '1.3 m · 9 s NW', tide: 'Low', wind: 'Onshore', level: 'Beginner' },
{ slug: 'supertubos', name: 'Supertubos', area: 'Peniche', country: 'Portugal', lat: 39.3459, lng: -9.3661, captures: 167, photographers: 4, swell: '2.2 m · 13 s NW', tide: 'Mid, dropping', wind: 'Offshore 11 kt', level: 'Advanced' },
{ slug: 'ribeira-dilhas', name: "Ribeira d'Ilhas", area: 'Ericeira', country: 'Portugal', lat: 38.9973, lng: -9.4187, captures: 121, photographers: 4, swell: '1.9 m · 12 s NW', tide: 'Mid', wind: 'Offshore', level: 'Intermediate' },
{ slug: 'amado', name: 'Praia do Amado', area: 'Algarve', country: 'Portugal', lat: 37.1666, lng: -8.9032, captures: 37, photographers: 2, swell: '1.6 m · 11 s NW', tide: 'Mid', wind: 'Light', level: 'Beginner' },
{ slug: 'guincho', name: 'Guincho', area: 'Cascais', country: 'Portugal', lat: 38.7326, lng: -9.4728, captures: 29, photographers: 1, swell: '1.8 m · 11 s NW', tide: 'High', wind: 'Cross-shore', level: 'Intermediate' },

// France
{ slug: 'la-graviere', name: 'La Gravière', area: 'Hossegor', country: 'France', lat: 43.6662, lng: -1.4413, captures: 152, photographers: 4, swell: '2.0 m · 13 s W', tide: 'Mid', wind: 'Offshore 8 kt', level: 'Advanced' },
{ slug: 'cote-des-basques', name: 'Côte des Basques', area: 'Biarritz', country: 'France', lat: 43.4762, lng: -1.5673, captures: 134, photographers: 5, swell: '1.2 m · 11 s W', tide: 'Low', wind: 'Light', level: 'Beginner' },
{ slug: 'les-bourdaines', name: 'Les Bourdaines', area: 'Seignosse', country: 'France', lat: 43.6926, lng: -1.4291, captures: 71, photographers: 3, swell: '1.7 m · 12 s W', tide: 'Mid, rising', wind: 'Offshore', level: 'Intermediate' },
{ slug: 'lacanau', name: 'Lacanau', area: 'Gironde', country: 'France', lat: 45.0022, lng: -1.1966, captures: 46, photographers: 2, swell: '1.5 m · 10 s W', tide: 'Mid', wind: 'Cross-shore', level: 'Intermediate' },
{ slug: 'la-torche', name: 'La Torche', area: 'Bretagne', country: 'France', lat: 47.8383, lng: -4.3494, captures: 33, photographers: 1, swell: '1.6 m · 12 s W', tide: 'High', wind: 'Offshore', level: 'Intermediate' },

// Morocco
{ slug: 'anchor-point', name: 'Anchor Point', area: 'Taghazout', country: 'Morocco', lat: 30.5442, lng: -9.7116, captures: 109, photographers: 3, swell: '2.3 m · 15 s NW', tide: 'Mid', wind: 'Offshore 10 kt', level: 'Advanced' },
{ slug: 'imsouane', name: 'Imsouane Bay', area: 'Imsouane', country: 'Morocco', lat: 30.8397, lng: -9.8228, captures: 97, photographers: 3, swell: '1.8 m · 14 s NW', tide: 'Mid', wind: 'Light', level: 'Beginner' },
{ slug: 'banana-point', name: 'Banana Point', area: 'Taghazout', country: 'Morocco', lat: 30.5194, lng: -9.6934, captures: 52, photographers: 2, swell: '1.7 m · 13 s NW', tide: 'High', wind: 'Offshore', level: 'Beginner' },
{ slug: 'tamri', name: 'Tamri', area: 'Agadir', country: 'Morocco', lat: 30.7079, lng: -9.8319, captures: 14, photographers: 1, swell: '2.1 m · 14 s NW', tide: 'Low', wind: 'Offshore', level: 'Intermediate' },

// California
{ slug: 'malibu-first-point', name: 'First Point', area: 'Malibu', country: 'United States', lat: 34.0369, lng: -118.6785, captures: 176, photographers: 6, swell: '1.1 m · 15 s S', tide: 'Mid', wind: 'Light', level: 'Intermediate' },
{ slug: 'lowers', name: 'Lowers', area: 'Trestles', country: 'United States', lat: 33.3826, lng: -117.5885, captures: 142, photographers: 4, swell: '1.4 m · 16 s S', tide: 'Mid, rising', wind: 'Offshore', level: 'Advanced' },
{ slug: 'ocean-beach-sf', name: 'Ocean Beach', area: 'San Francisco', country: 'United States', lat: 37.7594, lng: -122.5107, captures: 63, photographers: 2, swell: '2.4 m · 13 s NW', tide: 'Low', wind: 'Cross-shore', level: 'Advanced' },
{ slug: 'rincon', name: 'Rincon', area: 'Santa Barbara', country: 'United States', lat: 34.3742, lng: -119.4776, captures: 58, photographers: 2, swell: '1.6 m · 14 s NW', tide: 'Mid', wind: 'Offshore', level: 'Advanced' },
{ slug: 'huntington-pier', name: 'Huntington Pier', area: 'Orange County', country: 'United States', lat: 33.6553, lng: -118.0033, captures: 87, photographers: 3, swell: '1.2 m · 13 s S', tide: 'Mid', wind: 'Onshore', level: 'Intermediate' },
{ slug: 'queens-waikiki', name: 'Queens', area: 'Waikīkī', country: 'United States', lat: 21.2708, lng: -157.8258, captures: 118, photographers: 4, swell: '1.0 m · 14 s S', tide: 'High', wind: 'Light', level: 'Beginner' },
{ slug: 'pipeline', name: 'Pipeline', area: 'North Shore', country: 'United States', lat: 21.665, lng: -158.0533, captures: 94, photographers: 3, swell: '2.8 m · 15 s NW', tide: 'Mid', wind: 'Offshore', level: 'Advanced' },

// Australia
{ slug: 'bondi', name: 'Bondi', area: 'Sydney', country: 'Australia', lat: -33.8908, lng: 151.2773, captures: 156, photographers: 5, swell: '1.5 m · 11 s SE', tide: 'Mid', wind: 'Offshore 9 kt', level: 'Intermediate' },
{ slug: 'snapper-rocks', name: 'Snapper Rocks', area: 'Gold Coast', country: 'Australia', lat: -28.1621, lng: 153.5493, captures: 131, photographers: 4, swell: '1.7 m · 13 s E', tide: 'Mid, rising', wind: 'Offshore', level: 'Advanced' },
{ slug: 'bells-beach', name: 'Bells Beach', area: 'Torquay', country: 'Australia', lat: -38.3714, lng: 144.2812, captures: 67, photographers: 2, swell: '2.2 m · 14 s SW', tide: 'Mid', wind: 'Offshore', level: 'Advanced' },
{ slug: 'noosa-first-point', name: 'Noosa First Point', area: 'Sunshine Coast', country: 'Australia', lat: -26.3817, lng: 153.0921, captures: 49, photographers: 2, swell: '1.1 m · 12 s E', tide: 'High', wind: 'Light', level: 'Beginner' },

// Latin America
{ slug: 'maresias', name: 'Maresias', area: 'São Paulo', country: 'Brazil', lat: -23.7896, lng: -45.5646, captures: 72, photographers: 3, swell: '1.6 m · 11 s S', tide: 'Mid', wind: 'Offshore', level: 'Intermediate' },
{ slug: 'joaquina', name: 'Joaquina', area: 'Florianópolis', country: 'Brazil', lat: -27.6288, lng: -48.4519, captures: 44, photographers: 2, swell: '1.8 m · 12 s S', tide: 'Mid', wind: 'Cross-shore', level: 'Intermediate' },
{ slug: 'zicatela', name: 'Zicatela', area: 'Puerto Escondido', country: 'Mexico', lat: 15.8556, lng: -97.056, captures: 103, photographers: 3, swell: '2.6 m · 16 s S', tide: 'Mid', wind: 'Offshore', level: 'Advanced' },
{ slug: 'sayulita', name: 'Sayulita', area: 'Nayarit', country: 'Mexico', lat: 20.8697, lng: -105.4416, captures: 38, photographers: 2, swell: '1.2 m · 14 s S', tide: 'High', wind: 'Light', level: 'Beginner' },
{ slug: 'santa-teresa', name: 'Santa Teresa', area: 'Nicoya', country: 'Costa Rica', lat: 9.6446, lng: -85.1687, captures: 91, photographers: 3, swell: '1.7 m · 15 s SW', tide: 'Mid, dropping', wind: 'Offshore', level: 'Intermediate' },
{ slug: 'tamarindo', name: 'Tamarindo', area: 'Guanacaste', country: 'Costa Rica', lat: 10.2993, lng: -85.8408, captures: 57, photographers: 2, swell: '1.4 m · 14 s SW', tide: 'Mid', wind: 'Offshore', level: 'Beginner' },

// Sri Lanka & Canaries
{ slug: 'weligama', name: 'Weligama', area: 'South Coast', country: 'Sri Lanka', lat: 5.9721, lng: 80.4297, captures: 82, photographers: 3, swell: '1.1 m · 13 s SW', tide: 'Mid', wind: 'Light', level: 'Beginner' },
{ slug: 'hiriketiya', name: 'Hiriketiya', area: 'South Coast', country: 'Sri Lanka', lat: 5.9569, lng: 80.7123, captures: 64, photographers: 2, swell: '1.0 m · 13 s SW', tide: 'High', wind: 'Offshore', level: 'Beginner' },
{ slug: 'arugam-bay', name: 'Arugam Bay', area: 'East Coast', country: 'Sri Lanka', lat: 6.8404, lng: 81.836, captures: 35, photographers: 1, swell: '1.3 m · 12 s S', tide: 'Mid', wind: 'Offshore', level: 'Intermediate' },
{ slug: 'famara', name: 'Famara', area: 'Lanzarote', country: 'Spain', lat: 29.1376, lng: -13.5547, captures: 41, photographers: 2, swell: '1.9 m · 13 s NW', tide: 'Mid', wind: 'Cross-shore', level: 'Intermediate' },
{ slug: 'el-confital', name: 'El Confital', area: 'Gran Canaria', country: 'Spain', lat: 28.1602, lng: -15.4292, captures: 22, photographers: 1, swell: '2.0 m · 14 s NW', tide: 'Low', wind: 'Offshore', level: 'Advanced' },
{ slug: 'mundaka', name: 'Mundaka', area: 'Basque Country', country: 'Spain', lat: 43.4079, lng: -2.6976, captures: 47, photographers: 2, swell: '2.1 m · 14 s NW', tide: 'Mid, dropping', wind: 'Offshore', level: 'Advanced' }];


export const spotBySlug = (slug: string): Spot | undefined =>
spots.find((s) => s.slug === slug);

/** The "closest to you" set the map opens on. In production this comes from geolocation. */
export const nearbySlugs = ['pererenan', 'batu-bolong', 'echo-beach', 'berawa', 'seseh', 'balian'];

export const nearbySpots = (): Spot[] =>
nearbySlugs.map((slug) => spotBySlug(slug)).filter((s): s is Spot => Boolean(s));