import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';

import auth from './auth/authReducers';
import notify from './notify/notifyReducers';
import profile from './profile/profileReducers';
import posts from './post/postReducers';
import socket from './socket/socketReducers';

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
};

const rootReducer = combineReducers({
    auth,
    notify,
    profile,
    posts,
    socket,
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

// export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
