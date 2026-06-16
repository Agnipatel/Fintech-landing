"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MultiSelect } from "@/components/ui/multi-select";

import {
  MapPin,
  Loader2,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";


const WHATSAPP_NUMBER = "918217794751";
const WHATSAPP_MSG = encodeURIComponent(
  "Hi PANDAeCe! I'm interested in your real estate marketing services. Please share more details."
);
const GOOGLE_MAPS_URL =
  "https://maps.google.com/?q=4th+Floor,+292,+7th+Main+Rd,+Vyalikaval+HBCS+Layout,+Nagavara,+Bengaluru,+Karnataka+560045";

const SERVICE_OPTIONS = [
  { label: "Lead Generation Campaigns", value: "Lead Generation Campaigns" },
  { label: "Meta Ads Management", value: "Meta Ads Management" },
  { label: "Google Ads Management", value: "Google Ads Management" },
  { label: "SEO Management", value: "SEO Management" },
  { label: "Landing Page Optimization", value: "Landing Page Optimization" },
  { label: "WhatsApp & CRM Automation", value: "WhatsApp & CRM Automation" },
  { label: "Social Media Marketing", value: "Social Media Marketing" },
  { label: "Website Design & Development", value: "Website Design & Development" },
];

export default function ContactPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      service: formData.get("service"),
      budget: formData.get("budget"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to submit form.");
      }

      router.push("/thank-you");
    } catch (error: any) {
      setErrorMsg(error.message || "Something went wrong. Please try again.");
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500/30 transition-all";

  return (
    <section id="contact" className="bg-slate-950 text-slate-50">
      {/* ══════════════════ FORM + INFO ══════════════════ */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-start">

            {/* ── Left/Top: form ── */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl order-1"
            >
              {/* Badge */}
              <div className="absolute -top-4 left-4 md:-left-4 bg-green-600 text-white text-xs font-bold px-4 py-1.5 rounded-full animate-pulse shadow-lg">
                Free Consultation
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                Real Estate Marketing Pandaece
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm mb-7">
                Fill out the form — our experts will reach out within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMsg && (
                  <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500 text-sm">
                    {errorMsg}
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-zinc-300">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className={inputClass}
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-zinc-300">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className={inputClass}
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-zinc-300">
                    Phone Number *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    className={inputClass}
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium text-zinc-300">
                      Service Interested In *
                    </label>
                    <MultiSelect
                      name="service"
                      required
                      placeholder="Select Services"
                      options={SERVICE_OPTIONS}
                      className="bg-zinc-900 border-zinc-800 text-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="budget" className="text-sm font-medium text-zinc-300">
                      Marketing Budget *
                    </label>
                    <Select name="budget" required>
                      <SelectTrigger className={inputClass}>
                        <SelectValue placeholder="Select Budget" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="40k-50k">40k-50k</SelectItem>
                        <SelectItem value="50k-80k">50k-80k</SelectItem>
                        <SelectItem value="80k - 1 lakh">80k - 1 lakh</SelectItem>
                        <SelectItem value="5 lakh+">5 lakh+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-zinc-300">
                    Additional Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    className={`${inputClass} resize-none`}
                    placeholder="Tell us a bit about your goals..."
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 sm:py-4 rounded-xl transition-all flex items-center justify-center gap-2 group shadow-lg shadow-green-900/20 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Request for Free Marketing Audit
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                  <p className="text-center text-gray-500 text-xs mt-3">
                    🔒 Your information is 100% confidential. No spam, ever.
                  </p>
                </div>
              </form>
            </motion.div>

            {/* ── Right/Bottom: info panel ── */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="order-2"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Scale{" "}
                <span className="text-green-500">Your Business?</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-400 mb-8 leading-relaxed">
                Whether you&apos;re launching a residential project, promoting luxury
                apartments, or scaling commercial campaigns — PANDAeCe builds
                data-driven strategies that deliver measurable results.
              </p>

              {/* Bullet points */}
              <div className="space-y-4 mb-10">
                {[
                  "Dedicated real estate marketing team",
                  "AI-powered audience targeting",
                  "Full-funnel campaign management",
                  "Real-time analytics & reporting",
                  "Guaranteed lead quality SLA",
                ].map((point, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm sm:text-base text-gray-300">
                    <CheckCircle2 size={17} className="text-green-500 flex-shrink-0" />
                    {point}
                  </div>
                ))}
              </div>

              {/* Office Address — clickable Google Maps */}
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                id="office-address-map-link"
                className="group flex items-start gap-4 bg-slate-900 border border-slate-800 hover:border-green-500/40 rounded-2xl p-5 transition-all"
              >
                <div className="bg-green-500/10 text-green-400 p-3 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform">
                  <MapPin size={20} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-1.5 mb-1">
                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-widest">
                      Office Address
                    </p>
                    <ExternalLink
                      size={11}
                      className="text-gray-600 group-hover:text-green-400 transition-colors"
                    />
                  </div>
                  <p className="text-white font-semibold leading-relaxed text-sm">
                    4th Floor, 292, 7th Main Rd,
                    <br />
                    Vyalikaval HBCS Layout, Nagavara,
                    <br />
                    Bengaluru, Karnataka 560045
                  </p>
                  <p className="text-green-400 text-xs font-medium mt-2 group-hover:text-green-300 transition-colors flex items-center gap-1">
                    Open in Google Maps
                    <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
                  </p>
                </div>
              </a>

              {/* WhatsApp quick message */}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                id="whatsapp-quick-msg"
                className="group mt-4 flex items-center gap-4 bg-[#25D366]/8 border border-[#25D366]/25 hover:border-[#25D366]/50 rounded-2xl p-5 transition-all"
              >
                <div className="bg-[#25D366]/15 text-[#25D366] p-3 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform">
                  <FaWhatsapp size={22} />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">
                    Prefer WhatsApp?
                  </p>
                  <p className="text-gray-500 text-xs mt-0.5">
                    Tap to open a chat with a pre-filled message — we reply fast!
                  </p>
                  <p className="text-[#25D366] text-xs font-medium mt-2 flex items-center gap-1">
                    Start WhatsApp chat
                    <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
                  </p>
                </div>
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </section>
  );
}
