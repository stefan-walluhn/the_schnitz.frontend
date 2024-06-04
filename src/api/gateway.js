import { apiClient } from './client';

export const apiGateway = {
  login(password) {
    return apiClient.post('login', { password: password });
  },
  logout() {
    return apiClient.get('logout');
  },
  getLocation(location_id) {
    return apiClient.get(`discover/${location_id}`);
  },
  discoverLocation(location_id) {
    return apiClient.post(`discover/${location_id}`);
  },
};
