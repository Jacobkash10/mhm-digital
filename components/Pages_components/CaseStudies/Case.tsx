"use client";

import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Case = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const cases = [
    {id: 1, category: "Websites", desc: "Lorem ipsum", img1: "/images/company-logo-agencypro-x-webflow-template.svg", title: "lorem.com"},
    {id: 2, category: "Logos", desc: "Lorem ipsum", img1: "/images/enterprise-logo-agencypro-x-webflow-template.svg", title: "lorem-logo"},
    {id: 3, category: "Websites", desc: "Lorem ipsum", img1: "/images/enterprise-logo-agencypro-x-webflow-template.svg", title: "ipsum.com"},
    {id: 4, category: "Logos", desc: "Lorem ipsum", img1: "/images/enterprise-logo-agencypro-x-webflow-template.svg", title: "ipsum-logo"},
  ];

  // Obtenir les catégories uniques
  const categories = Array.from(new Set(cases.map(item => item.category)));

  // Filtrer les cases en fonction de la catégorie sélectionnée
  const filteredCases = selectedCategory
    ? cases.filter(item => item.category === selectedCategory)
    : cases;

  return (
    <>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 2, delay: 0.5 } }}
        className='pb-[150px] px-8 xl:px-14 xxl:px-[10rem] xll:px-[20rem] xxx:px-[22%] lll:px-[25%]'
      >
        <div className='mb-6'>
          {/* Liste des catégories pour filtrer */}
          <div className='flex flex-wrap gap-4 mb-6'>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm xl:text-base transition-all duration-300
                  ${selectedCategory === category ? 'bg-red-500 text-white' : 'bg-gray-200'}`}
              >
                {category}
              </button>
            ))}
            {/* Bouton pour réinitialiser le filtre */}
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full text-sm xl:text-base transition-all duration-300
                ${!selectedCategory ? 'bg-red-500 text-white' : 'bg-gray-200'}`}
            >
              All
            </button>
          </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
          {filteredCases.map((item) => (
            <div className='w-full' key={item.id}>
              <Card className='rounded-[50px] shadow-[0_8px_30px_rgb(0,0,0,0.12)]'>
                <Link href={`/case-study/${item.id}`}>
                  <div>
                    <Image
                      src={item.img1}
                      alt='image1'
                      priority
                      width={0}
                      height={0}
                      sizes='100vw'
                      className='rounded-t-[50px] w-full'
                    />
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                    className='p-10'
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <h5 className="text-red-500 text-lg font-semibold">
                        {item.category}
                      </h5> 
                    </div>
                    <h2 className='text-2xl max-w-xl font-bold leading-tight mb-3'>
                      {item.title}
                    </h2>
                    <p className='text-base md:text-lg text-gray-500 max-w-xl'>
                      {item.desc}
                    </p>
                  </motion.div>
                </Link>
              </Card>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Case;
