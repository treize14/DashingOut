import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { taskCategories } from '../../utils/taskCategories';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { TextArea } from '../ui/TextArea';
import { Select } from '../ui/Select';

const taskSchema = z.object({
  title: z.string().min(5, 'Title must be at least 5 characters'),
  description: z.string().min(20, 'Description must be at least 20 characters'),
  category: z.string(),
  budget: z.number().min(5, 'Minimum budget is $5'),
  location: z.string().min(5, 'Please enter a valid address'),
  dueDate: z.string().optional(),
});

type TaskFormData = z.infer<typeof taskSchema>;

interface TaskFormProps {
  onSubmit: (data: TaskFormData) => void;
  isLoading?: boolean;
}

export function TaskForm({ onSubmit, isLoading }: TaskFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TaskFormData>({
    resolver: zodResolver(taskSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <Input
          label="Task Title"
          {...register('title')}
          error={errors.title?.message}
          placeholder="e.g., Help me move furniture"
        />
      </div>

      <div>
        <TextArea
          label="Description"
          {...register('description')}
          error={errors.description?.message}
          placeholder="Describe your task in detail..."
          rows={4}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Select
          label="Category"
          {...register('category')}
          error={errors.category?.message}
        >
          <option value="">Select a category</option>
          {taskCategories.map((category) => (
            <option key={category.value} value={category.value}>
              {category.label}
            </option>
          ))}
        </Select>

        <Input
          label="Budget ($)"
          type="number"
          {...register('budget', { valueAsNumber: true })}
          error={errors.budget?.message}
          placeholder="Enter your budget"
          min={5}
        />
      </div>

      <div>
        <Input
          label="Location"
          {...register('location')}
          error={errors.location?.message}
          placeholder="Enter task location"
        />
      </div>

      <div>
        <Input
          label="Due Date (Optional)"
          type="datetime-local"
          {...register('dueDate')}
          error={errors.dueDate?.message}
        />
      </div>

      <Button type="submit" isLoading={isLoading}>
        Create Task
      </Button>
    </form>
  );
}