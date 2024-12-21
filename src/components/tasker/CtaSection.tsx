import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';

export function CtaSection() {
  return (
    <section className="bg-blue-600 text-white py-16">
      <div className="container mx-auto px-4 text-center space-y-6">
        <h2 className="text-3xl font-bold">Ready to Start Earning?</h2>
        <p className="text-lg max-w-2xl mx-auto">
          Join thousands of taskers who are already earning money on their own terms with DashingOut.
        </p>
        <Button
          as={Link}
          to="/register"
          variant="outline"
          className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 text-lg"
        >
          Sign Up Now
        </Button>
      </div>
    </section>
  );
}