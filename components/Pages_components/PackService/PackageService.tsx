"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import image1 from "@/public/images/icon-1-packages-marketing-template.png";
import Image from "next/image";
import { Check } from "lucide-react";
import image3 from "@/public/images/image-project-overview-marketing-template.svg";
import { addToCart } from "@/lib/cartUtils";
import { CartItem } from "@/types/carts";
import { useRouter } from "next/navigation";

interface Props {
  servicePack: Packages;
}

interface Packages {
  service: {
    id: string;
    name: string;
    description: string;
    icon: string;
  };
  id: string;
  serviceId: string | null;
  name: string;
  priceByYear: number | null;
  priceByMonth: number | null;
  price: number | null;
  description: string;
  points: string[];
  image?: string | null;
}

const PackageService = ({ servicePack }: Props) => {
  const [selectedPrice, setSelectedPrice] = useState<number>(
    servicePack.priceByMonth || servicePack.price || 0
  );
  const [selectedDuration, setSelectedDuration] = useState<number>(
    servicePack.priceByYear || servicePack.price || 0
  );
  const router = useRouter();

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;

    if (selectedValue === "priceByYear" || selectedValue === "priceByMonth") {
      setSelectedDuration(servicePack[selectedValue] || 0);
      setSelectedPrice(servicePack[selectedValue] || 0);
    }
  };

  const handleAddToCart = () => {
    const item: CartItem = {
      package: servicePack,
      quantity: 1,
      packageDuration: selectedDuration,
      packageId: servicePack.id,
    };
    addToCart(item);
    alert("Package ajouté au panier!");
    window.location.reload();
  };

  return (
    <>
      <div className="mt-[100px] px-4 xl:px-14 xxl:px-[10rem] xll:px-[20rem] xxx:px-[22%] lll:px-[25%]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 2, delay: 0.5 } }}
          className="mb-24 md:flex justify-between items-start w-full block"
        >
          <div className="w-full md:w-[58%]">
            <div className="w-full md:w-[60%] block items-center flex-col justify-center">
              <p className="text-red-500 mb-2 font-extrabold">
                {servicePack.service?.name}
              </p>
              <motion.div
                whileHover={{
                  rotate: 360,
                  transition: { type: "spring", duration: 2 },
                }}
                className="w-[20%] mb-2"
              >
                {/* <Image
                  src={image1}
                  alt="image1"
                  priority
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="rounded-3xl"
                /> */}
                <img src={servicePack.image ?? ''} alt="image-package" className='rounded-3xl' />
              </motion.div>
              <h1 className="text-[40px] sm:text-[62px] font-bold leading-tight mb-3 text-left max-w-xl lg:max-w-4xl">
                {servicePack.name}
              </h1>
              <p className="text-[18px] leading-7 font-semibold text-gray-500 text-left">
                {servicePack.description}
              </p>
            </div>
            <div className="mt-10">
              <h4 className="text-xl font-bold mb-2">What's included?</h4>
              {servicePack.points.map((point, index) => (
                <div className="mt-6 flex items-center gap-4" key={index}>
                  <span className="w-7 h-7 p-1 rounded-full bg-red-500 text-white flex items-center justify-center">
                    <Check />
                  </span>
                  <h5 className="text-lg font-medium text-black">
                    {point || "Default point"}
                  </h5>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full md:w-[42%] mt-20 md:mt-0">
            <div className="bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] w-full px-10 py-14 rounded-[40px] border">
              <h3 className="text-2l font-semibold mb-3">
                Order your package today!
              </h3>
              <p className="text-[17px] leading-7 font-semibold text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
                ipsum tempor feugiat augue.
              </p>
              {servicePack.priceByYear || servicePack.priceByMonth ? (
                <form onSubmit={handleAddToCart}>
                  <select
                    onChange={handleSelectChange}
                    required
                    className="mt-16 w-full bg-white shadow-sm px-5 py-5 rounded-[40px] border hover:border-black transition-all duration-300 cursor-pointer"
                  >
                    <option value="">Package Duration</option>
                    {servicePack.priceByYear && (
                      <option
                        value="priceByYear"
                        key={servicePack.priceByYear}
                        className="font-semibold text-gray-500"
                      >
                        1 Year
                      </option>
                    )}
                    {servicePack.priceByMonth && (
                      <option
                        value="priceByMonth"
                        key={servicePack.priceByMonth}
                        className="font-semibold text-gray-500"
                      >
                        1 Month
                      </option>
                    )}
                  </select>
                  <h4 className="text-3xl font-extrabold mt-10">
                    ${selectedPrice}.00 /{" "}
                    {selectedPrice === servicePack.priceByMonth ? "month" : "year"}
                  </h4>
                  <br />
                  <motion.button
                    whileHover={{ y: -10, transition: { type: "spring" } }}
                    className="bg-red-500 text-white rounded-full px-10 py-5 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] w-full mt-10"
                    type="submit"
                  >
                    <h5 className="font-semibold text-[17px] text-center">
                      Add to Cart
                    </h5>
                  </motion.button>
                </form>
              ) : (
                <div>
                  <h4 className="text-3xl font-extrabold mt-10">
                    ${servicePack.price}.00
                  </h4>
                  <motion.button
                    whileHover={{ y: -10, transition: { type: "spring" } }}
                    className="bg-red-500 text-white rounded-full px-10 py-5 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] w-full mt-10"
                    onClick={handleAddToCart}
                  >
                    <h5 className="font-semibold text-[17px] text-center">
                      Add to Cart
                    </h5>
                  </motion.button>
                </div>
              )}
            </div>
          </div>
        </motion.div>
        <div className="mt-[100px] mb-[100px]">
          <div className="bg-slate-50 shadow-md w-[90%] md:w-[80%] lg:w-[70%] mx-auto rounded-[40px] px-6 md:px-10 lg:px-16 pt-24 pb-10">
            <div className="mb-[80px]">
              <h2 className="text-[30px] sm:text-[40px] font-bold">
                About the Package
              </h2>
              <p className="text-base md:text-[18px] leading-8 font-semibold text-gray-500 mt-10">
                Proin sed libero enim sed faucibus turpis in. Nisi est sit amet
                facilisis. Venenatis cras sed felis eget velit. A erat nam at
                lectus urna duis convallis. Cras ornare arcu dui vivamus arcu
                felis. Viverra ipsum nunc aliquet bibendum enim facilisis
                gravida.
              </p>

              <p className="text-base md:text-[18px] leading-8 font-semibold text-gray-500 mt-10">
                Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi
                cras. Et netus et malesuada fames. Vel orci porta non pulvinar
                neque laoreet suspendisse. Malesuada fames ac turpis egestas
                maecenas pharetra convallis.
              </p>
              <Image
                src={image3}
                alt="image1"
                priority
                width={0}
                height={0}
                sizes="100vw"
                className="rounded-[50px] w-full mt-10"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PackageService;
