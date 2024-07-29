import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Banner = () => {
  return (
    <div className='pb-[150px] px-8 xl:px-14 xxl:px-[10rem] xll:px-[20rem] xxx:px-[22%] lll:px-[25%]'>
      <div className='flex flex-col xl:flex-row gap-7 xl:gap-0 xl:items-center justify-between py-10 xl:py-24 px-20 rounded-[50px] bg-red-500'>
            <h2 className='text-white text-3xl md:text-[38px] leading-relaxed font-bold max-w-xl'>Ready to grow your company? Get in touch today!</h2>
            <Link href={'/contact'}>
                  <button className=' bg-white text-red-500 rounded-full
                   px-10 py-6 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] flex items-center gap-2'>
                        <h5 className='font-semibold text-[19px]'>Get in Touch</h5>
                        <ArrowRight className='text-red-500' />
                  </button>
            </Link>
      </div>
    </div>
  )
}

export default Banner
