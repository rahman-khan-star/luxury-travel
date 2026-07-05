"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/data";

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () =>
    setCurrent(
      (c) => (c - 1 + testimonials.length) % testimonials.length
    );

  return (
    <section className="section-padding">
      <div className="container-premium mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="text-sm font-semibold text-secondary uppercase tracking-wider">
            Testimonials
          </span>
          <h2
            className="mt-2 text-3xl sm:text-4xl font-bold text-text dark:text-white"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            What Our Travelers Say
          </h2>
        </motion.div>

        <div className="relative mx-auto max-w-4xl">
          <div className="overflow-hidden rounded-2xl bg-white luxury-shadow dark:bg-navy-800 dark:border dark:border-white/10">
            <div className="grid md:grid-cols-2">
              <div className="relative h-64 md:h-auto">
                <Image
                  src={testimonials[current].avatar}
                  alt={testimonials[current].name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-navy-800/50 hidden md:block" />
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <Quote className="h-10 w-10 text-secondary/30 mb-4" />
                <p className="text-text dark:text-white leading-relaxed mb-6 text-lg">
                  &ldquo;{testimonials[current].text}&rdquo;
                </p>
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-secondary text-secondary"
                    />
                  ))}
                </div>
                <div>
                  <h4 className="font-bold text-text dark:text-white">
                    {testimonials[current].name}
                  </h4>
                  <p className="text-sm text-text-light dark:text-white/60">
                    {testimonials[current].location}
                  </p>
                  <p className="text-xs text-secondary mt-1">
                    {testimonials[current].package}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border hover:bg-gold-50 transition-colors dark:border-white/20 dark:hover:bg-white/10"
            >
              <ChevronLeft className="h-5 w-5 text-text dark:text-white" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === current
                      ? "w-8 bg-secondary"
                      : "w-2 bg-border dark:bg-white/20"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border hover:bg-gold-50 transition-colors dark:border-white/20 dark:hover:bg-white/10"
            >
              <ChevronRight className="h-5 w-5 text-text dark:text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
