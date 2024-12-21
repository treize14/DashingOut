export interface ChatMessage {
  id: string;
  taskId?: string;
  senderId: string;
  receiverId: string;
  content: string;
  createdAt: string;
}

export interface TaskProposal {
  taskTitle: string;
  description: string;
  budget: number;
  timeline: number; // in days
  milestones: {
    description: string;
    percentage: number;
    completed: boolean;
  }[];
}