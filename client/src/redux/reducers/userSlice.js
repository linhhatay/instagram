import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        anUser: {
            isLoading: false,
            isSucces: false,
            isError: false,
            users: [],
            posts: [],
        },
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProfileUser.pending, (state) => {
            state.anUser.isLoading = true;
        });
        builder.addCase(getProfileUser.fulfilled, (state, action) => {
            state.anUser.isLoading = false;
            state.anUser.isSucces = true;
            state.anUser.users = [...state.anUser.users, action.payload.user[0]];
            state.anUser.isError = false;
        });
        builder.addCase(getProfileUser.rejected, (state) => {
            state.anUser.isLoading = false;
            state.anUser.isError = true;
            state.anUser.isSucces = false;
        });
    },
});

export const getProfileUser = createAsyncThunk('user/getProfileUser', async (state, action) => {
    if (state.users.every((user) => user.username !== state.username)) {
        try {
            const res = await axios.get(`http://localhost:5000/api/v1/users/${state.username}`);
            return res.data;
        } catch (error) {
            return action.rejectWithValue(error.message);
        }
    }
});

export default userSlice.reducer;
