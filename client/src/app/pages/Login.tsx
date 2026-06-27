import { BikeIcon, Car, Lock, Mail, MapPin, Plus, Trash2, User } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { ScrollToTop } from '../components/ScrollToTop';
import { Button } from '../components/ui/button';




interface Vehicle {
  id: string;
  type: string;
  make: string;
  model: string;
  year: string;
  registrationNumber: string;
}

export function Login() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    preferredLocation: ''
  });

  const [vehicles, setVehicles] = useState<Vehicle[]>([{
    id: '1',
    type: '',
    make: '',
    model: '',
    year: '',
    registrationNumber: ''
  }]);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleVehicleChange = (id: string, field: string, value: string) => {
    setVehicles(prev => prev.map(vehicle => 
      vehicle.id === id ? { ...vehicle, [field]: value } : vehicle
    ));
  };

  const addVehicle = () => {
    const newVehicle: Vehicle = {
      id: Date.now().toString(),
      type: '',
      make: '',
      model: '',
      year: '',
      registrationNumber: ''
    };
    setVehicles([...vehicles, newVehicle]);
  };

  const removeVehicle = (id: string) => {
    if (vehicles.length > 1) {
      setVehicles(vehicles.filter(v => v.id !== id));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isLogin) {
      // Login logic
      const savedUser = localStorage.getItem('userProfile');
      if (savedUser) {
        const userData = JSON.parse(savedUser);
        if (userData.email === formData.email) {
          alert('Welcome back! Redirecting to home...');
          navigate('/');
        } else {
          alert('Invalid credentials. Please sign up if you don\'t have an account.');
        }
      } else {
        alert('No account found. Please sign up first.');
      }
    } else {
      // Register logic - validate that at least one vehicle is complete
      const completeVehicles = vehicles.filter(v => 
        v.type && v.make && v.model && v.year && v.registrationNumber
      );

      if (completeVehicles.length === 0) {
        alert('Please add at least one complete vehicle to your profile.');
        return;
      }

      const userProfile = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        preferredLocation: formData.preferredLocation,
        vehicles: completeVehicles
      };
      
      localStorage.setItem('userProfile', JSON.stringify(userProfile));
      alert(`Account created successfully! ${completeVehicles.length} vehicle(s) saved for quick bookings.`);
      navigate('/');
    }
  };

  const locations = [
    'Mumbai - Andheri West',
    'Mumbai - Bandra',
    'Delhi - Connaught Place',
    'Delhi - Nehru Place',
    'Bangalore - Koramangala',
    'Bangalore - Whitefield',
    'Pune - Hinjewadi',
    'Pune - Viman Nagar',
    'Chennai - T Nagar',
    'Chennai - Velachery',
    'Hyderabad - Madhapur',
    'Hyderabad - Kukatpally'
  ];

  const vehicleTypes = [
    { id: 'motorcycle', name: 'Motorcycle', icon: '🏍️', popular: true },
    { id: 'scooter', name: 'Scooter', icon: '🛵', popular: true },
    { id: 'bike', name: 'Bike', icon: '🚲', popular: true },
    { id: 'sedan', name: 'Sedan', icon: '🚗', popular: false },
    { id: 'suv', name: 'SUV', icon: '🚙', popular: false },
    { id: 'hatchback', name: 'Hatchback', icon: '🚗', popular: false }
  ];

  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <main className="pt-20 pb-12">
          {/* Hero Section */}
          <section className="bg-purple-600 py-12 lg:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center text-white">
                <div className="inline-flex items-center gap-2 bg-teal-500/20 border border-teal-300/30 text-white px-4 py-2 rounded-full mb-4 backdrop-blur-sm">
                  <BikeIcon className="w-4 h-4" />
                  <span className="text-sm">Specializing in 2-Wheeler Care</span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4">
                  {isLogin ? 'Welcome Back!' : 'Create Your Account'}
                </h1>
                <p className="text-lg sm:text-xl text-purple-100 max-w-2xl mx-auto">
                  {isLogin 
                    ? 'Sign in to access your saved vehicle information and book services faster.'
                    : 'Save all your vehicles once and enjoy quick, hassle-free bookings every time.'
                  }
                </p>
              </div>
            </div>
          </section>

          {/* Form Section */}
          <section className="py-12 lg:py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-12">
                {/* Toggle Between Login/Register - Gestalt: Common Region */}
                <div className="flex gap-2 mb-8 p-1.5 bg-gray-100 rounded-2xl">
                  <button
                    type="button"
                    onClick={() => setIsLogin(true)}
                    className={`flex-1 py-3.5 px-6 rounded-xl transition-all font-medium ${
                      isLogin 
                        ? 'bg-white text-purple-600 shadow-md' 
                        : 'text-gray-600 hover:text-purple-600'
                    }`}
                  >
                    Login
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsLogin(false)}
                    className={`flex-1 py-3.5 px-6 rounded-xl transition-all font-medium ${
                      !isLogin 
                        ? 'bg-white text-purple-600 shadow-md' 
                        : 'text-gray-600 hover:text-purple-600'
                    }`}
                  >
                    Sign Up
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Login Form */}
                  {isLogin ? (
                    <>
                      <div className="space-y-6">
                        <div>
                          <label className="block text-base font-medium text-gray-700 mb-3">
                            <Mail className="inline w-5 h-5 mr-2 text-teal-600" />
                            Email Address *
                          </label>
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            placeholder="your.email@example.com"
                            className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-purple-600 focus:outline-none text-base transition-colors"
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-base font-medium text-gray-700 mb-3">
                            <Lock className="inline w-5 h-5 mr-2 text-orange-600" />
                            Password *
                          </label>
                          <input
                            type="password"
                            value={formData.password}
                            onChange={(e) => handleInputChange('password', e.target.value)}
                            placeholder="Enter your password"
                            className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-purple-600 focus:outline-none text-base transition-colors"
                            required
                          />
                        </div>

                        <div className="flex justify-between items-center pt-2">
                          <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                            <input type="checkbox" className="rounded border-gray-300 text-purple-600 focus:ring-purple-600" />
                            Remember me
                          </label>
                          <a href="#" className="text-sm text-purple-600 hover:text-purple-700 font-medium">
                            Forgot password?
                          </a>
                        </div>
                      </div>
                    </>
                  ) : (
                    /* Register Form */
                    <>
                      {/* Personal Information - Gestalt: Proximity & Common Region */}
                      <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border-2 border-gray-200">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                            <User className="w-5 h-5 text-purple-600" />
                          </div>
                          <h3 className="text-xl font-semibold text-gray-900">Personal Information</h3>
                        </div>
                        
                        <div className="space-y-5">
                          <div>
                            <label className="block text-base font-medium text-gray-700 mb-3">
                              Full Name *
                            </label>
                            <input
                              type="text"
                              value={formData.name}
                              onChange={(e) => handleInputChange('name', e.target.value)}
                              placeholder="Enter your full name"
                              className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-purple-600 focus:outline-none text-base bg-white transition-colors"
                              required
                            />
                          </div>

                          <div className="grid sm:grid-cols-2 gap-5">
                            <div>
                              <label className="block text-base font-medium text-gray-700 mb-3">
                                Email Address *
                              </label>
                              <input
                                type="email"
                                value={formData.email}
                                onChange={(e) => handleInputChange('email', e.target.value)}
                                placeholder="your.email@example.com"
                                className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-purple-600 focus:outline-none text-base bg-white transition-colors"
                                required
                              />
                            </div>

                            <div>
                              <label className="block text-base font-medium text-gray-700 mb-3">
                                Phone Number *
                              </label>
                              <input
                                type="tel"
                                value={formData.phone}
                                onChange={(e) => handleInputChange('phone', e.target.value)}
                                placeholder="+91 98765 43210"
                                className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-purple-600 focus:outline-none text-base bg-white transition-colors"
                                required
                              />
                            </div>
                          </div>

                          <div>
                            <label className="block text-base font-medium text-gray-700 mb-3">
                              Create Password *
                            </label>
                            <input
                              type="password"
                              value={formData.password}
                              onChange={(e) => handleInputChange('password', e.target.value)}
                              placeholder="Create a secure password"
                              className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-purple-600 focus:outline-none text-base bg-white transition-colors"
                              required
                              minLength={6}
                            />
                            <p className="text-sm text-gray-500 mt-2">Must be at least 6 characters</p>
                          </div>
                        </div>
                      </div>

                      {/* Preferred Location - Gestalt: Proximity */}
                      <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border-2 border-gray-200">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
                            <MapPin className="w-5 h-5 text-teal-600" />
                          </div>
                          <h3 className="text-xl font-semibold text-gray-900">Preferred Service Location</h3>
                        </div>
                        
                        <select
                          value={formData.preferredLocation}
                          onChange={(e) => handleInputChange('preferredLocation', e.target.value)}
                          className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-purple-600 focus:outline-none text-base bg-white transition-colors"
                        >
                          <option value="">Choose your nearest location...</option>
                          {locations.map(location => (
                            <option key={location} value={location}>{location}</option>
                          ))}
                        </select>
                        <p className="text-sm text-gray-500 mt-2">We'll use this as your default location for bookings</p>
                      </div>

                      {/* Vehicle Information - Gestalt: Similarity & Continuity */}
                      <div className="bg-teal-50 rounded-2xl p-6 sm:p-8 border-2 border-teal-200">
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-teal-600 rounded-xl flex items-center justify-center">
                              <BikeIcon className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <h3 className="text-xl font-semibold text-gray-900">Your Vehicles</h3>
                              <p className="text-sm text-gray-600">Add all your 2-wheelers and 4-wheelers</p>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-6">
                          {vehicles.map((vehicle, index) => (
                            <div 
                              key={vehicle.id} 
                              className="bg-white rounded-2xl p-6 border-2 border-teal-100 shadow-sm hover:shadow-md transition-all"
                            >
                              {/* Vehicle Header - Gestalt: Figure/Ground */}
                              <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-3">
                                  <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center">
                                    <span className="text-teal-600 font-semibold">#{index + 1}</span>
                                  </div>
                                  <h4 className="text-lg font-semibold text-gray-900">
                                    Vehicle {index + 1}
                                  </h4>
                                </div>
                                {vehicles.length > 1 && (
                                  <button
                                    type="button"
                                    onClick={() => removeVehicle(vehicle.id)}
                                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                    title="Remove vehicle"
                                  >
                                    <Trash2 className="w-5 h-5" />
                                  </button>
                                )}
                              </div>

                              {/* Vehicle Type Selection - Gestalt: Similarity */}
                              <div className="mb-5">
                                <label className="block text-base font-medium text-gray-700 mb-4">
                                  Vehicle Type *
                                </label>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                  {vehicleTypes.map(type => (
                                    <div
                                      key={type.id}
                                      onClick={() => handleVehicleChange(vehicle.id, 'type', type.name)}
                                      className={`relative p-4 rounded-xl border-2 cursor-pointer text-center transition-all ${
                                        vehicle.type === type.name
                                          ? 'border-teal-600 bg-teal-50 shadow-md'
                                          : 'border-gray-200 hover:border-teal-300 hover:bg-gray-50'
                                      }`}
                                    >
                                      {type.popular && (
                                        <div className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-2 py-0.5 rounded-full shadow-sm">
                                          Popular
                                        </div>
                                      )}
                                      <div className="text-2xl mb-2">{type.icon}</div>
                                      <span className="text-sm font-medium text-gray-900">{type.name}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              {/* Vehicle Details - Gestalt: Proximity */}
                              <div className="grid sm:grid-cols-2 gap-4">
                                <div>
                                  <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Make / Brand *
                                  </label>
                                  <input
                                    type="text"
                                    value={vehicle.make}
                                    onChange={(e) => handleVehicleChange(vehicle.id, 'make', e.target.value)}
                                    placeholder="e.g., Honda, Hero, Maruti"
                                    className="w-full p-3 rounded-lg border-2 border-gray-200 focus:border-teal-600 focus:outline-none text-base transition-colors"
                                    required
                                  />
                                </div>
                                <div>
                                  <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Model *
                                  </label>
                                  <input
                                    type="text"
                                    value={vehicle.model}
                                    onChange={(e) => handleVehicleChange(vehicle.id, 'model', e.target.value)}
                                    placeholder="e.g., Activa, Splendor, Swift"
                                    className="w-full p-3 rounded-lg border-2 border-gray-200 focus:border-teal-600 focus:outline-none text-base transition-colors"
                                    required
                                  />
                                </div>
                                <div>
                                  <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Year *
                                  </label>
                                  <input
                                    type="number"
                                    value={vehicle.year}
                                    onChange={(e) => handleVehicleChange(vehicle.id, 'year', e.target.value)}
                                    placeholder="2024"
                                    min="1990"
                                    max={new Date().getFullYear() + 1}
                                    className="w-full p-3 rounded-lg border-2 border-gray-200 focus:border-teal-600 focus:outline-none text-base transition-colors"
                                    required
                                  />
                                </div>
                                <div>
                                  <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Registration Number *
                                  </label>
                                  <input
                                    type="text"
                                    value={vehicle.registrationNumber}
                                    onChange={(e) => handleVehicleChange(vehicle.id, 'registrationNumber', e.target.value.toUpperCase())}
                                    placeholder="MH12AB1234"
                                    className="w-full p-3 rounded-lg border-2 border-gray-200 focus:border-teal-600 focus:outline-none text-base uppercase transition-colors"
                                    required
                                  />
                                </div>
                              </div>
                            </div>
                          ))}

                          {/* Add Vehicle Button - Gestalt: Continuity */}
                          <button
                            type="button"
                            onClick={addVehicle}
                            className="w-full py-4 px-6 border-2 border-dashed border-teal-300 rounded-2xl text-teal-600 hover:bg-teal-50 hover:border-teal-400 transition-all font-medium flex items-center justify-center gap-2 group"
                          >
                            <Plus className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            Add Another Vehicle
                          </button>
                        </div>
                      </div>
                    </>
                  )}

                  {/* Submit Button - Gestalt: Figure/Ground */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-2xl text-lg py-6 font-semibold shadow-lg hover:shadow-xl transition-all"
                  >
                    {isLogin ? 'Sign In to Your Account' : 'Create Account & Save Vehicles'}
                  </Button>

                  {/* Additional Info */}
                  {!isLogin && (
                    <p className="text-sm text-gray-600 text-center">
                      By signing up, you agree to our{' '}
                      <a href="#" className="text-purple-600 hover:text-purple-700 font-medium">Terms of Service</a>
                      {' '}and{' '}
                      <a href="#" className="text-purple-600 hover:text-purple-700 font-medium">Privacy Policy</a>
                    </p>
                  )}
                </form>

                {/* Benefits Section - Gestalt: Common Region */}
                {!isLogin && (
                  <div className="mt-10 pt-10 border-t-2 border-gray-200">
                    <h4 className="text-lg font-semibold text-gray-900 mb-6 text-center">Why Create an Account?</h4>
                    <div className="grid sm:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="w-14 h-14 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                          <BikeIcon className="w-7 h-7 text-teal-600" />
                        </div>
                        <h5 className="font-semibold text-gray-900 mb-2">Quick Bookings</h5>
                        <p className="text-sm text-gray-600">Skip entering vehicle details every time</p>
                      </div>
                      <div className="text-center">
                        <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                          <Car className="w-7 h-7 text-orange-600" />
                        </div>
                        <h5 className="font-semibold text-gray-900 mb-2">Multiple Vehicles</h5>
                        <p className="text-sm text-gray-600">Manage all your bikes and cars in one place</p>
                      </div>
                      <div className="text-center">
                        <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                          <span className="text-2xl">🎁</span>
                        </div>
                        <h5 className="font-semibold text-gray-900 mb-2">Exclusive Offers</h5>
                        <p className="text-sm text-gray-600">Get personalized deals and discounts</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
