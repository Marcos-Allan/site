import { configureStore } from "@reduxjs/toolkit"
import userSlice from "./userSlice"
import menuSlice from "./menuSlice"
import themeSlice from "./themeSlice"

export default configureStore({
    reducer: {
        user: userSlice,
        menu: menuSlice,
        theme: themeSlice
    }
})