// import React from "react";

// function page() {
//   return <div>coins page</div>;
// }

// export default page;
"use client";
import { useState } from "react";
import DownArrow from "@/assets/DownArrow";
import Image from "next/image";
import checkVerify from "@/assets/img/checkVerify.jpg";

const DropdownGrid = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="min-w-full bg-white shadow-lg rounded-full">
      <div className="flex w-[90%] max-w-4xl mx-auto p-4">
        <div
          className={`grid bg-gray-100 rounded-md shadow-md overflow-hidden transition-all duration-300 ${
            isExpanded ? "grid-cols-2 h-auto" : "grid-cols-4 h-32"
          }`}
        >
          <div
            className={`relative transition-all duration-300 ${
              isExpanded ? "col-span-1" : "col-span-1"
            }`}
          >
            <Image
              src={checkVerify}
              alt="coin security"
              className="w-full h-full object-cover"
            />
          </div>

          <div
            className={` flex p-4 transition-all duration-300 ${
              isExpanded ? "col-span-1" : "col-span-3"
            }`}
          >
            <p
              className={`px-5 flex text-gray-700 transition-all duration-300 ${
                isExpanded ? "line-clamp-none" : "line-clamp-3"
              }`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              tempor venenatis justo, a dictum risus tincidunt id. Quisque
              euismod facilisis magna, et sodales nisi eleifend at. Ut venenatis
              lectus eu arcu commodo, id tincidunt augue porttitor.
            </p>
            <div className="flex w-[10%] h-12 justify-center mt-4">
              <button
                onClick={toggleExpand}
                className="flex px-4 py-2 justify-end items-center bg-blue-500 text-white rounded-full hover:bg-blue-800 transition-colors"
              >
                <span className="mr-2 ">
                  <DownArrow />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownGrid;
