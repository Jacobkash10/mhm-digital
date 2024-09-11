"use client"

import React from 'react'
import {motion} from 'framer-motion'
import { ArrowRight } from 'lucide-react';
import Link from 'next/link'

const ContactButton = () => {
  return (
    <>
      <Link href={'/contact'} className='hidden md:block group'>
            <motion.button 
            whileHover={{ y: -8, transition: {type: 'spring'} }}
            className='flex items-center gap-2
            bg-red-500 text-white
            rounded-full px-6 py-[18px]
            shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] '>
                  <h5 className='font-semibold text-base'>Get in Touch</h5>
                  <ArrowRight className='text-white group-hover:translate-x-2 transition-all duration-500' />
            </motion.button>
      </Link>
    </>
  )
}

export default ContactButton
