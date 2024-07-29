import { Plus } from 'lucide-react'
import React from 'react'

const Results = () => {
  return (
    <div className='bg-[#e1dfe23c] pb-[100px] pt-[150px] xl:pt-[450px] px-8 xl:px-14 xxl:px-[10rem] xll:px-[20rem] xxx:px-[22%] lll:px-[25%]'>
      <div className='text-center'>
            <p className='text-xl text-gray-500'>Our results measured in numbers:</p>
      </div>
      <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8'>
            <div className='flex flex-col items-center justify-center bg-white rounded-3xl p-8 
                  shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]'>
                  <span className='flex items-center mb-1'>
                        <h3 className='text-[48px] font-bold'>500</h3>
                        <Plus className='font-bold text-red-500' size={38} />
                  </span>
                  <p className='text-xl text-gray-500'>Happy Clients</p>
            </div>
            <div className='flex flex-col items-center justify-center bg-white rounded-3xl p-8 
                  shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]'>
                  <span className='flex items-center mb-1'>
                        <h3 className='text-[48px] font-bold'>200m</h3>
                        <Plus className='font-bold text-blue-500' size={38} />
                  </span>
                  <p className='text-xl text-gray-500'>Users Acquired</p>
            </div>
            <div className='flex flex-col items-center justify-center bg-white rounded-3xl p-8 
                  shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]'>
                  <span className='flex items-center mb-1'>
                        <h3 className='text-[48px] font-bold'>250</h3>
                        <Plus className='font-bold text-orange-400' size={38} />
                  </span>
                  <p className='text-xl text-gray-500'>Team Members</p>
            </div>
            <div className='flex flex-col items-center justify-center bg-white rounded-3xl p-8 
                  shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]'>
                  <span className='flex items-center mb-1'>
                        <h3 className='text-[48px] font-bold'>3,000</h3>
                        <Plus className='font-bold text-blue-500' size={38} />
                  </span>
                  <p className='text-xl text-gray-500'>Projects Completed</p>
            </div>
      </div>
    </div>
  )
}

export default Results
