"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, Search } from "lucide-react";
import { blogPosts } from "@/data";

const categories = ["All", "Dubai", "Pakistan", "Umrah"];

export default function BlogPage() {
  const [active, setActive] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = blogPosts.filter((post) => {
    const matchesCategory = active === "All" || post.category === active;
    const matchesSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="relative z-10 container-premium mx-auto px-4 text-center">
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Travel <span className="text-gradient-gold">Blog</span>
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
            Tips, guides, and inspiration for your next luxury adventure.
          </p>
          <div className="mx-auto max-w-md">
            <div className="flex items-center gap-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 px-4 py-3">
              <Search className="h-4 w-4 text-white/60" />
              <input
                type="text"
                placeholder="Search articles..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-1 bg-transparent text-sm text-white placeholder:text-white/40 outline-none"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-premium mx-auto">
          <div className="flex flex-wrap items-center gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`rounded-xl px-5 py-2.5 text-sm font-medium transition-all ${
                  active === cat
                    ? "bg-secondary text-white"
                    : "bg-white text-text hover:bg-gold-50 dark:bg-navy-800 dark:text-white dark:hover:bg-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block overflow-hidden rounded-2xl bg-white luxury-shadow dark:bg-navy-800 dark:border dark:border-white/10"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-secondary">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-xs text-text-light dark:text-white/40 mb-2">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                      <span>•</span>
                      <span>{post.author}</span>
                    </div>
                    <h3 className="text-base font-bold text-text dark:text-white line-clamp-2 mb-2 group-hover:text-secondary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-text-light dark:text-white/60 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-secondary">
                      Read More
                      <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="py-20 text-center text-text-light dark:text-white/60">
              <p className="text-lg">No articles found.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
