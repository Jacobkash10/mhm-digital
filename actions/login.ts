"use server"

import * as z from 'zod'
import { AuthError } from 'next-auth'

import { loginSchema } from '@/schemas'
import { signIn } from '@/auth'
import { DEFAULT_LOGIN_REDERICT } from '@/routes'

export const login = async (values: z.infer<typeof loginSchema>) => {
      const validateFields = loginSchema.safeParse(values)

      if(!validateFields.success) {
            return {error: "Invalid fields!"}
      }

      const {email, password} = validateFields.data

      try {
            await signIn("credentials", {
                  email,
                  password,
                  redirectTo: DEFAULT_LOGIN_REDERICT
            })
      } catch (error) {
            if (error instanceof AuthError) {
                  switch(error.type) {
                        case "CredentialsSignin":
                              return { error: "Invalid credentials" }
                        default:
                              return { error: "Il y'a un problème" }
                  }
            }

            throw error
      }
}