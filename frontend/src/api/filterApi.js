import { filterByCategory, filterByCompany, filterByShop, loadError } from "../features/filterSlice";
import axiosClient from "./axiosClient";

const filterApi = {
    getAllCategory: () => {
        const url = '/category';
        return axiosClient.get(url);
    },

    getProductByCategory: (id) => {
        const url = `/category/${id}`;
        return axiosClient.get(url);
    },

    getAllCompany: () => {
        const url = '/company';
        return axiosClient.get(url);
    },

    getProductByCompany: (id) => {
        const url = `/company/${id}`;
        return axiosClient.get(url);
    },

    getAllShop: () => {
        const url = '/shop';
        return axiosClient.get(url);
    },

    getProductByShop: (id) => {
        const url = `/shop/${id}`;
        return axiosClient.get(url);
    },
}

export const lstProductByCategory = (id) => async (dispatch) => {
    try {
        const response = await filterApi.getProductByCategory(id)
        dispatch(
            filterByCategory(response.data.data.category)
        );
    } catch (error) {
        dispatch(loadError(error.message));
    }
}

export const lstProductByCompany = (id) => async (dispatch) => {
    try {
        const response = await filterApi.getProductByCompany(id)
        dispatch(
            filterByCompany(response.data.data.company)
        );
    } catch (error) {
        dispatch(loadError(error.message));
    }
}

export const lstProductByShop = (id) => async (dispatch) => {
    try {
        const response = await filterApi.getProductByShop(id)
        dispatch(
            filterByShop(response.data.data.shop)
        );
    } catch (error) {
        dispatch(loadError(error.message));
    }
}

export default filterApi