import { apiClient } from './client';


export const apiGateway = {
  login(password, callbacks={}) {
    apiClient.post('login', { password: password }, callbacks)
  },
  logout() {
    apiClient.get('logout');
  },
  async getLocation(location_id, callbacks={}) {
    const response = await apiClient.get(`discover/${location_id}`, callbacks);

    if (response.ok) return await response.json();
  },
  async discoverLocation(location_id, callbacks={}) {
    const response = await apiClient.post(`discover/${location_id}`, callbacks);

    if (response.ok) return await response.json();
  },
};
