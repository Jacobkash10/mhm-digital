"use client"

import React from 'react'
import { Minus } from 'lucide-react'
import {motion} from 'framer-motion'

const Ban = () => {
  return (
    <>
      <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: {duration: 2, delay: 0.5} }}
      className='mt-[100px] pb-[50px] px-8 xl:px-14 xxl:px-[10rem] xll:px-[20rem] xxx:px-[22%] lll:px-[25%]'>
            <div className='flex flex-col xl:flex-row xl:items-center xl:gap-6 justify-between mb-10 xl:mb-3'>
                  <div className='w-full xl:w-[52%]'>
                        <div className="flex items-end gap-2"> 
                              <Minus className='text-red-500' />
                              <h5 className="text-red-500 text-xl font-semibold"> 
                                    Case Studies
                              </h5> 
                        </div>
                        <h2 className='text-3xl md:text-[55px] font-semibold leading-tight mb-4'>
                        Clients Case Studies
                        </h2>
                  </div>
                  <div className='w-full xl:w-[48%]'>
                        <p className='text-lg text-gray-500'>
                        </p>
                  </div>
            </div>
      </motion.div>
    </>
  )
}

export default Ban
