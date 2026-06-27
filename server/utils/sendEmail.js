const nodemailer = require('nodemailer');

const sendEmail = async ({ to, subject, html }) => {
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: `"NearbyAutoCare" <${process.env.EMAIL_USER}>`,
        to,
        subject,
        html
    };

    await transporter.sendMail(mailOptions);
};

// Email templates
const bookingConfirmationEmail = (booking) => `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
    <div style="background: #7C3AED; padding: 20px; text-align: center;">
      <h1 style="color: white; margin: 0;">NearbyAutoCare</h1>
    </div>
    <div style="padding: 30px; background: #f9f9f9;">
      <h2 style="color: #111827;">Booking Confirmed! ✅</h2>
      <p>Hi ${booking.customer_name}, your service has been booked successfully.</p>
      <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <p><strong>Booking ID:</strong> ${booking.bookingId}</p>
        <p><strong>Service:</strong> ${booking.serviceName}</p>
        <p><strong>Location:</strong> ${booking.location}</p>
        <p><strong>Date:</strong> ${booking.date}</p>
        <p><strong>Time:</strong> ${booking.time}</p>
        <p><strong>Vehicle:</strong> ${booking.vehicle.make} ${booking.vehicle.model} (${booking.vehicle.registrationNumber})</p>
        <p><strong>Amount:</strong> ₹${booking.amount}</p>
      </div>
      <p style="color: #6B7280; font-size: 14px;">Need to reschedule? Call us at +91 9638527410</p>
    </div>
  </div>
`;

module.exports = { sendEmail, bookingConfirmationEmail };