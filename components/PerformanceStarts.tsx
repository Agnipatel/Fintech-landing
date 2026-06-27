"use client";

import Image from "next/image";

const clients = [
  "/b.png",
  "/b1.png",
  "/b4.png",
  "/b3.png",
];

export default function TrustedClients() {
  return (
    <section className="overflow-hidden bg-black py-14 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Badge */}
        <div className="flex justify-center">
          <span className="rounded-full border border-green-500/30 bg-green-500/10 px-5 py-2 text-center text-xs font-medium leading-relaxed text-green-400 sm:text-sm">
            ● Trusted by Leading Fertility Clinics & Healthcare Brands Across
            Global Markets
          </span>
        </div>

        {/* Heading */}
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Brands That Trust Our Expertise
        </h2>

        {/* Description */}
        <p className="mx-auto mt-5 max-w-3xl text-center text-sm leading-7 text-gray-400 sm:text-base lg:text-lg">
          We partner with fertility clinics, IVF centers, hospitals, and
          healthcare organizations to deliver measurable digital marketing
          growth, increased online visibility, and qualified patient leads.
        </p>

        {/* Logo Cards */}
        <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-4">
          {clients.map((logo, index) => (
            <div
              key={index}
              className="group flex h-28 items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-green-500/40 hover:bg-white/10"
            >
              <Image
                src={logo}
                alt={`Client Logo ${index + 1}`}
                width={180}
                height={90}
                className="h-12 w-auto object-contain grayscale transition-all duration-300 group-hover:scale-105 group-hover:grayscale-0 sm:h-14 lg:h-16"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}