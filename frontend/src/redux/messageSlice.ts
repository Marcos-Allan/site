import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
    name:'message',
    initialState: {
        isCanceled: false,
    },
    reducers: {
        handleCanceled(state, { payload }) {
            return { ...state, isCanceled: payload }
        }
    }
})

export const { handleCanceled } = slice.actions

export const selectCanceled = (state:any) => state.message

export default slice.reducer