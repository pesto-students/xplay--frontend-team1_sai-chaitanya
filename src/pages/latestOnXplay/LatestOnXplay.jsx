import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { movieThunk } from '../../redux';
import Components from '../../components';

function LatestOnXplay() {
	const history = useHistory();
	const dispatch = useDispatch();

	const { latestMovies } = useSelector((state) => state?.movies);

	const handleMovieClick = (movieId) => {
		history.push(`/detailScreen/${movieId}`);
	};

	useEffect(() => {
		dispatch(movieThunk.getMoviesByTypeThunk({
			type: 'latest'
		}));
	}, []);

	return (
		<Components.MovieList
			movieList={latestMovies}
			onMovieClick={handleMovieClick}
			title="Latest Movies on XPlay"
		/>
	);
}

export default LatestOnXplay;
