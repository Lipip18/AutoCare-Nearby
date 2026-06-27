import api from './axios';

export const createBookingAPI = (data: object) => api.post('/bookings', data);
export const getMyBookingsAPI = () => api.get('/bookings/my');
export const cancelBookingAPI = (id: string) => api.put(`/bookings/${id}/cancel`);