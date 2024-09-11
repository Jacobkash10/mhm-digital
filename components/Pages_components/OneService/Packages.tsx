"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import image1 from '@/public/images/icon-1-packages-marketing-template.png'
import { ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeIn } from '../../../variants';

interface Packages {
  id: string;
  serviceId: string | null;
  subServiceId: string | null;
  name: string;
  priceByYear: number | null;
  priceByMonth: number | null;
  price: number | null;
  description: string;
  points: string[];
}

interface SubService {
  id: string;
  name: string;
  packages: Packages[];
}

interface Props {
  service: Packages[];
  subServices?: SubService[];
}

const Packages: React.FC<Props> = ({ service, subServices }) => {
  const [selectedSubServiceId, setSelectedSubServiceId] = useState<string | null>(null);
  const [selectedPriceType, setSelectedPriceType] = useState<'monthly' | 'yearly'>('monthly');

  // Sélectionner le premier sous-service par défaut lors du montage
  useEffect(() => {
    if (subServices && subServices.length > 0) {
      setSelectedSubServiceId(subServices[0].id);
    }
  }, [subServices]);

  // Fonction pour obtenir les packages filtrés
  const filteredPackages = selectedSubServiceId
    ? subServices?.find(sub => sub.id === selectedSubServiceId)?.packages || []
    : service;

  return (
    <motion.div
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      className="mt-5"
    >
      <div className="flex flex-col items-center justify-center">
        <h5 className="text-red-500 text-xl font-semibold">Packages</h5>
        <h1 className="text-3xl md:text-[44px] text-center font-bold leading-tight mb-10 max-w-xl">
          Pricing plans for every need
        </h1>
      </div>

      {/* Si des sous-services existent, afficher les filtres */}
      {subServices && subServices.length > 0 && (
        <>
          <div className="flex-wrap flex justify-center gap-4 mb-10">
            {subServices.map((subService) => (
              <button
                key={subService.id}
                onClick={() => setSelectedSubServiceId(subService.id)}
                className={`px-4 py-2 rounded-full hover:bg-red-500 transition-all duration-300 hover:text-white text-sm xl:text-base
                  ${selectedSubServiceId === subService.id ? 'bg-red-500 text-white' : 'bg-gray-200'}`}
              >
                {subService.name}
              </button>
            ))}
          </div>

          {/* le filtre pour sélectionner entre prix mensuel ou annuel */}
          <div className="flex-wrap flex justify-center gap-4 mb-10">
            <button
              onClick={() => setSelectedPriceType('monthly')}
              className={`px-4 py-2 rounded-full hover:bg-red-500 transition-all duration-300 hover:text-white text-sm xl:text-base
                  ${selectedPriceType === 'monthly' ? 'bg-red-500 text-white' : 'bg-gray-200'}`}
            >
              Price per Month
            </button>
            <button
              onClick={() => setSelectedPriceType('yearly')}
              className={`px-4 py-2 rounded-full ${selectedPriceType === 'yearly' ? 'bg-red-500 text-white' : 'bg-gray-200'}`}
            >
              Price per Year
            </button>
          </div>
        </>
      )}

      <div className="mt-10 py-16 px-2 bg-white shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] border 
      rounded-[40px] flex flex-col gap-10 xl:grid grid-cols-3 xl:gap-0">
        {filteredPackages.map((pack, index) => (
          <div
            className="border-b-2 xl:border-r-2 last:border-none xl:border-b-0 pb-10 xl:pb-0 px-10 
            flex md:flex-row flex-col xl:flex-col items-center"
            key={index}
          >
            <div className="w-full">
              <div className="w-[25%] mb-8">
                <Image
                  src={image1}
                  alt="image1"
                  priority
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="rounded-3xl"
                />
              </div>
              <h5 className="text-gray-500 mb-2 text-2xl">{pack.name || 'Default name'}</h5>

              {/* Affichage du prix : si sous-services présents, montrer le prix mensuel/annuel, sinon juste le prix */}
              <h4 className="text-2xl font-bold mb-6">
                {subServices && subServices.length > 0 ? (
                  selectedPriceType === 'monthly'
                    ? `$ ${pack.priceByMonth || '1000'}.00 USD / Month`
                    : `$ ${pack.priceByYear || '12000'}.00 USD / Year`
                ) : (
                  `$ ${pack.price || '1000'}.00 USD`
                )}
              </h4>

              <p className="text-gray-500 text-lg mb-8">{pack.description || 'Default description'}</p>
            </div>
            <div className="w-full">
              <h4 className="text-xl font-semibold mb-2">What's included?</h4>
              {pack.points.map((point, index) => (
                <div className="mt-6 flex items-start gap-4" key={index}>
                  <span className="w-6 h-6 p-1 rounded-full bg-red-500 text-white flex items-center justify-center">
                    <Check />
                  </span>
                  <h5 className="text-base font-medium text-gray-500">{point || 'Default point'}</h5>
                </div>
              ))}
              <div className="mt-10">
                <Link href={`/package/${pack.id}`}>
                  <motion.button
                    whileHover={{ y: -10, transition: { type: 'spring' } }}
                    className="flex items-center justify-center gap-2 w-full bg-red-500 text-white 
                    rounded-full px-10 py-4 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] group"
                  >
                    <h5 className="font-semibold text-base">Learn More</h5>
                    <ArrowRight className="text-white group-hover:translate-x-2 transition-all duration-500" />
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Packages;
