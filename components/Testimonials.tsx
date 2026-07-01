"use client";

import {
  Building2,
  Landmark,
  PiggyBank,
  Wallet,
  CreditCard,
  ShieldCheck,
  TrendingUp,
  Banknote,
  ArrowRight,
} from "lucide-react";
import { usePopup } from '@/components/PopupProvider';

const categories = [
  {
    title: "Digital Banking & Neobanks",
    icon: Building2,
    description: "Acquire users for:",
    items: [
      "Digital Banking Apps",
      "Neo Banks",
      "Savings Accounts",
      "Current Accounts",
      "Digital Payments",
      "Banking-as-a-Service (BaaS)",
    ],
  },
  {
    title: "Investment & WealthTech",
    icon: TrendingUp,
    description: "Scale customer acquisition for:",
    items: [
      "Stock Trading Platforms",
      "Mutual Fund Platforms",
      "Wealth Management Apps",
      "SIP Investment Apps",
      "Portfolio Management Solutions",
    ],
  },
  {
    title: "Insurance Technology (InsurTech)",
    icon: ShieldCheck,
    description: "Generate qualified leads for:",
    items: [
      "Health Insurance",
      "Life Insurance",
      "Motor Insurance",
      "Travel Insurance",
      "SME Insurance",
      "Insurance Aggregators",
    ],
  },
  {
    title: "Payment & FinTech Infrastructure",
    icon: Wallet,
    description: "Drive growth for:",
    items: [
      "Payment Gateways",
      "UPI Apps",
      "Digital Wallets",
      "Merchant Payment Solutions",
      "Cross-Border Payments",
      "Embedded Finance Platforms",
    ],
  },
  {
    title: "Credit, Lending & NBFC Platforms",
    icon: CreditCard,
    description: "Scale qualified borrower acquisition for:",
    items: [
      "Credit Card Platforms",
      "Buy Now Pay Later (BNPL)",
      "Credit Score Apps",
      "Consumer Credit Platforms",
      "SME Lending Solutions",
      "NBFCs (Non-Banking Financial Companies)",
    ],
  },
];

export default function FinancialGrowthModels() {
  const { setIsPopupOpen } = usePopup();
  return (
    <section className="relative overflow-hidden bg-[#050816] py-24">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-green-600/10 blur-[160px]" />
      </div>
  
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Pill */}
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-cyan-500/10 px-6 py-2 text-sm font-semibold text-green-600 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-green-400"></span>
            Financial Company Growth Specialists
          </span>
        </div>

        {/* Heading */}
        <div className="mx-auto mt-8 max-w-4xl text-center">
          <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl">
            Digital Marketing for Every{" "}
            <span className="bg-gradient-to-r from-green-600 to-green-600 bg-clip-text text-transparent">
              Financial Company Model
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            From early-stage startups to established financial platforms,
            Pandaece helps financial companies acquire high-quality users,
            increase customer lifetime value, and scale profitably with
            data-driven digital marketing strategies.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <div
                key={index}
                className="group rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-green-500 hover:bg-cyan-500/5"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-green-600 to-green-600 shadow-lg">
                  <Icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white">
                  {category.title}
                </h3>

                <p className="mt-4 text-green-600 font-medium">
                  {category.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-slate-300"
                    >
                      <span className="mt-2 h-2 w-2 rounded-full bg-green-400"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 rounded-[36px] border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-green-600/10 p-10 backdrop-blur-xl">
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            <div className="max-w-3xl">
              <h3 className="text-3xl font-bold text-white">
                Scale Your Financial Business Faster
              </h3>

              <p className="mt-4 text-lg leading-8 text-slate-300">
                Wherever your financial business operates, Pandaece builds
                measurable customer acquisition systems designed for
                sustainable, profitable growth.
              </p>
            </div>

                 <button
            onClick={() => setIsPopupOpen(true)}
            className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-green-500 to-green-600 px-8 py-4 text-lg font-semibold text-white transition hover:scale-105"
          >
                Talk to Growth Expert
                  <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
          </button>
          </div>
        </div>
      </div>
    </section>
  );
}