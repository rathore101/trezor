"use client";
import { useState } from "react";
import React from "react";
import Alldata from "@/components/Alldata";
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
    <div>
      <div>
        {Alldata?.DropDownData?.DownData.map((item) => (
          <div key={item.id} className="py-2">
            <div
              className={` md:p-5 w-full h-auto bg-white rounded-2xl overflow-hidden ${
                isOpen[item.id]
                  ? "md:grid md:grid-cols-2 grid-cols-3 p-2 "
                  : "grid grid-cols-4 md:h-60 p-2"
              } `}
            >
              <div
                className={`bg-[#eeeeee] h-auto rounded-xl overflow-hidden ${
                  isOpen[item.id]
                    ? "hidden md:block md:w-auto lg:px-7 lg:py-4 md:mr-5 "
                    : "hidden md:block"
                }`}
              >
                {item.img}
              </div>
              <div
                className={`col-span-3 relative ${
                  isOpen[item.id]
                    ? "grid col-start-2 md:px-3 md:mt-10 xl:mt-0 "
                    : "md:pl-7 col-span-4 md:col-span-3 overflow-hidden "
                }`}
              >
                <div className=" ">
                  <div className="flex h-24 items-center">
                    <div className="md:hidden h-full w-24 rounded-2xl overflow-hidden flex-shrink-0">
                      {item.img}
                    </div>
                    <div className="text-xl md:text-3xl lg:text-4xl md:mt-7 mt-4 pl-2 pr-10 md:pr-10">
                      <div>{item.name}</div>
                      <div className="text-[#106148] text-sm md:text-xl md:my-4">
                        {item.span}
                      </div>
                    </div>
                  </div>
                  <div
                    className={`text-lg text-[#797979] transform transition-all duration-1000 ${
                      isOpen[item.id]
                        ? " md:mt-16 lg:mt-24 xl:mt-28 "
                        : "opacity-0 -translate-y-10 h-7"
                      // "opacity-100 translate-y-0 mt-16 md:mt-16 lg:mt-24 xl:mt-28" : "opacity-0 -translate-y-10 hidden"
                    }`}
                  >
                    <div className="py-8 text-sm md:text-xl ">
                      {item.paragraph}
                    </div>
                    <div className="md:hidden rounded-2xl overflow-hidden transition-all duration-500 ">
                      {item.img}
                    </div>
                  </div>
                  <div
                    className=" absolute top-0 right-0 flex text-end justify-end md:left-24 left-[280px] rounded-full  p-2"
                    onClick={() => toggle([item.id])}
                  >
                    <div className="bg-[#eeeeee] md:p-4 p-2 rounded-full">
                      {isOpen[item.id] ? <UpArrow /> : <DownArrow />}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DropDownComo;
