"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { Search, ArrowRight, Plane, MapPin, Calendar } from "lucide-react";

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="relative min-h-[80vh] flex items-end overflow-hidden pb-40">
      <Image
        src="/hero-bg.jpg"
        alt="Travel background"
        fill
        sizes="100vw"
        className="object-cover object-top"
        priority
      />

      <div className="absolute inset-0 bg-black/20" />

      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

      <div className="relative z-10 container-premium mx-auto px-4 w-full">
        <div className="flex flex-col items-start gap-6 sm:items-end sm:flex-row sm:justify-between sm:gap-8">
          {/* Left: Empty */}
          <div className="max-w-xs sm:max-w-lg" />

          {/* Right: Buttons + Stats */}
          <div className="flex flex-col items-start sm:items-end gap-4 sm:gap-5 w-full sm:w-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex gap-2 sm:gap-3"
            >
              <Link
                href="/tour-packages"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-500 px-4 py-2.5 text-xs font-semibold text-white transition-all duration-300 hover:bg-sky-600 hover:shadow-lg hover:shadow-sky-500/30 sm:px-6 sm:py-3 sm:text-sm"
              >
                Start Exploring
                <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 backdrop-blur-sm px-4 py-2.5 text-xs font-semibold text-white border border-white/30 transition-all duration-300 hover:bg-white/20 hover:shadow-lg sm:px-6 sm:py-3 sm:text-sm"
              >
                Plan Your Trip
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-3 sm:gap-5"
            >
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                </div>
                <div>
                  <div className="font-bold text-white text-xs sm:text-sm">50+</div>
                  <div className="text-[10px] sm:text-xs text-white/70">Destinations</div>
                </div>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <Calendar className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                </div>
                <div>
                  <div className="font-bold text-white text-xs sm:text-sm">10K+</div>
                  <div className="text-[10px] sm:text-xs text-white/70">Happy Travelers</div>
                </div>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <Search className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                </div>
                <div>
                  <div className="font-bold text-white text-xs sm:text-sm">4.9/5</div>
                  <div className="text-[10px] sm:text-xs text-white/70">Rating</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
