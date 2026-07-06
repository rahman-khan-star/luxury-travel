"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Sun,
  Moon,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { navLinks } from "@/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setMounted(true), 0);
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="hidden lg:block bg-primary text-white/80 text-xs">
        <div className="container-premium mx-auto flex items-center justify-between px-4 py-2">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Phone className="h-3 w-3" />
              +92 342 900 5290
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="h-3 w-3" />
              info@luxurytravel.com
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3 w-3" />
              Dubai, UAE
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span>24/7 Support Available</span>
          </div>
        </div>
      </div>

      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-500",
          isScrolled
            ? "bg-white/20 dark:bg-navy-900/40 backdrop-blur-xl border-b border-white/10"
            : "bg-transparent"
        )}
      >
        <div className="container-premium mx-auto flex items-center justify-between px-4 py-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-gold">
              <span className="text-lg font-bold text-white">LT</span>
            </div>
            <div className="flex flex-col">
              <span
                className={cn(
                  "text-lg font-bold leading-tight tracking-tight",
                  isScrolled
                    ? "text-primary dark:text-white"
                    : "text-white"
                )}
              >
                WADI AL DHAID TOURS
              </span>
              <span
                className={cn(
                  "text-[10px] font-medium uppercase tracking-[0.2em]",
                  isScrolled
                    ? "text-secondary"
                    : "text-secondary"
                )}
              >
                Premium Experiences
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() =>
                  link.children && setOpenDropdown(link.label)
                }
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                    isScrolled
                      ? "text-text hover:text-secondary hover:bg-gold-50 dark:text-white dark:hover:bg-white/10"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  )}
                >
                  {link.label}
                  {link.children && (
                    <ChevronDown className="h-3 w-3 opacity-60" />
                  )}
                </Link>

                <AnimatePresence>
                  {link.children && openDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 top-full z-50 mt-1 w-56 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 p-2"
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-lg px-4 py-2.5 text-sm text-text transition-colors hover:bg-gold-50 hover:text-secondary dark:text-white dark:hover:bg-white/10"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className={cn(
                  "flex h-9 w-9 items-center justify-center rounded-lg transition-colors",
                  isScrolled
                    ? "text-text hover:bg-gold-50 dark:text-white dark:hover:bg-white/10"
                    : "text-white hover:bg-white/10"
                )}
              >
                {theme === "dark" ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </button>
            )}

            <Link
              href="/admin"
              className="hidden sm:inline-flex items-center rounded-lg px-3 py-2 text-xs font-medium text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            >
              Admin
            </Link>

            <Link href="/contact" className="hidden sm:inline-flex btn-primary">
              Book Now
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={cn(
                "lg:hidden flex h-9 w-9 items-center justify-center rounded-lg",
                isScrolled
                  ? "text-text dark:text-white"
                  : "text-white"
              )}
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white/10 backdrop-blur-xl border-t border-white/20 overflow-hidden"
            >
              <div className="container-premium mx-auto px-4 py-4">
                {navLinks.map((link) => (
                  <div key={link.label}>
                    <Link
                      href={link.href}
                      className="block py-3 text-sm font-medium text-text dark:text-white border-b border-border/50"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                    {link.children?.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block py-2 pl-4 text-sm text-text-light dark:text-white/70"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ))}
                <Link
                  href="/contact"
                  className="mt-4 block w-full btn-primary text-center"
                  onClick={() => setMobileOpen(false)}
                >
                  Book Now
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
