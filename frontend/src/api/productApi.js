import axiosClient from "./axiosClient";
import { loading, loadSuccess, loadFail } from "../features/shortItemSlice";
import { loadingDetail, lstBookDetail, lstSameProduct, lstEvaluateImages, lstEvaluates, lstEvaluateCount, loadDetailFail } from "../features/bookDetailSlice";

const productApi = {
    getAll: () => {
        const url = '/product/book';
        return axiosClient.get(url);
    },

    getById: (id, metatitle) => {
        const url = `/product/book/${id}/${metatitle}`;
        return axiosClient.get(url);
    },
}

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

export const getDetail = (id, metatitle) => async (dispatch) => {
    dispatch(loadingDetail());
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
        dispatch(
            lstEvaluateCount(response.data.data.evaluateCount)
        );
    } catch (error) {
        dispatch(loadDetailFail(error.message));
    }
}

export default productApi;