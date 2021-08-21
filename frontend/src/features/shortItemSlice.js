import { createSlice } from "@reduxjs/toolkit";
import productApi from "../api/productApi";

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

export const getBooks = () => async (dispatch) => {
    dispatch(loading());
    try {
        const response = await productApi.getAll()
        response.data.data.book.length &&
            dispatch(loadSuccess(response.data.data.book));
    } catch (error) {
        dispatch(loadFail(error.message))
    }
}