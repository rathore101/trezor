"use client";
import React from "react";
import Logo from "@/assets/Logo";
import Country from "@/components/Country";
import Link from "next/link";
import Button from "@/components/Button";
import { useState } from "react";
import MenuOutline from "@/assets/MenuOutline";
import CloseNavIcon from "@/assets/CloseNavIcon";
import GetBtnIcon from "@/assets/GetBtnIcon";
import SideBlur from "./SideBlur";

function Header() {
  const [isClick, setIsClick] = useState(false);
  const toggkeNavbar = () => setIsClick(!isClick);
  return (
    <div className="">
      <div className="">
        <div className="hidden md:block">
          <h1 className="bg-[#00854d] flex w-full  text-white font-medium py-2 px-4 items-center justify-center">
            Apple Pay and Google Pay are temporarily unavailable for a few days.
            Please use other payment options.
          </h1>
        </div>
        <nav className="flex h-14 md:h-20 gap-3 px-5  max-w-full mt-2 mx-0 md:mx-10 ">
          <div className="rounded-full w-[85%] py-3 bg-white shadow-sm flex justify-between items-center px-5">
            <div className="w-24">
              <Link href="/">
                <Logo />
              </Link>
            </div>
            <div className="hidden lg:block">
              <ul className="flex gap-14 text-[#797979] ">
                <Link href="/">Products</Link>
                <Link href="/trezor-suite">App</Link>
                <Link href="/coins">Coins</Link>
                <Link href="/learn&support">Learn & Support</Link>
              </ul>
            </div>
            <div>
              <button className="lg:hidden" onClick={toggkeNavbar}>
                {isClick ? <CloseNavIcon /> : <MenuOutline />}
              </button>
              {isClick && (
                <div className="lg:hidden relative">
                  <div className=" relative">
                    <ul className="bg-white shadow-md absolute font-medium text-xl gap-3 top-8 w-[310px]  rounded-lg -left-[168px] text-[#797979] p-5 ">
                      <Link href="/" className="block py-2">
                        Products
                      </Link>
                      <Link href="/trezor-suite" className="block py-2">
                        App
                      </Link>
                      <Link href="/coins" className="block py-2">
                        Coins
                      </Link>
                      <Link href="/learn&support" className="block py-2">
                        Learn & Support
                      </Link>
                      <div className="">
                        <Country />
                        <h2>cart</h2>
                      </div>
                    </ul>
                    <div className=" "></div>
                  </div>
                </div>
              )}
              {/* {isClick ? "bg-transparent backdrop-blur-sm" : ""} */}
            </div>
            <div className="hidden lg:block">
              <div className="flex justify-center items-center ">
                <div className="flex justify-center items-center">
                  <Country />
                  <h2>cart</h2>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center w-auto text-white items-center  rounded-full bg-[#0f6148]">
            <div className="hidden lg:block">
              <Button>Get your trezor</Button>
            </div>
            <div className="lg:hidden rounded-full px-6">
              <GetBtnIcon />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;

{
  /*  */
}

// const [scrolled, setScrolled] = useState(false);

// useEffect(() => {
//   const handleScroll = () => {
//     if (window.scrollY > 0) {
//       setScrolled(true);
//     } else {
//       setScrolled(false);
//     }
//   };
//   window.addEventListener("scroll", handleScroll);
//   return () => {
//     window.removeEventListener("scroll", handleScroll);
//   };
// }, []);
