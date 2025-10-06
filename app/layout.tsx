import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
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
      <body className={inter.className}>
        <header className="site-header">
          <nav className="site-nav">
            <Link href="/" className="brand" aria-label="Go to RentEase Home">
              RentEase
            </Link>
          </nav>
        </header>

        <main className="site-main">{children}</main>
      </body>
    </html>
  );
}
