import React, { useEffect, useState } from 'react';

import Components from '../../components';
import { movieService } from '../../services';

function WatchList() {
	const [movieList, setMovieList] = useState([]);

	const getMovieList = async () => {
		try {
			const response = await movieService._getMovieListByType('watchlist');
			setMovieList(response.data?.data);
		} catch (err) {
			console.error(err);
		}
	};

	useEffect(() => {
		getMovieList();
	}, []);

	return <Components.MovieList title="Watch List" movieList={movieList} />;
}

export default WatchList;
