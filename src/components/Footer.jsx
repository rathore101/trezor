"use client";
import { useState } from "react";
import Logo from "@/assets/Logo";
import Link from "next/link";
import React from "react";
import Alldata from "@/components/Alldata";
import MinusIcon from "@/assets/MinusIcon";
import PlusIcon from "@/assets/PlusIcon";

function Footer() {
  const [isClick, setIsClick] = useState(false);
  const toggleSection = (section) => {
    setIsClick((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <div className="bg-[#171717] rounded-t-2xl text-white px-5 py-10 lg:p-0">
      <div className="lg:px-32 lg:py-14">
        <div className="lg:flex lg:grid-cols-4 justify-between gap-10">
          <div className="mb-10 lg:mb-0">
            <div className="mb-5 w-28 text-white">
              <Logo />
            </div>
            <p className="">a part of SatoshiLabs Group</p>
          </div>
          {/* ++++++++++++++++++++++++++++Product++++++++++++++++++++++++++++++++++++++++++ */}
          <ul className="lg:border-none border-b border-b-[#797979]">
            <div
              className="lg:text-sm text-2xl my-4 lg:mb-4 flex justify-between"
              onClick={() => toggleSection("product")}
            >
              Products
              <div className="text-[#797979] lg:hidden">
                {isClick["product"] ? <MinusIcon /> : <PlusIcon />}
              </div>
            </div>

            {Alldata.footer.product?.map((item, index) => (
              <li
                key={index}
                className={`${isClick["product"] ? "" : "hidden"} lg:block`}
              >
                <Link href={item.url}>
                  <div className="py-2  hover:text-[#797979]">{item.name}</div>
                </Link>
              </li>
            ))}
          </ul>
          {/* ++++++++++++++++++++++++++++Learn++++++++++++++++++++++++++++++++++++++++++ */}
          <ul className="lg:border-none border-b border-b-[#797979]">
            <div
              className="lg:text-sm text-2xl my-4 flex justify-between"
              onClick={() => toggleSection("learn")}
            >
              Learn
              <div className="text-[#797979] lg:hidden">
                {isClick["learn"] ? <MinusIcon /> : <PlusIcon />}
              </div>
            </div>
            {Alldata.footer.learn?.map((item, index) => (
              <li
                key={index}
                className={`${isClick["learn"] ? "" : "hidden"} lg:block`}
              >
                <Link href={item.url}>
                  <div className="py-2 hover:text-[#797979]">{item.name}</div>
                </Link>
              </li>
            ))}
          </ul>
          {/* ++++++++++++++++++++++++++++Other++++++++++++++++++++++++++++++++++++++++++ */}
          <ul className="lg:border-none border-b border-b-[#797979] mb-14 lg:mb-0">
            <div
              className="lg:text-sm text-2xl my-4 flex justify-between"
              onClick={() => toggleSection("other")}
            >
              Other
              <div className="text-[#797979] lg:hidden">
                {isClick["other"] ? <MinusIcon /> : <PlusIcon />}
              </div>
            </div>
            {Alldata.footer.other?.map((item, index) => (
              <li
                key={index}
                className={`${isClick["other"] ? "" : "hidden"} lg:block`}
              >
                <Link href={item.url}>
                  <div className="py-2 hover:text-[#797979]">{item.name}</div>
                </Link>
              </li>
            ))}
          </ul>
          {/* ++++++++++++++++++++++++++++Icons++++++++++++++++++++++++++++++++++++++++++ */}
        </div>
        <div className="flex flex-wrap justify-center lg:justify-start space-x-4 lg:py-4 mb-6 lg:mb-0">
          {Alldata?.FooterIcons?.Icons?.map((item) => (
            <div key={item.id} className="">
              <div className=" size-7">
                <Link href="#">{item.btn}</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="lg:flex lg:justify-between lg:items-center lg:py-4 lg:px-10 lg:bg-[#1f1f1f]">
          <p className="text-sm text-center  text-white/70">
            Copyright belongs to Trezor company s.r.o. All rights reserved.
          </p>
          <span className="mr-24 pr-10 lg:block hidden">Cookies</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
