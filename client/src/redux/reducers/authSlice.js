import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        auth: {
            token: null,
            user: null,
        },
        register: {
            isLoading: false,
            isSucces: false,
            isError: false,
        },
        login: {
            isLoading: false,
            isSucces: false,
            isError: false,
        },
        logout: {
            isLoading: false,
            isSucces: false,
            isError: false,
        },
        update: {
            isLoading: false,
            isSucces: false,
            isError: false,
        },
        refreshToken: {
            isLoading: false,
            isSucces: false,
            isError: false,
        },
        message: {
            status: false,
        },
    },
    reducers: {
        reset: (state) => {
            state.login.isLoading = false;
            state.login.currentUser = null;
            state.login.isSucces = false;
            state.login.isError = false;
        },
        hideMessage: (state) => {
            state.message.status = false;
        },
    },
    extraReducers: (builder) => {
        builder
            // REGISTER
            .addCase(registerUser.pending, (state) => {
                state.register.isLoading = true;
            })
            .addCase(registerUser.fulfilled, (state) => {
                state.register.isSuccess = true;
                state.register.isError = false;
                state.register.isLoading = false;
                state.message.status = true;
            })
            .addCase(registerUser.rejected, (state) => {
                state.register.isError = true;
                state.register.isSuccess = false;
                state.register.isLoading = false;
                state.message.status = true;
            })

            // LOGIN
            .addCase(loginUser.pending, (state) => {
                state.login.isLoading = true;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                localStorage.setItem('firstLogin', true);
                state.auth.token = action.payload.access_token;
                state.auth.user = action.payload.user;
                state.login.isSucces = true;
                state.login.isLoading = false;
            })
            .addCase(loginUser.rejected, (state) => {
                state.login.isLoading = false;
                state.login.isError = true;
            })

            // LOGOUT
            .addCase(logoutUser.pending, (state) => {
                state.logout.isLoading = true;
            })
            .addCase(logoutUser.fulfilled, (state, action) => {
                localStorage.removeItem('firstLogin');
                state.login.currentUser = null;
                state.auth.token = null;
                state.auth.user = null;
                state.logout.isLoading = false;
                state.logout.isSucces = true;
            })
            .addCase(logoutUser.rejected, (state) => {
                state.logout.isLoading = false;
                state.logout.isError = true;
            })

            // REFRESH TOKEN
            .addCase(refreshToken.pending, (state) => {
                state.refreshToken.isLoading = true;
            })
            .addCase(refreshToken.fulfilled, (state, action) => {
                state.auth.token = action.payload.access_token;
                state.auth.user = action.payload.user;
                state.refreshToken.isLoading = false;
                state.refreshToken.isSucces = true;
            })
            .addCase(refreshToken.rejected, (state) => {
                state.refreshToken.isLoading = false;
                state.refreshToken.isError = true;
            })
            // UPDATE USER
            .addCase(updateUser.pending, (state) => {
                state.update.isLoading = true;
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                console.log(action.payload);
                state.update.isSucces = true;
                state.update.isLoading = false;
                state.update.isError = false;
                state.auth.user = action.payload.newUser;
            })
            .addCase(updateUser.rejected, (state) => {
                state.update.isError = true;
                state.update.isLoading = false;
            });
    },
});

export const registerUser = createAsyncThunk('auth/registerUser', async (state, action) => {
    try {
        const res = await axios.post('http://localhost:5000/api/v1/auth/register', state);
        return res.data;
    } catch (error) {
        return action.rejectWithValue(error.message);
    }
});

export const loginUser = createAsyncThunk('auth/loginUser', async (state, action) => {
    try {
        const res = await axios.post('http://localhost:5000/api/v1/auth/login', state);
        return res.data;
    } catch (error) {
        return action.rejectWithValue(error.message);
    }
});

export const logoutUser = createAsyncThunk('auth/logoutUser', async (action) => {
    try {
        await axios.post('http://localhost:5000/api/v1/auth/logout');
    } catch (error) {
        return action.rejectWithValue(error.message);
    }
});

export const refreshToken = createAsyncThunk('auth/refreshToken', async (state, action) => {
    try {
        const res = await axios.post('http://localhost:5000/api/v1/auth/refresh_token', state);
        console.log(res);
        return res.data;
    } catch (error) {
        return action.rejectWithValue(error.message);
    }
});

export const updateUser = createAsyncThunk('auth/updateUser', async (state, action) => {
    try {
        const res = await axios.patch(`http://localhost:5000/api/v1/users/edit`, state);
        console.log(state);
        return res.data;
    } catch (error) {
        return action.rejectWithValue(error.message);
    }
});

export const { reset, hideMessage } = authSlice.actions;
export default authSlice.reducer;
