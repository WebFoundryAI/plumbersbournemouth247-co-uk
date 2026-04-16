export interface Location {
  slug: string;
  name: string;
  countyOrRegion?: string;
  latitude: number;
  longitude: number;
  noindex?: boolean;
  description?: string;
  responseTime?: string;
}

export const PRIMARY_LOCATION: Location = {
  slug: "bournemouth",
  name: "Bournemouth",
  countyOrRegion: "Dorset",
  latitude: 50.7352,
  longitude: -1.8197,
};

export const LOCATIONS: Location[] = [
  PRIMARY_LOCATION,
  {
    slug: "poole",
    name: "Poole",
    countyOrRegion: "Dorset",
    latitude: 50.7212,
    longitude: -1.9813,
  },
  {
    slug: "christchurch",
    name: "Christchurch",
    countyOrRegion: "Dorset",
    latitude: 50.7358,
    longitude: -1.7734,
  },
  {
    slug: "wimborne",
    name: "Wimborne",
    countyOrRegion: "Dorset",
    latitude: 50.8002,
    longitude: -1.9862,
  },
  {
    slug: "ferndown",
    name: "Ferndown",
    countyOrRegion: "Dorset",
    latitude: 50.8106,
    longitude: -1.8939,
  },
  {
    slug: "ringwood",
    name: "Ringwood",
    countyOrRegion: "Dorset",
    latitude: 50.8466,
    longitude: -1.7905,
  },
  {
    slug: "verwood",
    name: "Verwood",
    countyOrRegion: "Dorset",
    latitude: 50.8789,
    longitude: -1.8577,
  },
  {
    slug: "wareham",
    name: "Wareham",
    countyOrRegion: "Dorset",
    latitude: 50.6863,
    longitude: -2.1098,
  },
  {
    slug: "swanage",
    name: "Swanage",
    countyOrRegion: "Dorset",
    latitude: 50.6078,
    longitude: -1.9571,
  },
];

export const INDEXED_LOCATIONS = LOCATIONS.filter((l) => !l.noindex);

export function getLocationBySlug(slug: string): Location | undefined {
  return LOCATIONS.find((location) => location.slug === slug);
}
