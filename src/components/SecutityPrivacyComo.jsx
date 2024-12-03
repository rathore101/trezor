import React from "react";
import Button from "./Button";
import Link from "next/link";
import Image from "next/image";
import security from "@/assets/img/security.png";
import FeatureTrezorApp from "./FeatureTrezorApp";
import { Alldata } from "./Alldata";

export default function SecutityPrivacyComo() {
  return (
    <div className="pt-5 pb-10">
      <div className="xl:grid xl:grid-cols-3 gap-3">
        <div className="xl:inline-block md:flex mb-4 md:mt-10 md:mb-0 gap-3 px-2">
          <div className=" w-full xl:text-5xl text-2xl md:px-0 md:text-4xl font-medium mb-5">
            <h2 className="w-full font-medium text-black">
              Security & privacy your way with the Trezor Suite app
            </h2>
          </div>
          <div className=" flex items-center md:w-[30%]">
            <Button>
              <Link href="#">Discover the app</Link>
            </Button>
          </div>
        </div>
        <div className=" col-span-2">
          <div className="grid gap-5 md:grid-cols-2 ">
            <div className="grid gap-3">
              {Alldata.securityPrivacy?.map((items, index) => (
                <div key={index} className="">
                  <div className=" rounded-3xl bg-white p-5">
                    <div className=" flex items-center gap-2">
                      <div className=" size-10 text-[#106148] bg-[#e5f3ed] p-2 rounded-full ">
                        {items.btn}
                      </div>
                      <div className="text-xl text-black ">{items.name}</div>
                    </div>
                    <div className="">
                      <div className="text-[#797979] mt-2">
                        {items.paragraph}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className=" flex justify-between md:grid md:gap-3 gap-2 h-36 md:h-auto w-full ">
              <div className="rounded-lg mr-a row-span-2">
                <Image src={security} alt="Security Image" className="" />
              </div>
              <div className="rounded-3xl bg-[#0a4231] shadow-lg p-3  ">
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
