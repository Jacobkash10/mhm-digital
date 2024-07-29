import { db } from '@/lib/db'
import { Minus } from 'lucide-react'
import Image from 'next/image'
import image1 from '@/public/images/icon-1-service-marketing-template.svg'
import image2 from '@/public/images/image-1-service-hero-marketing-template.svg'
import Packages from '@/components/Pages_components/OneService/Packages'

const page = async ({ params }: { params: { id: string } }) => {
      const {id} = params
      
      const service = await db.service.findFirstOrThrow({
            where: {
                  id: id
            },
            include: {
                  packages: true
            }
      })
  return (
    <div className='py-[80px] px-8 xl:px-14 xxl:px-[10rem] xll:px-[20rem] xxx:px-[22%] lll:px-[25%]'>
      <div className='flex-col xl:flex-row flex items-start justify-between gap-10'>
            <div className='flex flex-col items-center justify-center w-full gap-8 mt-16 xl:items-start xl:w-[50%]'>
                  <div className="flex items-center gap-2"> 
                        <Minus className='text-red-500' />
                        <h5 className="text-red-500 text-xl font-semibold"> 
                              Service
                        </h5> 
                  </div>
                  <h2 className='text-3xl md:text-[44px] max-w-md md:max-w-xl font-bold leading-tight'>
                        {service.name || 'Default name'}
                  </h2>
                  <Image src={image1} alt='image1' priority width={0} height={0} sizes='100vw' 
                  className='rounded-3xl' />
                  <p className='text-xl text-center xl:text-left text-gray-500 font-semibold leading-9'>
                        {service.description || 'Default description'}
                  </p>
            </div>
            <div className='m-auto w-[50%] flex flex-col justify-center items-center xl:block'>
                  <Image src={image2} alt='image1' priority width={0} height={0} sizes='100vw' 
                        className='w-full' />
            </div>
      </div>
      <Packages service={service?.packages} />
    </div>
  )
}

export default page
