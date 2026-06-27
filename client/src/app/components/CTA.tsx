import { ArrowRight, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router';

export function CTA() {
  return (
    <section className="py-12 sm:py-16 lg:py-32 bg-purple-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-white mb-4 sm:mb-6">
            Ready to Experience Premium Auto Care?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-purple-100 mb-8 sm:mb-10">
            Join thousands of satisfied customers who trust NearbyAutoCare for all their automotive needs. 
            Book your service today and get back on the road with confidence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/book-service">
              <Button 
                size="lg" 
                className="bg-white text-purple-600 hover:bg-gray-100 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 shadow-xl group rounded-full w-full sm:w-auto"
              >
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Find Nearby Location
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <a href="tel:+1234567890">
              <Button 
                size="lg" 
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-600 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-full w-full sm:w-auto"
              >
                Call Now: (123) 456-7890
              </Button>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-12 sm:mt-16 pt-12 sm:pt-16 border-t border-purple-400/30">
            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl text-white mb-2">500+</div>
              <div className="text-xs sm:text-sm lg:text-base text-purple-200">Locations Nationwide</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl text-white mb-2">50K+</div>
              <div className="text-xs sm:text-sm lg:text-base text-purple-200">Happy Customers</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl text-white mb-2">4.9★</div>
              <div className="text-xs sm:text-sm lg:text-base text-purple-200">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}