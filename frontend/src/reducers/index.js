import { combineReducers } from "@reduxjs/toolkit";
import shortItem from '../features/shortItemSlice';
import currentBook from '../features/bookDetailSlice';
import cart from '../features/cartSlice';
import login from '../features/loginSlice';
import { persistReducer } from 'redux-persist';
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['login']
}

const rootReducer = combineReducers({
    shortItem,
    currentBook,
    cart,
    login,
});

export default persistReducer(persistConfig, rootReducer);