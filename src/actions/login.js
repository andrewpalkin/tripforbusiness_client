import axios from 'axios';
import Constants from "../constants/Constants"

const instance = axios.create({
    baseURL: Constants.BASE_URL,
    timeout: 1000
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