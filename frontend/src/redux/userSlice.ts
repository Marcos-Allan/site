import { createSlice } from '@reduxjs/toolkit'

const userSaved = localStorage.getItem('user')

const userInfo = userSaved ? JSON.parse(userSaved) : {
    isLogged:false,
    first_name: '',
    last_name: '',
    img: ''
}

export const slice = createSlice({
    name:'user',
    initialState: {
        isLogged: userInfo ? userInfo.isLogged : false,
        first_name: userInfo ? userInfo.first_name : '',
        last_name: userInfo ? userInfo.last_name : '',
        img: userInfo ? userInfo.img : '',
    },
    reducers: {
        changeUser(state, {payload}) {
            const saveUser = payload
            ? payload
            : {
                isLogged: false,
                first_name: '',
                last_name: '',
                img: '',
            }
            
            localStorage.setItem('user', JSON.stringify(saveUser))
            
            return { 
                ...state,
                isLogged: payload.isLogged,
                first_name: payload.first_name,
                last_name: payload.last_name,
                img: payload.img
            }
        },
        logout(state) {
            localStorage.removeItem('user')
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