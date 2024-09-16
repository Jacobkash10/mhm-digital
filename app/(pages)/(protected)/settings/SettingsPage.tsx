"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { UpdateProfileValues, updateProfileSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { updateProfile } from "./actions";
import { User } from "next-auth";
import { useSession } from "next-auth/react";
import Image from "next/image";
import image from '@/public/images/setting.png'
import {motion} from 'framer-motion'

interface SettingsPageProps {
  user: User
}

export default function SettingsPage({user}: SettingsPageProps) {
  const { toast } = useToast();

  const session = useSession()

  const form = useForm<UpdateProfileValues>({
    resolver: zodResolver(updateProfileSchema),
    defaultValues: { name: user.name || "" },
  });

  async function onSubmit(data: UpdateProfileValues) {
    try {
      await updateProfile(data);
      toast({ description: "Profile updated." });
      session.update()
    } catch (error) {
      toast({
        variant: "destructive",
        description: "An error occurred. Please try again.",
      });
    }
  }
  

  return (
    <main className=" px-4 xl:px-14 xxl:px-[10rem] xll:px-[25rem] py-10">
      <div className="flex flex-col items-center justify-center w-full">
        <section className="w-full md:w-[50%] xl:w-[40%] space-y-6">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6 px-8 py-20 border rounded-[50px] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input 
                      placeholder="Enter a username" 
                      {...field} 
                      className="border rounded-full text-xl px-5 py-8 placeholder:text-base text-black font-bold" 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button 
              className="flex items-center justify-center gap-2 w-full bg-red-500 text-white 
              rounded-full px-10 py-8 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] hover:bg-red-400" 
              type="submit" 
              disabled={form.formState.isSubmitting}>
                Update
              </Button>
            </form>
          </Form>
        </section>
      </div>      
    </main>
  );
}
