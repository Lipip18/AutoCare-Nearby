const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Generate JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN
  });
};

// POST /api/auth/register
const register = async (req, res) => {
  try {
    const { name, email, phone, password, preferredLocation, vehicles } = req.body;

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    // Validate at least one vehicle
    if (!vehicles || vehicles.length === 0) {
      return res.status(400).json({ message: 'Please add at least one vehicle' });
    }

    const user = await User.create({
      name, email, phone, password, preferredLocation, vehicles
    });

    const token = generateToken(user._id);

    res.status(201).json({
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role,
        vehicles: user.vehicles,
        preferredLocation: user.preferredLocation,
        membership: user.membership
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST /api/auth/login
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = generateToken(user._id);

    res.json({
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role,
        vehicles: user.vehicles,
        preferredLocation: user.preferredLocation,
        membership: user.membership
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET /api/auth/me  (protected)
const getMe = async (req, res) => {
  const user = await User.findById(req.user._id).select('-password');
  res.json(user);
};

// PUT /api/auth/update  (protected)
const updateProfile = async (req, res) => {
  try {
    const { name, phone, preferredLocation, vehicles } = req.body;
    const user = await User.findByIdAndUpdate(
      req.user._id,
      { name, phone, preferredLocation, vehicles },
      { new: true, runValidators: true }
    ).select('-password');
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { register, login, getMe, updateProfile };