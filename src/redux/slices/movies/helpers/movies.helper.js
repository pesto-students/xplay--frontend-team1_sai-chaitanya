const INITIAL_MOVIES_STATE = {
    loading: false,
    latestMovies: [],
    promotedMovie: {},
    selectedMovie: {},
    moviesByGenre: [],
    searchResults: [],
    featuredMovies: [],
    watchPartyResponse: {},
    fetchWatchPartyResponse: {}
};

const setFeaturedMovies = (state, action, isSuccess) => {
    state.featuredMovies = isSuccess ? action.payload?.data
        : INITIAL_MOVIES_STATE.featuredMovies;
};

const setLatestMovies = (state, action, isSuccess) => {
    state.latestMovies = isSuccess ? action.payload?.data
        : INITIAL_MOVIES_STATE.latestMovies;
};

const setMoviesByType = (state, action, isSuccess) => {
    let functionToCall = null;
    switch (action.meta.arg?.type) {
        case 'featured':
            functionToCall = setFeaturedMovies;
            break;
        case 'latest':
        default:
            functionToCall = setLatestMovies;
            break;
    }
    functionToCall(state, action, isSuccess);
};

const setPromotedMovie = (state, action, isSuccess) => {
    state.promotedMovie = isSuccess ? action.payload?.data
        : INITIAL_MOVIES_STATE.promotedMovie;
};

const setMoviesByGenre = (state, action, isSuccess) => {
    state.moviesByGenre = isSuccess ? action.payload?.data
        : INITIAL_MOVIES_STATE.moviesByGenre;
};

const setSearchResults = (state, action, isSuccess) => {
    state.searchResults = isSuccess ? action.payload?.data
        : INITIAL_MOVIES_STATE.searchResults;
};

const setSelectedMovie = (state, action, isSuccess) => {
    state.selectedMovie = isSuccess ? action.payload?.data
        : INITIAL_MOVIES_STATE.selectedMovie;
};

const setWatchPartyResponse = (state, action, isSuccess) => {
    state.loading = false;
    state.watchPartyResponse = isSuccess ? action.payload?.data
        : INITIAL_MOVIES_STATE.watchPartyResponse;
};

const setFetchWatchPartyResponse = (state, action, isSuccess) => {
    state.loading = false;
    state.fetchWatchPartyResponse = isSuccess ? action.payload?.data
        : INITIAL_MOVIES_STATE.fetchWatchPartyResponse;
};

export {
    setMoviesByType,
    setMoviesByGenre,
    setPromotedMovie,
    setSearchResults,
    setSelectedMovie,
    INITIAL_MOVIES_STATE,
    setWatchPartyResponse,
    setFetchWatchPartyResponse
};
