export const apiClient = {
  get(endpoint, callbacks={}) {
    return this.apiCall(endpoint, 'GET', null, callbacks);
  },
  post(endpoint, data=null, callbacks={}) {
    return this.apiCall(endpoint, 'POST', data, callbacks);
  },
  async apiCall(endpoint, method, data, callbacks) {
    const options = {
      method: method,
      headers: { 'Content-Type': 'application/json' },
    };
    if (data) options['body'] = JSON.stringify(data);

    const response = await fetch(`/api/${endpoint}`, options);

    if (response.statusText.toLowerCase() in callbacks) {
        callbacks[response.statusText.toLowerCase()]();
        return response;  // only return on OK, else raise
    }

    if (response.ok) return response;

    throw new Error(await response.statusText);
  },
}
