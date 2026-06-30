"use client";

import {
  ArrowRight,
  BadgeDollarSign,
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
  Wallet,
} from "lucide-react";
import { usePopup } from '@/components/PopupProvider';

export default function FinancialHero() {
   const { setIsPopupOpen } = usePopup();
  return (
    <section className="relative overflow-hidden bg-black">
      {/* Blur Background */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-green-600/20 blur-[140px]" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-green-500/20 blur-[150px]" />

      <div className="relative mx-auto flex max-w-7xl flex-col-reverse items-center gap-14 px-5 py-16 sm:px-8 lg:flex-row lg:gap-16 lg:px-8 lg:py-24">
        {/* ================= Left ================= */}

        <div className="w-full lg:w-1/2">
          {/* Badge */}

          <div className="inline-flex flex-wrap items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-xs font-semibold text-green-300 backdrop-blur sm:text-sm">
            <span className="mr-2 h-2 w-2 rounded-full bg-green-400" />
            Specialized Digital Marketing Partners for Financial Platforms
          </div>

          {/* Heading */}

          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white ">
            Digital Marketing Services
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-green-500 bg-clip-text text-transparent">
              for Financial Companies & NBFCs
            </span>
          </h1>

          {/* Description */}

          <p className="mt-8 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg justify-center">
            Acquiring users in financial companies requires more than just
            traffic. We help founders acquire qualified customers, reduce
            customer acquisition costs, and improve activation rates through
            performance marketing and conversion-focused growth strategies.
            <br />
            <br />
            Whether you re building an investment platform, digital banking
            solution, insurance product, fintech startup, or lending platform,
            our campaigns are designed to deliver measurable business growth and
            long-term customer value.
          </p>

          {/* Buttons */}

          {/* <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button className="group flex items-center justify-center rounded-xl bg-green-600 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-green-500">
              Lets Scale Your Platform
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>

            <button className="rounded-xl border border-white/20 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-black">
              Book Strategy Call
            </button>
          </div> */}

          {/* CTA Button */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => setIsPopupOpen(true)}
            className="rounded-full bg-green-600 px-8 py-4 text-lg font-bold text-black transition-all duration-300 hover:bg-green-500"
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
                <CheckCircle2 className="h-5 w-5 text-green-400" />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* ================= Right ================= */}

        <div className="relative flex w-full justify-center lg:w-1/2">
          <div className="relative w-full max-w-xl">
            {/* Main Card */}

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
              {/* Top */}

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">
                    Campaign Performance
                  </p>

                  <h2 className="mt-2 text-4xl font-bold text-white">
                    +284%
                  </h2>

                  <p className="text-sm text-green-400">
                    Growth This Quarter
                  </p>
                </div>

                <div className="rounded-2xl bg-blue-600 p-4">
                  <TrendingUp className="h-10 w-10 text-white" />
                </div>
              </div>

              {/* Graph */}

              <div className="mt-10 h-48 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-4">
                <svg
                  viewBox="0 0 300 140"
                  className="h-full w-full"
                  fill="none"
                >
                  <path
                    d="
                    M10 120
                    C40 105
                    70 95
                    95 75
                    C120 60
                    150 85
                    185 45
                    C220 15
                    255 30
                    290 8"
                    stroke="#38bdf8"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />

                  <circle
                    cx="290"
                    cy="8"
                    r="6"
                    fill="#22c55e"
                  />
                </svg>
              </div>

              {/* Stats */}

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-black/40 p-5">
                  <Wallet className="mb-3 h-7 w-7 text-cyan-400" />

                  <p className="text-2xl font-bold text-white">
                    ₹12.8M
                  </p>

                  <p className="text-sm text-gray-400">
                    Revenue Generated
                  </p>
                </div>

                <div className="rounded-xl bg-black/40 p-5">
                  <BadgeDollarSign className="mb-3 h-7 w-7 text-green-400" />

                  <p className="text-2xl font-bold text-white">
                    -42%
                  </p>

                  <p className="text-sm text-gray-400">
                    Lower CAC
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Card Left */}

            <div className="absolute -left-6 top-10 hidden rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl xl:block">
              <ShieldCheck className="mx-auto h-10 w-10 text-green-400" />

              <p className="mt-3 text-center text-sm text-white">
                Trusted
              </p>

              <h4 className="text-center text-2xl font-bold text-white">
                99.8%
              </h4>

              <p className="text-center text-xs text-gray-300">
                Campaign Accuracy
              </p>
            </div>

            {/* Floating Card Right */}

            <div className="absolute -right-6 bottom-10 hidden rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl xl:block">
              <TrendingUp className="mx-auto h-10 w-10 text-cyan-400" />

              <p className="mt-3 text-center text-sm text-white">
                Average ROI
              </p>

              <h4 className="text-center text-2xl font-bold text-white">
                6.8X
              </h4>

              <p className="text-center text-xs text-gray-300">
                Performance Growth
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}