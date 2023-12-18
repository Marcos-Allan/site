import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
    name:'textMessage',
    initialState: {
        text: '',
    },
    reducers: {
        handleText(state, { payload }) {
            return { ...state, text: payload }
        }
    }
})

export const { handleText } = slice.actions

export const selectTextMessage = (state:any) => state.textMessage

export default slice.reducer