"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export function ContactCTA() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-r from-slate-900 to-slate-800">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1436491865332-7a61a109db05?w=1920&q=80)",
          }}
        />
      </div>
      <div className="absolute top-10 right-10 w-72 h-72 bg-sky-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 container-premium mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Ready to Start Your
              <br />
              <span className="text-sky-400">Adventure?</span>
            </h2>
            <p className="text-lg text-slate-300 mb-8 max-w-xl mx-auto">
              Let our travel experts craft the perfect itinerary tailored
              to your desires. Your dream vacation is just a conversation away.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-sky-600 hover:shadow-lg hover:shadow-sky-500/30"
              >
                Contact Us Today
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href="tel:+923429005290"
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-white/20"
              >
                <Phone className="h-5 w-5" />
                +92 342 900 5290
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
