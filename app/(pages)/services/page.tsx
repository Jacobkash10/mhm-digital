import { Minus } from 'lucide-react'
import React from 'react'
import Banner from '@/components/Pages_components/Services/Banner'
import { db } from '@/lib/db'
import ServiceItem from '@/components/Pages_components/Services/ServiceItem'

const page = async () => {

      const services = await db.service.findMany()

  return (
    <>
    <div className='mt-[100px] pb-[150px] px-4 xl:px-14 xxl:px-[10rem] xll:px-[20rem] xxx:px-[22%] lll:px-[25%]'>
      <div className='flex flex-col xl:flex-row xl:items-center justify-between mb-10 xl:mb-6'>
            <div className='w-full xl:w-[52%]'>
                  <div className="flex items-end gap-2"> 
                        <Minus className='text-red-500' />
                        <h5 className="text-red-500 text-xl font-semibold"> 
                              Our Services
                        </h5> 
                  </div>
                  <h2 className='text-3xl md:text-[55px] font-bold leading-tight mb-4'>
                  High-impact services
                  </h2>
            </div>
      </div>
      <div className='flex flex-col lg:grid grid-cols-2 grid-rows-2 gap-10'>
            {
                  services.map((service, index) => (
                  <div key={index}>
                        <ServiceItem service={service} />
                  </div> 
            ))}     
      </div>
    </div>
    <Banner />
    </>
  )
}

export default page