import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "trezor App",
  description: "Generated trezor app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#f6f6f6]">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
