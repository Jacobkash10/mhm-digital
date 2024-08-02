"use client"

import { Facebook, Github, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import {motion} from 'framer-motion'
import { fadeIn } from '../../../variants'

const Socials = () => {
  return (
      <div className='pb-[100px] px-4 xl:px-14 xxl:px-[10rem] xll:px-[20rem] xxx:px-[22%] lll:px-[25%]'>
            <div className='flex flex-col items-center justify-center'>
                  <h5 className="text-red-500 text-xl font-semibold">               
                        Follow Us
                  </h5> 
                  <h2 className='text-3xl md:text-[45px] font-semibold leading-tight mb-4 text-center max-w-2xl'>
                        Follow us for great content on growth marketing
                  </h2>
                  <div className='grid grid-cols-3 grid-rows-3 xs:grid-rows-2 md:grid-cols-5 md:grid-rows-1 gap-10 mt-10'>
                        <motion.div
                        variants={fadeIn("up", 0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.2 }} 
                        className='rounded-3xl bg-blue-500 p-7 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]'>
                              <Link href={''} target='_blank'>
                                    <Linkedin size={36} className='text-white' />
                              </Link>
                        </motion.div>
                        <motion.div 
                        variants={fadeIn("up", 0.7)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.2 }} 
                        className='rounded-3xl bg-blue-600 p-7 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]'>
                              <Link href={''} target='_blank'>
                                    <Facebook size={36} className='text-white' />
                              </Link>
                        </motion.div>
                        <motion.div 
                        variants={fadeIn("up", 1.1)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.2 }}
                        className='rounded-3xl bg-blue-400 p-7 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]'>
                              <Link href={''} target='_blank'>
                                    <Twitter size={36} className='text-white' />
                              </Link>
                        </motion.div>
                        <motion.div
                        variants={fadeIn("up", 1.5)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.2 }} 
                        className='rounded-3xl bg-red-600 p-7 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]'>
                              <Link href={''} target='_blank'>
                                    <Youtube size={36} className='text-white' />
                              </Link>
                        </motion.div>
                        <motion.div
                        variants={fadeIn("up", 1.9)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.2 }} 
                        className='rounded-3xl bg-black p-7 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]'>
                              <Link href={''} target='_blank'>
                                    <Instagram size={36} className='text-white' />
                              </Link>
                        </motion.div>
                  </div>
            </div>
      </div>
  )
}

export default Socials