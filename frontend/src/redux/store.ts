import { configureStore } from "@reduxjs/toolkit"
import userSlice from "./userSlice"
import menuSlice from "./menuSlice"
import themeSlice from "./themeSlice"
import messageSlice from "./messageSlice"
import cartSlice from "./cartSlice"

export default configureStore({
    reducer: {
        user: userSlice,
        menu: menuSlice,
        theme: themeSlice,
        message: messageSlice,
        cart: cartSlice,
    }
})