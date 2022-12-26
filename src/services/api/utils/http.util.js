import axios from 'axios';

import { API_BASE_URL } from '../../../constants';
import { getValueFromStorage } from '../../../utils';

const tokens = getValueFromStorage('okta-token-storage');
const accessToken = tokens?.accessToken?.accessToken || null;

if (accessToken) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
}

const http = axios.create({
    baseURL: API_BASE_URL
});

const appendUrlParams = (params) => {
    let searchParams = new URLSearchParams();
    for (const param in params) {
        searchParams.append(param, params[param]);
    }
    const _newParams = searchParams.toString();
    return _newParams.length ? ('?' + _newParams) : '';
}

export {
    http,
    appendUrlParams
};
