import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authSlice';
import toastReducer from './reducers/toastSlice';
import postReducer from './reducers/postSlice';

export default configureStore({
    reducer: {
        auth: authReducer,
        toast: toastReducer,
        post: postReducer,
    },
});
