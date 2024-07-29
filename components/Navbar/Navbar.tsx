"use client"

import Link from 'next/link'
import React from 'react'
import { ArrowRight } from 'lucide-react';
import { Cart } from '../Cart';
import { useSession } from "next-auth/react";
import UserButton from './UserButton';
import NavNormal from './NavNormal';
import NavMobile from './NavMobile';

const Navbar = () => {
      const session = useSession()
      const user = session.data?.user

  return (
    <div className='flex items-center justify-between px-8 xl:px-14 py-10 xxl:px-[10rem] xll:px-[20rem] xxx:px-[22%] lll:px-[25%]'>
      <div className='flex items-center gap-3'>
            <h5 className='w-9 h-9 bg-red-500 rounded-xl 
            shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] 
            flex flex-col items-center justify-center text-white font-bold'>
            M
            </h5>
            <Link className='text-[18px] sm:text-[28px] font-semibold' href={'/'}>Mhm Digital</Link>
      </div>
      <NavNormal />
      <div className='flex items-center gap-6'>
            <Cart />
            <Link href={'/contact'} className='hidden md:block'>
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
            { user && <UserButton user={user} />}
            { !user && session.status !== "loading" && <SignInButton /> }
            <NavMobile />
      </div>
    </div>
  )
}

export default Navbar

function SignInButton() {
      return <Link href={'/connexion'} className='hover:text-red-500 duration-300 text-base underline font-bold'>
                   Sign in
            </Link>
    }