import PackageService from '@/components/Pages_components/PackService/PackageService'
import { db } from '@/lib/db'
import { Package } from '@/types/carts'
import React from 'react'

const page = async ({ params }: { params: { id: string } }) => {
      const {id} = params

      const servicePack = await db.package.findFirstOrThrow({
            where: {
                  id: id
            },
            include: {
                  service: true,
            }
      })

      if (!servicePack.service) {
            servicePack.service = null
      }

  return (
    
    <>
      <PackageService servicePack={servicePack as Package} />
    </>
  )
}

export default page
