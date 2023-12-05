import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
    name:'theme',
    initialState: {
        isDark: false,
    },
    reducers: {
        handleDarkMode(state, { payload }) {
            return { ...state, isDark: payload }
        }
    }
})

export const { handleDarkMode } = slice.actions

export const selectTheme = (state:any) => state.theme

export default slice.reducer