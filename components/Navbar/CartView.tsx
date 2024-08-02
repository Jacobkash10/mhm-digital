"use client"

import Link from 'next/link'
import React from 'react'
import { RiCloseFill } from 'react-icons/ri'
import {motion} from 'framer-motion'

const CartView = ({openCart, open}: {openCart: () => void, open: boolean}) => {
  return (
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: open ? 1 : 0, transition: {type: 'spring', duration: 1} }} 
      className='w-full z-50 absolute top-0 left-0 inset-0 flex items-center'>
            <div className='bg-[#000000b4] w-[62%] h-full' onClick={openCart}>
            </div>
            <div className='w-[60%] md:w-[40%] bg-white shadow h-full'>
                  <div className='border-b-2 py-6'>
                        <div className='flex justify-between items-center px-5'>
                              <h2 className='text-2xl font-bold'>Your Cart</h2>
                              <RiCloseFill onClick={openCart} color='black' className='text-xl sm:text-2xl font-bold cursor-pointer' />
                        </div>
                  </div>
                  <div className='mt-48 flex flex-col items-center justify-center'>
                        <h5 className='mb-10 text-lg text-slate-500'>No items found.</h5>
                        <div>
                              <Link href={"/packages"} onClick={openCart}>
                                    <motion.button
                                    whileHover={{ y: -10, transition: {type: 'spring'} }}
                                    className='flex items-center gap-2 bg-red-500 text-white rounded-full px-10 py-6 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]'>
                                          <h5 className='font-semibold text-base sm:text-[20px]'>Go to packages</h5>
                                    </motion.button>
                              </Link>
                        </div>
                  </div>
            </div>
      </motion.div>
  )
}

export default CartView
