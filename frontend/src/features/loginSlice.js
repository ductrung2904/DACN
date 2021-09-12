import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: 'login',
    initialState: {
        isAuth: false,
        userInfo: localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null,
        error: "",
    },
    reducers: {
        loginSuccess: (state, action) => {
            state.isAuth = true;
            state.error = "";
            localStorage.setItem("userInfo", JSON.stringify(state.userInfo = action.payload));
        },
        loginFail: (state, { payload }) => {
            state.error = payload;
        },
        logout: (state, action) => {
            state.userInfo = null;
            localStorage.removeItem("userInfo", JSON.stringify(state.userInfo));
        }
    }
});

const { reducer, actions } = loginSlice;

export const { loginSuccess, loginFail, logout } = actions;

export default reducer;