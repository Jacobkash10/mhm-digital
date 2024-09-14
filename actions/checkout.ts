"use server"

import * as z from 'zod'
import { checkoutSchema } from '@/schemas'
import { db } from '@/lib/db'
import getSession from "@/lib/getSession";

export const checkOut = async (values: z.infer<typeof checkoutSchema>) => {
      // Récupérer la session de l'utilisateur
      const session = await getSession();

      // Si l'utilisateur n'est pas connecté, retourner une erreur
      if (!session) {
          return { error: "User not authenticated!" };
      }

      const validateFields = checkoutSchema.safeParse(values)

      if(!validateFields.success) {
            return {error: "Invalid fields!"}
      }

      const {name, email, phoneNumber, packageIds, price} = validateFields.data

      const existingUser = await db.user.upsert({
            where: { email },
            update: { name, phoneNumber },
            create: { name, phoneNumber, email }
      });

      // Crée des objets OrderPackage avec les identifiants des paquets
      const packagesData = packageIds.map(packageId => ({
            package: { connect: { id: packageId } }
      }))

      await db.order.create({
            data: {
                  price,
                  userId: existingUser.id,
                  packages: {
                        create: packagesData
                  }
            }
      })
}