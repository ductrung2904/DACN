import { createSlice } from "@reduxjs/toolkit";

const shortItemSlice = createSlice({
    name: 'shortItem',
    initialState: {
        lstShortItem: [],
        isLoading: false,
        error: ""
    },
    reducers: {
        loading: (state) => {
            state.isLoading = true;
        },
        loadSuccess: (state, action) => {
            state.isLoading = false;
            state.lstShortItem = action.payload;
        },
        loadFail: (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
        }
    },
});

const { reducer, actions } = shortItemSlice

export const { loading, loadSuccess, loadFail } = actions

export default reducer