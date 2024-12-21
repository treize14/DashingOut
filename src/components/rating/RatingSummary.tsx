import React from 'react';
import { RatingStars } from './RatingStars';

interface RatingSummaryProps {
  averageRating: number;
  totalRatings: number;
}

export function RatingSummary({ averageRating, totalRatings }: RatingSummaryProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        <RatingStars rating={averageRating} size="lg" />
        <span className="text-2xl font-bold text-gray-900">
          {averageRating.toFixed(1)}
        </span>
      </div>
      <div className="text-sm text-gray-500">
        {totalRatings} {totalRatings === 1 ? 'review' : 'reviews'}
      </div>
    </div>
  );
}