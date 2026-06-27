"use client";

import Image from "next/image";
import {
  Search,
  Target,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { usePopup } from "@/components/PopupProvider";

const cards = [
  {
    icon: Search,
    title: "Dominant Local Search",
    description:
      "Rank at the top of Google searches when couples actively seek fertility treatments and reproductive care solutions.",
  },
  {
    icon: Target,
    title: "Precision PPC Targeting",
    description:
      "Reach highly qualified patients through carefully optimized paid advertising campaigns.",
  },
  {
    icon: ShieldCheck,
    title: "Patients-First Credibility",
    description:
      "Build trust through educational content, reviews, and strong online reputation management.",
  },
  {
    icon: TrendingUp,
    title: "Direct Consultation Growth",
    description:
      "Convert website visitors into consultation bookings with optimized landing pages and conversion funnels.",
  },
];

export default function WhyIVFMarketing() {
   const { setIsPopupOpen } = usePopup();
  return (
    <section className="bg-black py-12 sm:py-16 lg:py-24">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-12">

        {/* Top Section */}
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Left Side */}
          <div className="flex h-full items-center">
            <div className="w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl">
              <Image
                src="/ivf8.png"
                alt="IVF Consultation"
                width={700}
                height={700}
                priority
                className="h-[250px] w-full object-cover sm:h-[350px] lg:h-[350px]"
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="flex h-full flex-col justify-center">

            <div className="inline-flex w-fit items-center rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-xs font-medium text-green-400 sm:text-sm">
              ● Scale Your Fertility Center Sustainably
            </div>

            <h2 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Why Top-Performing IVF Clinics
              <span className="block text-green-500">
                Rely on Digital Marketing
              </span>
            </h2>

            <p className="mt-6 text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
              Fertility clinics face intense competition online. Our proven
              digital marketing strategies help clinics dominate local search,
              attract qualified patient inquiries, and increase consultation
              bookings through data-driven campaigns.
            </p>

          </div>

        </div>

        {/* Cards Row */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-green-500/30 hover:bg-white/10 hover:shadow-xl"
              >
                <div className="mb-4 inline-flex rounded-xl bg-green-500/10 p-3">
                  <Icon className="h-6 w-6 text-green-500" />
                </div>

                <h3 className="text-lg font-bold text-white">
                  {card.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-300">
                  {card.description}
                </p>
              </div>
            );
          })}

        </div>




       {/* CTA Button */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => setIsPopupOpen(true)}
            className="rounded-full bg-green-600 px-8 py-4 text-lg font-bold text-black transition-all duration-300 hover:bg-green-500"
          >
            Launch Paid Campaigns →
          </button>
        </div>
      </div>
    </section>
  );
}