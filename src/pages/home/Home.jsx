import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Components from '../../components';
import { movieService } from '../../services';

const Home = () => {
	const history = useHistory();
	const [latestMovieList, setLatestMovieList] = useState([]);
	const [featuredMovieList, setFeaturedMovieList] = useState([]);

	const getFeaturedMovieList = async () => {
		try {
			const response = await movieService._getMovieListByType(
				'featured',
				10
			);
			setFeaturedMovieList(response.data?.data);
		} catch (err) {
			console.error(err);
		}
	};

	const getLatestMovieList = async () => {
		try {
			const response = await movieService._getMovieListByType(
				'latest',
				10
			);
			setLatestMovieList(response.data?.data);
		} catch (err) {
			console.error(err);
		}
	};

	const handleNavigation = (path) => {
		history.push(path);
	};

	useEffect(() => {
		getFeaturedMovieList();
		getLatestMovieList();
	}, []);

	return (
		<>
			<Components.MovieList
				isSlider={true}
				movieList={latestMovieList}
				onLinkClick={() => handleNavigation('/latestOnXplay')}
				title="Latest on XPlay"
			/>
			<Components.MovieList
				isSlider={true}
				movieList={featuredMovieList}
				onLinkClick={() => handleNavigation('/featuredMovies')}
				title="Featured Movies"
			/>
		</>
	);
};

export default Home;
