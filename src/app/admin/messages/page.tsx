"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  User,
  Calendar,
  Trash2,
  Eye,
  Loader2,
  AlertTriangle,
} from "lucide-react";
import type { Message } from "@/types";

export default function AdminMessagesPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selected, setSelected] = useState<Message | null>(null);
  const [deleting, setDeleting] = useState<string | null>(null);

  async function fetchMessages() {
    try {
      const res = await fetch("/api/messages");
      if (!res.ok) throw new Error("Failed to fetch messages");
      const data = await res.json();
      setMessages(data.messages);
    } catch {
      setError("Could not load messages.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchMessages();
  }, []);

  const markRead = async (id: string) => {
    try {
      await fetch(`/api/messages/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ read: true }),
      });
      setMessages((prev) =>
        prev.map((m) => (m.id === id ? { ...m, read: true } : m))
      );
    } catch {
      // Silently fail for UX
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this message?")) return;
    setDeleting(id);
    try {
      await fetch(`/api/messages/${id}`, { method: "DELETE" });
      setMessages((prev) => prev.filter((m) => m.id !== id));
      if (selected?.id === id) setSelected(null);
    } catch {
      setError("Failed to delete message.");
      setTimeout(() => setError(null), 5000);
    } finally {
      setDeleting(null);
    }
  };

  const unreadCount = messages.filter((m) => !m.read).length;

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-secondary" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-text dark:text-white">
          Messages
        </h2>
        <p className="text-sm text-text-light dark:text-white/60">
          {unreadCount} unread message{unreadCount !== 1 ? "s" : ""}
        </p>
      </div>

      {error && (
        <div className="flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 dark:bg-red-900/20 dark:border-red-800/50">
          <AlertTriangle className="h-4 w-4 text-red-500" />
          <p className="text-sm text-red-700 dark:text-red-400">{error}</p>
        </div>
      )}

      <div className="grid gap-4 lg:grid-cols-5">
        {/* Message List */}
        <div className="lg:col-span-2 space-y-2">
          {messages.map((msg, i) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              onClick={() => {
                setSelected(msg);
                markRead(msg.id);
              }}
              className={`rounded-xl p-4 cursor-pointer transition-all ${
                selected?.id === msg.id
                  ? "bg-secondary/10 border border-secondary/20"
                  : "bg-white border border-border hover:border-secondary/30 dark:bg-navy-800 dark:border-white/10"
              }`}
            >
              <div className="flex items-start justify-between mb-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold text-text dark:text-white">
                    {msg.name}
                  </h3>
                  {!msg.read && (
                    <span className="h-2 w-2 rounded-full bg-secondary" />
                  )}
                </div>
                <span className="text-xs text-text-light dark:text-white/40">
                  {msg.date}
                </span>
              </div>
              <p className="text-xs font-medium text-secondary mb-1">
                {msg.subject}
              </p>
              <p className="text-xs text-text-light dark:text-white/60 line-clamp-2">
                {msg.message}
              </p>
            </motion.div>
          ))}
          {messages.length === 0 && (
            <div className="rounded-xl bg-white p-8 text-center dark:bg-navy-800">
              <Mail className="h-10 w-10 text-text-light dark:text-white/40 mx-auto mb-2" />
              <p className="text-sm text-text-light dark:text-white/60">
                No messages yet
              </p>
            </div>
          )}
        </div>

        {/* Message Detail */}
        <div className="lg:col-span-3">
          {selected ? (
            <div className="rounded-2xl bg-white p-6 luxury-shadow dark:bg-navy-800 dark:border dark:border-white/10">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-text dark:text-white">
                    {selected.subject}
                  </h3>
                  <p className="text-sm text-text-light dark:text-white/60">
                    From: {selected.name}
                  </p>
                </div>
                <button
                  onClick={() => handleDelete(selected.id)}
                  disabled={deleting === selected.id}
                  className="flex h-8 w-8 items-center justify-center rounded-lg hover:bg-red-50 dark:hover:bg-red-500/10 disabled:opacity-50"
                >
                  <Trash2 className="h-4 w-4 text-red-500" />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6 p-4 rounded-xl bg-background dark:bg-navy-900">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-secondary" />
                  <span className="text-sm text-text dark:text-white">
                    {selected.name}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-secondary" />
                  <a
                    href={`mailto:${selected.email}`}
                    className="text-sm text-secondary hover:underline"
                  >
                    {selected.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-secondary" />
                  <span className="text-sm text-text dark:text-white">
                    {selected.phone}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-secondary" />
                  <span className="text-sm text-text dark:text-white">
                    {selected.date}
                  </span>
                </div>
              </div>

              <div className="prose prose-sm dark:prose-invert max-w-none">
                <p className="text-text-light dark:text-white/70 leading-relaxed">
                  {selected.message}
                </p>
              </div>

              <div className="flex gap-3 mt-6">
                <a
                  href={`mailto:${selected.email}?subject=Re: ${selected.subject}`}
                  className="inline-flex items-center gap-2 rounded-xl gradient-gold px-4 py-2.5 text-sm font-semibold text-white"
                >
                  <Mail className="h-4 w-4" />
                  Reply via Email
                </a>
                <a
                  href={`tel:${selected.phone}`}
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-secondary px-4 py-2.5 text-sm font-semibold text-secondary hover:bg-secondary hover:text-white transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  Call
                </a>
              </div>
            </div>
          ) : (
            <div className="rounded-2xl bg-white p-12 text-center luxury-shadow dark:bg-navy-800 dark:border dark:border-white/10">
              <Eye className="h-12 w-12 text-text-light dark:text-white/40 mx-auto mb-3" />
              <p className="text-text-light dark:text-white/60">
                Select a message to view details
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
