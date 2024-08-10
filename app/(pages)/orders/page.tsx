import { db } from '@/lib/db'
import React from 'react'

const page = async () => {

  const orders = await db.order.findMany({
    include: {
      packages: true,
      client: true
    }
  })

  return (
    <div className='pt-[100px] pb-[100px] px-4 xl:px-14 xxl:px-[10rem] xll:px-[25rem]'>
      <div className='w-full px-8 py-20 border'>
        <h1 className='text-3xl md:text-[40px] font-bold leading-tight mb-3 xl:max-w-xl'>
            Orders
        </h1>
        <div className='mt-10'>
          

          <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                          <th scope="col" className="px-6 py-3">
                              First name
                          </th>
                          <th scope="col" className="px-6 py-3">
                              Last name
                          </th>
                          <th scope="col" className="px-6 py-3">
                              Quantity
                          </th>
                          <th scope="col" className="px-6 py-3">
                              Price
                          </th>
                      </tr>
                  </thead>
                  <tbody>
                    {
                      orders.map((order) => (
                        <tr key={order.id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 
                        even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {order.client.firstName}
                            </td>
                            <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {order.client.lastName}
                            </td>
                            <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {order.packages.length}
                            </td>
                            <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                $ {order.price}.00
                            </td>
                        </tr>
                      ))
                    }
                  </tbody>
              </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
