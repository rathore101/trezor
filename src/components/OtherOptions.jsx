"use client";
import React from "react";
import { useState, useEffect, useRef } from "react";
import WindowIcon from "@/assets/WindowIcon";
import AppleIcomM from "@/assets/AppleIconM";
import AppleIntel from "@/assets/AppleIntel";
import LinuxIcon from "@/assets/LinuxIcon";
import LinuxArmIcon from "@/assets/LinuxArmIcon";
import AndroidIcon from "@/assets/AndroidIcon";
import AppleIcon from "@/assets/AppleIcon";
import Link from "next/link";
import DownArrow from "@/assets/DownArrow";
import UpArrow from "@/assets/UpArrow";
import Alldata from "./Alldata";

function OtherOptions() {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);
  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
  }, [isOpen]);

  return (
    <div className=" absolute z-30 " ref={modalRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center underline p-2 rounded hover:no-underline"
      >
        OtherOptions
        <span className="ml-1">{isOpen ? <UpArrow /> : <DownArrow />}</span>
      </button>
      {isOpen && (
        <div
          className=" flex mt-3 md:-ml-24 md:mt-8 text-black "
          onClick={handleOutsideClick}
        >
          <div
            className="sm:w-[360px] md:sm:w-[400px] w-auto rounded-lg px-3 shadow-md bg-white"
            ref={modalRef}
          >
            <div className=" grid sm:grid-cols-2 gap-2 ">
              <div className="col-span-full">
                <h2 className="text-[#767676]  mt-3">For Window</h2>
              </div>
              <Link href="#">
                <div className=" flex justify-center items-center bg-[#f6f6f6] rounded-lg px-2 py-3 hover:text-[#0f6148] hover:bg-[#d6d5d5]">
                  <div className=" text-center ">
                    <div className="flex justify-center items-center my-4">
                      <WindowIcon />
                    </div>
                    <p>Windows</p>
                    <span className="text-[#767676]  mt-3">64-bit</span>
                  </div>
                </div>
              </Link>
              {/* ++++++++++++++++++++++++++++++For Mac+++++++++++++++++++++++++++++++++++++ */}
              <div className="col-span-full">
                <h2 className="text-[#767676]  mt-3">For Mac</h2>
              </div>
              <Link href="#">
                <div className=" flex justify-center items-center bg-[#f6f6f6] rounded-lg px-2 py-3 hover:text-[#0f6148] hover:bg-[#d6d5d5]">
                  <div className=" text-center ">
                    <div className="flex justify-center items-center mt-3">
                      <AppleIntel />
                    </div>
                    <p>Intel CPU</p>
                    <span className="text-[#767676]  mt-3">2020 Models</span>
                  </div>
                </div>
              </Link>
              <Link href="#">
                <div className=" flex justify-center items-center bg-[#f6f6f6] rounded-lg px-2 py-3 hover:text-[#0f6148] hover:bg-[#d6d5d5]">
                  <div className=" text-center ">
                    <div className="flex justify-center items-center mt-3">
                      <AppleIcomM />
                    </div>
                    <p>Apple M Series</p>
                    <span className="text-[#767676]  mt-3">2020+ Models</span>
                  </div>
                </div>
              </Link>
              {/* ++++++++++++++++++++++++++++++For Linux+++++++++++++++++++++++++++++ */}
              <div className="col-span-full">
                <h2 className="text-[#767676]  mt-3">For Linux</h2>
              </div>
              <Link href="#">
                <div className=" flex justify-center items-center bg-[#f6f6f6] rounded-lg px-2 py-3 hover:text-[#0f6148] hover:bg-[#d6d5d5]">
                  <div className=" text-center ">
                    <div className="flex justify-center items-center my-3">
                      <LinuxIcon />
                    </div>
                    <p>Linux (x86_64)</p>
                    <span className="text-[#767676]  mt-3">64-bit</span>
                  </div>
                </div>
              </Link>
              <Link href="#">
                <div className=" flex justify-center items-center bg-[#f6f6f6] rounded-lg px-2 py-3 hover:text-[#0f6148] hover:bg-[#d6d5d5]">
                  <div className=" text-center ">
                    <div className="flex justify-center items-center my-3">
                      <LinuxArmIcon />
                    </div>
                    <p>Linux (arm64)</p>
                    <span className="text-[#767676]  mt-3">64-bit</span>
                  </div>
                </div>
              </Link>
              {/* ++++++++++++++++++++++++++++++For Mobile+++++++++++++++++++++++++++++++++++++ */}
              <div className="col-span-full">
                <h2 className="text-[#767676]  mt-3">For Mobile</h2>
              </div>
              <Link href="#">
                <div className=" flex justify-center items-center bg-[#f6f6f6] rounded-lg px-2 py-3 hover:text-[#0f6148] hover:bg-[#d6d5d5]">
                  <div className=" text-center ">
                    <div className="flex justify-center items-center my-5">
                      <AppleIcon />
                    </div>
                    <p className="text-[#767676]  mt-3">iOS</p>
                  </div>
                </div>
              </Link>
              <Link href="#">
                <div className=" flex justify-center items-center bg-[#f6f6f6] rounded-lg px-2 py-3 hover:text-[#0f6148] hover:bg-[#d6d5d5]">
                  <div className=" text-center ">
                    <div className="flex justify-center items-center my-4">
                      <AndroidIcon />
                    </div>
                    <p className="text-[#767676]  mt-3">Android</p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="text-[#767676] my-4">
              <div className=" flex gap-4  my-2">
                <h2>Version: v24.10.1</h2>
                <span className=" underline hover:no-underline">
                  <Link href="#">Signature</Link>
                </span>
              </div>
              <div className=" flex gap-4">
                <span className=" underline hover:no-underline">
                  <Link href="#">Signing key 2020</Link>
                </span>
                <span className=" underline hover:no-underline">
                  <Link href="#">Signing key 2021</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default OtherOptions;

// {
//   Alldata?.optionDrop?.map((items, index) => (
//     <div key={index} className="grid sm:grid-cols-2 gap-2">
//       <div className="col-span-full">{items.title}</div>
//       <div className="flex  justify-center items-center bg-[#f6f6f6] rounded-lg px-2 py-3 hover:text-[#0f6148] hover:bg-[#d6d5d5]">
//         <Link href={items.url}>
//           <div className="">{items.icon}</div>
//           <div className="">{items.name}</div>
//           <div className="text-[#767676] ">{items.paragraph}</div>
//         </Link>
//       </div>
//     </div>
//   ));
// }
