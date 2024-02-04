"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import "./assets/fonts/index.css";
import Navbar from "./components/navbar";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  const pathname = usePathname();
  useEffect(() => {
    if (pathname === "/play" || pathname === "/work-detail") {
      document?.documentElement?.classList?.add("dark");
    } else {
      document?.documentElement?.classList?.remove("dark");
    }
  }, [pathname]);

  return (
    <html lang="en">
      <body
        className={`${inter.className} p-6 pt-14 lg:p-12 bg-white dark:bg-black`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
