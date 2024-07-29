import { ArrowRight, Minus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import image1 from '@/public/images/icon-1-service-marketing-template.svg'
import image2 from '@/public/images/icon-2-service-marketing-template.svg'
import image3 from '@/public/images/icon-3-service-marketing-template.svg'
import image4 from '@/public/images/icon-4-service-marketing-template.svg'
import Image from 'next/image'
import Banner from '@/components/Pages_components/Services/Banner'
import { db } from '@/lib/db'

const page = async () => {

      const services = await db.service.findMany()

  return (
    <>
    <div className='mt-[100px] pb-[150px] px-8 xl:px-14 xxl:px-[10rem] xll:px-[20rem] xxx:px-[22%] lll:px-[25%]'>
      <div className='flex flex-col xl:flex-row xl:items-center justify-between mb-10 xl:mb-3'>
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
            <div className='w-full xl:w-[48%]'>
                  <p className='text-lg text-gray-500'>
                        Lorem ipsum consectetur amet dolor sit comeneer ilremsilom dolce issilm acalrm leoinsion duycoqun.
                  </p>
            </div>
      </div>
      <div className='flex flex-col lg:grid grid-cols-2 grid-rows-2 gap-10'>
            {
                  services.map((service, index) => (
                  <div key={index}>
                        <Link href={`/service/${service.id}`} className='flex flex-col xl:flex-row items-start gap-4 xl:gap-1 border rounded-[50px]
                        bg-white px-10 py-12 shadow-[0_8px_30px_rgb(0,0,0,0.12)]'>
                              <div className='w-[40%]'>
                                    <Image src={image1} alt='image1' priority width={0} height={0} sizes='100vw' 
                                    className='rounded-3xl' />
                              </div>
                              <div className='w-[100%]'>
                                    <h4 className='text-3xl font-bold mb-3'>{service.name || 'Default name'}</h4>
                                    <p className='text-base text-gray-500 mb-5'>
                                          {service.description || 'Default description'}
                                    </p>
                                    <h5 className='flex items-center gap-2 text-lg font-bold'>
                                          Learn More
                                          <ArrowRight size={18} />
                                    </h5>
                              </div>
                        </Link>
                  </div> 
            ))}     
      </div>
    </div>
    <Banner />
    </>
  )
}

export default page