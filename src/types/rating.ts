export interface Rating {
  id: string;
  taskId: string;
  taskerId: string;
  clientId: string;
  rating: number;
  review: string;
  createdAt: string;
}

export interface TaskerRating {
  averageRating: number;
  totalRatings: number;
  ratings: Rating[];
}