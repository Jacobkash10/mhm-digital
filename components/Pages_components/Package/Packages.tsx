"use client"

import React from 'react'
import image1 from '@/public/images/icon-1-packages-marketing-template.png'
import image2 from '@/public/images/icon-2-packages-marketing-template.png'
import image3 from '@/public/images/icon-3-packages-marketing-template.png'
import Image from 'next/image'
import { ArrowRight, Check } from 'lucide-react'
import Link from 'next/link'
import {motion} from 'framer-motion'
import { fadeIn } from '../../../variants'

const Packages = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: {duration: 1, delay: 0.4} }}  
    className='pt-[100px] pb-[150px] px-4 xl:px-14 xxl:px-[10rem] xll:px-[20rem] xxx:px-[22%] lll:px-[25%]'>
      <div className='flex flex-col items-center justify-center'>
            <h5 className="text-red-500 text-xl font-semibold"> 
            Packages
            </h5> 
            <h1 className='text-3xl md:text-[55px] text-center font-semibold leading-tight mb-10 max-w-xl'>
            Pricing plans for every need
            </h1>
      </div>
      <div className='mt-10 py-16 px-2 bg-white shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] border rounded-[40px]
      flex flex-col gap-10 xl:grid grid-cols-3 xl:gap-0'>
            <div className='border-b-2 pb-8 xl:pb-0 xl:border-r-2 xl:border-b-0 px-10'>
                  <div className='w-[25%] mb-8'>
                        <Image src={image1} alt='image1' priority width={0} height={0} sizes='100vw' 
                              className='rounded-3xl' />
                  </div>
                  <h5 className='text-gray-500 mb-2 text-2xl'>Standard</h5>
                  <h4 className='text-3xl font-bold mb-6'>$ 2,500.00 USD</h4>
                  <p className='text-gray-500 text-lg mb-8'>   
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Tempora facilis eaque ea.
                  </p>
                  <h4 className='text-2xl font-semibold mb-2'>What's include?</h4>
                  <div className='mt-4 flex items-center gap-4'>
                        <span className='w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center'>
                              <Check />
                        </span>
                        <h5 className='text-xl font-medium text-gray-500'>Years of Experience</h5>
                  </div>
                  <div className='mt-4 flex items-center gap-4'>
                        <span className='w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center'>
                              <Check />
                        </span>
                        <h5 className='text-xl font-medium text-gray-500'>Years of Experience</h5>
                  </div>
                  <div className='mt-4 flex items-center gap-4'>
                        <span className='w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center'>
                              <Check />
                        </span>
                        <h5 className='text-xl font-medium text-gray-500'>Years of Experience</h5>
                  </div>
                  <div className='mt-4 flex items-center gap-4'>
                        <span className='w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center'>
                              <Check />
                        </span>
                        <h5 className='text-xl font-medium text-gray-500'>Years of Experience</h5>
                  </div>
                  <div className='mt-6'>
                  <Link href={''}>
                        <motion.button
                        whileHover={{ y: -10, transition: {type: 'spring'} }} 
                        className='flex items-center justify-center gap-2 w-full bg-red-500 text-white rounded-full px-10 py-5 
                        shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] group'>
                              <h5 className='font-semibold text-[20px]'>Learn More</h5>
                              <ArrowRight className='text-white group-hover:translate-x-2 transition-all duration-500' />
                        </motion.button>
                  </Link>
            </div>
            </div>
            <div className='border-b-2 pb-8 xl:pb-0 xl:border-r-2 xl:border-b-0 px-10'>
                  <div className='w-[25%] mb-8'>
                        <Image src={image2} alt='image1' priority width={0} height={0} sizes='100vw' 
                              className='rounded-3xl' />
                  </div>
                  <h5 className='text-gray-500 mb-2 text-2xl'>Premium</h5>
                  <h4 className='text-3xl font-bold mb-6'>$ 5,000.00 USD</h4>
                  <p className='text-gray-500 text-lg mb-8'>   
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Tempora facilis eaque ea.
                  </p>
                  <h4 className='text-2xl font-semibold mb-2'>What's include?</h4>
                  <div className='mt-4 flex items-center gap-4'>
                        <span className='w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center'>
                              <Check />
                        </span>
                        <h5 className='text-xl font-medium text-gray-500'>Years of Experience</h5>
                  </div>
                  <div className='mt-4 flex items-center gap-4'>
                        <span className='w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center'>
                              <Check />
                        </span>
                        <h5 className='text-xl font-medium text-gray-500'>Years of Experience</h5>
                  </div>
                  <div className='mt-4 flex items-center gap-4'>
                        <span className='w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center'>
                              <Check />
                        </span>
                        <h5 className='text-xl font-medium text-gray-500'>Years of Experience</h5>
                  </div>
                  <div className='mt-4 flex items-center gap-4'>
                        <span className='w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center'>
                              <Check />
                        </span>
                        <h5 className='text-xl font-medium text-gray-500'>Years of Experience</h5>
                  </div>
                  <div className='mt-6'>
                  <Link href={''}>
                        <motion.button 
                        whileHover={{ y: -10, transition: {type: 'spring'} }}
                        className='flex items-center justify-center gap-2 w-full bg-red-500 text-white rounded-full px-10 py-5 
                        shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] group'>
                              <h5 className='font-semibold text-[20px]'>Learn More</h5>
                              <ArrowRight className='text-white group-hover:translate-x-2 transition-all duration-500' />
                        </motion.button>
                  </Link>
            </div>
            </div>
            <div className=' px-10'>
                  <div className='w-[25%] mb-8'>
                        <Image src={image3} alt='image1' priority width={0} height={0} sizes='100vw' 
                              className='rounded-3xl' />
                  </div>
                  <h5 className='text-gray-500 mb-2 text-2xl'>Deluxe</h5>
                  <h4 className='text-3xl font-bold mb-6'>$ 10,000.00 USD</h4>
                  <p className='text-gray-500 text-lg mb-8'>   
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Tempora facilis eaque ea.
                  </p>
                  <h4 className='text-2xl font-semibold mb-2'>What's include?</h4>
                  <div className='mt-4 flex items-center gap-4'>
                        <span className='w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center'>
                              <Check />
                        </span>
                        <h5 className='text-xl font-medium text-gray-500'>Years of Experience</h5>
                  </div>
                  <div className='mt-4 flex items-center gap-4'>
                        <span className='w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center'>
                              <Check />
                        </span>
                        <h5 className='text-xl font-medium text-gray-500'>Years of Experience</h5>
                  </div>
                  <div className='mt-4 flex items-center gap-4'>
                        <span className='w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center'>
                              <Check />
                        </span>
                        <h5 className='text-xl font-medium text-gray-500'>Years of Experience</h5>
                  </div>
                  <div className='mt-4 flex items-center gap-4'>
                        <span className='w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center'>
                              <Check />
                        </span>
                        <h5 className='text-xl font-medium text-gray-500'>Years of Experience</h5>
                  </div>
                  <div className='mt-6'>
                  <Link href={''}>
                        <motion.button
                        whileHover={{ y: -10, transition: {type: 'spring'} }} 
                        className='flex items-center justify-center gap-2 w-full bg-red-500 text-white rounded-full px-10 py-5 
                        shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] group'>
                              <h5 className='font-semibold text-[20px]'>Learn More</h5>
                              <ArrowRight className='text-white group-hover:translate-x-2 transition-all duration-500' />
                        </motion.button>
                  </Link>
            </div>
            </div>
      </div>
      <div>
            <div className='flex flex-col items-center justify-center mt-10'>
                  <h5 className='text-2xl font-semibold max-w-md text-center mb-3'>
                        Looking for a custom marketing package or campaign?
                  </h5>
                  <p className='text-lg text-gray-500 max-w-md text-center mb-6'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elitolem. Accumsan convallis
                  </p>
                  <Link href={''}>
                        <motion.button 
                        whileHover={{ y: -10, transition: {type: 'spring'} }}
                        className='flex items-center gap-2 bg-red-500 text-white rounded-full px-10 py-5 
                        shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] group'>
                              <h5 className='font-semibold text-[20px]'>Contact Us</h5>
                              <ArrowRight className='text-white group-hover:translate-x-2 transition-all duration-500' />
                        </motion.button>
                  </Link>
            </div>
      </div>
    </motion.div>
  )
}

export default Packages
