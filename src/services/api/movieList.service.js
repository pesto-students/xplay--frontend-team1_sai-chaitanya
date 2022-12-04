import { http, appendUrlParams } from './utils';
import { ENDPOINTS } from '../../constants';

/**
 * @function _createWatchParty
 * @param {Object} watchPartyObject object of a movie
 * @returns promise
 */
const _createWatchParty = (watchPartyObject) => http.post(
	ENDPOINTS.WATCH_PARTY, watchPartyObject);

/**
 * @function _getMovieDetailsById
 * @param {String} id object id of a movie
 * @returns promise
 */
const _getMovieDetailsById = (id) => http.get(`${ENDPOINTS.MOVIE}/${id}`);

/**
 * @function _getMoviesByType
 * @param {Object} { 
 * 		type: 'featured|latest', 
 * 		query: { limit: number, offset: number }
 * } 
 * @returns promise
 */
const _getMoviesByType = ({ type, query }) => {
	const params = appendUrlParams(query);
	return http.get(
		`${ENDPOINTS.MOVIE_LIST_BY_TYPE}/${type}${params}`
	);
};

/**
 * @function _getMoviesByGenre
 * @param {Object} { 
 * 		genre: string, 
 * 		query: { limit: number, offset: number }
 * } 
 * @returns promise
 */
const _getMoviesByGenre = ({ genre, query }) => {
	const params = appendUrlParams(query);
	return http.get(
		`${ENDPOINTS.MOVIE_LIST_BY_GENRE}/${genre}${params}`
	);
};

/**
 * @function _getPromotedMovie
 * @returns promise
 */
const _getPromotedMovie = () => http.get(`${ENDPOINTS.PROMOTED_MOVIE}`);

/**
 * @function _searchMoviesByTitle
 * @param {Object} { 
 * 		title: string, 
 * 		query: { limit: number, offset: number }
 * } 
 * @returns promise
 */
const _searchMoviesByTitle = ({ title, query }) => {
	const params = appendUrlParams(query);
	return http.get(`${ENDPOINTS.SEARCH_MOVIE}/${title}${params}`)
};

export {
	_getMoviesByType,
	_createWatchParty,
	_getPromotedMovie,
	_getMoviesByGenre,
	_getMovieDetailsById,
	_searchMoviesByTitle
};
