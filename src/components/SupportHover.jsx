"use client";
import { useState, useEffect } from "react";
import React from "react";
import Image from "next/image";
import banner2 from "@/assets/img/banner2.png";
import banner3 from "@/assets/img/banner3.png";
import { Alldata } from "./Alldata";

function SupportHover() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`z-50 md:fixed inset-0 md:flex justify-center items-start pb-6 lg:px-24 lg:mt-20 md:mt-20 md:px-5 px-0 `}
    >
      <div
        className={` bg-transprent pt-10 md:mt-2 -mt-8  ${
          scrolled ? "md:-mt-[39px]" : "top-0"
        }`}
      >
        <div className={`bg-white rounded-2xl  `}>
          <div
            className={` grid lg:grid-cols-3 md:grid-cols-2 bg-white rounded-2xl shadow-xl p-1 md:p-4 z-50 w-auto md:h-auto `}
          >
            <div className="  flex flex-col lg:flex-row lg:col-span-2">
              <div className=" relative p-2 rounded-xl">
                <Image
                  src={banner2}
                  width={600}
                  height={300}
                  alt="banner"
                  className="rounded-2xl xl:h-full h-40 lg:h-56"
                />
                <h2 className=" absolute p-4 lg:p-8 text-2xl md:text-3xl lg:text-4xl text-white bottom-0">
                  Privacy <br /> & Security
                </h2>
              </div>
              <div className=" relative p-2 rounded-xl ">
                <Image
                  width={600}
                  height={300}
                  src={banner3}
                  alt="banner"
                  className="rounded-2xl xl:h-full h-40 md:h-32 lg:h-56"
                />
                <h2 className=" absolute p-4 lg:p-8 text-2xl md:text-3xl lg:text-4xl bottom-0">
                  Company
                </h2>
              </div>
            </div>
            <div className="bg-white p-4">
              {Alldata?.supportData?.map((items, index) => (
                <div key={index} className="">
                  <div className="flex items-center gap-2 py-1 md:py-4 lg:py-1 xl:py-4">
                    <div className="size-10 text-[#8e8d8d] bg-[#efefef] rounded-full p-2">
                      {items.btn}
                    </div>
                    <div className="">
                      <div className="text-md text-gray-600">{items.name}</div>
                      <div className="text-xs text-[#6e6d6d] ">
                        {items.paragraph}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SupportHover;
