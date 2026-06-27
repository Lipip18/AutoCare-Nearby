import api from './axios';

export const registerAPI = (data: object) => api.post('/auth/register', data);
export const loginAPI = (data: object) => api.post('/auth/login', data);
export const getMeAPI = () => api.get('/auth/me');
export const updateProfileAPI = (data: object) => api.put('/auth/update', data);