import Image from 'next/image'
import React from 'react'
import image1 from '@/public/images/icon-1-contact-marketing-template.svg'
import image2 from '@/public/images/icon-2-contact-marketing-template.svg'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, Building, Mail, Smartphone, User, UserRound } from 'lucide-react'
import Link from 'next/link'

const Contact = () => {
  return (
      <div className='px-8 xl:px-14 pb-[180px] xxl:px-[10rem] xll:px-[20rem] xxx:px-[22%] lll:px-[25%]'>
            <hr />
            <div className='pt-[150px] flex flex-col xl:flex-row items-center justify-between gap-10'>
                  <div className='w-full xl:w-[48%]'>
                        <div className="mb-3">
                              <h5 className="text-red-500 text-xl font-semibold"> 
                              Request a Quote
                              </h5> 
                        </div>
                        <h1 className='text-[32px] sm:text-[44px] font-bold leading-tight mb-3'>
                        Get in touch today!
                        </h1>
                        <p className='text-base sm:text-xl text-gray-500 mb-10'>
                        Lorem ipsum consectetur amet dolor sit comeneer ilremsilom dolce issilm acalrm leoinsion duycoqun consemleint lorem.
                        </p>
                        <div className='flex items-center gap-3'>
                              <Image src={image1} alt='image1' priority width={0} height={0} sizes='100vw' 
                              className='rounded-xl' />
                              <h5 className='text-lg font-semibold'>contact@mhmdigital.com</h5>
                        </div>
                        <div className='flex items-center gap-3 pt-6'>
                              <Image src={image2} alt='image1' priority width={0} height={0} sizes='100vw' 
                              className='rounded-xl' />
                              <h5 className='text-xl'>(487) 870 - 0710</h5>
                        </div>
                        </div>
                  <div className='w-full xl:w-[52%]'>
                        <form className='px-8 py-20 border rounded-[50px] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)]'>
                              <div className='flex flex-col sm:flex-row items-center justify-between gap-5 mb-7'>
                                    <div className='w-full flex items-center justify-between border rounded-full p-3 gap-2'>
                                          <Input placeholder='Full Name' className='border-none rounded-full text-xl placeholder:text-base' />
                                          <UserRound className='text-gray-400' size={36} />
                                    </div>
                                    <div className='w-full flex items-center justify-between border rounded-full p-3 gap-2'>
                                          <Input placeholder='Email' className='border-none rounded-full text-xl placeholder:text-base' />
                                          <Mail className='text-gray-400' size={36} />
                                    </div>
                              </div>
                              <div className='flex flex-col sm:flex-row items-center justify-between gap-5 mb-7'>
                                    <div className='w-full flex items-center justify-between border rounded-full p-3 gap-2'>
                                          <Input placeholder='Phone Number' className='border-none rounded-full text-xl placeholder:text-base' />
                                          <Smartphone className='text-gray-400' size={36} />
                                    </div>
                                    <div className='w-full flex items-center justify-between border rounded-full p-3 gap-2'>
                                          <Input placeholder='Company Name' className='border-none rounded-full text-xl placeholder:text-base' />
                                          <Building className='text-gray-400' size={36} />
                                    </div>
                              </div>
                              <div className='flex flex-col sm:flex-row items-center justify-between gap-5 mb-7'>
                                    <div className='w-full flex items-center justify-between border rounded-full p-3 gap-2'>
                                          <Input placeholder='Service' className='border-none rounded-full text-xl placeholder:text-base' />
                                    </div>
                                    <div className='w-full flex items-center justify-between border rounded-full p-3 gap-2'>
                                          <Input placeholder='Budget' className='border-none rounded-full text-xl placeholder:text-base' />
                                    </div>
                              </div>
                              <div className='mb-7'>
                                    <Textarea placeholder='Describe your project...' className='rounded-3xl pt-5 pb-20 px-6 text-xl placeholder:text-base' />
                              </div>
                              <div>
                                    <Link href={''}>
                                          <button className='flex items-center gap-2 bg-red-500 text-white rounded-full px-10 py-6 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]'>
                                                <h5 className='font-semibold text-base sm:text-[20px]'>Get in Touch</h5>
                                                <ArrowRight className='text-white' />
                                          </button>
                                    </Link>
                              </div>
                        </form>
                  </div>
            </div>
      </div>
  )
}

export default Contact