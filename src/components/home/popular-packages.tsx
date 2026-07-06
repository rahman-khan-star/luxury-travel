"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Star, Clock, MapPin } from "lucide-react";
import { tourPackages } from "@/data";
import { formatPrice } from "@/lib/utils";

export function PopularPackages() {
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
            Packages
          </span>
          <h2
            className="mt-2 text-3xl sm:text-4xl font-bold text-white"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Popular Tour Packages
          </h2>
          <p className="mt-3 max-w-2xl text-text-light dark:text-white/60">
            Curated travel packages designed to deliver exceptional experiences
            at the best value.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tourPackages.slice(0, 6).map((pkg, i) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 dark:bg-white/5"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {pkg.originalPrice && (
                  <div className="absolute top-4 left-4 rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white">
                    Save ${pkg.originalPrice - pkg.price}
                  </div>
                )}
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <span className="rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-xs font-medium text-white">
                    {pkg.duration}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="rounded-full bg-gold-50 px-2.5 py-0.5 text-xs font-medium text-secondary dark:bg-gold-900/30">
                    {pkg.category.charAt(0).toUpperCase() +
                      pkg.category.slice(1)}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-secondary text-secondary" />
                    <span className="text-xs font-medium text-white">
                      {pkg.rating}
                    </span>
                    <span className="text-xs text-white/50">
                      ({pkg.reviewCount})
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-1">
                  {pkg.title}
                </h3>
                <div className="flex items-center gap-1 text-sm text-white/70 mb-3">
                  <MapPin className="h-3 w-3" />
                  {pkg.destination}
                </div>

                <p className="text-sm text-white/60 line-clamp-2 mb-4">
                  {pkg.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-border dark:border-white/10">
                  <div>
                    <span className="text-xs text-white/50">
                      From
                    </span>
                    <div className="flex items-center gap-2">
                      <span
                        className="text-xl font-bold text-secondary"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        {formatPrice(pkg.price)}
                      </span>
                      {pkg.originalPrice && (
                        <span className="text-sm text-text-light line-through dark:text-white/40">
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="/tour-packages"
            className="inline-flex items-center gap-2 btn-primary"
          >
            View All Packages
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
