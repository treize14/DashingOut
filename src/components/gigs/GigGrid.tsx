import React from 'react';
import { Gig } from '../../types/gig';
import { GigCard } from './GigCard';

interface GigGridProps {
  gigs: Gig[];
}

export function GigGrid({ gigs }: GigGridProps) {
  if (gigs.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No gigs found</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {gigs.map((gig) => (
        <GigCard key={gig.id} gig={gig} />
      ))}
    </div>
  );
}