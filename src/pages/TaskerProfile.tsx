import React from 'react';
import { useParams } from 'react-router-dom';
import { TaskerRatings } from '../components/tasker/TaskerRatings';
import { Star, MapPin, Calendar, CheckCircle } from 'lucide-react';

interface Tasker {
  id: string;
  name: string;
  avatar: string;
  location: string;
  joinedDate: string;
  completedTasks: number;
  description: string;
  skills: string[];
  hourlyRate: number;
  responseRate: number;
  verified: boolean;
}

export function TaskerProfile() {
  const { id } = useParams();
  const [tasker, setTasker] = React.useState<Tasker>({
    id: id || '1',
    name: 'John Smith',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
    location: 'New York, NY',
    joinedDate: '2023-01-15',
    completedTasks: 127,
    description: 'Professional handyman with 5+ years of experience. Specialized in furniture assembly, home repairs, and moving assistance.',
    skills: ['Furniture Assembly', 'Moving', 'Home Repairs', 'Painting'],
    hourlyRate: 35,
    responseRate: 98,
    verified: true,
  });

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Tasker Profile Header */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-start gap-6">
          <img
            src={tasker.avatar}
            alt={tasker.name}
            className="w-32 h-32 rounded-full object-cover"
          />
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h1 className="text-2xl font-bold">{tasker.name}</h1>
              {tasker.verified && (
                <CheckCircle className="h-5 w-5 text-blue-600" />
              )}
            </div>
            <div className="space-y-2 text-gray-600">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{tasker.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Member since {new Date(tasker.joinedDate).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4" />
                <span>{tasker.completedTasks} tasks completed</span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-blue-600">
              ${tasker.hourlyRate}/hr
            </div>
            <div className="text-sm text-gray-600">
              {tasker.responseRate}% response rate
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">About</h2>
          <p className="text-gray-600">{tasker.description}</p>
        </div>

        <div className="mt-4">
          <h2 className="text-lg font-semibold mb-2">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {tasker.skills.map((skill) => (
              <span
                key={skill}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Tasker Reviews */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <TaskerRatings taskerId={tasker.id} />
      </div>
    </div>
  );
}