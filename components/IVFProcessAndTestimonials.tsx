"use client";

import {
  Search,
  BarChart3,
  Target,
  TrendingUp,
  Quote,
} from "lucide-react";
import { usePopup } from "@/components/PopupProvider";

const processSteps = [
  {
    icon: Search,
    title: "Discovery & Research",
    description:
      "We analyze your fertility services, treatment specialties, patient journey, and clinic positioning to create a marketing foundation that attracts the right audience.",
  },
  {
    icon: BarChart3,
    title: "Competitor & Market Analysis",
    description:
      "Our team studies local competitors, patient demand, search behavior, and industry trends to identify untapped opportunities for clinic growth.",
  },
  {
    icon: Target,
    title: "Custom Growth Strategy",
    description:
      "We build a tailored marketing roadmap combining SEO, PPC, social media advertising, and content marketing to generate qualified fertility inquiries.",
  },
  {
    icon: TrendingUp,
    title: "Performance Optimisation",
    description:
      "Through continuous tracking and campaign refinement, we improve lead quality, maximize appointment bookings, and increase marketing ROI.",
  },
];

export default function IVFProcessAndTestimonials() {
    const { setIsPopupOpen } = usePopup();
  return (
    <section className="bg-black py-12 sm:py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">

        {/* Process Section */}
        <div className="text-center">

          <span className="inline-flex rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-green-400 sm:text-sm">
            ● Smart Marketing for IVF Clinics
          </span>

          <h2 className="mx-auto mt-6 max-w-5xl text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Our 4-Step Patient Acquisition Framework for{" "}
            <span className="text-green-500">
              IVF Clinics & Fertility Centers
            </span>
          </h2>

        </div>

        {/* Process Cards */}
        <div className="mt-12 grid gap-6 sm:mt-16 md:grid-cols-2 lg:grid-cols-4">

          {processSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-green-500/30 hover:bg-white/10 hover:shadow-2xl"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-500/10">
                  <Icon className="h-7 w-7 text-green-500" />
                </div>

                <h3 className="mt-5 text-lg font-bold text-white">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-300">
                  {step.description}
                </p>
              </div>
            );
          })}

        </div>

        {/* Testimonials Section */}
        <div className="mt-16 rounded-3xl border border-white/10 bg-white/5 px-4 py-12 backdrop-blur-sm sm:px-8 lg:mt-24 lg:px-12 lg:py-20">

          <div className="text-center">

            <span className="inline-flex rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-green-400">
              ● Voices of Healthcare Leaders
            </span>

            <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Trusted by Leading Fertility Experts
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-base text-gray-300 sm:text-lg">
              Hear directly from fertility specialists who transformed
              patient acquisition and clinic growth with our digital
              marketing strategies.
            </p>

          </div>

          {/* Testimonial Card */}
          <div className="mx-auto mt-10 max-w-4xl lg:mt-14">

            <div className="rounded-3xl border border-white/10 bg-black/40 p-6 shadow-2xl sm:p-8 lg:p-10">

              <div className="mb-6 flex justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500/10">
                  <Quote className="h-7 w-7 text-green-500" />
                </div>
              </div>

              <h3 className="text-center text-2xl font-bold text-white">
                Dr. Emily Carter
              </h3>

              <p className="mt-2 text-center font-medium text-green-500">
                Senior IVF Consultant
              </p>

              <blockquote className="mt-8 text-center text-base leading-8 text-gray-300 sm:text-lg">
                Finding an agency that understands the regulatory
                sensitivities of fertility clinic marketing is rare.
                They built a highly compliant and high-performing lead
                ecosystem that keeps our consultation schedules full
                month after month. They operate like a true extension
                of our internal clinical team.
              </blockquote>

              <div className="mt-8 flex justify-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <div className="h-2 w-2 rounded-full bg-gray-600"></div>
                <div className="h-2 w-2 rounded-full bg-gray-600"></div>
                <div className="h-2 w-2 rounded-full bg-gray-600"></div>
              </div>

            </div>

          </div>

        </div>
 {/* CTA Section */}
        {/* CTA Section */}
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