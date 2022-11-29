import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { movieThunk } from '../../redux';
import Components from '../../components';

const SearchMovie = () => {
	const history = useHistory();
	const dispatch = useDispatch();

	const { searchResults } = useSelector((state) => state?.movies);

	const handleMovieClick = (movieId) => {
		history.push(`/detailScreen/${movieId}`);
	};

	const handleSearch = (searchString) => {
		dispatch(movieThunk.searchMoviesByTitle({
			title: searchString
		}));
	};

	return (
		<>
			<Components.SearchField
				onClick={handleSearch}
				title="Search for a movie"
			/>
			<Components.MovieList
				movieList={searchResults}
				onMovieClick={handleMovieClick}
				showTitleOnAllScreens
				title="Results"
			/>
		</>
	);
}

export default SearchMovie;
