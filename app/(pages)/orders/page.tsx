import { db } from '@/lib/db'
import React from 'react'

const page = async () => {

  // const orders = await db.order.findMany({
  //   include: {
  //     packages: true,
  //     client: true,
  //   }
  // })

  const orderPack = await db.orderPackage.findMany({
    include: {
      order: {
        include: {
          user: true
        }
      },
      package: {
        include: {
          service: true,
          orders: true
        }
      }
    }
  })

  return (
    <div className='pt-[100px] pb-[100px] px-4 xl:px-14 xxl:px-[10rem] xll:px-[25rem]'>
      <div className='w-full px-8 py-5 border'>
        <h1 className='text-3xl md:text-[40px] font-bold leading-tight mb-3 xl:max-w-xl'>
            Orders
        </h1>
        <div className='mt-10'>
          <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                          <th scope="col" className="px-6 py-3">
                              Name
                          </th>
                          <th scope="col" className="px-6 py-3">
                              Email
                          </th>
                          <th scope="col" className="px-6 py-3">
                              Name service
                          </th>
                          <th scope="col" className="px-6 py-3">
                              Name package
                          </th>
                          <th scope="col" className="px-6 py-3">
                              Package duration
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
                      orderPack.map((order) => (
                        <tr key={order.orderId} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 
                        even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {order.order.user.name}
                            </td>
                            <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {order.order.user.email}
                            </td>
                            <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {order.package.service?.name}
                            </td>
                            <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {order.package.name}
                            </td>
                            <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {order.order.price === order.package.priceByMonth ? '1 Month' : 'No package duration'}
                            </td>
                            <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {order.package.orders.length}
                            </td>
                            <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                $ {order.order.price}.00
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
