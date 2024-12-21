import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { TaskList } from '../components/tasks/TaskList';
import { Task } from '../types/task';

export function Dashboard() {
  const { user } = useAuth();
  const [tasks, setTasks] = React.useState<Task[]>([]);

  React.useEffect(() => {
    // TODO: Fetch user's tasks from API
    const mockTasks: Task[] = [
      {
        id: '1',
        title: 'Help with Moving Furniture',
        description: 'Need help moving furniture from a 2-bedroom apartment to a new house.',
        category: 'moving',
        budget: 150,
        location: {
          address: '123 Main St, New York, NY',
        },
        status: 'open',
        createdAt: new Date().toISOString(),
        clientId: user?.id || '',
      },
    ];
    setTasks(mockTasks);
  }, [user?.id]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-2">Active Tasks</h2>
          <p className="text-3xl font-bold text-blue-600">
            {tasks.filter(task => task.status === 'in_progress').length}
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-2">Completed Tasks</h2>
          <p className="text-3xl font-bold text-green-600">
            {tasks.filter(task => task.status === 'completed').length}
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-2">Total Earnings</h2>
          <p className="text-3xl font-bold text-purple-600">
            ${tasks.reduce((sum, task) => sum + (task.status === 'completed' ? task.budget : 0), 0)}
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Tasks</h2>
        <TaskList tasks={tasks} />
      </div>
    </div>
  );
}