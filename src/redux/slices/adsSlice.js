/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    allAds: [],
};

const adsSlice = createSlice({
    name: 'ads',
    initialState,
    reducers: {
        setAllAds(state, action) {
            state.allAds = action.payload;
        },
    },
});
export const { setAllAds } = adsSlice.actions;
export const adsReducer = adsSlice.reducer;
