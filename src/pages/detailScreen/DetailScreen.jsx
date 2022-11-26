import React, { useEffect, useState } from 'react';

import Components from '../../components';
import { movieService } from '../../services';

const DetailScreen = () => {
	const [detailScreenMovieList, setdetailScreenMovieList] = useState([]);

	const getdetailScreenMovieList = async () => {
		try {
			const response = await movieService._getMovieListByType(
				'featured',
				10
			);
			setdetailScreenMovieList(response.data?.data);
		} catch (err) {
			console.error(err);
		}
	};

	useEffect(() => {
		getdetailScreenMovieList();
	}, []);

	return (
		<>
			<Components.MovieDetailsContent
				castDetails="Lorem ipsum(Black Widow), sit amet(Wolverine), Tushar(XMan), Suresh(SpiderMan)"
				directorDetails="Suresh Kumar"
				story="A Mythic and emotionally charged hero journey, Dune tells the story of Paul Atrides, a brilliant and gifted young man born into a great destiny beyond
				his understanding, who must travel to the most dangerous planet in the universe to ensure the future of his family and his people... "></Components.MovieDetailsContent>
			<Components.MovieList
				isSlider={true}
				movieList={detailScreenMovieList}
				title="More Like This"
			/>
		</>
	);
};

export default DetailScreen;
