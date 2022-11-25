import React, { useEffect, useState } from 'react';

import Components from '../../components';
import { movieService } from '../../services';


const DetailScreen = () => {
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


	useEffect(() => {
		getFeaturedMovieList();
		
	}, []);

	return (
		<>
            <Components.Story></Components.Story>
			<Components.MovieList
				isSlider={true}
				movieList={featuredMovieList}
				title="More Like This"
			/>
		</>
	);
};

export default DetailScreen;
