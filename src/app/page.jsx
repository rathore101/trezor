"use client";
import { useState, useEffect, useRef } from "react";
import React from "react";
import DropDownComo from "@/components/DropDownComo";
import SecutityPrivacyComo from "@/components/SecutityPrivacyComo";
import SportsImages from "@/components/SportsImages";
import HeroSection1 from "@/components/HeroSection1";
import HeroSection2 from "@/components/HeroSection2";
import Footer from "@/components/Footer";
import GoToTop from "@/components/GoToTop";
// import HeaderTry from "@/components/Header";
import Header from "@/components/Header";

function Home(props) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {/* <HeaderTry /> */}
      <Header />
      <div className=" relative lg:p-24 md:px-5 px-2 py-8 ">
        <div className=" fixed text-end flex justify-center items-center right-4 md:right-7 top-[90%] xl:right-16  z-50">
          <GoToTop />
        </div>
        <HeroSection1 />
        <HeroSection2 />
        <DropDownComo />
        <SecutityPrivacyComo />
        <SportsImages />
      </div>

      <Footer />
    </>
  );
}

export default Home;
