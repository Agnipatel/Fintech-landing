"use client";

import {
  Bot,
  Database,
  Globe,
  Smartphone,
  BarChart3,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import { usePopup } from '@/components/PopupProvider';

const services = [
  {
    icon: Bot,
    title: "Marketing Automation",
    description:
      "Automate lead nurturing, engagement, and customer journeys.",
  },
  {
    icon: Database,
    title: "CRM Implementation",
    description:
      "Centralize customer data and streamline sales workflows.",
  },
  {
    icon: Globe,
    title: "Website Development",
    description:
      "High-converting websites and landing pages built for financial brands.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Secure, scalable apps for banking, lending, and investment platforms.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Tracking",
    description:
      "Measure every touchpoint with accurate attribution and funnel tracking.",
  },
  {
    icon: TrendingUp,
    title: "Conversion Rate Optimization (CRO)",
    description:
      "Improve onboarding, activation, and customer conversion rates for fintech and NBFCs.",
  },
];

export default function CompleteServices() {
   const { setIsPopupOpen } = usePopup();
  return (
    <section className="relative overflow-hidden bg-black py-16 sm:py-20 lg:py-24">
      {/* Background Blur */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-green-500/10 blur-[130px]" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-green-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-8">
        {/* Badge */}

        <div className="flex justify-center">
          <span className="inline-flex items-center rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-xs font-semibold text-green-400 sm:px-5 sm:text-sm">
            <span className="mr-2 h-2 w-2 rounded-full bg-green-400"></span>
            Full-Service Growth Partner
          </span>
        </div>

        {/* Heading */}

        <div className="mx-auto mt-8 max-w-4xl text-center">
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">
            Complete
            <span className="bg-gradient-to-r from-green-400 to-green-400 bg-clip-text text-transparent">
              {" "}
              Digital Marketing
            </span>
            <br />
            Services for Financial Companies
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-400 sm:text-lg">
            Everything your financial company needs—from marketing,
            automation, CRM, websites, mobile apps, and analytics—under one
            trusted growth partner.
          </p>
        </div>

        {/* Services */}

        <div className="mt-14 grid gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-green-500 hover:bg-white/10 hover:shadow-2xl sm:p-8"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-500/10 transition-all duration-300 group-hover:bg-green-600">
                  <Icon className="h-8 w-8 text-green-400 group-hover:text-white" />
                </div>

                <h3 className="mt-6 text-xl font-bold text-white sm:text-2xl">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-400 sm:text-base">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}

        <div className="mt-16 rounded-3xl border border-green-500/20 bg-gradient-to-r from-green-600/20 to-green-600/20 p-8 text-center backdrop-blur-xl sm:p-10 lg:p-14">
          <h3 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            Ready to Accelerate Your Financial Platform?
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-gray-300 sm:text-lg">
            From performance marketing and automation to websites, apps, CRM,
            and analytics, we provide everything needed to scale your financial
            business under one trusted partner.
          </p>

           <button
            onClick={() => setIsPopupOpen(true)}
            className="group mt-8 inline-flex items-center justify-center rounded-xl bg-green-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-green-500"
          >
                 Explore the Complete Solution 

                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}