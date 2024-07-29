import React from 'react'
import image1 from '@/public/images/image-1-home-advantage-marketing-template.svg'
import image2 from '@/public/images/image-2-home-advantage-marketing-template.svg'
import Image from 'next/image'
import { ArrowRight, Check, Minus } from 'lucide-react'
import Link from 'next/link'

const Why = () => {
  return (
    <div className='pt-[100px] px-8 xl:px-14 pb-[200px] xxl:px-[10rem] xll:px-[20rem] xxx:px-[22%] lll:px-[25%]'>
      <div className='flex-col xl:flex-row flex items-center justify-between gap-10'>
            <div className="relative bg-[url('/images/bg.jpeg')]">
                  <Image src={image2} alt='image1' priority width={0} height={0} sizes='100vw' className='w-full' />
                  <Image src={image1} alt='image1' priority width={0} height={0} sizes='100vw' className=' absolute left-0 top-[160px]' />
            </div>
            <div className='w-full xl:w-[50%] mt-[200px] flex flex-col justify-center items-center xl:block'>
                  <div className="flex items-center gap-2 mb-3"> 
                        <Minus className='text-red-500' />
                        <h5 className=" text-red-500 text-xl font-semibold"> 
                              Our Services
                        </h5> 
                  </div>
                  <h2 className='text-3xl md:text-[44px] max-w-xl font-bold leading-tight mb-4 text-center xl:text-left lg:max-w-lg'>
                        High-impact marketing services to grow your startup
                  </h2>
                  <p className='text-xl text-gray-500 max-w-xl text-center xl:text-left'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Accusamus maxime ratione incidunt consequuntur minus 
                        doloremque cum repudiandae similique animi omnis?
                  </p>
                  <div className='mt-8 flex items-center gap-4'>
                        <span className='w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center'>
                              <Check />
                        </span>
                        <h5 className='text-xl font-medium'>Guaranteed Results</h5>
                  </div>
                  <div className='mt-4 flex items-center gap-4'>
                        <span className='w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center'>
                              <Check />
                        </span>
                        <h5 className='text-xl font-medium'>10+ Years of Experience</h5>
                  </div>
                  <div className='mt-4 flex items-center gap-4'>
                        <span className='w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center'>
                              <Check />
                        </span>
                        <h5 className='text-xl font-medium'>Team of Industry Experts</h5>
                  </div>
                  <div className='mt-10'>
                        <Link href={''}>
                              <button className='flex items-center gap-2 bg-red-500 text-white rounded-full px-7 py-5 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]'>
                                    <h5 className='font-semibold text-[17px]'>Get in Touch</h5>
                                    <ArrowRight className='text-white' />
                              </button>
                        </Link>
                  </div>
            </div>
      </div>
    </div>
  )
}

export default Why
