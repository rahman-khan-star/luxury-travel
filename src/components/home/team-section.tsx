"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { teamMembers } from "@/data";
import type { TeamMember } from "@/types";

function TeamCard({ member, index }: { member: TeamMember; index: number }) {
  const isLeader = member.designation.toLowerCase().includes("ceo") || member.designation.toLowerCase().includes("founder");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 overflow-hidden transition-all duration-300 hover:shadow-xl ${
        isLeader ? "ring-2 ring-sky-500/30" : ""
      }`}
    >
      {isLeader && (
        <div className="absolute top-3 right-3 z-10 rounded-full bg-sky-500 px-2.5 py-0.5 text-[10px] font-bold text-white uppercase tracking-wider">
          CEO
        </div>
      )}

      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={member.photo}
          alt={member.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      <div className="p-4">
        <h3 className="text-base font-bold text-slate-800 dark:text-white">
          {member.name}
        </h3>
        <p className="text-xs font-medium text-sky-500 uppercase tracking-wider mt-0.5">
          {member.designation}
        </p>
        {member.description && (
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 line-clamp-2 leading-relaxed">
            {member.description}
          </p>
        )}

        <div className="flex items-center gap-2 mt-3">
          <a
            href={`tel:${member.phone}`}
            className="flex items-center justify-center gap-1.5 flex-1 rounded-xl bg-sky-500 px-3 py-2 text-xs font-semibold text-white transition-all duration-300 hover:bg-sky-600 hover:shadow-lg hover:shadow-sky-500/25"
          >
            <Phone className="h-3.5 w-3.5" />
            Call
          </a>
          <a
            href={`https://wa.me/${member.whatsapp.replace(/[^0-9]/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 flex-1 rounded-xl bg-emerald-500 px-3 py-2 text-xs font-semibold text-white transition-all duration-300 hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-500/25"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            WhatsApp
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export function TeamSection() {
  const activeMembers = teamMembers
    .filter((m) => m.isActive)
    .sort((a, b) => a.displayOrder - b.displayOrder);

  if (activeMembers.length === 0) return null;

  return (
    <section className="section-padding bg-white dark:bg-slate-900">
      <div className="container-premium mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <span className="text-sm font-semibold text-sky-500 uppercase tracking-wider">
            Our Team
          </span>
          <h2
            className="mt-2 text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Meet the Experts Behind Your Journey
          </h2>
          <p className="mt-3 mx-auto max-w-2xl text-slate-600 dark:text-slate-300">
            Dedicated professionals committed to crafting extraordinary travel experiences tailored just for you.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {activeMembers.map((member, i) => (
            <TeamCard key={member.id} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
