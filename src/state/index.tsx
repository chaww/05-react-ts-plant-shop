import { configureStore } from '@reduxjs/toolkit'
import reducer from './cart/reducer';

const store = configureStore({
  reducer,
})
export default store
