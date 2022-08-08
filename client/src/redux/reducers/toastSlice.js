import { createSlice } from '@reduxjs/toolkit';

const toastSlice = createSlice({
    name: 'toast',
    initialState: {
        status: false,
    },
    reducers: {
        showToast: (state) => {
            state.status = true;
        },
        hideToast: (state) => {
            state.status = false;
        },
    },
});

export const { showToast, hideToast } = toastSlice.actions;
export default toastSlice.reducer;
