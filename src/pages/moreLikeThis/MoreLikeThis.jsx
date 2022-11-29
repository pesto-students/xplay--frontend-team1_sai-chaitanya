import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import { movieThunk } from '../../redux';
import Components from '../../components';

const MoreLikeThis = () => {
	const history = useHistory();
	const { genre } = useParams();
	const dispatch = useDispatch();

	const { moviesByGenre } = useSelector((state) => state?.movies);

	const handleMovieClick = (movieId) => {
		history.push(`/detailScreen/${movieId}`);
	};

	useEffect(() => {
		dispatch(movieThunk.getMoviesByGenreThunk({
			genre: genre
		}));
	}, [genre]);

	return (
		<Components.MovieList
			movieList={moviesByGenre}
			onMovieClick={handleMovieClick}
			title={`${genre} Movies`}
		/>
	);
}

export default MoreLikeThis;
