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
import IVFProcessAndTestimonials from "@/components/IVFProcessAndTestimonials";
import IVFFAQSection from "@/components/IVFFAQSection";

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

      {/* IVF Process */}
      <section id="ivf-process" className="scroll-mt-20">
        <IVFProcessAndTestimonials />
      </section>

      {/* IVF FAQ */}
      <section id="IVFFAQSection" className="scroll-mt-20">
        <IVFFAQSection />
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