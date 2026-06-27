"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { usePopup } from "@/components/PopupProvider";

const faqs = [
  {
    question:
      "How quickly can we expect new IVF leads from your campaigns?",
    answer:
      "Paid advertising campaigns on Google and Meta can start driving high-intent patient inquiries within the first week of launch. Long-term organic growth from our technical SEO and content marketing strategies typically builds compounding momentum over 90 to 120 days.",
  },
  {
    question:
      "Do you handle the ad creation and copy writing for our doctors?",
    answer:
      "Yes, we handle everything end-to-end. Our medical copywriters create compliant, empathetic ad variations, landing page copy, and informative blog assets that require minimal editing from your busy clinical staff.",
  },
  {
    question:
      "How do you track the quality of the leads being generated?",
    answer:
      "We set up deep attribution tracking using secure medical CRM integrations and call tracking software. This allows us to trace a lead from a specific keyword click all the way down to a booked physical appointment, helping identify and prioritize high-intent patient inquiries.",
  },
  {
    question:
      "Can you optimize our existing Google Business Profile for local maps?",
    answer:
      "Local search dominance is one of our specialties. We optimize your Google Business Profile, build authoritative medical citations, and streamline your review acquisition strategy to improve local visibility and strengthen your presence in Google Maps results.",
  },
];

export default function IVFFAQSection() {
    const { setIsPopupOpen } = usePopup();
  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="bg-black py-12 sm:py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center">
          <span className="inline-flex items-center rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-green-400 sm:text-sm">
            ● FAQs
          </span>

          <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Questions Clinics Ask Before
            <span className="block text-green-500 sm:inline">
              {" "}
              Partnering With Us
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-gray-300 sm:text-lg">
            Get answers to the most common questions fertility clinics and IVF
            centers ask before starting a digital growth partnership.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="mx-auto mt-10 max-w-5xl space-y-4 lg:mt-14">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-green-500/20"
            >
              <button
                onClick={() =>
                  setActive(active === index ? null : index)
                }
                className="flex w-full items-center justify-between px-5 py-5 text-left sm:px-6"
              >
                <h3 className="pr-4 text-base font-semibold text-white sm:text-lg">
                  {faq.question}
                </h3>

                {active === index ? (
                  <ChevronUp className="h-5 w-5 flex-shrink-0 text-green-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 flex-shrink-0 text-green-500" />
                )}
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  active === index
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="border-t border-white/10 px-5 py-5 sm:px-6">
                    <p className="text-sm leading-7 text-gray-300 sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      
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
    </section>
  );
}