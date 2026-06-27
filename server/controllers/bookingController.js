const Booking = require('../models/Booking');
const Service = require('../models/Service');
const { sendEmail, bookingConfirmationEmail } = require('../utils/sendEmail');

// POST /api/bookings  (protected)
const createBooking = async (req, res) => {
  try {
    const {
      serviceId, location, date, time,
      vehicle, additionalNotes, pickupDrop, pickupAddress
    } = req.body;

    const service = await Service.findById(serviceId);
    if (!service) return res.status(404).json({ message: 'Service not found' });

    // Apply member discount if applicable
    let amount = service.price;
    let isMemberDiscount = false;
    if (req.user.membership && req.user.membership.type) {
      const discountPercent = req.user.membership.type === 'premium' ? 20 : 10;
      amount = Math.round(amount * (1 - discountPercent / 100));
      isMemberDiscount = true;
    }

    const booking = await Booking.create({
      customer: req.user._id,
      service: service._id,
      serviceName: service.name,
      location,
      date,
      time,
      vehicle,
      customer_name: req.user.name,
      customer_email: req.user.email,
      customer_phone: req.user.phone,
      additionalNotes,
      pickupDrop,
      pickupAddress,
      amount,
      isMemberDiscount
    });

    // Send confirmation email (don't await so response is fast)
    sendEmail({
      to: req.user.email,
      subject: `Booking Confirmed — ${booking.bookingId}`,
      html: bookingConfirmationEmail(booking)
    }).catch(err => console.error('Email error:', err));

    res.status(201).json({ booking, message: 'Booking confirmed!' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET /api/bookings/my  (protected)
const getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ customer: req.user._id })
      .sort({ createdAt: -1 });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// PUT /api/bookings/:id/cancel  (protected)
const cancelBooking = async (req, res) => {
  try {
    const booking = await Booking.findOne({ _id: req.params.id, customer: req.user._id });
    if (!booking) return res.status(404).json({ message: 'Booking not found' });
    if (booking.status === 'completed') {
      return res.status(400).json({ message: 'Cannot cancel a completed booking' });
    }
    booking.status = 'cancelled';
    await booking.save();
    res.json({ message: 'Booking cancelled', booking });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createBooking, getMyBookings, cancelBooking };