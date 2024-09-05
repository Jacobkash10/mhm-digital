"use client"

import React, { useState } from 'react'
import { useRouter } from "next/navigation";
import { useToast } from '@/components/ui/use-toast';
import { Input } from "@/components/ui/input"
import { Eye, Mail, UserRound } from 'lucide-react'
import Link from 'next/link'
import {z} from 'zod'
import { useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { registerSchema } from '@/schemas'
import {
      Form,
      FormControl,
      FormField,
      FormItem,
      FormMessage,
    } from "@/components/ui/form"
import { FormError } from '@/components/form-error'
import { FormSuccess } from '@/components/form-success'
import { Button } from '@/components/ui/button'
import { register } from '@/actions/register'
import {motion} from 'framer-motion'
import Image from 'next/image';
import image1 from '@/public/images/3.png'

    type Input = z.infer<typeof registerSchema>;

const Page = () => {

      const router = useRouter()
      const {toast} = useToast()
      const [error, setError] = useState<string | undefined>("");
      // const [success, setSuccess] = useState<string | undefined>("");
      const [isPending, startTransition] = useTransition()
      const form = useForm<Input>({
            resolver: zodResolver(registerSchema),
            defaultValues: {
                  email: "",
                  name: "",
                  password: "",
                  confirmPassword: "",
            }
        })

      const onSubmit = (values: z.infer<typeof registerSchema>) => {
            setError("")

            startTransition(() => {
                  register(values)
                  .then((data) => {
                        setError(data.error)
                        toast({
                              title: "Success",
                              description: "Utilisateur enregistré avec succès",
                              variant: "default"
                        })
                        router.push("/connexion");
                  })
            })
      }

  return (
    <div className='pt-[80px] container pb-[100px] px-4 xl:px-14 xxl:px-[10rem] xll:px-[25rem]'>
      <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: {duration: .8, delay: 0.3} }} 
      className='w-full flex flex-col items-center justify-center'>
                  <Form {...form}>
                        <form className='px-10 py-10 border rounded-2xl w-full lg:w-[55%]' onSubmit={form.handleSubmit(onSubmit)}>
                              <div className='flex flex-col items-center justify-center mb-5'>
                                    <Image src={image1} alt='image1' priority width={0} height={0} sizes='100vw'
                                    className='w-[10%]' />
                                    <p>If you already have an account.</p>
                                    <Link href={'/connexion'} className='hover:underline duration-300 text-gray-500'>
                                          Log in
                                    </Link>
                              </div>
                              <div className='flex flex-col items-center justify-between gap-5 mb-7'>
                                    <div className='flex items-center rounded-full p-3 gap-2 w-full'>
                                          {/* username */}
                                          <FormField
                                          control={form.control}
                                          name="name"
                                          render={({ field }) => (
                                                <FormItem className='w-full'>
                                                      <FormControl>
                                                            <Input placeholder="Jhon Doe" {...field}
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
                                    <div className='flex items-center justify-between rounded-full p-3 gap-2 w-full'>
                                          {/* email */}
                                          <FormField
                                          control={form.control}
                                          name="email"
                                          render={({ field }) => (
                                                <FormItem className='w-full'>
                                                      <FormControl>
                                                            <Input placeholder="example@gmail.com" {...field}
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
                                    <div className='flex items-center justify-between rounded-full p-3 gap-2 w-full'>
                                          {/* password */}
                                          <FormField
                                          control={form.control}
                                          name="password"
                                          render={({ field }) => (
                                                <FormItem className='w-full'>
                                                <FormControl>
                                                      <Input placeholder="Password" {...field} type='password'
                                                            disabled={isPending} 
                                                            className='border rounded-full text-xl px-4 py-8 placeholder:text-base'
                                                      />
                                                </FormControl>
                                                <FormMessage />
                                                </FormItem>
                                          )}
                                          />
                                          <Eye className='text-gray-400' size={36} />
                                    </div>
                                    <div className='flex items-center justify-between rounded-full p-3 gap-2 w-full'>
                                          {/* confirm password */}
                                          <FormField
                                          control={form.control}
                                          name="confirmPassword"
                                          render={({ field }) => (
                                                <FormItem className='w-full'>
                                                <FormControl>
                                                      <Input placeholder="Confirm your password" {...field} type='password'
                                                            disabled={isPending} 
                                                            className='border rounded-full text-xl px-4 py-8 placeholder:text-base'
                                                      />
                                                </FormControl>
                                                <FormMessage />
                                                </FormItem>
                                          )}
                                          />
                                          <Eye className='text-gray-400' size={36} />
                                    </div>   
                              </div>
                              <FormError message={error} />
                              <br />
                              <div className='flex flex-col items-center justify-center mt-6'>
                                          <Button disabled={isPending}  type='submit' className='flex items-center justify-center gap-2 w-full bg-red-500 text-white rounded-full px-10 py-8 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]'>
                                                <h5 className='font-semibold text-[20px]'>Sign up</h5>
                                          </Button>
                              </div>
                        </form>
                  </Form>
            </motion.div>
    </div>
  )
}

export default Page
