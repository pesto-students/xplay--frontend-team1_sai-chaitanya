import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

import Components from '../../components';
import { movieService } from '../../services';
import styles from './playerScreen.module.scss';

const PlayerScreen = () => {
	const [playerScreenMovieList, setplayerScreenMovieList] = useState([]);

	const getplayerScreenMovieList = async () => {
		try {
			const response = await movieService._getMoviesByType(
				'featured',
				10
			);
			setplayerScreenMovieList(response.data?.data);
		} catch (err) {
			console.error(err);
		}
	};

	useEffect(() => {
		getplayerScreenMovieList();
	}, []);

	return (
		<>
			<div className={styles.playerWrapper}>
				<ReactPlayer
					url="https://www.youtube.com/watch?v=-X4ikwUwxoE"
					className={styles.reactPlayer}
					controls
					width="100%"
					height="85%"
				/>
			</div>
			<Components.PlayerScreenContent
				castDetails="Lorem ipsum(Black Widow), sit amet(Wolverine), Tushar(XMan), Suresh(SpiderMan)"
				directorDetails="Suresh Kumar"
				story="A Mythic and emotionally charged hero journey, Dune tells the story of Paul Atrides, a brilliant and gifted young man born into a great destiny beyond
				his understanding, who must travel to the most dangerous planet in the universe to ensure the future of his family and his people... "></Components.PlayerScreenContent>
			<Components.MovieList
				isSlider={true}
				movieList={playerScreenMovieList}
				title="More Like This"
			/>
		</>
	);
};

export default PlayerScreen;
