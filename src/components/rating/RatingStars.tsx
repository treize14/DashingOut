import React from 'react';
import { Star } from 'lucide-react';
import { cn } from '../../utils/cn';

interface RatingStarsProps {
  rating: number;
  maxRating?: number;
  size?: 'sm' | 'md' | 'lg';
  interactive?: boolean;
  onChange?: (rating: number) => void;
}

export function RatingStars({
  rating,
  maxRating = 5,
  size = 'md',
  interactive = false,
  onChange,
}: RatingStarsProps) {
  const [hoverRating, setHoverRating] = React.useState(0);

  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  return (
    <div className="flex items-center gap-1">
      {[...Array(maxRating)].map((_, index) => {
        const starRating = index + 1;
        const filled = interactive
          ? starRating <= (hoverRating || rating)
          : starRating <= rating;

        return (
          <button
            key={index}
            type={interactive ? 'button' : undefined}
            onClick={() => interactive && onChange?.(starRating)}
            onMouseEnter={() => interactive && setHoverRating(starRating)}
            onMouseLeave={() => interactive && setHoverRating(0)}
            className={cn(
              'focus:outline-none',
              interactive && 'cursor-pointer hover:scale-110 transition-transform'
            )}
            disabled={!interactive}
          >
            <Star
              className={cn(
                sizes[size],
                filled
                  ? 'text-yellow-400 fill-yellow-400'
                  : 'text-gray-300 fill-gray-300'
              )}
            />
          </button>
        );
      })}
    </div>
  );
}