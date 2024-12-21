import React from 'react';

const steps = [
  {
    step: '1',
    title: 'Sign Up',
    description: 'Create your account and complete your profile with your skills and experience.',
  },
  {
    step: '2',
    title: 'Get Verified',
    description: 'Complete our background check process for safety and trust.',
  },
  {
    step: '3',
    title: 'Set Your Schedule',
    description: 'Choose your availability and working hours that suit you best.',
  },
  {
    step: '4',
    title: 'Start Earning',
    description: 'Accept tasks and start earning money while helping others.',
  },
];

export function ProcessSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-center space-y-4">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-6 left-[60%] w-[80%] h-[2px] bg-blue-200" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}