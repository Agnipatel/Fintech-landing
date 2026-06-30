"use client";

import { CheckCircle } from "lucide-react";

const features = [
  "Technical Site Performance & Funnel Speed Review",
  "Programmatic SEO Competitor Gap Analysis",
  "Ad Spend Efficiency & Waste Identification Audit",
  "Attribution Tracking Validation",
  "Onboarding Flow Friction Analysis",
  "90-Day Scalable User Acquisition Roadmap",
];

export default function AuditFormSection() {
  return (
    <section className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 leading-tight">
          Find Out Why Users Choose Other
          <br />
          Bangalore FinTech Platforms
        </h2>

        <p className="mt-5 text-gray-500 max-w-3xl mx-auto">
          Our performance marketing specialists will identify structural
          leakages in your acquisition funnel and provide actionable
          strategies to decrease customer acquisition cost (CAC).
        </p>
      </div>

      <div className="bg-white rounded-3xl shadow-xl overflow-hidden grid lg:grid-cols-2">

        {/* Left Side */}

        <div className="p-10 border-r border-gray-100">

          <h3 className="font-bold text-lg mb-8">
            What You ll Receive:
          </h3>

          <div className="space-y-6">
            {features.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <CheckCircle
                  className="text-green-500 mt-1"
                  size={22}
                />

                <p className="text-gray-700 leading-7">
                  {item}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Right Side */}

        <div className="p-10">

          <form className="space-y-5">

            <div>
              <label className="text-sm font-medium text-gray-700">
                Name
              </label>

              <input
                type="text"
                placeholder="Enter your full name"
                className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Phone Number
              </label>

              <input
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Corporate Email
              </label>

              <input
                type="email"
                placeholder="corporate@company.com"
                className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Location
              </label>

              <select className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500">
                <option>Select your location</option>
                <option>Bangalore</option>
                <option>Mumbai</option>
                <option>Delhi</option>
                <option>Hyderabad</option>
                <option>Pune</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Website URL
              </label>

              <input
                type="url"
                placeholder="https://domain.com"
                className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                How Did You Hear About Us?
              </label>

              <input
                type="text"
                placeholder="Google Ads, Meta Ads, LinkedIn"
                className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Your Message
              </label>

              <textarea
                rows={4}
                placeholder="Tell us about your goals, challenges or growth plans"
                className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-blue-700 to-blue-500 py-4 text-white font-semibold text-lg shadow-lg hover:scale-[1.02] transition"
            >
              Get Your Performance Audit
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}