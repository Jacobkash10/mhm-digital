import Credentials from 'next-auth/providers/credentials'
import Google from 'next-auth/providers/google'
import Github from 'next-auth/providers/github'
import bcrypt from 'bcrypt'

import type { NextAuthConfig } from 'next-auth'

import { loginSchema } from '@/schemas'
import { getUserByEmail } from '@/data/user'

export default {
      providers: [
            Google({
                  clientId: process.env.GOOGLE_CLIENT_ID,
                  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            }),
            Github({
                  clientId: process.env.GITHUB_CLIENT_ID,
                  clientSecret: process.env.GITHUB_CLIENT_SECRET,
            }),
            Credentials({
                  async authorize(credentials) {
                        const validateFields = loginSchema.safeParse(credentials)

                        if (validateFields.success) {
                              const {email, password} = validateFields.data

                              const user = await getUserByEmail(email)
                              if (!user || !user?.password) return null

                              const passwordMatch = await bcrypt.compare(password, user.password)

                              if (passwordMatch) return user
                        }

                        return null
                  }
            })
      ]
} satisfies NextAuthConfig