import { fetchGoogleReviews } from '@/lib/google-places';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    console.log('Fetching Google Reviews...');
    const data = await fetchGoogleReviews();
    console.log('Google Reviews fetched successfully:', data);
    return NextResponse.json(data);
  } catch (error: unknown) {
    console.error('Error in Google Reviews API route:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    return NextResponse.json(
      { error: 'Failed to fetch reviews', details: errorMessage },
      { status: 500 }
    );
  }
}