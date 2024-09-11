import { db } from '@/lib/db'
import Packages from '@/components/Pages_components/OneService/Packages'
import Service from '@/components/Pages_components/OneService/Service'

const page = async ({ params }: { params: { id: string } }) => {
      const {id} = params
      
      const service = await db.service.findFirstOrThrow({
            where: {
                  id: id
            },
            include: {
                  packages: true,
                  subServices: {
                        include: {
                              packages: true
                        }
                  }
            }
      })
  return (
    <div className='py-[80px] px-4 xl:px-14 xxl:px-[10rem] xll:px-[20rem] xxx:px-[22%] lll:px-[25%]'>
      <Service service={service} />
      <Packages service={service?.packages} subServices={service?.subServices} />
    </div>
  )
}

export default page
