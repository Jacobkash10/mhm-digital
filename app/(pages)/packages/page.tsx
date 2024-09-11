import FAQ from '@/components/Pages_components/Contact/FAQ';
import Packages from '@/components/Pages_components/Package/Packages';
import { db } from '@/lib/db';
import React from 'react';

const page = async () => {
  // Récupération des services avec les sous-services et les packages
  const services = await db.service.findMany({
    include: {
      packages: true,
      subServices: {
        include: {
          packages: true,
        },
      },
    },
  });

  return (
    <div>
      <Packages services={services} /> 
      <div className='bg-[#e1dfe23c]'>
        <FAQ />
      </div>
    </div>
  );
};

export default page;
