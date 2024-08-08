import Link from 'next/link'
import NavNormal from './NavNormal';
import NavMobile from './NavMobile';
import ContactButton from './componentsNav/ContactButton';
import UserOrSignIn from './componentsNav/UserOrSignIn';
import CartItem from './componentsNav/CartItem';
import { db } from '@/lib/db';
import DataCart from './componentsNav/DataCart';

const Navbar = async () => { 

      const carts = await db.cart.findMany({
            include: {
                  package: true
            }
      })
  return (
      <div>
            <div className='flex items-center justify-between px-4 xl:px-14 py-8 xxl:px-[10rem] xll:px-[20rem] xxx:px-[22%] lll:px-[25%]'>
                  <div className='flex items-center gap-1'>
                        <h5 className='w-10 h-10 bg-red-500 rounded-xl 
                        shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] 
                        flex flex-col items-center justify-center text-white font-bold'>
                        M
                        </h5>
                        <Link className='text-[22px] sm:text-[28px] font-semibold' href={'/'}>Mhm Digital</Link>
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