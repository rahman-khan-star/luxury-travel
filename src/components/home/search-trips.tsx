"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Search,
  Calendar,
  Users,
  MapPin,
  ArrowRight,
} from "lucide-react";

export function SearchTrips() {
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");

  return (
    <section className="relative -mt-20 z-20 px-4">
      <div className="container-premium mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl bg-white/10 backdrop-blur-md p-6 border border-white/20 dark:bg-white/5"
        >
          <div className="grid gap-4 md:grid-cols-4">
            <div className="space-y-2">
              <label className="text-xs font-medium text-text-light dark:text-white/60 uppercase tracking-wider">
                Destination
              </label>
              <div className="flex items-center gap-2 rounded-xl border border-border bg-background px-4 py-3 dark:bg-navy-900 dark:border-white/10">
                <MapPin className="h-4 w-4 text-secondary" />
                <input
                  type="text"
                  placeholder="Where to?"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="flex-1 bg-transparent text-sm text-text placeholder:text-text-light outline-none dark:text-white dark:placeholder:text-white/40"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-medium text-text-light dark:text-white/60 uppercase tracking-wider">
                Travel Date
              </label>
              <div className="flex items-center gap-2 rounded-xl border border-border bg-background px-4 py-3 dark:bg-navy-900 dark:border-white/10">
                <Calendar className="h-4 w-4 text-secondary" />
                <input
                  type="text"
                  placeholder="Select date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="flex-1 bg-transparent text-sm text-text placeholder:text-text-light outline-none dark:text-white dark:placeholder:text-white/40"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-medium text-text-light dark:text-white/60 uppercase tracking-wider">
                Guests
              </label>
              <div className="flex items-center gap-2 rounded-xl border border-border bg-background px-4 py-3 dark:bg-navy-900 dark:border-white/10">
                <Users className="h-4 w-4 text-secondary" />
                <input
                  type="text"
                  placeholder="How many?"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="flex-1 bg-transparent text-sm text-text placeholder:text-text-light outline-none dark:text-white dark:placeholder:text-white/40"
                />
              </div>
            </div>

            <div className="flex items-end">
              <Link
                href="/tour-packages"
                className="flex w-full items-center justify-center gap-2 rounded-xl gradient-gold px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-secondary/25"
              >
                <Search className="h-4 w-4" />
                Search Trips
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
