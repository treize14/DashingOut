import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search } from 'lucide-react';
import { GigGrid } from '../components/gigs/GigGrid';
import { taskCategories } from '../utils/taskCategories';
import { Gig } from '../types/gig';

export function Home() {
  const [popularGigs, setPopularGigs] = React.useState<Gig[]>([]);
  const [searchQuery, setSearchQuery] = React.useState('');

  React.useEffect(() => {
    const mockGigs: Gig[] = [
      {
        id: '1',
        taskerId: '1',
        title: 'Professional Business Registration Service',
        description: 'Expert assistance with company registration and documentation',
        category: 'business_registration',
        pricing: {
          basic: {
            price: 150,
            title: 'Basic Registration',
            description: 'Standard business registration',
            deliveryTime: 3,
            revisions: 1,
            features: ['Document preparation', 'Basic consultation', '3-day delivery'],
          },
          standard: {
            price: 250,
            title: 'Complete Registration',
            description: 'Full registration service',
            deliveryTime: 2,
            revisions: 2,
            features: ['All basic features', 'Priority processing', 'Tax registration'],
          },
        },
        images: ['https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80'],
        tags: ['business', 'registration', 'legal'],
        deliveryTime: 3,
        revisions: 1,
        createdAt: new Date().toISOString(),
        averageRating: 4.9,
        totalReviews: 124,
      },
      {
        id: '2',
        taskerId: '2',
        title: 'Professional Document Delivery',
        description: 'Secure and timely delivery of business documents',
        category: 'document_delivery',
        pricing: {
          basic: {
            price: 50,
            title: 'Standard Delivery',
            description: 'Next-day delivery service',
            deliveryTime: 1,
            revisions: 0,
            features: ['Document pickup', 'Secure handling', 'Next-day delivery'],
          },
        },
        images: ['https://images.unsplash.com/photo-1532372576444-dda954194ad0?auto=format&fit=crop&q=80'],
        tags: ['delivery', 'documents', 'business'],
        deliveryTime: 1,
        revisions: 0,
        createdAt: new Date().toISOString(),
        averageRating: 4.8,
        totalReviews: 89,
      },
      {
        id: '3',
        taskerId: '3',
        title: 'Tax Filing & Documentation',
        description: 'Professional assistance with business tax filing',
        category: 'tax_services',
        pricing: {
          basic: {
            price: 200,
            title: 'Basic Tax Filing',
            description: 'Standard tax filing service',
            deliveryTime: 5,
            revisions: 1,
            features: ['Document review', 'Basic filing', 'Tax calculation'],
          },
        },
        images: ['https://images.unsplash.com/photo-1573497161079-f3fd25cc6b90?auto=format&fit=crop&q=80'],
        tags: ['tax', 'business', 'finance'],
        deliveryTime: 5,
        revisions: 1,
        createdAt: new Date().toISOString(),
        averageRating: 4.7,
        totalReviews: 156,
      },
      {
        id: '4',
        taskerId: '4',
        title: 'Research & Market Analysis',
        description: 'Comprehensive market research and analysis',
        category: 'research',
        pricing: {
          basic: {
            price: 300,
            title: 'Basic Research',
            description: 'Market research report',
            deliveryTime: 7,
            revisions: 2,
            features: ['Data collection', 'Analysis', 'Report generation'],
          },
        },
        images: ['https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80'],
        tags: ['research', 'analysis', 'business'],
        deliveryTime: 7,
        revisions: 2,
        createdAt: new Date().toISOString(),
        averageRating: 4.9,
        totalReviews: 78,
      },
    ];
    setPopularGigs(mockGigs);
  }, []);

  return (
    <div className="space-y-16">
      {/* Hero Section with background image */}
      <section className="relative py-24">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80)',
            filter: 'brightness(0.3)'
          }}
        />
        <div className="relative z-10 text-center space-y-8 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-white">
            Your Trusted Platform for Getting Things Done
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Connect with skilled taskers to help with business registration, document delivery, research, and more.
            Experience reliability and professionalism with every task.
          </p>
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search for any service..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-4 rounded-full border-2 border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-500 text-gray-900"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Popular Categories with category images */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Popular Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Link
            to="/categories/business_registration"
            className="group relative overflow-hidden rounded-lg aspect-square"
          >
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80"
              alt="Business Registration"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 flex items-end p-4">
              <span className="text-white font-medium">Business Registration</span>
            </div>
          </Link>
          
          <Link
            to="/categories/document_delivery"
            className="group relative overflow-hidden rounded-lg aspect-square"
          >
            <img
              src="https://images.unsplash.com/photo-1532372576444-dda954194ad0?auto=format&fit=crop&q=80"
              alt="Document Delivery"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 flex items-end p-4">
              <span className="text-white font-medium">Document Delivery</span>
            </div>
          </Link>
          
          <Link
            to="/categories/research"
            className="group relative overflow-hidden rounded-lg aspect-square"
          >
            <img
              src="https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80"
              alt="Research Services"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 flex items-end p-4">
              <span className="text-white font-medium">Research Services</span>
            </div>
          </Link>
          
          <Link
            to="/categories/tax_services"
            className="group relative overflow-hidden rounded-lg aspect-square"
          >
            <img
              src="https://images.unsplash.com/photo-1573497161079-f3fd25cc6b90?auto=format&fit=crop&q=80"
              alt="Tax Services"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 flex items-end p-4">
              <span className="text-white font-medium">Tax Services</span>
            </div>
          </Link>
        </div>
      </section>

      {/* Popular Services */}
      <section className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Popular Services</h2>
          <Link
            to="/gigs"
            className="text-blue-600 hover:text-blue-700 flex items-center gap-1 font-medium"
          >
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <GigGrid gigs={popularGigs} />
      </section>
    </div>
  );
}