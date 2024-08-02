"use client"

import React from 'react'
import { ArrowRight, Minus } from 'lucide-react';
import Link from 'next/link';
import image1 from '@/public/images/image-1-home-hero-marketing-template-1.svg'
import image2 from '@/public/images/image-2-home-hero-marketing-template.svg'
import Image from 'next/image';
import {motion} from 'framer-motion'
import { fadeIn } from '../../../variants'

const Banner = () => {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: {duration: 2, delay: 0.5} }}
    className='pb-[100px] px-4 xl:px-14 xxl:px-[10rem] xll:px-[20rem] xxx:px-[22%] lll:px-[25%]'>
      <div className='mt-8 md:mt-2 flex flex-col justify-center xl:flex xl:flex-row items-center gap-3'>
            <motion.div 
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className='w-full xl:w-[45%] flex items-center flex-col justify-center xl:block'>
                  <div className="flex items-center gap-2 mb-3"> 
                        <Minus className='text-red-500' />
                        <h5 className="text-red-500 text-xl font-semibold"> 
                              Marketing Agency
                        </h5> 
                  </div>
                  <h1 className='text-[40px] sm:text-[62px] font-bold leading-tight mb-3 text-center xl:text-left max-w-xl lg:max-w-lg'>
                        A team to grow your startup
                  </h1>
                  <p className='text-base font-semibold text-gray-500 text-center xl:text-left max-w-md lg:max-w-lg'>
                        Lorem ipsum consectetur amet dolor sit comeneer ilrems dolce issilm acalrm leoinsion duycoqun cons.
                  </p>
                  <div className='flex flex-col justify-center gap-5 sm:flex sm:flex-row sm:justify-start items-center sm:gap-4 mt-10'>
                        <Link href={'/contact'}>
                              <motion.button 
                              whileHover={{ y: -10, transition: {type: 'spring'} }}
                              className='flex items-center gap-2 bg-red-500 text-white rounded-full px-10 py-5 
                              shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] group'>
                                    <h5 className='font-semibold text-[17px]'>Get in Touch</h5>
                                    <ArrowRight className='text-white group-hover:translate-x-2 transition-all duration-500' />
                              </motion.button>
                        </Link>
                        <Link href={'/services'}>
                              <motion.button
                               whileHover={{ y: -10, transition: {type: 'spring'} }} 
                              className=' bg-white text-red-500 rounded-full px-10 py-5 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]'>
                                    <h5 className='font-semibold text-[17px]'>Browse Service</h5>
                              </motion.button>
                        </Link>
                  </div>
            </motion.div>
            <motion.div 
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className="w-[65%] xl:w-[55%] relative">
                  <Image src={image2} alt='image1' priority width={0} height={0} sizes='100vw' className='absolute hidden xl:block w-[80%] -right-14 top-[50px] xxl:w-[80%]' />
                  <Image src={image1} alt='image1' priority width={0} height={0} sizes='100vw' className='mt-20 xl:mt-[250px]' />
            </motion.div>
      </div>
    </motion.div>
  )
}

export default Banner
