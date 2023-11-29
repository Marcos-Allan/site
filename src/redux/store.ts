import { configureStore } from "@reduxjs/toolkit"
import userSlice from "./userSlice"
import menuSlice from './menuSlice'

export default configureStore({
    reducer: {
        user: userSlice,
        menu: menuSlice
    }
})