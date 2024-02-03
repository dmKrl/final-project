/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    sellerInfo: {},
};

const sellerSlice = createSlice({
    name: 'seller',
    initialState,
    reducers: {
        setSellerInfo(state, action) {
            state.sellerInfo = action.payload;
        },
    },
});
export const { setSellerInfo } = sellerSlice.actions;
export const selectSellerInfo = (state) => state.seller.sellerInfo;
export const sellerReducer = sellerSlice.reducer;
