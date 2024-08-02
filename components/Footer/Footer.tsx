"use client"

import Link from 'next/link'
import React from 'react'
import { Input } from '@/components/ui/input'
import { ArrowRight } from 'lucide-react'
import {motion} from 'framer-motion'
import { opacite } from '../../variants'

const Footer = () => {
  return (
      <>
      <motion.div
      variants={opacite("up", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}>
            <hr />
            <div className='px-4 xl:px-14 xxl:px-[10rem] xll:px-[20rem] xxx:px-[22%] lll:px-[25%]
            py-[80px] flex flex-col lg:flex-row items-center justify-between gap-8'>
                  <div className='w-full lg:w-[48%]'>
                        <div className='flex items-center gap-3'>
                        <h5 className='w-9 h-9 bg-red-500 rounded-xl 
                        shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] 
                        flex flex-col items-center justify-center text-white font-bold'>
                        M
                        </h5>
                        <Link className='text-xl sm:text-[28px] font-semibold' href={'/'}>Mhm Digital</Link>
                        </div>
                        <p className='text-base text-gray-500 pt-6'>
                              Lorem ipsum consectetur amet dolor sit comeneer ilremsilom dolce issilm acalrm leoinsion duycoqun consemleint lorem.
                        </p>
                  </div>
                  <div className='w-full lg:w-[52%]'>
                        <h5 className='text-xl sm:text-lg font-semibold pb-6'>Subscribe to our newsletter</h5>
                        <div className='flex items-center justify-between px-4 py-3 border rounded-full'>
                              <Input placeholder='Enter your email' className='border-none w-[70%] rounded-full text-xl placeholder:text-base' />
                              <button className='block sm:flex items-center w-[30%] gap-2 bg-red-500 text-white 
                              rounded-full px-3 sm:px-9 py-2 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] group'>
                                    <h5 className='font-semibold text-[10px] xs:text-[16px]'>Subscribe</h5>
                                    <ArrowRight className='text-white hidden sm:block group-hover:translate-x-2 transition-all duration-500' />
                              </button>
                        </div>
                  </div>
            </div>
      </motion.div>
      <motion.div
      variants={opacite("up", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }} 
      className='px-4 xl:px-14 xxl:px-[10rem] xll:px-[20rem] xxx:px-[22%] lll:px-[25%]'>
            <hr />
            <div className='pt-[100px]'>
                  <div className='flex items-start justify-between w-full pb-5'>
                        <div className='w-[33%]'>
                              <h5 className='text-xl font-bold'>Menu</h5>
                              <div className='pt-6'>
                                    <p className='mb-3 text-base sm:text-lg text-gray-500'>
                                          <Link className='hover:underline' href={'/'}>Home</Link>
                                    </p>
                                    <p className='mb-3 text-base sm:text-lg text-gray-500'>
                                          <Link className='hover:underline' href={'/about'}>About</Link>
                                    </p>
                                    <p className='mb-3 text-base sm:text-lg text-gray-500'>
                                          <Link className='hover:underline' href={'/services'}>Services</Link>
                                    </p>
                                    <p className='mb-3 text-base sm:text-lg text-gray-500'>
                                          <Link className='hover:underline' href={'/case-studies'}>Case Studies</Link>
                                    </p>
                              </div>
                        </div>
                        <div className='w-[33%]'>
                        <h5 className='text-xl font-bold'>Pages</h5>
                              <div className='pt-6'>
                                    <p className='mb-3 text-base sm:text-lg text-gray-500'>
                                          <Link className='hover:underline' href={'/blog'}>Blog</Link>
                                    </p>
                                    <p className='mb-3 text-base sm:text-lg text-gray-500'>
                                          <Link className='hover:underline' href={'/jobs'}>Jobs</Link>
                                    </p>
                                    <p className='mb-3 text-base sm:text-lg text-gray-500'>
                                          <Link className='hover:underline' href={'/packages'}>Packages</Link>
                                    </p>
                                    <p className='mb-3 text-base sm:text-lg text-gray-500'>
                                          <Link className='hover:underline' href={'/contact'}>Contact</Link>
                                    </p>
                              </div>
                        </div>
                        <div className='w-[33%]'>
                        </div>
                  </div>
            </div>
            <hr />
            <div className='py-[20px]'>
                  <p>Copyright © Mhm Digital</p>
            </div>
      </motion.div>
      </>
  )
}

export default Footer