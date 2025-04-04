"use client";

import { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import useSWR from 'swr';
import { GoogleReview } from '@/lib/google-places';

const ITEMS_PER_PAGE = 3;

export default function GoogleReviews() {
  const [currentPage, setCurrentPage] = useState(0);
  
  // Update the SWR hook to fetch reviews using the correct place ID
  const { data, error, isLoading } = useSWR('/api/google-reviews?placeId=0x94bdad0174371a1f:0x1a6c9a3fa0643c08', async () => {
    const response = await fetch('/api/google-reviews?placeId=0x94bdad0174371a1f:0x1a6c9a3fa0643c08');
    if (!response.ok) throw new Error('Failed to fetch reviews');
    return response.json();
  });

  const reviews = data?.result?.reviews || [];
  const rating = data?.result?.rating || 5;
  const totalReviews = data?.result?.user_ratings_total || 0;
  
  const totalPages = Math.ceil(reviews.length / ITEMS_PER_PAGE);
  const currentReviews = reviews.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  if (error) {
    console.error('Error loading reviews:', error);
  }

  return (
    <section className="section-padding bg-[#1A1A1A]">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              O Que Nossos <span className="text-[#C4A45F]">Clientes Dizem</span>
            </h2>
            <div className="flex items-center justify-center gap-1 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-6 h-6 ${star <= rating ? 'fill-[#C4A45F]' : 'fill-gray-400'} text-[#C4A45F]`}
                  aria-hidden="true"
                />
              ))}
            </div>
            <p className="text-xl text-white/80">
              {rating.toFixed(1)} de média baseado em {totalReviews} avaliações no Google
            </p>
          </div>
        </ScrollReveal>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {isLoading ? (
              // Loading skeleton
              [...Array(3)].map((_, index) => (
                <div
                  key={index}
                  className="bg-[#0A0A0A] rounded-xl p-6 border border-[#C4A45F]/20 animate-pulse"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#C4A45F]/20"></div>
                    <div className="flex-1">
                      <div className="h-6 bg-[#C4A45F]/20 rounded w-3/4 mb-2"></div>
                      <div className="h-4 bg-[#C4A45F]/20 rounded w-1/2"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 bg-[#C4A45F]/20 rounded w-full"></div>
                    <div className="h-4 bg-[#C4A45F]/20 rounded w-5/6"></div>
                    <div className="h-4 bg-[#C4A45F]/20 rounded w-4/6"></div>
                  </div>
                </div>
              ))
            ) : (
              currentReviews.map((review: GoogleReview, index: number) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div className="bg-[#0A0A0A] rounded-xl p-6 border border-[#C4A45F]/20
                                hover:border-[#C4A45F] transition-all duration-300
                                hover:scale-105 hover:shadow-lg hover:shadow-[#C4A45F]/20">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-[#C4A45F]/20 flex items-center justify-center flex-shrink-0">
                        {review.profile_photo_url ? (
                          <img
                            src={review.profile_photo_url}
                            alt={review.author_name}
                            className="w-full h-full rounded-full object-cover"
                          />
                        ) : (
                          <Quote className="w-6 h-6 text-[#C4A45F]" />
                        )}
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-white mb-1">
                          {review.author_name}
                        </h3>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < review.rating ? 'fill-[#C4A45F]' : 'fill-gray-400'
                              } text-[#C4A45F]`}
                              aria-hidden="true"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <blockquote className="mb-4">
                      <p className="text-white/80 italic">&ldquo;{review.text}&rdquo;</p>
                    </blockquote>
                    
                    <p className="text-sm text-white/60">
                      {review.relative_time_description}
                    </p>
                  </div>
                </ScrollReveal>
              ))
            )}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={prevPage}
                className="p-2 rounded-full bg-[#C4A45F]/20 text-[#C4A45F] hover:bg-[#C4A45F]/30 transition-colors"
                aria-label="Previous page"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <span className="text-white/80">
                {currentPage + 1} de {totalPages}
              </span>
              <button
                onClick={nextPage}
                className="p-2 rounded-full bg-[#C4A45F]/20 text-[#C4A45F] hover:bg-[#C4A45F]/30 transition-colors"
                aria-label="Next page"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          )}
        </div>

        <ScrollReveal delay={0.6}>
          <div className="mt-12 text-center">
            <a
              href="https://www.google.com/maps/place/Advocacia+Bressan/@-20.8191113,-49.3999965,15z/data=!4m8!3m7!1s0x94bdad0174371a1f:0x1a6c9a3fa0643c08!8m2!3d-20.8191113!4d-49.3999965!9m1!1b1!16s%2Fg%2F11pf8fx9yr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-lg
                       hover:bg-gray-100 hover:scale-105 transition-all duration-300 
                       focus:ring-2 focus:ring-white focus:ring-offset-2 focus:outline-none"
            >
              Ver Todas as Avaliações no Google
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}