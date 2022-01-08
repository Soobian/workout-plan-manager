import axios from 'axios';

const baseURL = 'http://192.168.100.3:8000/api/'

const BaseApi = axios.create({
    baseURL: baseURL,
    timeout: 5000,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
});

export default BaseApi