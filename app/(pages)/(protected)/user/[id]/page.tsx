import { db } from '@/lib/db'
import Image from "next/image";
import { notFound } from "next/navigation";
import { cache } from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

interface PageProps {
  params: { id: string };
}

const getUser = cache(async (id: string) => {
  return db.user.findUnique({
    where: { id },
    select: { 
      id: true, 
      name: true, 
      image: true, 
      createdAt: true, 
      email: true, 
      phoneNumber: true, 
      billingAddress: true, 
      shippingAddress: true ,
      company: true
    },
  });
});

export async function generateStaticParams() {
  const allUsers = await db.user.findMany();

  return allUsers.map(({ id }) => ({ id }))
}

export async function generateMetadata({ params: { id } }: PageProps) {
  const user = await getUser(id);

  return {
    title: user?.name || `User ${id}`,
  };
}

export default async function Page({ params: { id } }: PageProps) {
  // Artificial delay to showcase static caching
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const user = await getUser(id);

  if (!user) notFound();

  return (
     <div className='mt-[10px] px-4 xl:px-14 xxl:px-[10rem] xll:px-[25rem] py-10'>
      <div className="mb-10 flex flex-col items-center gap-3">
        <h2>Profil</h2>
        <div className='space-y-6 px-5 md:px-8 py-20 border rounded-[50px] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] w-full lg:w-[70%]'>
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
            <div className='flex items-center gap-3 mb-2'>
              <h2 className='text-base text-gray-500'>User name : </h2>
              <h1 className="text-center text-base font-bold">
                {user?.name || `User ${id}`}
              </h1>
            </div>
            <div className='flex items-center gap-3 mb-2'>
              <h2 className='text-base text-gray-500'>Email : </h2>
              <h1 className="text-center text-base font-bold">
                {user?.email}
              </h1>
            </div>
            <div className='flex items-center gap-3 mb-2'>
              <h2 className='text-base text-gray-500'>Phone number : </h2>
              <h1 className="text-center text-base font-bold">
                {user?.phoneNumber}
              </h1>
            </div>
            <div className='flex items-center gap-3 mb-2'>
              <h2 className='text-base text-gray-500'>Shipping billing :</h2>
              <h1 className="text-base font-bold">
                {user?.shippingAddress}
              </h1>
            </div>
            <div className='flex items-center gap-3 mb-2'>
              <h2 className='text-base text-gray-500'>Billing billing :</h2>
              <h1 className="text-base font-bold">
                {user?.billingAddress}
              </h1>
            </div>
            <div className='flex items-center gap-3 mb-2'>
              <h2 className='text-base text-gray-500'>Company : </h2>
              <h1 className="text-center text-base font-bold">
                {user?.company}
              </h1>
            </div>
        </div>
      </div>
    </div>
  );
}
