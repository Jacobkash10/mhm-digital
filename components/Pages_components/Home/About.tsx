import { ArrowRight, Minus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import image1 from '@/public/images/image-1-home-about-marketing-template.svg'
import image2 from '@/public/images/image-2-home-about-marketing-template.svg'
import Image from 'next/image'

const 
About = () => {
  return (
      <div className='pb-[200px] px-8 xl:px-14 xxl:px-[10rem] xll:px-[20rem] xxx:px-[22%] lll:px-[25%]'>
            <hr />
            <div className='pt-[100px]'>
                  <div className='flex-col xl:flex-row flex items-center justify-between gap-10'>
                        <div className='mt-[150px] w-full xl:w-[45%] flex flex-col justify-center items-center xl:block'>
                              <div className="flex items-center gap-2 mb-3"> 
                                    <Minus className='text-red-500' />
                                    <h5 className="text-red-500 text-xl font-semibold"> 
                                          About Us
                                    </h5> 
                              </div>
                              <h2 className='text-3xl md:text-[44px] max-w-xl font-bold leading-tight mb-4 text-center xl:text-left lg:max-w-lg'>
                                    We are like an extension of your marketing team
                              </h2>
                              <p className='text-base font-semibold text-gray-500 xl:max-w-xl text-center xl:text-left max-w-2xl'>
                                    Lorem ipsum consectetur amet dolor sit comeneer ilremsilom 
                                    dolce issilm acalrm leoinsion duycoqun consemleint lorem. 
                                    Lorem ipsum consectetur amet dolor sit. Lorem ipsum 
                                    consectetur amet dolor sit comeneer ilremsilom dolce 
                                    issilm acalrm leoinsion duycoqun consemleint lorem. 
                                    Lorem ipsum consectetur amet dolor sit.
                              </p>
                              <div className='mt-10'>
                                    <Link href={''}>
                                          <button className='flex items-center gap-2 bg-red-500 text-white rounded-full px-7 py-5 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]'>
                                                <h5 className='font-semibold text-[17px]'>About Us</h5>
                                                <ArrowRight className='text-white' />
                                          </button>
                                    </Link>
                              </div>
                        </div>
                        <div className="relative w-[50%]">
                              <Image src={image2} alt='image1' priority width={0} height={0} sizes='100vw' className='w-full' />
                              <Image src={image1} alt='image1' priority width={0} height={0} sizes='100vw' className='absolute left-0 lg:-left-0 top-[50px]' />
                        </div>
                  </div>
            </div>
      </div>
  )
}

export default 
About