import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './slices/authSlice';
import {
    adsAPI,
    userAPI,
    getAccessTokenAPI,
} from '../services/getAccessTokenService';

const store = configureStore({
    reducer: {
        auth: authReducer,
        [getAccessTokenAPI.reducerPath]: getAccessTokenAPI.reducer,
        [adsAPI.reducerPath]: adsAPI.reducer,
        [userAPI.reducerPath]: userAPI.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            getAccessTokenAPI.middleware,
            userAPI.middleware,
            adsAPI.middleware,
        ),
});
export default store;
