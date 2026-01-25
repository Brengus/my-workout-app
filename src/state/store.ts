import { configureStore } from "@reduxjs/toolkit";
import popupReducer from "../slices/popupSlice"
import darkmodeReducer from "../slices/darkmodeSlice"

export const store = configureStore({
    reducer: {
        popup: popupReducer,
        darkmode: darkmodeReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;