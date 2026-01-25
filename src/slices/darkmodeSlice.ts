import { createSlice } from "@reduxjs/toolkit";

interface DarkModeState {
    isDarkmode: boolean;
}

const initialState: DarkModeState = {
    isDarkmode: false,
}

export const darkModeSlice = createSlice({
    name: 'darkmode',
    initialState,
    reducers: {
        changeDarkMode: (state) => {
            state.isDarkmode = !state.isDarkmode;
        }
    }
})
export default darkModeSlice.reducer;
export const { changeDarkMode } = darkModeSlice.actions;