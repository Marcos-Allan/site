import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
    name:'menu',
    initialState: {
        isOpen: false,
    },
    reducers: {
        handleMenu(state, { payload }) {
            return { ...state, isOpen: payload }
        }
    }
})

export const { handleMenu } = slice.actions

export const selectMenu = (state:any) => state.menu

export default slice.reducer