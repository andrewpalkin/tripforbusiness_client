import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://andrewp01:3000',
    timeout: 1000,
    headers: { 'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, HEAD',
        'Access-Control-Request-Headers': 'Content-Type'}
});

export default {
    user: {
        login: (credentials) => instance.get('/login', {
            params: {
                email: credentials.email,
                pass: credentials.password
            }
        }).then(res => res.data.user)
    }
}