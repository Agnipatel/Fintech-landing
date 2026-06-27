"use client";

import Image from "next/image";
import {
  Baby,
  Heart,
  Snowflake,
  ShieldCheck,
  Users,
  MessageCircle,
} from "lucide-react";
import { usePopup } from "@/components/PopupProvider";

const services = [
  {
    icon: Baby,
    title: "IVF & ICSI Cycles",
    subtitle: "High-intent patient leads",
  },
  {
    icon: Heart,
    title: "IUI Treatments",
    subtitle: "Local search visibility",
  },
  {
    icon: Snowflake,
    title: "Egg Freezing",
    subtitle: "Awareness-driven campaigns",
  },
  {
    icon: Users,
    title: "Sperm Freezing & Banking",
    subtitle: "Targeted male audience",
  },
  {
    icon: ShieldCheck,
    title: "Fertility Preservation",
    subtitle: "Trust-focused messaging",
  },
  {
    icon: MessageCircle,
    title: "Reproductive Counselling",
    subtitle: "Consultation-based inquiries",
  },
];

export default function IVFSpecializationSection() {
  const { setIsPopupOpen } = usePopup();

  return (
    <section className="bg-black py-12 sm:py-16 lg:py-24">
      {/* 1440px Container */}
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-12">

        {/* Equal 50% / 50% Layout */}
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Left Side */}
          <div className="flex h-full items-center">
            <div className="w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl">
              <Image
                src="/ivfg.png"
                alt="IVF Treatments"
                width={800}
                height={900}
                priority
                className="h-[350px] w-full object-cover sm:h-[450px] lg:h-[650px]"
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="flex h-full flex-col justify-center">

            {/* Badge */}
            <span className="inline-flex w-fit rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-green-400 sm:text-sm">
              ● Digital Marketing for IVF Practices
            </span>

            {/* Heading */}
            <h2 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Drive Qualified Inquiries for Your Core{" "}
              <span className="text-green-500">
                Specializations in Bangalore
              </span>
            </h2>

            {/* Description */}
            <p className="mt-6 text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
              Fertility patients invest significant time researching clinics
              before booking consultations. Our specialized IVF digital
              marketing strategies position your clinic in front of couples
              actively searching for fertility solutions.
            </p>

            <p className="mt-4 text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
              By emphasizing clinical expertise, treatment success rates,
              patient testimonials, and personalized care, we help clinics
              across competitive healthcare markets convert online searches
              into consultation requests and treatment enrollments.
            </p>

          </div>

        </div>

        {/* 6 Service Cards Row */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:border-green-500/30 hover:bg-white/10 hover:shadow-xl"
              >
                <div className="flex flex-col items-center text-center">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/10">
                    <Icon className="h-6 w-6 text-green-500" />
                  </div>

                  <h3 className="mt-4 font-bold text-white">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-sm text-gray-400">
                    {service.subtitle}
                  </p>

                </div>
              </div>
            );
          })}

        </div>

        {/* CTA Button */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => setIsPopupOpen(true)}
            className="rounded-full bg-green-600 px-8 py-4 text-lg font-bold text-black transition-all duration-300 hover:bg-green-500"
          >
            Start Your Growth Journey
          </button>
        </div>

      </div>
    </section>
  );
}