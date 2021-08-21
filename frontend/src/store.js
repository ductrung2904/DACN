import { configureStore } from '@reduxjs/toolkit';
import shortItem from './features/shortItemSlice';
import currentBook from './features/bookDetailSlice';

const rootReducer = {
    shortItem,
    currentBook
}

const store = configureStore({
    reducer: rootReducer
});

export default store