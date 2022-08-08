import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const user = JSON.parse(localStorage.getItem('user'));

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        register: {
            isLoading: false,
            isSucces: false,
            isError: false,
        },
        login: {
            isLoading: false,
            currentUser: user ? user : null,
            isSucces: false,
            isError: false,
        },
        logout: {
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
                state.login.currentUser = action.payload.user;
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
                localStorage.removeItem('user');
                state.login.currentUser = null;
                state.logout.isLoading = false;
                state.logout.isSucces = true;
            })
            .addCase(logoutUser.rejected, (state) => {
                state.logout.isLoading = false;
                state.logout.isError = true;
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

        if (res.data) {
            localStorage.setItem('user', JSON.stringify(res.data));
        }

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

export const { reset, hideMessage } = authSlice.actions;
export default authSlice.reducer;
