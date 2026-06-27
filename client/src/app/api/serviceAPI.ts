import api from './axios';

export const getServicesAPI = (category?: string) =>
  api.get('/services', { params: category ? { category } : {} });