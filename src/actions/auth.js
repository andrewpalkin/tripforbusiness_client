import types from '../constants/Types';
import apiLogin from './login';

export const userLoggedIn = (user) => ({
    type: types.USER_LOGGED_IN,
    user
});

export const login = (credentials) => dispatch => apiLogin.user.login(credentials).then(user => dispatch(userLoggedIn(user)));