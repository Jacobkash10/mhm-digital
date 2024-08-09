"use client"

import { Cart } from '@/components/Cart'
import React, { useState } from 'react'
import CartView from '../CartView'
import { Carts } from '@/types/carts'

interface Props {
  cart: Carts
}


const CartItem = ({cart}: Props) => {
      const [openCart, setOpenCart] = useState(false)

      const CartViewOpen = () => {
            setOpenCart(!openCart)
      }

      const [carts, setCarts] = useState(cart)

  return (
    <>
      <Cart carts={carts} openCart={CartViewOpen} />
      {
            openCart === true ? <CartView carts={carts} openCart={CartViewOpen} open={openCart} /> 
            : <></>
      }
    </>
  )
}

export default CartItem
