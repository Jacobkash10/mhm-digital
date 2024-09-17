import FAQ from '@/components/Pages_components/Contact/FAQ'
import Form from '@/components/Pages_components/Contact/Form'
import Office from '@/components/Pages_components/Contact/Office'
import Socials from '@/components/Pages_components/Contact/Socials'
import { db } from '@/lib/db'
import React from 'react'

const page =  async() => {

  const services = await db.service.findMany()

  return (
    <div>
      <Form services={services} />
      {/* <Office /> */}
      <FAQ />
      <Socials />
    </div>
  )
}

export default page
