export const apiClient = {
  get(endpoint) {
    return this.apiCall(endpoint, 'GET', null);
  },
  post(endpoint, data=null) {
    return this.apiCall(endpoint, 'POST', data);
  },
  async apiCall(endpoint, method, data) {
    const options = {
      method: method,
      headers: { 'Content-Type': 'application/json' },
    };
    if (data != null) options['body'] = JSON.stringify(data);

    const response = await fetch(`/api/${endpoint}`, options);

    if (!response.ok) throw new Error(response.statusText.toLowerCase());

    return await response.json();
  },
}
