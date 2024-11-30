import Image from "next/image";
import React from "react";
import Uniswap from "@/assets/img/Uniswap.png";
import Chainlink from "@/assets/img/Chainlink.png";
import OKB from "@/assets/img/OKB.png";
import Stellar from "@/assets/img/Stellar.png";
import Bitcoin from "@/assets/img/Bitcoin.png";
import Ethereum from "@/assets/img/Ethereum.png";
import Solana from "@/assets/img/Solana.png";
import Tether from "@/assets/img/Tether.png";
import BNB from "@/assets/img/BNB.png";
import USDCoin from "@/assets/img/USDCoin.png";
import XRP from "@/assets/img/XRP.png";
import Button from "./Button";
import banner1 from "@/assets/img/banner1.jpg";
import Link from "next/link";
import SliderSport from "@/components/SliderSport";

function SportsImages() {
  return (
    <div className=" px-3 md:px-1  overflow-hidden">
      {/* <div className="size-10 md:size-20 flex rounded-full gap-5 md:gap-6 2xl:gap-9">
        <Image
          src={Uniswap}
          alt="Uniswap"
          className=" hidden lg:block rounded-full"
        />
        <Image
          src={Chainlink}
          alt="Chainlink"
          className=" hidden lg:block  rounded-full"
        />
        <Image src={OKB} alt="OKB" className=" rounded-full" />
        <Image src={Stellar} alt="Stellar" className=" rounded-full" />
        <Image src={Bitcoin} alt="Bitcoin" className=" rounded-full" />
        <Image src={Ethereum} alt="Ethereum" className=" rounded-full" />
        <Image src={Solana} alt="Solana" className=" rounded-full" />
        <Image
          src={Tether}
          alt="Tether"
          className=" hidden xs:block  rounded-full"
        />
        <Image src={BNB} alt="PNB" className=" hidden xs:block  rounded-full" />
        <Image
          src={USDCoin}
          alt="USDCoin"
          className=" hidden lg:block  rounded-full"
        />
        <Image src={XRP} alt="XRP" className=" hidden lg:block  rounded-full" />
      </div> */}
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
      <div className=" relative ">
        <Image
          src={banner1}
          alt="banner"
          className=" rounded-2xl w-full h-[50vh] md:h-full"
        />
        <div className=" absolute inset-0 flex flex-col justify-center items-center top-64 md:top-52 xl:top-80 px-1">
          <h2 className=" text-center text-2xl md:text-4xl xl:text-7xl py-1 xl:py-5  text-black">
            Take control of your future
          </h2>
          <Button className="bg-black hover:bg-black/80 text-white">
            <Link href="#">Compare wallets</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SportsImages;
