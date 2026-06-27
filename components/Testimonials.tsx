"use client";

import {
  Users,
  Bot,
  FileText,
} from "lucide-react";

const services = [
  {
    icon: Users,
    title: "CRM & Lead Automation",
    description:
      "Streamline lead management with automated follow-ups, WhatsApp reminders, and patient nurturing workflows to reduce lead drop-offs and improve conversion rates.",
  },
  {
    icon: Bot,
    title: "Marketing Automation",
    description:
      "Automate appointment reminders, email nurturing, and re-engagement campaigns to improve patient retention, operational efficiency, and patient engagement across every stage of the journey.",
  },
  {
    icon: FileText,
    title: "Content Marketing & Medical SEO",
    description:
      "Attract organic search visits with comprehensive informational assets. Our specialized copywriters create deep-dive IVF and fertility resources that build authority and sustainably reduce patient acquisition costs.",
  },
];

export default function AdvancedDigitalInfrastructure() {
  return (
    <section className="bg-black py-12 sm:py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">

        {/* Top Badge */}
        <div className="flex justify-center">
          <span className="inline-flex rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-center text-xs font-semibold uppercase tracking-wider text-green-400 sm:px-5 sm:text-sm">
            ● End-to-End Digital Marketing Services for IVF & Fertility Clinics
          </span>
        </div>

        {/* Heading */}
        <h2 className="mt-6 text-center text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          Advanced Digital Infrastructure for{" "}
          <span className="text-green-500">
            Modern Fertility Centers
          </span>
        </h2>

        {/* Service Cards */}
        <div className="mt-12 grid gap-6 sm:mt-16 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-green-500/30 hover:bg-white/10 hover:shadow-2xl lg:p-8"
              >
                {/* Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-500/10 transition-all duration-300 group-hover:bg-green-500/20">
                  <Icon className="h-7 w-7 text-green-500" />
                </div>

                {/* Title */}
                <h3 className="mt-6 text-xl font-bold text-white lg:text-2xl">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-4 leading-7 text-gray-300">
                  {service.description}
                </p>

                {/* Button */}
                <button className="mt-6 font-semibold text-green-500 transition-all duration-300 hover:text-green-400">
                  Learn More →
                </button>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}