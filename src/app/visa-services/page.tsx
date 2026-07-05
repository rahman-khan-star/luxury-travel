"use client";

import { motion } from "framer-motion";
import {
  FileCheck,
  Globe,
  Shield,
  Clock,
  CheckCircle,
  Phone,
  ArrowRight,
} from "lucide-react";
import { visaServices } from "@/data";
import Link from "next/link";

export default function VisaServicesPage() {
  return (
    <>
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="relative z-10 container-premium mx-auto px-4 text-center">
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Visa <span className="text-gradient-gold">Services</span>
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Hassle-free visa processing with a 99.5% approval rate. We handle
            everything from documentation to submission.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-premium mx-auto">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-16">
            {[
              { icon: FileCheck, title: "99.5% Approval", desc: "Industry-leading success rate" },
              { icon: Clock, title: "Fast Processing", desc: "3-10 business days" },
              { icon: Shield, title: "Secure & Safe", desc: "Your documents are protected" },
              { icon: Globe, title: "All Countries", desc: "Visa services worldwide" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="premium-card text-center"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-50 dark:bg-gold-900/20">
                  <item.icon className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-lg font-bold text-text dark:text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-text-light dark:text-white/60">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {visaServices.map((visa, i) => (
              <motion.div
                key={visa.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="premium-card"
              >
                <div className="flex items-start gap-4 mb-6">
                  <span className="text-5xl">{visa.flag}</span>
                  <div>
                    <h3 className="text-xl font-bold text-text dark:text-white">
                      {visa.type}
                    </h3>
                    <p className="text-sm text-text-light dark:text-white/60">
                      {visa.country} — {visa.duration} stay
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="rounded-xl bg-background dark:bg-navy-900 p-3">
                    <p className="text-xs text-text-light dark:text-white/40">
                      Processing Time
                    </p>
                    <p className="text-sm font-semibold text-text dark:text-white">
                      {visa.processingTime}
                    </p>
                  </div>
                  <div className="rounded-xl bg-background dark:bg-navy-900 p-3">
                    <p className="text-xs text-text-light dark:text-white/40">
                      Visa Fee
                    </p>
                    <p
                      className="text-sm font-semibold text-secondary"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      ${visa.price}
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-text dark:text-white mb-3">
                    Requirements
                  </h4>
                  <ul className="space-y-2">
                    {visa.requirements.map((req) => (
                      <li
                        key={req}
                        className="flex items-start gap-2 text-sm text-text-light dark:text-white/60"
                      >
                        <CheckCircle className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/contact"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-secondary px-4 py-3 text-sm font-semibold text-white hover:bg-gold-600 transition-colors"
                >
                  Apply Now
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 rounded-2xl gradient-navy p-8 sm:p-12"
          >
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Need Help with Your Visa?
                </h3>
                <p className="text-white/60">
                  Our visa experts are available 24/7 to assist you.
                </p>
              </div>
              <a
                href="tel:+971501234567"
                className="inline-flex items-center gap-2 rounded-xl gradient-gold px-8 py-4 text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-secondary/25 shrink-0"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
