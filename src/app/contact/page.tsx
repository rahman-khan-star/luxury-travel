"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
} from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="relative z-10 container-premium mx-auto px-4 text-center">
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Get in <span className="text-gradient-gold">Touch</span>
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Ready to plan your dream vacation? Our travel experts are here to
            help.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-premium mx-auto">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {submitted ? (
                  <div className="rounded-2xl bg-white p-12 luxury-shadow dark:bg-navy-800 dark:border dark:border-white/10 text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-text dark:text-white mb-2">
                      Message Sent!
                    </h2>
                    <p className="text-text-light dark:text-white/60">
                      We&apos;ll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSubmitted(true);
                    }}
                    className="rounded-2xl bg-white p-8 luxury-shadow dark:bg-navy-800 dark:border dark:border-white/10"
                  >
                    <h2 className="text-2xl font-bold text-text dark:text-white mb-6">
                      Send Us a Message
                    </h2>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-sm font-medium text-text dark:text-white mb-1.5">
                          First Name
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-text outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary dark:bg-navy-900 dark:border-white/10 dark:text-white"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-text dark:text-white mb-1.5">
                          Last Name
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-text outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary dark:bg-navy-900 dark:border-white/10 dark:text-white"
                          placeholder="Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-text dark:text-white mb-1.5">
                          Email
                        </label>
                        <input
                          type="email"
                          required
                          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-text outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary dark:bg-navy-900 dark:border-white/10 dark:text-white"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-text dark:text-white mb-1.5">
                          Phone
                        </label>
                        <input
                          type="tel"
                          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-text outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary dark:bg-navy-900 dark:border-white/10 dark:text-white"
                          placeholder="+971 50 123 4567"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block text-sm font-medium text-text dark:text-white mb-1.5">
                          Subject
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-text outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary dark:bg-navy-900 dark:border-white/10 dark:text-white"
                          placeholder="Dubai Tour Package Inquiry"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block text-sm font-medium text-text dark:text-white mb-1.5">
                          Message
                        </label>
                        <textarea
                          rows={5}
                          required
                          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-text outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary resize-none dark:bg-navy-900 dark:border-white/10 dark:text-white"
                          placeholder="Tell us about your travel plans..."
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="mt-6 inline-flex items-center gap-2 rounded-xl gradient-gold px-8 py-3 text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-secondary/25"
                    >
                      <Send className="h-4 w-4" />
                      Send Message
                    </button>
                  </form>
                )}
              </motion.div>
            </div>

            <div className="lg:col-span-2 space-y-6">
              {[
                {
                  icon: Phone,
                  label: "Phone",
                  value: "+971 50 123 4567",
                  href: "tel:+971501234567",
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: "info@luxurytravel.com",
                  href: "mailto:info@luxurytravel.com",
                },
                {
                  icon: MapPin,
                  label: "Office",
                  value: "Dubai, United Arab Emirates",
                  href: "#",
                },
                {
                  icon: Clock,
                  label: "Hours",
                  value: "24/7 Support Available",
                  href: "#",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-start gap-4 rounded-2xl bg-white p-6 luxury-shadow dark:bg-navy-800 dark:border dark:border-white/10"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-50 dark:bg-gold-900/20 shrink-0">
                    <item.icon className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-text dark:text-white mb-0.5">
                      {item.label}
                    </h3>
                    <a
                      href={item.href}
                      className="text-sm text-text-light dark:text-white/60 hover:text-secondary"
                    >
                      {item.value}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
