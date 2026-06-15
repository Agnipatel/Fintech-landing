'use client';

import Link from 'next/link';
import { usePopup } from '@/components/PopupProvider';

export default function Footer() {
  const { setIsPopupOpen } = usePopup();

  return (
    <footer className="py-12 border-t border-zinc-100 dark:border-zinc-800 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <Link href="/" className="text-2xl font-bold text-black dark:text-white tracking-tighter">
              PANDA<span className="text-green-600">eCe</span>
            </Link>
            <p className="mt-4 text-zinc-500 dark:text-zinc-500 max-w-sm">
              Smarter Performance Marketing. Faster Business Growth. AI-powered lead generation and ROI focused strategies.
            </p>
          </div>
          <div className="flex space-x-10 text-sm font-medium text-zinc-600 dark:text-zinc-400 items-center">
            <Link href="#why-us" className="hover:text-black dark:hover:text-white">Why Us</Link>
            <Link href="#services" className="hover:text-black dark:hover:text-white">Services</Link>
            <Link href="#faq" className="hover:text-black dark:hover:text-white">FAQ</Link>
            <button onClick={() => setIsPopupOpen(true)} className="hover:text-black dark:hover:text-white">Contact</button>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-zinc-50 dark:border-zinc-900 text-center text-sm text-zinc-400">
          © {new Date().getFullYear()} PANDAeCe. All rights reserved. Performance Marketing Agency in Bangalore.
        </div>
      </div>
    </footer>
  );
}
