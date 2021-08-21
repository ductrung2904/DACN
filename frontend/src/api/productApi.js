import axiosClient from "./axiosClient";

const productApi = {
    getAll: () => {
        const url = '/';
        return axiosClient.get(url);
    },

    getById: (id, metatitle) => {
        const url = `/${id}/${metatitle}`;
        return axiosClient.get(url);
    },
}

export default productApi;