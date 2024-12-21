import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from '../ui/Input';
import { TextArea } from '../ui/TextArea';
import { Button } from '../ui/Button';
import { TaskProposal } from '../../types/chat';

const proposalSchema = z.object({
  taskTitle: z.string().min(5, 'Title must be at least 5 characters'),
  description: z.string().min(20, 'Description must be at least 20 characters'),
  budget: z.number().min(5, 'Minimum budget is $5'),
  timeline: z.number().min(1, 'Timeline must be at least 1 day'),
  milestones: z.array(z.object({
    description: z.string().min(5, 'Milestone description must be at least 5 characters'),
    percentage: z.number().min(1).max(100),
  })).min(1, 'At least one milestone is required'),
});

type ProposalFormData = z.infer<typeof proposalSchema>;

interface TaskProposalFormProps {
  onSubmit: (proposal: TaskProposal) => void;
  onCancel: () => void;
}

export function TaskProposalForm({ onSubmit, onCancel }: TaskProposalFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<ProposalFormData>({
    resolver: zodResolver(proposalSchema),
    defaultValues: {
      milestones: [
        { description: '', percentage: 50 },
        { description: '', percentage: 50 },
      ],
    },
  });

  const milestones = watch('milestones');
  const totalPercentage = milestones.reduce((sum, m) => sum + (m.percentage || 0), 0);

  const handleFormSubmit = (data: ProposalFormData) => {
    const proposal: TaskProposal = {
      ...data,
      milestones: data.milestones.map(m => ({ ...m, completed: false })),
    };
    onSubmit(proposal);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
      <h3 className="text-lg font-semibold">Create Task Proposal</h3>

      <Input
        label="Task Title"
        {...register('taskTitle')}
        error={errors.taskTitle?.message}
      />

      <TextArea
        label="Description"
        {...register('description')}
        error={errors.description?.message}
        rows={3}
      />

      <div className="grid grid-cols-2 gap-4">
        <Input
          label="Budget ($)"
          type="number"
          {...register('budget', { valueAsNumber: true })}
          error={errors.budget?.message}
        />

        <Input
          label="Timeline (days)"
          type="number"
          {...register('timeline', { valueAsNumber: true })}
          error={errors.timeline?.message}
        />
      </div>

      <div className="space-y-4">
        <h4 className="font-medium">Payment Milestones</h4>
        {milestones.map((_, index) => (
          <div key={index} className="grid grid-cols-3 gap-4">
            <div className="col-span-2">
              <Input
                placeholder={`Milestone ${index + 1}`}
                {...register(`milestones.${index}.description`)}
                error={errors.milestones?.[index]?.description?.message}
              />
            </div>
            <div>
              <Input
                type="number"
                placeholder="Percentage"
                {...register(`milestones.${index}.percentage`, { valueAsNumber: true })}
                error={errors.milestones?.[index]?.percentage?.message}
              />
            </div>
          </div>
        ))}
        {totalPercentage !== 100 && (
          <p className="text-sm text-red-600">
            Total percentage must equal 100% (currently {totalPercentage}%)
          </p>
        )}
      </div>

      <div className="flex justify-end gap-2">
        <Button type="button" variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">
          Send Proposal
        </Button>
      </div>
    </form>
  );
}