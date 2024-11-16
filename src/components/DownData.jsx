"use client";
import { useState } from "react";
import Image from "next/image";
import multipleWallets from "@/assets/img/multipleWallets.jpg";
import bossLevel from "@/assets/img/bossLevel.jpg";
import ethStaking from "@/assets/img/ethStaking.jpg";
import syncPhone from "@/assets/img/syncPhone.jpg";
import bestDeal from "@/assets/img/bestDeal.jpg";
import DownArrow from "@/assets/DownArrow";

function DownData() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  const DownData = [
    {
      name: "Create Multiple Wallets",
      span: "Organize, store & use crypto the way you want.",
      paragraph:
        "Pay for daily essentials while saving for the long term. Create wallets for each cryptocurrency to better manage and track balances.",
      img: (
        <Image
          src={multipleWallets}
          alt="multipleWallets"
          className="rounded-xl"
        />
      ),
      button: <DownArrow />,
    },
    // {
    //   name: "Get Boss-Level Security",
    //   span: "Set up a hidden wallet.",
    //   paragraph:
    //     "Create a passphrase wallet to lock your assets in an impenetrable virtual safe deposit box on your Trezor device. ",
    //   img: <Image src={bossLevel} alt="bossLevel" className="rounded-xl" />,
    //   button: <DownArrow />,
    // },
    // {
    //   name: "Earn More With Staking",
    //   span: "Support the blockchain and collect rewards",
    //   paragraph:
    //     "Securely lock in your tokens, back the blockchain, and earn rewards in return. Sit back, kick your feet up, and watch your token balance grow with Trezor. ",
    //   img: <Image src={ethStaking} alt="ethStaking" className="rounded-xl" />,
    //   button: <DownArrow />,
    // },
    // {
    //   name: "Sync & Track on Your Phone",
    //   span: "Stay up to date with your portfolio using our mobile app.",
    //   paragraph:
    //     "Monitor your cryptocurrency holdings stored on your hardware wallet while on the move using the secure and privacy-preserving Trezor Lite mobile app, without compromising your personal data. View-only. ",
    //   img: <Image src={syncPhone} alt="syncPhone" className="rounded-xl" />,
    //   button: <DownArrow />,
    // },
    // {
    //   name: "Find the Best Deal",
    //   span: "Compare exchanges, choose the best offer and trade.",
    //   paragraph:
    //     "Utilize the Trezor Suite app to instantly compare online exchanges and find the most advantageous offers for purchasing cryptocurrencies - directly from the app.",
    //   img: <Image src={bestDeal} alt="bestDeal" className="rounded-xl" />,
    //   button: <DownArrow />,
    // },
  ];
  return (
    <div className="relative overflow-hidden">
      {DownData.map((items, index) => (
        <div key={index} className="p-4 overflow-hidden gap-3 relative">
          <div className="hidden lg:block">
            {/* ++++++++++++++++++++++++++Start Maping++++++++++++++++++++++++++++++++++++++++++++ */}
            <div
              className={`flex flex-col lg:flex-row justify-between bg-white shadow-lg rounded-2xl ${
                isExpanded ? "h-[500px]" : "h-64 2xl:h-68"
              } overflow-hidden`}
            >
              {/* Left Section */}
              <div
                className={`flex-shrink-0 rounded-2xl px-8 lg:px-4  py-2 m-3 bg-[#eeeeee] ${
                  isExpanded
                    ? "w-full lg:w-[40%]"
                    : "w-full xl:w-[20%] 2xl:w-[13%] 2xl:-mt-2 lg:w-[30%]"
                }`}
              >
                <div className="mt-5">{items.img}</div>
              </div>

              {/* Middle Section */}
              <div
                className={`flex flex-col justify-start py-5 lg:px-10 rounded-xl ${
                  isExpanded ? "flex-grow" : "w-full lg:w-2/3"
                }`}
              >
                <div
                  className={`${
                    isExpanded
                      ? "w-full "
                      : "line-clamp-3 w-full absolute top-14 "
                  }`}
                >
                  <div className="text-3xl lg:text-4xl">{items.name}</div>
                  <div className="py-3 text-[#106148] lg:mb-32 text-lg lg:text-xl">
                    {items.span}
                  </div>
                  <div className="py-3  text-[#797979] text-sm lg:text-lg">
                    {items.paragraph}
                  </div>
                </div>
              </div>

              {/* Button Section */}
              <div className="flex items-center absolute right-0 top-0 px-3 z-30">
                <div
                  className="bg-[#eeeeee] mx-3 mt-8 p-4 rounded-full cursor-pointer"
                  onClick={toggleExpand}
                >
                  {items.button}
                </div>
              </div>
            </div>
            {/* ++++++++++++++++++++++++++PcEnd++++++++++++++++++++++++++++++++++++++++++++  */}
          </div>
        </div>
      ))}
    </div>
  );
}

export default DownData;
