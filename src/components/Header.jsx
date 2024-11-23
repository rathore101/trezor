"use client";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import Alldata from "./Alldata";
import MenuOutline from "@/assets/MenuOutline";
import CloseNavIcon from "@/assets/CloseNavIcon";
import GetBtnIcon from "@/assets/GetBtnIcon";
import Country from "@/components/Country";
import Button from "@/components/Button";
import Logo from "@/assets/Logo";
function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className=" overflow-hidden">
      <div>
        <nav className="flex h-14 md:h-16 gap-3 px-5 w-full max-w-full mt-2 mx-0 md:mx-10 fixed z-50 ">
          {/* fixed z-50 */}
          <div className="rounded-full w-[80%] 2xl:w-[85%] py-3 bg-white shadow-sm flex justify-between items-center px-5">
            <div className="w-24">
              <Link href="/">
                <Logo />
              </Link>
            </div>
            {/* ++++++++++++++++++++++++++++++++++++Star Nav+++++++++++++++++++++++++++++ */}
            <div className="hidden lg:block">
              <ul className="flex gap-14 text-[#797979]  ">
                <li className=" hover:text-gray-700">Products</li>
                <li className=" hover:text-gray-700">App</li>
                <li className=" hover:text-gray-700">Conis</li>
                <li className=" hover:text-gray-700"> Learn & Support</li>
              </ul>
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
          <div className="flex justify-center  w-auto  text-white items-center  rounded-full bg-[#0f6148]">
            <div className="hidden lg:block ">
              <Button>Get your trezor</Button>
            </div>
            <div className="lg:hidden rounded-full md:p-4 p-3 bg-[#0f6148] ">
              <GetBtnIcon />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;

// <div className="flex justify-center  w-auto  text-white items-center  rounded-full bg-[#0f6148]">
//   <div className="hidden lg:block ">
//     <Button className="hover:bg-[#0b3d2e] hover:py-5">
//       <Link href="#">Get your trezor</Link>
//     </Button>
//   </div>
//   <div className="lg:hidden rounded-full md:p-4 p-3 bg-[#0f6148] ">
//     <Link href="#">
//       <GetBtnIcon />
//     </Link>
//   </div>
// </div>

//     {/* ++++++++++++++++++++++++++++++++++++Phone Screen+++++++++++++++++++++++++++++ */}
//     <div>
//       <button className="lg:hidden" onClick={toggkeNavbar}>
//         {isClick ? <CloseNavIcon /> : <MenuOutline />}
//       </button>
//       {isClick && (
//         <div className="lg:hidden relative">
//           <div className=" relative">
//             <ul className="bg-white shadow-md absolute font-medium text-xl gap-3 top-8 w-[310px]  rounded-lg -left-[168px] text-[#797979] p-5 ">
//               <Link href="/products" className="block py-2">
//                 Products
//               </Link>
//               <Link href="/trezor-suite" className="block py-2">
//                 App
//               </Link>
//               <Link href="/coins" className="block py-2">
//                 Coins
//               </Link>
//               <Link href="/learn&support" className="block py-2">
//                 Learn & Support
//               </Link>
//               <div className="">
//                 <Country />
//                 <h2>cart</h2>
//               </div>
//             </ul>
//             <div className=" "></div>
//           </div>
//         </div>
//       )}
//       {/* {isClick ? "bg-transparent backdrop-blur-sm" : ""} */}
//     </div>
//     {/* ++++++++++++++++++++++++++++++++++++End Phone Screen+++++++++++++++++++++++++++++ */}
//     <div className="hidden lg:block">
//       <div className="flex justify-center items-center ">
//         <div className="flex justify-center items-center">
//           <Country />
//           <h2>cart</h2>
//         </div>
//       </div>
//     </div>
//   </div>
//   <div className="flex justify-center  w-auto  text-white items-center  rounded-full bg-[#0f6148]">
//     <div className="hidden lg:block ">
//       <Button>Get your trezor</Button>
//     </div>
//     <div className="lg:hidden rounded-full md:p-4 p-3 bg-[#0f6148] ">
//       <GetBtnIcon />
//     </div>
//   </div>
// </nav>;

{
  /* <div className="hidden lg:block">
        <div className="flex justify-center items-center ">
          <div className="flex justify-center items-center">
            <Country />
            <h2>cart</h2>
          </div>
        </div>
      </div>
    </div> */
}
