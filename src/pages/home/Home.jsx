import React, { useEffect, useState } from 'react';
// import { useOktaAuth } from '@okta/okta-react';

import Components from '../../components';
import { movieService } from '../../services';

const Home = () => {
	// const [user] = useAuth();
	// const { authState, oktaAuth } = useOktaAuth();
	const [latestMovieList, setLatestMovieList] = useState([]);
	const [featuredMovieList, setFeaturedMovieList] = useState([]);

	// if (!authState) return null;

	// const logOutRedirect = async () => await oktaAuth.signOut();

	const getFeaturedMovieList = async () => {
		try {
			const response = await movieService._getMovieListByType('featured', 10);
			setFeaturedMovieList(response.data?.data);
		} catch (err) {
			console.error(err);
		}
	};

	const getLatestMovieList = async () => {
		try {
			const response = await movieService._getMovieListByType('latest', 10);
			setLatestMovieList(response.data?.data);
		} catch (err) {
			console.error(err);
		}
	};

	useEffect(() => {
		getFeaturedMovieList();
		getLatestMovieList();
	}, []);

	return (
		<>
			{/* <h3>Hello {user?.name}</h3>
            <Button
                id="logout-button"
                onClick={logOutRedirect}
                title="Logout"
            >
                Logout
            </Button> */}
			{/* <MovieList isSlider={true} movieList={movieList} title="Watchlist" /> */}
			<Components.MovieList
				isSlider={true}
				movieList={latestMovieList}
				title="Latest on XPlay"
			/>
			<Components.MovieList
				isSlider={true}
				movieList={featuredMovieList}
				title="Featured Movies"
			/>
		</>
	);
};

export default Home;
