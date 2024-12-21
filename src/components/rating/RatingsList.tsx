import React from 'react';
import { Rating } from '../../types/rating';
import { RatingStars } from './RatingStars';
import { formatDate } from '../../utils/formatDate';

interface RatingsListProps {
  ratings: Rating[];
}

export function RatingsList({ ratings }: RatingsListProps) {
  if (ratings.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No reviews yet
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {ratings.map((rating) => (
        <div key={rating.id} className="border-b border-gray-200 pb-6">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <RatingStars rating={rating.rating} size="sm" />
              <span className="text-sm text-gray-500">
                {formatDate(rating.createdAt)}
              </span>
            </div>
          </div>
          <p className="text-gray-700">{rating.review}</p>
        </div>
      ))}
    </div>
  );
}