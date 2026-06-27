import { Wrench, Droplet, CircleDot, Wind, Gauge, Battery, BikeIcon } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Link } from 'react-router';
import { Card } from './ui/card';

const services = [
  {
    icon: Droplet,
    title: 'Oil Change',
    description: 'Engine oil change for bikes, scooters, and cars to keep your engine running smoothly.',
    image: 'https://images.unsplash.com/photo-1771340742493-52fbd5476ccb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBvaWwlMjBjaGFuZ2UlMjBzZXJ2aWNlfGVufDF8fHx8MTc3Mzk4MTEyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    price: 'From ₹399',
    color: 'teal',
    tag: '2-Wheeler Special'
  },
  {
    icon: BikeIcon,
    title: 'General Service',
    description: 'Complete servicing for motorcycles and scooters including oil, filter, and inspection.',
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RvcmN5Y2xlJTIwc2VydmljZXxlbnwwfHx8fDE3NDIzMjQwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    price: 'From ₹699',
    color: 'orange',
    tag: 'Most Popular'
  },
  {
    icon: CircleDot,
    title: 'Brake Service',
    description: 'Complete brake inspection and repair for bikes, scooters, and cars to ensure your safety.',
    image: 'https://images.unsplash.com/photo-1568644305664-5c7c2f88fa65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBicmFrZSUyMHJlcGFpcnxlbnwxfHx8fDE3NzM5ODExMjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    price: 'From ₹899',
    color: 'purple',
    tag: null
  },
  {
    icon: Wind,
    title: 'Tire/Tyre Service',
    description: 'Tire rotation, balancing, puncture repair, and replacement for optimal performance.',
    image: 'https://images.unsplash.com/photo-1764015805414-df7de89d405b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjB0aXJlJTIwcmVwYWlyJTIwc2hvcHxlbnwxfHx8fDE3NzM5ODExMjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    price: 'From ₹599',
    color: 'teal',
    tag: null
  },
  {
    icon: Gauge,
    title: 'Diagnostics',
    description: 'Advanced diagnostics to identify and fix any issues with your vehicle.',
    image: 'https://images.unsplash.com/photo-1678086790025-25d2bfaf770a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBkaWFnbm9zdGljJTIwY2hlY2t8ZW58MXx8fHwxNzczOTgxMTIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    price: 'From ₹499',
    color: 'orange',
    tag: null
  },
  {
    icon: Battery,
    title: 'Battery Service',
    description: 'Battery testing, replacement, and electrical system checks for all vehicles.',
    image: 'https://images.unsplash.com/photo-1717068341709-df1e2ec06ff8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjYXIlMjBzZXJ2aWNlJTIwZ2FyYWdlfGVufDF8fHx8MTc3Mzk4MTEyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    price: 'From ₹799',
    color: 'purple',
    tag: null
  }
];

const colorClasses = {
  teal: {
    icon: 'text-teal-600',
    price: 'text-teal-600',
    link: 'text-teal-600 hover:text-teal-700'
  },
  orange: {
    icon: 'text-orange-600',
    price: 'text-orange-600',
    link: 'text-orange-600 hover:text-orange-700'
  },
  purple: {
    icon: 'text-purple-600',
    price: 'text-purple-600',
    link: 'text-purple-600 hover:text-purple-700'
  }
};

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full mb-4">
            <Wrench className="w-4 h-4" />
            <span className="text-sm">Our Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-4">
            Complete Auto Care Solutions
          </h2>
          <p className="text-lg text-gray-600">
            From routine maintenance to complex repairs, we've got you covered with expert service and competitive pricing.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const colors = colorClasses[service.color as keyof typeof colorClasses];
            return (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-gray-200 bg-white">
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white rounded-full p-3 shadow-lg">
                    <Icon className={`w-6 h-6 ${colors.icon}`} />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl text-gray-900">{service.title}</h3>
                    <span className={`text-sm font-semibold ${colors.price}`}>{service.price}</span>
                  </div>
                  {service.tag && (
                    <div className="mb-3">
                      <span className="inline-block bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-medium">
                        {service.tag}
                      </span>
                    </div>
                  )}
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link to="/book-service" className={`flex items-center gap-2 group font-medium ${colors.link}`}>
                    <span>Book Now</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}