"use client"

import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import { RiCloseFill } from 'react-icons/ri'
import {motion} from 'framer-motion'
import image1 from '@/public/images/icon-1-packages-marketing-template.png'
import Image from 'next/image'
import { Cart } from '../../types/carts';
import { CartContext } from '@/context/CartContext'

const CartView = ({openCart, open}: {openCart: () => void, open: boolean}) => {

      // const [cartItems, setCartItems] = useState<Cart[]>();

      const {cartItems, setCartItems} = useContext(CartContext)
      const [carts, setCarts] = useState<Cart[]>(cartItems)

      // useEffect(() => {
      // const fetchCartData = async () => {
      //       try {
      //       const response = await fetch('/api/cart');
      //       if (response.ok) {
      //       const data = await response.json();
      //       setCartItems(data.cartItems);
      //       } else {
      //       console.error('Erreur lors de la récupération des données du panier');
      //       }
      //       } catch (error) {
      //       console.error('Erreur réseau :', error);
      //       }
      // };

      // fetchCartData();
      // }, []);

  return (
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: open ? 1 : 0, transition: {type: 'spring', duration: 1} }} 
      className='w-full z-50 fixed top-0 left-0 inset-0 flex items-center'>
            <div className='bg-[#000000b4] w-[62%] h-full' onClick={openCart}>
            </div>
            <div className='w-[100%] md:w-[40%] bg-white shadow h-full'>
                  <div className='border-b-2 py-6'>
                        <div className='flex justify-between items-center px-5'>
                              <h2 className='text-2xl font-bold'>Your Cart</h2>
                              <RiCloseFill onClick={openCart} color='black' className='text-xl sm:text-2xl font-bold cursor-pointer' />
                        </div>
                  </div>
                  {     
                        carts?.length === 0 ? 
                        (
                        <div className='mt-48 flex flex-col items-center justify-center'>
                              <h5 className='mb-10 text-lg text-slate-500'>No items found.</h5>
                              <div>
                                    <Link href={"/packages"} onClick={openCart}>
                                          <motion.button
                                          whileHover={{ y: -10, transition: {type: 'spring'} }}
                                          className='flex items-center gap-2 bg-red-500 text-white rounded-full px-10 py-6 
                                          shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]'>
                                                <h5 className='font-semibold text-base sm:text-[20px]'>Go to packages</h5>
                                          </motion.button>
                                    </Link>
                              </div>
                        </div>
                        )
                        :
                        (
                              
                              <div className='overflow-y-auto h-[82%]'>
                                    <div className='px-6 py-1'>
                                          {carts?.map((item) => (
                                                <div key={item.id} className='mt-5 border-b py-4'>
                                                      <div className='row sm:flex items-start justify-between'>
                                                            <div className='flex items-start gap-5'>
                                                                  <div className='w-[20%]'>
                                                                        <Image src={image1} alt='image1' priority width={0} height={0} 
                                                                        sizes='100vw' className='rounded-2xl' />
                                                                  </div>
                                                                  <div>
                                                                        <h3 className='text-base font-extrabold'>
                                                                              {item?.package?.name}
                                                                        </h3>
                                                                        <p className='font-semibold'>
                                                                              $ {item.packageDuration}.00 USD
                                                                        </p>
                                                                        <h5 className='text-slate-500 font-bold'>
                                                                              Package Duration : 
                                                                              <span className='text-black'>
                                                                                    {item.packageDuration === item?.package?.priceByMonth
                                                                                    ? '1 Month' : '1 Year'
                                                                                    }
                                                                              </span>
                                                                        </h5>
                                                                  </div>
                                                            </div>
                                                            <div>
                                                                  <form action="">
                                                                        <button className='text-red-500'>
                                                                              Remove
                                                                        </button>
                                                                  </form>
                                                            </div>
                                                      </div>
                                                </div>
                                          ))}
                                          <div className='row sm:flex items-center justify-between mt-5'>
                                                <h5 className='text-slate-500 font-bold'>Subtotal</h5>
                                                <p className='font-semibold'>
                                                      $ {carts?.map((item) => item.packageDuration)?.reduce((total, item) => 
                                                            { return total + item}, 0)}.00 USD
                                                </p>
                                          </div>
                                          <div className='w-full mt-6'>
                                                <Link href={"/checkout"} onClick={openCart}>
                                                      <motion.button
                                                      whileHover={{ y: -10, transition: {type: 'spring'} }}
                                                      className='flex items-center justify-center gap-2 bg-red-500 text-white 
                                                      rounded-full px-10 py-6 
                                                      shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] w-full '>
                                                            <h5 className='font-semibold text-xs sm:text-base'>
                                                                  Continue To Checkout
                                                            </h5>
                                                      </motion.button>
                                                </Link>
                                          </div>
                                    </div>
                              </div>
                        )
                  }
            </div>
      </motion.div>
  )
}

export default CartView
