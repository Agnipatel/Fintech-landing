"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePopup } from "@/components/PopupProvider";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const { setIsPopupOpen } = usePopup();

  const closeMenu = () => setMobileMenu(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-zinc-100 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-black/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-black dark:text-white"
        >
          PANDA<span className="text-[#22c55e]">eCe</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="#marketing"
            className="transition hover:text-[#22c55e]"
          >
            Fintech Marketing
          </Link>

          <Link
            href="#growth"
            className="transition hover:text-[#22c55e]"
          >
            Fintech Growth
          </Link>

          <Link
            href="#services"
            className="transition hover:text-[#22c55e]"
          >
            Services
          </Link>



          <Link
            href="#faqSection"
            className="transition hover:text-[#22c55e]"
          >
            FAQ
          </Link>

          <Link
            href="#contact"
            className="transition hover:text-[#22c55e]"
          >
            Contact
          </Link>

          <button
            onClick={() => setIsPopupOpen(true)}
            className="rounded-full bg-[#22c55e] px-6 py-2.5 text-white transition hover:bg-[#16a34a]"
          >
            Get Free Audit
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="text-black dark:text-white md:hidden"
        >
          {mobileMenu ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${mobileMenu ? "max-h-[600px]" : "max-h-0"
          }`}
      >
        <div className="border-t bg-white dark:bg-zinc-950">
          <div className="flex flex-col space-y-5 p-6">
            <Link href="#marketing" onClick={closeMenu}>
              Fintech Marketing
            </Link>

            <Link href="#growth" onClick={closeMenu}>
              Fintech Growth
            </Link>

            <Link href="#services" onClick={closeMenu}>
              Services
            </Link>



            <Link href="#faqSection" onClick={closeMenu}>
              FAQ
            </Link>

            <Link href="#contact" onClick={closeMenu}>
              Contact
            </Link>

            <button
              onClick={() => {
                closeMenu();
                setIsPopupOpen(true);
              }}
              className="rounded-xl bg-[#22c55e] py-3 text-white transition hover:bg-[#16a34a]"
            >
              Get Free Audit
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}