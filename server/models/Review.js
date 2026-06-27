const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  booking: { type: mongoose.Schema.Types.ObjectId, ref: 'Booking' },
  customerName: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  comment: { type: String, required: true },
  service: { type: String },
  location: { type: String },
  isApproved: { type: Boolean, default: false }   // admin must approve before showing
}, { timestamps: true });

module.exports = mongoose.model('Review', reviewSchema);