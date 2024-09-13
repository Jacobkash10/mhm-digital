"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import image1 from '@/public/images/icon-1-packages-marketing-template.png';
import { Check } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeIn } from '../../../variants';
import { addToCart } from "@/lib/cartUtils";
import { CartItem } from "@/types/carts";

interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  packages: {
    id: string;
    serviceId: string | null;
    subServiceId: string | null;
    name: string;
    priceByYear: number | null;
    priceByMonth: number | null;
    price: number | null;
    description: string;
    points: string[];
  }[];
  subServices: {
    id: string;
    name: string;
    description: string;
    serviceId: string;
    packages: {
      id: string;
      serviceId: string | null;
      subServiceId: string | null;
      name: string;
      priceByYear: number | null;
      priceByMonth: number | null;
      price: number | null;
      description: string;
      points: string[];
    }[];
  }[];
}

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
  service?: Service; 
}

interface Props {
  service: Service;
}

const PackagesComponent: React.FC<Props> = ({ service }) => {
  const [selectedSubServiceId, setSelectedSubServiceId] = useState<string | null>(null);
  const [selectedPriceType, setSelectedPriceType] = useState<'monthly' | 'yearly'>('monthly');

  // Sélectionner le premier sous-service par défaut lors du montage
  useEffect(() => {
    if (service?.subServices && service?.subServices.length > 0) {
      setSelectedSubServiceId(service.subServices[0].id);
    }
  }, [service?.subServices]);

  // Fonction pour obtenir les packages filtrés par sous-service
  const filteredPackages = selectedSubServiceId
    ? service.subServices.find(sub => sub.id === selectedSubServiceId)?.packages || []
    : service.packages;

  // Fonction pour ajouter un package au panier
  const handleAddToCart = (pack: Packages) => {
      // Définir la durée en fonction du prix sélectionné et de l'existence des prix
      const selectedDuration =
        pack.priceByMonth && pack.priceByYear
          ? selectedPriceType === 'monthly'
            ? pack.priceByMonth 
            : pack.priceByYear
          : pack.price;

      const price = selectedPriceType === 'monthly' ? pack.priceByMonth : pack.priceByYear;
    
    // Création de l'objet CartItem avec validation des données
    const item: CartItem = {
      packageId: pack.id,
      quantity: 1, // Par défaut, ajouter 1 unité
      packageDuration: selectedDuration, // Sélectionner la durée (mensuelle/annuelle)
      package: { ...pack, service } // Vous pouvez ajuster ici ce que vous souhaitez ajouter pour "package"
    };

    // Appel à la fonction addToCart
    addToCart(item);

    // Notification utilisateur
    alert(`${pack.name} a été ajouté au panier!`);
    window.location.reload(); 
  };

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
      {service?.subServices && service.subServices.length > 0 && (
        <>
          <div className="flex-wrap flex justify-center gap-4 mb-10">
            {service.subServices.map((subService) => (
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

          {/* Filtre pour sélectionner entre prix mensuel ou annuel */}
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
                <Link href={`/package/${pack.id}`}>
                  <Image
                    src={image1}
                    alt="image1"
                    priority
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="rounded-3xl"
                  />
                </Link>
              </div>
              
              <h5 className="text-gray-500 mb-2 text-2xl">{pack.name || 'Default name'}</h5>

              {/* Affichage du prix */}
              <h4 className="text-2xl font-bold mb-6">
                {selectedPriceType === 'monthly'
                  ? `$ ${pack.priceByMonth || '1000'}.00 USD / Month`
                  : `$ ${pack.priceByYear || '12000'}.00 USD / Year`}
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
                <motion.button
                  whileHover={{ y: -10, transition: { type: 'spring' } }}
                  className="flex items-center justify-center gap-2 w-full bg-red-500 text-white 
                  rounded-full px-10 py-4 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] group"
                  onClick={() => handleAddToCart(pack)} // Appel à la fonction handleAddToCart
                >
                  <h5 className="font-semibold text-base">Add to cart</h5>
                </motion.button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default PackagesComponent;

