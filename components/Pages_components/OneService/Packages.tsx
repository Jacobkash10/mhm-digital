"use client"

import Image from 'next/image';
import React from 'react'
import image1 from '@/public/images/icon-1-packages-marketing-template.png'
import { ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';
import {
      Tabs,
      TabsContent,
      TabsList,
      TabsTrigger,
    } from "@/components/ui/tabs"
import {motion} from 'framer-motion'
import { fadeIn } from '../../../variants'

interface Packages {
      id: string;
      serviceId: string | null;
      name: string;
      priceByYear: number;
      priceByMonth: number;
      description: string;
      points: String[];
}

interface Props {
      service: Packages[];
    }

const Packages: React.FC<Props> = ({service}) => {
  return (
    <motion.div 
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
    className='mt-5'>
      <div className='flex flex-col items-center justify-center'>
            <h5 className="text-red-500 text-xl font-semibold"> 
            Packages
            </h5> 
            <h1 className='text-3xl md:text-[44px] text-center font-bold leading-tight mb-10 max-w-xl'>
            Pricing plans for every need
            </h1>
      </div>
      <Tabs defaultValue="year" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="year">Pay annually</TabsTrigger>
                  <TabsTrigger value="month">Pay monthly</TabsTrigger>
            </TabsList>
            <TabsContent value="year">
                  <div className='mt-10 py-16 px-2 bg-white shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] border 
                  rounded-[40px] flex flex-col gap-10 xl:grid grid-cols-3 xl:gap-0'>
                        {service.map((pack, index) => (
                              <div className='border-b-2 xl:border-r-2 xl:border-b-0 pb-10 xl:pb-0 px-10 flex md:flex-row flex-col xl:flex-col items-center' key={index}>
                                    <div className='w-full'>
                                          <motion.div
                                          whileHover={{ rotate: 360, transition: {type: 'spring', duration: 2} }} 
                                          className='w-[25%] mb-8'>
                                                <Image src={image1} alt='image1' priority width={0} height={0} sizes='100vw' 
                                                      className='rounded-3xl' />
                                          </motion.div>
                                          <h5 className='text-gray-500 mb-2 text-2xl'>{pack.name || 'Default name'}</h5>
                                          <h4 className='text-3xl font-bold mb-6'>$ {pack.priceByYear || '1000'}.00 / year</h4>
                                          <p className='text-gray-500 text-lg mb-8'>   
                                                {pack.description || 'Default description'}
                                          </p>
                                    </div>
                                    <div className='w-full'>
                                          <h4 className='text-xl font-semibold mb-2'>What's include?</h4>
                                          {pack.points.map((point, index) => (
                                                <div className='mt-6 flex items-center gap-4' key={index}>
                                                <span className='w-6 h-6 p-1 rounded-full bg-red-500 text-white flex items-center justify-center'>
                                                      <Check />
                                                </span>
                                                <h5 className='text-lg font-medium text-gray-500'>{point || 'Defaul point'}</h5>
                                          </div>   
                                          ))}
                                          <div className='mt-10'>
                                                <Link href={`/learn-more/${pack.id}`}>
                                                      <motion.button 
                                                      whileHover={{ y: -10, transition: {type: 'spring'} }}
                                                      className='flex items-center justify-center gap-2 w-full bg-red-500 text-white 
                                                      rounded-full px-10 py-4 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] group'>
                                                            <h5 className='font-semibold text-base'>Learn More</h5>
                                                            <ArrowRight className='text-white group-hover:translate-x-2 transition-all 
                                                            duration-500' />
                                                      </motion.button>
                                                </Link>
                                          </div>
                                    </div>
                              </div>
                        ))}
                  </div>
            </TabsContent>
            <TabsContent value="month">
                  <div className='mt-10 py-16 px-2 bg-white shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] border 
                  rounded-[40px] flex flex-col gap-10 xl:grid grid-cols-3 xl:gap-0'>
                        {service.map((pack, index) => (
                              <div className='border-b-2 xl:border-r-2 xl:border-b-0 pb-10 xl:pb-0 px-10 flex md:flex-row flex-col xl:flex-col items-center' key={index}>
                                    <div className='w-full'>
                                          <div className='w-[25%] mb-8'>
                                                <Image src={image1} alt='image1' priority width={0} height={0} sizes='100vw' 
                                                      className='rounded-3xl' />
                                          </div>
                                          <h5 className='text-gray-500 mb-2 text-2xl'>{pack.name || 'Default name'}</h5>
                                          <h4 className='text-3xl font-bold mb-6'>$ {pack.priceByMonth || '1000'}/month</h4>
                                          <p className='text-gray-500 text-lg mb-8'>   
                                                {pack.description || 'Default description'}
                                          </p>
                                    </div>
                                    <div className='w-full'>
                                          <h4 className='text-xl font-semibold mb-2'>What's include?</h4>
                                          {pack.points.map((point, index) => (
                                                <div className='mt-6 flex items-center gap-4' key={index}>
                                                <span className='w-6 h-6 p-1 rounded-full bg-red-500 text-white flex items-center justify-center'>
                                                      <Check />
                                                </span>
                                                <h5 className='text-lg font-medium text-gray-500'>{point || 'Defaul point'}</h5>
                                          </div>   
                                          ))}
                                          <div className='mt-10'>
                                                <Link href={`/learn-more/${pack.id}`}>
                                                      <motion.button
                                                      whileHover={{ y: -10, transition: {type: 'spring'} }} 
                                                      className='flex items-center justify-center gap-2 w-full bg-red-500 text-white 
                                                      rounded-full px-10 py-4 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] group'>
                                                            <h5 className='font-semibold text-base'>Learn More</h5>
                                                            <ArrowRight className='text-white group-hover:translate-x-2 transition-all 
                                                            duration-500' />
                                                      </motion.button>
                                                </Link>
                                          </div>
                                    </div>
                              </div>
                        ))}
                  </div>
            </TabsContent>
      </Tabs>
      
    </motion.div>
  )
}

export default Packages
