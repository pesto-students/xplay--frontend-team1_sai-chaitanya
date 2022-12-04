import React, { useContext, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import Context from '../../context';
import { movieThunk } from '../../redux';
import Components from '../../components';

const PlayerScreen = () => {
	const { id } = useParams();
	const history = useHistory();
	const dispatch = useDispatch();
	const isMobile = useContext(Context.DeviceContext);

	const { selectedMovie, moviesByGenre } = useSelector((state) => state?.movies);

	const handleMovieClick = (movieId) => {
		history.push(`/detailScreen/${movieId}`);
	};

	const handleNavigation = (path) => {
		history.push(path);
	};

	useEffect(() => {
		dispatch(movieThunk.getMoviesByGenreThunk({
			genre: selectedMovie.genre
		}));
	}, [selectedMovie.genre]);

	useEffect(() => {
		dispatch(movieThunk.getMovieDetailsByIdThunk(id));
	}, [id]);

	return (
		<>
			<ReactPlayer
				controls
				height={isMobile ? '32vh' : '64vh'}
				// light
				width="100%"
				url={selectedMovie?.url}
			/>
			<Components.MovieDetailsContent
				castDetails={selectedMovie?.metadata?.cast ?? ''}
				directorDetails={selectedMovie?.metadata?.director ?? ''}
				story={selectedMovie?.description ?? ''}
			/>
			<Components.MovieList
				isSlider={true}
				movieList={moviesByGenre}
				onMovieClick={handleMovieClick}
				onLinkClick={() =>
					handleNavigation(`/moreLikeThis/${selectedMovie?.genre ?? 'comedy'}`)
				}
				title="More Like This"
			/>
		</>
	);
};

export default PlayerScreen;
