import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import api from '../api/axios';
import { useAuth } from '../context/AuthContext';

interface Stats {
  totalBookings: number;
  pendingBookings: number;
  completedBookings: number;
  totalRevenue: number;
}

interface AdminBooking {
  _id: string;
  bookingId: string;
  customer_name: string;
  serviceName: string;
  date: string;
  amount: number;
  status: string;
}

const statusOptions = ['pending', 'confirmed', 'in-progress', 'completed', 'cancelled'];

export function AdminDashboard() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [bookings, setBookings] = useState<AdminBooking[]>([]);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('overview');
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || user.role !== 'admin') {
      setLoading(false);
      navigate('/');
      return;
    }

    setLoading(true);
    Promise.all([
      api.get('/admin/stats'),
      api.get('/admin/bookings')
    ])
      .then(([statsRes, bookingsRes]) => {
        setStats(statsRes.data);
        setBookings(bookingsRes.data.bookings);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [user, navigate]);

  const updateStatus = async (id: string, status: string) => {
    const previous = bookings;
    setUpdatingId(id);
    // Optimistically update the UI
    setBookings(prev => prev.map(b =>
      b._id === id ? { ...b, status } : b
    ));

    try {
      await api.put(`/admin/bookings/${id}/status`, { status });
    } catch (err: any) {
      // Revert on failure
      setBookings(previous);
      alert(err.response?.data?.message || 'Failed to update status. Please try again.');
    } finally {
      setUpdatingId(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-64 bg-gray-900 text-white p-6">
        <h1 className="text-xl font-bold mb-8 text-purple-400">Admin Panel</h1>
        {['overview', 'bookings'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`w-full text-left px-4 py-3 rounded-xl mb-2 capitalize font-medium transition-colors ${
              activeTab === tab ? 'bg-purple-600' : 'hover:bg-gray-800'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8">
        {loading ? (
          <p className="text-gray-500">Loading...</p>
        ) : (
          <>
            {activeTab === 'overview' && (
              stats ? (
                <>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Overview</h2>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    {[
                      { label: 'Total Bookings', value: stats.totalBookings, color: 'purple' },
                      { label: 'Pending', value: stats.pendingBookings, color: 'yellow' },
                      { label: 'Completed', value: stats.completedBookings, color: 'green' },
                      { label: 'Revenue', value: `₹${(stats.totalRevenue || 0).toLocaleString()}`, color: 'teal' }
                    ].map(card => (
                      <div key={card.label} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                        <div className="text-3xl font-bold text-gray-900">{card.value}</div>
                        <div className="text-sm text-gray-500 mt-1">{card.label}</div>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <p className="text-gray-500">No stats available.</p>
              )
            )}

            {activeTab === 'bookings' && (
              <>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">All Bookings</h2>
                {bookings.length === 0 ? (
                  <p className="text-gray-500">No bookings yet.</p>
                ) : (
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <table className="w-full">
                      <thead className="bg-gray-50 border-b border-gray-200">
                        <tr>
                          {['Booking ID', 'Customer', 'Service', 'Date', 'Amount', 'Status', 'Action'].map(h => (
                            <th key={h} className="text-left px-4 py-3 text-sm font-medium text-gray-600">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {bookings.map((b) => (
                          <tr key={b._id} className="hover:bg-gray-50">
                            <td className="px-4 py-3 text-sm font-mono text-purple-600">{b.bookingId}</td>
                            <td className="px-4 py-3 text-sm">{b.customer_name}</td>
                            <td className="px-4 py-3 text-sm">{b.serviceName}</td>
                            <td className="px-4 py-3 text-sm">{b.date}</td>
                            <td className="px-4 py-3 text-sm">₹{b.amount}</td>
                            <td className="px-4 py-3 text-sm capitalize">{b.status}</td>
                            <td className="px-4 py-3">
                              <select
                                value={b.status}
                                onChange={e => updateStatus(b._id, e.target.value)}
                                disabled={updatingId === b._id}
                                className="text-xs border rounded-lg px-2 py-1 disabled:opacity-50"
                              >
                                {statusOptions.map(s => <option key={s} value={s}>{s}</option>)}
                              </select>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}