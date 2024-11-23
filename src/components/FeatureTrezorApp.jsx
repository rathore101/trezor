"use client";
import { useState, useRef, useEffect } from "react";
import React from "react";
import ArrowUpRight from "@/assets/ArrowUpRight";
import CloseNavIcon from "@/assets/CloseNavIcon";
import Link from "next/link";
import { Alldata } from "./Alldata";

function FeatureTrezorApp() {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

  const toggle = () => setIsOpen(!isOpen);

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
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <div className="">
      <button
        className="bg-[#00854d] text-white size-9 md:size-14 rounded-full p-2"
        onClick={toggle}
      >
        <ArrowUpRight />
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-60 z-50">
          <div
            ref={modalRef}
            className="h-auto lg:w-[60%] w-full bg-white rounded-3xl p-2 md:p-6"
          >
            <div className="flex relative items-center justify-between gap-6 p-6">
              <h2 className="text-2xl font-medium md:text-5xl md:text-center text-start">
                Features of Trezor Suite app
              </h2>
              <button
                onClick={toggle}
                className="p-2 rounded-full bg-[#eeeeee] text-[#797979]"
              >
                <CloseNavIcon />
              </button>
            </div>
            <div className="text-left text-2xl overflow-hidden overflow-y-scroll h-[650px] p-2 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {Alldata?.FeaturesTrezorApp?.trezorSuite?.map((items) => (
                  <div
                    key={items.id}
                    className="border-2 border-[#efefef] rounded-xl p-3"
                  >
                    <Link href={items.url}>
                      <div className="rounded-full flex items-center gap-5 py-3">
                        <div className="bg-[#e5f3ed] text-[#106148] p-3 rounded-full z-50 size-12">
                          {items.btn}
                        </div>
                        <div className="text-2xl">{items.name}</div>
                      </div>
                      <div className="text-sm text-[#797979]">
                        {items.paragraph}
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FeatureTrezorApp;
