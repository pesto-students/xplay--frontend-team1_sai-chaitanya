import { http } from './utils';
import { ENDPOINTS } from '../../constants';

const _getUsers = () => http.get(ENDPOINTS.USERS);

const _signUp = (user) => http.post(ENDPOINTS.SIGN_UP, user);

export {
    _signUp,
    _getUsers
};
