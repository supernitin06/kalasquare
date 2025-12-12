"use client";

import { Music, Mic, Award, MapPin, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#2D2D2D] mt-20 relative text-white py-16 px-6">
      <div className="max-w-[1400px] mx-auto text-center">

        {/* Logo */}
        <div className="flex justify-center mb-4">
          <Image
            src="/images/logo1.png"     // change to your logo path
            alt="KalaSquare Logo"
            width={160}
            height={50}
            className="object-contain"
          />
        </div>

        {/* Subtext */}
        <p className="max-w-[500px] mx-auto text-sm text-gray-300 mb-14">
          India's Next Voice helps aspiring singers unlock their true potential with
          professional mentorship, original music, and real industry exposure.
        </p>

        {/* Stats */}
        <div className="flex">
          {/* 1 */}
          <div className="flex flex-col items-center text-gray-300">
            <Music size={40} />
            <p className="text-xl mt-2 font-semibold">1000 Original Songs</p>
          </div>

          {/* Divider (only desktop) */}
          <div className="hidden sm:block w-px h-14 bg-gray-600 mx-auto"></div>

          {/* 2 */}
          <div className="flex flex-col items-center text-gray-300">
            <Mic size={40} />
            <p className="text-xl mt-2 font-semibold">1000 Singers</p>
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px h-14 bg-gray-600 mx-auto"></div>

          {/* 3 */}
          <div className="flex flex-col items-center text-gray-300">
            <Award size={40} />
            <p className="text-xl mt-2 font-semibold">1000 Winners</p>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-20 ml-10 mb-10">
          <Link href="#"><div className="w-10 h-10 rounded-full bg-[#E74C3C] flex items-center justify-center">  
            <i className="fa-brands fa-youtube text-white" />
          </div></Link>

          <Link href="#"><div className="w-10 h-10 rounded-full bg-[#3b5998] flex items-center justify-center">  
            <i className="fa-brands fa-facebook-f text-white" />
          </div></Link>

          <Link href="#"><div className="w-10 h-10 rounded-full bg-[#1DA1F2] flex items-center justify-center">  
            <i className="fa-brands fa-twitter text-white" />
          </div></Link>

          <Link href="#"><div className="w-10 h-10 rounded-full bg-[#E4405F] flex items-center justify-center">  
            <i className="fa-brands fa-instagram text-white" />
          </div></Link>
        </div>

        {/* Contact Info */}
        <div className="flex flex-wrap justify-center gap-10 mb-10 text-gray-300">
          <div className="flex items-center gap-2">
            <MapPin size={18} /> Mumbai, Maharashtra, India
          </div>
          <div className="flex items-center gap-2">
            <Mail size={18} /> support@indiasnextvoice.com
          </div>
          <div className="flex items-center gap-2">
            <Phone size={18} /> +91 98765 43210
          </div>
        </div>

        {/* Bottom Area */}
        <div className="border-t border-gray-600 pt-6 flex flex-col sm:flex-row justify-between text-sm text-gray-400">
          <p>© 2025 India’s Next Voice — All Rights Reserved.</p>

          <div className="flex gap-6 mt-4 sm:mt-0">
            <Link href="#">Terms & Service</Link>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
