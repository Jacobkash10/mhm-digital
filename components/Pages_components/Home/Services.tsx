import React from 'react'
import Image from 'next/image'
import { ArrowRight, Minus } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import image1 from '@/public/images/icon-1-service-marketing-template.svg'
import image2 from '@/public/images/icon-2-service-marketing-template.svg'
import image3 from '@/public/images/icon-3-service-marketing-template.svg'
import image4 from '@/public/images/icon-4-service-marketing-template.svg'
import Link from 'next/link'
import { db } from '@/lib/db'


const Services = async () => {

      const services = await db.service.findMany()

  return (
      <div className='bg-[#e1dfe23c] pb-[200px]'>
            
            <div className='pt-[200px] px-8 xl:px-14 xxl:px-[10rem] xll:px-[20rem] xxx:px-[22%] lll:px-[25%] relative'>
                  <div className='pb-[140px] lg:pb-0'>
                        <div className="flex items-center gap-2 mb-3"> 
                              <Minus className='text-red-500' />
                              <h5 className="text-red-500 text-xl font-semibold"> 
                                    Our Services
                              </h5> 
                        </div>
                        <h2 className='text-3xl md:text-[44px] max-w-md md:max-w-xl font-bold leading-tight'>
                              High-impact marketing services to grow your startup
                        </h2>
                  </div>
                  <div className='mt-10 w-full'>
                  <Carousel
                        opts={{
                        align: "start",
                        }}
                        className="max-w-full"
                  >
                        <CarouselContent>
                              {
                                    services.map((service, index) => (
                                    <CarouselItem className="w-full xl:basis-1/2" key={index}>
                                          <div className="p-1">
                                          <Card className='rounded-[50px] bg-white'>
                                                <Link href={`/service/${service.id}`}>
                                                      <CardContent className="px-10 py-14 ">
                                                            <div className='flex flex-col gap-5 lg:flex lg:flex-row items-start lg:gap-1'>
                                                                  <div className='w-[40%]'>
                                                                        <Image src={image1} alt='image1' priority width={0} height={0} sizes='100vw' 
                                                                        className='rounded-3xl' />
                                                                  </div>
                                                                  <div className='w-[100%]'>
                                                                        <h4 className='text-3xl font-bold mb-3'>{service.name || 'Lorem'}</h4>
                                                                        <p className='text-[17.5px] font-semibold text-gray-500 mb-5 leading-8'>
                                                                              {service.description || 'Lorem ipsum'}
                                                                        </p>
                                                                        <h5 className='flex items-center gap-2 text-lg font-bold'>
                                                                              Learn More
                                                                              <ArrowRight size={18} />
                                                                        </h5>
                                                                  </div>
                                                            </div>
                                                      </CardContent>
                                                </Link>
                                          </Card>
                                          </div>
                                    </CarouselItem>
                                    ))
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