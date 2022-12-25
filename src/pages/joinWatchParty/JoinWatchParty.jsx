import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Components from '../../components';
import { movieThunk, resetState } from '../../redux';

const JoinWatchParty = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const { fetchWatchPartyResponse } = useSelector((state) => state?.movies);

    const handleNavigation = (path) => {
        history.push(path);
    };

    const handleSearch = (otp) => {
        dispatch(movieThunk.getPartyByOtpThunk(otp));
    };

    useEffect(() => {
        return () => {
            dispatch(resetState());
        }
    }, []);

    return (
        <>
            <Components.SearchField
                onClick={handleSearch}
                placeholder="Enter an OTP"
                title="Join a watch party"
            />
            {fetchWatchPartyResponse?.movieDetails ? (
                <Components.PartyCover
                    onPlayClick={() =>
                        handleNavigation(`/playerScreen/${fetchWatchPartyResponse?.movieDetails?._id}`)}
                    partyDetails={fetchWatchPartyResponse ?? {}}
                />) : Object.keys(fetchWatchPartyResponse)?.length
                    && !fetchWatchPartyResponse?.movieDetails ?
                (
                    <Components.NoData message="Watch Party Invalid!" />
                )
                : null
            }
        </>
    );
}

export default JoinWatchParty;
