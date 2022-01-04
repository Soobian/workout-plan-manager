import axios from 'axios';
import * as SecureStore from 'expo-secure-store'

const baseURL = 'http://192.168.100.3:8000/api/'
// Create axios client, pre-configured with baseURL
const TokenApi = axios.create({
    baseURL: baseURL,
    timeout: 5000,
    withCredentials: true,
    headers: {
        Authorization: SecureStore.getItemAsync('access_token')
            ? 'JWT ' + SecureStore.getItemAsync('access_token')
            : null,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
});

export default TokenApi;