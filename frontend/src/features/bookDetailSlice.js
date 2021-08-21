import { createSlice } from "@reduxjs/toolkit";
import productApi from "../api/productApi";

const bookDetailSlice = createSlice({
    name: 'currentBook',
    initialState: {
        selectBook: {},
        sameProduct: [],
        evaluates: [],
        evaluateImages: [],
        isLoading: false,
        error: ""
    },
    reducers: {
        loading: (state) => {
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
        loadFail: (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
        },
    },
});

const { reducer, actions } = bookDetailSlice

export const { loading, lstBookDetail, lstSameProduct, lstEvaluates, lstEvaluateImages, loadFail } = actions

export default reducer

export const getDetail = (id, metatitle) => async (dispatch) => {
    dispatch(loading());
    try {
        const response = await productApi.getById(id, metatitle)
        dispatch(
            lstBookDetail(response.data.data.books)
        );
        dispatch(
            lstSameProduct(response.data.data.same_products)
        );
        dispatch(
            lstEvaluateImages(response.data.data.evaluateImages)
        );
        dispatch(
            lstEvaluates(response.data.data.evaluates)
        );
    } catch (error) {
        dispatch(loadFail(error.message));
    }
}