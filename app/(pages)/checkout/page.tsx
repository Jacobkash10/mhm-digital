"use client"

import React, { useState, useTransition } from 'react'
import { useRouter } from "next/navigation";
import { useToast } from '@/components/ui/use-toast';
import {motion} from 'framer-motion'
import { Mail, Minus, Smartphone, UserRound } from 'lucide-react'
import { getCart, removeFromCart } from '@/lib/cartUtils'
import { Carts } from '@/types/carts'
import { Input } from '@/components/ui/input'
import { checkoutSchema } from '@/schemas';
import { z } from 'zod';
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { checkOut } from '@/actions/checkout';

type Input = z.infer<typeof checkoutSchema>;

const page = () => {

  const router = useRouter()
  const {toast} = useToast()
  const [carts, setCarts] = useState<Carts>(getCart());

  const [error, setError] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition()

  const form = useForm<Input>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          price: carts.items?.map((item) => item.packageDuration * item.quantity)?.reduce((total, item) => 
            { return total + item}, 0),
          packageIds: carts.items.map((item) => item.packageId)
    }
  })

  const handleRemoveFromCart = (packageId: string) => {
      removeFromCart(packageId);
      }

      const onSubmit = async (values: z.infer<typeof checkoutSchema>) => {
            setError("")
        
            startTransition(async () => {
                try {
                    const data = await checkOut(values);
        
                    if (data?.error) {
                        setError(data.error);
                        return;
                    }
        
                    for (const packageId of values.packageIds) {
                        handleRemoveFromCart(packageId);
                    }
        
                    toast({
                        title: "Success",
                        description: "Package commandé!",
                        variant: "default"
                    });
        
                    router.push("/orders");
                    window.location.reload()
                } catch (error) {
                    setError("Une erreur s'est produite.");
                }
            });
      }

  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: {duration: 0.8, delay: 0.3} }}  
    className='pt-[100px] pb-[100px] px-4 xl:px-14 xxl:px-[10rem] xll:px-[25rem]'>
      <div className='flex flex-col lg:flex-row lg:items-center gap-20 justify-between pb-10 xl:pb-[100px]'>
        <div className='w-full lg:w-[60%] xl:w-[50%]'>
          <div className="flex items-center gap-2 mb-3"> 
            <Minus className='text-red-500' />
            <h5 className="text-red-500 text-xl font-semibold"> 
              Mhm Digital
            </h5> 
          </div>
          <h1 className='text-3xl md:text-[50px] font-bold leading-tight mb-3 xl:max-w-xl'>
            Checkout
          </h1>
          {
            carts?.items.length === 0 ? 
            (
            <div className='mt-10'>
                  <h5 className='mb-10 text-lg text-slate-500'>No items found.</h5>
            </div>
            )
            :
            (
              <div className=''>
                {carts.items?.map((item) => (
                  <div key={item.packageId} className='mt-5 border-b py-4 px-4 bg-slate-100'>
                        <div className='row sm:flex items-start justify-between'>
                          <div className='row gap-5'>
                            <div>
                                  <p className='text-xs font-extrabold text-red-500 mb-2'>
                                        {item?.package?.service?.name}
                                  </p>
                                  <h3 className='text-base font-extrabold'>
                                        {item?.package?.name}
                                  </h3>
                                  <p className='font-semibold'>
                                        $ { item.quantity * item.packageDuration}.00 USD
                                        {/* $ {item.packageDuration}.00 USD */}
                                  </p>
                                  <p className='font-semibold'>
                                        Quantité :
                                        <span>{item.quantity}</span>
                                  </p>
                                  <h5 className='text-slate-500 font-bold'>
                                        Package Duration : 
                                        <span className='text-black'>
                                              {item.packageDuration === item?.package?.priceByMonth
                                              ? '1 Month' : '1 Year'
                                              }
                                        </span>
                                  </h5>
                            </div>
                          </div>
                      </div>
                  </div>
                ))}
                <div className='row sm:flex items-center justify-between mt-5'>
                      <h5 className='text-slate-500 font-bold'>Subtotal</h5>
                      <p className='font-semibold'>
                            $ {carts.items?.map((item) => item.packageDuration * item.quantity)?.reduce((total, item) => 
                                  { return total + item}, 0)}.00 USD
                      </p>
                </div>
              </div>
            )
          }
        </div>
        <div className='w-full xl:w-[50%]'>
            <Form {...form}>
                        <form 
                        onSubmit={form.handleSubmit(onSubmit)}
                        className='px-8 py-20 border rounded-[50px] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)]'>
                              <div className='flex flex-col sm:flex-row items-center justify-between gap-5 mb-7'>
                                    <div className='w-full flex items-center justify-between gap-2'>
                                          <FormField
                                          control={form.control}
                                          name="firstName"
                                          render={({ field }) => (
                                                <FormItem className='w-full'>
                                                      <FormControl>
                                                            <Input placeholder="First name" {...field}
                                                                  disabled={isPending} 
                                                                  className='border rounded-full text-xl px-4 py-8 placeholder:text-base' 
                                                            />
                                                      </FormControl>
                                                      <FormMessage />
                                                </FormItem>
                                          )}
                                          />
                                          <UserRound className='text-gray-400' size={36} />
                                    </div>
                                    <div className='w-full flex items-center justify-between gap-2'>
                                          <FormField
                                          control={form.control}
                                          name="lastName"
                                          render={({ field }) => (
                                                <FormItem className='w-full'>
                                                      <FormControl>
                                                            <Input placeholder="Last name" {...field}
                                                                  disabled={isPending} 
                                                                  className='border rounded-full text-xl px-4 py-8 placeholder:text-base' 
                                                            />
                                                      </FormControl>
                                                      <FormMessage />
                                                </FormItem>
                                          )}
                                          />
                                          <UserRound className='text-gray-400' size={36} />
                                    </div>
                              </div>
                              <div className='flex flex-col sm:flex-row items-center justify-between gap-5 mb-7'>
                                    <div className='w-full flex items-center justify-between gap-2'>
                                          <FormField
                                          control={form.control}
                                          name="email"
                                          render={({ field }) => (
                                                <FormItem className='w-full'>
                                                      <FormControl>
                                                            <Input placeholder="Email" {...field}
                                                                  disabled={isPending} 
                                                                  className='border rounded-full text-xl px-4 py-8 placeholder:text-base' 
                                                            />
                                                      </FormControl>
                                                      <FormMessage />
                                                </FormItem>
                                          )}
                                          />
                                          <Mail className='text-gray-400' size={36} />
                                    </div>
                                    <div className='w-full flex items-center justify-between gap-2'>
                                          <FormField
                                          control={form.control}
                                          name="phoneNumber"
                                          render={({ field }) => (
                                                <FormItem className='w-full'>
                                                      <FormControl>
                                                            <Input placeholder="Phone number" {...field}
                                                                  disabled={isPending} 
                                                                  className='border rounded-full text-xl px-4 py-8 placeholder:text-base' 
                                                            />
                                                      </FormControl>
                                                      <FormMessage />
                                                </FormItem>
                                          )}
                                          />
                                          <Smartphone className='text-gray-400' size={36} />
                                    </div>
                              </div>
                              <div>
                                    <button
                                    type='submit'
                                    className='flex items-center gap-2 bg-red-500 text-white 
                                    rounded-full px-10 py-6 hover:bg-red-400
                                    shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] group'>
                                          <h5 className='font-semibold text-base sm:text-[20px]'>Order now</h5>
                                    </button>
                              </div>
                        </form>
            </Form>    
        </div>
      </div>
    </motion.div>
  )
}

export default page
