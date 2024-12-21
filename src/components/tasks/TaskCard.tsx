import React from 'react';
import { MapPin, Calendar, DollarSign } from 'lucide-react';
import { Task } from '../../types/task';
import { formatDate } from '../../utils/formatDate';
import { formatCurrency } from '../../utils/formatCurrency';
import { Badge } from '../ui/Badge';

interface TaskCardProps {
  task: Task;
  onClick?: () => void;
}

export function TaskCard({ task, onClick }: TaskCardProps) {
  return (
    <div
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
      onClick={onClick}
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{task.title}</h3>
        <Badge variant={task.status}>{task.status}</Badge>
      </div>

      <p className="text-gray-600 mb-4 line-clamp-2">{task.description}</p>

      <div className="space-y-2 text-sm text-gray-500">
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4" />
          <span>{task.location.address}</span>
        </div>

        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          <span>{formatDate(task.createdAt)}</span>
        </div>

        <div className="flex items-center gap-2">
          <DollarSign className="h-4 w-4" />
          <span>{formatCurrency(task.budget)}</span>
        </div>
      </div>
    </div>
  );
}