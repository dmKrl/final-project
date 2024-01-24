import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './slices/authSlice';
import { adsAPI, getAccessTokenAPI } from '../services/getAccessTokenService';

const store = configureStore({
    reducer: {
        authReducer,
        [getAccessTokenAPI.reducerPath]: getAccessTokenAPI.reducer,
        [adsAPI.reducerPath]: adsAPI.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            getAccessTokenAPI.middleware,
            adsAPI.middleware,
        ),
});
export default store;
