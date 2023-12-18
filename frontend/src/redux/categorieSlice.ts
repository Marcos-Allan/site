import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
    name:'categorie',
    initialState: {
        text: 'Tudo',
    },
    reducers: {
        handleCategorie(state, { payload }) {
            return { ...state, text: payload }
        }
    }
})

export const { handleCategorie } = slice.actions

export const selectCategorie = (state:any) => state.categorie

export default slice.reducer