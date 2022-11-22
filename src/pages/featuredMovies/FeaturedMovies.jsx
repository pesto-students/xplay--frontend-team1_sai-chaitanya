import React, { useEffect, useState } from 'react';

import Components from '../../components';
import { movieService } from '../../services';

function FeaturedMovies() {
	const [movieList, setMovieList] = useState([]);

	const getMovieList = async () => {
		try {
			const response = await movieService._getMovieListByType('featured');
			setMovieList(response.data?.data);
		} catch (err) {
			console.error(err);
		}
	};

	useEffect(() => {
		getMovieList();
	}, []);

	return <Components.MovieList title="Featured Movies" movieList={movieList} />;
}

export default FeaturedMovies;
