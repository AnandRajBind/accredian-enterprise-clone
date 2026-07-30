import { apiClient } from './api-client';

export async function fetchPrograms(category) {
  const query = category && category !== 'All Programs' ? `?category=${encodeURIComponent(category)}` : '';
  return apiClient(`/api/programs${query}`);
}

export async function fetchFaqs(category) {
  const query = category ? `?category=${encodeURIComponent(category)}` : '';
  return apiClient(`/api/faqs${query}`);
}
