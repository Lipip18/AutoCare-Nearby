import { Link } from 'react-router';
import { MapPin, Calendar, Wrench, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    icon: MapPin,
    number: '01',
    title: 'Find a Location',
    description: 'Search for nearby auto care centers using our location finder. See real-time availability and reviews.',
    color: 'teal'
  },
  {
    icon: Calendar,
    number: '02',
    title: 'Book Your Service',
    description: 'Choose a convenient time slot and select the services you need. Get instant price estimates.',
    color: 'orange'
  },
  {
    icon: Wrench,
    number: '03',
    title: 'Get Expert Care',
    description: 'Our certified technicians will service your vehicle using quality parts and advanced equipment.',
    color: 'purple'
  },
  {
    icon: CheckCircle2,
    number: '04',
    title: 'Drive with Confidence',
    description: 'Receive a detailed service report and warranty. Enjoy peace of mind on every journey.',
    color: 'teal'
  }
];

const colorClasses = {
  purple: {
    bg: 'bg-purple-100',
    icon: 'text-purple-600',
    number: 'bg-purple-600',
    border: 'border-purple-100'
  },
  teal: {
    bg: 'bg-teal-100',
    icon: 'text-teal-600',
    number: 'bg-teal-600',
    border: 'border-teal-100'
  },
  orange: {
    bg: 'bg-orange-100',
    icon: 'text-orange-600',
    number: 'bg-orange-600',
    border: 'border-orange-100'
  }
};

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-4">
            <CheckCircle2 className="w-4 h-4" />
            <span className="text-sm">Simple Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600">
            Getting your vehicle serviced has never been easier. Follow these simple steps to book your service today.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const colors = colorClasses[step.color as keyof typeof colorClasses];
            return (
              <div key={index} className="relative">
                {/* Connector Line (desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-1/2 w-full h-0.5 bg-gray-300"></div>
                )}
                
                <div className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border ${colors.border}`}>
                  {/* Step Number */}
                  <div className={`absolute -top-4 -right-4 w-12 h-12 ${colors.number} rounded-full flex items-center justify-center shadow-lg`}>
                    <span className="text-white text-sm">{step.number}</span>
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center mb-6`}>
                    <Icon className={`w-8 h-8 ${colors.icon}`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <Link to="/book-service">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300">
              Get Started Now
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}