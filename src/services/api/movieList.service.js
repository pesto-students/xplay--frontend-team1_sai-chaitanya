import axios from 'axios';
import { API_BASE_URL, ENDPOINTS } from '../../constants';

const _getMovieList = () =>
	axios.get(`${API_BASE_URL}/${ENDPOINTS.MOVIE_LIST}`);

const _getMovieListByType = (type, limit) =>
	axios.get(
		`${API_BASE_URL}/${ENDPOINTS.MOVIE_LIST}/${type}${
			limit ? '?limit=' + limit : ''
		}`
	);

export { _getMovieList, _getMovieListByType };
