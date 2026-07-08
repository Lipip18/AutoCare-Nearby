import {
  BikeIcon,
  Calendar,
  ChevronDown,
  LogOut,
  MapPin,
  Menu,
  Phone,
  User,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { useAuth } from "../context/AuthContext";
import { Button } from "./ui/button";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const { user, logout } = useAuth();
  const userName = user?.name || null;
  const userVehicles = user?.vehicles?.length || 0;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    setMobileMenuOpen(false);
    setUserMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg border-b border-gray-200"
          : "bg-white/95 backdrop-blur-md border-b border-gray-100"
      }`}
    >
      {/* Top Bar with Contact Info - Desktop Only */}
      <div className="hidden lg:block bg-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-sm">
            <div className="flex items-center gap-6">
              <a
                href="tel:+911234567890"
                className="flex items-center gap-2 hover:text-teal-200 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+91 9638527410</span>
              </a>
              <div className="flex items-center gap-2 text-purple-200">
                <BikeIcon className="w-4 h-4" />
                <span>Expert 2-Wheeler & 4-Wheeler Care</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-purple-200">
                Mon - Sat: 9:00 AM - 8:00 PM
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 lg:gap-3 group"
          >
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all">
              <MapPin className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg lg:text-xl font-bold text-gray-900 leading-tight">
                NearbyAutoCare
              </span>
              <span className="text-xs text-gray-500 hidden sm:block">
                Your Trusted Service Partner
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {isHome ? (
              <>
                <a
                  href="#home"
                  className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors relative group"
                >
                  Home
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300"></span>
                </a>
                <a
                  href="#services"
                  className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors relative group"
                >
                  Services
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300"></span>
                </a>
                <a
                  href="#membership"
                  className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors relative group flex items-center gap-1"
                >
                  Membership
                  <span className="text-xs bg-orange-500 text-white px-2 py-0.5 rounded-full">
                    New
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300"></span>
                </a>
                <a
                  href="#how-it-works"
                  className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors relative group"
                >
                  How It Works
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300"></span>
                </a>
                <a
                  href="#testimonials"
                  className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors relative group"
                >
                  Testimonials
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300"></span>
                </a>
                <a
                  href="#contact"
                  className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors relative group"
                >
                  Contact
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              </>
            ) : (
              <Link
                to="/"
                className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors"
              >
                ← Back to Home
              </Link>
            )}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            {userName ? (
              <div className="relative">
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center gap-3 px-4 py-2.5 bg-gradient-to-r from-teal-50 to-teal-100 border-2 border-teal-200 rounded-full hover:shadow-md transition-all group"
                >
                  <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-semibold text-gray-900">
                      {userName}
                    </div>
                    {userVehicles > 0 && (
                      <div className="text-xs text-teal-700">
                        {userVehicles} Vehicle
                        {userVehicles > 1 ? "s" : ""}
                      </div>
                    )}
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-600 transition-transform ${userMenuOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {/* User Dropdown Menu */}
                {userMenuOpen && (
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border-2 border-gray-100 py-2 z-50">
                    <div className="px-4 py-3 border-b border-gray-100">
                      <div className="font-semibold text-gray-900">
                        {userName}
                      </div>
                      <div className="text-sm text-gray-600 mt-0.5">
                        Logged in
                      </div>
                    </div>
                    <Link
                      to="/my-bookings"
                      onClick={() => setUserMenuOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>My Bookings</span>
                    </Link>
                    <Link
                      to="/login"
                      onClick={() => setUserMenuOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      <User className="w-4 h-4" />
                      <span>Manage Vehicles</span>
                    </Link>
                    <a
                      href="#membership"
                      onClick={() => setUserMenuOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      <BikeIcon className="w-4 h-4" />
                      <span>Get Membership</span>
                      <span className="ml-auto text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full">
                        Save More
                      </span>
                    </a>
                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-3 px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors w-full text-left border-t border-gray-100"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Logout</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/login">
                <Button
                  variant="outline"
                  className="rounded-full border-2 border-gray-300 text-gray-700 hover:border-teal-600 hover:text-teal-600 hover:bg-teal-50 font-medium transition-all"
                >
                  <User className="w-4 h-4 mr-2" />
                  Login
                </Button>
              </Link>
            )}

            <Link to="/book-service">
              <Button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-full px-6 py-2.5 font-semibold shadow-md hover:shadow-lg transition-all">
                Book Service
              </Button>
            </Link>
          </div>

          {/* Mobile CTA & Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <Link to="/book-service">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-4 py-2 text-sm font-semibold shadow-md">
                Book
              </Button>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-700 hover:text-purple-600 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-gray-200 animate-fadeIn">
            <div className="flex flex-col gap-1">
              {isHome ? (
                <>
                  <a
                    href="#home"
                    className="text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-colors px-4 py-3 rounded-xl font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </a>
                  <a
                    href="#services"
                    className="text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-colors px-4 py-3 rounded-xl font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Services
                  </a>
                  <a
                    href="#membership"
                    className="text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-colors px-4 py-3 rounded-xl font-medium flex items-center justify-between"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>Membership</span>
                    <span className="text-xs bg-orange-500 text-white px-2 py-1 rounded-full">
                      New
                    </span>
                  </a>
                  <a
                    href="#how-it-works"
                    className="text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-colors px-4 py-3 rounded-xl font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    How It Works
                  </a>
                  <a
                    href="#testimonials"
                    className="text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-colors px-4 py-3 rounded-xl font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Testimonials
                  </a>
                  <a
                    href="#contact"
                    className="text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-colors px-4 py-3 rounded-xl font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact
                  </a>
                </>
              ) : (
                <Link
                  to="/"
                  className="text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-colors px-4 py-3 rounded-xl font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  ← Back to Home
                </Link>
              )}

              {/* Mobile User Section */}
              <div className="flex flex-col gap-3 pt-4 mt-4 border-t-2 border-gray-200">
                {userName ? (
                  <>
                    <div className="px-4 py-3 bg-teal-50 rounded-xl border-2 border-teal-200">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center">
                          <User className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">
                            {userName}
                          </div>
                          {userVehicles > 0 && (
                            <div className="text-sm text-teal-700">
                              {userVehicles} Vehicle
                              {userVehicles > 1 ? "s" : ""}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <Link
                      to="/my-bookings"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-xl transition-colors"
                    >
                      <Calendar className="w-5 h-5" />
                      <span className="font-medium">
                        My Bookings
                      </span>
                    </Link>
                    <Link
                      to="/login"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-xl transition-colors"
                    >
                      <BikeIcon className="w-5 h-5" />
                      <span className="font-medium">
                        Manage Vehicles
                      </span>
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl transition-colors font-medium"
                    >
                      <LogOut className="w-5 h-5" />
                      <span>Logout</span>
                    </button>
                  </>
                ) : (
                  <Link
                    to="/login"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Button
                      variant="outline"
                      className="w-full rounded-full border-2 border-gray-300 text-gray-700 hover:border-teal-600 hover:text-teal-600 hover:bg-teal-50 font-semibold"
                    >
                      <User className="w-4 h-4 mr-2" />
                      Login / Sign Up
                    </Button>
                  </Link>
                )}

                <a
                  href="tel:+911234567890"
                  className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-xl transition-colors"
                >
                  <Phone className="w-5 h-5 text-purple-600" />
                  <div>
                    <div className="text-sm font-medium">
                      Call Us
                    </div>
                    <div className="text-sm text-gray-600">
                      +91 9638527410
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}