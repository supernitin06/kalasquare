"use client";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Toaster } from "react-hot-toast";
import { usePathname } from "next/navigation";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isAdmin = pathname?.startsWith("/admin");

  return (
    <html lang="en" className={`${dmSans.variable} ${playfair.variable}`}>
      <body>
        {/* Hide Navbar + Footer on Admin Pages */}
        {!isAdmin && <Navbar />}

        <Toaster />

        {children}

        {!isAdmin && <Footer />}
      </body>
    </html>
  );
}
