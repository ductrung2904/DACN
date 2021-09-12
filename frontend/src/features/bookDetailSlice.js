import { createSlice } from "@reduxjs/toolkit";

const bookDetailSlice = createSlice({
    name: 'currentBook',
    initialState: {
        selectBook: {},
        sameProduct: [],
        evaluates: [],
        evaluateImages: [],
        evaluateCount: [],
        isLoading: false,
        error: ""
    },
    reducers: {
        loadingDetail: (state) => {
            state.isLoading = true;
        },
        lstBookDetail: (state, { payload }) => {
            state.isLoading = false;
            state.selectBook = payload;
        },
        lstSameProduct: (state, action) => {
            state.isLoading = false;
            state.sameProduct = action.payload;
        },
        lstEvaluates: (state, action) => {
            state.isLoading = false;
            state.evaluates = action.payload;
        },
        lstEvaluateImages: (state, action) => {
            state.isLoading = false;
            state.evaluateImages = action.payload;
        },
        lstEvaluateCount: (state, action) => {
            state.isLoading = false;
            state.evaluateCount = action.payload;
        },
        loadDetailFail: (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
        },
    },
});

const { reducer, actions } = bookDetailSlice

export const { loadingDetail, lstBookDetail, lstSameProduct, lstEvaluates, lstEvaluateImages, lstEvaluateCount, loadDetailFail } = actions

export default reducer