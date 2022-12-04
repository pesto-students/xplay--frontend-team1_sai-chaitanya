import { createSlice } from '@reduxjs/toolkit';

import { SLICES } from '../../constants';
import { userThunk } from '../../thunks';
import { resetState } from '../../actions';
import { INITIAL_USER_STATE, setUserResponse, setUsers } from './helpers';

const { createUserThunk, getUsersThunk } = userThunk;

const userSlice = createSlice({
    name: SLICES.USER,
    initialState: INITIAL_USER_STATE,
    extraReducers: (builder) => {
        builder
			.addCase(resetState, () => INITIAL_USER_STATE)
            .addCase(createUserThunk.pending, (state) => {
                state.loading = true;
                state.signUpSuccess = false;
            })
            .addCase(createUserThunk.fulfilled, (state, action) => {
                setUserResponse(state, action);
            })
            .addCase(createUserThunk.rejected, (state, action) => {
                setUserResponse(state, action);
            })
            .addCase(getUsersThunk.fulfilled, (state, action) => {
                setUsers(state, action, true);
            })
            .addCase(getUsersThunk.rejected, (state, action) => {
                setUsers(state, action, false);
            });
    }
});

export default userSlice.reducer;
