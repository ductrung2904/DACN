import { createSlice } from "@reduxjs/toolkit";

const paymentSlice = createSlice({
    name: 'payment',
    initialState: {
        shippingInfo: {},
        // isSuccess: false,
        // error: "",
        orderId: ""
    },
    reducers: {
        // createOrderDetailSuccess: (state, { payload }) => {
        //     state.error = "";
        //     state.isSuccess = true;
        //     state.paymentDetail = payload;
        // },
        // createOrderFail: (state, { payload }) => {
        //     state.error = payload;
        // },
        // resetOrder: (state, action) => {
        //     state.paymentInfo = "";
        //     state.paymentDetail = "";
        // },
        setOrderId: (state, action) => {
            state.orderId = action.payload.orderId;
        },
        savePaymentDetail: (state, action) => {
            localStorage.setItem("shippingInfo", JSON.stringify(state.shippingInfo = action.payload));
        }
    }
});

const { reducer, actions } = paymentSlice;

// export const { createOrderDetailSuccess, createOrderFail, resetOrder } = actions;
export const { setOrderId, savePaymentDetail } = actions;

export default reducer;