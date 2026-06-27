import { Star, Quote } from 'lucide-react';
import { Card } from './ui/card';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Business Owner',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    rating: 5,
    text: 'Absolutely fantastic service! The technicians were professional, fast, and transparent about everything. My car runs better than ever.'
  },
  {
    name: 'Michael Chen',
    role: 'Software Engineer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    rating: 5,
    text: 'I was impressed by how quick and efficient the service was. They explained everything clearly and the pricing was very reasonable.'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Teacher',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    rating: 5,
    text: 'Best auto service experience I\'ve ever had. The online booking was easy, and they kept me updated throughout the entire process.'
  },
  {
    name: 'David Thompson',
    role: 'Marketing Director',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
    rating: 5,
    text: 'I\'ve been using NearbyAutoCare for over 2 years now. Consistently excellent service and great customer care. Highly recommend!'
  },
  {
    name: 'Lisa Williams',
    role: 'Photographer',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop',
    rating: 5,
    text: 'The warranty and quality guarantee gave me peace of mind. The team went above and beyond to make sure I was satisfied.'
  },
  {
    name: 'James Anderson',
    role: 'Entrepreneur',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop',
    rating: 5,
    text: 'Great locations nearby, professional staff, and competitive prices. This is now my go-to place for all auto maintenance.'
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-12 sm:py-16 lg:py-32 bg-purple-600 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-purple-500 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-purple-700 rounded-full blur-3xl opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-500/30 text-white px-4 py-2 rounded-full mb-4 backdrop-blur-sm">
            <Star className="w-4 h-4" />
            <span className="text-sm">Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            What Our Customers Say
          </h2>
          <p className="text-base sm:text-lg text-purple-100">
            Don't just take our word for it. Here's what our satisfied customers have to say about their experience.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 hover:bg-white/15 transition-all duration-300 border border-white/20"
            >
              <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-teal-300 mb-4" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-orange-400 text-orange-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-sm sm:text-base text-white mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 sm:gap-4 pt-4 border-t border-white/20">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                />
                <div>
                  <div className="text-sm sm:text-base text-white">{testimonial.name}</div>
                  <div className="text-xs sm:text-sm text-purple-200">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Rating Summary */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 sm:w-8 sm:h-8 fill-orange-400 text-orange-400" />
            ))}
          </div>
          <div className="text-3xl sm:text-4xl text-white">4.9 out of 5</div>
          <div className="text-sm sm:text-base text-purple-100">Based on 10,000+ reviews</div>
        </div>
      </div>
    </section>
  );
}