"use client"

import React from 'react'
import UserButton from '../UserButton'
import SignInButton from '../SignInButton'
import { useSession } from "next-auth/react";

const UserOrSignIn = () => {

  const session = useSession()
  const user = session.data?.user

  return (
    <>
      { user && <UserButton user={user} />}
      { !user && session.status !== "loading" && <SignInButton /> }
    </>
  )
}

export default UserOrSignIn
