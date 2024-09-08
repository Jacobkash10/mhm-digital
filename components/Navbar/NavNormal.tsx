"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavNormal = () => {
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

  return (
      <div className='hidden xl:flex items-center gap-7 text-[16px]'>
            {links.map((link, index) => (
                  <Link key={index} href={link.path} className={`${link.path === pathName && "text-accent border-b-2 border-accent"}
                  capitalize font-medium hover:text-accent transition-all
                  `}>
                        <h5>{link.name}</h5>
                  </Link>
            ))}
      </div>
  )
}

export default NavNormal
