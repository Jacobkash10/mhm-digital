import { User } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const SignInButton = () => {
  return (
    <>
      <Link href={'/connexion'} className='hidden xl:flex hover:text-red-500 duration-300 text-base underline font-bold gap-1 items-start'>
            <User/><span>Sign in</span>
      </Link>
    </>
  )
}

export default SignInButton
