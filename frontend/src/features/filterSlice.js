import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        productByCategory: [],
        productByCompany: [],
        productByShop: [],
        error: ""
    },
    reducers: {
        filterByCategory: (state, action) => {
            state.productByCategory = action.payload;
        },
        filterByCompany: (state, action) => {
            state.productByCompany = action.payload;
        },
        filterByShop: (state, action) => {
            state.productByShop = action.payload;
        },
        loadError: (state, action) => {
            state.error = action.payload;
        }
    }
});

const { reducer, actions } = filterSlice

export const { filterByCategory, filterByCompany, filterByShop, loadError } = actions

export default reducer