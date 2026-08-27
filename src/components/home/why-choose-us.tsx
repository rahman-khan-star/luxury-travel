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
    <section className="section-padding">
      <div className="container-premium mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center"
        >
          <span className="text-sm font-semibold text-secondary uppercase tracking-wider">
            Why Us
          </span>
          <h2
            className="mt-2 text-3xl sm:text-4xl font-bold text-primary dark:text-white"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Why Choose Wadi Al Dhaid Tours
          </h2>
          <p className="mt-3 mx-auto max-w-2xl text-text-light dark:text-white/60">
            Over a decade of crafting extraordinary journeys with unmatched
            attention to detail.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group rounded-2xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 shadow-sm p-5 text-center hover:shadow-lg transition-all duration-300"
            >
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gold-50 transition-colors group-hover:bg-secondary group-hover:text-white dark:bg-gold-900/20">
                <reason.icon className="h-5 w-5 text-secondary group-hover:text-white" />
              </div>
              <h3 className="text-base font-bold text-primary dark:text-white mb-1">
                {reason.title}
              </h3>
              <p className="text-xs text-text-light dark:text-white/60 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
