import { configureStore } from "@reduxjs/toolkit"

import userSlice from "./userSlice"
import menuSlice from "./menuSlice"
import themeSlice from "./themeSlice"
import messageSlice from "./messageSlice"
import cartSlice from "./cartSlice"
import modalSlice from "./modalSlice"

export default configureStore({
    reducer: {
        user: userSlice,
        menu: menuSlice,
        theme: themeSlice,
        message: messageSlice,
        cart: cartSlice,
        modal: modalSlice
    }
})