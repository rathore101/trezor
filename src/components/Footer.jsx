"use client";
import { useState } from "react";
import Logo from "@/assets/Logo";
import Link from "next/link";
import React from "react";
// import Alldata from "@/components/Alldata";
import MinusIcon from "@/assets/MinusIcon";
import PlusIcon from "@/assets/PlusIcon";
import { Alldata } from "./Alldata";

function Footer() {
  const [isClick, setIsClick] = useState(false);
  const toggleSection = (section) => {
    setIsClick((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <div className=" bg-[#171717] rounded-t-2xl text-white px-5 py-10 xl:p-0">
      <div className=" container mx-auto">
        <div className=" xl:p-14">
          <div className="xl:flex xl:grid-cols-4 justify-between gap-0">
            <div className="mb-10 xl:mb-0">
              <div className="mb-5 w-44 text-white">
                <Logo />
              </div>
              <p className="text-sm text-[#dddcdc]">
                a part of SatoshiLabs Group
              </p>
            </div>
            {/* ++++++++++++++++++++++++++++Product++++++++++++++++++++++++++++++++++++++++++ */}
            <ul className="xl:border-none border-b border-b-[#797979]">
              <div
                className="xl:text-sm text-2xl md:text-3xl my-4 xl:mb-4 flex justify-between"
                onClick={() => toggleSection("product")}
              >
                Products
                <div className="text-[#797979] xl:hidden">
                  {isClick["product"] ? <MinusIcon /> : <PlusIcon />}
                </div>
              </div>

              {Alldata.footer.product?.map((item, index) => (
                <li
                  key={index}
                  className={`${isClick["product"] ? "" : "hidden"} xl:block`}
                >
                  <Link href={item.url}>
                    <div className="py-2  hover:text-[#797979]">
                      {item.name}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
            {/* ++++++++++++++++++++++++++++App++++++++++++++++++++++++++++++++++++++++++ */}
            <ul className="xl:border-none border-b border-b-[#797979] xl:hidden">
              <div className="xl:text-sm text-2xl md:text-3xl my-4 xl:mb-4 flex justify-between">
                App
              </div>
            </ul>
            {/* ++++++++++++++++++++++++++++Coins++++++++++++++++++++++++++++++++++++++++++ */}
            <ul className="xl:border-none border-b border-b-[#797979] xl:hidden">
              <div className="xl:text-sm text-2xl md:text-3xl my-4 xl:mb-4 flex justify-between">
                Coins
              </div>
            </ul>
            {/* ++++++++++++++++++++++++++++Learn++++++++++++++++++++++++++++++++++++++++++ */}
            <ul className="xl:border-none border-b border-b-[#797979]">
              <div
                className="xl:text-sm text-2xl md:text-3xl my-4 flex justify-between"
                onClick={() => toggleSection("learn")}
              >
                Learn
                <div className="text-[#797979] xl:hidden">
                  {isClick["learn"] ? <MinusIcon /> : <PlusIcon />}
                </div>
              </div>
              {Alldata.footer.learn?.map((item, index) => (
                <li
                  key={index}
                  className={`${isClick["learn"] ? "" : "hidden"} xl:block`}
                >
                  <Link href={item.url}>
                    <div className="py-2 hover:text-[#797979]">{item.name}</div>
                  </Link>
                </li>
              ))}
            </ul>
            {/* ++++++++++++++++++++++++++++Other++++++++++++++++++++++++++++++++++++++++++ */}
            <ul className="xl:border-none border-b border-b-[#797979] mb-14 xl:mb-0">
              <div
                className="xl:text-sm text-2xl md:text-3xl my-4 flex justify-between"
                onClick={() => toggleSection("other")}
              >
                Other
                <div className="text-[#797979] xl:hidden">
                  {isClick["other"] ? <MinusIcon /> : <PlusIcon />}
                </div>
              </div>
              {Alldata.footer.other?.map((item, index) => (
                <li
                  key={index}
                  className={`${isClick["other"] ? "" : "hidden"} xl:block`}
                >
                  <Link href={item.url}>
                    <div className="py-2 hover:text-[#797979]">{item.name}</div>
                  </Link>
                </li>
              ))}
            </ul>
            {/* ++++++++++++++++++++++++++++Icons++++++++++++++++++++++++++++++++++++++++++ */}
          </div>
          <div className="flex flex-wrap justify-center xl:justify-start space-x-4 xl:py-4 mb-6 xl:mb-0">
            {Alldata?.FooterIcons?.Icons?.map((item) => (
              <div key={item.id} className="">
                <div className=" size-5 md:size-8">
                  <Link href="#">{item.btn}</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="xl:flex xl:justify-between xl:items-center xl:py-4 xl:px-10 xl:bg-[#1f1f1f]">
        <p className="text-sm text-center  text-white/70">
          Copyright belongs to Trezor company s.r.o. All rights reserved.
        </p>
        <div className=" cursor-pointer xl:block hidden">
          <span className=" flex mr-24 gap-2 pr-10">
            Cookies{" "}
            <div className="text-[#797979]">
              <PlusIcon />
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
