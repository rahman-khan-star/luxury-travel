"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { blogPosts } from "@/data";

export function LatestBlog() {
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
            Blog
          </span>
          <h2
            className="mt-2 text-3xl sm:text-4xl font-bold text-text dark:text-white"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Latest Travel Stories
          </h2>
          <p className="mt-3 max-w-2xl text-text-light dark:text-white/60">
            Tips, guides, and inspiration for your next luxury adventure.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {blogPosts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group block overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 dark:bg-white/5"
              >
                <div className="relative h-48 overflow-hidden">
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
                  </div>
                  <h3 className="text-base font-bold text-text dark:text-white line-clamp-2 mb-2 group-hover:text-secondary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-text-light dark:text-white/60 line-clamp-2">
                    {post.excerpt}
                  </p>
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
            href="/blog"
            className="inline-flex items-center gap-2 btn-secondary"
          >
            Read More Articles
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
