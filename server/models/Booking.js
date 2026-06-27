const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  service: { type: mongoose.Schema.Types.ObjectId, ref: 'Service', required: true },
  serviceName: { type: String, required: true },   // denormalized for quick display
  location: { type: String, required: true },
  date: { type: String, required: true },          // e.g. "2025-07-15"
  time: { type: String, required: true },          // e.g. "10:00 AM"
  vehicle: {
    type: { type: String },
    make: { type: String },
    model: { type: String },
    year: { type: String },
    registrationNumber: { type: String }
  },
  customer_name: { type: String, required: true },
  customer_email: { type: String, required: true },
  customer_phone: { type: String, required: true },
  additionalNotes: { type: String, default: '' },
  pickupDrop: { type: Boolean, default: false },
  pickupAddress: { type: String, default: '' },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'in-progress', 'completed', 'cancelled'],
    default: 'pending'
  },
  amount: { type: Number, required: true },
  isMemberDiscount: { type: Boolean, default: false },
  bookingId: { type: String, unique: true }        // e.g. NAC-2025-00123
}, { timestamps: true });

// Auto-generate bookingId before saving
bookingSchema.pre('save', async function(next) {
  if (!this.bookingId) {
    const count = await mongoose.model('Booking').countDocuments();
    this.bookingId = `NAC-${new Date().getFullYear()}-${String(count + 1).padStart(5, '0')}`;
  }
  next();
});

module.exports = mongoose.model('Booking', bookingSchema);