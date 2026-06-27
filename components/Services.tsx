"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { usePopup } from "@/components/PopupProvider";

export default function MetaAdsSection() {
   const { setIsPopupOpen } = usePopup();
  return (
    <section className="bg-black py-12 sm:py-16 lg:py-24">
      {/* 1440px Container */}
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-12">

        {/* Equal 50% / 50% Layout */}
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Left Side */}
          <div className="order-2 flex h-full flex-col justify-center lg:order-1">

            {/* Badge */}
            <span className="inline-flex w-fit rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-green-400 sm:text-sm">
              ● Meta (Facebook & Instagram) Ads
            </span>

            {/* Heading */}
            <h2 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Connect With Intentional Patients on{" "}
              <span className="text-green-500">
                Social Media
              </span>
            </h2>

            {/* Description */}
            <p className="mt-6 text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
              Our customized Meta Ads for fertility centers help IVF clinics
              build awareness and trust among local audiences. We create
              educational, compliant, and emotionally engaging ad campaigns
              that encourage prospective patients to take the first step
              toward fertility treatment.
            </p>

            {/* Features */}
            <div className="mt-8 space-y-5">

              <div className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                <span className="text-gray-300">
                  Target precise demographics by age, location, and interests
                </span>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                <span className="text-gray-300">
                  Build emotional trust through patient success stories
                </span>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                <span className="text-gray-300">
                  Generate high-quality leads directly from social platforms
                </span>
              </div>

            </div>

            {/* Bottom Text */}
            <p className="mt-8 text-lg font-semibold text-white">
              Convert social media engagement into real clinic appointments.
            </p>
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
          <div className="order-1 flex h-full items-center lg:order-2">
            <div className="w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl">
              <Image
                src="/ivfi.png"
                alt="Meta Ads for IVF Clinics"
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