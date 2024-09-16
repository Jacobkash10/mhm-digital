"use client"

import { User } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const SignInButton = () => {

  const pathName = usePathname()
  const link = [
    {
      name: "Sign in",
      path: "/connexion"
    }
  ]

  return (
    <>
      {
        link.map((item, index) => (
          <Link key={index} href={item.path} 
            className={`${pathName === item.path && "text-red-500 border border-slate-200 rounded-md p-2"} 
            hidden xl:flex hover:text-red-500 duration-300 text-base font-bold gap-1 items-start`}>
                <User/><span>{item.name}</span>
          </Link>
        ))
      }
    </>
  )
}

export default SignInButton
