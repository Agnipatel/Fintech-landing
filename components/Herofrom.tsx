"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { usePopup } from "@/components/PopupProvider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MultiSelect } from "@/components/ui/multi-select";

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

export default function HeroForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const { setIsPopupOpen } = usePopup();

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const result = await res.json();
        throw new Error(
          result.error || "Failed to submit form."
        );
      }

      router.push("/thank-you");
    } catch (error: any) {
      setErrorMsg(
        error.message ||
        "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-xl px-4 py-3 text-sm sm:text-base text-black dark:text-white placeholder-zinc-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500/30 transition-all";

  return (
    <section
      id="contact"
      className="py-16 lg:py-24 bg-white dark:bg-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT CONTENT */}
          <div>
            <span className="inline-flex px-4 py-2 rounded-full bg-green-500/10 text-green-500 text-sm font-semibold border border-green-500/20 mb-6">
              #1 Digital Marketing Agency in Bangalore
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight mb-6 text-black dark:text-white">
              Best Digital Marketing Agency in
              <span className="text-green-500">
                {" "}
                Bangalore
              </span>
            </h2>

            <p className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg lg:text-xl leading-relaxed mb-10">
              Partner with the best digital marketing
              agency in Bangalore. Generate quality
              leads, improve ROAS, and accelerate
              revenue growth with strategic digital
              marketing solutions tailored to your
              business goals.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-10">
              <div>
                <h3 className="text-3xl font-bold text-green-500">
                  4X
                </h3>
                <p className="text-sm text-zinc-500">
                  Revenue Generated
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-green-500">
                  10K+
                </h3>
                <p className="text-sm text-zinc-500">
                  High-Quality Leads
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-green-500">
                  50+
                </h3>
                <p className="text-sm text-zinc-500">
                  Brands Scaled
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-green-500">
                  4+
                </h3>
                <p className="text-sm text-zinc-500">
                  Years Experience
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsPopupOpen(true)}
              className="w-full sm:w-fit bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300"
            >
              Book Your Free Strategy Session
            </button>

            <div className="mt-10 text-lg lg:text-2xl font-bold text-black dark:text-white">
              PANDAeCe — Driving Growth Through
              Performance Marketing
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl">
            <h3 className="text-2xl font-bold text-black dark:text-white mb-2">
              Take the First Step
            </h3>

            <p className="text-zinc-600 dark:text-zinc-400 mb-6 text-sm">
              Fill out the form below to request your
              comprehensive marketing audit.
            </p>

            <form
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              {errorMsg && (
                <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500 text-sm">
                  {errorMsg}
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  name="name"
                  required
                  placeholder="Full Name"
                  className={inputClass}
                />

                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Email Address"
                  className={inputClass}
                />
              </div>

              <input
                name="phone"
                required
                placeholder="Phone Number"
                className={inputClass}
              />

              <div className="grid md:grid-cols-2 gap-4">
                <MultiSelect
                  name="service"
                  required
                  placeholder="Select Services"
                  options={SERVICE_OPTIONS}
                  className={inputClass}
                />

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

              <textarea
                name="message"
                rows={4}
                placeholder="Tell us about your project..."
                className={`${inputClass} resize-none`}
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full min-h-[54px] bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-all disabled:opacity-70"
              >
                {isSubmitting
                  ? "Submitting..."
                  : "Request for Free Marketing Audit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}