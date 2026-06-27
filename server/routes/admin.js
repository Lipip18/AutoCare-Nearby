const express = require('express');
const router = express.Router();
const {
  getAllBookings, updateBookingStatus, getStats,
  createService, getReviews, approveReview
} = require('../controllers/adminController');
const { protect } = require('../middleware/auth');
const { isAdmin } = require('../middleware/isAdmin');

router.use(protect, isAdmin);  // all admin routes require auth + admin role

router.get('/bookings', getAllBookings);
router.put('/bookings/:id/status', updateBookingStatus);
router.get('/stats', getStats);
router.post('/services', createService);
router.get('/reviews', getReviews);
router.put('/reviews/:id/approve', approveReview);

module.exports = router;