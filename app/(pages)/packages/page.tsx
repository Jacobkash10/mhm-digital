import FAQ from '@/components/Pages_components/Contact/FAQ'
import Packages from '@/components/Pages_components/Package/Packages'
import React from 'react'

const page = () => {
  return (
    <div>
      <Packages />
      <div className='bg-[#e1dfe23c]'>
      <FAQ />
      </div>
    </div>
  )
}

export default page
