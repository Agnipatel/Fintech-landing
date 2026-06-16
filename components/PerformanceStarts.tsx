
"use client";

import {
  BarChart3,
  Cpu,
  TrendingUp,
  ShieldCheck,
  PieChart,
} from "lucide-react";
import { usePopup } from "@/components/PopupProvider";

const features = [
  {
    title: "Data-Driven Marketing",
    description:
      "Every campaign is optimized using real-time data and audience insights.",
    icon: BarChart3,
  },
  {
    title: "AI-Powered Campaign Optimization",
    description:
      "Advanced AI tools improve targeting, bidding, and performance.",
    icon: Cpu,
  },
  {
    title: "Conversion-Focused Growth Strategies",
    description:
      "We focus on leads, sales, and measurable business growth.",
    icon: TrendingUp,
  },
  {
    title: "End-to-End Marketing Support",
    description:
      "From ad creation and campaign management to automation and reporting.",
    icon: ShieldCheck,
  },
  {
    title: "Transparent Reporting",
    description:
      "Track leads, conversions, and ROI with clear and actionable reports.",
    icon: PieChart,
  },
];

export default function PerformanceStarts() {
  const { setIsPopupOpen } = usePopup();

  return (
    <section className="py-24 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-green-600 dark:text-green-500 mb-4">
            Why Partner With Our Performance Marketing Agency?
          </h2>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="p-8 rounded-3xl border border-zinc-100 dark:border-zinc-800 hover:border-green-200 dark:hover:border-green-900/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-green-50 dark:bg-green-900 flex items-center justify-center text-green-600 dark:text-green-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold text-black dark:text-white mb-3">
                  {feature.title}
                </h3>

                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={() => setIsPopupOpen(true)}
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-medium text-lg transition-colors duration-300"
          >
            Get Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
