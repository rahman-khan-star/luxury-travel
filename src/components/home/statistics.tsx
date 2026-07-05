"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { statistics } from "@/data";

function AnimatedNumber({ value, suffix }: { value: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const target = parseFloat(value);
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} style={{ fontFamily: "var(--font-mono)" }}>
      {Number.isInteger(parseFloat(value))
        ? Math.floor(count)
        : count.toFixed(1)}
      {suffix}
    </span>
  );
}

export function Statistics() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80)",
          }}
        />
      </div>
      <div className="relative z-10 container-premium mx-auto px-4">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
          {statistics.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <p className="text-3xl sm:text-4xl font-bold text-secondary mb-1">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-sm text-white/60">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
