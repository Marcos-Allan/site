import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
    name:'theme',
    initialState: {
        isOpenModal: false,
    },
    reducers: {
        handleModal(state, { payload }) {
            return { ...state, isOpenModal: payload }
        }
    }
})

export const { handleModal } = slice.actions

export const selectModal = (state:any) => state.modal

export default slice.reducer