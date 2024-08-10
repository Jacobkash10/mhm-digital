import { db } from '@/lib/db'
import Image from "next/image";
import { notFound } from "next/navigation";
import { cache } from "react";
import avatarPlaceholder from "@/assets/images/avatar_placeholder.png";

interface PageProps {
  params: { id: string };
}

const getUser = cache(async (id: string) => {
  return db.user.findUnique({
    where: { id },
    select: { id: true, name: true, image: true, createdAt: true, email: true },
  });
});

export async function generateStaticParams() {
  const allUsers = await db.user.findMany();

  return allUsers.map(({ id }) => ({ id }));
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
     <div className='mt-[100px] px-4 xl:px-14 xxl:px-[10rem] xll:px-[25rem] py-10'>
      <div className="mx-3 mb-10 flex flex-col items-center gap-3">
        <h2>Profil</h2>
        {user.image ? (
          <Image
          src={user.image}
          width={100}
          alt="User profile picture"
          height={100}
          className="rounded-full"
          />
        ) : (
          <Image
          src={avatarPlaceholder}
          width={100}
          alt="User profile picture"
          height={100}
          className="rounded-full"
          />
        )}
        <h1 className="text-center text-xl font-bold mb-2">
          {user?.name || `User ${id}`}
        </h1>
        <h1 className="text-center text-xl font-bold">
          {user?.email}
        </h1>
      </div>
    </div>
  );
}
