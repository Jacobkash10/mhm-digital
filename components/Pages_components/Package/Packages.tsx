"use client";

import image1 from '@/public/images/icon-1-packages-marketing-template.png';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CartItem } from '@/types/carts';
import { addToCart } from '@/lib/cartUtils';
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import Contact from './Conctact';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

interface Package {
  id: string;
  name: string;
  priceByMonth: number | null;
  priceByYear: number | null;
  price: number | null;
  description: string;
  points: string[];
  image?: string | null;
}

interface SubService {
  id: string;
  name: string;
  packages: Package[];
}

interface Service {
  id: string;
  name: string;
  packages: Package[];
  subServices?: SubService[];
}

interface Props {
  services: Service[];
}

const Packages: React.FC<Props> = ({ services }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  const [selectedSubServiceId, setSelectedSubServiceId] = useState<string | null>(null);
  const [selectedPriceType, setSelectedPriceType] = useState<'monthly' | 'yearly'>('monthly');
  const [isPriceTypeSwitchOn, setIsPriceTypeSwitchOn] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  useEffect(() => {
    if (services.length > 0) {
      setSelectedServiceId(services[0].id);

      if (services[0].subServices && services[0].subServices.length > 0) {
        setSelectedSubServiceId(services[0].subServices[0].id);
      }
    }
  }, [services]);

  const selectedService = services.find(service => service.id === selectedServiceId);

  const hasSubServices = selectedService?.subServices && selectedService.subServices.length > 0;

  const filteredPackages = selectedSubServiceId
    ? selectedService?.subServices?.find(sub => sub.id === selectedSubServiceId)?.packages || []
    : selectedService?.packages || [];

  const handleAddToCart = (pack: Package) => {
    if (!selectedService) {
      console.error('The selected service cannot be found');
      return;
    }

    const selectedDuration = pack.priceByMonth && pack.priceByYear
      ? selectedPriceType === 'monthly'
        ? pack.priceByMonth
        : pack.priceByYear
      : pack.price;

    const item: CartItem = {
      packageId: pack.id,
      quantity: 1,
      packageDuration: selectedDuration || 0,
      package: { 
        ...pack, 
        service: {
          id: selectedService.id,
          name: selectedService.name,
          description: "Service description",
          icon: "path_to_icon"
        },
        serviceId: selectedService.id,
      }
    };

    addToCart(item);

    setIsDialogOpen(true);
  };

  return (
    <div className="mt-16">
      <div className="flex flex-col items-center justify-center">
        <h5 className="text-red-500 text-xl font-semibold">Packages</h5>
        <h1 className="text-3xl md:text-[44px] text-center font-bold leading-tight mb-10 max-w-xl">
          Pricing plans for every need
        </h1>
      </div>

      {services.length > 0 && (
        <div className="flex-wrap flex justify-center gap-4 mb-10">
          {services.map(service => (
            <button
              key={service.id}
              onClick={() => {
                setSelectedServiceId(service.id);
                if (service.subServices && service.subServices.length > 0) {
                  setSelectedSubServiceId(service.subServices[0].id);
                } else {
                  setSelectedSubServiceId(null);
                }
              }}
              className={`px-4 py-2 rounded-full hover:bg-red-500 transition-all duration-300 hover:text-white text-sm xl:text-base
                  ${selectedServiceId === service.id ? 'bg-red-500 text-white' : 'bg-gray-200'}`}
            >
              {service.name}
            </button>
          ))}
        </div>
      )}

      {selectedService?.subServices && (
        <>
          <div className="flex-wrap flex justify-center gap-4 mb-10">
            {selectedService.subServices.map(subService => (
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

          {hasSubServices && (
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
          )}
        </>
      )}

      {/* Vérifie s'il y a des packages à afficher */}
      {filteredPackages.length > 0 ? (
        <div className="mt-10 py-16 px-2 bg-white shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] rounded-[40px]
        flex flex-col gap-10 xl:grid grid-cols-3 xl:gap-0 mx-4 xl:mx-14">
          {filteredPackages.map((pack, index) => (
            <div
              className="border-b xl:border-r last:border-none xl:border-b-0 pb-10 xl:pb-0 px-10
              flex md:flex-row flex-col xl:flex-col items-center"
              key={index}
            >
              <div className="w-full">
                <div className="w-[20%] mb-8">
                  <Link href={`/package/${pack.id}`}>
                    <img src={pack.image ?? ''} alt="image-package" className='rounded-3xl' />
                  </Link>
                </div>
                <h5 className="text-gray-500 mb-2 text-2xl">{pack.name || 'Default name'}</h5>
                <h4 className="text-2xl font-bold mb-6">
                  {hasSubServices ? (
                    isPriceTypeSwitchOn
                      ? `$ ${pack.priceByMonth ?? '1000'}.00 USD / Month`
                      : `$ ${pack.priceByYear ?? '12000'}.00 USD / Year`
                  ) : (
                    `$ ${pack.price ?? '1000'}.00 USD`
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
                  <motion.button
                    whileHover={{ y: -10, transition: { type: 'spring' } }}
                    className="flex items-center justify-center w-full bg-red-500 text-white
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
      ) : (
        
        <>
          <div className='mt-5 flex flex-col items-center justify-center'>
              <h1 className="text-[20px] text-center text-gray-500 font-normal mb-2 max-w-xl leading-snug">
                <span className='font-bold text-black'>{selectedService?.name} </span> 
                services, please contact us directly. We're here to assist you with all your notarial needs.
              </h1>
              <Contact serviceName={selectedService?.name || ''} />
          </div>
        </>
      )}
      <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <AlertDialogTrigger asChild>
                  <button className='hidden' onClick={() => handleAddToCart}>Add to Cart</button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Package Added to Cart</AlertDialogTitle>
                    <AlertDialogDescription>
                      The package has been successfully added to your cart!
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogAction onClick={() => window.location.reload()}>
                      <p className='text-white'>0K</p>
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
    </div>
  );
};

export default Packages;
