import { TaskCategory } from './task';

export interface Gig {
  id: string;
  taskerId: string;
  title: string;
  description: string;
  category: TaskCategory;
  pricing: {
    basic: PricingTier;
    standard?: PricingTier;
    premium?: PricingTier;
  };
  images: string[];
  tags: string[];
  deliveryTime: number; // in days
  revisions: number;
  createdAt: string;
  averageRating: number;
  totalReviews: number;
}

export interface PricingTier {
  price: number;
  title: string;
  description: string;
  deliveryTime: number; // in days
  revisions: number;
  features: string[];
}