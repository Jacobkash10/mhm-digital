import React from 'react'
import { Minus } from 'lucide-react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { db } from '@/lib/db'
import CardService from '@/components/CardService'


const Services = async () => {

      const services = await db.service.findMany()

  return (
      <div className='bg-[#e1dfe252] py-[80px]'>
            
            <div className='px-4 xl:px-14 xxl:px-[10rem] xll:px-[20rem] xxx:px-[22%] lll:px-[25%] relative'>
                  <div className='pb-[140px] lg:pb-0'>
                        <div className="flex items-center gap-2 mb-3"> 
                              <Minus className='text-red-500' />
                              <h5 className="text-red-500 text-xl font-semibold"> 
                                    Our Services
                              </h5> 
                        </div>
                        <h2 className='text-3xl md:text-[44px] max-w-md md:max-w-2xl font-bold leading-snug'>
                              High-impact marketing services to grow your startup
                        </h2>
                  </div>
                  <div className='mt-6 lg:mt-0 w-full'>
                  <Carousel opts={{align: "start",}} className="max-w-full">
                        <CarouselContent>
                              {
                                    services.map((service, index) => {
                                          return (
                                                <CarouselItem className="w-full lg:basis-1/2" key={index}>
                                                      <CardService service={service} />
                                                </CarouselItem>
                                          )
                                    })
                              }
                        </CarouselContent>
                        <div className='absolute -top-[100px] left-36 lg:left-auto lg:right-16'>
                              <CarouselPrevious 
                              className='h-[70px] w-[70px] md:h-[85px] md:w-[85px] left-[-140px] md:-left-[160px] hover:bg-red-500 
                              hover:text-white shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]' />
                              <CarouselNext 
                              className='h-[70px] w-[70px] md:h-[85px] md:w-[85px] hover:bg-red-500 hover:text-white 
                              shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]' />
                        </div>
                  </Carousel>
                  </div>
            </div>
      </div>
  )
}

export default Services