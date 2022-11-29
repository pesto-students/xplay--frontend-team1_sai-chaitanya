import { createAsyncThunk } from '@reduxjs/toolkit';

import { userService } from '../../services';

const createUserThunk = createAsyncThunk(
    'user/createUser',
    async (user) => await userService._signUp(user)
        .then((response) => response)
        .catch((error) => error?.response?.data)
);

export {
    createUserThunk
};
