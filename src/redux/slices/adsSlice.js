/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    allAds: [],
    chosenAdv: '',
    imagesPreLoad: [],
};

const adsSlice = createSlice({
    name: 'ads',
    initialState,
    reducers: {
        setAllAds(state, action) {
            state.allAds = action.payload;
        },
        setChosenAdv(state, action) {
            state.chosenAdv = action.payload;
        },
        setImagesPreLoad(state, action) {
            state.imagesPreLoad.push(action.payload);
        },
        clearImagesPreLoad(state) {
            state.imagesPreLoad = [];
        },
    },
});
export const { setAllAds, setChosenAdv, setImagesPreLoad, clearImagesPreLoad } =
    adsSlice.actions;
export const selectAllAds = (state) => state.ads.allAds;
export const selectChosenAdv = (state) => state.ads.chosenAdv;
export const selectImagesPreLoad = (state) => state.ads.imagesPreLoad;
export const adsReducer = adsSlice.reducer;
