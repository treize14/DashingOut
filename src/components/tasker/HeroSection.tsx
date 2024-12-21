import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';

export function HeroSection() {
  return (
    <section className="relative py-20">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80)',
          opacity: 0.1
        }}
      />
      <div className="relative z-10 text-center space-y-6 max-w-4xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-gray-900">
          Turn Your Skills Into Income
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Join DashingOut as a tasker and start earning money by helping others with their tasks.
          Set your own schedule and choose the jobs that match your skills.
        </p>
        <div className="flex justify-center gap-4">
          <Button
            as={Link}
            to="/register"
            className="inline-flex items-center gap-2 text-lg px-8 py-4"
          >
            Get Started <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}