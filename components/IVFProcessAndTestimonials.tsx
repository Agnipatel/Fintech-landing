"use client";

import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";


const testimonials = [
  {
    id: 1,
    name: "Rohan Deshmukh",
    role: "VP of Growth",
    company: "NextGen Pay",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
    quote:
      "Finding an external growth team that truly understands financial regulations, unit economics, and complex tracking is incredibly difficult. They built a data-driven customer acquisition ecosystem that systematically lowered our CAC by 32% while scaling month-over-month active accounts. They move with tech startup speed.",
  },
  {
    id: 2,
    name: "Ananya Kapoor",
    role: "Marketing Director",
    company: "FinBank",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
    quote:
      "Pandaece transformed our acquisition strategy with measurable growth. Their attribution, analytics, and performance campaigns generated qualified users at scale while improving our customer lifetime value.",
  },
  {
    id: 3,
    name: "Amit Sharma",
    role: "Founder",
    company: "CreditFlow",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop",
    quote:
      "The team thinks like founders, not vendors. Every campaign was optimized around profitability instead of vanity metrics, resulting in faster scaling and significantly lower acquisition costs.",
  },
];

export default function TrustBuilder() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const item = testimonials[current];

  return (
    <section className="relative overflow-hidden bg-[#050816] py-24">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[150px]" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-green-600/10 blur-[170px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Pill */}
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-6 py-2 text-sm font-semibold text-cyan-300 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            Endorsed by Growth Leaders
          </span>
        </div>

        {/* Heading */}
        <div className="mx-auto mt-8 max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Partner with an Agency That{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-green-500 bg-clip-text text-transparent">
              Speaks in Unit Economics
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Read how we collaborate with product teams and marketing heads to
            unlock scalable acquisition models.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="mt-20 rounded-[36px] border border-white/10 bg-white/[0.04] backdrop-blur-xl">
          <div className="grid lg:grid-cols-5">
            {/* Left Profile */}
            <div className="relative overflow-hidden lg:col-span-2">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 to-green-700/20" />

              <div className="relative flex h-full flex-col items-center justify-center p-12">
                <div className="relative h-44 w-44 overflow-hidden rounded-full border-4 border-cyan-500/30">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <h3 className="mt-8 text-3xl font-bold text-white">
                  {item.name}
                </h3>

                <p className="mt-2 text-cyan-300">
                  {item.role}
                </p>

                <p className="text-slate-400">
                  {item.company}
                </p>

                <div className="mt-6 flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Quote */}
            <div className="relative flex flex-col justify-center p-10 lg:col-span-3 lg:p-16">
              <Quote className="mb-8 h-16 w-16 text-cyan-500/40" />

              <p className="text-xl leading-10 text-slate-300 lg:text-2xl">
                {item.quote}
              </p>

              <div className="mt-12">
                <h4 className="text-xl font-bold text-white">
                  {item.name}
                </h4>

                <p className="mt-2 text-cyan-400">
                  {item.role} · {item.company}
                </p>
              </div>

              {/* Controls */}
              <div className="mt-12 flex items-center justify-between">
                <div className="flex gap-4">
                  <button
                    onClick={prevSlide}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-cyan-400 hover:bg-cyan-500"
                  >
                    <ArrowLeft className="h-5 w-5" />
                  </button>

                  <button
                    onClick={nextSlide}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-cyan-400 hover:bg-cyan-500"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>

                {/* Dots */}
                <div className="flex gap-3">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrent(index)}
                      className={`h-3 rounded-full transition-all ${
                        current === index
                          ? "w-10 bg-cyan-400"
                          : "w-3 bg-white/20"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-center backdrop-blur-xl">
            <h3 className="text-5xl font-bold text-cyan-400">32%</h3>
            <p className="mt-4 text-slate-300">
              Average CAC Reduction
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-center backdrop-blur-xl">
            <h3 className="text-5xl font-bold text-cyan-400">4.9/5</h3>
            <p className="mt-4 text-slate-300">
              Client Satisfaction
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-center backdrop-blur-xl">
            <h3 className="text-5xl font-bold text-cyan-400">150+</h3>
            <p className="mt-4 text-slate-300">
              Successful Growth Campaigns
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}