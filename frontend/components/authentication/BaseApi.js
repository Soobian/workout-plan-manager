/**
 * @module Authentication
 */

import axios from 'axios';

/**
 * Url with developers current IP - keep it up to date in order to develop application
 * Synatax: 'http://<IP>:8000/api/'
 */
const baseURL = 'http://192.168.1.4:8000/api/'

/**
 * Authentication component, which enables to use axious locally
 */
const BaseApi = axios.create({
    baseURL: baseURL,
    timeout: 5000,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
});

export default BaseApi