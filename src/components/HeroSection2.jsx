import React from "react";
import Image from "next/image";
import coinSecurity from "@/assets/img/coinSecurity.jpg";
import checkVerify from "@/assets/img/checkVerify.jpg";
import simpleSetupUse from "@/assets/img/simpleSetupUse.jpg";

export default function HeroSection2() {
  return (
    <div className=" relative">
      <div className="grid md:grid-cols-2  bg-white px-4 rounded-xl">
        <div className="my-2 px-0">
          <h2 className="md:text-5xl font-sans xl:text-6xl text-3xl pr-4 py-1 md:py-3 md:mb-2  text-black">
            Coin Management
          </h2>
          <p className="text-xl lg:text-2xl md:text-xl text-[#0f6148] lg:mb-10 mb-5 ">
            Connect your hardware wallet with Trezor Suite.
          </p>
          <p className="md:pr-12 lg:text-xl md:text-lg text-md text-[#545c6a]">
            Send & receive coins, track your portfolio, trade assets or pay for
            daily essentials directly from the app.
          </p>
        </div>
        <div className="my-3 ">
          <Image
            src={coinSecurity}
            alt="coin security"
            className="rounded-xl w-[650px]"
          />
        </div>
      </div>{" "}
      <div className="hidden md:block">
        <div className="grid md:grid-cols-2  bg-white my-3 px-4 rounded-xl">
          <div className="my-3 ">
            <Image
              src={checkVerify}
              alt="coin security"
              className="rounded-xl w-[600px]"
            />
          </div>
          <div className="my-5 pl-7">
            <h2 className="md:text-5xl font-sans xl:text-6xl text-3xl py-1 md:py-3 md:mb-2 text-black ">
              Check & Verify
            </h2>
            <p className="text-xl lg:text-2xl md:text-xl text-[#0f6148] lg:mb-10 mb-5 ">
              No more second guessing.
            </p>
            <p className="md:pr-5 lg:text-xl md:text-lg text-md text-[#545c6a]">
              Every transaction on the app requires your explicit confirmation
              directly on your Trezor hardware wallet.
            </p>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 md:hidden bg-white my-3 px-4 rounded-xl">
        <div className="my-5">
          <h2 className="md:text-5xl font-sans xl:text-6xl text-3xl py-1 md:py-3 md:mb-2  text-black ">
            Check & Verify
          </h2>
          <p className="text-xl lg:text-2xl md:text-xl text-[#0f6148] lg:mb-10 mb-5 ">
            No more second guessing.
          </p>
          <p className="md:pr-12 lg:text-xl md:text-lg text-md text-[#545c6a]">
            Every transaction on the app requires your explicit confirmation
            directly on your Trezor hardware wallet.
          </p>
        </div>
        <div className="my-3 ">
          <Image
            src={checkVerify}
            alt="coin security"
            className="rounded-xl w-[650px]"
          />
        </div>
      </div>
      <div className="grid md:grid-cols-2  bg-white my-3 px-4 rounded-xl">
        <div className="my-5 px-0">
          <h2 className="md:text-5xl font-sans xl:text-6xl text-3xl py-1 md:py-3 md:mb-2  text-black">
            Simple Setup & Use
          </h2>
          <p className="text-xl lg:text-2xl md:text-xl text-[#0f6148] lg:mb-10 mb-5 ">
            Set up within minutes.
          </p>
          <p className="md:pr-8 lg:text-xl md:text-lg text-md text-[#545c6a]">
            Grab your Trezor device, plug it in, open Trezor Suite, and let your
            crypto journey begin! Forget about the tech jargon, we speak your
            language.
          </p>
        </div>
        <div className="my-3 ">
          <Image
            src={simpleSetupUse}
            alt="coin security"
            className="rounded-xl w-[650px]"
          />
        </div>
      </div>
    </div>
  );
}
