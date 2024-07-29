"use client"

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link"
import { FaCartShopping } from "react-icons/fa6"

export function Cart() {
  return (
    <Sheet>
      <SheetTrigger asChild className="hover:bg-[#dbcdcd82] transition-all
            duration-300">
        <div className='relative cursor-pointer w-8 h-8
            sm:w-12 sm:h-12 rounded-xl flex flex-col 
            justify-center items-center
            shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]'
            >
              <i><FaCartShopping className='text-red-500 text-lg sm:text-3xl' /></i>
              <h5 className='absolute text-xs font-semibold -top-2 
              -right-2 bg-red-500 text-white px-[5.5px] py-[1px] rounded-full'>0</h5>
        </div>
      </SheetTrigger>
      <SheetContent className="w-[60%]">
        <SheetHeader>
          <SheetTitle className="text-2xl font-bold">Your Cart</SheetTitle>
          <hr />
        </SheetHeader>
        <div className="flex flex-col items-center justify-center mt-40">
          <p className="text-xl text-gray-500">No items found.</p>
          <div className='mt-10 flex flex-col items-center justify-center'>
                  <Link href={'/packages'}>
                        <button className='flex items-center gap-2 bg-red-500 text-white 
                        rounded-full px-10 py-5 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]'>
                              <h5 className='font-semibold text-base'>Go To Packages</h5>
                        </button>
                  </Link>
            </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
