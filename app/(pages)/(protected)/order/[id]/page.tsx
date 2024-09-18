import Order from '@/components/Pages_components/UserOneOrder/Order'
import React from 'react'
import { cache } from "react";
import { db } from '@/lib/db'
import { notFound } from "next/navigation";

interface PageProps {
      params: { id: string };
    }
    
    const getUser = cache(async (id: string) => {
      return db.user.findUnique({
        where: { id },
        include: {
            orders: true
        }
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

const page = async ({ params: { id } }: PageProps) => {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const user = await getUser(id);
    
      if (!user) notFound();
      

  return (
    <div>
      <Order user={user} />
    </div>
  )
}

export default page
