export interface Task {
  id: string;
  title: string;
  description: string;
  category: TaskCategory;
  budget: number;
  location: {
    address: string;
    latitude?: number;
    longitude?: number;
  };
  status: TaskStatus;
  createdAt: string;
  dueDate?: string;
  clientId: string;
  taskerId?: string;
}

export type TaskCategory =
  | 'business_registration'
  | 'pharmacy_runs'
  | 'research'
  | 'government_services'
  | 'document_delivery'
  | 'tax_services'
  | 'home_maintenance'
  | 'cleaning'
  | 'moving'
  | 'delivery'
  | 'personal_assistant'
  | 'gardening'
  | 'tech_support'
  | 'other';

export type TaskStatus =
  | 'open'
  | 'assigned'
  | 'in_progress'
  | 'completed'
  | 'cancelled';