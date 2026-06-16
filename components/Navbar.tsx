"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePopup } from "@/components/PopupProvider";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const { setIsPopupOpen } = usePopup();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100 dark:bg-black/80 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold text-black dark:text-white tracking-tight"
          >
            PANDA<span className="text-[#22c55e]">eCe</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#why-us" className="hover:text-[#22c55e] transition">
              Why-us
            </Link>

            <Link href="#growth" className="hover:text-[#22c55e] transition">
              Growth
            </Link>

            <Link href="#services" className="hover:text-[#22c55e] transition">
              Services
            </Link>

            <Link href="#faq" className="hover:text-[#22c55e] transition">
              FAQ
            </Link>

            <Link href="#contact" className="hover:text-[#22c55e] transition">
              Contact
            </Link>

            <button
              onClick={() => setIsPopupOpen(true)}
              className="bg-[#22c55e] text-white px-6 py-2.5 rounded-full hover:bg-[#16a34a] transition"
            >
              Get Audit
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="md:hidden"
          >
            {mobileMenu ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileMenu ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="bg-white dark:bg-zinc-950 border-t">
          <div className="flex flex-col p-6 space-y-5">

            <Link href="#why-us" onClick={() => setMobileMenu(false)}>
              Why-us
            </Link>

            <Link href="#growth" onClick={() => setMobileMenu(false)}>
              Growth
            </Link>

            <Link href="#services" onClick={() => setMobileMenu(false)}>
              Services
            </Link>

            <Link href="#faq" onClick={() => setMobileMenu(false)}>
              FAQ
            </Link>

            <Link href="#contact" onClick={() => setMobileMenu(false)}>
              Contact
            </Link>

            <button
              onClick={() => {
                setMobileMenu(false);
                setIsPopupOpen(true);
              }}
              className="bg-[#22c55e] text-white py-3 rounded-xl"
            >
              Get Free Audit
            </button>

          </div>
        </div>
      </div>
    </nav>
  );
}