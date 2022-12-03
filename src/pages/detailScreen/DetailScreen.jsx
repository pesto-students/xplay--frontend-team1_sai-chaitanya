import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import { movieThunk } from '../../redux';
import Components from '../../components';

const DetailScreen = () => {
	const { id } = useParams();
	const history = useHistory();
	const dispatch = useDispatch();

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
			<Components.MovieCover
				movieDetails={selectedMovie ?? {}}
				actions={{
					onPlayClick: () => handleNavigation(`/playerScreen`),
					onWatchWithFriendsClick: () =>
						handleNavigation(`/watchParty/${selectedMovie?._id}`),
					onAddToWatchlistClick: () => { },
				}}
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

export default DetailScreen;
