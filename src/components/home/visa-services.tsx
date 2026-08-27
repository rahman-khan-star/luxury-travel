"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, FileCheck, Globe, Shield, Clock } from "lucide-react";
import { visaServices } from "@/data";

export function VisaServices() {
  return (
    <section className="section-padding">
      <div className="container-premium mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="text-sm font-semibold text-secondary uppercase tracking-wider">
            Visa
          </span>
          <h2
            className="mt-2 text-3xl sm:text-4xl font-bold text-primary dark:text-white"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Visa Services
          </h2>
          <p className="mt-3 max-w-2xl text-text-light dark:text-white/60">
            Hassle-free visa processing with a 99.5% approval rate. We handle
            everything from documentation to submission.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {visaServices.map((visa, i) => (
            <motion.div
              key={visa.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-2xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 shadow-sm p-5 group hover:shadow-lg transition-all duration-300"
            >
              <div className="text-3xl mb-3">{visa.flag}</div>
              <h3 className="text-base font-bold text-primary dark:text-white mb-1">
                {visa.type}
              </h3>
              <p className="text-xs text-text-light dark:text-white/60 mb-3">
                {visa.country}
              </p>

              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-xs text-text-light dark:text-white/60">
                  <Clock className="h-3.5 w-3.5 text-secondary" />
                  <span>{visa.processingTime}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-text-light dark:text-white/60">
                  <Globe className="h-3.5 w-3.5 text-secondary" />
                  <span>{visa.duration} stay</span>
                </div>
              </div>

              <div className="pt-3 border-t border-border dark:border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-text-light dark:text-white/40">
                      Starting from
                    </span>
                    <p
                      className="text-lg font-bold text-secondary"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      ${visa.price}
                    </p>
                  </div>
                  <Link
                    href="/visa-services"
                    className="text-sm font-medium text-secondary hover:underline"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 rounded-2xl gradient-navy p-6 sm:p-8"
        >
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">
                Need Help with Your Visa?
              </h3>
              <p className="text-sm text-white/60">
                Our visa experts are here to guide you through every step.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl gradient-gold px-6 py-3 text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-secondary/25 shrink-0"
            >
              Get Free Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
