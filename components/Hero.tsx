'use client';

import Link from 'next/link';
import { usePopup } from '@/components/PopupProvider';

export default function Hero() {
  const { setIsPopupOpen } = usePopup();

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-8">
          #1 Performance Marketing Agency in Bangalore
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-black dark:text-white tracking-tight mb-8">
          AI-Powered Performance Marketing <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Solutions for Growth</span>
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed">
          PANDAeCe is a performance marketing agency in Bangalore helping businesses generate qualified leads, increase conversions, and maximize ROI through AI-powered digital marketing strategies. From lead generation campaigns to conversion-focused advertising, we help brands scale faster with measurable results.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button onClick={() => setIsPopupOpen(true)} className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200 dark:shadow-none">
            Get Your Free Marketing Audit
          </button>
          <Link href="#services" className="bg-white text-black border border-zinc-200 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-zinc-50 transition-colors dark:bg-zinc-900 dark:border-zinc-800 dark:text-white dark:hover:bg-zinc-800">
            Explore Services
          </Link>
        </div>
      </div>
      
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-screen h-screen -z-0 pointer-events-none opacity-50">
        <div className="absolute top-[10%] left-[10%] w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>
    </section>
  );
}
