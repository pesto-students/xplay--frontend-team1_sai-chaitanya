import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { movieThunk } from '../../redux';
import Components from '../../components';

const Home = () => {
	const history = useHistory();
	const dispatch = useDispatch();

	const {
		featuredMovies,
		latestMovies,
		promotedMovie
	} = useSelector((state) => state?.movies);

	const handleMovieClick = (movieId) => {
		history.push(`/detailScreen/${movieId}`);
	};

	const handleNavigation = (path) => {
		history.push(path);
	};

	useEffect(() => {
		dispatch(movieThunk.getPromotedMovieThunk());
		dispatch(movieThunk.getMoviesByTypeThunk({
			type: 'featured',
			query: { limit: 10 }
		}));
		dispatch(movieThunk.getMoviesByTypeThunk({
			type: 'latest',
			query: { limit: 10 }
		}));
	}, []);

	return (
		<>
			<Components.MovieCover
				actions={{
					onPlayClick: () =>
						handleNavigation(`/playerScreen/${promotedMovie?._id}`),
					onWatchWithFriendsClick: () =>
						handleNavigation(`/watchParty/${promotedMovie?._id}`),
					onAddToWatchlistClick: () => { },
				}}
				isPromotional={true}
				movieDetails={promotedMovie ?? {}}
			/>
			<Components.MovieList
				isSlider={true}
				movieList={latestMovies}
				onLinkClick={() => handleNavigation('/latestOnXplay')}
				onMovieClick={handleMovieClick}
				title="Latest on XPlay"
			/>
			<Components.MovieList
				isSlider={true}
				movieList={featuredMovies}
				onLinkClick={() => handleNavigation('/featuredMovies')}
				onMovieClick={handleMovieClick}
				title="Featured Movies"
			/>
		</>
	);
};

export default Home;
