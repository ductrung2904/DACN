import { combineReducers } from "@reduxjs/toolkit";
import shortItem from '../features/shortItemSlice';
import currentBook from '../features/bookDetailSlice';
import cart from '../features/cartSlice';
import login from '../features/loginSlice';
import shipping from '../features/shippingSlice';
import payment from '../features/paymentSlice';
import filter from '../features/filterSlice';
import { persistReducer } from 'redux-persist';
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['login', 'cart', 'shipping']
}

const rootReducer = combineReducers({
    shortItem,
    currentBook,
    cart,
    login,
    shipping,
    payment,
    filter
});

export default persistReducer(persistConfig, rootReducer);