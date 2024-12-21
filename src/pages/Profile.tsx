import React from 'react';
import { useAuth } from '../contexts/AuthContext';

export function Profile() {
  const { user } = useAuth();

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Profile</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-sm font-medium text-gray-500">Name</h2>
            <p className="mt-1 text-sm text-gray-900">{user?.name}</p>
          </div>
          <div>
            <h2 className="text-sm font-medium text-gray-500">Email</h2>
            <p className="mt-1 text-sm text-gray-900">{user?.email}</p>
          </div>
          <div>
            <h2 className="text-sm font-medium text-gray-500">Role</h2>
            <p className="mt-1 text-sm text-gray-900">{user?.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}