import React from "react";
import Button from "./Button";
import Link from "next/link";
import TorNetwork from "@/assets/TorNetwork";
import CoinControl from "@/assets/CoinControl";
import Toproot from "@/assets/Taproot";
// import ArrowUpRight from "@/assets/ArrowUpRight";
import Image from "next/image";
import security from "@/assets/img/security.png";
import FeatureTrezorApp from "./FeatureTrezorApp";

export default function SecutityPrivacyComo() {
  return (
    <div className="py-10">
      <div className="lg:grid lg:grid-cols-3 gap-3">
        <div className="lg:inline-block md:flex mb-4 md:mb-0 gap-3">
          <div className=" w-full lg:text-5xl text-3xl md:text-4xl font-medium mb-5">
            <h2 className="w-full">
              Security & privacy your way with the Trezor Suite app
            </h2>
          </div>
          <div className="md:w-[50%]">
            <Button>
              <Link href="#">Discover the app</Link>
            </Button>
          </div>
        </div>
        <div className=" col-span-2">
          <div className="grid gap-3 md:grid-cols-2 ">
            <div className="grid gap-3">
              <div className="rounded-3xl bg-white shadow-lg p-9">
                <div className="flex items-center gap-3">
                  <div className="bg-[#e5f3ed] p-3 rounded-full">
                    <div className=" size-6 text-[#106148] ">
                      <TorNetwork />
                    </div>
                  </div>
                  <h2 className="text-2xl font-medium">Tor network</h2>
                </div>
                <p className="text-[#797979] mt-2">
                  Make it more difficult to trace your internet activity with
                  Tor, an open-source software that enables anonymous
                  communication.
                </p>
              </div>

              <div className="rounded-3xl bg-white shadow-lg p-9">
                <div className="flex items-center ">
                  <div className="bg-[#e5f3ed] p-3 rounded-full">
                    <div className=" size-6 text-[#106148] ">
                      <CoinControl />
                    </div>
                  </div>
                  <h2 className="text-2xl font-medium">Coin control</h2>
                </div>
                <p className="text-[#797979] mt-2">
                  Get more control and enhance privacy when sending funds.
                  Manually select specific coins to use for outgoing
                  transactions.
                </p>
              </div>
              <div className="rounded-3xl bg-white shadow-lg p-9">
                <div className="flex items-center gap-3">
                  <div className="bg-[#e5f3ed] p-3 rounded-full">
                    <div className=" size-6 text-[#106148] ">
                      <Toproot />
                    </div>
                  </div>
                  <h2 className="text-2xl font-medium">Taproot</h2>
                </div>
                <p className="text-[#797979] mt-2">
                  Taproot enhances bitcoin safety, privacy & network efficiency.
                </p>
              </div>
            </div>
            <div className=" flex md:grid md:gap-3 gap-2 h-36 md:h-auto w-auto ">
              <div className="rounded-lg  row-span-2">
                <Image
                  src={security}
                  alt="Security Image"
                  className="w-full h-full"
                />
              </div>
              <div className="rounded-3xl bg-[#0a4231] shadow-lg p-3  flex flex-col justify-between md:p-2 h-full">
                <div className="text-end mt-3 mr-2">
                  <FeatureTrezorApp />
                </div>
                <h2 className=" flex justify-end items-end text-white md:text-2xl text-lg text-center lg:text-4xl lg:p-5 self-center">
                  Explore all features
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
