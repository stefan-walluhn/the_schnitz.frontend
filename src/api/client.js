export const apiClient = {
  get(endpoint) {
    return this.apiCall(endpoint, 'GET');
  },
  post(endpoint, data=null) {
    return this.apiCall(endpoint, 'POST', data);
  },
  async apiCall(endpoint, method, data=null) {
    const options = {
      method: method,
      headers: { 'Content-Type': 'application/json' },
    };
    if (data) options['body'] = JSON.stringify(data);

    return await fetch(`/api/${endpoint}`, options);
  },
}
