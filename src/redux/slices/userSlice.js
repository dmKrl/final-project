/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userInfo: {},
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserInfo(state, action) {
            state.userInfo = action.payload;
        },
    },
});
export const { setUserInfo } = userSlice.actions;
export const selectUserInfo = (state) => state.user.userInfo;
export const userReducer = userSlice.reducer;
