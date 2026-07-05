"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export function ContactCTA() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1436491865332-7a61a109db05?w=1920&q=80)",
          }}
        />
      </div>
      <div className="relative z-10 container-premium mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Ready to Start Your
              <br />
              <span className="text-gradient-gold">Luxury Journey?</span>
            </h2>
            <p className="text-lg text-white/70 mb-10 max-w-xl mx-auto">
              Let our travel experts craft the perfect itinerary tailored
              to your desires. Your dream vacation is just a conversation away.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl gradient-gold px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-secondary/30"
              >
                Contact Us Today
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:+971501234567"
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-white/20"
              >
                <Phone className="h-4 w-4" />
                +971 50 123 4567
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
