import { createSlice } from '@reduxjs/toolkit'

const themeSaved = localStorage.getItem('theme')

export const slice = createSlice({
    name:'theme',
    initialState: {
        isDark: themeSaved ? themeSaved == 'dark' ? true : false : false,
    },
    reducers: {
        handleDarkMode(state, { payload }) {
            const saveTheme = payload == true ? 'dark' : 'light'
            localStorage.setItem('theme', saveTheme)

            console.log(`themeSaved: ${themeSaved}`)
            
            return { ...state, isDark: payload }
        }
    }
})

export const { handleDarkMode } = slice.actions

export const selectTheme = (state:any) => state.theme

export default slice.reducer