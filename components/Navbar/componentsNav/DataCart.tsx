"use client"

import React, { useState } from 'react'
import CartItem from './CartItem'
import { Cart } from '@/types/carts'
import { CartItem as CartI, Carts, Package } from '@/types/carts'
import { CartContext } from '@/context/CartContext'
import { getCart } from '@/lib/cartUtils'

interface Props {
      carts: Cart
}

const DataCart = ({carts}: any) => {

      const [cart, setCart] = useState<Carts>(getCart());
      // const [cartItems, setCartItems] = useState<[]>(carts)

      const valueCartContext = { 
            cartItems: cart,
            setCartItems: setCart
           }

  return (
    <>
     <CartItem cart={cart} /> 
    </>
  )
}

export default DataCart
