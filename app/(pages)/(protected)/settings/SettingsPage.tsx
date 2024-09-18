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
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { useRouter } from "next/navigation";

interface SettingsPageProps {
  user: User
}

export default function SettingsPage({user}: SettingsPageProps) {

  const router = useRouter()
  const { toast } = useToast();

  const session = useSession()

  const form = useForm<UpdateProfileValues>({
    resolver: zodResolver(updateProfileSchema),
    defaultValues: { 
      name: user.name || "",
      phoneNumber: "",
      shippingAddress: "",
      billingAddress: "",
      company: "",
    },
  });

  async function onSubmit(data: UpdateProfileValues) {
    try {
      await updateProfile(data);
      toast({ description: "Profile updated." });
      session.update()
      router.push(`/user/${user.id}`)
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
        <h2 className="mb-5">Edit my profile</h2>
        <section className="w-full md:w-[50%] xl:w-[50%] space-y-6">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6 px-8 py-20 border rounded-[50px] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
            >
              <div>
                <h4 className="mb-3 font-bold"></h4>
                <div>
                {user.image ? (
                  <Image
                  src={user.image}
                  width={100}
                  alt="User profile picture"
                  height={100}
                  className="rounded-full"
                  />
                ) : (
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                )}
                </div>
              </div>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-500 ">Username :</FormLabel>
                    <FormControl>
                      <Input 
                      placeholder="Enter a username" 
                      {...field} 
                      className="border rounded-full text-base px-5 py-6 placeholder:text-sm text-black font-normal" 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-500 ">Phone number :</FormLabel>
                    <FormControl>
                      <Input 
                      placeholder="Enter a phone number" 
                      {...field} 
                      className="border rounded-full text-base px-5 py-6 placeholder:text-sm text-black font-normal" 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="shippingAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-500 ">Shipping address :</FormLabel>
                    <FormControl>
                      <Input 
                      placeholder="Enter a shipping address" 
                      {...field} 
                      className="border rounded-full text-base px-5 py-6 placeholder:text-sm text-black font-normal" 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="billingAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-500 ">Billing address :</FormLabel>
                    <FormControl>
                      <Input 
                      placeholder="Enter a billing address" 
                      {...field} 
                      className="border rounded-full text-base px-5 py-6 placeholder:text-sm text-black font-normal" 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-500 ">Company :</FormLabel>
                    <FormControl>
                      <Input 
                      placeholder="Enter a company" 
                      {...field} 
                      className="border rounded-full text-base px-5 py-6 placeholder:text-sm text-black font-normal" 
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
