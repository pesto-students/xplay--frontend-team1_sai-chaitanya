import { createSlice } from '@reduxjs/toolkit';

import {
	setMoviesByType,
	setMoviesByGenre,
	setPromotedMovie,
	setSearchResults,
	setSelectedMovie,
	INITIAL_MOVIES_STATE,
	setWatchPartyResponse
} from './helpers';
import { SLICES } from '../../constants';
import { movieThunk } from '../../thunks';
import { resetState } from '../../actions';

const {
	searchMoviesByTitle,
	getMoviesByTypeThunk,
	createWatchPartyThunk,
	getPromotedMovieThunk,
	getMoviesByGenreThunk,
	getMovieDetailsByIdThunk
} = movieThunk;

const moviesSlice = createSlice({
	name: SLICES.MOVIE,
	initialState: INITIAL_MOVIES_STATE,
	extraReducers: (builder) => {
		builder
			.addCase(resetState, () => INITIAL_MOVIES_STATE)
			.addCase(searchMoviesByTitle.fulfilled, (state, action) => {
				setSearchResults(state, action, true);
			})
			.addCase(searchMoviesByTitle.rejected, (state, action) => {
				setSearchResults(state, action, false);
			})
			.addCase(getMoviesByTypeThunk.fulfilled, (state, action) => {
				setMoviesByType(state, action, true);
			})
			.addCase(getMoviesByTypeThunk.rejected, (state, action) => {
				setMoviesByType(state, action, false);
			})
			.addCase(getMovieDetailsByIdThunk.fulfilled, (state, action) => {
				setSelectedMovie(state, action, true);
			})
			.addCase(getMovieDetailsByIdThunk.rejected, (state, action) => {
				setSelectedMovie(state, action, false);
			})
			.addCase(getPromotedMovieThunk.fulfilled, (state, action) => {
				setPromotedMovie(state, action, true);
			})
			.addCase(getPromotedMovieThunk.rejected, (state, action) => {
				setPromotedMovie(state, action, false);
			})
			.addCase(getMoviesByGenreThunk.fulfilled, (state, action) => {
				setMoviesByGenre(state, action, true);
			})
			.addCase(getMoviesByGenreThunk.rejected, (state, action) => {
				setMoviesByGenre(state, action, false);
			})
			.addCase(createWatchPartyThunk.pending, (state) => {
				state.loading = true;
			})
			.addCase(createWatchPartyThunk.fulfilled, (state, action) => {
				setWatchPartyResponse(state, action, true);
			})
			.addCase(createWatchPartyThunk.rejected, (state, action) => {
				setWatchPartyResponse(state, action, false);
			});
	}
});

export default moviesSlice.reducer;
