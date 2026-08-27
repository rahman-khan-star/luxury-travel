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
    <section className="section-padding bg-slate-50">
      <div className="container-premium mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <span className="text-sm font-semibold text-sky-500 uppercase tracking-wider">
            Testimonials
          </span>
          <h2
            className="mt-2 text-3xl sm:text-4xl font-bold text-slate-800"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            What Our Travelers Say
          </h2>
        </motion.div>

        <div className="relative mx-auto max-w-4xl">
          <div className="overflow-hidden rounded-3xl bg-white border border-slate-100 shadow-lg">
            <div className="grid md:grid-cols-2">
              <div className="relative h-64 md:h-auto">
                <Image
                  src={testimonials[current].avatar}
                  alt={testimonials[current].name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-900/30 hidden md:block" />
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <Quote className="h-10 w-10 text-sky-200 mb-4" />
                <p className="text-slate-700 leading-relaxed mb-6 text-lg">
                  &ldquo;{testimonials[current].text}&rdquo;
                </p>
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-orange-400 text-orange-400"
                    />
                  ))}
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-base">
                    {testimonials[current].name}
                  </h4>
                  <p className="text-sm text-slate-500">
                    {testimonials[current].location}
                  </p>
                  <p className="text-sm text-sky-500 font-medium mt-1">
                    {testimonials[current].package}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 hover:bg-sky-50 hover:border-sky-200 transition-colors"
            >
              <ChevronLeft className="h-5 w-5 text-slate-600" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === current
                      ? "w-8 bg-sky-500"
                      : "w-2 bg-slate-200"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 hover:bg-sky-50 hover:border-sky-200 transition-colors"
            >
              <ChevronRight className="h-5 w-5 text-slate-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
