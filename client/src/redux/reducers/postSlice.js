import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const postSlice = createSlice({
    name: 'post',
    initialState: {
        posts: {
            isLoading: false,
            data: [],
            isSucces: false,
            isError: false,
        },
        create: {
            isLoading: false,
            data: [],
            isSucces: false,
            isError: false,
        },
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // GET POSTS
            .addCase(getPosts.pending, (state) => {
                state.posts.isLoading = true;
            })
            .addCase(getPosts.fulfilled, (state, action) => {
                state.posts.isSucces = true;
                state.posts.isError = false;
                state.posts.data = action.payload;
                state.posts.isLoading = false;
            })
            .addCase(getPosts.rejected, (state) => {
                state.posts.isError = true;
                state.posts.isSucces = false;
                state.posts.isLoading = false;
            })
            // CREATE POST
            .addCase(createPost.pending, (state) => {
                state.create.isLoading = true;
            })
            .addCase(createPost.fulfilled, (state, action) => {
                state.create.isSucces = true;
                state.create.isError = false;
                state.create.data = action.payload.newPost;
                state.create.isLoading = false;
            })
            .addCase(createPost.rejected, (state) => {
                state.create.isError = true;
                state.create.isSucces = false;
                state.create.isLoading = false;
            });
    },
});

export const getPosts = createAsyncThunk('post/getPosts', async (state, action) => {
    try {
        const res = await axios.post('http://localhost:5000/api/v1/post', state);
        return res.data;
    } catch (error) {
        return action.rejectWithValue(error.message);
    }
});

export const createPost = createAsyncThunk('post/createPost', async (state, action) => {
    try {
        const res = await axios.post('http://localhost:5000/api/v1/post/create', state);
        return res.data;
    } catch (error) {
        return action.rejectWithValue(error.message);
    }
});

export const {} = postSlice.actions;
export default postSlice.reducer;
