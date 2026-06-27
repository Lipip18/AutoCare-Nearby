const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const vehicleSchema = new mongoose.Schema({
  type: { type: String, enum: ['2-wheeler', '4-wheeler'], required: true },
  make: { type: String, required: true },        // e.g. Honda, Maruti
  model: { type: String, required: true },       // e.g. Activa, Swift
  year: { type: String, required: true },
  registrationNumber: { type: String, required: true }
});

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  phone: { type: String, required: true },
  password: { type: String, required: true, minlength: 6 },
  role: { type: String, enum: ['customer', 'admin'], default: 'customer' },
  preferredLocation: { type: String, default: '' },
  vehicles: [vehicleSchema],
  membership: {
    type: { type: String, enum: ['basic', 'premium', null], default: null },
    expiresAt: { type: Date, default: null },
    servicesLeft: { type: Number, default: 0 }
  }
}, { timestamps: true });

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

// Method to check password
userSchema.methods.matchPassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', userSchema);