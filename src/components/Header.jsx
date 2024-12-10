"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Logo from "@/assets/Logo";
import GetBtnIcon from "@/assets/GetBtnIcon";
import Button from "@/components/Button";
import DownArrow from "@/assets/DownArrow";
import { Alldata } from "./Alldata";
import MenuOutline from "@/assets/MenuOutline";
import CloseNavIcon from "@/assets/CloseNavIcon";
import PlusIcon from "@/assets/PlusIcon";
import MinusIcon from "@/assets/MinusIcon";
import ProductHover from "./ProductHover";
import SupportHover from "./SupportHover";
import Country from "./Country";
import Cart from "./Cart";

function Header() {
  const [isCloseOpen, setIsCloseOpen] = useState(false);
  const toggle = () => setIsCloseOpen(!isCloseOpen);
  const [isHover, setIsHover] = useState(false);
  const modalRef = useRef(null);
  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setIsCloseOpen(false);
    }
  };
  useEffect(() => {
    if (isCloseOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isCloseOpen]);

  const [isOpenSubNav, setIsOpenSubNav] = useState({});
  const toggleSubNav = (section) => {
    setIsOpenSubNav((prev) => ({
      [section]: !prev[section],
    }));
  };
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className={``}>
      {isCloseOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-0 z-40"></div>
      )}
      {isHover && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-xl z-40"></div>
      )}
      <div className="md:block hidden">
        <div className="bg-[#00854d] text-white flex justify-center items-center py-1">
          <h1>
            Black Friday is live!&nbsp;
            <Link href="#" className="underline hover:no-underline">
              Shop Now
            </Link>
          </h1>
        </div>
      </div>
      <main
        className={`flex h-14 md:h-16 gap-2 xl:px-40 md:px-4 px-2 w-full mt-1 fixed z-50 ${
          scrolled ? "top-2" : "md:top-10"
        } `}
        ref={modalRef}
      >
        <nav className=" lg:w-[83%] xl:w-[88%] 2xl:w-[88%]  flex justify-between items-center rounded-full bg-white shadow-lg w-full px-5">
          {/* Logo */}
          <section className=" w-24 text-black">
            <Link href="/">
              <Logo />
            </Link>
          </section>
          <section className="">
            <div className="flex items-center md:gap-10 transition-all ">
              {Alldata?.header.map((items) => (
                <div
                  className="relative hidden md:block"
                  key={items.id}
                  onMouseEnter={() => setIsHover(items.id)}
                  onMouseLeave={() => setIsHover(null)}
                >
                  <section
                    className={`md:flex items-center justify-between gap-1 cursor-pointer group transition-all text-[#797979]`}
                  >
                    <div className="flex items-center group-hover:text-[#3d3b3b] transition-all ">
                      {items.name}
                    </div>
                    {items.arrow && (
                      <div>
                        <div
                          className={`group-hover:text-[#3d3b3b] transition-all rotate-0 group-hover:rotate-180 hidden md:block ${
                            isHover === items.id ? "" : "hidden"
                          }`}
                        >
                          {items.arrow}
                        </div>
                      </div>
                    )}
                    {isHover === items.id && items.subMenu && (
                      <div>{items.subMenu}</div>
                    )}
                  </section>
                </div>
              ))}
            </div>
          </section>
          {/* Mobile screen */}

          <div className="relative md:hidden ">
            <div onClick={toggle} className="cursor-pointer text-black">
              {isCloseOpen ? <CloseNavIcon /> : <MenuOutline />}
            </div>
            <ul
              className={`fixed mt-5 left-0 w-full bg-white shadow rounded-2xl p-3  ${
                isCloseOpen ? "block" : "hidden"
              } ${
                isOpenSubNav
                  ? "overflow-hidden overflow-y-scroll h-[400px]"
                  : "overflow-hidden overflow-y-scroll h-[400px]"
              }`}
            >
              <li
                className=" relative flex justify-between items-center py-4 text-gray-500"
                onClick={() => toggleSubNav("product")}
              >
                Products
                {isOpenSubNav["product"] ? <MinusIcon /> : <PlusIcon />}
              </li>
              <div className="  border-b-2  border-gray-200">
                {isOpenSubNav["product"] ? <ProductHover /> : null}
              </div>
              <li className=" flex justify-between items-center py-4  border-b-2 text-gray-500 border-gray-200">
                App
              </li>
              <li className=" flex justify-between items-center py-4  border-b-2 text-gray-500 border-gray-200">
                Coins
              </li>
              <li
                className=" flex justify-between items-center py-4 text-gray-500"
                onClick={() => toggleSubNav("support")}
              >
                Learn & Support
                {isOpenSubNav["support"] ? <MinusIcon /> : <PlusIcon />}
              </li>
              <div className="  border-b-2  border-gray-200 ">
                {isOpenSubNav["support"] ? <SupportHover /> : null}
              </div>
              <div className="py-2 border-b-2 border-gray-200 text-gray-500">
                <div className="  py-4 flex items-center gap-1">
                  <span className=" rounded-full px-9 flex items-center justify-center size-7">
                    <Cart />
                  </span>
                </div>
              </div>
            </ul>
          </div>
          <div className="  hidden md:block">
            <div className="pl-2 flex items-center gap-1">
              <span>
                <Cart />
              </span>
            </div>
          </div>
        </nav>
        <section className="flex items-center text-white rounded-full bg-[#0f6148]">
          <Button className="hidden lg:block  w-full">Get your trezor</Button>
          <div className="lg:hidden rounded-full md:p-4 p-3 bg-[#0f6148] ">
            <GetBtnIcon />
          </div>
        </section>
      </main>
    </div>
  );
}

export default Header;
