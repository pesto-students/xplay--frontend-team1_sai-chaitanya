import axios from 'axios';

import { API_BASE_URL } from '../../constants';
import { getValueFromStorage } from '../../utils';

const jwtInterceptor = () => {
	axios.interceptors.request.use((request) => {
		// add auth header with jwt if account is logged in and request is to the api url
		const tokens = getValueFromStorage('okta-token-storage');
		const accessToken = tokens?.accessToken?.accessToken || null;
		const isLoggedIn = !!accessToken;
		const isApiUrl = request.url.startsWith(API_BASE_URL);

		if (isLoggedIn && isApiUrl) {
			request.headers['Authorization'] = `Bearer ${accessToken}`;
		}

		return request;
	});
};

export { jwtInterceptor };
