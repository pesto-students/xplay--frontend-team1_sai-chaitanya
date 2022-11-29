import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { movieThunk } from '../../redux';
import Components from '../../components';

function FeaturedMovies() {
	const history = useHistory();
	const dispatch = useDispatch();

	const { featuredMovies } = useSelector((state) => state?.movies);

	const handleMovieClick = (movieId) => {
		history.push(`/detailScreen/${movieId}`);
	};

	useEffect(() => {
		dispatch(movieThunk.getMoviesByTypeThunk({
			type: 'featured'
		}));
	}, []);

	return (
		<Components.MovieList
			movieList={featuredMovies}
			onMovieClick={handleMovieClick}
			title="Featured Movies"
		/>
	);
}

export default FeaturedMovies;
