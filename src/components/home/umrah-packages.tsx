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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <span className="text-sm font-semibold text-emerald-500 uppercase tracking-wider">
            Sacred Journeys
          </span>
          <h2
            className="mt-2 text-3xl sm:text-4xl font-bold text-slate-800"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Umrah Packages
          </h2>
          <p className="mt-3 max-w-2xl text-slate-600">
            Premium spiritually enriching journeys to Makkah and Madinah with
            world-class accommodations and guided rituals.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {umrahPackages.slice(0, 3).map((pkg, i) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group overflow-hidden rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="rounded-full bg-white/90 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-slate-700 flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-sky-500" />
                    {pkg.duration}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-600">
                    Umrah
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="h-3.5 w-3.5 fill-orange-400 text-orange-400" />
                    <span className="text-xs font-semibold text-slate-800">
                      {pkg.rating}
                    </span>
                    <span className="text-xs text-slate-400">
                      ({pkg.reviewCount})
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-800 mb-2">
                  {pkg.title}
                </h3>
                <div className="flex items-center gap-1.5 text-sm text-slate-500 mb-3">
                  <MapPin className="h-4 w-4 text-sky-400" />
                  {pkg.destination}
                </div>

                <p className="text-sm text-slate-500 line-clamp-2 mb-4">
                  {pkg.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div>
                    <span className="text-xs text-slate-400">From</span>
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold text-sky-500">
                        {formatPrice(pkg.price)}
                      </span>
                      {pkg.originalPrice && (
                        <span className="text-sm text-slate-400 line-through">
                          {formatPrice(pkg.originalPrice)}
                        </span>
                      )}
                    </div>
                  </div>
                  <Link
                    href={`/tour-packages/${pkg.id}`}
                    className="flex items-center gap-1.5 text-sm font-semibold text-sky-500 hover:gap-2.5 transition-all"
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
          className="mt-10 text-center"
        >
          <Link
            href="/umrah-packages"
            className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-8 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-sky-600 hover:shadow-lg hover:shadow-sky-500/25"
          >
            View All Umrah Packages
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
