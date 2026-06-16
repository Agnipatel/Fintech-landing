"use client";

import {
  Home,
  Receipt,
  Plus,
  CloudCog,
  Briefcase,
  Car,
  Sparkles,
  Shirt,
  ShoppingCart,
  Cpu,
  Bus,
  Mic,
  Zap,
  MessageSquare,
} from "lucide-react";

import { usePopup } from "@/components/PopupProvider";

const categories = [
  { name: "Real Estate", icon: Home },
  { name: "Education", icon: Receipt },
  { name: "Healthcare", icon: Plus },
  { name: "SaaS", icon: CloudCog },
  { name: "B2B Services", icon: Briefcase },

  { name: "Automotive", icon: Car },
  { name: "Jewellery", icon: Sparkles },
  { name: "Beauty & Wellness", icon: Sparkles },
  { name: "Fashion", icon: Shirt },
  { name: "Ecommerce", icon: ShoppingCart },

  { name: "Technology", icon: Cpu },
  { name: "Travel", icon: Bus },
  { name: "Events", icon: Mic },
  { name: "Energy", icon: Zap },
  { name: "More", icon: MessageSquare, active: true },
];

export default function Marking() {
  const { setIsPopupOpen } = usePopup();

  return (
    <main className="min-h-screen bg-black py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold text-green-600">
            Industries We Serve
          </h1>

          <p className="mt-3 text-lg text-gray-200">
            Select the industry that best matches your business.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {categories.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.name}
                className="
                  group
                  h-[150px]
                  rounded-xl
                  bg-[#050505]
                  border
                  border-[#111]
                  hover:bg-[#0a0a0a]
                  transition-all
                  duration-200
                  flex
                  flex-col
                  items-center
                  justify-center
                "
              >
                <div
                  className="
                    w-16
                    h-16
                    rounded-full
                    bg-[#d9d9d9]
                    flex
                    items-center
                    justify-center
                    mb-4
                  "
                >
                  <Icon
                    size={30}
                    className="text-green-600"
                    strokeWidth={2.2}
                  />
                </div>

                {item.active ? (
                  <span className="text-white font-semibold text-lg bg-green-600 px-2 py-1 rounded">
                    {item.name}
                  </span>
                ) : (
                  <span className="text-white font-semibold text-lg">
                    {item.name}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={() => setIsPopupOpen(true)}
            className="
              bg-green-500
              hover:bg-green-600
              text-white
              px-8
              py-3
              rounded-full
              font-medium
              text-lg
              transition-colors
              duration-300
            "
          >
           Speak With Our Team
          </button>
        </div>
      </div>
    </main>
  );
}