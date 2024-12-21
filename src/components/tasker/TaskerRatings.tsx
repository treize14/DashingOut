import React from 'react';
import { Rating, TaskerRating } from '../../types/rating';
import { RatingSummary } from '../rating/RatingSummary';
import { RatingsList } from '../rating/RatingsList';
import { RatingForm } from '../rating/RatingForm';

interface TaskerRatingsProps {
  taskerId: string;
  canRate?: boolean;
}

export function TaskerRatings({ taskerId, canRate }: TaskerRatingsProps) {
  const [isLoading, setIsLoading] = React.useState(false);
  const [taskerRating, setTaskerRating] = React.useState<TaskerRating>({
    averageRating: 4.5,
    totalRatings: 2,
    ratings: [
      {
        id: '1',
        taskId: '1',
        taskerId,
        clientId: '2',
        rating: 5,
        review: 'Excellent service! Very professional and completed the task perfectly.',
        createdAt: new Date().toISOString(),
      },
      {
        id: '2',
        taskId: '2',
        taskerId,
        clientId: '3',
        rating: 4,
        review: 'Great work, would definitely hire again.',
        createdAt: new Date(Date.now() - 86400000).toISOString(),
      },
    ],
  });

  const handleSubmitRating = async (data: { rating: number; review: string }) => {
    try {
      setIsLoading(true);
      // TODO: Submit rating to API
      const newRating: Rating = {
        id: String(taskerRating.ratings.length + 1),
        taskId: '3',
        taskerId,
        clientId: '4',
        rating: data.rating,
        review: data.review,
        createdAt: new Date().toISOString(),
      };

      setTaskerRating((prev) => ({
        averageRating:
          (prev.averageRating * prev.totalRatings + data.rating) /
          (prev.totalRatings + 1),
        totalRatings: prev.totalRatings + 1,
        ratings: [newRating, ...prev.ratings],
      }));
    } catch (error) {
      console.error('Failed to submit rating:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <RatingSummary
        averageRating={taskerRating.averageRating}
        totalRatings={taskerRating.totalRatings}
      />

      {canRate && (
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Write a Review</h3>
          <RatingForm onSubmit={handleSubmitRating} isLoading={isLoading} />
        </div>
      )}

      <div>
        <h3 className="text-lg font-semibold mb-4">Reviews</h3>
        <RatingsList ratings={taskerRating.ratings} />
      </div>
    </div>
  );
}