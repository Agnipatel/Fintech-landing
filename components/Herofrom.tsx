"use client";

import Image from "next/image";
import { usePopup } from "@/components/PopupProvider";

export default function HeroFrom() {
   const { setIsPopupOpen } = usePopup();
  return (
    <main className="relative overflow-hidden bg-black">
      <section className="mx-auto w-full max-w-[1440px] px-4 py-12 sm:px-6 lg:px-8 xl:px-12 lg:py-20">
        <div className="grid min-h-[700px] items-center gap-12 lg:grid-cols-2">

          {/* Left Content */}
          <div className="order-2 flex flex-col justify-center lg:order-1">
            <div className="inline-flex w-fit items-center rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-xs font-medium text-green-400 sm:text-sm">
              ✦ Specialized IVF Clinic Digital Marketing Specialists
            </div>

            <h1 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              IVF Clinic & Fertility Center Digital Marketing Agency in
              <span className="text-green-500"> Bangalore</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
              Stop missing out on high-intent patients searching for fertility
              treatments in your region. Our specialized digital marketing
              services for fertility centers target couples at the exact moment
              they look for IVF, IUI, and egg freezing solutions.
              <br />
              <br />
              By combining localized Bangalore fertility clinic SEO with
              high-converting pay-per-click (PPC) campaigns, we deliver a steady
              stream of pre-qualified patient inquiries directly to your patient
              coordinators.
            </p>

          

             {/* CTA Button */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => setIsPopupOpen(true)}
            className="rounded-full bg-green-600 px-8 py-4 text-lg font-bold text-black transition-all duration-300 hover:bg-green-500"
          >
            Get a Free Strategy Blueprint →
          </button>
        </div>

            <div className="mt-8 grid grid-cols-1 gap-4 text-sm font-medium text-gray-300 sm:grid-cols-2">
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Transparent Reports</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>ROI-Driven Campaigns</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Dedicated Support</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Proven Growth Strategy</span>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="relative order-1 flex items-center justify-center lg:order-2">
            <div className="w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-2 shadow-2xl backdrop-blur-sm">
              <Image
                src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200"
                alt="IVF Consultation"
                width={700}
                height={700}
                priority
                className="h-[350px] w-full rounded-3xl object-cover sm:h-[450px] lg:h-[650px]"
              />
            </div>

            {/* Floating Stats Card */}
            <div className="absolute bottom-4 left-4 rounded-2xl bg-white px-4 py-3 shadow-xl sm:bottom-6 sm:left-6 md:-bottom-6 md:left-8">
              <div className="flex items-center gap-3">
                <div className="text-2xl">📈</div>

                <div>
                  <h3 className="text-xl font-bold text-green-600 sm:text-2xl">
                    330%
                  </h3>

                  <p className="text-xs text-slate-500 sm:text-sm">
                    New Patient Leads
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}