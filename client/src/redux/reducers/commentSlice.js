import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const commentSlice = createSlice({
    name: 'comment',
    initialState: {
        create: {
            isLoading: false,
            isSucces: false,
            isError: false,
        },
        remove: {
            isLoading: false,
            isSucces: false,
            isError: false,
        },
        get: {
            data: [],
            isLoading: false,
            isSucces: false,
            isError: false,
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(removeComment.pending, (state) => {
                state.remove.isLoading = true;
            })
            .addCase(removeComment.fulfilled, (state, action) => {
                state.remove.isSucces = true;
                state.remove.isError = false;
                state.remove.isLoading = false;
            })
            .addCase(removeComment.rejected, (state) => {
                state.remove.isError = true;
                state.remove.isSucces = false;
                state.remove.isLoading = false;
            })
            // CREATE
            .addCase(createComment.pending, (state) => {
                state.create.isLoading = true;
            })
            .addCase(createComment.fulfilled, (state, action) => {
                state.create.isSucces = true;
                state.create.isError = false;
                state.create.isLoading = false;
            })
            .addCase(createComment.rejected, (state) => {
                state.create.isError = true;
                state.create.isSucces = false;
                state.create.isLoading = false;
            })
            // GET
            .addCase(getComments.pending, (state) => {
                state.get.isLoading = true;
            })
            .addCase(getComments.fulfilled, (state, action) => {
                state.get.data = action.payload.comments;
                state.get.isSucces = true;
                state.get.isError = false;
                state.get.isLoading = false;
            })
            .addCase(getComments.rejected, (state) => {
                state.get.isError = true;
                state.get.isSucces = false;
                state.get.isLoading = false;
            });
    },
});

export const getComments = createAsyncThunk('comment/getComments', async (state, action) => {
    try {
        const res = await axios.get(`http://localhost:5000/api/v1/comment/${state}`);
        return res.data;
    } catch (error) {
        return action.rejectWithValue(error.message);
    }
});

export const createComment = createAsyncThunk('comment/createComment', async (state, action) => {
    try {
        const res = await axios.post('http://localhost:5000/api/v1/comment/create', state);
        return res.data;
    } catch (error) {
        return action.rejectWithValue(error.message);
    }
});

export const removeComment = createAsyncThunk('comment/removeComment', async (state, action) => {
    try {
        const res = await axios.patch(`http://localhost:5000/api/v1/comment/${state.data._id}/delete`, {
            postId: state.postId,
        });
        return res.data;
    } catch (error) {
        return action.rejectWithValue(error.message);
    }
});

export default commentSlice.reducer;
