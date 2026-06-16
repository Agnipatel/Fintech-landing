"use client";

import { motion } from "framer-motion";
import { usePopup } from "@/components/PopupProvider";

const data = [
  {
    headache:
      "Our campaigns start strong but stall quickly, and increasing the budget fails to revive performance due to creative fatigue.",
    cure: "We engineer a continuous pipeline of fresh ad concepts, high-impact designs, and copy to maintain peak ad delivery.",
  },
  {
    headache:
      "People click our ads, but leads are too expensive because our ad messaging doesn't match our landing pages.",
    cure: "As a top digital marketing agency in Bangalore, we match hyper-focused ad groups with custom-developed landing pages to increase relevance and slash your cost per lead.",
  },
  {
    headache:
      "We scale budgets hoping for more leads, but costs simply spike while daily ad performance remains completely unpredictable.",
    cure: "Our performance marketing agency in Bangalore deploys layered, data-backed bidding strategies that target high-intent core audiences for cost-effective scaling.",
  },
  {
    headache:
      "We are generating leads, but they are completely unqualified, a poor fit, and waste our sales team's valuable time.",
    cure: "We refine precise geographic and demographic targeting while embedding custom lead qualification filters right inside your forms.",
  },
  {
    headache:
      "Agencies dump money into pretty ads, but send traffic to a generic homepage. Business owners pay for clicks that bounce within seconds.",
    cure: "We design bespoke, fast-loading landing pages matched perfectly to user intent, helping increase conversion rates and reduce wasted spend.",
  },
  {
    headache:
      "A lead fills out your form, but your team follows up too late. By then, they've already contacted competitors.",
    cure: "We automate instant WhatsApp, email, and sales notifications so every lead receives immediate engagement.",
  },
  {
    headache:
      "You know sales are happening, but you can't identify which campaigns, keywords, or channels actually drive revenue.",
    cure: "We integrate advanced CRM tracking and attribution systems that connect every lead and sale back to the exact marketing source.",
  },
];

export default function MarketingHeadaches() {
  const { setIsPopupOpen } = usePopup();

  return (
    <section className="bg-black py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <span className="inline-flex px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-semibold mb-4">
            Why Businesses Struggle To Scale
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Marketing Headaches vs
            <span className="text-green-500"> PANDAeCe s Cure</span>
          </h2>
        </div>

        <div className="space-y-6">
          {data.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-2 gap-6"
            >
              <div className="bg-zinc-900 border border-red-500/20 rounded-3xl p-6">
                <h3 className="text-red-500 font-bold text-lg mb-4">
                  Marketing Headache
                </h3>

                <p className="text-zinc-300 leading-relaxed">
                  {item.headache}
                </p>
              </div>

              <div className="bg-zinc-900 border border-green-500/20 rounded-3xl p-6">
                <h3 className="text-green-500 font-bold text-lg mb-4">
                  PANDAeCe s Cure
                </h3>

                <p className="text-zinc-300 leading-relaxed">
                  {item.cure}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-14">
          <button
            onClick={() => setIsPopupOpen(true)}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold transition-all"
          >
           Boost Your Business Growth
          </button>
        </div>
      </div>
    </section>
  );
}