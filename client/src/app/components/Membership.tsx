import { Check, Truck, Shield, Clock, Gift, BikeIcon } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router';

const membershipBenefits = [
  {
    icon: Gift,
    title: '5 Free Services/Year',
    description: 'Get 5 complimentary services annually - just pay for parts!'
  },
  {
    icon: Truck,
    title: 'Free Pickup & Drop',
    description: 'Unlimited free pickup and drop service for all your bookings'
  },
  {
    icon: Clock,
    title: 'Priority Booking',
    description: 'Skip the queue with priority scheduling and faster service'
  },
  {
    icon: Shield,
    title: 'Extended Warranty',
    description: '6-month warranty on all parts and labor for peace of mind'
  }
];

const plans = [
  {
    name: 'Basic Membership',
    subtitle: 'Perfect for 2-Wheeler Owners',
    price: '₹1,999',
    period: '/year',
    features: [
      '5 Free Services per year',
      'Free Pickup & Drop',
      'Pay only for parts',
      'Priority booking',
      '10% discount on parts',
      'Valid for 1 vehicle'
    ],
    recommended: false,
    color: 'teal'
  },
  {
    name: 'Premium Membership',
    subtitle: 'Best for Multiple Vehicles',
    price: '₹3,499',
    period: '/year',
    features: [
      '10 Free Services per year',
      'Free Pickup & Drop',
      'Pay only for parts',
      'Priority booking',
      '20% discount on parts',
      'Valid for up to 3 vehicles',
      'Extended warranty',
      '24/7 emergency support'
    ],
    recommended: true,
    color: 'purple'
  },
  {
    name: 'Family Membership',
    subtitle: 'Complete Family Coverage',
    price: '₹5,999',
    period: '/year',
    features: [
      '15 Free Services per year',
      'Free Pickup & Drop',
      'Pay only for parts',
      'Priority booking',
      '25% discount on parts',
      'Valid for up to 5 vehicles',
      'Extended warranty',
      '24/7 emergency support',
      'Free annual inspection'
    ],
    recommended: false,
    color: 'orange'
  }
];

export function Membership() {
  return (
    <section id="membership" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-4">
            <BikeIcon className="w-4 h-4" />
            <span className="text-sm font-medium">Exclusive Membership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-4">
            Save More with Annual Membership
          </h2>
          <p className="text-lg text-gray-600">
            Get 5-15 free services every year. Pay only for part replacements and enjoy premium benefits!
          </p>
        </div>

        {/* Benefits Grid - Gestalt: Similarity */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {membershipBenefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-200 hover:border-teal-300 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        {/* Membership Plans - Gestalt: Common Region */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const colorClasses = {
              teal: {
                badge: 'bg-teal-100 text-teal-700 border-teal-200',
                border: 'border-teal-300',
                button: 'bg-teal-600 hover:bg-teal-700',
                accent: 'text-teal-600'
              },
              purple: {
                badge: 'bg-purple-100 text-purple-700 border-purple-200',
                border: 'border-purple-500',
                button: 'bg-purple-600 hover:bg-purple-700',
                accent: 'text-purple-600'
              },
              orange: {
                badge: 'bg-orange-100 text-orange-700 border-orange-200',
                border: 'border-orange-300',
                button: 'bg-orange-600 hover:bg-orange-700',
                accent: 'text-orange-600'
              }
            };
            
            const colors = colorClasses[plan.color as keyof typeof colorClasses];
            
            return (
              <div
                key={index}
                className={`relative bg-white rounded-3xl border-2 p-8 transition-all hover:shadow-2xl ${
                  plan.recommended 
                    ? 'border-purple-500 shadow-xl scale-105 lg:scale-110' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      ⭐ Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-sm text-gray-600 mb-6">{plan.subtitle}</p>
                  
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 text-lg">{plan.period}</span>
                  </div>

                  <Link to="/book-service">
                    <Button 
                      className={`w-full rounded-2xl text-white font-semibold py-6 shadow-lg hover:shadow-xl transition-all ${colors.button}`}
                    >
                      Get Started
                    </Button>
                  </Link>
                </div>

                {/* Features List - Gestalt: Proximity */}
                <div className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        plan.recommended ? 'bg-purple-100' : 'bg-teal-100'
                      }`}>
                        <Check className={`w-3 h-3 ${plan.recommended ? 'text-purple-600' : 'text-teal-600'}`} />
                      </div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* How It Works - Gestalt: Continuity */}
        <div className="mt-20 bg-teal-50 rounded-3xl p-8 sm:p-12 border-2 border-teal-200">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-12">
            How Membership Works
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                1
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Choose Your Plan</h4>
              <p className="text-gray-600">Select the membership plan that fits your needs and vehicles</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                2
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Book Services</h4>
              <p className="text-gray-600">Schedule your services anytime - labor charges are completely free!</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                3
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Pay Only for Parts</h4>
              <p className="text-gray-600">You only pay the discounted cost of any replacement parts needed</p>
            </div>
          </div>
        </div>

        {/* Savings Calculator */}
        <div className="mt-12 bg-purple-50 rounded-3xl p-8 border-2 border-purple-200">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              💰 Save up to ₹15,000 per year!
            </h3>
            <p className="text-gray-700 mb-6">
              Average service charge is ₹800-₹1,500 per visit. With 5 free services, you save ₹4,000-₹7,500 on labor alone. 
              Plus, get discounts on parts and free pickup & drop worth ₹500 per service!
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 border border-purple-200">
                <div className="text-3xl font-bold text-teal-600 mb-2">₹4,000+</div>
                <div className="text-sm text-gray-600">Saved on Labor</div>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-purple-200">
                <div className="text-3xl font-bold text-orange-600 mb-2">₹2,500+</div>
                <div className="text-sm text-gray-600">Pickup & Drop Value</div>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-purple-200">
                <div className="text-3xl font-bold text-purple-600 mb-2">20-25%</div>
                <div className="text-sm text-gray-600">Parts Discount</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
