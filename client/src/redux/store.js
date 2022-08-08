import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authSlice';
import toastReducer from './reducers/toastSlice';

export default configureStore({
    reducer: {
        auth: authReducer,
        toast: toastReducer,
    },
});
