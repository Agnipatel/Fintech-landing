"use client";

import {
  ArrowRight,
  CheckCircle2,
  Search,
  MousePointerClick,
  TrendingUp,
  BarChart3,
} from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { usePopup } from '@/components/PopupProvider';


const features = [
  "Reach users with strong purchase intent",
  "Eliminate low-value clicks and irrelevant traffic",
  "Scale campaigns using real performance data",
];

export default function PaidGrowthEngine() {
   const { setIsPopupOpen } = usePopup();
  return (
    <section className="relative overflow-hidden bg-black py-16 sm:py-20 lg:py-24">
      {/* Background Blur */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-green-500 blur-[130px]" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-green-500 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left Content */}

          <div>
            {/* Badge */}

            <span className="inline-flex items-center rounded-full border border-green-500/30 bg-red-500/10 px-4 py-2 text-xs font-semibold text-green-400 sm:px-5 sm:text-sm">
              <span className="mr-2 h-2 w-2 rounded-full bg-green-400"></span>
              Performance Marketing Experts for Financial Companies
            </span>

            {/* Heading */}

            <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">
              Capture
              <span className="bg-gradient-to-r from-green-400 to-green-400 bg-clip-text text-transparent">
                {" "}
                High-Intent Users
              </span>
              <br />
              Before Competitors Do
            </h2>

            {/* Description */}

            <p className="mt-8 text-base leading-8 text-gray-400 sm:text-lg">
              Every day, potential customers search for lending platforms,
              investment apps, digital banking, insurance, and NBFC solutions.
              <br />
              <br />
              Our Google Ads campaigns place your financial brand in front of
              these high-value prospects at the exact moment they re ready to
              sign up.
              <br />
              <br />
              With precision targeting, smart bidding, and continuous
              optimization, we transform search intent into verified users—not
              wasted clicks.
            </p>

            {/* Checklist */}

            <div className="mt-10 space-y-5">
              {features.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle2 className="mt-1 h-6 w-6 text-green-400" />
                  <p className="text-base leading-7 text-gray-300 sm:text-lg">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}

            <div className="mt-12 flex flex-col gap-5 sm:flex-row sm:items-center">
              <p className="text-lg font-semibold text-white">
                Own the searches that drive revenue.
              </p>

               <button
            onClick={() => setIsPopupOpen(true)}
            className="group inline-flex items-center justify-center rounded-xl bg-green-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-green-600"
          >
                 Increase Qualified Acquisitions 

                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
            </div>
          </div>

          {/* Right Dashboard */}

          <div className="relative">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl sm:p-8 lg:p-10">
              {/* Header */}

              <div className="mb-8 flex items-center gap-4">
                <div className="rounded-xl bg-green-500/10 p-4">
                  <FcGoogle className="h-8 w-8 text-green-400" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">
                    Google Ads Dashboard
                  </h3>

                  <p className="text-gray-400">
                    Live Campaign Performance
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {/* Qualified Clicks */}

                <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-white">
                      Qualified Clicks
                    </span>

                    <MousePointerClick className="h-6 w-6 text-green-400" />
                  </div>

                  <div className="mt-4 h-3 rounded-full bg-gray-800">
                    <div className="h-3 w-[90%] rounded-full bg-green-500"></div>
                  </div>

                  <p className="mt-3 text-sm text-gray-400">
                    +90% High Intent Traffic
                  </p>
                </div>

                {/* Conversion */}

                <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-white">
                      Conversion Rate
                    </span>

                    <TrendingUp className="h-6 w-6 text-green-400" />
                  </div>

                  <div className="mt-4 h-3 rounded-full bg-gray-800">
                    <div className="h-3 w-[82%] rounded-full bg-green-500"></div>
                  </div>

                  <p className="mt-3 text-sm text-gray-400">
                    Optimized Landing Pages
                  </p>
                </div>

                {/* ROI */}

                <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-white">
                      Campaign ROI
                    </span>

                    <BarChart3 className="h-6 w-6 text-green-600" />
                  </div>

                  <div className="mt-4 h-3 rounded-full bg-gray-800">
                    <div className="h-3 w-[95%] rounded-full bg-green-500"></div>
                  </div>

                  <p className="mt-3 text-sm text-gray-400">
                    Performance-Based Scaling
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Stats */}

            {/* <div className="absolute -right-6 -top-6 hidden rounded-2xl border border-white/10 bg-white/10 px-5 py-4 backdrop-blur-xl xl:block">
              <p className="text-sm text-gray-300">
                Average CTR
              </p>

              <h4 className="mt-2 text-3xl font-bold text-green-600">
                18.6%
              </h4>
            </div> */}

            {/* <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-white/10 bg-white/10 px-5 py-4 backdrop-blur-xl xl:block">
              <p className="text-sm text-gray-300">
                Average ROAS
              </p>

              <h4 className="mt-2 text-3xl font-bold text-green-600">
                8.2X
              </h4>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}