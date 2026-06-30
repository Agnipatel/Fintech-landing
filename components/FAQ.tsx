"use client";

import {
  SearchCheck,
  Target,
  Rocket,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import { usePopup } from '@/components/PopupProvider';

const stages = [
  {
    number: "01",
    title: "The Funnel Leakage & Attribution Audit",
    icon: SearchCheck,
    color: "from-cyan-500 to-sky-600",
    description:
      "We dissect your entire user journey to uncover exactly where prospective clients drop off before completing KYC or making their first deposit.",
  },
  {
    number: "02",
    title: "The Competitive Arbitrage Strategy",
    icon: Target,
    color: "from-violet-500 to-indigo-600",
    description:
      "We analyze competitor acquisition budgets, ad copy, and keyword deficits to find low-cost, high-yield gaps you can exploit immediately.",
  },
  {
    number: "03",
    title: "Aggressive Deployment & Validation",
    icon: Rocket,
    color: "from-emerald-500 to-green-600",
    description:
      "We deploy optimized performance campaigns alongside hyper-targeted tech SEO to capture high-intent users immediately.",
  },
  {
    number: "04",
    title: "Unit Economics Optimization",
    icon: BarChart3,
    color: "from-orange-500 to-red-600",
    description:
      "We study post-click user actions to systematically lower your acquisition costs while driving up lifetime platform utilization.",
  },
];

export default function ScalingMethodology() {
  const { setIsPopupOpen } = usePopup();
  return (
    <section className="relative overflow-hidden bg-[#040816] py-24">
      {/* Background Blur */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[150px]" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-green-600/10 blur-[180px]" />
    </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Pill */}
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-cyan-500/10 px-6 py-2 text-sm font-semibold text-green-300 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-green-400"></span>
            Systematic Scaling Methodology
          </span>
        </div>

        {/* Heading */}
        <div className="mx-auto mt-8 max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Our Data-Backed Framework to{" "}
            <span className="bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent">
              Predictable Scaling
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            A proven four-stage methodology designed to uncover growth
            opportunities, maximize acquisition efficiency, and improve long-term
            profitability for modern financial businesses.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-24">

          {/* Vertical Line */}
          <div className="absolute left-8 top-0 hidden h-full w-[2px] bg-gradient-to-b from-cyan-500 via-green-500 to-transparent lg:block"></div>

          <div className="space-y-12">

            {stages.map((stage, index) => {
              const Icon = stage.icon;

              return (
                <div
                  key={index}
                  className="group relative flex flex-col gap-8 lg:flex-row"
                >
                  {/* Left Number */}
                  <div className="relative flex items-center justify-center lg:w-24">

                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${stage.color} shadow-2xl`}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </div>

                    <div className="absolute -bottom-6 text-5xl font-black text-white/5">
                      {stage.number}
                    </div>
                  </div>

                  {/* Card */}
                  <div className="flex-1 rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-cyan-500/5">

                    <div className="mb-5 flex items-center gap-4">

                      <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm font-bold text-cyan-300">
                        Stage {stage.number}
                      </span>

                    </div>

                    <h3 className="text-3xl font-bold text-white">
                      {stage.title}
                    </h3>

                    <p className="mt-5 text-lg leading-8 text-slate-300">
                      {stage.description}
                    </p>

    

                       <button
            onClick={() => setIsPopupOpen(true)}
            className="mt-8 inline-flex items-center gap-2 text-green-400 transition hover:text-cyan-300"
          >
              Learn More
                  <ArrowRight className="h-5 w-5" />
          </button>

                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 rounded-[32px] border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 via-green-600/10 to-indigo-600/10 p-10 backdrop-blur-xl">

          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">

            <div className="max-w-3xl">
              <h3 className="text-3xl font-bold text-white">
                Ready to Scale With Predictability?
              </h3>

              <p className="mt-4 text-lg leading-8 text-slate-300">
                Every stage of our framework is engineered to eliminate wasted
                spend, improve acquisition efficiency, and maximize long-term
                customer value.
              </p>
            </div>
                       <button
            onClick={() => setIsPopupOpen(true)}
            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-500 to-green-600 px-8 py-4 text-lg font-semibold text-white transition duration-300 hover:scale-105"
          >
             Start Your Growth Journey
                 <ArrowRight className="h-5 w-5" />
          </button>

          </div>

        </div>

      </div>
    </section>
  );
}