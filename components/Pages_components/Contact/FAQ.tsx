"use client"

import { Minus } from 'lucide-react'
import React from 'react'
import {
      Accordion,
      AccordionContent,
      AccordionItem,
      AccordionTrigger,
    } from "@/components/ui/accordion"
import {motion} from 'framer-motion'
import { fadeIn } from '../../../variants'

const FAQ = () => {
  return (
    <div className='py-[100px] px-4 xl:px-14 xxl:px-[10rem] xll:px-[20rem] xxx:px-[22%] lll:px-[25%]'>
      <div className='flex flex-col xl:flex-row xl:items-center justify-between gap-5 mb-10'>
            <div className='w-full xl:w-[52%]'>
                  <div className="flex items-end gap-2"> 
                        <Minus className='text-red-500' />
                        <h5 className="text-red-500 text-xl font-semibold">               
                        FAQs
                        </h5> 
                  </div>
                  <h2 className='text-[45px] font-bold leading-tight mb-4'>
                  Frequently Asked Questions
                  </h2>
            </div>
            <div className='w-full xl:w-[48%]'>
                  <p className='text-lg text-gray-500'>
                  Lorem ipsum dolor sit amet, consecteturor adipiscing elit. 
                  Tincidunt donec vulputate ipsum erat urna auctor.
                  </p>
            </div>
      </div>
      <motion.div 
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6'>
            <div>
                  <Accordion type="single" collapsible 
                  className="w-full bg-white
                  shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]
                  rounded-3xl
                  p-5
                  ">
                  <AccordionItem value="item-1">
                        <AccordionTrigger className='text-lg md:text-xl font-semibold'>Is it accessible?</AccordionTrigger>
                        <AccordionContent className='text-gray-500 text-base md:text-lg'>
                        Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                  </AccordionItem>
                  </Accordion>
            </div>
            <div>
                  <Accordion type="single" collapsible 
                  className="w-full bg-white
                  shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]
                  rounded-3xl
                  p-5
                  ">
                  <AccordionItem value="item-1">
                        <AccordionTrigger className='text-lg md:text-xl font-semibold'>Is it accessible?</AccordionTrigger>
                        <AccordionContent className='text-gray-500 text-base md:text-lg'>
                        Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                  </AccordionItem>
                  </Accordion>
            </div>
      </motion.div>
      <motion.div 
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6'>
            <div>
                  <Accordion type="single" collapsible 
                  className="w-full bg-white
                  shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]
                  rounded-3xl
                  p-5
                  ">
                  <AccordionItem value="item-1">
                        <AccordionTrigger className='text-lg md:text-xl font-semibold'>Is it accessible?</AccordionTrigger>
                        <AccordionContent className='text-gray-500 text-base md:text-lg'>
                        Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                  </AccordionItem>
                  </Accordion>
            </div>
            <div>
                  <Accordion type="single" collapsible 
                  className="w-full bg-white
                  shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]
                  rounded-3xl
                  p-5
                  ">
                  <AccordionItem value="item-1">
                        <AccordionTrigger className='text-lg md:text-xl font-semibold'>Is it accessible?</AccordionTrigger>
                        <AccordionContent className='text-gray-500 text-base md:text-lg'>
                        Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                  </AccordionItem>
                  </Accordion>
            </div>
      </motion.div>
    </div>
  )
}

export default FAQ