"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { usePopup } from "@/components/PopupProvider";
export default function GooglePPCSection() {
  const { setIsPopupOpen } = usePopup();

  return (
    <section className="bg-black py-12 sm:py-16 lg:py-24">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-12">

        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Left Side */}
          <div className="flex h-full items-center">
            <div className="w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl">
              <Image
                src="/ivfp.png"
                alt="Google PPC For IVF Clinics"
                width={700}
                height={700}
                priority
                className="h-[350px] w-full object-cover sm:h-[450px] lg:h-[650px]"
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="flex h-full flex-col justify-center">

            {/* Badge */}
            <span className="inline-flex w-fit rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-green-400 sm:text-sm">
              ● High-Conversion PPC Campaigns
            </span>

            {/* Heading */}
            <h2 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Fill Your Consultation Calendar via{" "}
              <span className="text-green-500">
                Google PPC
              </span>
            </h2>

            {/* Description */}
            <p className="mt-6 text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
              Don t let valuable search traffic go to competitors. We build
              and scale high-performing pay-per-click funnels tailored to
              reproductive health. By targeting precise search phrases like
              <span className="font-semibold text-white">
                {" "}best IVF specialist near me
              </span>,
              we position your clinic at the top of search results exactly
              when potential patients need your services.
            </p>

            {/* Features */}
            <div className="mt-8 space-y-5">

              <div className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                <span className="text-gray-300">
                  Dominate top sponsored search results for competitive IVF keywords
                </span>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                <span className="text-gray-300">
                  Eliminate wasted ad spend on low-converting search terms
                </span>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                <span className="text-gray-300">
                  Route qualified traffic to custom high-converting landing pages
                </span>
              </div>

            </div>

            {/* Bottom Text */}
            <p className="mt-8 text-lg font-semibold text-white">
              Capture ready-to-book fertility inquiries in your region.
            </p>
      



       {/* CTA Button */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => setIsPopupOpen(true)}
            className="rounded-full bg-green-600 px-8 py-4 text-lg font-bold text-black transition-all duration-300 hover:bg-green-500"
          >
            Launch Paid Campaigns →
          </button>
        </div>
           

          </div>

        </div>

      </div>
    </section>
  );
}