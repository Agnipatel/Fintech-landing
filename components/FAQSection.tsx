"use client";

import { useState } from "react";
import { Plus, Minus, HelpCircle, ArrowRight } from "lucide-react";
import { usePopup } from '@/components/PopupProvider';

const faqs = [
  {
    question:
      "How do your campaigns help lower customer acquisition cost (CAC)?",
    answer:
      "We eliminate broad-match bidding structures and clean out non-transacting search patterns. By channeling ad spend into custom landing pages optimized for localized intent, your cost-per-registration drops significantly while onboarding efficiency increases.",
  },
  {
    question:
      "FinTech marketing has strict compliance boundaries. How do you manage this?",
    answer:
      "Our copywriters specialize in financial regulations. We execute high-intent advertising frameworks that respect your internal legal, risk, and compliance guidelines while keeping messaging persuasive for retail and institutional investors.",
  },
  {
    question:
      "How do you track post-click activation, like KYC and funded accounts?",
    answer:
      "We establish deep-funnel event attribution tracking that connects website traffic with CRM and product analytics platforms. This allows campaigns to optimize for completed KYC, funded accounts, and customer lifetime value rather than vanity metrics.",
  },
  {
    question:
      "Can you optimize our platform for corporate and enterprise-level clients?",
    answer:
      "Absolutely. For B2B financial platforms, we build structured Account-Based Marketing (ABM) campaigns across Google Search, LinkedIn, and other enterprise channels to generate qualified demo requests from CFOs, finance leaders, and operations executives.",
  },
  {
    question:
      "What marketing budget do you recommend to see meaningful results?",
    answer:
      "Your ideal budget depends on your growth targets, market competition, and acquisition channels. Most financial companies and NBFCs benefit from a budget that enables continuous testing, optimization, and profitable scaling.",
  },
  {
    question: "Is ad spend included in your pricing?",
    answer:
      "No. Advertising spend is paid directly to platforms such as Google Ads, Meta Ads, or LinkedIn Ads. Our management fee covers strategy, campaign execution, optimization, conversion tracking, reporting, and ongoing performance improvements.",
  },
];

export default function FinancialFAQ() {
    const { setIsPopupOpen } = usePopup();
  const [active, setActive] = useState(0);

  const toggleFAQ = (index: number) => {
    setActive(active === index ? -1 : index);
  };

  return (
    <section className="relative overflow-hidden bg-[#050816] py-24">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-green-500/10 blur-[170px]" />
        <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-green-600/10 blur-[180px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Pill */}
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-6 py-2 text-sm font-semibold text-green-300 backdrop-blur">
            <HelpCircle className="h-4 w-4" />
            FAQs
          </span>
        </div>

        {/* Heading */}
        <div className="mx-auto mt-8 max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Questions Founders Ask Before{" "}
            <span className="bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent">
              Scaling With Us
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Everything you need to know about our performance marketing,
            compliance, customer acquisition strategy, and pricing.
          </p>
        </div>

        {/* FAQ */}
        <div className="mx-auto mt-20 max-w-5xl space-y-6">
          {faqs.map((faq, index) => {
            const isOpen = active === index;

            return (
              <div
                key={index}
                className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl transition-all duration-300 hover:border-green-400/40"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between p-7 text-left"
                >
                  <h3 className="pr-6 text-lg font-semibold text-white md:text-xl">
                    {faq.question}
                  </h3>

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500/10">
                    {isOpen ? (
                      <Minus className="h-5 w-5 text-green-400" />
                    ) : (
                      <Plus className="h-5 w-5 text-green-400" />
                    )}
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-500 ${
                    isOpen
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-white/10 px-7 py-6">
                      <p className="text-lg leading-8 text-slate-300">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-24 rounded-[36px] border border-green-500/20 bg-gradient-to-r from-green-500/10 via-green-600/10 to-indigo-600/10 p-10 backdrop-blur-xl">
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            <div>
              <h3 className="text-3xl font-bold text-white">
                Still Have Questions?
              </h3>

              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
                Schedule a free strategy consultation with our financial
                marketing specialists and discover how we can build a scalable
                acquisition engine for your business.
              </p>
            </div>

                    <button
                              onClick={() => setIsPopupOpen(true)}
                              className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-green-500 to-green-600 px-8 py-4 text-lg font-semibold text-white transition duration-300 hover:scale-105"
                            >
                                  Launch Paid Campaigns
                                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </button>
          </div>
        </div>
      </div>
    </section>
  );
}