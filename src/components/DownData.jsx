import Image from "next/image";
import multipleWallets from "@/assets/img/multipleWallets.jpg";
import bossLevel from "@/assets/img/bossLevel.jpg";
import ethStaking from "@/assets/img/ethStaking.jpg";
import syncPhone from "@/assets/img/syncPhone.jpg";
import bestDeal from "@/assets/img/bestDeal.jpg";
import DownArrow from "@/assets/DownArrow";
export const DownData = [
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
