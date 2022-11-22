import React, { useEffect, useState } from 'react';

import Components from '../../components';
import { movieService } from '../../services';

function LatestOnXplay() {
	const [movieList, setMovieList] = useState([]);

	const getMovieList = async () => {
		try {
			const response = await movieService._getMovieListByType('latest');
			setMovieList(response.data?.data);
		} catch (err) {
			console.error(err);
		}
	};

	useEffect(() => {
		getMovieList();
	}, []);

	return (
		<Components.MovieList
			title="Latest Movies on XPlay"
			movieList={movieList}
		/>
	);
}

export default LatestOnXplay;
