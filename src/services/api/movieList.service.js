import axios from 'axios';
import { API_BASE_URL, ENDPOINTS } from '../../constants';

const _getMovieDetailsById = (id) =>
	axios.get(
		`${API_BASE_URL}/${ENDPOINTS.MOVIE}/${id}`
	);

const _getMovieListByType = (type, limit) =>
	axios.get(
		`${API_BASE_URL}/${ENDPOINTS.MOVIE_LIST}/${type}${limit ? '?limit=' + limit : ''
		}`
	);

const _getPromotedMovie = () =>
	axios.get(`${API_BASE_URL}/${ENDPOINTS.PROMOTED_MOVIE}`);

export { _getPromotedMovie, _getMovieListByType, _getMovieDetailsById };
