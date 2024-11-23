import React from "react";

function page() {
  return <div>App page</div>;
}

export default page;

// "use client";
// import { useState } from "react";
// import Button from "@/components/Button";
// import React from "react";
// import coinSecurity from "@/assets/img/coinSecurity.jpg";
// import checkVerify from "@/assets/img/checkVerify.jpg";
// import simpleSetupUse from "@/assets/img/simpleSetupUse.jpg";
// import Image from "next/image";
// import OtherOptions from "@/components/OtherOptions";
// import DropDownComo from "@/components/DropDownComo";
// import SecutityPrivacyComo from "@/components/SecutityPrivacyComo";
// import SportsImages from "@/components/SportsImages";
// import banner1 from "@/assets/img/banner1.jpg";

// function page() {
//   return (
//     <div className="">
//       <div className="lg:p-24 md:px-5 px-2 py-8 ">
//         {/* ++++++++++++++++++++++++++Start++++++++++++++++++++++++++++++++++++++++++++ */}
//         <div className="grid sm:grid-cols-2  bg-white my-4 px-4 rounded-xl"></div>
//         <div>
//           <h2 className=" 2xl:gap-4 sm:text-6xl text-2xl  py-2 lg:mt-14 mt-14 md:mt-20 ">
//             Take Control Of Your <br />
//             <span className="text-[#0f6148]">Crypto In Trezor Suite</span>
//           </h2>
//           <p className="font-abc text-[#797979] lg:text-xl md:text-lg text-md py-3">
//             Manage your assets in one app.
//           </p>
//           <div className="mt-2 flex">
//             <div className="md:items-center md:flex md:flex-cols-3 md:gap-3  ">
//               <div className=" ">
//                 <Button>Download for desktop</Button>
//               </div>
//               <div className="py-2 px-3 ">
//                 <Button className="bg-[#e2e2e2]  text-black hover:bg-[#d6d5d5]">
//                   Continue in browser
//                 </Button>
//               </div>
//               <div className="mb-10 ">
//                 <OtherOptions />
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* ++++++++++++++++++++++++++End++++++++++++++++++++++++++++++++++++++++++++ */}
//         <div className=" relative">
//           <div className="grid sm:grid-cols-2  bg-white my-4 px-4 rounded-xl">
//             <div className="my-5 px-0">
//               <h2 className="md:text-5xl lg:text-6xl text-3xl py-3 md:mb-4 ">
//                 Coin Management
//               </h2>
//               <p className="text-xl lg:text-2xl md:text-xl text-[#0f6148] lg:mb-10 mb-5 ">
//                 Connect your hardware wallet with Trezor Suite.
//               </p>
//               <p className="md:pr-16 lg:text-xl md:text-lg text-md text-[#797979]">
//                 Send & receive coins, track your portfolio, trade assets or pay
//                 for daily essentials directly from the app.
//               </p>
//             </div>
//             <div className="my-3 ">
//               <Image
//                 src={coinSecurity}
//                 alt="coin security"
//                 className="rounded-xl w-[650px]"
//               />
//             </div>
//           </div>
//         </div>
//         {/* ++++++++++++++++++++++++++End++++++++++++++++++++++++++++++++++++++++++++ */}
//         <div className="hidden md:block">
//           <div className="grid sm:grid-cols-2  bg-white my-4 px-4 rounded-xl">
//             <div className="my-3 ">
//               <Image
//                 src={checkVerify}
//                 alt="coin security"
//                 className="rounded-xl w-[600px]"
//               />
//             </div>
//             <div className="my-5 px-7">
//               <h2 className="md:text-5xl lg:text-6xl text-3xl py-3 md:mb-4 ">
//                 Check & Verify
//               </h2>
//               <p className="text-xl lg:text-2xl md:text-xl text-[#0f6148] lg:mb-10 mb-5 ">
//                 No more second guessing.
//               </p>
//               <p className="md:pr-16 lg:text-xl md:text-lg text-md text-[#797979]">
//                 Every transaction on the app requires your explicit confirmation
//                 directly on your Trezor hardware wallet.
//               </p>
//             </div>
//           </div>
//         </div>
//         {/* ++++++++++++++++++++++++++Sm Screen Size++++++++++++++++++++++++++++++++++++++++++++ */}
//         <div className="grid sm:grid-cols-2 md:hidden bg-white my-4 px-4 rounded-xl">
//           <div className="my-5 px-7">
//             <h2 className="md:text-5xl lg:text-6xl text-3xl py-3 md:mb-4 ">
//               Check & Verify
//             </h2>
//             <p className="text-xl lg:text-2xl md:text-xl text-[#0f6148] lg:mb-10 mb-5 ">
//               No more second guessing.
//             </p>
//             <p className="md:pr-16 lg:text-xl md:text-lg text-md text-[#797979]">
//               Every transaction on the app requires your explicit confirmation
//               directly on your Trezor hardware wallet.
//             </p>
//           </div>
//           <div className="my-3 ">
//             <Image
//               src={checkVerify}
//               alt="coin security"
//               className="rounded-xl w-[650px]"
//             />
//           </div>
//         </div>
//         {/* ++++++++++++++++++++++++++End++++++++++++++++++++++++++++++++++++++++++++ */}
//         <div className="grid sm:grid-cols-2  bg-white my-4 px-4 rounded-xl">
//           <div className="my-5 px-0">
//             <h2 className="md:text-5xl lg:text-6xl text-3xl py-3 md:mb-4 ">
//               Simple Setup & Use
//             </h2>
//             <p className="text-xl lg:text-2xl md:text-xl text-[#0f6148] lg:mb-10 mb-5 ">
//               Set up within minutes.
//             </p>
//             <p className="md:pr-16 lg:text-xl md:text-lg text-md text-[#797979]">
//               Grab your Trezor device, plug it in, open Trezor Suite, and let
//               your crypto journey begin! Forget about the tech jargon, we speak
//               your language.
//             </p>
//           </div>
//           <div className="my-3 ">
//             <Image
//               src={simpleSetupUse}
//               alt="coin security"
//               className="rounded-xl w-[650px]"
//             />
//           </div>
//         </div>
//         {/* ++++++++++++++++++++++++++End++++++++++++++++++++++++++++++++++++++++++++ */}
//         <div className=" relative">
//           <DropDownComo />
//         </div>
//         <div className="">
//           <SecutityPrivacyComo />
//         </div>
//         <div>
//           <SportsImages />
//         </div>
//         <div className=" relative ">
//           <Image
//             src={banner1}
//             alt="banner"
//             className=" rounded-2xl w-full h-[60vh] md:h-full"
//           />
//           <div className=" absolute inset-0 flex flex-col justify-center items-center top-64 md:top-48 xl:top-80 ">
//             <h2 className=" text-center text-2xl md:text-4xl xl:text-7xl py-4 xl:py-5">
//               Take control of your future
//             </h2>
//             <Button className="bg-black text-white"> Compare wallets</Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default page;
