import { createOrderDetailSuccess, createOrderFail } from "../features/paymentSlice";
import axiosClient from "./axiosClient";

const orderApi = {
    order: () => {
        const url = "/order";
        return axiosClient.post(url);
    },
}

export const getOrderDetail = (frmData) => async (dispatch) => {
    try {
        const orderDetail = await orderApi.order(frmData);
        if (orderDetail.data.status === "success") {
            dispatch(createOrderDetailSuccess(orderDetail.data));
            localStorage.removeItem('cartItems')
        }
    } catch (error) {
        dispatch(createOrderFail());
    }
}