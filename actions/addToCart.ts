"use server"

import * as z from 'zod'
import { addToCartSchema } from '@/schemas'
import { db } from '@/lib/db'
import { getSession } from 'next-auth/react'

export const addToCart = async (values: z.infer<typeof addToCartSchema>) => {
      const validateFields = addToCartSchema.safeParse(values)

      if(!validateFields.success) {
            return {error: "Invalid fields!"}
      }

      const { quantity, packageId, packageDuration } = validateFields.data

      // Vérifiez si le package existe
      const pack = await db.package.findFirstOrThrow({
      where: { id: packageId },
      });

      if (!pack) {
       return { error: 'Package not found' }
      }

      await db.cart.create({
                    data: {
                      packageId,
                      quantity,
                      packageDuration
                    },
                  });
      
            return {success: 'Add to cart'};
}



// // Récupérez la session de l'utilisateur
// const session = await getSession();

// if (session?.user) {
//       // Si l'utilisateur est connecté, ajoutez au panier de l'utilisateur
//       const userId = session.user.id;

//       await db.cart.create({
//         data: {
//           userId,
//           packageId,
//           quantity,
//         },
//       });

//       return {success: 'Add to cart'};
//     } else {
//       // Si l'utilisateur n'est pas connecté, ajoutez au panier temporaire
//       await db.cart.create({
//         data: {
//           packageId,
//           quantity,
//         },
//       });