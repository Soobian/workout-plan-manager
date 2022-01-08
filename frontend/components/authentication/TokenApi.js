import axios from 'axios';
import * as SecureStore from 'expo-secure-store'

const baseURL = 'http://192.168.100.3:8000/api/'

const TokenApi = axios.create({
    baseURL: baseURL,
    timeout: 5000,
    withCredentials: true,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
});

export default TokenApi;