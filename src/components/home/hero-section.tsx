"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, ArrowRight, Plane, MapPin, Calendar } from "lucide-react";

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 gradient-hero" />
      
      <div className="absolute top-20 right-10 w-96 h-96 bg-sky-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-orange-200/20 rounded-full blur-3xl" />

      <div className="absolute top-1/4 right-1/4 animate-airplane">
        <svg
          width="120"
          height="120"
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

      <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-orange-400 rounded-full animate-bounce-slow opacity-60" />
      <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-sky-400 rounded-full animate-bounce-slow opacity-40" style={{ animationDelay: "0.5s" }} />
      <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-emerald-400 rounded-full animate-bounce-slow opacity-50" style={{ animationDelay: "1s" }} />

      <div className="relative z-10 container-premium mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 border border-sky-200 px-4 py-2 text-sm text-sky-600 mb-6">
                <Plane className="h-4 w-4" />
                Premium Travel Experiences
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 leading-[1.1] mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Explore the World
              <br />
              <span className="text-gradient-primary">with Confidence</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-slate-600 max-w-xl mb-8 leading-relaxed"
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
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-500 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-sky-600 hover:shadow-lg hover:shadow-sky-500/30 hover:-translate-y-0.5"
              >
                Start Exploring
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-slate-700 border border-slate-200 transition-all duration-300 hover:bg-slate-50 hover:shadow-lg"
              >
                Plan Your Trip
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex items-center gap-8 text-slate-500 text-sm"
            >
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-sky-500" />
                </div>
                <div>
                  <div className="font-semibold text-slate-800">50+</div>
                  <div className="text-xs">Destinations</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-orange-500" />
                </div>
                <div>
                  <div className="font-semibold text-slate-800">10K+</div>
                  <div className="text-xs">Happy Travelers</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                  <Search className="h-5 w-5 text-emerald-500" />
                </div>
                <div>
                  <div className="font-semibold text-slate-800">4.9/5</div>
                  <div className="text-xs">Rating</div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-sky-400 to-orange-400 rounded-3xl opacity-20 blur-2xl" />
              <img
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80"
                alt="Travel Adventure"
                className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center">
                    <Plane className="h-6 w-6 text-sky-500" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800">Next Adventure</div>
                    <div className="text-sm text-slate-500">Dubai, UAE</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-3 shadow-xl">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <img
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80"
                      alt="User"
                      className="w-8 h-8 rounded-full border-2 border-white"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80"
                      alt="User"
                      className="w-8 h-8 rounded-full border-2 border-white"
                    />
                  </div>
                  <div className="text-xs">
                    <div className="font-semibold text-slate-800">2.5K+</div>
                    <div className="text-slate-500">Travelers</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
