import { Button } from './ui/button';
import { MapPin, Clock, Award } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Link } from 'react-router';

export function Hero() {
  return (
    <section id="home" className="relative pt-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8">
            <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-3 sm:px-4 py-2 rounded-full text-sm sm:text-base">
              <Award className="w-4 h-4" />
              <span>Trusted Auto Care Service Since 2015</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl tracking-tight">
              <span className="text-gray-900">Quality Auto Care,</span>
              <br />
              <span className="text-purple-600">Right in Your Neighborhood</span>
            </h1>
            
            <p className="text-base sm:text-lg text-gray-600 max-w-xl">
              Professional automotive repair and maintenance services at your fingertips. 
              Expert technicians, transparent pricing, and convenient locations near you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/book-service">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white text-base sm:text-lg px-6 sm:px-8 rounded-full w-full sm:w-auto">
                  Find Nearby Service
                </Button>
              </Link>
              <a href="#services">
                <Button size="lg" variant="outline" className="text-base sm:text-lg px-6 sm:px-8 rounded-full border-2 border-purple-600 text-purple-600 hover:bg-purple-50 w-full sm:w-auto">
                  View Services
                </Button>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 lg:pt-8">
              <div>
                <div className="text-2xl sm:text-3xl text-purple-600">500+</div>
                <div className="text-xs sm:text-sm text-gray-600">Locations</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl text-purple-600">50K+</div>
                <div className="text-xs sm:text-sm text-gray-600">Happy Customers</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl text-purple-600">24/7</div>
                <div className="text-xs sm:text-sm text-gray-600">Support</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1619642737579-a7474bee1044?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvJTIwbWVjaGFuaWMlMjB3b3JraW5nJTIwY2FyfGVufDF8fHx8MTc3Mzk4MTExOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Auto mechanic working on car"
                className="w-full h-64 sm:h-80 lg:h-[500px] object-cover"
              />
              {/* Floating Card */}
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 bg-white rounded-xl shadow-lg p-3 sm:p-4 flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm text-gray-600">Average Wait Time</div>
                  <div className="text-base sm:text-lg text-gray-900">Under 30 Minutes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}