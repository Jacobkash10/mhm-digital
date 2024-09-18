"use server";

import { auth } from "@/auth";
import { db } from '@/lib/db'
import { UpdateProfileValues, updateProfileSchema } from "@/lib/validation";
import { revalidatePath } from "next/cache";


export async function updateProfile(values: UpdateProfileValues) {
  const session = await auth()
  const userId = session?.user?.id

  if(!userId) {
    throw Error('Unauthorized')
  }

  const { name, phoneNumber, shippingAddress, billingAddress, company } = updateProfileSchema.parse(values);

  await db.user.update({
    where: {
      id: userId
    },
    data: {
      name,
      billingAddress,
      phoneNumber,
      shippingAddress,
      company,
    }
  })

  revalidatePath('/')
}
