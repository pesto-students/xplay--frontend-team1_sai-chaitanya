import { getError } from './errors';

const INITIAL_USER_STATE = {
    error: { hasError: false, message: '' },
    loading: false,
    signUpSuccess: false,
    users: []
};

const setUserResponse = (state, action) => {
    const response = action?.payload;
    if (response?.error) {
        const error = response?.data;
        const errorCode = error?.errorSummary?.includes('login:')
            ? error?.errorCode
            : 'original';
        let errorMessage = getError(errorCode, error?.errorSummary);
        state.error = { hasError: true, message: errorMessage };
    } else {
        state.signUpSuccess = true;
        state.error = INITIAL_USER_STATE.error;
    }
    state.loading = false;
};

const setUsers = (state, action, isSuccess) =>
    state.users = isSuccess ? action.payload?.data
        : INITIAL_USER_STATE.users;

export {
    setUsers,
    setUserResponse,
    INITIAL_USER_STATE
};
