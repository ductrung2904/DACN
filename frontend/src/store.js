import { configureStore } from '@reduxjs/toolkit';
import persistStore from 'redux-persist/es/persistStore';
import persistReducer from './reducers';
// import rootReducer from './reducers';

const store = configureStore({
    reducer: persistReducer
});

export const persistor = persistStore(store);

export default store;