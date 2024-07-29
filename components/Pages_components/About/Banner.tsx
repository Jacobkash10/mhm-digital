import { Minus } from 'lucide-react'
import React from 'react'
import image1 from '@/public/images/image-1-about-hero-marketing-template-p-1080.jpeg'
import image2 from '@/public/images/image-2-about-hero-marketing-template-p-500.jpeg'
import image3 from '@/public/images/image-3-about-hero-marketing-template-p-1080.jpeg'
import Image from 'next/image'

const Banner = () => {
  return (
      <div className='mt-[100px] relative px-8 xl:px-14 xxl:px-[10rem] xll:px-[20rem] xxx:px-[22%] lll:px-[25%]'>
            <div className='flex flex-col lg:flex-row lg:items-center gap-20 justify-between pb-10 xl:pb-[200px]'>
                  <div className='w-full lg:w-[60%] xl:w-[50%]'>
                        <div className="flex items-center gap-2 mb-3"> 
                              <Minus className='text-red-500' />
                              <h5 className="text-red-500 text-xl font-semibold"> 
                              About  Agencypro
                              </h5> 
                        </div>
                        <h1 className='text-3xl md:text-[50px] font-bold leading-tight mb-3 xl:max-w-xl'>
                        A team of marketing experts
                        </h1>
                        <p className='text-lg text-gray-500'>
                        Lorem ipsum consectetur amet dolor sit comeneer 
                        ilremsilom dolce issilm acalrm leoinsion duycoqun 
                        consemleint lorem. Lorem ipsum consectetur amet dolor sit.
                        </p>
                  </div>
                  <div className='w-[50%]'>
                        <Image src={image1} alt='image1' priority width={0} height={0} sizes='100vw' 
                        className='rounded-[50px] shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] w-full' />
                  </div>
            </div>
            <div className='flex items-center justify-between gap-20'>
                  <div className='w-[50%] xl:w-[35%]'>
                        <Image src={image2} alt='image1' priority width={0} height={0} sizes='100vw' 
                        className='xl:absolute -bottom-[200px] w-full xl:w-[33%] rounded-[50px] shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] 
                        xxl:w-[22%] xxx:w-[18%]' /> 
                  </div>
                  <div className='w-[50%] xl:w-[65%]'>
                        <Image src={image3} alt='image1' priority width={0} height={0} sizes='100vw' 
                        className='xl:absolute -bottom-[350px] w-full xl:w-[52%] rounded-[50px] shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] 
                        xxl:w-[38%] xxx:w-[30%]' /> 
                  </div>
            </div>
      </div>
  )
}

export default Banner
