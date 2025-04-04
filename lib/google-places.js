export async function fetchGoogleReviews(placeId) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY;
  const url = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=${apiKey}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch Google reviews');
  }
  return response.json();
}