import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        getAll: {
            data: [],
            isLoading: false,
            isSucces: false,
            isError: false,
        },
        anUser: {
            isLoading: false,
            isSucces: false,
            isError: false,
            users: [],
            posts: [],
        },
        follow: {
            isLoading: false,
            isSucces: false,
            isError: false,
        },
        unfollow: {
            isLoading: false,
            isSucces: false,
            isError: false,
        },
    },
    reducers: {
        editFollower: (state, action) => {
            state.anUser.users = state.anUser.users.map((user) =>
                user._id === action.payload._id ? action.payload : user,
            );
        },
    },
    extraReducers: (builder) => {
        builder
            // GET ALL USER
            .addCase(getAllUser.pending, (state) => {
                state.getAll.isLoading = true;
            })
            .addCase(getAllUser.fulfilled, (state, action) => {
                state.getAll.isLoading = false;
                state.getAll.data = action.payload;
                state.getAll.isSucces = true;
            })
            .addCase(getAllUser.rejected, (state) => {
                state.getAll.isError = true;
                state.getAll.isLoading = false;
            })
            // GET USER PROFILE
            .addCase(getProfileUser.pending, (state) => {
                state.anUser.isLoading = true;
            })
            .addCase(getProfileUser.fulfilled, (state, action) => {
                state.anUser.isLoading = false;
                state.anUser.isSucces = true;
                if (state.anUser.users.every((user) => user.username !== action.payload.user.username)) {
                    state.anUser.users.push(action.payload.user);
                }
                state.anUser.isError = false;
            })
            .addCase(getProfileUser.rejected, (state) => {
                state.anUser.isLoading = false;
                state.anUser.isError = true;
                state.anUser.isSucces = false;
            })
            // FOLLOW
            .addCase(followUser.pending, (state) => {
                state.follow.isLoading = true;
            })
            .addCase(followUser.fulfilled, (state, action) => {
                state.follow.isLoading = false;
                state.follow.isSucces = true;
            })
            .addCase(followUser.rejected, (state) => {
                state.follow.isError = true;
                state.follow.isLoading = false;
            })
            // UNFOLLOW
            .addCase(unfollowUser.pending, (state) => {
                state.follow.isLoading = true;
            })
            .addCase(unfollowUser.fulfilled, (state, action) => {
                state.follow.isLoading = false;
                state.follow.isSucces = true;
            })
            .addCase(unfollowUser.rejected, (state) => {
                state.follow.isError = true;
                state.follow.isLoading = false;
            });
    },
});

export const getAllUser = createAsyncThunk('user/getAllUser', async (state, action) => {
    try {
        const res = await axios.get(`http://localhost:5000/api/v1/users/`);
        return res.data;
    } catch (error) {
        return action.rejectWithValue(error.message);
    }
});

export const getProfileUser = createAsyncThunk('user/getProfileUser', async (state, action) => {
    try {
        const res = await axios.get(`http://localhost:5000/api/v1/users/${state}`);
        return res.data;
    } catch (error) {
        return action.rejectWithValue(error.message);
    }
});

export const followUser = createAsyncThunk('user/followUser', async (state, action) => {
    try {
        const res = await axios.patch(`http://localhost:5000/api/v1/users/${state.user._id}/follow`, {
            user: state.auth.user,
        });
        return res.data;
    } catch (error) {
        return action.rejectWithValue(error.message);
    }
});

export const unfollowUser = createAsyncThunk('user/unfollowUser', async (state, action) => {
    try {
        const res = await axios.patch(`http://localhost:5000/api/v1/users/${state.user._id}/unfollow`, {
            user: state.auth.user,
        });
        return res.data;
    } catch (error) {
        return action.rejectWithValue(error.message);
    }
});

export const { editFollower } = userSlice.actions;

export default userSlice.reducer;
