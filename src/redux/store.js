import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './slices/authSlice';
import {
    adsAPI,
    userAPI,
    getAccessTokenAPI,
} from '../services/getAccessTokenService';
import { adsReducer } from './slices/adsSlice';
import { filterReducer } from './slices/filterSlice';
import { sellerReducer } from './slices/sellerSlice';

const store = configureStore({
    reducer: {
        ads: adsReducer,
        auth: authReducer,
        filter: filterReducer,
        seller: sellerReducer,
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
