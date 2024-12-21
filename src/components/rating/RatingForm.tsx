import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { RatingStars } from './RatingStars';
import { TextArea } from '../ui/TextArea';
import { Button } from '../ui/Button';

const ratingSchema = z.object({
  rating: z.number().min(1).max(5),
  review: z.string().min(10, 'Review must be at least 10 characters'),
});

type RatingFormData = z.infer<typeof ratingSchema>;

interface RatingFormProps {
  onSubmit: (data: RatingFormData) => void;
  isLoading?: boolean;
}

export function RatingForm({ onSubmit, isLoading }: RatingFormProps) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<RatingFormData>({
    resolver: zodResolver(ratingSchema),
  });

  const handleRatingChange = (rating: number) => {
    setValue('rating', rating, { shouldValidate: true });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Rating
        </label>
        <RatingStars
          rating={0}
          interactive
          size="lg"
          onChange={handleRatingChange}
        />
        {errors.rating && (
          <p className="mt-1 text-sm text-red-600">{errors.rating.message}</p>
        )}
      </div>

      <TextArea
        label="Review"
        {...register('review')}
        error={errors.review?.message}
        placeholder="Share your experience with this tasker..."
        rows={4}
      />

      <Button type="submit" isLoading={isLoading}>
        Submit Review
      </Button>
    </form>
  );
}