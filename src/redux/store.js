import { configureStore } from '@reduxjs/toolkit'

import { moviesReducer, userReducer } from './slices';

const store = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer
    },
});

export { store };
