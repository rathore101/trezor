import Twitter from "@/assets/Twitter";
import RedditIcon from "@/assets/RedditIcon";
import InstagramIcons from "@/assets/InstagranIcon";
import FacebookIcons from "@/assets/FacebookIcon";
import TiktokIcon from "@/assets/TiktokIcon";
import Image from "next/image";
import multipleWallets from "@/assets/img/multipleWallets.jpg";
import bossLevel from "@/assets/img/bossLevel.jpg";
import ethStaking from "@/assets/img/ethStaking.jpg";
import syncPhone from "@/assets/img/syncPhone.jpg";
import bestDeal from "@/assets/img/bestDeal.jpg";
import Export from "@/assets/Export";
import DarkMode from "@/assets/DarkMode";
import Tor from "@/assets/Tor";
import Bitcoin from "@/assets/Bitcoin";
import NativeSupport from "@/assets/NativeSupport";
import Passphrase from "@/assets/Passphrase";
import Taproot from "@/assets/Taproot";
import SignVerify from "@/assets/SignVerify";
import WindowIcon from "@/assets/WindowIcon";
import AppleIcomM from "@/assets/AppleIconM";
import AppleIntel from "@/assets/AppleIntel";
import LinuxIcon from "@/assets/LinuxIcon";
import LinuxArmIcon from "@/assets/LinuxArmIcon";
import AndroidIcon from "@/assets/AndroidIcon";
import AppleIcon from "@/assets/AppleIcon";

