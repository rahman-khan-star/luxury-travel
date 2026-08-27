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
    color: "sky",
  },
  {
    icon: Headphones,
    title: "24/7 Concierge",
    description:
      "Round-the-clock personal assistance for anything you need, before, during, and after your trip.",
    color: "orange",
  },
  {
    icon: Award,
    title: "Award-Winning",
    description:
      "Recognized as the Leading Luxury Tour Operator multiple years running for exceptional service.",
    color: "emerald",
  },
  {
    icon: CreditCard,
    title: "Best Price Guarantee",
    description:
      "We match any comparable price and offer flexible payment plans for all our packages.",
    color: "sky",
  },
  {
    icon: Map,
    title: "Expert Local Guides",
    description:
      "Our guides are locals who bring destinations to life with insider knowledge and cultural insights.",
    color: "orange",
  },
  {
    icon: Heart,
    title: "Tailored Experiences",
    description:
      "Every trip is customized to your preferences. No cookie-cutter tours — only bespoke journeys.",
    color: "emerald",
  },
];

const colorClasses = {
  sky: {
    bg: "bg-sky-100",
    icon: "text-sky-500",
    hoverBg: "group-hover:bg-sky-500",
    hoverIcon: "group-hover:text-white",
  },
  orange: {
    bg: "bg-orange-100",
    icon: "text-orange-500",
    hoverBg: "group-hover:bg-orange-500",
    hoverIcon: "group-hover:text-white",
  },
  emerald: {
    bg: "bg-emerald-100",
    icon: "text-emerald-500",
    hoverBg: "group-hover:bg-emerald-500",
    hoverIcon: "group-hover:text-white",
  },
};

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-premium mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <span className="text-sm font-semibold text-emerald-500 uppercase tracking-wider">
            Why Us
          </span>
          <h2
            className="mt-2 text-3xl sm:text-4xl font-bold text-slate-800"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Why Choose Wadi Al Dhaid Tours
          </h2>
          <p className="mt-3 mx-auto max-w-2xl text-slate-600">
            Over a decade of crafting extraordinary journeys with unmatched
            attention to detail.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => {
            const colors = colorClasses[reason.color as keyof typeof colorClasses];
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group rounded-2xl bg-white border border-slate-100 shadow-sm p-6 text-center hover:shadow-xl transition-all duration-300"
              >
                <div
                  className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl ${colors.bg} transition-colors ${colors.hoverBg}`}
                >
                  <reason.icon
                    className={`h-6 w-6 ${colors.icon} transition-colors ${colors.hoverIcon}`}
                  />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
