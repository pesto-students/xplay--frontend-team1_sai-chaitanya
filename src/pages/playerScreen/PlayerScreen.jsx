import React, { useContext, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import hooks from '../../hooks';
import Context from '../../context';
import { movieThunk } from '../../redux';
import Components from '../../components';

const PlayerScreen = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const { id, partyId } = useParams();
	const notificationKey = 'watchPartyPlayer';
	const { notify } = hooks.useNotifications();
	const socket = useContext(Context.SocketContext);
	const isMobile = useContext(Context.DeviceContext);

	const {
		moviesByGenre,
		selectedMovie
	} = useSelector((state) => state?.movies);

	const handleOnMovieEnd = () => {
		socket.emit('endWatchParty', partyId);
	};

	const handleOnMoviePlay = () => {
		socket.emit('resumeWatchParty', partyId);
	};

	const handleOnNavigate = (path) => {
		history.push(path);
	};

	const handleOnMovieStart = () => {
		socket.emit('startWatchParty', partyId);
	};

	const handleOnWatchPartyEnded = () => {
		history.push('/home');
	};

	const handleOnWatchPartyInvalid = () => {
		notify(
			'This watch party is invalid/ already ended, please create a new one',
			notificationKey, 'warning'
		);
		history.goBack();
	};

	const handleOnWatchPartyResumed = () => { };

	if (partyId) {
		hooks.useSocketSubscribe('watchPartyEnded', handleOnWatchPartyEnded);
		hooks.useSocketSubscribe('watchPartyInvalid', handleOnWatchPartyInvalid);
		hooks.useSocketSubscribe('watchPartyResumed', handleOnWatchPartyResumed);
	}

	useEffect(() => {
		selectedMovie?.genre && dispatch(movieThunk.getMoviesByGenreThunk({
			genre: selectedMovie?.genre
		}));
	}, [selectedMovie?.genre]);

	useEffect(() => {
		dispatch(movieThunk.getMovieDetailsByIdThunk(id));
	}, [id]);

	return (
		<>
			<ReactPlayer
				controls
				height={isMobile ? '32vh' : '64vh'}
				// light
				onPlay={() => partyId ? handleOnMoviePlay() : {}}
				onStart={() => partyId ? handleOnMovieStart() : {}}
				onEnded={() => partyId ? handleOnMovieEnd() : {}}
				width="100%"
				url={selectedMovie?.url}
			/>
			<Components.MovieDetailsContent
				castDetails={selectedMovie?.metadata?.cast ?? ''}
				directorDetails={selectedMovie?.metadata?.director ?? ''}
				story={selectedMovie?.description ?? ''}
			/>
			<Components.MovieList
				isSlider={true}
				movieList={moviesByGenre}
				onMovieClick={(movieId) =>
					handleOnNavigate(`/detailScreen/${movieId}`)
				}
				onLinkClick={() =>
					handleOnNavigate(`/moreLikeThis/${selectedMovie?.genre ?? 'comedy'}`)
				}
				title="More Like This"
			/>
		</>
	);
};

export default PlayerScreen;
