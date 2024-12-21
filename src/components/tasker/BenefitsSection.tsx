import React from 'react';
import { Wallet, Clock, CheckSquare } from 'lucide-react';

const benefits = [
  {
    icon: Clock,
    title: 'Flexible Schedule',
    description: 'Work when you want, where you want. You\'re in control of your time.',
  },
  {
    icon: Wallet,
    title: 'Competitive Pay',
    description: 'Set your own rates and earn what you deserve for your skills and time.',
  },
  {
    icon: CheckSquare,
    title: 'Choose Your Tasks',
    description: 'Pick the jobs that match your skills and interests.',
  },
];

export function BenefitsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose DashingOut?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md text-center space-y-4 hover:shadow-lg transition-shadow"
            >
              <benefit.icon className="h-12 w-12 text-blue-600 mx-auto" />
              <h3 className="text-xl font-semibold">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}