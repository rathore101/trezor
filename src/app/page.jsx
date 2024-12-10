"use client";
import { useState, useEffect, useRef } from "react";
import React from "react";
import HeroSection1 from "@/components/HeroSection1";
import HeroSection2 from "@/components/HeroSection2";
import Footer from "@/components/Footer";
import GoToTop from "@/components/GoToTop";
import Header from "@/components/Header";

function Home() {
  return (
    <div className="">
      <Header />
      <div className=" relative xl:p-44 md:px-4 px-2 lg:px-10 py-8 ">
        <div className=" fixed text-end flex justify-center items-center right-4 md:right-7 top-[90%] xl:right-16  z-50">
          <GoToTop />
        </div>
        <HeroSection1 />
        <HeroSection2 />
      </div>

      <Footer />
    </div>
  );
}

export default Home;
