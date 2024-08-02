import Link from 'next/link'
import React from 'react'

const SignInButton = () => {
  return (
    <>
      <Link href={'/connexion'} className='hidden xl:flex hover:text-red-500 duration-300 text-base underline font-bold'>
            Sign in
      </Link>
    </>
  )
}

export default SignInButton
