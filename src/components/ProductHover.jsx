import React from "react";
import GetBtnIcon from "@/assets/GetBtnIcon";
import RightArrow from "@/assets/RightArrow";
import CabelUsbC from "@/assets/CabelUsbC";
import Package from "@/assets/Package";
import Link from "next/link";
import Image from "next/image";
import ts5 from "@/assets/img/ts5.png";
import ts3 from "@/assets/img/ts3.png";
import tOne from "@/assets/img/tOne.png";
import trezorKeepBanner from "@/assets/img/trezorKeepBanner.png";
import texBanner from "@/assets/img/texBanner.png";
function ProductHover() {
  return (
    <div className=" fixed inset-0 flex justify-center items-center bg-black bg-opacity-60 z-50">
      <div className=" md:mt-14 lg:mt-0 xl:grid xl:grid-cols-3 justify-between bg-white shadow-xl rounded-xl p-2 md:p-4 overflow-hidden overflow-y-auto h-[500px] md:h-auto ">
        <div className="bg-[#efefef] rounded-xl md:p-6 p-2 md:flex w-full md:col-span-2">
          <div className="md:border-r border-gray-600 md:pr-8 ml-3 md:ml-0">
            <h2 className="text-2xl md:text-4xl">Hardware wallets</h2>
            <p className="text-sm md:text-xs text-[#797979] py-1">
              Protect your identity and coins.
            </p>
            <div className="md:mt-12 mt-2">
              <Link href="#">
                <div className="flex items-center gap-5 md:py-2">
                  <button
                    className="size-10 bg-[#00854d] text-white rounded-full 
                        flex items-center justify-center 
                        hover:bg-[#0f6148] p-2"
                  >
                    <GetBtnIcon />
                  </button>
                  <h2 className="text-left">Compare wallets</h2>
                  <div className="text-[#797979] ml-auto text-end">
                    <RightArrow />
                  </div>
                </div>
              </Link>
              <Link href="#">
                <div className="flex items-center gap-5 py-2">
                  <button
                    className="size-10 bg-[#e2e2e2] rounded-full 
                        flex items-center justify-center 
                        hover:bg-[#bbbbbb] p-2"
                  >
                    <CabelUsbC />
                  </button>
                  <h2 className="text-left">
                    All products & <br />
                    accessories
                  </h2>
                  <div className="text-[#797979] ml-auto text-end">
                    <RightArrow />
                  </div>
                </div>
              </Link>
              <Link href="#">
                <div className="flex items-center gap-5 py-2">
                  <button
                    className="size-10 bg-[#e2e2e2] rounded-full 
                     flex items-center justify-center 
                    hover:bg-[#bbbbbb] p-2"
                  >
                    <Package />
                  </button>
                  <h2 className="text-left">Save with bundles</h2>
                  <div className="text-[#797979] ml-auto text-end">
                    <RightArrow />
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="px-5 grid grid-cols-2 xl:flex justify-between items-center mt-2 md:mt-0 gap-5">
            <div className="flex flex-col items-center text-center">
              <Link href="#">
                <Image
                  src={ts5}
                  alt="Trezor Safe 5 image"
                  className=" size-24 xl:size-28"
                />
                <h2 className="mt-2 text-sm">Trezor Safe 5</h2>
              </Link>
            </div>
            <div className="flex flex-col items-center text-center">
              <Link href="#">
                <Image
                  src={ts3}
                  alt="Trezor Safe 3 image"
                  className=" size-24 xl:size-28"
                />
                <h2 className="mt-2 text-sm">Trezor Safe 3</h2>
              </Link>
            </div>
            <div className="flex flex-col items-center text-center">
              <Link href="#">
                <Image
                  src={tOne}
                  alt="Trezor Model One image"
                  className="s size-24 xl:ize-28"
                />
                <h2 className="mt-2 text-sm">Trezor Model One</h2>
              </Link>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 xl:flex xl:flex-col xl:gap-4 gap-3 xl:mx-2 mt-2 xl:mt-0 rounded-xl  w-full">
          <Link href="#">
            <div className="bg-[#efefef] flex justify-between rounded-xl p-6 max-h-full w-full h-auto">
              <div className=" ">
                <h3 className="text-lg text-black/70">Backup</h3>
                <p className="text-xs text-[#797979] py-1">
                  Safeguard your wealth
                  <br /> with Keep Metal
                </p>
              </div>
              <Image
                src={trezorKeepBanner}
                alt="trezorKeepBanner image"
                className="size-28"
              />
            </div>
          </Link>
          <Link href="#">
            <div className="flex justify-between rounded-xl p-6 text-black/70 bg-[#efefef] max-h-full w-full h-auto">
              <div>
                <h3 className="text-lg">Wallet onboarding</h3>
                <p className="text-xs py-1 text-[#797979]">
                  Get a personal 1:1 wallet setup <br /> session with Trezor
                  Expert
                </p>
              </div>
              <Image
                src={texBanner}
                alt="texBanner image"
                className="size-28"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductHover;
