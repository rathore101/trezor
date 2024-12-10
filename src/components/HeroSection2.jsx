import React from "react";
import { Alldata } from "./Alldata";
import Button from "./Button";
import RightTik from "@/assets/RightTik";
import Image from "next/image";
import trezorimg from "@/assets/img/trezorimg.png";
import Link from "next/link";
import Border from "@/assets/Border";
export default function HeroSection2() {
  return (
    <div className=" ">
      <div className=" bg-white py-10 px-1 md:px-4 xl:p-10 rounded-xl lg:mb-14">
        <h2 className=" relative text-2xl md:text-4xl xl:text-5xl py-4 font-bold text-black ">
          This is&nbsp;
          <span className=" relative">
            how it works
            <div className=" xl:w-72 md:w-56 md:ml-[123px] w-40 ml-20 xl:ml-[165px] text-[#0f6148]">
              <Border />
            </div>
          </span>
        </h2>
        <div className=" md:grid md:grid-cols-2 gap-3">
          {Alldata?.heroSectionData?.map((items, index) => (
            <div key={index} className="grid ">
              <div className=" bg-[#f6f6f6] rounded-2xl p-5 m-1 md:m-0">
                <div className="flex row-span-1 gap-3 md:gap-5 my-0 md:my-5">
                  <div className=" bg-[#e2e2e2] rounded-full size-16 flex justify-center items-center text-black">
                    {items.number}
                  </div>
                  <div className=" flex items-center text-2xl md:text-3xl  md:font-bold text-black ">
                    {items.name}
                  </div>
                </div>
                <div className="md:text-base text-[#545c6a] mt-5 md:mt-0 text-xx ">
                  {items.paragraph.includes("<Link>") ? (
                    <div>
                      {items.paragraph.split("<Link>")[0]}
                      <Link href="#" className="underline hover:text-[#0f6148]">
                        our guide&nbsp;
                      </Link>
                      {items.paragraph
                        .split("<Link>")[1]
                        .replace("</Link>", "")}
                    </div>
                  ) : (
                    items.paragraph
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="py-7 md:py-10">
        <h2 className="text-3xl font-bold md:text-5xl text-black ">
          Prefer expert guidance?
        </h2>
      </div>
      <div className="xl:flex xl:flex-col-2 bg-white px-2 py-4 md:p-5 rounded-2xl gap-3">
        <div className=" relative w-full">
          <div className=" w-full xl:h-[650px] h-auto xs:h-[300px] md:h-[400px] lg:h-[500px] ">
            <Image
              src={trezorimg}
              alt="trezorimg Image"
              className="w-full h-full rounded-2xl"
            />
          </div>
          <div className="flex absolute top-4 left-4 gap-2 font-sans">
            <h3 className=" bg-[#171717] rounded-full text-white py-1 px-4">
              Black Friday
            </h3>
            <h3 className=" bg-[#efc941] rounded-full py-1 px-4">50% Off</h3>
          </div>
        </div>
        <div className="flex items-center xl:px-10 w-full">
          <div className="text-black">
            <h2 className="text-2xl xl:font-bold md:text-4xl pt-10 lg:text-5xl xl:pt-0 xl:text-6xl mb-5 text-black">
              Trezor Expert Onboarding Session
            </h2>
            <span className=" flex gap-3 py-1 font-sans">
              <div className=" flex items-center size-5 text-[#0f6148]">
                <RightTik />
              </div>
              <div>Personal 1:1 guide for Trezor hardware wallet setup</div>
            </span>
            <span className=" flex gap-3 py-1 font-sans">
              <div className=" flex items-center size-7 md:size-5 text-[#0f6148]">
                <RightTik />
              </div>
              <div>
                60-minute live, online Trezor Expert Onboarding Session in
                English
              </div>
            </span>
            <span className=" flex gap-3 py-1 font-sans mb-7">
              <div className=" flex items-center size-5 text-[#0f6148]">
                <RightTik />
              </div>
              <div>Available for all Trezor hardware wallets</div>
            </span>
            <div className="">
              <Button className="px-8 h-[70px] bg-[#0f6148] text-white mb-2">
                <span>Buy for USD 49</span>
                <span className="text-xs text-[#a8a8a8] line-through line-clamp-1 ">
                  USD 99
                </span>
              </Button>
              <span className="text-[#616161] pt-3 ">
                *It’s necessary to have a Trezor device with you for this
                session.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
