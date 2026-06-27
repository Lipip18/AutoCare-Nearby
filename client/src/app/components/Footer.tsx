import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router';

export function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 py-12 sm:py-16">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4 sm:mb-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <span className="text-lg sm:text-xl text-white">NearbyAutoCare</span>
            </Link>
            <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6">
              Your trusted partner for quality automotive care. Professional service, transparent pricing, and expert technicians.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 hover:bg-teal-600 rounded-lg flex items-center justify-center transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 hover:bg-orange-600 rounded-lg flex items-center justify-center transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 hover:bg-teal-600 rounded-lg flex items-center justify-center transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 hover:bg-orange-600 rounded-lg flex items-center justify-center transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-base sm:text-lg mb-4 sm:mb-6">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
              <li><Link to="/#home" className="hover:text-teal-400 transition-colors">Home</Link></li>
              <li><Link to="/#services" className="hover:text-teal-400 transition-colors">Services</Link></li>
              <li><Link to="/#how-it-works" className="hover:text-teal-400 transition-colors">How It Works</Link></li>
              <li><Link to="/#testimonials" className="hover:text-teal-400 transition-colors">Testimonials</Link></li>
              <li><Link to="/book-service" className="hover:text-teal-400 transition-colors">Book Service</Link></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-base sm:text-lg mb-4 sm:mb-6">Our Services</h3>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
              <li><a href="#" className="hover:text-orange-400 transition-colors">Oil Change</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Brake Service</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Tire Service</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Diagnostics</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Battery Service</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">General Repair</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-base sm:text-lg mb-4 sm:mb-6">Contact Us</h3>
            <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-teal-400 flex-shrink-0 mt-1" />
                <span>123 Main Street, Suite 100<br />India, IND 100001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400 flex-shrink-0" />
                <a href="tel:+1234567890" className="hover:text-orange-400 transition-colors">
                  9638527410
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-teal-400 flex-shrink-0" />
                <a href="mailto:info@nearbyautocare.com" className="hover:text-teal-400 transition-colors break-all">
                  info@nearbyautocare.com
                </a>
              </li>
            </ul>
            <div className="mt-4 sm:mt-6">
              <h4 className="text-white text-sm sm:text-base mb-2">Business Hours</h4>
              <p className="text-xs sm:text-sm text-gray-400">
                Monday - Friday: 7:00 AM - 7:00 PM<br />
                Saturday: 8:00 AM - 6:00 PM<br />
                Sunday: 9:00 AM - 5:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6 sm:py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs sm:text-sm text-gray-400 text-center md:text-left">
              © 2026 NearbyAutoCare. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
              <a href="#" className="hover:text-teal-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-orange-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-teal-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}