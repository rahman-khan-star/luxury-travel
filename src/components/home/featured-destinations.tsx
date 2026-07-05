"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { destinations } from "@/data";

export function FeaturedDestinations() {
  return (
    <section className="section-padding">
      <div className="container-premium mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-sm font-semibold text-secondary uppercase tracking-wider">
            Explore
          </span>
          <h2
            className="mt-2 text-3xl sm:text-4xl font-bold text-text dark:text-white"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Featured Destinations
          </h2>
          <p className="mt-3 max-w-2xl text-text-light dark:text-white/60">
            Handpicked destinations offering extraordinary experiences and
            unforgettable memories.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.slice(0, 6).map((dest, i) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href={`/destinations/${dest.id}`}
                className="group block overflow-hidden rounded-2xl bg-white luxury-shadow dark:bg-navy-800 dark:border dark:border-white/10"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-white">
                          {dest.name}
                        </h3>
                        <p className="text-sm text-white/80">{dest.country}</p>
                      </div>
                      <div className="flex items-center gap-1 rounded-full bg-white/20 backdrop-blur-sm px-2.5 py-1">
                        <Star className="h-3 w-3 fill-secondary text-secondary" />
                        <span className="text-xs font-medium text-white">
                          {dest.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-sm text-text-light dark:text-white/60 line-clamp-2 mb-4">
                    {dest.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs text-text-light dark:text-white/40">
                        From
                      </span>
                      <p className="text-xl font-bold text-secondary" style={{ fontFamily: "var(--font-mono)" }}>
                        ${dest.priceFrom.toLocaleString()}
                      </p>
                    </div>
                    <span className="flex items-center gap-1 text-sm font-medium text-secondary group-hover:gap-2 transition-all">
                      Explore
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 btn-secondary"
          >
            View All Destinations
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
