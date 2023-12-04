import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
    name:'user',
    initialState: {
        isLogged: false,
        first_name: '',
        last_name: '',
        img: '',
    },
    reducers: {
        changeUser(state, {payload}) {
            return { 
                ...state,
                isLogged: payload.isLogged,
                first_name: payload.first_name,
                last_name: payload.last_name,
                img: payload.img
            }
        },
        logout(state) {
            return {
                ...state,
                isLogged: false,
                first_name: '',
                last_name: '',
                img: '',
            }
        }
    }
})

export const { changeUser, logout } = slice.actions

export const selectUser = (state:any) => state.user

export default slice.reducer