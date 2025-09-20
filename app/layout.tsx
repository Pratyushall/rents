import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../app/global.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RentEase - Property Rental Management",
  description: "Streamline your rental property management",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
