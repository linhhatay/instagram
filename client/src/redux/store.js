import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from './reducers/authSlice';
import toastReducer from './reducers/toastSlice';
import postReducer from './reducers/postSlice';
import userSlice from './reducers/userSlice';
import commentReducer from './reducers/commentSlice';
import socketReducer from './reducers/socketSlice';

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
};

const rootReducer = combineReducers({
    auth: authReducer,
    toast: toastReducer,
    post: postReducer,
    user: userSlice,
    comment: commentReducer,
    socket: socketReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export let persistor = persistStore(store);

// import { configureStore } from '@reduxjs/toolkit';
// import authReducer from './reducers/authSlice';
// import toastReducer from './reducers/toastSlice';
// import postReducer from './reducers/postSlice';
// import userSlice from './reducers/userSlice';

// import commentReducer from './reducers/commentSlice';

// export default configureStore({
//     reducer: {
//         auth: authReducer,
//         toast: toastReducer,
//         post: postReducer,
//         user: userSlice,
//         comment: commentReducer,
//     },
// });
