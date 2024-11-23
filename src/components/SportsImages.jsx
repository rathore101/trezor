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
import SearchIcon from "@/assets/SearchIcon";
import Button from "./Button";
import Link from "next/link";

function SportsImages() {
  return (
    <div className="">
      <div className=" px-3 md:px-1  overflow-hidden">
        <div className="size-10 md:size-20 flex rounded-full gap-5 md:gap-6 2xl:gap-9">
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
          <Image
            src={BNB}
            alt="PNB"
            className=" hidden xs:block  rounded-full"
          />
          <Image
            src={USDCoin}
            alt="USDCoin"
            className=" hidden lg:block  rounded-full"
          />
          <Image
            src={XRP}
            alt="XRP"
            className=" hidden lg:block  rounded-full"
          />
        </div>
        <div className="flex justify-center items-center my-8 md:my-16 ">
          <div className="">
            <h2 className="flex md:text-4xl mt-5 text-3xl font-bold">
              Supports 1000s of coins & tokens
            </h2>
            <div className="text-center mb-5">
              <Button className="bg-black hover:bg-black/80 text-white px-8 mt-5 md:mt-8 text-center">
                <Link href="#">Check your coins</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SportsImages;
