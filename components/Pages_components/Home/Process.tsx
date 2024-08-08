"use client"

import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import image1 from '@/public/images/image-1-process-marketing-template.svg'
import image2 from '@/public/images/image-2-process-marketing-template.svg'
import image3 from '@/public/images/image-3-process-marketing-template.svg'
import Image from 'next/image'
import {motion} from 'framer-motion'
import { fadeIn } from '../../../variants'
import { opacite } from '../../../variants'

const Process = () => {
  return (
    <div className='bg-[#e1dfe23c] px-4 xl:px-14 py-[100px] xxl:px-[10rem] xll:px-[20rem] xxx:px-[22%] lll:px-[25%]'>
      <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.5 }} 
      className='flex flex-col items-center justify-center'>
            <div className="mb-3"> 
                  <h5 className="text-red-500 text-xl font-semibold text-center"> 
                        Our Process
                  </h5> 
            </div>
            <h2 className='text-3xl md:text-[44px] max-w-xl font-semibold leading-tight mb-4 text-center'>
                  A simple, yet effective three step process
            </h2>
            <div className='mt-2 xs:mt-20 w-full px-14 lg;px-20'>
                  <Carousel className="max-w-full">
                        <CarouselContent>
                        <CarouselItem>
                              <div className="py-2 xs:py-24 xl:py-0">
                              <Card className='bg-transparent xl:px-10 border-none'>
                                    <CardContent className="flex-col xl:flex-row flex items-center gap-20 relative xl:ml-20">
                                          <div className="">
                                                <Image src={image1} alt='image1' priority width={0} height={0} sizes='100vw' 
                                                className='hidden xs:block absolute top-24 left-1/2 -translate-x-1/2 -translate-y-1/2 
                                                xl:-translate-x-0 xl:-translate-y-0 xl:-left-[60px] xl:top-8 rounded-[50px]' />
                                          </div>
                                          <div className='bg-white w-full py-6 xs:pt-[200px] xs:pb-16 xl:py-16 lg:px-5 px-6 sm:px-6 
                                          flex items-center gap-0 rounded-[50px] sm:gap-8 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
                                                <div className='xl:w-[40%]'></div>
                                                <div>
                                                      <span className='text-red-500 mb-2 text-lg font-semibold'>01</span>
                                                      <h2 className='text-2xl md:text-[30px] max-w-xl font-semibold leading-tight mb-4'>
                                                            Marketing Plan
                                                      </h2>
                                                      <p className='text-sm md:text-xl text-gray-500 max-w-xl'>
                                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                                            Accusamus maxime ratione incidunt consequuntur
                                                      </p>
                                                      <div className='mt-8 flex items-center gap-4'>
                                                            <span className='w-4 h-4 sm:w-8 sm:h-8 rounded-full bg-blue-500 text-white flex items-center justify-center'>
                                                                  <Check />
                                                            </span>
                                                            <h5 className='text-sm md:text-xl font-medium'>Guaranteed Results</h5>
                                                      </div>
                                                      <div className='mt-4 flex items-center gap-4'>
                                                            <span className='w-4 h-4 sm:w-8 sm:h-8 rounded-full bg-blue-500 text-white flex items-center justify-center'>
                                                                  <Check />
                                                            </span>
                                                            <h5 className='text-sm md:text-xl font-medium'>10+ Years of Experience</h5>
                                                      </div>
                                                      <div className='mt-4 flex items-center gap-4'>
                                                            <span className='w-4 h-4 sm:w-8 sm:h-8 rounded-full bg-blue-500 text-white flex items-center justify-center'>
                                                                  <Check />
                                                            </span>
                                                            <h5 className='text-sm md:text-xl font-medium'>Team of Industry Experts</h5>
                                                      </div>
                                                </div>
                                          </div>
                                    </CardContent>
                              </Card>
                              </div>
                        </CarouselItem>
                        </CarouselContent>
                        <div>
                              <CarouselPrevious className='h-[65px] w-[65px] hover:bg-red-500 hover:text-white 
                              shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]' />
                              <CarouselNext className='h-[65px] w-[65px] hover:bg-red-500 hover:text-white 
                              shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]' />
                        </div>
                  </Carousel>
            </div>
            <div className='mt-5 lg:mt-20'>
                  <Link href={'/contact'}>
                        <motion.button 
                        whileHover={{ y: -10, transition: {type: 'spring'} }}
                        className='flex items-center gap-2 bg-red-500 text-white rounded-full px-10 py-6 
                        shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] group'>
                              <h5 className='font-semibold text-base md:text-[20px]'>Get in Touch</h5>
                              <ArrowRight className='text-white group-hover:translate-x-2 transition-all duration-500' />
                        </motion.button>
                  </Link>
            </div>
      </motion.div>
    </div>
  )
}

export default Process
