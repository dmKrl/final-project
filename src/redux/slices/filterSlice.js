/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    state: '',
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setFilter: (state, action) => {
            state.state = action.payload;
        },
    },
});

export const { setFilter } = filterSlice.actions;
export const selectFilter = (state) => state.filter.state;

export const filterReducer = filterSlice.reducer;
