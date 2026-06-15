"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";

const stats = [
  {
    number: 3,
    suffix: "+",
    label: "Years of Experience",
  },
  {
    number: 200,
    suffix: "+",
    label: "Projects Delivered",
  },
  {
    number: 1000,
    suffix: "+",
    label: "Trusted Clients",
  },
  {
    number: 30,
    suffix: "+",
    label: "Expert Team Members",
  },
];

export default function Happy() {
  return (
    <section className="w-full bg-black py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center shadow-lg hover:border-blue-500 transition-all"
            >
              <h3 className="mb-3 text-4xl font-bold md:text-5xl bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent">
                <CountUp
                  end={stat.number}
                  duration={2.5}
                  enableScrollSpy
                  scrollSpyOnce
                />
                {stat.number >= 1000 ? "K+" : stat.suffix}
              </h3>

              <p className="text-sm text-slate-300 md:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}