export const Alldata = {
  footer: {
    product: [
      { id: 1, name: "Trezor Safe 3", url: "#" },
      { id: 2, name: "Model One", url: "#" },
      { id: 3, name: "Model T", url: "#" },
      { id: 4, name: "Trezor Keep", url: "#" },
      { id: 5, name: "Trezor Expert", url: "#" },
      { id: 6, name: "Compare wallets", url: "#" },
      { id: 7, name: "Trezor Suite", url: "#" },
      { id: 8, name: "All products & accessories", url: "#" },
    ],
    learn: [
      { id: 1, name: "Supported Coins", url: "#" },
      { id: 2, name: "Blog", url: "#" },
      { id: 3, name: "Privacy and Security", url: "#" },
      { id: 4, name: "About Company", url: "#" },
      { id: 5, name: "Support", url: "#" },
      { id: 6, name: "Knowledge Base", url: "#" },
      { id: 7, name: "Forum", url: "#" },
    ],
    other: [
      { id: 1, name: "FAQs", url: "#" },
      { id: 2, name: "Terms of Use", url: "#" },
      { id: 3, name: "Affiliate Program", url: "#" },
      { id: 4, name: "Reseller Program", url: "#" },
      { id: 5, name: "Resellers", url: "#" },
      { id: 6, name: "GitHub", url: "#" },
      { id: 7, name: "Press & Media", url: "#" },
      { id: 8, name: "Careers", url: "#" },
    ],
  },
  FooterIcons: {
    Icons: [
      { id: 1, btn: <Twitter />, url: "#" },
      { id: 2, btn: <RedditIcon />, url: "#" },
      { id: 3, btn: <InstagramIcons />, url: "#" },
      { id: 4, btn: <FacebookIcons />, url: "#" },
      { id: 5, btn: <TiktokIcon />, url: "#" },
    ],
  },
  DropDownData: {
    DownData: [
      {
        id: 1,
        name: "Create Multiple Wallets",
        span: "Organize, store & use crypto the way you want.",
        paragraph:
          "Pay for daily essentials while saving for the long term. Create wallets for each cryptocurrency to better manage and track balances.",
        img: (
          <Image
            src={multipleWallets}
            alt="multipleWallets"
            className="w-full h-full"
          />
        ),
      },
      {
        id: 2,
        name: "Get Boss-Level Security",
        span: "Set up a hidden wallet.",
        paragraph:
          "Create a passphrase wallet to lock your assets in an impenetrable virtual safe deposit box on your Trezor device. ",
        img: (
          <Image src={bossLevel} alt="bossLevel" className="w-full h-full" />
        ),
      },
      {
        id: 3,
        name: "Earn More With Staking",
        span: "Support the blockchain and collect rewards",
        paragraph:
          "Securely lock in your tokens, back the blockchain, and earn rewards in return. Sit back, kick your feet up, and watch your token balance grow with Trezor. ",
        img: (
          <Image src={ethStaking} alt="ethStaking" className="w-full h-full" />
        ),
      },
      {
        id: 4,
        name: "Sync & Track on Your Phone",
        span: "Stay up to date with your portfolio using our mobile app.",
        paragraph:
          "Monitor your cryptocurrency holdings stored on your hardware wallet while on the move using the secure and privacy-preserving Trezor Lite mobile app, without compromising your personal data. View-only. ",
        img: (
          <Image src={syncPhone} alt="syncPhone" className="w-full h-full" />
        ),
      },
      {
        id: 5,
        name: "Find the Best Deal",
        span: "Compare exchanges, choose the best offer and trade.",
        paragraph:
          "Utilize the Trezor Suite app to instantly compare online exchanges and find the most advantageous offers for purchasing cryptocurrencies - directly from the app.",
        img: <Image src={bestDeal} alt="bestDeal" className="w-full h-full" />,
      },
    ],
  },
  FeaturesTrezorApp: {
    trezorSuite: [
      {
        id: "1",
        name: "Sign & Verify",
        paragraph:
          "Sign & Verify confirms ownership of specific addresses on your Trezor.",
        btn: <SignVerify />,
        url: "#",
      },
      {
        name: "Tor",
        id: "2",
        paragraph:
          "Tor is open-source software that enables anonymous communication. Using Tor makes it more difficult to trace a user's Internet activity.",
        btn: <Tor />,
        url: "#",
      },
      {
        id: "3",
        name: "Taproot",
        paragraph:
          "Taproot makes Bitcoin transactions safer by improving privacy &amp; network efficiency.",
        btn: <Taproot />,
        url: "#",
      },
      {
        id: "4",
        name: "Passphrase",
        paragraph:
          "Passphrase adds the ultimate protection against attacks involving device access.",
        btn: <Passphrase />,
        id: "",
        url: "#",
      },
      {
        id: "5",
        name: "Coin Control",
        paragraph:
          "Pick privacy and control your Bitcoin UTXOs precisely as you need.",
        btn: <Tor />,
        url: "#",
      },
      {
        id: "6",
        name: "Custom BackEnd",
        paragraph:
          "Connect to your own full node to achieve total self-sovereignty.",
        btn: <Export />,
        url: "#",
      },
      {
        id: "7",
        name: "Bitcoin-only firmware",
        paragraph:
          "Focus on Bitcoin solely by installing Bitcoin-only firmware and use it easily in Trezor Suite.",
        btn: <Bitcoin />,
        url: "#",
      },
      {
        id: "8",
        name: "Native altcoin support",
        paragraph:
          "Trezor Suite natively supports many altcoins directly in the app.",
        btn: <NativeSupport />,
        url: "#",
      },
      {
        id: "9",
        name: "Early Access Program",
        paragraph:
          "Join our Early Access Program to get access to new features before everybody else.",
        btn: <Tor />,
        url: "#",
      },
      {
        id: "10",
        name: "Buy, Sell, Exchange or Spend",
        paragraph:
          "Buy, sell, exchange, or spend using our partner Invity directly in Trezor Suite.",
        btn: <Bitcoin />,
        url: "#",
      },
      {
        id: "11",
        name: "Mobile App",
        paragraph:
          "Soon you will be able to work with Suite also on mobile devices (Android & iOS).",
        btn: <Export />,
        url: "#",
      },
      {
        id: "12",
        name: "Discreet mode",
        paragraph:
          "Hide your sensitive information from potential eavesdroppers with just one click.",
        btn: <Tor />,
        url: "#",
      },
      {
        id: "13",
        name: "Satoshis",
        paragraph:
          "Use Sats instead of BTC for a better overview of your Bitcoin funds.",
        btn: <Export />,
        url: "#",
      },
      {
        id: "14",
        name: "Localization",
        paragraph:
          "Enjoy Suite in your native language. We currently support English, Spanish, Russian, Japanese, and Czech.",
        btn: <Export />,
        url: "#",
      },
      {
        id: "15",

        name: "Dark Mode",
        paragraph: "Do not worry, we also support dark mode.",
        btn: <DarkMode />,
        url: "#",
      },
      {
        id: "16",
        name: "Export",
        paragraph:
          "Export your transactions into CSV, PDF, and other formats in Trezor Suite.",
        btn: <Export />,
        url: "#",
      },
      {
        id: "17",
        name: "Labeling",
        paragraph:
          "Label your wallets, accounts and transactions natively in Trezor Suite.",
        btn: <Export />,
        url: "#",
      },
    ],
  },
  optionDrop: [
    {
      title: "For Window",
      name: "Windows",
      paragraph: "64-bit",
      url: "#",
      icon: <WindowIcon />,
    },
    {
      title: "For Mac",
      name: "Intel CPU",
      paragraph: "2020 Models",
      url: "#",
      icon: <AppleIntel />,
    },
    {
      name: "Apple M Series",
      url: "#",
      icon: <AppleIcomM />,
      paragraph: "2020+ Models",
    },
    {
      title: "For Linux",
      name: "Linux (x86_64)",
      paragraph: "64-bit",
      url: "#",
      icon: <LinuxIcon />,
    },
    {
      name: "Linux (arm64)",
      paragraph: "64-bit",
      url: "#",
      icon: <LinuxArmIcon />,
    },
    { title: "For Mobile", paragraph: "iOS", url: "#", icon: <AppleIcon /> },
    { paragraph: "Android", url: "#", icon: <AndroidIcon /> },
  ],
};
