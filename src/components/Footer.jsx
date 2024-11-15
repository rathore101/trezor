import Logo from "@/assets/Logo";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="bg-[#171717] text-white ">
      <div className="grid sm:grid-cols-4 gap-3 p-16">
        {/* ++++++++++++++++++++++++++++++Logo++++++++++++++++++++++++++ */}
        <div className="">
          <div className="mb-5 w-28 text-white">
            <Logo />
          </div>
          <p className="">a part of SatoshiLabs Group</p>
        </div>
        {/* ++++++++++++++++++++Products+++++++++++++++++++++ */}
        <div className="">
          <h2 className="py-4">Products</h2>
          <p className="py-2 hover:text-[#797979]">
            <Link href="#">Trezor Safe 3</Link>
          </p>
          <p className="py-2 hover:text-[#797979]">
            <Link href="#">Model One</Link>
          </p>
          <p className="py-2 hover:text-[#797979]">
            <Link href="#">Model T</Link>
          </p>
          <p className="py-2 hover:text-[#797979]">
            <Link href="#">Trezor Keep</Link>
          </p>
          <p className="py-2 hover:text-[#797979]">
            <Link href="#">Trezor Expert</Link>
          </p>
          <p className="py-2 hover:text-[#797979]">
            <Link href="#">Compare wallets</Link>
          </p>
          <p className="py-2 hover:text-[#797979]">
            <Link href="#">Trezor Suite</Link>
          </p>
          <p className="py-2 hover:text-[#797979]">
            <Link href="#">All products & accessories</Link>
          </p>
        </div>
        {/* +++++++++++++++++++Learn+++++++++++++++++++++++++ */}
        <div className="">
          <h2 className="py-4">Learn</h2>
          <p className="py-2 hover:text-[#797979]">
            <Link href="#">Supported Coins</Link>
          </p>
          <p className="py-2 hover:text-[#797979]">
            <Link href="#">Blog</Link>
          </p>
          <p className="py-2 hover:text-[#797979]">
            <Link href="#">Privacy and Security</Link>
          </p>
          <p className="py-2 hover:text-[#797979]">
            <Link href="#">About Company</Link>
          </p>
          <p className="py-2 hover:text-[#797979]">
            <Link href="#">Support</Link>
          </p>
          <p className="py-2 hover:text-[#797979]">
            <Link href="#">Knowledge Base</Link>
          </p>
          <p className="py-2 hover:text-[#797979]">
            <Link href="#">Forum</Link>
          </p>
        </div>
        {/* ++++++++++++++++++++++++++++++++Other++++++++++++++++++++++++ */}
        <div className="">
          <h2 className="py-4">Other</h2>
          <p className="py-2 hover:text-[#797979]">
            <Link href="#">FAQs</Link>
          </p>
          <p className="py-2 hover:text-[#797979]">
            <Link href="#">Terms of Use</Link>
          </p>
          <p className="py-2 hover:text-[#797979]">
            <Link href="#">Affiliate Program</Link>
          </p>
          <p className="py-2 hover:text-[#797979]">
            <Link href="#">Reseller Program</Link>
          </p>
          <p className="py-2 hover:text-[#797979]">
            <Link href="#">Resellers</Link>
          </p>
          <p className="py-2 hover:text-[#797979]">
            <Link href="#">GitHub</Link>
          </p>
          <p className="py-2 hover:text-[#797979]">
            <Link href="#">Press & Media</Link>
          </p>
          <p className="py-2 hover:text-[#797979]">
            <Link href="#">Careers</Link>
          </p>
        </div>
      </div>
      <div className="">
        <p className=" mx-16 py-4">All icons</p>

        <div className="flex  justify-between items-center  py-4 md:px-10 px-3 bg-[#171717] md:bg-[#1f1f1f]">
          <p>Copyright belongs to Trezor company s.r.o. All rights reserved.</p>
          <span className=" mr-24 pr-10 md:block hidden">Cookies</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
