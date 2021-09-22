import axios from "axios";
import { loginFail, loginSuccess, logout } from "../features/loginSlice";
import axiosClient from "./axiosClient";

const userApi = {
    login: () => {
        const url = '/login';
        return axiosClient.get(url);
    },
    user: (username) => {
        const url = `/user/${username}`;
        return axiosClient.get(url);
    }
}

const loginUrl = "http://localhost:5000/login";

const registerUrl = "http://localhost:5000/register";

export const userLogin = (frmData) => {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await axios.post(loginUrl, frmData);
            console.log(res);
            resolve(res.data);

        } catch (error) {
            console.log(error.message);
            reject(error);
        }
    })

}

export const getUserInfo = (username) => async (dispatch) => {
    try {
        const response = await userApi.user(username);
        dispatch(loginSuccess(response.data.data.user));
        localStorage.setItem('userInfo', JSON.stringify(response.data.data.user))
    } catch (error) {
        dispatch(loginFail());
    }
}

export const userLogout = async () => {
    try {
        logout()
    } catch (error) {
        console.log(error.message);
    }
}

export const userRegister = (frmData) => {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await axios.post(registerUrl, frmData);
            resolve(res.data);

            if (res.data.status === "success") {
                resolve(res.data);
            }
        } catch (error) {
            reject(error);
        }
    })
}

export const userRegisterVerify = (frmData) => async () => {
    try {
        const result = await userRegister(frmData);
        console.log(result);
    } catch (error) {
        console.log(error.message);
    }
}

export default userApi;