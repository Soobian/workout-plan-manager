import axios from 'axios';

const baseURL = 'http://localhost:8000/api/'
// Create axios client, pre-configured with baseURL
const TokenApi = axios.create({
    baseURL: baseURL,
    timeout: 5000,
    withCredentials: true,
    headers: {
        Authorization: localStorage.getItem('access_token')
            ? 'JWT ' + localStorage.getItem('access_token')
            : null,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
});

export default TokenApi;