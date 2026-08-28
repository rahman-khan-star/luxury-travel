"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { Search, ArrowRight, Plane, MapPin, Calendar } from "lucide-react";

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="relative min-h-[85vh] flex items-end overflow-hidden pb-24">
      <Image
        src="/hero-bg.jpg.jpg"
        alt="Travel background"
        fill
        className="object-cover object-center"
        priority
      />

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/80 to-transparent dark:from-slate-950 dark:via-slate-950/80" />

      <div className="relative z-10 container-premium mx-auto px-4">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-10 h-0.5 bg-slate-800 dark:bg-white" />
            <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
              It&apos;s time to go
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 dark:text-white leading-[1.05] mb-5"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Don&apos;t just imagine it,
            <br />
            make it happen, <span className="text-sky-500">Travel</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-12 h-1 bg-red-500 rounded-full" />
            <div className="w-8 h-1 bg-yellow-400 rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/tour-packages"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-500 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-sky-600 hover:shadow-lg hover:shadow-sky-500/30"
            >
              Start Exploring
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/90 dark:bg-white/10 backdrop-blur-sm px-8 py-4 text-base font-semibold text-slate-700 dark:text-white border border-slate-200 dark:border-white/20 transition-all duration-300 hover:bg-white dark:hover:bg-white/20 hover:shadow-lg"
            >
              Plan Your Trip
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex items-center gap-8"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/90 dark:bg-white/10 flex items-center justify-center shadow-sm">
                <MapPin className="h-5 w-5 text-sky-500" />
              </div>
              <div>
                <div className="font-bold text-slate-800 dark:text-white">50+</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">Destinations</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/90 dark:bg-white/10 flex items-center justify-center shadow-sm">
                <Calendar className="h-5 w-5 text-sky-500" />
              </div>
              <div>
                <div className="font-bold text-slate-800 dark:text-white">10K+</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">Happy Travelers</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/90 dark:bg-white/10 flex items-center justify-center shadow-sm">
                <Search className="h-5 w-5 text-emerald-500" />
              </div>
              <div>
                <div className="font-bold text-slate-800 dark:text-white">4.9/5</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">Rating</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
