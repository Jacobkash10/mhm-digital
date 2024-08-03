"use client"

import React from 'react'
import image1 from '@/public/images/company-logo-agencypro-x-webflow-template.svg'
import image2 from '@/public/images/enterprise-logo-agencypro-x-webflow-template.svg'
import { ArrowRight, Minus } from 'lucide-react'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import Image from 'next/image'
import Banner from '@/components/Pages_components/Services/Banner'
import {motion} from 'framer-motion'

const page = () => {
  return (
    <>
      <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: {duration: 2, delay: 0.5} }}
      className='mt-[100px] pb-[150px] px-8 xl:px-14 xxl:px-[10rem] xll:px-[20rem] xxx:px-[22%] lll:px-[25%]'>
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
                              Lorem ipsum consectetur amet dolor sit comeneer ilremsilom dolce issilm acalrm leoinsion duycoqun.
                        </p>
                  </div>
            </div>
            <div className='flex flex-col lg:flex-row items-center justify-between gap-10'>
            <div className='w-full'>
                  <Card className='rounded-[50px] shadow-[0_8px_30px_rgb(0,0,0,0.12)]'>
                        <Link href={'/case-study/id'}>
                              <div>
                              <Image src={image1} alt='image1' priority width={0} height={0} sizes='100vw' 
                                    className='rounded-t-[50px] w-full' />
                              </div>
                              <motion.div
                              whileHover={{ scale: 1.05, transition: {duration: 0.3} }} 
                              className='p-10'>
                                    <div className="flex items-center gap-2 mb-3">
                                          <h5 className="text-red-500 text-lg font-semibold"> 
                                                Company
                                          </h5> 
                                    </div>
                                    <h2 className='text-2xl max-w-xl font-bold leading-tight mb-3'>
                                    How we increased sign up rate by 56% on Creators Program
                                    </h2>
                                    <p className='text-base md:text-lg text-gray-500 max-w-xl'>
                                    Lorem ipsum consectetur amet dolor sit 
                                    comeneer ilremsilom dolce issilm acalrm 
                                    leoinsion duycoqun consemleint.
                                    </p>
                              </motion.div>
                        </Link>
                  </Card>
            </div>
            <div className='w-full'>
                  <Card className='rounded-[50px] shadow-[0_8px_30px_rgb(0,0,0,0.12)]'>
                        <Link href={'/case-study/id'}>
                              <div>
                              <Image src={image2} alt='image1' priority width={0} height={0} sizes='100vw' 
                                    className='rounded-t-[50px] w-full' />
                              </div>
                              <motion.div
                              whileHover={{ scale: 1.05, transition: {duration: 0.3} }}  
                              className='p-10'>
                                    <div className="flex items-center gap-2 mb-3">
                                          <h5 className="text-red-500 text-lg font-semibold"> 
                                          Enterprise
                                          </h5> 
                                    </div>
                                    <h2 className='text-2xl max-w-xl font-bold leading-tight mb-3'>
                                          How we scalated 12 positions on Enterprise App Store rankings
                                    </h2>
                                    <p className='text-base md:text-lg text-gray-500 max-w-xl'>
                                    Lorem ipsum consectetur amet dolor sit 
                                    comeneer ilremsilom dolce issilm acalrm 
                                    leoinsion duycoqun consemleint.
                                    </p>
                              </motion.div>
                        </Link>
                  </Card>
            </div>
      </div>
      </motion.div>
      <Banner />
    </>
  )
}

export default page
