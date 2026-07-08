import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { cancelBookingAPI, getMyBookingsAPI } from '../api/bookingAPI';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { useAuth } from '../context/AuthContext';

interface Booking {
  _id: string;
  bookingId: string;
  serviceName: string;
  status: string;
  location: string;
  date: string;
  time: string;
  amount: number;
  vehicle: {
    make: string;
    model: string;
  };
}

const statusColors: Record<string, string> = {
  pending: 'bg-yellow-100 text-yellow-700',
  confirmed: 'bg-blue-100 text-blue-700',
  'in-progress': 'bg-purple-100 text-purple-700',
  completed: 'bg-green-100 text-green-700',
  cancelled: 'bg-red-100 text-red-700'
};

const defaultStatusColor = 'bg-gray-100 text-gray-700';

export function MyBookings() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [cancellingId, setCancellingId] = useState<string | null>(null);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      setLoading(false);
      navigate('/login');
      return;
    }
    setLoading(true);
    getMyBookingsAPI()
      .then(res => setBookings(res.data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [user, navigate]);

  const handleCancel = async (id: string) => {
    if (!confirm('Cancel this booking?')) return;
    try {
      setCancellingId(id);
      await cancelBookingAPI(id);
      setBookings(prev => prev.map(b =>
        b._id === id ? { ...b, status: 'cancelled' } : b
      ));
    } catch (err: any) {
      alert(err.response?.data?.message || 'Failed to cancel booking. Please try again.');
    } finally {
      setCancellingId(null);
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen pt-32 pb-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">My Bookings</h1>
          {loading ? (
            <p className="text-gray-500">Loading...</p>
          ) : bookings.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg mb-4">No bookings yet.</p>
              <Link to="/book-service" className="bg-purple-600 text-white px-6 py-3 rounded-full inline-block">
                Book a Service
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {bookings.map((booking) => (
                <div key={booking._id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{booking.serviceName}</h3>
                      <p className="text-sm text-gray-500">{booking.bookingId}</p>
                    </div>
                    <span className={`text-xs px-3 py-1 rounded-full font-medium ${statusColors[booking.status] || defaultStatusColor}`}>
                      {booking.status}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-4">
                    <span>📍 {booking.location}</span>
                    <span>📅 {booking.date} at {booking.time}</span>
                    <span>🚗 {booking.vehicle.make} {booking.vehicle.model}</span>
                    <span>💰 ₹{booking.amount}</span>
                  </div>
                  {['pending', 'confirmed'].includes(booking.status) && (
                    <button
                      onClick={() => handleCancel(booking._id)}
                      disabled={cancellingId === booking._id}
                      className="text-sm text-red-600 hover:text-red-700 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {cancellingId === booking._id ? 'Cancelling...' : 'Cancel Booking'}
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}