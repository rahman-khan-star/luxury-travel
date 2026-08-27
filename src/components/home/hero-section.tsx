"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, ArrowRight, Plane, MapPin, Calendar } from "lucide-react";

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 gradient-hero" />
      
      <div className="absolute top-20 right-10 w-72 h-72 bg-sky-200/30 rounded-full blur-3xl dark:bg-sky-900/20" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-orange-200/20 rounded-full blur-3xl dark:bg-orange-900/10" />

      <div className="absolute top-1/4 right-1/4 animate-airplane">
        <svg
          width="80"
          height="80"
          viewBox="0 0 120 120"
          fill="none"
          className="drop-shadow-2xl"
        >
          <path
            d="M100 30L60 60L20 40L15 50L55 70L50 90L60 95L75 75L95 85L105 80L90 60L100 30Z"
            fill="url(#airplaneGradient)"
            stroke="#0284C7"
            strokeWidth="2"
          />
          <defs>
            <linearGradient id="airplaneGradient" x1="15" y1="30" x2="105" y2="95" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0EA5E9" />
              <stop offset="1" stopColor="#0284C7" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 container-premium mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 dark:bg-sky-900/50 border border-sky-200 dark:border-sky-700 px-3 py-1.5 text-xs text-sky-600 dark:text-sky-400 mb-4">
                <Plane className="h-3.5 w-3.5" />
                Premium Travel Experiences
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 dark:text-white leading-[1.1] mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Explore the World
              <br />
              <span className="text-sky-500">with Confidence</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base text-slate-600 dark:text-slate-300 max-w-lg mb-6 leading-relaxed"
            >
              Discover amazing destinations, book flights, hotels, and complete
              travel packages. Your dream vacation is just a click away.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3"
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
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white dark:bg-slate-800 px-6 py-3 text-sm font-semibold text-slate-700 dark:text-white border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:bg-slate-50 dark:hover:bg-slate-700"
              >
                Plan Your Trip
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-6 flex items-center gap-6 text-slate-500 dark:text-slate-400 text-xs"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-sky-100 dark:bg-sky-900/50 flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-sky-500" />
                </div>
                <div>
                  <div className="font-semibold text-slate-800 dark:text-white">50+</div>
                  <div className="text-xs">Destinations</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900/50 flex items-center justify-center">
                  <Calendar className="h-4 w-4 text-orange-500" />
                </div>
                <div>
                  <div className="font-semibold text-slate-800 dark:text-white">10K+</div>
                  <div className="text-xs">Happy Travelers</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center">
                  <Search className="h-4 w-4 text-emerald-500" />
                </div>
                <div>
                  <div className="font-semibold text-slate-800 dark:text-white">4.9/5</div>
                  <div className="text-xs">Rating</div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-r from-sky-400 to-orange-400 rounded-3xl opacity-20 blur-2xl" />
              <img
                src="https://images.unsplash.com/photo-1436491865332-7a61a109db05?w=800&q=80"
                alt="Travel Adventure"
                className="relative rounded-2xl shadow-xl w-full h-[380px] object-cover"
              />
              <div className="absolute -bottom-4 -left-4 bg-white dark:bg-slate-800 rounded-xl p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-sky-100 dark:bg-sky-900/50 flex items-center justify-center">
                    <Plane className="h-5 w-5 text-sky-500" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800 dark:text-white text-sm">Next Adventure</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">Dubai, UAE</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-3 -right-3 bg-white dark:bg-slate-800 rounded-xl p-2 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <img
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80"
                      alt="User"
                      className="w-7 h-7 rounded-full border-2 border-white dark:border-slate-800"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80"
                      alt="User"
                      className="w-7 h-7 rounded-full border-2 border-white dark:border-slate-800"
                    />
                  </div>
                  <div className="text-xs">
                    <div className="font-semibold text-slate-800 dark:text-white">2.5K+</div>
                    <div className="text-slate-500 dark:text-slate-400">Travelers</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white dark:from-slate-900 to-transparent" />
    </section>
  );
}
