import { createReducer } from '@reduxjs/toolkit'
import { addToCart } from './actions'
import { Cart } from '../types'

export interface CartState extends Cart {}

export const initialState: Cart = {
  items: [],
  user_id: 0,
}

export default createReducer(initialState, (builder) => {
  builder
    .addCase(addToCart, (state, action) => {

    })
})
