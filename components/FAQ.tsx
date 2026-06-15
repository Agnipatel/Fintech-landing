"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { usePopup } from "@/components/PopupProvider";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { setIsPopupOpen } = usePopup();

  const faqs = [
    {
      q: "What is a performance marketing agency?",
      a: "A performance marketing agency helps businesses generate measurable results such as leads, sales, and revenue through digital advertising and data-driven marketing strategies.",
    },
    {
      q: "How does PANDAeCe generate leads?",
      a: "Through Meta Ads, Google Ads, SEO, landing pages, CRM automation, and AI-powered campaign optimization.",
    },
    {
      q: "Why is performance marketing important?",
      a: "It allows businesses to track every marketing rupee spent and optimize campaigns for better ROI.",
    },
    {
      q: "Which platforms do you manage?",
      a: "Google Ads, Meta Ads, YouTube Ads, LinkedIn Ads, SEO, WhatsApp Marketing, and Marketing Automation.",
    },
    {
      q: "Which industries do you serve?",
      a: "Real Estate, Healthcare, Education, E-commerce, SaaS, Manufacturing, Finance, and Local Businesses.",
    },
  ];

  return (
    <section
      id="faq"
      className="py-24 bg-zinc-50 dark:bg-zinc-950"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="inline-flex px-4 py-2 rounded-full bg-green-500/10 text-green-600 text-sm font-semibold mb-4">
            Frequently Asked Questions
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white">
            Got Questions?
          </h2>

          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            Everything you need to know about our digital marketing services.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-16">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-semibold text-black dark:text-white text-lg">
                  {faq.q}
                </span>

                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-green-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-green-500" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-600 to-green-500 rounded-[32px] p-8 md:p-14 text-center">

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Ready To Become Our Next Success Story?
          </h2>

          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
            Get a free marketing audit and discover how PANDAeCe can
            help you generate more leads, improve ROAS, and scale revenue.
          </p>

          <button
            onClick={() => setIsPopupOpen(true)}
            className="bg-white text-green-600 hover:bg-zinc-100 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300"
          >
            Start Your Growth Journey
          </button>

        </div>

      </div>
    </section>
  );
}