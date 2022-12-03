import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory/* , useParams */ } from 'react-router-dom';

import Components from '../../components';
import { movieThunk } from '../../redux';

const WatchParty = () => {
	// const { id } = useParams();
	const history = useHistory();
	const dispatch = useDispatch();

	const goBack = () => {
		history.goBack();
	};

	const handleMovieClick = () => {
		history.push(`/playerScreen`);
	};

	const handleOnCreateWatchParty = () => {
		const tempData = {
			attendees: ["suresh@xplay.com", "harish@xplay.com"],
			host: "tusharwalzade216@gmail.com",
			movieId: "63825dd8aced639172b2b831"
		};
		dispatch(movieThunk.createWatchPartyThunk(tempData));
	};

	return (
		<>
			<Components.WatchPartyContent
				movieName='Fantastic Beast: The Secrets Of Dumbledore'
				OnCreateWatchParty={handleOnCreateWatchParty}
				actions={{
					onPlayClick: handleMovieClick,
					onPlayLaterClick: goBack
				}}
			/>
		</>
	);
};

export default WatchParty;
