import Image from "next/image";
import React from "react";
import Button from "./Button";
import banner1 from "@/assets/img/banner1.jpg";
import Link from "next/link";
import SliderSport from "@/components/SliderSport";

function SportsImages() {
  return (
    <div className=" md:pt-16 px-3 md:px-1  overflow-hidden">
      <SliderSport />
      <div className="flex justify-center items-center my-8 md:my-16 ">
        <div className="">
          <h2 className="flex md:text-4xl mt-5 text-3xl font-bold text-black">
            Supports 1000s of coins & tokens
          </h2>
          <div className="text-center mb-5">
            <Button className="bg-black hover:bg-black/80 text-white px-8 mt-5 md:mt-8 text-center">
              <Link href="#">Check your coins</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className=" relative">
        <Image
          src={banner1}
          alt="banner"
          className=" rounded-2xl w-full h-[55vh] sm:h-[50vh] md:h-full"
        />
        <div className=" absolute inset-0 flex flex-col justify-center items-center top-64 md:top-52 lg:top-[275px] xl:top-80 sm:top-56 xs:top-[250px] px-1">
          <h2 className=" text-center text-2xl md:text-4xl lg:text-6xl xl:text-7xl sm:py-3 xl:py-5 text-black">
            Take control of your future
          </h2>
          <Button className="bg-black font-bold hover:bg-black/80 text-white">
            <Link href="#">Compare wallets</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SportsImages;
