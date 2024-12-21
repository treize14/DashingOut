import React from 'react';
import { TaskList } from '../components/tasks/TaskList';
import { TaskFilters, TaskFilters as TaskFiltersType } from '../components/tasks/TaskFilters';
import { Task } from '../types/task';

export function Tasks() {
  const [tasks, setTasks] = React.useState<Task[]>([]);
  const [filteredTasks, setFilteredTasks] = React.useState<Task[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    // TODO: Replace with actual API call
    const fetchTasks = async () => {
      try {
        // Simulating API call with mock data
        const mockTasks: Task[] = [
          {
            id: '1',
            title: 'Business Registration Assistance',
            description: 'Need help with company registration process at the local office.',
            category: 'business_registration',
            budget: 200,
            location: {
              address: '123 Business Ave, New York, NY',
            },
            status: 'open',
            createdAt: new Date().toISOString(),
            clientId: '1',
          },
          {
            id: '2',
            title: 'Pharmacy Prescription Pickup',
            description: 'Need someone to pick up monthly prescription from CVS.',
            category: 'pharmacy_runs',
            budget: 50,
            location: {
              address: '456 Health St, New York, NY',
            },
            status: 'open',
            createdAt: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
            clientId: '2',
          },
          {
            id: '3',
            title: 'Market Research Project',
            description: 'Conduct local market research for new business venture.',
            category: 'research',
            budget: 300,
            location: {
              address: '789 Market Rd, New York, NY',
            },
            status: 'in_progress',
            createdAt: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
            clientId: '3',
          },
          {
            id: '4',
            title: 'Tax Filing Assistance',
            description: 'Need help with business tax filing and documentation.',
            category: 'tax_services',
            budget: 250,
            location: {
              address: '321 Tax Court, New York, NY',
            },
            status: 'open',
            createdAt: new Date(Date.now() - 259200000).toISOString(), // 3 days ago
            clientId: '4',
          },
        ];
        setTasks(mockTasks);
        setFilteredTasks(mockTasks);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTasks();
  }, []);

  const handleFilterChange = (filters: TaskFiltersType) => {
    let filtered = [...tasks];

    // Apply search filter
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      filtered = filtered.filter(
        (task) =>
          task.title.toLowerCase().includes(searchLower) ||
          task.description.toLowerCase().includes(searchLower) ||
          task.location.address.toLowerCase().includes(searchLower)
      );
    }

    // Apply category filter
    if (filters.category) {
      filtered = filtered.filter((task) => task.category === filters.category);
    }

    // Apply sorting
    switch (filters.sortBy) {
      case 'budget_high':
        filtered.sort((a, b) => b.budget - a.budget);
        break;
      case 'budget_low':
        filtered.sort((a, b) => a.budget - b.budget);
        break;
      case 'recent':
      default:
        filtered.sort(
          (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
    }

    setFilteredTasks(filtered);
  };

  const handleTaskClick = (task: Task) => {
    // TODO: Navigate to task details page
    console.log('Task clicked:', task);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Available Tasks</h1>
        <div className="text-sm text-gray-500">
          {filteredTasks.length} {filteredTasks.length === 1 ? 'task' : 'tasks'} found
        </div>
      </div>

      <TaskFilters onFilterChange={handleFilterChange} />

      <TaskList tasks={filteredTasks} onTaskClick={handleTaskClick} />
    </div>
  );
}