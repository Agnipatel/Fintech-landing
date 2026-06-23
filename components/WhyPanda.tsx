"use client";

import { usePopup } from "@/components/PopupProvider";

export default function WhyPanda() {
  const { setIsPopupOpen } = usePopup();

  const points = [
    { title: "Qualified Leads", icon: "💎" },
    { title: "Revenue Growth", icon: "📈" },
    { title: "Lower Cost Per Lead (CPL)", icon: "📉" },
    { title: "Higher Return on Ad Spend (ROAS)", icon: "💰" },
    { title: "Betters Conversion Rates", icon: "⚡" },
    { title: "Customer Acquisition Growth", icon: "🚀" },
  ];

  return (
    <section id="why-us" className="py-24 bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <span className="inline-flex px-4 py-2 rounded-full bg-green-500/10 text-green-600 text-sm font-semibold mb-6">
              Why Choose PANDAeCe
            </span>

            <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white mb-6">
              Smarter Performance Marketing Starts Here
            </h2>

            <div className="space-y-6 text-lg text-zinc-600 dark:text-zinc-400">
              <p>
                Todays customers discover, compare, and purchase products online.
              </p>

              <p>
                Businesses relying only on traditional marketing often struggle
                to generate consistent leads and measurable growth.
              </p>

              <p>
                PANDAeCe helps brands scale using AI-powered performance
                marketing strategies focused on lead generation, customer
                acquisition, and revenue growth.
              </p>

              <p>
                As a trusted performance marketing agency in Bangalore,
                we combine advertising, automation, analytics, and creative
                strategy to build scalable growth systems.
              </p>
            </div>

            <button
              onClick={() => setIsPopupOpen(true)}
              className="mt-8 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold transition-all"
            >
              Lets Discuss Your Growth Goals
            </button>
          </div>

          <div className="bg-white dark:bg-zinc-900 p-8 lg:p-12 rounded-3xl shadow-sm border border-zinc-100 dark:border-zinc-800">
            <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
              Results-Focused Performance Marketing
            </h3>

            <p className="text-zinc-600 dark:text-zinc-400 mb-8">
              We focus on:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {points.map((point, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800 hover:bg-green-50 dark:hover:bg-green-900/10 transition-all"
                >
                  <span className="text-2xl">{point.icon}</span>

                  <span className="font-medium text-black dark:text-white">
                    {point.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}