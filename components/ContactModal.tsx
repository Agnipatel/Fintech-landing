"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Loader2, CheckCircle } from "lucide-react";
import { usePopup } from "./PopupProvider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MultiSelect } from "@/components/ui/multi-select";
import { useRouter } from "next/navigation";

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

export default function ContactModal() {
  const { isPopupOpen, setIsPopupOpen } = usePopup();
  const router = useRouter();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
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
        throw new Error("Failed to submit form.");
      }

      setIsSuccess(true);
      setTimeout(() => {
        setIsPopupOpen(false);
        setIsSuccess(false);
        router.push("/thank-you");
      }, 2000);
    } catch (error) {
      setErrorMsg("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isPopupOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsPopupOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-zinc-800">
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Get Your <span className="text-green-500">Free Marketing </span>
              </h2>
              <button
                onClick={() => setIsPopupOpen(false)}
                className="text-zinc-400 hover:text-white transition-colors p-1 rounded-full hover:bg-zinc-800"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6 overflow-y-auto custom-scrollbar">
              {isSuccess ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Success!</h3>
                  <p className="text-zinc-400">
                    We have received your details. Redirecting you...
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMsg && (
                    <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500 text-sm">
                      {errorMsg}
                    </div>
                  )}

                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-zinc-300">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-zinc-300">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all"
                        placeholder="john@example.com"
                      />
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
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

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
                      <SelectTrigger className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all">
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

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-zinc-300">
                      Additional Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all resize-none"
                      placeholder="Tell us a bit about your goals..."
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 sm:py-4 rounded-xl transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        "Request for Free Marketing Audit"
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
