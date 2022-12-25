import { createAsyncThunk } from '@reduxjs/toolkit';

import { movieService } from '../../services';

const createWatchPartyThunk = createAsyncThunk(
    'movies/createWatchParty',
    async (args) => await movieService._createWatchParty(args)
        .then((response) => response?.data)
        .catch((error) => error?.response?.data)
);

const getMoviesByTypeThunk = createAsyncThunk(
    'movies/getMoviesByType',
    async (args) => await movieService._getMoviesByType(args)
        .then((response) => response?.data)
        .catch((error) => error?.response?.data)
);

const getMoviesByGenreThunk = createAsyncThunk(
    'movies/getMoviesByGenre',
    async (args) => await movieService._getMoviesByGenre(args)
        .then((response) => response?.data)
        .catch((error) => error?.response?.data)
);

const getPromotedMovieThunk = createAsyncThunk(
    'movie/getPromotedMovie',
    async () => await movieService._getPromotedMovie()
        .then((response) => response?.data)
        .catch((error) => error?.response?.data)
);

const getMovieDetailsByIdThunk = createAsyncThunk(
    'movies/getMovieDetailsById',
    async (id) => await movieService._getMovieDetailsById(id)
        .then((response) => response?.data)
        .catch((error) => error?.response?.data)
);

const getPartyByOtpThunk = createAsyncThunk(
    'movies/getPartyByOtp',
    async (otp) => await movieService._getPartyByOtp(otp)
        .then((response) => response?.data)
        .catch((error) => error?.response?.data)
);

const searchMoviesByTitle = createAsyncThunk(
    'movies/searchMoviesByTitle',
    async (args) => await movieService._searchMoviesByTitle(args)
        .then((response) => response?.data)
        .catch((error) => error?.response?.data)
);

export {
    getPartyByOtpThunk,
    searchMoviesByTitle,
    getMoviesByTypeThunk,
    createWatchPartyThunk,
    getPromotedMovieThunk,
    getMoviesByGenreThunk,
    getMovieDetailsByIdThunk,
};
