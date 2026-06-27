const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },        // in INR, e.g. 399
  priceDisplay: { type: String },                 // e.g. "From ₹399"
  category: { type: String, enum: ['2-wheeler', '4-wheeler', 'both'], default: 'both' },
  icon: { type: String, default: '🔧' },
  image: { type: String, default: '' },
  duration: { type: Number, default: 60 },        // in minutes
  isActive: { type: Boolean, default: true },
  tag: { type: String, default: null }            // e.g. "Most Popular"
}, { timestamps: true });

module.exports = mongoose.model('Service', serviceSchema);