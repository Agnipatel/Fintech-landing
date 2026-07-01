"use client";

import {
  CheckCircle2,
  ArrowRight,
  Globe,
  Search,
  Sparkles,
} from "lucide-react";
import { usePopup } from '@/components/PopupProvider';

const features = [
  "Rank #1 for competitive commercial intent financial keywords",
  "Rank for high-intent commercial financial searches",
  "Get cited by AI search engines and answer platforms",
  "Build long-term authority across search ecosystems",
];

export default function OrganicVisibility() {
  const { setIsPopupOpen } = usePopup();
  return (
    <section className="relative overflow-hidden bg-black py-16 sm:py-20 lg:py-24">
      {/* Background Blur */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-green-500 blur-[130px]" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-green-500 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left */}

          <div>
            {/* Badge */}

            <span className="inline-flex items-center rounded-full border border-green-600 bg-cray-600 px-4 py-2 text-xs font-semibold text-green-600 sm:px-5 sm:text-sm">
              <span className="mr-2 h-2 w-2 rounded-full bg-green-600"></span>
              SEO & AI Visibility for Financial Platforms
            </span>

            {/* Heading */}

            <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">
              Specialized
              <span className="bg-gradient-to-r from-green-600 to-green-600 bg-clip-text text-transparent">
                {" "}
                SEO (GEO & AEO)
              </span>
              <br />
              Services for Financial
              <br />
              Platforms
            </h2>

            {/* Description */}

            <p className="mt-8 text-base leading-8 text-gray-400 sm:text-lg">
              Modern financial users no longer search only on Google. They
              increasingly rely on AI assistants, answer engines, and
              recommendation platforms before selecting a fintech solution.
              <br />
              <br />
              Our SEO, GEO, and AEO strategies position your platform where
              high-intent users discover, compare, and trust financial
              products.
            </p>

            {/* Features */}

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
                Scale Your Active Users
              </p>

          
                <button
            onClick={() => setIsPopupOpen(true)}
            className="group inline-flex items-center justify-center rounded-xl bg-green-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-green-600"
          >
                Start Now
                 <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
            </div>
          </div>

          {/* Right */}

          <div className="relative">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl sm:p-8 lg:p-10">
              <div className="space-y-6">
                {/* Card */}

                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/40 p-5 transition hover:border-green-600">
                  <div className="rounded-xl bg-white p-4">
                    <Search className="h-8 w-8 text-green-600" />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white">
                      Search Ranking
                    </h3>

                    <p className="text-gray-400">
                      Commercial Financial Keywords
                    </p>
                  </div>
                </div>

                {/* Card */}

                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/40 p-5 transition hover:border-green-600">
                  <div className="rounded-xl bg-white p-4">
                    <Sparkles className="h-8 w-8 text-green-600" />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white">
                      AI Citations
                    </h3>

                    <p className="text-gray-400">
                      GEO & AEO Optimization
                    </p>
                  </div>
                </div>

                {/* Card */}

                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/40 p-5 transition hover:border-green-600">
                  <div className="rounded-xl bg-white p-4">
                    <Globe className="h-8 w-8 text-green-600" />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white">
                      Organic Authority
                    </h3>

                    <p className="text-gray-400">
                      Long-Term Search Visibility
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Card */}

            <div className="absolute -right-6 -top-6 hidden rounded-2xl border border-white/10 bg-white/10 px-5 py-4 backdrop-blur-xl xl:block">
              <p className="text-sm text-gray-300">
                Average Organic Growth
              </p>

              <h4 className="mt-2 text-3xl font-bold text-green-600">
                +312%
              </h4>
            </div>

            {/* Floating Card */}

            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-white/10 bg-white/10 px-5 py-4 backdrop-blur-xl xl:block">
              <p className="text-sm text-gray-300">
                AI Visibility Score
              </p>

              <h4 className="mt-2 text-3xl font-bold text-green-600">
                98%
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}