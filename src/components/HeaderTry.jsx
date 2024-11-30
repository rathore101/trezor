"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import MenuOutline from "@/assets/MenuOutline";
import CloseNavIcon from "@/assets/CloseNavIcon";
import GetBtnIcon from "@/assets/GetBtnIcon";
import Button from "@/components/Button";
import Country from "@/components/Country";
import Logo from "@/assets/Logo";
import UpArrow from "@/assets/UpArrow";
import PlusIcon from "@/assets/PlusIcon";
import MinusIcon from "@/assets/MinusIcon";
import ProductHover from "./ProductHover";
import SupportHover from "./SupportHover";

function Header() {
  // Close Menu
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
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
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isOpen]);

  // Sub-navigation toggle(mobile view)
  const [isOpenSubNav, setIsOpenSubNav] = useState({});
  const toggleSubNav = (section) => {
    setIsOpenSubNav((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // Header window scroll
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="z-50">
      {/* Top Announcement Bar */}
      <div className="md:block hidden">
        <div className="bg-[#00854d] text-white flex justify-center items-center py-2">
          <h1>
            Black Friday is live!&nbsp;
            <Link href="#" className="underline hover:no-underline">
              Shop Now
            </Link>
          </h1>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`flex h-14 md:h-16 gap-3 md:px-2 px-2 w-full mt-2 fixed z-50 ${
          scrolled ? "top-1" : "md:top-10"
        }`}
        ref={modalRef}
      >
        <div className="relative rounded-full w-[80%] xl:w-[85%] md:w-[88%] lg:w-[80%] py-3 bg-white shadow-sm flex justify-between items-center px-5">
          {/* Logo */}
          <div className="w-24 text-black">
            <Link href="/">
              <Logo />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="">
            <div className={` md:block ${isOpen ? "block" : "hidden"}`}>
              <ul
                className={` z-40 p-2  ml-5 md:ml-0 items-center md:flex md:gap-0 lg:gap-10 xl:gap-14 text-[#797979] md:static absolute left-0 w-full top-full bg-white  md:bg-transparent overflow-hidden overflow-y-scroll h-[550px]  md:overflow-hidden md:h-auto md:shadow-none shadow-lg  md:p-0 rounded-lg md:rounded-none md:w-auto ${
                  isOpen ? "block" : "hidden"
                }`}
              >
                {/* Product Menu */}
                <li
                  className="relative group md:px-3 md:py-0 py-3 "
                  onClick={() => toggleSubNav("product")}
                >
                  <div className="flex justify-between items-center cursor-pointer gap-1 text-gray-500 group-hover:text-black">
                    <span>Product</span>
                    <div className="md:hidden">
                      {isOpenSubNav["product"] ? <MinusIcon /> : <PlusIcon />}
                    </div>
                    <div className="hidden md:block group-hover:rotate-0 transform rotate-180 transition-all">
                      <UpArrow />
                    </div>
                  </div>
                  {/* Sub-navigation */}
                  <div
                    className={`absolute md:group-hover:flex md:hidden ${
                      isOpenSubNav["product"] ? "flex " : "hidden"
                    } right-0 top-full mt-2 rounded-lg shadow-lg p-1 flex-col `}
                  >
                    <ProductHover />
                  </div>
                </li>

                {/* App */}
                <li className="md:px-3 md:py-0 py-3">
                  <div className="cursor-pointer text-gray-500 group-hover:text-black">
                    <span>App</span>
                  </div>
                </li>

                {/* Coins */}
                <li className="md:px-3 md:py-0 py-3">
                  <div className="cursor-pointer text-gray-500 group-hover:text-black">
                    <span>Coins</span>
                  </div>
                </li>

                {/* Learn & Support */}
                <li
                  className="relative group md:px-3 md:py-0 py-3 "
                  onClick={() => toggleSubNav("support")}
                >
                  <div className="flex justify-between items-center cursor-pointer gap-1 text-gray-500 group-hover:text-black">
                    <span>Learn & Support</span>
                    <div className="md:hidden">
                      {isOpenSubNav["support"] ? <MinusIcon /> : <PlusIcon />}
                    </div>
                    <div className="hidden md:block group-hover:rotate-0 transform rotate-180 transition-all">
                      <UpArrow />
                    </div>
                  </div>
                  {/* Sub-navigation */}
                  <div
                    className={`absolute md:group-hover:flex md:hidden ${
                      isOpenSubNav["support"] ? "flex" : "hidden"
                    } right-0 top-full mt-2 rounded-lg shadow-lg p-1 flex-col gap-2`}
                  >
                    <SupportHover />
                  </div>
                </li>

                {/* Mobile Country Selector */}
                <div className="md:hidden ">
                  <div className="py-3 z-30">
                    <Country />
                  </div>{" "}
                  <div className="pl-2 flex items-center gap-1">
                    <p>Cart</p>
                    <span className="bg-[#efefef] rounded-full p-1 flex items-center justify-center size-7">
                      0
                    </span>
                  </div>
                </div>
              </ul>
            </div>
            <div onClick={toggle} className="md:hidden text-black">
              {isOpen ? <CloseNavIcon /> : <MenuOutline />}
            </div>
          </div>
          <div className="hidden md:flex items-center ">
            <div className=" border-r-2  border-gray-400 pr-1">
              <Country />
            </div>
            <div className="pl-2 flex items-center gap-1">
              <p>Cart</p>
              <span className="bg-[#efefef] rounded-full p-1 flex items-center justify-center size-7">
                0
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-center  w-auto text-white items-center rounded-full bg-[#0f6148]">
          <div className="hidden lg:block ">
            <Button>Get your trezor</Button>
          </div>
          <div className="lg:hidden rounded-full md:p-4 p-3 bg-[#0f6148] ">
            <GetBtnIcon />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
