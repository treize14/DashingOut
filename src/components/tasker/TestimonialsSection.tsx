import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Oluwaseun Adebayo',
    role: 'Professional Tasker',
    image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&q=80',
    quote: 'DashingOut has given me the flexibility to earn extra income while maintaining my work-life balance. The platform is easy to use and the clients are great!',
    rating: 5,
  },
  {
    name: 'Kwame Mensah',
    role: 'Part-time Tasker',
    image: 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&q=80',
    quote: 'I started as a weekend tasker and now I am making a full-time income. The support from the DashingOut team has been incredible throughout my journey.',
    rating: 5,
  },
  {
    name: 'Amara Okafor',
    role: 'Student Tasker',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80',
    quote: 'As a student, DashingOut helps me earn money between classes. I can choose tasks that fit my schedule and skills perfectly.',
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Taskers Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md space-y-4"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  <div className="flex items-center mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <blockquote className="text-gray-600 italic">
                "{testimonial.quote}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}