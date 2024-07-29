import React from 'react'
import { ArrowRight, Minus } from 'lucide-react';
import Link from 'next/link';
import image1 from '@/public/images/image-1-home-hero-marketing-template-1.svg'
import image2 from '@/public/images/image-2-home-hero-marketing-template.svg'
import image3 from '@/public/images/logo-1-companies-marketing-template.svg'
import Image from 'next/image';

const Banner = () => {
  return (
    <div className='pb-[200px] px-8 xl:px-14 xxl:px-[10rem] xll:px-[20rem] xxx:px-[22%] lll:px-[25%]'>
      <div className='mt-20 flex flex-col justify-center xl:flex xl:flex-row items-center gap-3'>
            <div className='w-full xl:w-[45%] flex items-center flex-col justify-center xl:block'>
                  <div className="flex items-center gap-2 mb-3"> 
                        <Minus className='text-red-500' />
                        <h5 className="text-red-500 text-xl font-semibold"> 
                              Marketing Agency
                        </h5> 
                  </div>
                  <h1 className='text-[40px] sm:text-[62px] font-bold leading-tight mb-3 text-center xl:text-left lg:max-w-lg'>
                        A team to grow your startup
                  </h1>
                  <p className='text-base font-semibold text-gray-500 text-center xl:text-left lg:max-w-lg'>
                        Lorem ipsum consectetur amet dolor sit comeneer ilrems dolce issilm acalrm leoinsion duycoqun cons.
                  </p>
                  <div className='flex flex-col justify-center gap-5 sm:flex sm:flex-row sm:justify-start items-center sm:gap-4 mt-10'>
                        <Link href={''}>
                              <button className='flex items-center gap-2 bg-red-500 text-white rounded-full px-10 py-5 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]'>
                                    <h5 className='font-semibold text-[17px]'>Get in Touch</h5>
                                    <ArrowRight className='text-white' />
                              </button>
                        </Link>
                        <Link href={''}>
                              <button className=' bg-white text-red-500 rounded-full px-10 py-5 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]'>
                                    <h5 className='font-semibold text-[17px]'>Browse Service</h5>
                              </button>
                        </Link>
                  </div>
            </div>
            <div className="w-[65%] xl:w-[55%] relative">
                  <Image src={image2} alt='image1' priority width={0} height={0} sizes='100vw' className='absolute hidden xl:block -right-14 top-[50px] xxl:w-[80%]' />
                  <Image src={image1} alt='image1' priority width={0} height={0} sizes='100vw' className='mt-20 xl:mt-[250px]' />
            </div>
      </div>
      <div className='hidden items-center gap-5 bg-white px-14 py-[100px] rounded-l-3xl  absolute left-14 right-0 -bottom-[800px]
                  shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]'>
                  <div className='w-[30%]'>
                        <p className='text-xl text-gray-500'>
                              Trusted by the world’s best companies around the globe
                        </p>
                  </div>
                  <div className='w-[70%] grid grid-cols-3 grid-rows-2 gap-3'>
                        <Image src={image3} alt='image1' priority width={0} height={0} sizes='100vw' className='' />
                        <Image src={image3} alt='image1' priority width={0} height={0} sizes='100vw' className='' />
                        <Image src={image3} alt='image1' priority width={0} height={0} sizes='100vw' className='' />
                        <Image src={image3} alt='image1' priority width={0} height={0} sizes='100vw' className='' />
                        <Image src={image3} alt='image1' priority width={0} height={0} sizes='100vw' className='' />
                        <Image src={image3} alt='image1' priority width={0} height={0} sizes='100vw' className='' />
                  </div>
            </div>
    </div>
  )
}

export default Banner
