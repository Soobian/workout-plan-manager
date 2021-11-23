import axios from 'axios';

// Create axios client, pre-configured with baseURL
const api = axios.create({
    baseURL: 'http://localhost:8000/',
    timeout: 10000,
    withCredentials: true,
    transformRequest: [(data) => JSON.stringify(data.data)],
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
});

// Set JSON Web Token in Client to be included in all calls
export const setClientToken = token => {
    api.interceptors.request.use(function(config) {
        config.headers.Authorization = `Bearer ${token}`;
    return config;
  });
};

export default api;