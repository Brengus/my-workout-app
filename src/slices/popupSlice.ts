import { createSlice } from "@reduxjs/toolkit";

interface PopupState {
    isOpen: boolean;
}

const initialState: PopupState = {
    isOpen: false,
}

export const popSlice = createSlice({
    name: 'popup',
    initialState,
    reducers: {
        changeStatus: (state) => {
            state.isOpen = !state.isOpen;
        }
    }
})
export default popSlice.reducer;
export const { changeStatus } = popSlice.actions;
