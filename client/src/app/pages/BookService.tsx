import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ScrollToTop } from '../components/ScrollToTop';
import { Calendar, Clock, MapPin, Car, User, Phone, Mail, ChevronRight, Check, BikeIcon, Plus, Truck } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useState, useEffect } from 'react';
import { Link } from 'react-router';

interface SavedVehicle {
  id: string;
  type: string;
  make: string;
  model: string;
  year: string;
  registrationNumber: string;
}

export function BookService() {
  const [step, setStep] = useState(1);
  const [savedVehicles, setSavedVehicles] = useState<SavedVehicle[]>([]);
  const [selectedVehicleId, setSelectedVehicleId] = useState<string>('');
  const [useNewVehicle, setUseNewVehicle] = useState(false);
  const [isMember, setIsMember] = useState(false);
  const [membershipType, setMembershipType] = useState<string>('');
  
  const [formData, setFormData] = useState({
    service: '',
    location: '',
    date: '',
    time: '',
    vehicleType: '',
    vehicleMake: '',
    vehicleModel: '',
    vehicleYear: '',
    vehicleRegistration: '',
    name: '',
    email: '',
    phone: '',
    additionalNotes: '',
    pickupDrop: false,
    pickupAddress: ''
  });

  // Load user profile data on component mount
  useEffect(() => {
    const userProfile = localStorage.getItem('userProfile');
    if (userProfile) {
      const user = JSON.parse(userProfile);
      
      // Load user contact info
      setFormData(prev => ({
        ...prev,
        name: user.name || '',
        email: user.email || '',
        phone: user.phone || '',
        location: user.preferredLocation || ''
      }));

      // Load saved vehicles
      if (user.vehicles && user.vehicles.length > 0) {
        setSavedVehicles(user.vehicles);
        // Auto-select first vehicle
        setSelectedVehicleId(user.vehicles[0].id);
        const firstVehicle = user.vehicles[0];
        setFormData(prev => ({
          ...prev,
          vehicleType: firstVehicle.type,
          vehicleMake: firstVehicle.make,
          vehicleModel: firstVehicle.model,
          vehicleYear: firstVehicle.year,
          vehicleRegistration: firstVehicle.registrationNumber
        }));
      }

      // Load membership status
      if (user.membership) {
        setIsMember(true);
        setMembershipType(user.membership.type);
      }
    }
  }, []);

  const isUserLoggedIn = localStorage.getItem('userProfile') !== null;

  const services = [
    { id: 'oil-change', name: 'Oil Change', price: '₹399', icon: '🛢️', type: '2-wheeler' },
    { id: 'general-service', name: 'General Service', price: '₹699', icon: '🔧', type: '2-wheeler' },
    { id: 'brake-service', name: 'Brake Service', price: '₹899', icon: '🛑', type: 'both' },
    { id: 'tire-service', name: 'Tire/Tyre Service', price: '₹599', icon: '🛞', type: 'both' },
    { id: 'battery-service', name: 'Battery Service', price: '₹799', icon: '🔋', type: 'both' },
    { id: 'diagnostics', name: 'Diagnostics', price: '₹499', icon: '🔍', type: 'both' }
  ];

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

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM',
    '05:00 PM', '06:00 PM'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleVehicleSelection = (vehicleId: string) => {
    setSelectedVehicleId(vehicleId);
    setUseNewVehicle(false);
    
    const selectedVehicle = savedVehicles.find(v => v.id === vehicleId);
    if (selectedVehicle) {
      setFormData(prev => ({
        ...prev,
        vehicleType: selectedVehicle.type,
        vehicleMake: selectedVehicle.make,
        vehicleModel: selectedVehicle.model,
        vehicleYear: selectedVehicle.year,
        vehicleRegistration: selectedVehicle.registrationNumber
      }));
    }
  };

  const handleNewVehicle = () => {
    setUseNewVehicle(true);
    setSelectedVehicleId('');
    setFormData(prev => ({
      ...prev,
      vehicleType: '',
      vehicleMake: '',
      vehicleModel: '',
      vehicleYear: '',
      vehicleRegistration: ''
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Booking request submitted successfully! We will contact you shortly.');
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const vehicleTypes = [
    { name: 'Motorcycle', icon: '🏍️' },
    { name: 'Scooter', icon: '🛵' },
    { name: 'Bike', icon: '🚲' },
    { name: 'Sedan', icon: '🚗' },
    { name: 'SUV', icon: '🚙' },
    { name: 'Hatchback', icon: '🚗' }
  ];

  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="bg-purple-600 py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center text-white">
                <div className="inline-flex items-center gap-2 bg-teal-500/20 border border-teal-300/30 text-white px-4 py-2 rounded-full mb-4 backdrop-blur-sm">
                  <BikeIcon className="w-4 h-4" />
                  <span className="text-sm">Expert 2-Wheeler & 4-Wheeler Care</span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4">Book Your Service</h1>
                <p className="text-lg sm:text-xl text-purple-100 max-w-2xl mx-auto">
                  Schedule your automotive service in just a few simple steps. Our expert technicians are ready to help.
                </p>
                {isUserLoggedIn && savedVehicles.length > 0 && (
                  <div className="mt-6 inline-flex items-center gap-2 bg-teal-500/20 border border-teal-300/30 text-white px-4 py-3 rounded-xl backdrop-blur-sm">
                    <Check className="w-5 h-5 text-teal-300" />
                    <span className="text-sm sm:text-base">{savedVehicles.length} vehicle(s) available for quick booking!</span>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Progress Steps - Gestalt: Continuity */}
          <section className="py-8 bg-white border-b border-gray-200">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between">
                {[
                  { num: 1, label: 'Service & Location', color: 'teal' },
                  { num: 2, label: 'Vehicle Details', color: 'orange' },
                  { num: 3, label: 'Contact Info', color: 'purple' }
                ].map((item, index) => {
                  const colorClass = item.color === 'teal' ? 'teal' : item.color === 'orange' ? 'orange' : 'purple';
                  const bgColor = step >= item.num 
                    ? (colorClass === 'teal' ? 'bg-teal-600' : colorClass === 'orange' ? 'bg-orange-600' : 'bg-purple-600')
                    : 'bg-white';
                  const borderColor = step >= item.num 
                    ? (colorClass === 'teal' ? 'border-teal-600' : colorClass === 'orange' ? 'border-orange-600' : 'border-purple-600')
                    : 'border-gray-300';
                  const textColor = step >= item.num 
                    ? (colorClass === 'teal' ? 'text-teal-600' : colorClass === 'orange' ? 'text-orange-600' : 'text-purple-600')
                    : 'text-gray-400';
                  const lineColor = step > item.num 
                    ? (colorClass === 'teal' ? 'bg-teal-600' : colorClass === 'orange' ? 'bg-orange-600' : 'bg-purple-600')
                    : 'bg-gray-300';
                  
                  return (
                    <div key={item.num} className="flex items-center flex-1">
                      <div className="flex flex-col items-center flex-1">
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border-2 transition-all ${bgColor} ${borderColor} ${step >= item.num ? 'text-white' : 'text-gray-400'}`}>
                          {step > item.num ? <Check className="w-5 h-5 sm:w-6 sm:h-6" /> : item.num}
                        </div>
                        <span className={`mt-2 text-xs sm:text-sm text-center hidden sm:block font-medium ${textColor}`}>
                          {item.label}
                        </span>
                      </div>
                      {index < 2 && (
                        <div className={`flex-1 h-0.5 mx-2 ${lineColor}`}></div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Form Section */}
          <section className="py-12 lg:py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-12">
                
                {/* Step 1: Service & Location - Gestalt: Common Region */}
                {step === 1 && (
                  <div className="space-y-8">
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
                          <span className="text-2xl">🛠️</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">Select Service & Location</h2>
                      </div>
                      
                      {/* Service Selection - Gestalt: Similarity */}
                      <div className="mb-8">
                        <label className="block text-lg font-medium text-gray-700 mb-4">Choose Service *</label>
                        <div className="grid sm:grid-cols-2 gap-4">
                          {services.map(service => (
                            <div
                              key={service.id}
                              onClick={() => handleInputChange('service', service.id)}
                              className={`p-5 rounded-2xl border-2 cursor-pointer transition-all hover:shadow-md ${
                                formData.service === service.id
                                  ? 'border-teal-600 bg-teal-50 shadow-md'
                                  : 'border-gray-200 hover:border-teal-300'
                              }`}
                            >
                              <div className="flex justify-between items-start">
                                <div className="flex items-center gap-3">
                                  <span className="text-3xl">{service.icon}</span>
                                  <div>
                                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">{service.name}</h3>
                                    <p className="text-sm font-semibold text-teal-600">{service.price}</p>
                                    {service.type === '2-wheeler' && (
                                      <span className="text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full mt-1 inline-block">
                                        2-Wheeler Special
                                      </span>
                                    )}
                                  </div>
                                </div>
                                {formData.service === service.id && (
                                  <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center">
                                    <Check className="w-4 h-4 text-white" />
                                  </div>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Location Selection */}
                      <div className="mb-8 bg-gray-50 rounded-2xl p-6 border-2 border-gray-200">
                        <label className="block text-lg font-medium text-gray-700 mb-4">
                          <MapPin className="inline w-5 h-5 mr-2 text-teal-600" />
                          Select Location *
                        </label>
                        <select
                          value={formData.location}
                          onChange={(e) => handleInputChange('location', e.target.value)}
                          className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-teal-600 focus:outline-none text-base bg-white transition-colors"
                          required
                        >
                          <option value="">Choose a location...</option>
                          {locations.map(location => (
                            <option key={location} value={location}>{location}</option>
                          ))}
                        </select>
                      </div>

                      {/* Date & Time - Gestalt: Proximity */}
                      <div className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-200 mb-8">
                        <h3 className="text-lg font-medium text-gray-700 mb-4">Preferred Date & Time</h3>
                        <div className="grid sm:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-base font-medium text-gray-700 mb-3">
                              <Calendar className="inline w-5 h-5 mr-2 text-orange-600" />
                              Date *
                            </label>
                            <input
                              type="date"
                              value={formData.date}
                              onChange={(e) => handleInputChange('date', e.target.value)}
                              className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-teal-600 focus:outline-none text-base bg-white transition-colors"
                              required
                              min={new Date().toISOString().split('T')[0]}
                            />
                          </div>
                          <div>
                            <label className="block text-base font-medium text-gray-700 mb-3">
                              <Clock className="inline w-5 h-5 mr-2 text-orange-600" />
                              Time *
                            </label>
                            <select
                              value={formData.time}
                              onChange={(e) => handleInputChange('time', e.target.value)}
                              className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-teal-600 focus:outline-none text-base bg-white transition-colors"
                              required
                            >
                              <option value="">Select time...</option>
                              {timeSlots.map(time => (
                                <option key={time} value={time}>{time}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>

                      {/* Pickup & Drop Service - Gestalt: Common Region */}
                      <div className={`rounded-2xl p-6 border-2 transition-all ${
                        formData.pickupDrop 
                          ? 'bg-teal-50 border-teal-300' 
                          : 'bg-gray-50 border-gray-200'
                      }`}>
                        <div className="flex items-start gap-4 mb-4">
                          <input
                            type="checkbox"
                            id="pickupDrop"
                            checked={formData.pickupDrop}
                            onChange={(e) => setFormData(prev => ({ ...prev, pickupDrop: e.target.checked }))}
                            className="w-6 h-6 rounded border-gray-300 text-teal-600 focus:ring-teal-600 mt-1 cursor-pointer"
                          />
                          <label htmlFor="pickupDrop" className="flex-1 cursor-pointer">
                            <div className="flex items-center gap-3 mb-2">
                              <Truck className="w-6 h-6 text-teal-600" />
                              <div>
                                <h3 className="text-lg font-semibold text-gray-900">Free Pickup & Drop Service</h3>
                                <p className="text-sm text-gray-600 mt-1">
                                  {isMember 
                                    ? '✓ Included free with your membership' 
                                    : 'Add ₹200 for convenient pickup and drop service'}
                                </p>
                              </div>
                            </div>
                            <div className="ml-9 space-y-2 text-sm text-gray-600">
                              <div className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-teal-600" />
                                <span>We'll pick up your vehicle from your location</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-teal-600" />
                                <span>Service it at our center with expert care</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-teal-600" />
                                <span>Drop it back at your doorstep, all cleaned & serviced</span>
                              </div>
                            </div>
                          </label>
                          {!isMember && (
                            <div className="flex flex-col items-end">
                              <span className="text-2xl font-bold text-teal-600">₹200</span>
                              <span className="text-xs text-gray-500">one-time</span>
                            </div>
                          )}
                        </div>

                        {formData.pickupDrop && (
                          <div className="mt-6 pt-6 border-t-2 border-teal-200">
                            <label className="block text-base font-medium text-gray-700 mb-3">
                              <MapPin className="inline w-5 h-5 mr-2 text-teal-600" />
                              Pickup Address *
                            </label>
                            <textarea
                              value={formData.pickupAddress}
                              onChange={(e) => handleInputChange('pickupAddress', e.target.value)}
                              placeholder="Enter your complete pickup address with landmarks..."
                              rows={3}
                              className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-teal-600 focus:outline-none resize-none text-base bg-white transition-colors"
                              required={formData.pickupDrop}
                            />
                            <p className="text-sm text-gray-500 mt-2">
                              We'll contact you to confirm the exact pickup time
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Vehicle Details - Gestalt: Figure/Ground */}
                {step === 2 && (
                  <div className="space-y-8">
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                          <BikeIcon className="w-5 h-5 text-orange-600" />
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">Vehicle Information</h2>
                      </div>

                      {/* Saved Vehicles Selection - Gestalt: Similarity */}
                      {savedVehicles.length > 0 && (
                        <div className="mb-8">
                          <label className="block text-lg font-medium text-gray-700 mb-4">
                            Select Your Vehicle
                          </label>
                          <div className="grid sm:grid-cols-2 gap-4 mb-4">
                            {savedVehicles.map(vehicle => (
                              <div
                                key={vehicle.id}
                                onClick={() => handleVehicleSelection(vehicle.id)}
                                className={`p-5 rounded-2xl border-2 cursor-pointer transition-all hover:shadow-md ${
                                  selectedVehicleId === vehicle.id && !useNewVehicle
                                    ? 'border-orange-600 bg-orange-50 shadow-md'
                                    : 'border-gray-200 hover:border-orange-300'
                                }`}
                              >
                                <div className="flex items-start justify-between">
                                  <div className="flex items-center gap-3">
                                    <span className="text-3xl">
                                      {vehicle.type === 'Motorcycle' || vehicle.type === 'Scooter' || vehicle.type === 'Bike' ? '🏍️' : '🚗'}
                                    </span>
                                    <div>
                                      <div className="font-semibold text-gray-900">{vehicle.year} {vehicle.make} {vehicle.model}</div>
                                      <div className="text-sm text-gray-600">{vehicle.type}</div>
                                      <div className="text-sm font-mono text-orange-600 mt-1">{vehicle.registrationNumber}</div>
                                    </div>
                                  </div>
                                  {selectedVehicleId === vehicle.id && !useNewVehicle && (
                                    <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                                      <Check className="w-4 h-4 text-white" />
                                    </div>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>

                          <button
                            type="button"
                            onClick={handleNewVehicle}
                            className={`w-full py-4 px-6 border-2 border-dashed rounded-2xl transition-all font-medium flex items-center justify-center gap-2 ${
                              useNewVehicle
                                ? 'border-orange-600 bg-orange-50 text-orange-600'
                                : 'border-gray-300 text-gray-600 hover:border-orange-400 hover:text-orange-600 hover:bg-orange-50'
                            }`}
                          >
                            <Plus className="w-5 h-5" />
                            Use a Different Vehicle
                          </button>
                        </div>
                      )}

                      {/* Manual Vehicle Entry - Gestalt: Common Region */}
                      {(savedVehicles.length === 0 || useNewVehicle) && (
                        <div className="bg-orange-50 rounded-2xl p-6 border-2 border-orange-200">
                          {/* Vehicle Type */}
                          <div className="mb-6">
                            <label className="block text-base font-medium text-gray-700 mb-4">
                              Vehicle Type *
                            </label>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                              {vehicleTypes.map(type => (
                                <div
                                  key={type.name}
                                  onClick={() => handleInputChange('vehicleType', type.name)}
                                  className={`p-4 rounded-xl border-2 cursor-pointer text-center transition-all ${
                                    formData.vehicleType === type.name
                                      ? 'border-orange-600 bg-white shadow-md'
                                      : 'border-gray-200 bg-white hover:border-orange-300'
                                  }`}
                                >
                                  <div className="text-2xl mb-2">{type.icon}</div>
                                  <span className="text-sm font-medium text-gray-900">{type.name}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Vehicle Details - Gestalt: Proximity */}
                          <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">Make / Brand *</label>
                              <input
                                type="text"
                                value={formData.vehicleMake}
                                onChange={(e) => handleInputChange('vehicleMake', e.target.value)}
                                placeholder="e.g., Honda, Hero, Maruti"
                                className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-orange-600 focus:outline-none text-base bg-white transition-colors"
                                required
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">Model *</label>
                              <input
                                type="text"
                                value={formData.vehicleModel}
                                onChange={(e) => handleInputChange('vehicleModel', e.target.value)}
                                placeholder="e.g., Activa, Splendor, Swift"
                                className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-orange-600 focus:outline-none text-base bg-white transition-colors"
                                required
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">Year *</label>
                              <input
                                type="number"
                                value={formData.vehicleYear}
                                onChange={(e) => handleInputChange('vehicleYear', e.target.value)}
                                placeholder="2024"
                                min="1990"
                                max={new Date().getFullYear() + 1}
                                className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-orange-600 focus:outline-none text-base bg-white transition-colors"
                                required
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">Registration Number *</label>
                              <input
                                type="text"
                                value={formData.vehicleRegistration}
                                onChange={(e) => handleInputChange('vehicleRegistration', e.target.value.toUpperCase())}
                                placeholder="MH12AB1234"
                                className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-orange-600 focus:outline-none text-base uppercase bg-white transition-colors"
                                required
                              />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Step 3: Contact Info - Gestalt: Common Region */}
                {step === 3 && (
                  <div className="space-y-8">
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                          <User className="w-5 h-5 text-purple-600" />
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">Contact Information</h2>
                      </div>
                      
                      <div className="space-y-6 bg-purple-50 rounded-2xl p-6 border-2 border-purple-200">
                        <div>
                          <label className="block text-base font-medium text-gray-700 mb-3">
                            <User className="inline w-5 h-5 mr-2 text-purple-600" />
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

                        <div className="grid sm:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-base font-medium text-gray-700 mb-3">
                              <Mail className="inline w-5 h-5 mr-2 text-purple-600" />
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
                              <Phone className="inline w-5 h-5 mr-2 text-purple-600" />
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
                            Additional Notes (Optional)
                          </label>
                          <textarea
                            value={formData.additionalNotes}
                            onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
                            placeholder="Any special requests or concerns about your vehicle..."
                            rows={4}
                            className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-purple-600 focus:outline-none resize-none text-base bg-white transition-colors"
                          />
                        </div>
                      </div>

                      {/* Summary - Gestalt: Figure/Ground */}
                      <div className="mt-8 p-6 bg-white rounded-2xl border-2 border-purple-200 shadow-md">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                          <Check className="w-5 h-5 text-purple-600" />
                          Booking Summary
                        </h3>
                        <div className="space-y-3 text-base text-gray-700">
                          <div className="flex items-start gap-3 pb-3 border-b border-gray-200">
                            <span className="text-2xl">{services.find(s => s.id === formData.service)?.icon || '🛠️'}</span>
                            <div>
                              <div className="font-medium text-gray-900">Service</div>
                              <div>{services.find(s => s.id === formData.service)?.name || 'Not selected'}</div>
                              <div className="text-teal-600 font-semibold">{services.find(s => s.id === formData.service)?.price || ''}</div>
                            </div>
                          </div>
                          <div className="flex items-start gap-3 pb-3 border-b border-gray-200">
                            <MapPin className="w-6 h-6 text-teal-600 flex-shrink-0" />
                            <div>
                              <div className="font-medium text-gray-900">Location</div>
                              <div>{formData.location || 'Not selected'}</div>
                            </div>
                          </div>
                          <div className="flex items-start gap-3 pb-3 border-b border-gray-200">
                            <Calendar className="w-6 h-6 text-orange-600 flex-shrink-0" />
                            <div>
                              <div className="font-medium text-gray-900">Date & Time</div>
                              <div>{formData.date && formData.time ? `${formData.date} at ${formData.time}` : 'Not selected'}</div>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <BikeIcon className="w-6 h-6 text-purple-600 flex-shrink-0" />
                            <div>
                              <div className="font-medium text-gray-900">Vehicle</div>
                              <div>
                                {formData.vehicleYear && formData.vehicleMake && formData.vehicleModel 
                                  ? `${formData.vehicleYear} ${formData.vehicleMake} ${formData.vehicleModel}` 
                                  : 'Not provided'}
                              </div>
                              {formData.vehicleRegistration && (
                                <div className="text-sm font-mono text-purple-600">{formData.vehicleRegistration}</div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons - Gestalt: Proximity */}
                <div className="flex flex-col sm:flex-row justify-between gap-4 mt-10 pt-8 border-t-2 border-gray-200">
                  {step > 1 && (
                    <Button
                      type="button"
                      onClick={prevStep}
                      variant="outline"
                      size="lg"
                      className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 rounded-2xl order-2 sm:order-1 font-semibold"
                    >
                      ← Previous Step
                    </Button>
                  )}
                  
                  {step < 3 ? (
                    <Button
                      type="button"
                      onClick={nextStep}
                      size="lg"
                      className="bg-purple-600 hover:bg-purple-700 text-white rounded-2xl ml-auto order-1 sm:order-2 font-semibold shadow-lg hover:shadow-xl transition-all"
                      disabled={
                        (step === 1 && (!formData.service || !formData.location || !formData.date || !formData.time)) ||
                        (step === 2 && (!formData.vehicleType || !formData.vehicleMake || !formData.vehicleModel || !formData.vehicleYear || !formData.vehicleRegistration))
                      }
                    >
                      Next Step →
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      size="lg"
                      className="bg-teal-600 hover:bg-teal-700 text-white rounded-2xl ml-auto order-1 sm:order-2 font-semibold shadow-lg hover:shadow-xl transition-all"
                    >
                      <Check className="w-5 h-5 mr-2" />
                      Confirm Booking
                    </Button>
                  )}
                </div>
              </form>

              {/* Not Logged In CTA - Gestalt: Figure/Ground */}
              {!isUserLoggedIn && (
                <div className="mt-8 bg-teal-50 border-2 border-teal-200 rounded-2xl p-6 text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Want to save time on future bookings?</h3>
                  <p className="text-gray-600 mb-4">Create an account to save your vehicle details and book services faster!</p>
                  <Link to="/login">
                    <Button className="bg-teal-600 hover:bg-teal-700 text-white rounded-2xl font-semibold">
                      Create Free Account
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </section>

          {/* Trust Indicators - Gestalt: Similarity */}
          <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-teal-600 mb-2">500+</div>
                  <div className="text-sm sm:text-base text-gray-600">Locations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-orange-600 mb-2">50K+</div>
                  <div className="text-sm sm:text-base text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-purple-600 mb-2">24/7</div>
                  <div className="text-sm sm:text-base text-gray-600">Support</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-teal-600 mb-2">4.9★</div>
                  <div className="text-sm sm:text-base text-gray-600">Average Rating</div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}