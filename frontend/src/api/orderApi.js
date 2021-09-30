import { createOrderDetailSuccess, createOrderFail } from "../features/paymentSlice";
import axiosClient from "./axiosClient";

const orderApi = {
    order: () => {
        const url = "/order";
        return axiosClient.post(url);
    },
}

export const getOrderDetail = (username, phone, address, email, require, book_id, quantity, price) => async (dispatch) => {
    try {
        const orderDetail = await orderApi.order(username, phone, address, email, require, book_id, quantity, price);
        dispatch(createOrderDetailSuccess(orderDetail.data.data.orders));
        localStorage.removeItem('cartItems')
    } catch (error) {
        dispatch(createOrderFail());
    }
}