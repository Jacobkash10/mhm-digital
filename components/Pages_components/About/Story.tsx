import { Minus } from 'lucide-react'
import React from 'react'

const Story = () => {
  return (
    <div className='bg-[#e1dfe23c] pt-[200px] pb-[150px] px-8 xl:px-14 xxl:px-[10rem] xll:px-[20rem] xxx:px-[22%] lll:px-[25%]'>
      <div className='flex flex-col xl:flex-row xl:items-center justify-between gap-5'>
            <div className='w-full xl:w-[52%]'>
            <div className="flex items-center gap-2 mb-3"> 
                        <Minus className='text-red-500' />
                        <h5 className="text-red-500 text-xl font-semibold"> 
                        Our Story
                        </h5> 
                  </div>
                  <h1 className='text-3xl md:text-[44px] font-bold leading-tight mb-10 sm:max-w-3xl xl:max-w-xl'>
                  The story behind our Marketing Agencypro
                  </h1>
            </div>
            <div className='w-full xl:w-[48%]'>
                  <p className='text-lg text-gray-500 mb-10'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Curabitur id neque, malesuada sapien dictum lacinia sed 
                        tellus integer. Ante phasellus morbi id sollicitudin odio amet.
                  </p>
            </div>
      </div>
      <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5'>
            <div className=' bg-white rounded-3xl py-8 px-6
                  shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]'>
                  <h3 className='text-[56px] font-bold text-red-500 mb-4'>2021</h3>
                  <h5 className='text-2xl font-bold mb-2'>Founded</h5>
                  <p className='text-lg text-gray-500'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio vel ultricies dignissim.
                  </p>
            </div>
            <div className=' bg-white rounded-3xl py-8 px-6
                  shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]'>
                  <h3 className='text-[56px] font-bold text-blue-500 mb-4'>2022</h3>
                  <h5 className='text-2xl font-bold mb-2'>First Employee</h5>
                  <p className='text-lg text-gray-500'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio vel ultricies dignissim.
                  </p>
            </div>
            <div className=' bg-white rounded-3xl py-8 px-6
                  shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]'>
                  <h3 className='text-[56px] font-bold text-blue-400 mb-4'>2023</h3>
                  <h5 className='text-2xl font-bold mb-2'>25 Employees</h5>
                  <p className='text-lg text-gray-500'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio vel ultricies dignissim.
                  </p>
            </div>
            <div className=' bg-white rounded-3xl py-8 px-6
                  shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]'>
                  <h3 className='text-[56px] font-bold text-yellow-500 mb-4'>2024</h3>
                  <h5 className='text-2xl font-bold mb-2'>100 Employees</h5>
                  <p className='text-lg text-gray-500'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio vel ultricies dignissim.
                  </p>
            </div>
      </div>
    </div>
  )
}

export default Story
