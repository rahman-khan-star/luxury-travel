"use client";

import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Globe,
  MessageCircle,
  Hash,
  Play,
  ArrowRight,
} from "lucide-react";

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/about#team" },
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "/blog" },
  ],
  destinations: [
    { label: "Dubai", href: "/destinations/dubai" },
    { label: "Northern Pakistan", href: "/destinations/northern-pakistan" },
    { label: "Lahore", href: "/destinations/lahore" },
    { label: "Islamabad", href: "/destinations/islamabad" },
  ],
  services: [
    { label: "Tour Packages", href: "/tour-packages" },
    { label: "Visa Services", href: "/visa-services" },
    { label: "Umrah Packages", href: "/umrah-packages" },
    { label: "Hotels", href: "/hotels" },
  ],
  support: [
    { label: "Contact Us", href: "/contact" },
    { label: "FAQs", href: "/faqs" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container-premium mx-auto px-4 pt-16 pb-8">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-gold">
                <span className="text-lg font-bold text-white">LT</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white leading-tight">
                  WADI AL DHAID TOURS
                </span>
                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-secondary">
                  Premium Experiences
                </span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-sm">
              Creating extraordinary travel experiences since 2014. We
              specialize in luxury tours, visa services, and Umrah packages
              across Dubai, Pakistan, and worldwide destinations.
            </p>
            <div className="flex items-center gap-3 mb-6">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white/70 transition-all hover:bg-secondary hover:text-white"
                >
                  <Globe className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white/70 transition-all hover:bg-secondary hover:text-white"
                >
                  <MessageCircle className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white/70 transition-all hover:bg-secondary hover:text-white"
                >
                  <Hash className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  aria-label="YouTube"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white/70 transition-all hover:bg-secondary hover:text-white"
                >
                  <Play className="h-4 w-4" />
                </a>
            </div>
            <div className="space-y-2 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-secondary" />
                +92 342 900 5290
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-secondary" />
                info@luxurytravel.com
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-secondary" />
                Dubai, United Arab Emirates
              </div>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                {category}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-secondary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-white/40">
              &copy; {new Date().getFullYear()} Wadi Al Dhaid Tours LLC. All rights
              reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="/privacy"
                className="text-xs text-white/40 hover:text-white/60"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-xs text-white/40 hover:text-white/60"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
