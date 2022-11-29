import { http } from './utils';
import { ENDPOINTS } from '../../constants';

const _signUp = (user) => http.post(ENDPOINTS.SIGN_UP, user);

export { _signUp };
