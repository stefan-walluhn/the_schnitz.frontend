import { apiClient } from './client';


export const apiGateway = {
  async login(password) {
    const response = await apiClient.post('login', { password: password })

    if (!response.ok) {
      if (response.status == 401) return false;
      throw new Error('unable to handle API response');
    }

    return true;
  },
  logout() {
    apiClient.get('logout');
  },
  async getLocation(location_id) {
    const response = await apiClient.get(`discover/${location_id}`);

    if (!response.ok) {
      if (response.status == 404) throw new Error('location not found');
      if (response.status == 401) throw new Error('unauthenticated');
      throw new Error('unable to handle API response');
    }

    return await response.json();
  },
  async discoverLocation(location_id) {
    const response = await apiClient.post(`discover/${location_id}`);

    if (!response.ok) {
      if (response.status == 404) throw new Error('location not found');
      if (response.status == 401) throw new Error('unauthenticated');
      throw new Error('unable to handle API response');
    }

    return await response.json();
  },
};
