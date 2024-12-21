import React from 'react';
import { cn } from '../../utils/cn';
import { TaskStatus } from '../../types/task';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: TaskStatus;
  children: React.ReactNode;
}

export function Badge({ variant, className, children, ...props }: BadgeProps) {
  const variants = {
    open: 'bg-green-100 text-green-800',
    assigned: 'bg-blue-100 text-blue-800',
    in_progress: 'bg-yellow-100 text-yellow-800',
    completed: 'bg-gray-100 text-gray-800',
    cancelled: 'bg-red-100 text-red-800',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
        variant && variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}