"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Star, MapPin, Clock } from "lucide-react";
import { tourPackages } from "@/data";
import { formatPrice } from "@/lib/utils";

const umrahPackages = tourPackages.filter((pkg) => pkg.category === "umrah");

export function UmrahPackages() {
  return (
    <section className="section-padding">
      <div className="container-premium mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="text-sm font-semibold text-secondary uppercase tracking-wider">
            Sacred Journeys
          </span>
          <h2
            className="mt-2 text-3xl sm:text-4xl font-bold text-primary dark:text-white"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Umrah Packages
          </h2>
          <p className="mt-3 max-w-2xl text-text-light dark:text-white/60">
            Premium spiritually enriching journeys to Makkah and Madinah with
            world-class accommodations and guided rituals.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {umrahPackages.slice(0, 3).map((pkg, i) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group overflow-hidden rounded-2xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 shadow-sm"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="rounded-full bg-white/90 dark:bg-white/20 backdrop-blur-sm px-2.5 py-1 text-xs font-medium text-primary dark:text-white">
                    {pkg.duration}
                  </span>
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="rounded-full bg-gold-50 dark:bg-gold-900/30 px-2 py-0.5 text-xs font-medium text-secondary">
                    Umrah
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-secondary text-secondary" />
                    <span className="text-xs font-medium text-primary dark:text-white">
                      {pkg.rating}
                    </span>
                    <span className="text-xs text-text-light dark:text-white/40">
                      ({pkg.reviewCount})
                    </span>
                  </div>
                </div>

                <h3 className="text-base font-bold text-primary dark:text-white mb-1">
                  {pkg.title}
                </h3>
                <div className="flex items-center gap-1 text-xs text-text-light dark:text-white/60 mb-2">
                  <MapPin className="h-3 w-3" />
                  {pkg.destination}
                </div>

                <p className="text-xs text-text-light dark:text-white/50 line-clamp-2 mb-3">
                  {pkg.description}
                </p>

                <div className="flex items-center justify-between pt-3 border-t border-border dark:border-white/10">
                  <div>
                    <span className="text-[10px] text-text-light dark:text-white/40">From</span>
                    <div className="flex items-center gap-2">
                      <span
                        className="text-lg font-bold text-secondary"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        {formatPrice(pkg.price)}
                      </span>
                      {pkg.originalPrice && (
                        <span className="text-xs text-text-light line-through dark:text-white/30">
                          {formatPrice(pkg.originalPrice)}
                        </span>
                      )}
                    </div>
                  </div>
                  <Link
                    href={`/tour-packages/${pkg.id}`}
                    className="flex items-center gap-1 text-sm font-medium text-secondary hover:gap-2 transition-all"
                  >
                    Details
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <Link
            href="/umrah-packages"
            className="inline-flex items-center gap-2 btn-primary"
          >
            View All Umrah Packages
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
