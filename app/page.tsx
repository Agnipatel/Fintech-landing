import Navbar from "@/components/Navbar";
import HeroFrom from "@/components/Herofrom";
import PerformanceStarts from "@/components/PerformanceStarts";
import Growth from "@/components/Growth";
import Services from "@/components/Services";
import Happy from "@/components/Happy";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatApp";
import Marking from "@/components/Marking";

import FaqSection from "@/components/FaqSection";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <HeroFrom />

      {/* Performance */}
      <PerformanceStarts />

      {/* Marketing */}
      <section id="marketing" className="scroll-mt-20">
        <Marking />
      </section>

      {/* Happy Clients */}
      <section id="happy-clients" className="scroll-mt-20">
        <Happy />
      </section>

      {/* Growth */}
      <section id="growth" className="scroll-mt-20">
        <Growth />
      </section>

      {/* Services */}
      <section id="services" className="scroll-mt-20">
        <Services />
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="scroll-mt-20">
        <Testimonials />
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-20">
        <FAQ />
      </section>

      {/* Fintech Process + FAQ Section (dual anchors) */}
      <span id="ivf-process" className="block scroll-mt-20" />
      <section id="faqSection" className="scroll-mt-20">
        <FaqSection />
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-20">
        <ContactForm />
      </section>


      {/* Footer */}
      <Footer />

      {/* WhatsApp */}
      <WhatsAppButton />
    </main>
  );
}