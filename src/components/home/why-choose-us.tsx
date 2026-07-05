"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Headphones,
  Award,
  CreditCard,
  Map,
  Heart,
} from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Trusted & Secure",
    description:
      "Your safety is our priority. Fully licensed, insured, and certified by tourism boards worldwide.",
  },
  {
    icon: Headphones,
    title: "24/7 Concierge",
    description:
      "Round-the-clock personal assistance for anything you need, before, during, and after your trip.",
  },
  {
    icon: Award,
    title: "Award-Winning",
    description:
      "Recognized as the Leading Luxury Tour Operator multiple years running for exceptional service.",
  },
  {
    icon: CreditCard,
    title: "Best Price Guarantee",
    description:
      "We match any comparable price and offer flexible payment plans for all our packages.",
  },
  {
    icon: Map,
    title: "Expert Local Guides",
    description:
      "Our guides are locals who bring destinations to life with insider knowledge and cultural insights.",
  },
  {
    icon: Heart,
    title: "Tailored Experiences",
    description:
      "Every trip is customized to your preferences. No cookie-cutter tours — only bespoke journeys.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-navy-50 dark:bg-navy-950">
      <div className="container-premium mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="text-sm font-semibold text-secondary uppercase tracking-wider">
            Why Us
          </span>
          <h2
            className="mt-2 text-3xl sm:text-4xl font-bold text-text dark:text-white"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Why Choose Luxury Travel
          </h2>
          <p className="mt-3 mx-auto max-w-2xl text-text-light dark:text-white/60">
            Over a decade of crafting extraordinary journeys with unmatched
            attention to detail.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group premium-card text-center"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-50 transition-colors group-hover:bg-secondary group-hover:text-white dark:bg-gold-900/20">
                <reason.icon className="h-6 w-6 text-secondary group-hover:text-white" />
              </div>
              <h3 className="text-lg font-bold text-text dark:text-white mb-2">
                {reason.title}
              </h3>
              <p className="text-sm text-text-light dark:text-white/60 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
