import { Shield, Clock, DollarSign, Award, HeadphonesIcon, MapPin } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Certified Technicians',
    description: 'All our mechanics are ASE-certified with years of experience in automotive repair.',
    color: 'purple'
  },
  {
    icon: Clock,
    title: 'Quick Service',
    description: 'Most services completed within the hour. We value your time as much as you do.',
    color: 'teal'
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    description: 'No hidden fees or surprise charges. Get accurate estimates before any work begins.',
    color: 'orange'
  },
  {
    icon: Award,
    title: 'Quality Guarantee',
    description: '12-month/12,000-mile warranty on all repairs and services performed.',
    color: 'teal'
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Support',
    description: 'Round-the-clock customer support to answer your questions and concerns.',
    color: 'orange'
  },
  {
    icon: MapPin,
    title: 'Nationwide Network',
    description: 'Over 500 locations across the country. Find quality service wherever you are.',
    color: 'purple'
  }
];

const colorClasses = {
  purple: {
    bg: 'bg-purple-100',
    icon: 'text-purple-600',
    border: 'border-purple-200 hover:border-purple-300'
  },
  teal: {
    bg: 'bg-teal-100',
    icon: 'text-teal-600',
    border: 'border-teal-200 hover:border-teal-300'
  },
  orange: {
    bg: 'bg-orange-100',
    icon: 'text-orange-600',
    border: 'border-orange-200 hover:border-orange-300'
  }
};

export function Features() {
  return (
    <section className="py-12 sm:py-16 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full mb-4">
            <Award className="w-4 h-4" />
            <span className="text-sm">Why Choose Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-4">
            The NearbyAutoCare Difference
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            We're committed to providing exceptional service with integrity, transparency, and expertise.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const colors = colorClasses[feature.color as keyof typeof colorClasses];
            return (
              <div 
                key={index} 
                className={`group p-6 sm:p-8 rounded-2xl border ${colors.border} hover:shadow-xl transition-all duration-300 bg-white`}
              >
                <div className={`w-12 h-12 sm:w-14 sm:h-14 ${colors.bg} rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-6 h-6 sm:w-7 sm:h-7 ${colors.icon}`} />
                </div>
                <h3 className="text-lg sm:text-xl text-gray-900 mb-2 sm:mb-3">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}