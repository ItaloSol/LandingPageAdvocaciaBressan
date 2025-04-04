import { cache } from 'react';

export interface GoogleReview {
  author_name: string;
  rating: number;
  text: string;
  time: number;
  profile_photo_url: string;
  relative_time_description: string;
  language: string;
}

interface PlaceDetails {
  result: {
    reviews: GoogleReview[];
    rating: number;
    user_ratings_total: number;
  };
}

const CACHE_TIME = 24 * 60 * 60 * 1000; // 24 hours
let cachedData: PlaceDetails | null = null;
let lastFetch = 0;

export const fetchGoogleReviews = cache(async () => {
  const now = Date.now();
  
  // Return cached data if it's still valid
  if (cachedData && (now - lastFetch < CACHE_TIME)) {
    return cachedData;
  }

  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJ_xo3dAGtupQRCEBkBj-jRho&fields=reviews,rating,user_ratings_total&language=pt-BR&key=${process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY}`,
      { next: { revalidate: 86400 } } // Revalidate once per day
    );

    if (!response.ok) {
      throw new Error('Failed to fetch Google Reviews');
    }

    const data: PlaceDetails = await response.json();
    
    // Update cache
    cachedData = data;
    lastFetch = now;
    
    return data;
  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    
    // Return cached data if available, even if expired
    if (cachedData) {
      return cachedData;
    }
    
    // Return fallback data if no cache available
    return {
      result: {
        reviews: [],
        rating: 5,
        user_ratings_total: 0
      }
    };
  }
});