"use client";

import { CheckCircle2 } from "lucide-react";
import { usePopup } from "@/components/PopupProvider";

export default function FinancialHero() {
  const { setIsPopupOpen } = usePopup();

  return (
    <section className="relative overflow-hidden bg-black">
      {/* Blur Background */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-green-600 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-green-600 blur-[150px]" />

      <div className="relative mx-auto flex max-w-7xl flex-col-reverse items-center gap-14 px-5 py-16 sm:px-8 lg:flex-row lg:gap-16 lg:px-8 lg:py-24">
        {/* ================= Left ================= */}

        <div className="w-full lg:w-1/2">
          {/* Badge */}
          <div className="inline-flex flex-wrap items-center rounded-full border border-green-600 bg-green-600/10 px-4 py-2 text-xs font-semibold text-green-500 backdrop-blur sm:text-sm">
            <span className="mr-2 h-2 w-2 rounded-full bg-green-500" />
            Specialized Digital Marketing Partners for Financial Platforms
          </div>

          {/* Heading */}
          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white lg:text-5xl">
            Digital Marketing Services
            <br />
            <span className="bg-gradient-to-r from-green-500 to-green-300 bg-clip-text text-transparent">
              for Financial Companies & NBFCs
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
            Acquiring users in financial companies requires more than just
            traffic. We help founders acquire qualified customers, reduce
            customer acquisition costs, and improve activation rates through
            performance marketing and conversion-focused growth strategies.

            <br />
            <br />

            Whether youre building an investment platform, digital banking
            solution, insurance product, fintech startup, or lending platform,
            our campaigns are designed to deliver measurable business growth and
            long-term customer value.
          </p>

          {/* CTA */}
          <div className="mt-12 flex justify-center lg:justify-start">
            <button
              onClick={() => setIsPopupOpen(true)}
              className="rounded-full bg-green-600 px-8 py-4 text-lg font-bold text-black transition-all duration-300 hover:scale-105 hover:bg-green-500"
            >
              Lets Scale Your Platform
            </button>
          </div>

          {/* Features */}
          <div className="mt-10 grid grid-cols-1 gap-4 text-sm text-gray-300 sm:grid-cols-2">
            {[
              "Zero-Waste Bidding",
              "Full-Funnel Growth Strategy",
              "ROI-Focused Campaigns",
              "Better User Quality",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* ================= Right Video ================= */}

        <div className="flex w-full justify-center lg:w-1/2">
          <div className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl">

            <video
              className="h-full w-full rounded-3xl object-cover"
              autoPlay
              muted
              loop
              playsInline
              controls={false}
            >
              <source
                src="/fintech.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>

          </div>
        </div>
      </div>
    </section>
  );
}