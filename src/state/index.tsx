import { configureStore } from "@reduxjs/toolkit"
import cart from "./cart/reducer"

const store = configureStore({
  reducer: {
    cart,
  },
})
export default store
