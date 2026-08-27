"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, ArrowRight, Plane, MapPin, Calendar } from "lucide-react";

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="relative min-h-[85vh] flex items-end overflow-hidden pb-32">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1436491865332-7a61a109db05?w=1920&q=80)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-sky-100/80 via-sky-50/60 to-sky-200/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
      </div>

      <div className="absolute top-0 left-0 right-0 h-full flex items-center justify-center pointer-events-none">
        <svg
          viewBox="0 0 800 500"
          fill="none"
          className="w-full max-w-5xl h-auto opacity-90"
          style={{ filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.15))" }}
        >
          <defs>
            <linearGradient id="planeBody" x1="200" y1="150" x2="600" y2="250" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFFFFF" />
              <stop offset="1" stopColor="#E0F2FE" />
            </linearGradient>
            <linearGradient id="planeWing" x1="300" y1="200" x2="500" y2="280" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F0F9FF" />
              <stop offset="1" stopColor="#BAE6FD" />
            </linearGradient>
            <linearGradient id="engineGrad" x1="0" y1="0" x2="1" y2="1">
              <stop stopColor="#0EA5E9" />
              <stop offset="1" stopColor="#0284C7" />
            </linearGradient>
          </defs>

          {/* Fuselage */}
          <ellipse cx="400" cy="220" rx="180" ry="35" fill="url(#planeBody)" stroke="#BAE6FD" strokeWidth="1.5"/>
          
          {/* Cockpit */}
          <path d="M570 200 Q620 210 610 220 Q600 235 570 240 Z" fill="url(#planeBody)" stroke="#BAE6FD" strokeWidth="1"/>
          <ellipse cx="595" cy="220" rx="12" ry="15" fill="#0EA5E9" opacity="0.3"/>
          
          {/* Windows */}
          <g opacity="0.6">
            {[0,1,2,3,4,5,6,7,8,9,10,11].map((i) => (
              <ellipse key={i} cx={310 + i * 18} cy="215" rx="4" ry="3" fill="#0EA5E9" opacity="0.4"/>
            ))}
          </g>
          
          {/* Top Wing */}
          <path d="M320 200 L280 120 L520 120 L480 200 Z" fill="url(#planeWing)" stroke="#BAE6FD" strokeWidth="1"/>
          <line x1="320" y1="200" x2="480" y2="200" stroke="#7DD3FC" strokeWidth="0.5" opacity="0.5"/>
          
          {/* Bottom Wing */}
          <path d="M320 240 L290 310 L510 310 L480 240 Z" fill="url(#planeWing)" stroke="#BAE6FD" strokeWidth="1" opacity="0.8"/>
          
          {/* Tail */}
          <path d="M220 210 L190 150 L230 150 L250 210 Z" fill="url(#planeWing)" stroke="#BAE6FD" strokeWidth="1"/>
          <path d="M220 230 L200 280 L240 280 L250 230 Z" fill="url(#planeWing)" stroke="#BAE6FD" strokeWidth="1" opacity="0.7"/>
          
          {/* Engine Left */}
          <ellipse cx="350" cy="165" rx="18" ry="10" fill="url(#engineGrad)" opacity="0.9"/>
          <ellipse cx="335" cy="165" rx="6" ry="8" fill="#0284C7"/>
          
          {/* Engine Right */}
          <ellipse cx="350" cy="275" rx="18" ry="10" fill="url(#engineGrad)" opacity="0.9"/>
          <ellipse cx="335" cy="275" rx="6" ry="8" fill="#0284C7"/>
          
          {/* Red accent on tail */}
          <path d="M205 155 L195 175 L215 175 Z" fill="#EF4444" opacity="0.8"/>
          
          {/* Shadow */}
          <ellipse cx="400" cy="420" rx="120" ry="15" fill="#0EA5E9" opacity="0.08"/>
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 200" fill="none" className="w-full" preserveAspectRatio="none">
          {/* Palm trees */}
          <g opacity="0.4">
            {/* Palm 1 */}
            <rect x="120" y="60" width="8" height="140" rx="4" fill="#92400E"/>
            <path d="M80 70 Q124 30 160 70" stroke="#166534" strokeWidth="3" fill="none"/>
            <path d="M85 60 Q124 15 165 60" stroke="#15803D" strokeWidth="3" fill="none"/>
            <path d="M90 50 Q124 5 170 50" stroke="#16A34A" strokeWidth="3" fill="none"/>
            <ellipse cx="124" cy="75" rx="40" ry="20" fill="#22C55E" opacity="0.3"/>
            
            {/* Palm 2 */}
            <rect x="1300" y="50" width="8" height="150" rx="4" fill="#92400E"/>
            <path d="M1260 60 Q1304 20 1340 60" stroke="#166534" strokeWidth="3" fill="none"/>
            <path d="M1265 50 Q1304 5 1345 50" stroke="#15803D" strokeWidth="3" fill="none"/>
            <path d="M1270 40 Q1304 -5 1350 40" stroke="#16A34A" strokeWidth="3" fill="none"/>
            <ellipse cx="1304" cy="65" rx="40" ry="20" fill="#22C55E" opacity="0.3"/>
          </g>
          
          {/* Waves / Water */}
          <path d="M0 160 Q180 130 360 160 Q540 190 720 160 Q900 130 1080 160 Q1260 190 1440 160 L1440 200 L0 200 Z" fill="#BAE6FD" opacity="0.4"/>
          <path d="M0 170 Q180 145 360 170 Q540 195 720 170 Q900 145 1080 170 Q1260 195 1440 170 L1440 200 L0 200 Z" fill="#7DD3FC" opacity="0.3"/>
        </svg>
      </div>

      <div className="relative z-10 container-premium mx-auto px-4">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-sm border border-sky-200 px-4 py-2 text-sm text-sky-600 mb-6 shadow-sm">
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
              <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center">
                <MapPin className="h-5 w-5 text-sky-500" />
              </div>
              <div>
                <div className="font-bold text-slate-800">50+</div>
                <div className="text-xs text-slate-500">Destinations</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                <Calendar className="h-5 w-5 text-orange-500" />
              </div>
              <div>
                <div className="font-bold text-slate-800">10K+</div>
                <div className="text-xs text-slate-500">Happy Travelers</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
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
