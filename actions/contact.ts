"use server"

import * as z from 'zod'
import bcrypt from 'bcrypt'

import { contactSchema } from '@/schemas'
import { db } from '@/lib/db'
import { getUserByEmail } from '@/data/user'

export const contact = async (values: z.infer<typeof contactSchema>) => {
      const validateFields = contactSchema.safeParse(values)

      if(!validateFields.success) {
            return {error: "Invalid fields!"}
      }

      const { email, name, phoneNumber, service, description, company } = validateFields.data

      // const existingUser = await getUserByEmail(email);

      // if (existingUser) {
      //       return { error: "Email already in use!"}
      // }

      await db.contact.create({
            data: {
                  name,
                  email,
                  phoneNumber,
                  service,
                  description,
                  company
            }
      });

      return {success: "User created!"}
}