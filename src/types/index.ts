export type Currency = 'USD' | 'EUR' | 'GBP' | 'LKR';

export type DestinationRegion =
  | 'Cultural Triangle'
  | 'Central Highlands'
  | 'Southern Coast'
  | 'Wild East & North'
  | 'Wildlife Sanctuaries'
  | 'North Central Province'
  | 'Western Province';

export type DurationFilter = 'All' | '5-7' | '8-10' | '11-14' | '14+';

export interface Destination {
  id: string;
  name: string;
  sinhalaName: string;
  tagline: string;
  region: DestinationRegion;
  bestTimeToVisit: string;
  climate: string;
  elevation: string;
  highlights: string[];
  image: string;
  description: string;
  historicalSignificance: string;
  culturalTip: string;
  recommendedDuration: string;
  mapCoordinates: { x: number; y: number };
}

export interface TravelPackage {
  id: string;
  title: string;
  subtitle: string;
  durationDays: number;
  durationNights: number;
  basePriceUSD: number;
  badge?: string;
  overview: string;
  image: string;
  style:
    | 'Luxury Heritage'
    | 'Wildlife & Coastal'
    | 'Highland Explorer'
    | 'Grand Circuit'
    | 'Coastal Wellness'
    | 'Cultural Heritage';
  idealFor: string;
  bestMonths: string;
  groupType: string;
  inclusions: string[];
  keyStops: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category:
    | 'Ancient Heritage'
    | 'Highlands & Tea'
    | 'Wildlife & Nature'
    | 'Golden Coasts'
    | 'City & Culture';
  location: string;
  image: string;
  caption: string;
  photographerCredit: string;
  aspectRatio?: 'landscape' | 'portrait' | 'square';
}

export interface ItineraryDay {
  day: number;
  title: string;
  location: string;
  distanceKm: number;
  travelTime: string;
  morning: string;
  afternoon: string;
  evening: string;
  highlights: string[];
  insiderTip: string;
  accommodationType: string;
  image: string;
  coordinates: { x: number; y: number };
}

export interface BookingInquiry {
  destinationId?: string;
  packageId?: string;
  departureDate: string;
  travelersCount: number;
  durationDays: number;
  accommodationTier: 'Classic Heritage' | 'Luxury Boutique' | 'Private Villas';
  selectedInterests: string[];
  fullName: string;
  email: string;
  phone: string;
  specialRequests: string;
}
