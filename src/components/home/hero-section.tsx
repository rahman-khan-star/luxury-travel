"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, ArrowRight, Plane, MapPin, Calendar } from "lucide-react";

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="relative min-h-[85vh] flex items-end overflow-hidden pb-32">
      <div className="absolute inset-0 bg-gradient-to-b from-sky-300 via-sky-200 to-sky-100" />

      <div
        className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-90"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1436491865332-7a61a109db05?w=1920&q=80)",
          backgroundPosition: "center 30%",
        }}
      />

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/80 to-transparent" />

      <div className="relative z-10 container-premium mx-auto px-4">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-sm border border-sky-200 px-4 py-2 text-sm text-sky-600 mb-6 shadow-sm">
              <Plane className="h-4 w-4" />
              Premium Travel Experiences
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 leading-[1.05] mb-5"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Explore the World
            <br />
            <span className="text-sky-500">with Confidence</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-slate-600 max-w-lg mb-8 leading-relaxed"
          >
            Discover amazing destinations, book flights, hotels, and complete
            travel packages. Your dream vacation is just a click away.
          </motion.p>

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
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/90 backdrop-blur-sm px-8 py-4 text-base font-semibold text-slate-700 border border-slate-200 transition-all duration-300 hover:bg-white hover:shadow-lg"
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
              <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-sm">
                <MapPin className="h-5 w-5 text-sky-500" />
              </div>
              <div>
                <div className="font-bold text-slate-800">50+</div>
                <div className="text-xs text-slate-500">Destinations</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-sm">
                <Calendar className="h-5 w-5 text-orange-500" />
              </div>
              <div>
                <div className="font-bold text-slate-800">10K+</div>
                <div className="text-xs text-slate-500">Happy Travelers</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-sm">
                <Search className="h-5 w-5 text-emerald-500" />
              </div>
              <div>
                <div className="font-bold text-slate-800">4.9/5</div>
                <div className="text-xs text-slate-500">Rating</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
