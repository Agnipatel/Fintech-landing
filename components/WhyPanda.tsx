"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
return ( <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-pink-50 py-20 lg:py-32">
{/* Background Blur */} <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-pink-200/30 blur-3xl"></div> <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl"></div>


  <div className="container mx-auto px-6 lg:px-12">
    <div className="mx-auto max-w-5xl text-center">
      
      {/* Kicker */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6 inline-flex items-center rounded-full border border-pink-200 bg-white px-5 py-2 text-sm font-medium text-pink-700 shadow-sm"
      >
        ✦ Specialized IVF fintech Digital Marketing Specialists
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl"
      >
        IVF fintech & Fertility Center Digital Marketing Agency in
        <span className="text-blue-600"> Bangalore</span>
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mx-auto mt-8 max-w-4xl text-lg leading-relaxed text-gray-600 md:text-xl"
      >
        Stop missing out on high-intent patients searching for fertility
        treatments in your region. Our specialized digital marketing
        services for fertility centers target couples at the exact moment
        they look for IVF, IUI, egg freezing, and fertility treatment
        solutions.
        <br />
        <br />
        By combining localized Bangalore fertility fintech SEO with
        high-converting Google Ads and PPC campaigns, we deliver a steady
        stream of pre-qualified patient inquiries directly to your patient
        coordinators.
      </motion.p>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-10"
      >
        <button className="rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-xl">
          Get a Free Strategy Blueprint →
        </button>
      </motion.div>

      {/* Trust Anchors */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-gray-700"
      >
        <span>✓ Transparent Reports</span>
        <span>✓ ROI-Driven Campaigns</span>
        <span>✓ Dedicated Support</span>
        <span>✓ Proven Growth Strategy</span>
      </motion.div>
    </div>
  </div>
</section>


);
}
