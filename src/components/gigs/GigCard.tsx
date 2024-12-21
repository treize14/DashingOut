import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock } from 'lucide-react';
import { Gig } from '../../types/gig';
import { formatCurrency } from '../../utils/formatCurrency';

interface GigCardProps {
  gig: Gig;
}

export function GigCard({ gig }: GigCardProps) {
  return (
    <Link to={`/gigs/${gig.id}`} className="block">
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
        <div className="aspect-w-16 aspect-h-9">
          <img
            src={gig.images[0]}
            alt={gig.title}
            className="w-full h-48 object-cover"
          />
        </div>
        <div className="p-4">
          <div className="flex items-start gap-3 mb-3">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
              alt="Tasker"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <h3 className="font-medium text-gray-900 line-clamp-2">
                {gig.title}
              </h3>
              <div className="flex items-center gap-1 text-sm text-gray-600">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span>{gig.averageRating.toFixed(1)}</span>
                <span>({gig.totalReviews})</span>
              </div>
            </div>
          </div>
          <div className="border-t pt-3">
            <div className="flex items-center justify-between text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{gig.deliveryTime} days</span>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-500">Starting at</p>
                <p className="text-base font-medium text-gray-900">
                  {formatCurrency(gig.pricing.basic.price)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}