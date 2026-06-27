"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { usePopup } from "@/components/PopupProvider";
export default function IVFVisibilitySection() {
  const { setIsPopupOpen } = usePopup();
  return (
    <section className="bg-black py-12 sm:py-16 lg:py-24">
      {/* 1440px Container */}
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-12">

        {/* Top Badge */}
        <div className="flex justify-center">
          <span className="rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-center text-xs font-semibold uppercase tracking-wider text-green-400 sm:text-sm">
            Local SEO & Visibility Growth
          </span>
        </div>

        {/* Heading */}
        <h2 className="mt-5 text-center text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          IVF Clinic & Fertility Centers Digital{" "}
          <span className="text-green-500">
            Marketing Services
          </span>
        </h2>

        {/* Equal 50/50 Layout */}
        <div className="mt-12 grid items-center gap-12 lg:mt-16 lg:grid-cols-2">

          {/* Left Side */}
          <div className="flex h-full flex-col justify-center">

            <span className="w-fit rounded-full bg-green-500/10 px-4 py-2 text-xs font-semibold text-green-400">
              LOCAL SEO
            </span>

            <h3 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Become the Most Trusted Fertility
              <span className="block text-green-500">
                Center in Bangalore
              </span>
            </h3>

            <p className="mt-5 text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
              Most couples looking for reproductive care start with a local
              Google search. Our fertility clinic marketing services optimize
              your digital presence for localized intent, matching your
              clinical specializations like IUI, IVF, and ICSI with local
              patients who are ready to book an appointment.
            </p>

            <p className="mt-4 text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
              We turn search engine visibility into real patient inquiries,
              consultations, and clinic visits through strategic local SEO.
            </p>

            {/* Benefits */}
            <div className="mt-8 space-y-4">

              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                <span className="text-gray-300">
                  Improve fertility clinic visibility
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                <span className="text-gray-300">
                  Generate qualified patient leads
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                <span className="text-gray-300">
                  Increase local appointment bookings
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                <span className="text-gray-300">
                  Build trust and online authority
                </span>
              </div>

            </div>



     {/* CTA Button */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => setIsPopupOpen(true)}
            className="rounded-full bg-green-600 px-8 py-4 text-lg font-bold text-black transition-all duration-300 hover:bg-green-500"
          >
              Start Now →
          </button>
        </div>
           
          </div>

          {/* Right Side */}
          <div className="flex h-full items-center">
            <div className="w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl">
              <Image
                src="/ivf6.png"
                alt="IVF Local SEO"
                width={700}
                height={700}
                priority
                className="h-[350px] w-full object-cover sm:h-[450px] lg:h-[650px]"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}