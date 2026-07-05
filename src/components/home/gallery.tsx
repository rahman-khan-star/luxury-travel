"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { galleryItems } from "@/data";

export function Gallery() {
  return (
    <section className="section-padding bg-navy-50 dark:bg-navy-950">
      <div className="container-premium mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="text-sm font-semibold text-secondary uppercase tracking-wider">
            Gallery
          </span>
          <h2
            className="mt-2 text-3xl sm:text-4xl font-bold text-text dark:text-white"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Travel Moments
          </h2>
          <p className="mt-3 mx-auto max-w-2xl text-text-light dark:text-white/60">
            Captured memories from our travelers around the world.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative group overflow-hidden rounded-2xl ${
                i === 0 || i === 3 ? "md:row-span-2 h-64 md:h-full" : "h-64"
              }`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white font-bold">{item.title}</h3>
                <p className="text-white/80 text-sm">{item.destination}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
