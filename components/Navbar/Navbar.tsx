"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react';
import { Cart } from '../Cart';
import { useSession } from "next-auth/react";
import UserButton from './UserButton';
import NavNormal from './NavNormal';
import NavMobile from './NavMobile';
import {motion} from 'framer-motion'
import SignInButton from './SignInButton';
import CartView from './CartView';

const Navbar = () => {
      const session = useSession()
      const user = session.data?.user

      const [openCart, setOpenCart] = useState(false)

      const CartViewOpen = () => {
            setOpenCart(!openCart)
      }

  return (
      <div>
            <div className='flex items-center justify-between px-4 xl:px-14 py-8 xxl:px-[10rem] xll:px-[20rem] xxx:px-[22%] lll:px-[25%]'>
                  <div className='flex items-center gap-1'>
                        <h5 className='w-10 h-10 bg-red-500 rounded-xl 
                        shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] 
                        flex flex-col items-center justify-center text-white font-bold'>
                        M
                        </h5>
                        <Link className='text-[22px] sm:text-[28px] font-semibold' href={'/'}>Mhm Digital</Link>
                  </div>
                  <NavNormal />
                  <div className='flex items-center gap-4'>
                        <Cart openCart={CartViewOpen} />
                        <Link href={'/contact'} className='hidden md:block group'>
                              <motion.button 
                              whileHover={{ y: -8, transition: {type: 'spring'} }}
                              className='flex items-center gap-2
                              bg-red-500 text-white
                              rounded-full px-6 py-5
                              shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] '>
                                    <h5 className='font-semibold text-base'>Get in Touch</h5>
                                    <ArrowRight className='text-white group-hover:translate-x-2 transition-all duration-500' />
                              </motion.button>
                        </Link>
                        { user && <UserButton user={user} />}
                        { !user && session.status !== "loading" && <SignInButton /> }
                        <NavMobile />
                  </div>
            </div>
            {
                  openCart === true ? <CartView openCart={CartViewOpen} open={openCart} /> : <></>
            }
      </div>
  )
}

export default Navbar