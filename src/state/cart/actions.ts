import { createAction } from '@reduxjs/toolkit'
import { CartItem } from './../types'

export const addToCart = createAction<CartItem>('cart/addToCart')