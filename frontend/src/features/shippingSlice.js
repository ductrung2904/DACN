import { createSlice } from "@reduxjs/toolkit";

const shippingSlice = createSlice({
    name: 'shipping',
    initialState: {
        shippingInfo: localStorage.getItem("shippingInfo") ? JSON.parse(localStorage.getItem("shippingInfo")) : {},
        error: "",
    },
    reducers: {
        saveShippingAddress: (state, action) => {
            state.error = "";
            localStorage.setItem("shippingInfo", JSON.stringify(state.shippingInfo = action.payload));
        },
        saveFail: (state, { payload }) => {
            state.error = payload;
        }
    }
});

const { reducer, actions } = shippingSlice;

export const { saveShippingAddress, saveFail } = actions;

export default reducer;