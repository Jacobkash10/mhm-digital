"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import image1 from '@/public/images/icon-1-packages-marketing-template.png';
import image2 from '@/public/images/icon-2-packages-marketing-template.png';
import image3 from '@/public/images/icon-3-packages-marketing-template.png';
import { Check } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeIn } from '../../../variants';
import { addToCart } from "@/lib/cartUtils";
import { CartItem } from "@/types/carts";
import Contact from './Contact';
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

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
  image?: string | null;
  service?: Service; 
}

interface Props {
  service: Service;
}

const PackagesComponent: React.FC<Props> = ({ service }) => {
  const [selectedSubServiceId, setSelectedSubServiceId] = useState<string | null>(null);
  const [selectedPriceType, setSelectedPriceType] = useState<'monthly' | 'yearly'>('monthly');
  const [isPriceTypeSwitchOn, setIsPriceTypeSwitchOn] = useState(true); // État pour le switch

  useEffect(() => {
    if (service?.subServices && service?.subServices.length > 0) {
      setSelectedSubServiceId(service.subServices[0].id);
    }
  }, [service?.subServices]);

  const filteredPackages = selectedSubServiceId
    ? service.subServices.find(sub => sub.id === selectedSubServiceId)?.packages || []
    : service.packages;

  const handleAddToCart = (pack: Packages) => {
    const selectedDuration =
      pack.priceByMonth && pack.priceByYear
        ? isPriceTypeSwitchOn
          ? pack.priceByMonth
          : pack.priceByYear
        : pack.price;

    const price = isPriceTypeSwitchOn ? pack.priceByMonth : pack.priceByYear;
    
    const item: CartItem = {
      packageId: pack.id,
      quantity: 1,
      packageDuration: selectedDuration,
      package: { ...pack, service }
    };

    addToCart(item);

    alert(`Le package a été ajouté au panier!`);
    window.location.reload(); 
  };

  return (
    <>
      {
        service.packages.length <= 0 ? 
        (
          <div className='mt-32 flex flex-col items-center justify-center'>
              <h1 className="text-xl text-center font-semibold mb-5 max-w-xl">
                {service.name} services, please contact us directly. We're here to assist you with all your notarial needs.
              </h1>
              <Contact service={service.name} />
          </div>
        ) 
        : 
        (
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

                <div className="flex flex-col items-center gap-4 mb-10">
                  <div className="flex items-center space-x-2 flex-col gap-3">
                    <Switch
                      id="price-type-switch"
                      checked={isPriceTypeSwitchOn}
                      onCheckedChange={(checked) => setIsPriceTypeSwitchOn(checked)}
                      className={`${
                        isPriceTypeSwitchOn ? 'bg-red-500' : 'bg-gray-200'
                      } relative inline-flex items-center rounded-full`}
                    >
                      <span
                        className={`${
                          isPriceTypeSwitchOn ? 'translate-x-6' : 'translate-x-1'
                        } inline-block transform rounded-full bg-white transition-transform`}
                      />
                    </Switch>
                    <Label htmlFor="price-type-switch" className='text-xl font-semibold'>
                      {isPriceTypeSwitchOn ? 'Monthly Price' : 'Yearly Price'}
                    </Label>
                  </div>
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
                        {
                          pack.name === 'Starter' &&
                            <Image
                            src={image1}
                            alt="image1"
                            priority
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="rounded-3xl"
                          />
                        }
                        {
                          pack.name === 'Growth' &&
                            <Image
                            src={image2}
                            alt="image1"
                            priority
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="rounded-3xl"
                          />
                        }
                        {
                          pack.name === 'Ultimate' &&
                            <Image
                            src={image3}
                            alt="image1"
                            priority
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="rounded-3xl"
                          />
                        }
                      </Link>
                    </div>
                    
                    <h5 className="text-gray-500 mb-2 text-2xl">{pack.name || 'Default name'}</h5>

                    <h4 className="text-2xl font-bold mb-6">
                      {isPriceTypeSwitchOn
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
                        onClick={() => handleAddToCart(pack)}
                      >
                        <h5 className="font-semibold text-base">Add to cart</h5>
                      </motion.button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )
      }
    </>
  );
};

export default PackagesComponent;
