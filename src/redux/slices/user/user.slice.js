import { createSlice } from '@reduxjs/toolkit';

import { SLICES } from '../../constants';
import { userThunk } from '../../thunks';
import { INITIAL_USER_STATE, setUserResponse } from './helpers';

const { createUserThunk } = userThunk;

const userSlice = createSlice({
    name: SLICES.USER,
    initialState: INITIAL_USER_STATE,
    extraReducers: (builder) => {
        builder
            .addCase(createUserThunk.pending, (state) => {
                state.loading = true;
                state.signUpSuccess = false;
            })
            .addCase(createUserThunk.fulfilled, (state, action) => {
                setUserResponse(state, action);
            })
            .addCase(createUserThunk.rejected, (state, action) => {
                setUserResponse(state, action);
            });
    }
});

export default userSlice.reducer;
