"use client";
import { useState } from "react";
import React from "react";

import { Alldata } from "@/components/Alldata";
import DownArrow from "@/assets/DownArrow";
import UpArrow from "@/assets/UpArrow";

function DropDownComo() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = (id) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };
  return (
    <div className="relative">
      {Alldata?.DropDownData?.DownData.map((item) => (
        <div key={item.id} className="py-2">
          <div
            className={` md:p-5 w-full h-auto bg-white rounded-3xl overflow-hidden ${
              isOpen[item.id]
                ? "md:grid md:grid-cols-2 grid-cols-3 p-2 "
                : "grid grid-cols-4 md:h-40 lg:h-60  p-2"
            } `}
          >
            <div
              className={`bg-[#eeeeee] h-auto rounded-xl overflow-hidden ${
                isOpen[item.id]
                  ? "hidden md:block  md:w-auto md:px-10 md:py-7 xl:px-20 lg:py-8 md:mr-5 "
                  : "hidden md:block"
              }`}
            >
              {item.img}
            </div>
            <div
              className={`col-span-3 relative ${
                isOpen[item.id]
                  ? "grid col-start-2 md:px-3 md: "
                  : "md:pl-7 col-span-4 md:col-span-3 overflow-hidden "
              }`}
            >
              <div className=" ">
                <div className="flex h-24 items-center">
                  <div className="md:hidden  w-24 rounded-2xl overflow-hidden flex-shrink-0">
                    {item.img}
                  </div>
                  <div className="text-sm xs:text-xl md:text-3xl lg:text-4xl md:mt-5 absolute top-0 pl-[105px] md:pl-0 xs:pr-12 pr-10 md:pr-10">
                    <div className="text-black  font-sans pt-1">
                      {item.name}
                    </div>
                    <div className="text-[#106148] pt-1 text-xs xs:text-sm md:text-md font-medium md:py-1">
                      {item.span}
                    </div>
                  </div>
                </div>
                <div
                  className={`text-lg text-[#797979] transform md:transition-none transition-all duration-1000 md:duration-400 ${
                    isOpen[item.id]
                      ? " md:mt-16 lg:mt-24 xl:mt-28 "
                      : "opacity-0 -translate-y-10 h-7"
                  }`}
                >
                  <div className="pt-8 mb-3 text-sm md:text-md font-medium ">
                    {item.paragraph}
                  </div>
                  <div className="md:hidden rounded-2xl overflow-hidden transition-all duration-500 ">
                    {item.img}
                  </div>
                </div>
                <div
                  className=" absolute top-0 right-0 flex text-end justify-end md:left-24 os:left-[300px] xs:left-[280px] rounded-full py-2  xs:p-2"
                  onClick={() => toggle([item.id])}
                >
                  <div className="bg-[#eeeeee] md:p-4 p-2 rounded-full text-[#7f7f7f]">
                    {isOpen[item.id] ? <UpArrow /> : <DownArrow />}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DropDownComo;
