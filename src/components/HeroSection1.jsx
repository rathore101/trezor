import React from "react";
import Link from "next/link";
import OtherOptions from "@/components/OtherOptions";
import Button from "@/components/Button";

function HeroSection1() {
  return (
    <div>
      <h2 className=" 2xl:gap-4 sm:text-6xl text-3xl  py-2 lg:mt-14 mt-14 md:mt-20 text-black ">
        Take Control Of Your <br />
        <span className="text-[#0f6148]">Crypto In Trezor Suite</span>
      </h2>
      <p className="font-abc text-[#797979] lg:text-xl md:text-lg text-md py-3">
        Manage your assets in one app.
      </p>
      <div className="mt-2 flex">
        <div className="md:items-center md:flex md:flex-cols-3 md:gap-3  ">
          <div className=" hidden md:block">
            <Button>
              <Link href="#">Download for desktop</Link>
            </Button>
          </div>
          <div className="md:hidden ">
            <Button>
              <Link href="#">Download app</Link>
            </Button>
          </div>
          <div className="py-2 md:px-3 ">
            <Button className="bg-[#e2e2e2]  text-black hover:bg-[#d6d5d5]">
              <Link href="#">Continue in browser</Link>
            </Button>
          </div>
          <div className="mb-10  text-black ">
            <OtherOptions />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection1;
