import { createSlice } from '@reduxjs/toolkit';

const socketSlice = createSlice({
    name: 'socket',
    initialState: [],
    reducers: {
        getSocket: (state, action) => {
            state = action.payload;
        },
    },
});

export const { getSocket } = socketSlice.actions;
export default socketSlice.reducer;
