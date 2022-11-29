import axios from 'axios';
import { API_BASE_URL } from '../../../constants';

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
