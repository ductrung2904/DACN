import { combineReducers } from "@reduxjs/toolkit";
import shortItem from './features/shortItemSlice';
import bookDetail from './features/bookDetailSlice';

export default combineReducers({
    shortItem,
    bookDetail
});