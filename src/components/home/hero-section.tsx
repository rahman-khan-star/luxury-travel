"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { Search, ArrowRight, Plane, MapPin, Calendar } from "lucide-react";

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="relative min-h-[85vh] flex items-end overflow-hidden pb-40">
      <Image
        src="/hero-bg.png.png"
        alt="Travel background"
        fill
        className="object-cover object-center"
        priority
      />

      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black/30 to-transparent" />

      <div className="relative z-10 container-premium mx-auto px-4 w-full">
        <div className="flex flex-col lg:flex-row items-end justify-between gap-8">
          {/* Left: Text */}
          <div className="max-w-lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-3"
            >
              <div className="w-8 h-0.5 bg-white" />
              <span className="text-xs font-medium text-white">
                It&apos;s time to go
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.1] mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Don&apos;t just imagine it,
              <br />
              make it happen, <span className="text-sky-400">Travel</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-1 bg-red-500 rounded-full" />
              <div className="w-6 h-1 bg-yellow-400 rounded-full" />
            </motion.div>
          </div>

          {/* Right: Buttons + Stats */}
          <div className="flex flex-col items-end gap-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex gap-3"
            >
              <Link
                href="/tour-packages"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-sky-600 hover:shadow-lg hover:shadow-sky-500/30"
              >
                Start Exploring
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 backdrop-blur-sm px-6 py-3 text-sm font-semibold text-white border border-white/30 transition-all duration-300 hover:bg-white/20 hover:shadow-lg"
              >
                Plan Your Trip
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-5"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-white" />
                </div>
                <div>
                  <div className="font-bold text-white text-sm">50+</div>
                  <div className="text-xs text-white/70">Destinations</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <Calendar className="h-4 w-4 text-white" />
                </div>
                <div>
                  <div className="font-bold text-white text-sm">10K+</div>
                  <div className="text-xs text-white/70">Happy Travelers</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <Search className="h-4 w-4 text-white" />
                </div>
                <div>
                  <div className="font-bold text-white text-sm">4.9/5</div>
                  <div className="text-xs text-white/70">Rating</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
