"use client"

import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'
import { RiCloseFill, RiMenu3Fill } from "react-icons/ri";
import Link from 'next/link'

const NavMobile = () => {

      const links = [
            {
                  name: "home",
                  path: "/"
            },
            {
                  name: "about",
                  path: "/about"
            },
            {
                  name: "services",
                  path: "/services"
            },
            {
                  name: "case studies",
                  path: "/case-studies"
            },
      ]
      const pathName = usePathname()

      const [open, setOpen] = useState<Boolean>(false)

      const toggle = () => {
      setOpen(!open)
      }

  return (
    <div className='xl:hidden'>
      <button className='w-8 h-8 sm:w-12 sm:h-12 md:w-[3.6rem] md:h-[3.6rem] rounded-full flex items-center justify-center bg-red-500 text-white 
      shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]'>
            <div onClick={toggle}>
                  {
                        open ? <RiCloseFill color='white' className='text-xl sm:text-2xl' /> : 
                        <RiMenu3Fill color='white' className='text-xl sm:text-2xl' />
                  }
                  
            </div>
      </button>
      <div className={`absolute shadow-sm transition-all duration-500 
            ${open ? 'top-[8rem] bg-white h-screen left-0 bottom-0 z-50 transition-all duration-500 ease-in-out right-0' 
            : 'top-[-600px] left-0 right-0'}`}>
            <hr />
            <div className='px-8 flex flex-col items-start justify-start gap-10 py-24'>
            {links.map((link, index) => (
                  <Link key={index} href={link.path} className={`${link.path === pathName && "text-accent border-b-2 border-accent"}
                  capitalize font-medium hover:text-accent transition-all w-fit text-2xl
                  `}>
                        <h5>{link.name}</h5>
                  </Link>
            ))}
            <Link href={'/contact'} className='md:hidden'>
                  <button className='flex items-center gap-2
                   bg-red-500 text-white
                    rounded-full px-8 py-4
                    shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]
                    
                    '
                    >
                        <h5 className='font-semibold text-[16px]'>Get in Touch</h5>
                        <ArrowRight className='text-white' />
                  </button>
            </Link>
            </div>
      </div>
    </div>
  )
}

export default NavMobile
