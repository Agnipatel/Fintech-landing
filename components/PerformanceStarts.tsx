"use client";

import {
  Search,
  TrendingUp,
  ShieldCheck,
  Funnel,
  ArrowRight,
} from "lucide-react";
import { usePopup } from '@/components/PopupProvider';

const cards = [
  {
    icon: Search,
    title: "Search Visibility & Programmatic SEO",
    description:
      "Own valuable financial search terms and create scalable SEO content that brings users already looking for lending, investing, banking, and wealth solutions.",
  },
  {
    icon: TrendingUp,
    title: "ROI-Driven Paid Acquisition",
    description:
      "Run performance campaigns optimized for qualified sign-ups, funded accounts, and active users instead of vanity metrics.",
  },
  {
    icon: ShieldCheck,
    title: "Trust & Compliance Positioning",
    description:
      "Strengthen credibility with compliant messaging, transparent communication, and authority-building content that resonates with users and investors.",
  },
  {
    icon: Funnel,
    title: "Conversion Funnel Optimization",
    description:
      "Improve onboarding, KYC completion, and landing page performance to convert more visitors into verified, active customers.",
  },
];

export default function WhyPerformanceMarketing() {
   const { setIsPopupOpen } = usePopup();
  return (
    <section className="relative overflow-hidden bg-black py-4 sm:py-4 lg:py-4">
      {/* Background Blur */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-8">
        {/* Tag */}

        <div className="flex justify-center">
          <span className="inline-flex items-center rounded-full border border-green-600 bg-green-600 1px-4 py-2 text-xs font-semibold text-black sm:px-5 sm:text-sm">
            <span className="mr-2 h-2 w-2 rounded-full bg-green-600"></span>
            Scale Your Financial Platform Active User Base
          </span>
        </div>

        {/* Heading */}

        <div className="mx-auto mt-2 max-w-4xl text-center">
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">
            Why Top-Performing Financial Platforms
            Rely on Performance Marketing
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-400 sm:text-lg">
            Accelerate customer acquisition using performance marketing
            strategies built specifically for fintech, lending, investment,
            banking, insurance, and modern financial service platforms.
          </p>
        </div>

        {/* Cards */}

        <div className="mt-14 grid gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-2">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <div
                key={index}
                className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-green-500 hover:bg-white/10 hover:shadow-2xl sm:p-8"
              >
                {/* Icon */}

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 text-green-600 transition-all duration-300 group-hover:bg-green-600 group-hover:text-white">
                  <Icon size={30} />
                </div>

                {/* Title */}

                <h3 className="mt-8 text-xl font-bold text-white sm:text-2xl">
                  {card.title}
                </h3>

                {/* Description */}

                <p className="mt-5 text-sm leading-8 text-gray-400 sm:text-base">
                  {card.description}
                </p>

                 
          <button
            onClick={() => setIsPopupOpen(true)}
            className="mt-9 flex items-center gap-4 rounded-full font-semibold bg-green-600 text-black transition-all duration-400 group-hover:gap-6  px-6
    py-3"
          >
                 Learn More
                  <ArrowRight size={18} />
          </button>
        </div>
            
            );
          })}
        </div>
      </div>
    </section>
  );
}
