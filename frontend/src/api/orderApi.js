import { createOrderDetailSuccess, createOrderFail } from "../features/paymentSlice";
import axiosClient from "./axiosClient";

const orderApi = {
    order: () => {
        const url = "/order";
        return axiosClient.post(url);
    },
}

export const getOrderDetail = (order) => async (dispatch) => {
    try {
        const orderDetail = await orderApi.order(order);
        dispatch(createOrderDetailSuccess(orderDetail.data.data.orders));
        localStorage.removeItem('cartItems')
    } catch (error) {
        dispatch(createOrderFail());
    }
}