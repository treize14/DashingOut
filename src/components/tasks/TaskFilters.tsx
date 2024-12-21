import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';
import { taskCategories } from '../../utils/taskCategories';

interface TaskFiltersProps {
  onFilterChange: (filters: TaskFilters) => void;
}

export interface TaskFilters {
  search: string;
  category: string;
  sortBy: 'recent' | 'budget_high' | 'budget_low';
}

export function TaskFilters({ onFilterChange }: TaskFiltersProps) {
  const [filters, setFilters] = React.useState<TaskFilters>({
    search: '',
    category: '',
    sortBy: 'recent',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const newFilters = {
      ...filters,
      [e.target.name]: e.target.value,
    };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <Input
          name="search"
          value={filters.search}
          onChange={handleChange}
          placeholder="Search tasks..."
          className="pl-10"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Select
          name="category"
          value={filters.category}
          onChange={handleChange}
        >
          <option value="">All Categories</option>
          {taskCategories.map((category) => (
            <option key={category.value} value={category.value}>
              {category.label}
            </option>
          ))}
        </Select>

        <Select
          name="sortBy"
          value={filters.sortBy}
          onChange={handleChange}
        >
          <option value="recent">Most Recent</option>
          <option value="budget_high">Highest Budget</option>
          <option value="budget_low">Lowest Budget</option>
        </Select>
      </div>
    </div>
  );
}