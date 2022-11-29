const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const ENDPOINTS = {
	MOVIE: '/movie',
	SIGN_UP: '/auth/signup',
	MOVIE_LIST_BY_TYPE: '/movieList',
	PROMOTED_MOVIE: '/promotedMovie',
	SEARCH_MOVIE: '/movieList/search',
	MOVIE_LIST_BY_GENRE: '/movieList/genre'
};

export { API_BASE_URL, ENDPOINTS };
