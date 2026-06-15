"use client";

import { ArrowRight } from "lucide-react";
import { usePopup } from "@/components/PopupProvider";

const frameworkSteps = [
    {
        number: "01",
        title: "Market & Technical SEO Audit",
        description:
            "We analyze your website, competitors, and audience behavior to uncover growth opportunities, technical issues, and high-intent keywords.",
    },
    {
        number: "02",
        title: "Multi-Channel Acquisition Strategy",
        description:
            "We identify the most effective acquisition channels including Google, Meta, LinkedIn, and organic search.",
    },
    {
        number: "03",
        title: "Performance Campaign Deployment",
        description:
            "We launch data-driven campaigns with precise targeting, compelling creatives, and advanced conversion tracking.",
    },
    {
        number: "04",
        title: "Automation & CRM Integration",
        description:
            "We connect marketing automation and CRM systems to capture, track, and nurture every lead.",
    },
    {
        number: "05",
        title: "Aggressive ROI Scaling",
        description:
            "We optimize performance continuously and scale profitable channels to maximize revenue growth.",
    },
];

export default function Growth() {
    const { setIsPopupOpen } = usePopup();

    return (
        <section className="relative bg-black text-white overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0">
                <div className="absolute left-0 bottom-0 w-[700px] h-[700px] bg-orange-600/30 blur-[180px] rounded-full" />
                <div className="absolute left-20 bottom-20 w-[500px] h-[500px] bg-red-500/20 blur-[160px] rounded-full" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24">
                <div className="grid lg:grid-cols-2 gap-20">
                    {/* Left Content */}
                    <div>
                        <span className="inline-block px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-semibold mb-6">
                            Growth Framework
                        </span>

                        <h2 className="text-4xl lg:text-5xl font-bold mb-8">
                            Our Performance-Driven Growth Framework
                        </h2>

                        <p className="text-zinc-400 text-lg leading-relaxed max-w-xl mb-10">
                            Our growth framework eliminates guesswork, generates qualified
                            leads, and scales revenue through data-driven marketing.
                            Every stage focuses on measurable performance and sustainable
                            business growth.
                        </p>

                        <button
                            onClick={() => setIsPopupOpen(true)}
                            className="inline-flex items-center gap-2 border border-zinc-700 hover:border-green-500 hover:text-green-400 px-6 py-3 rounded-xl transition-all duration-300"
                        >
                            Book an Audit
                            <ArrowRight size={18} />
                        </button>
                    </div>

                    {/* Timeline */}
                    <div className="relative">
                        <div className="absolute left-6 top-0 bottom-0 w-px bg-zinc-700" />

                        <div className="space-y-12">
                            {frameworkSteps.map((step) => (
                                <div key={step.number} className="relative pl-20">
                                    <div className="absolute left-0 top-0 w-12 h-12 bg-white rounded-full flex items-center justify-center text-orange-500 font-bold">
                                        {step.number}
                                    </div>

                                    <h3 className="text-2xl font-semibold mb-3">
                                        {step.title}
                                    </h3>

                                    <p className="text-zinc-400 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-20 text-center">
                    <div className="border-t border-zinc-800 pt-12">
                        <h3 className="text-3xl font-bold mb-4">
                            Ready to Scale Your Business?
                        </h3>

                        <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
                            Get a free growth audit and discover the fastest path to
                            generating more leads, increasing revenue, and improving ROI.
                        </p>

                        <button
                            onClick={() => setIsPopupOpen(true)}
                            className="bg-green-600 hover:bg-green-700 text-green-500 px-8 py-4 rounded-full font-semibold transition-all"
                        >
                            Book a Growth Strategy Call
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}