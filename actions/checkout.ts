"use server"

import * as z from 'zod'
import { checkoutSchema } from '@/schemas'
import { db } from '@/lib/db'

export const checkOut = async (values: z.infer<typeof checkoutSchema>) => {
      const validateFields = checkoutSchema.safeParse(values)

      if(!validateFields.success) {
            return {error: "Invalid fields!"}
      }

      const {firstName, lastName, email, phoneNumber, packageIds, price} = validateFields.data

      const existingClient = await db.client.upsert({
            where: { email },
            update: { firstName, lastName, phoneNumber },
            create: { firstName, lastName, phoneNumber, email }
      });

      // Crée des objets OrderPackage avec les identifiants des paquets
      const packagesData = packageIds.map(packageId => ({
            package: { connect: { id: packageId } }
      }))

      await db.order.create({
            data: {
                  price,
                  clientId: existingClient.id,
                  packages: {
                        create: packagesData
                  }
            }
      })
}