"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, ArrowRight, Star, Shield, Clock } from "lucide-react";

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
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

      <div className="relative z-10 container-premium mx-auto px-4 py-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 text-sm text-secondary mb-6">
              <Star className="h-4 w-4 fill-secondary" />
              Award-Winning Travel Agency
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Discover the World
            <br />
            <span className="text-gradient-gold">in Ultimate Luxury</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg sm:text-xl text-white/70 max-w-xl mb-10 leading-relaxed"
          >
            From Dubai&apos;s golden skyline to Pakistan&apos;s breathtaking
            valleys. Premium travel experiences crafted for the discerning
            traveler.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/tour-packages"
              className="inline-flex items-center justify-center gap-2 rounded-xl gradient-gold px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-secondary/30 hover:-translate-y-0.5"
            >
              Explore Packages
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-white/20"
            >
              Plan Your Trip
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-12 flex items-center gap-8 text-white/60 text-sm"
          >
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-secondary" />
              <span>100% Secure Booking</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-secondary" />
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-secondary" />
              <span>4.9/5 Rating</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
