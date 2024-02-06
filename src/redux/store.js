import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './slices/authSlice';
import {
    adsAPI,
    userAPI,
    getAccessTokenAPI,
} from '../services/getAccessTokenService';
import { adsReducer } from './slices/adsSlice';
import { filterReducer } from './slices/filterSlice';
import {
    adsUnRegisteredAPI,
    commentsUnRegisteredAPI,
} from '../services/unRegisteredUserService';

const store = configureStore({
    reducer: {
        ads: adsReducer,
        auth: authReducer,
        filter: filterReducer,
        [getAccessTokenAPI.reducerPath]: getAccessTokenAPI.reducer,
        [adsUnRegisteredAPI.reducerPath]: adsUnRegisteredAPI.reducer,
        [commentsUnRegisteredAPI.reducerPath]: commentsUnRegisteredAPI.reducer,
        [adsAPI.reducerPath]: adsAPI.reducer,
        [userAPI.reducerPath]: userAPI.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            commentsUnRegisteredAPI.middleware,
            adsUnRegisteredAPI.middleware,
            getAccessTokenAPI.middleware,
            userAPI.middleware,
            adsAPI.middleware,
        ),
});
export default store;
