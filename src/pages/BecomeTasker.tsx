import React from 'react';
import { HeroSection } from '../components/tasker/HeroSection';
import { BenefitsSection } from '../components/tasker/BenefitsSection';
import { ProcessSection } from '../components/tasker/ProcessSection';
import { TestimonialsSection } from '../components/tasker/TestimonialsSection';
import { CtaSection } from '../components/tasker/CtaSection';

export function BecomeTasker() {
  return (
    <div className="space-y-0">
      <HeroSection />
      <BenefitsSection />
      <ProcessSection />
      <TestimonialsSection />
      <CtaSection />
    </div>
  );
}