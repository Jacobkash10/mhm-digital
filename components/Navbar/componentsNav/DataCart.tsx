"use client"

import React, { useState } from 'react'
import CartItem from './CartItem'
import { Cart } from '@/types/carts'
import { CartContext } from '@/context/CartContext'

interface Props {
      carts: Cart
}

const DataCart = ({carts}: any) => {

      const [cartItems, setCartItems] = useState<[]>(carts)
      console.log(cartItems)

      const valueCartContext = { 
            cartItems: cartItems,
            setCartItems: setCartItems
           }

  return (
    <CartContext.Provider value={valueCartContext}>
     <CartItem /> 
    </CartContext.Provider>
  )
}

export default DataCart
