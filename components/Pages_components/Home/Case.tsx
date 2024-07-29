import React from 'react'
import image1 from '@/public/images/company-logo-agencypro-x-webflow-template.svg'
import image2 from '@/public/images/enterprise-logo-agencypro-x-webflow-template.svg'
import { ArrowRight, Minus } from 'lucide-react'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import Image from 'next/image'

const Case = () => {
  return (
    <div className='px-8 xl:px-14 pt-[200px] pb-[200px] xxl:px-[10rem] xll:px-[20rem] xxx:px-[22%] lll:px-[25%]'>
      <div className='flex-col flex items-start xl:flex-row xl:items-center justify-between mb-8 xl:mb-3'>
            <div className=''>
                  <div className="flex items-center gap-2"> 
                        <Minus className='text-red-500' />
                        <h5 className="text-red-500 text-xl font-semibold"> 
                              Case Studies
                        </h5> 
                  </div>
                  <h2 className='text-3xl md:text-[44px] max-w-xl font-bold leading-tight mb-4'>
                        Not convinced? Take a look at some of our case studies
                  </h2>
            </div>
            <div>
                  <p className='text-base md:text-xl text-gray-500 max-w-xl'>
                  Lorem ipsum consectetur amet dolor sit 
                  comeneer ilremsilom dolce issilm acalrm 
                  leoinsion duycoqun consemleint lorem. 
                  Lorem ipsum consectetur amet dolor sit.
                  </p>
            </div>
      </div>
      <div className='flex flex-col lg:flex-row items-center justify-between gap-10'>
            <div className='w-full'>
                  <Card className='rounded-[50px] shadow-[0_8px_30px_rgb(0,0,0,0.12)]'>
                        <Link href={''}>
                              <div>
                              <Image src={image1} alt='image1' priority width={0} height={0} sizes='100vw' 
                                    className='rounded-t-[50px] w-full' />
                              </div>
                              <div className='p-10 w-full'>
                                    <div className="flex items-center gap-2 mb-3">
                                          <h5 className="text-red-500 text-lg font-semibold"> 
                                                Company
                                          </h5> 
                                    </div>
                                    <h2 className='text-xl sm:text-2xl max-w-xl font-bold leading-tight mb-3'>
                                    How we increased sign up rate by 56% on Creators Program
                                    </h2>
                                    <p className='text-base md:text-xl text-gray-500 max-w-xl'>
                                    Lorem ipsum consectetur amet dolor sit 
                                    comeneer ilremsilom dolce issilm acalrm 
                                    leoinsion duycoqun consemleint.
                                    </p>
                              </div>
                        </Link>
                  </Card>
            </div>
            <div className='w-full'>
                  <Card className='rounded-[50px] shadow-[0_8px_30px_rgb(0,0,0,0.12)]'>
                        <Link href={''}>
                              <div>
                              <Image src={image2} alt='image1' priority width={0} height={0} sizes='100vw' 
                                    className='rounded-t-[50px] w-full' />
                              </div>
                              <div className='p-10 w-full'>
                                    <div className="flex items-center gap-2 mb-3">
                                          <h5 className="text-red-500 text-lg font-semibold"> 
                                          Enterprise
                                          </h5> 
                                    </div>
                                    <h2 className='text-xl sm:text-2xl max-w-xl font-bold leading-tight mb-3'>
                                          How we scalated 12 positions on Enterprise App Store rankings
                                    </h2>
                                    <p className='text-base md:text-xl text-gray-500 max-w-xl'>
                                    Lorem ipsum consectetur amet dolor sit 
                                    comeneer ilremsilom dolce issilm acalrm 
                                    leoinsion duycoqun consemleint.
                                    </p>
                              </div>
                        </Link>
                  </Card>
            </div>
      </div>
      <div className='mt-16 flex flex-col items-center justify-center'>
            <div className='flex flex-col sm:flex-row items-center gap-4'>
                  <Link href={''}>
                        <button className='flex items-center gap-2 bg-red-500 text-white rounded-full px-12 py-6 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]'>
                              <h5 className='font-semibold text-base md:text-[20px]'>Get in Touch</h5>
                              <ArrowRight className='text-white' />
                        </button>
                  </Link>
                  <Link href={''}>
                        <button className=' bg-white text-red-500 rounded-full px-12 py-6  shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]'>
                              <h5 className='font-semibold text-base md:text-[20px]'>Browse Case Studies</h5>
                        </button>
                  </Link>
            </div>
      </div>
    </div>
  )
}

export default Case
