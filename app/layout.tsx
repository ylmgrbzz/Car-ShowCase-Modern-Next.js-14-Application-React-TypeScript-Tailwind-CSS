import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Yalım Car Hub",
  description: "Discover world's best car showcase application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="eng">
      <body className="relative">
        <NavBar />
        {children}
        <Footer />
      </body>{" "}
    </html>
  );
}
