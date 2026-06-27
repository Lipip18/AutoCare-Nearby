const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Service = require('./models/Service');

dotenv.config();
mongoose.connect(process.env.MONGO_URI);

const services = [
  { name: 'Oil Change', description: 'Engine oil change for bikes, scooters, and cars', price: 399, priceDisplay: 'From ₹399', category: 'both', icon: '🛢️', tag: '2-Wheeler Special' },
  { name: 'General Service', description: 'Complete servicing including oil, filter, and inspection', price: 699, priceDisplay: 'From ₹699', category: 'both', icon: '🔧', tag: 'Most Popular' },
  { name: 'Brake Service', description: 'Complete brake inspection and repair', price: 899, priceDisplay: 'From ₹899', category: 'both', icon: '🛑' },
  { name: 'Tire/Tyre Service', description: 'Rotation, balancing, puncture repair, and replacement', price: 599, priceDisplay: 'From ₹599', category: 'both', icon: '🛞' },
  { name: 'Battery Service', description: 'Battery testing, replacement, and electrical checks', price: 799, priceDisplay: 'From ₹799', category: 'both', icon: '🔋' },
  { name: 'Diagnostics', description: 'Advanced diagnostics to identify and fix issues', price: 499, priceDisplay: 'From ₹499', category: 'both', icon: '🔍' }
];

Service.insertMany(services)
  .then(() => { console.log('Services seeded!'); process.exit(); })
  .catch(err => { console.error(err); process.exit(1); });