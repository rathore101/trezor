import React from "react";
import Button from "./Button";
import Link from "next/link";
import TorNetwork from "@/assets/TorNetwork";
import CoinControl from "@/assets/CoinControl";
import Toproot from "@/assets/Taproot";
// import ArrowUpRight from "@/assets/ArrowUpRight";
import Image from "next/image";
import security from "@/assets/img/security.png";
import FeatureTrezorApp from "./FeatureTrezorApp";
import { Alldata } from "./Alldata";

export default function SecutityPrivacyComo() {
  return (
    <div className="pt-5 pb-10">
      <div className="xl:grid xl:grid-cols-3 gap-3">
        <div className="xl:inline-block md:flex mb-4 md:mb-0 gap-3 px-2">
          <div className=" w-full xl:text-5xl text-2xl  md:px-0 md:text-4xl font-medium mb-5">
            <h2 className="w-full  text-black">
              Security & privacy your way with the Trezor Suite app
            </h2>
          </div>
          <div className="md:w-[50%]">
            <Button>
              <Link href="#">Discover the app</Link>
            </Button>
          </div>
        </div>
        <div className=" col-span-2">
          <div className="grid gap-5 md:grid-cols-2  ">
            <div className="grid gap-3">
              {Alldata.securityPrivacy?.map((items, index) => (
                <div key={index} className="relative mt-5">
                  <div className="rounded-3xl bg-white shadow-lg p-5">
                    <div className="size-14 text-[#106148] bg-[#e5f3ed] p-2 rounded-full absolute -top-5 border-8 border-white ">
                      {items.btn}
                    </div>
                    <div className="px-6">
                      <div className="text-xl text-black mt-7">
                        {items.name}
                      </div>
                      <div className="text-[#797979] mt-2">
                        {items.paragraph}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className=" flex justify-between md:grid md:gap-3 gap-2 h-36 md:h-auto w-auto ">
              <div className="rounded-lg  row-span-2 w-full">
                <Image
                  src={security}
                  alt="Security Image"
                  className="w-full max-w-full h-full"
                />
              </div>
              <div className="rounded-3xl bg-[#0a4231] shadow-lg p-3 w-full ">
                {/* flex justify-between md:inline-block md:p-2 h-full */}
                <div className=" mt-3 flex justify-end">
                  <FeatureTrezorApp />
                </div>
                <h2 className=" text-white md:text-2xl text-lg  lg:text-4xl h-auto xs:mr-5 flex justify-end md:justify-start mt-4 ml-2 ">
                  Explore all features
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
