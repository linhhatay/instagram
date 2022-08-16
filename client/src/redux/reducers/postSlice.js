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
        delete: {
            isLoading: false,
            isSucces: false,
            isError: false,
        },
        update: {
            isLoading: false,
            data: [],
            isSucces: false,
            isError: false,
        },
        like: {
            isLoading: false,
            isSucces: false,
            isError: false,
        },
        unlike: {
            isLoading: false,
            isSucces: false,
            isError: false,
        },
        comment: {
            isLoading: false,
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
                state.create.data = action.payload;
                state.create.isLoading = false;
            })
            .addCase(createPost.rejected, (state) => {
                state.create.isError = true;
                state.create.isSucces = false;
                state.create.isLoading = false;
            })
            // DELETE POST
            .addCase(deletePost.pending, (state) => {
                state.delete.isLoading = true;
            })
            .addCase(deletePost.fulfilled, (state, action) => {
                state.delete.isSucces = true;
                state.delete.isError = false;
                state.delete.isLoading = false;
            })
            .addCase(deletePost.rejected, (state) => {
                state.delete.isError = true;
                state.delete.isSucces = false;
                state.delete.isLoading = false;
            })
            // UPDATE POST
            .addCase(updatePost.pending, (state) => {
                state.update.isLoading = true;
            })
            .addCase(updatePost.fulfilled, (state, action) => {
                state.update.isSucces = true;
                state.update.isError = false;
                state.update.isLoading = false;
            })
            .addCase(updatePost.rejected, (state) => {
                state.update.isError = true;
                state.update.isSucces = false;
                state.update.isLoading = false;
            })
            // LIKE POST
            .addCase(likePost.pending, (state) => {
                state.like.isLoading = true;
            })
            .addCase(likePost.fulfilled, (state, action) => {
                state.like.isSucces = true;
                state.like.isError = false;
                state.like.isLoading = false;
            })
            .addCase(likePost.rejected, (state) => {
                state.like.isError = true;
                state.like.isSucces = false;
                state.like.isLoading = false;
            })
            // UNLIKE POST
            .addCase(unlikePost.pending, (state) => {
                state.unlike.isLoading = true;
            })
            .addCase(unlikePost.fulfilled, (state, action) => {
                state.unlike.isSucces = true;
                state.unlike.isError = false;
                state.unlike.isLoading = false;
            })
            .addCase(unlikePost.rejected, (state) => {
                state.unlike.isError = true;
                state.unlike.isSucces = false;
                state.unlike.isLoading = false;
            })
            // CMT POST
            .addCase(commentPost.pending, (state) => {
                state.comment.isLoading = true;
            })
            .addCase(commentPost.fulfilled, (state, action) => {
                state.comment.isSucces = true;
                state.comment.isError = false;
                state.comment.isLoading = false;
            })
            .addCase(commentPost.rejected, (state) => {
                state.comment.isError = true;
                state.comment.isSucces = false;
                state.comment.isLoading = false;
            });
    },
});

export const getPosts = createAsyncThunk('post/getPosts', async (state, action) => {
    try {
        const res = await axios.get('http://localhost:5000/api/v1/post', state);
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

export const deletePost = createAsyncThunk('post/deletePost', async (state, action) => {
    try {
        const res = await axios.delete(`http://localhost:5000/api/v1/post/delete/${state}`);
        return res.data;
    } catch (error) {
        return action.rejectWithValue(error.message);
    }
});

export const updatePost = createAsyncThunk('post/updatePost', async (state, action) => {
    try {
        const res = await axios.patch(`http://localhost:5000/api/v1/post/update/${state.idPost}`, state.data);
        return res.data;
    } catch (error) {
        return action.rejectWithValue(error.message);
    }
});

export const likePost = createAsyncThunk('post/likePost', async (state, action) => {
    try {
        const res = await axios.patch(`http://localhost:5000/api/v1/post/like/${state.idPost}`, { user: state.user });
        return res.data;
    } catch (error) {
        return action.rejectWithValue(error.message);
    }
});

export const unlikePost = createAsyncThunk('post/unlikePost', async (state, action) => {
    try {
        const res = await axios.patch(`http://localhost:5000/api/v1/post/unlike/${state.idPost}`, { user: state.user });
        return res.data;
    } catch (error) {
        return action.rejectWithValue(error.message);
    }
});

export const commentPost = createAsyncThunk('comment/commentPost', async (state, action) => {
    try {
        const res = await axios.post('http://localhost:5000/api/v1/comment/create', state);
        return res.data;
    } catch (error) {
        return action.rejectWithValue(error.message);
    }
});

// export const {} = postSlice.actions;
export default postSlice.reducer;
