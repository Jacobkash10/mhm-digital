"use client"

import { Cart } from '@/components/Cart'
import React, { useState } from 'react'
import CartView from '../CartView'


const CartItem = () => {
      const [openCart, setOpenCart] = useState(false)

      const CartViewOpen = () => {
            setOpenCart(!openCart)
      }

  return (
    <>
      <Cart openCart={CartViewOpen} />
      {
            openCart === true ? <CartView openCart={CartViewOpen} open={openCart} /> 
            : <></>
      }
    </>
  )
}

export default CartItem
