import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import hooks from '../../hooks';
import Components from '../../components';
import { getValueFromStorage } from '../../utils';
import { movieThunk, resetState, userThunk } from '../../redux';

const tokens = getValueFromStorage('okta-token-storage');
const userEmail = tokens?.idToken?.claims?.email;

const WatchParty = () => {
	const { id } = useParams();
	const history = useHistory();
	const dispatch = useDispatch();
	const notificationKey = 'watchParty';
	const { notify } = hooks.useNotifications();

	const {
		loading,
		selectedMovie,
		watchPartyResponse
	} = useSelector((state) => state?.movies);

	const { users } = useSelector((state) => state?.user);

	const goBack = () => {
		history.goBack();
	};

	const handleMovieClick = () => {
		history.push(`/playerScreen/${id}`);
	};

	const handleOnCreateWatchParty = (watchPartyName) => {
		const watchPartyObject = {
			attendees: users?.map((user) => user?._id) ?? [],
			host: users?.find((user) => user?.email === userEmail)?._id,
			movieId: id,
			watchPartyName: watchPartyName ?? 'defaultWatchParty'
		};
		dispatch(movieThunk.createWatchPartyThunk(watchPartyObject));
		notify('Setting up a Watch Party', notificationKey, 'loading');
	};

	useEffect(() => {
		dispatch(userThunk.getUsersThunk());

		return () => {
			dispatch(resetState())
		}
	}, []);

	useEffect(() => {
		dispatch(movieThunk.getMovieDetailsByIdThunk(id));
	}, [id]);

	useEffect(() => {
		if (!loading && watchPartyResponse?.otp) {
			notify(
				'Watch Party created successfully, you may start playing now!',
				notificationKey
			);
		}
	}, [loading, watchPartyResponse?.otp]);

	return (
		<Components.WatchPartyContent
			actions={{
				onCancelClick: goBack,
				onPlayLaterClick: goBack,
				onPlayClick: handleMovieClick
			}}
			loading={loading}
			movie={selectedMovie}
			onCreateWatchParty={handleOnCreateWatchParty}
			otp={watchPartyResponse?.otp ?? null}
		/>
	);
};

export default WatchParty;
