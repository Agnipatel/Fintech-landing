"use client";

import {
  ArrowRight,
  CheckCircle2,
  Users,
  Target,
  TrendingUp,
  BarChart3,
} from "lucide-react";
import { usePopup } from '@/components/PopupProvider';

const features = [
  "Reach professionals, investors, founders, and high-intent consumers",
  "Scale winning creatives backed by performance data",
  "Recover lost opportunities with advanced retargeting strategies",
  "Continuously optimize campaigns to lower customer acquisition costs",
];

export default function PaidSocialSection() {
  const { setIsPopupOpen } = usePopup();
  return (
    <section className="relative overflow-hidden bg-black py-16 sm:py-20 lg:py-24">
      {/* Background Blur */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-green-600 blur-[130px]" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-green-600 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* LEFT */}

          <div>
            {/* Badge */}

            <span className="inline-flex items-center rounded-full border border-green-600 bg-cray-600 px-4 py-2 text-xs font-semibold text-green-600 sm:px-5 sm:text-sm">
              <span className="mr-2 h-2 w-2 rounded-full bg-green-600"></span>
              Paid Social for Financial Growth
            </span>

            {/* Heading */}

            <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">
              Reach
              <span className="bg-gradient-to-r from-green-600 to-green-600 bg-clip-text text-transparent">
                {" "}
                High-Intent Customers
              </span>
              <br />
              Across Social Media
            </h2>

            {/* Description */}

            <p className="mt-8 text-base leading-8 text-gray-400 sm:text-lg">
              We engineer high-performance social advertising for modern
              financial technology companies.
              <br />
              <br />
              Our creative frameworks simplify complex financial products,
              driving scalable app installs, qualified leads, and website
              conversions with minimal friction.
            </p>

            {/* Checklist */}

            <div className="mt-10 space-y-5">
              {features.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle2 className="mt-1 h-6 w-6 text-green-600" />

                  <p className="text-base leading-7 text-gray-300 sm:text-lg">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}

            <div className="mt-12 flex flex-col gap-5 sm:flex-row sm:items-center">
              <p className="text-lg font-semibold text-white">
                Acquire customers ready to engage with your platform.
              </p>

              

                  <button
            onClick={() => setIsPopupOpen(true)}
            className="group inline-flex items-center justify-center rounded-full bg-green-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-green-500"
          >
                Launch Now
                 <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
            </div>
          </div>

          {/* RIGHT */}

          <div className="relative">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl sm:p-8 lg:p-10">
              {/* Header */}

              <div className="mb-8 flex items-center gap-4">
                <div className="rounded-2xl bg-green-600 p-4 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-8 w-8"
                  >
                    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.95v5.66H9.33V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM3.56 20.45H7.1V9H3.56v11.45z" />
                  </svg>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">
                    Paid Social Dashboard
                  </h3>

                  <p className="text-gray-400">
                    Meta • LinkedIn • Instagram
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                {/* Card */}

                <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-white">
                      Audience Reach
                    </span>

                    <Users className="h-6 w-6 text-green-400" />
                  </div>

                  <div className="mt-4 h-3 rounded-full bg-gray-800">
                    <div className="h-3 w-[92%] rounded-full bg-green-500"></div>
                  </div>

                  <p className="mt-3 text-sm text-gray-400">
                    Professionals • Investors • Founders
                  </p>
                </div>

                {/* Card */}

                <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-white">
                      Creative Performance
                    </span>

                    <TrendingUp className="h-6 w-6 text-green-400" />
                  </div>

                  <div className="mt-4 h-3 rounded-full bg-gray-800">
                    <div className="h-3 w-[84%] rounded-full bg-green-500"></div>
                  </div>

                  <p className="mt-3 text-sm text-gray-400">
                    Winning Ads Scaled Automatically
                  </p>
                </div>

                {/* Card */}

                <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-white">
                      Retargeting Success
                    </span>

                    <Target className="h-6 w-6 text-green-400" />
                  </div>

                  <div className="mt-4 h-3 rounded-full bg-gray-800">
                    <div className="h-3 w-[88%] rounded-full bg-green-500"></div>
                  </div>

                  <p className="mt-3 text-sm text-gray-400">
                    Recover Lost Visitors
                  </p>
                </div>

                {/* Card */}

                <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-white">
                      Customer Acquisition Cost
                    </span>

                    <BarChart3 className="h-6 w-6 text-green-600" />
                  </div>

                  <div className="mt-4 h-3 rounded-full bg-gray-800">
                    <div className="h-3 w-[76%] rounded-full bg-green-600"></div>
                  </div>

                  <p className="mt-3 text-sm text-gray-400">
                    Lower CAC Through Continuous Optimization
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Cards */}

            <div className="absolute -top-6 -right-6 hidden rounded-2xl border border-white/10 bg-white/10 px-5 py-4 backdrop-blur-xl xl:block">
              <p className="text-sm text-gray-300">Average Engagement</p>
              <h4 className="mt-2 text-3xl font-bold text-green-400">12.8%</h4>
            </div>

            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-white/10 bg-white/10 px-5 py-4 backdrop-blur-xl xl:block">
              <p className="text-sm text-gray-300">Qualified Leads</p>
              <h4 className="mt-2 text-3xl font-bold text-green-400">+248%</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}