import { apiClient } from './api-client';

export async function submitReferral(payload) {
  return apiClient('/api/referral', {
    method: 'POST',
    body: payload,
  });
}
