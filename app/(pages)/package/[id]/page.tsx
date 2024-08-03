import PackService from '@/components/Pages_components/PackService/PackService'
import { db } from '@/lib/db'
import React from 'react'

const page = async ({ params }: { params: { id: string } }) => {
      const {id} = params

      const servicePack = await db.package.findFirstOrThrow({
            where: {
                  id: id
            },
            include: {
                  service: true
            }
      })

  return (
    
    <>
      <PackService servicePack={servicePack} />
    </>
  )
}

export default page
