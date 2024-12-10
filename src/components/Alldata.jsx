import Twitter from "@/assets/Twitter";
import RedditIcon from "@/assets/RedditIcon";
import InstagramIcons from "@/assets/InstagranIcon";
import FacebookIcons from "@/assets/FacebookIcon";
import TiktokIcon from "@/assets/TiktokIcon";
import WindowIcon from "@/assets/WindowIcon";
import AppleIcomM from "@/assets/AppleIconM";
import AppleIntel from "@/assets/AppleIntel";
import LinuxIcon from "@/assets/LinuxIcon";
import LinuxArmIcon from "@/assets/LinuxArmIcon";
import AndroidIcon from "@/assets/AndroidIcon";
import AppleIcon from "@/assets/AppleIcon";
import LearnBooks from "@/assets/LearnBooks";
import Headset from "@/assets/Headset";
import UserFour from "@/assets/UserFour";
import NewsBlog from "@/assets/NewsBlog";
import DownArrow from "@/assets/DownArrow";
import ProductHover from "./ProductHover";
import SupportHover from "./SupportHover";
import PlusIcon from "@/assets/PlusIcon";
import MinusIcon from "@/assets/MinusIcon";
import Youtube from "@/assets/Youtube";
import Spotify from "@/assets/Spotify";

export const Alldata = {
  header: [
    {
      id: 1,
      name: "Products",
      arrow: <DownArrow />,
      plusIcon: <PlusIcon />,
      minusIcon: <MinusIcon />,
      subMenu: <ProductHover />,
    },
    { id: 2, name: "App" },
    { id: 3, name: "Coins" },
    {
      id: 4,
      name: "Learn & Support",
      arrow: <DownArrow />,
      plusIcon: <PlusIcon />,
      minusIcon: <MinusIcon />,
      subMenu: <SupportHover />,
    },
  ],

  footer: {
    product: [
      { id: 1, name: "Trezor Safe 3", url: "#" },
      { id: 2, name: "Model One", url: "#" },
      { id: 3, name: "Model T", url: "#" },
      { id: 4, name: "Trezor Keep", url: "#" },
      { id: 5, name: "Trezor Expert", url: "#" },
      { id: 6, name: "Compare wallets", url: "#" },
      { id: 7, name: "Trezor Suite", url: "#" },
      {
        id: 8,
        name: "All products & accessories",
        url: "#",
      },
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
      { id: 6, btn: <Youtube />, url: "#" },
      { id: 7, btn: <Spotify />, url: "#" },
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
  supportData: [
    {
      name: " Learn",
      paragraph: "Get the most out of your Trezor",
      btn: <LearnBooks />,
    },
    {
      name: " Support",
      paragraph: "Need help? We’ve got answers",
      btn: <Headset />,
    },
    {
      name: " Fourm",
      paragraph: "Join the Trezor community",
      btn: <UserFour />,
    },
    {
      name: " Blog",
      paragraph: "Stay updated with Trezor news",
      btn: <NewsBlog />,
    },
  ],
  heroSectionData: [
    {
      number: "1",
      name: "Download Trezor Suite",
      paragraph:
        "Download Trezor Suite for desktop for the best experience, or click “Continue in browser” to open the web app.",
    },
    {
      number: "2",
      name: "Install the app",
      paragraph:
        "Install the desktop app on your computer. This step isn’t necessary for web app users.",
    },
    {
      number: "3",
      name: "Set up your Trezor",
      paragraph:
        "Plug in your device and follow the steps to set up your Trezor hardware wallet. This takes about 15 minutes.",
    },
    {
      number: "4",
      name: "Move your coins",
      paragraph:
        "You're ready to protect your crypto securely. Check <Link></Link> to learn how to transfer your assets from an exchange to your Trezor.  ",
    },
  ],
};
