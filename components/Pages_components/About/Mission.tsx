import React from 'react'
import image1 from '@/public/images/image-1-about-mission-marketing-template.jpg'
import image2 from '@/public/images/image-2-about-mission-marketing-template.jpg'
import { Minus } from 'lucide-react'
import Image from 'next/image'

const Mission = () => {
  return (
    <div className='pt-[200px] pb-[400px] px-8 xl:px-14 xxl:px-[10rem] xll:px-[20rem] xxx:px-[22%] lll:px-[25%]'>
      <div className='flex flex-col xl:flex-row items-center gap-28 justify-between'>
            <div className='w-full flex flex-col items-center justify-center xl:block xl:w-[50%]'>
                  <div className="flex items-center gap-2 mb-3"> 
                        <Minus className='text-red-500' />
                        <h5 className="text-red-500 text-xl font-semibold"> 
                              Our Mission
                        </h5> 
                  </div>
                  <h1 className='text-3xl md:text-[44px] text-center xl:text-left font-bold leading-tight mb-10 max-w-xl'>
                        We started with a single mission: Help startups grow
                  </h1>
                  <p className='text-lg xl:text-xl text-center xl:text-left text-gray-500 mb-10'>
                        Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit. Curabitur id neque, 
                        malesuada sapien dictum lacinia sed tellus 
                        integer. Ante phasellus morbi id sollicitudin 
                        odio amet. Proin orci volutpat cras mauris quis. 
                        Ante enim ut sapien volutpat id mattis.
                  </p>
                  <p className='text-lg xl:text-xl text-center xl:text-left text-gray-500'>
                        Interdum sed lectus et, at orci et cursus. 
                        Diam erat rhoncus proin nulla ac aliquam at 
                        ultrices et. Mi, odio morbi ullamcorper 
                        suspendisse amet a mi feugiat pretium. 
                        Lacus, tincidunt ac mauris viverra scelerisque 
                        viverra praesent eu leo.
                  </p>
            </div>
            <div className="w-[50%] relative">
                  <Image src={image1} alt='image1' priority width={0} height={0} sizes='100vw' 
                        className='w-[450px] rounded-[50px]
                        shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]' />
                  <Image src={image2} alt='image1' priority width={0} height={0} sizes='100vw' 
                        className='w-[450px] rounded-[50px] object-cover absolute right-0 top-[330px]
                        shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]' />
            </div>
      </div>
    </div>
  )
}

export default Mission
