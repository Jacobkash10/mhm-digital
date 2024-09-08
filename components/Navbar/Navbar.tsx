import Link from 'next/link'
import NavNormal from './NavNormal';
import NavMobile from './NavMobile';
import ContactButton from './componentsNav/ContactButton';
import UserOrSignIn from './componentsNav/UserOrSignIn';
import CartItem from './componentsNav/CartItem';
import { db } from '@/lib/db';
import DataCart from './componentsNav/DataCart';
import Image from 'next/image';
import image1 from '@/public/images/3.svg'

const Navbar = async () => { 

      const carts = await db.cart.findMany({
            include: {
                  package: true
            }
      })
  return (
      <div>
            <div className='flex items-center justify-between px-4 xl:px-14 py-8 xxl:px-[10rem] xll:px-[20rem] xxx:px-[22%] lll:px-[25%]'>
                  <div className='w-[50%] sm:w-[45%] md:w-[35%] lg:w-[25%]'> 
                        <Link className='text-[22px] sm:text-[28px] font-bold flex items-center gap-1' href={'/'}>
                              <Image src={image1} alt='image1' priority width={0} height={0} sizes='100vw'
                                    className='w-[15%]' />
                              MHM Digital
                        </Link>
                  </div>
                  <NavNormal />
                  <div className='flex items-center gap-4'>
                        <DataCart carts={carts} />
                        <ContactButton />
                        <UserOrSignIn />
                        <NavMobile />
                  </div> 
            </div>
            
      </div>
  )
}

export default Navbar