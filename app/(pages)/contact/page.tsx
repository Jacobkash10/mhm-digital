import FAQ from '@/components/Pages_components/Contact/FAQ'
import Form from '@/components/Pages_components/Contact/Form'
import Office from '@/components/Pages_components/Contact/Office'
import Socials from '@/components/Pages_components/Contact/Socials'
import React from 'react'

const page = () => {
  return (
    <div>
      <Form />
      <Office />
      <FAQ />
      <Socials />
    </div>
  )
}

export default page
