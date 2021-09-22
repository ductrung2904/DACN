import { createSlice } from "@reduxjs/toolkit";

const paymentSlice = createSlice({
    name: 'payment',
    initialState: {
        paymentDetail: [],
        isSuccess: false,
        error: "",
    },
    reducers: {
        createOrderDetailSuccess: (state, action) => {
            state.error = "";
            state.isSuccess = true;
            state.paymentDetail = action.payload;
        },
        createOrderFail: (state, { payload }) => {
            state.error = payload;
        },
        resetOrder: (state, action) => {
            state.paymentInfo = "";
            state.paymentDetail = "";
        }
    }
});

const { reducer, actions } = paymentSlice;

export const { createOrderDetailSuccess, createOrderFail, resetOrder } = actions;

export default reducer;