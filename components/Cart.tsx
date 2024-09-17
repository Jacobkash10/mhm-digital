"use client"

import { CartContext } from "@/context/CartContext"
import { useContext, useEffect } from "react"
import { FaCartShopping } from "react-icons/fa6"
import { Carts } from '@/types/carts'
import Image from 'next/image';
import image1 from '@/public/images/V1.png'


export function Cart({openCart, carts}: {openCart: () => void, carts: Carts}) {
  
  // const {cartItems, setCartItems} = useContext(CartContext)

  return (
    <>
    <div className="group" onClick={openCart}>
      <div className='relative cursor-pointer w-10 h-10 sm:w-10 sm:h-10 rounded-xl flex flex-col justify-center items-center
            shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] group-hover:bg-red-500 transition-all duration-300'>
              <i><FaCartShopping className='text-red-500 text-2xl group-hover:text-white transition-all duration-500' /></i>
              <h5 className='absolute text-xs font-semibold -top-2 -right-2 bg-red-500 text-white px-[5px] py-[1px] rounded-full'>
                <span>{carts.items.length}</span>
              </h5>
      </div>
    </div>
    </>
  )
}
