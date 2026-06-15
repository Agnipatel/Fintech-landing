import Navbar from "@/components/Navbar";
import HeroFrom from "@/components/Herofrom";
import WhyPanda from "@/components/WhyPanda";
import PerformanceStarts from "@/components/PerformanceStarts";
import Growth from "@/components/Growth";
import Services from "@/components/Services";
import Happy from "@/components/Happy";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatApp";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 selection:bg-green-500/30">
      <Navbar />

      {/* Hero */}
      <HeroFrom />

      {/* Why Panda */}
      <WhyPanda />

      {/* Performance Stats */}
      <PerformanceStarts />

      {/* Marketing Headaches */}
      <section id="testimonials">
        <Happy />
      </section>

      {/* Growth */}
      <section id="growth">
        <Growth />
      </section>

      {/* Services */}
      <section id="services">
        <Services />
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ */}
      <section id="faq">
        <FAQ />
      </section>

      {/* Contact */}
      <section id="contact">
        <ContactForm />
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}