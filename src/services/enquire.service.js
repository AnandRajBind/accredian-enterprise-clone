import { apiClient } from './api-client';

export async function submitEnquiry(payload) {
  return apiClient('/api/enquire', {
    method: 'POST',
    body: payload,
  });
}
