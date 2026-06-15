"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { usePopup } from "@/components/PopupProvider";

const servicesList = [
  {
    title: "Meta Ads",
    desc: "Precision targeting on Facebook and Instagram to drive high-quality leads and conversions.",
  },
  {
    title: "Google Ads",
    desc: "Capture high-intent search traffic and dominate search engine results pages.",
  },
  {
    title: "SEO",
    desc: "Long-term organic growth strategies to ensure your business is found by the right audience.",
  },
  {
    title: "Social Media Marketing",
    desc: "Build brand awareness and engage your community across all major platforms.",
  },
  {
    title: "CRM Automation",
    desc: "Streamline your sales pipeline and automate follow-ups to close more deals.",
  },
  {
    title: "Website Development",
    desc: "High-converting, blazing fast landing pages and websites tailored to your brand.",
  },
];

export default function Services() {
  const { setIsPopupOpen } = usePopup();

  return (
    <section id="services" className="py-20 bg-slate-950 text-slate-50">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-green-500">Services</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Comprehensive digital marketing solutions designed to scale your revenue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {servicesList.map((service, index) => (
            <div key={index} className="bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-green-500/50 transition-colors">
              <div className="w-12 h-12 bg-green-500/10 text-green-500 rounded-xl flex items-center justify-center mb-6">
                <span className="font-bold text-xl">{index + 1}</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-slate-400 mb-6">{service.desc}</p>
              <button
                onClick={() => setIsPopupOpen(true)}
                className="text-green-500 font-medium hover:text-green-400 transition-colors"
              >
                Learn More &rarr;
              </button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => setIsPopupOpen(true)}
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-medium transition-colors text-lg"
          >
            Get Free Marketing Audit
          </button>
        </div>
      </div>
    </section>
  );
}
