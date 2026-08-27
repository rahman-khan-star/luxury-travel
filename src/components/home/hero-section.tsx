"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, ArrowRight, Star, Shield, Clock } from "lucide-react";

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="relative min-h-[85vh] flex items-center">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
      </div>

      <div className="relative z-10 container-premium mx-auto px-4 py-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 text-xs text-secondary mb-4">
              <Star className="h-3 w-3 fill-secondary" />
              Award-Winning Travel Agency
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Discover the World
            <br />
            <span className="text-gradient-gold">in Ultimate Luxury</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-white/70 max-w-xl mb-6 leading-relaxed"
          >
            From Dubai&apos;s golden skyline to Pakistan&apos;s breathtaking
            valleys. Premium travel experiences crafted for the discerning
            traveler.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Link
              href="/tour-packages"
              className="inline-flex items-center justify-center gap-2 rounded-xl gradient-gold px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-secondary/30 hover:-translate-y-0.5"
            >
              Explore Packages
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/20"
            >
              Plan Your Trip
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex items-center gap-6 text-white/60 text-xs"
          >
            <div className="flex items-center gap-1.5">
              <Shield className="h-4 w-4 text-secondary" />
              <span>100% Secure Booking</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-secondary" />
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Star className="h-4 w-4 text-secondary" />
              <span>4.9/5 Rating</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent dark:from-primary" />
    </section>
  );
}
