"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Plus,
  Search,
  Edit2,
  Trash2,
  X,
  MapPin,
  Save,
  Loader2,
  AlertTriangle,
} from "lucide-react";
import type { Booking } from "@/types";

export default function AdminBookingsPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState<Booking | null>(null);
  const [form, setForm] = useState({
    name: "",
    packageName: "",
    date: "",
    amount: 0,
    status: "Pending" as "Confirmed" | "Pending",
  });

  useEffect(() => {
    fetchBookings();
  }, []);

  async function fetchBookings() {
    try {
      setLoading(true);
      const res = await fetch("/api/bookings");
      if (!res.ok) throw new Error("Failed to fetch bookings");
      const data = await res.json();
      setBookings(data.bookings);
    } catch {
      setError("Could not load bookings.");
    } finally {
      setLoading(false);
    }
  }

  const filtered = bookings.filter(
    (b) =>
      b.name.toLowerCase().includes(search.toLowerCase()) ||
      b.packageName.toLowerCase().includes(search.toLowerCase())
  );

  const openAdd = () => {
    setEditing(null);
    setForm({ name: "", packageName: "", date: "", amount: 0, status: "Pending" });
    setShowModal(true);
  };

  const openEdit = (b: Booking) => {
    setEditing(b);
    setForm({
      name: b.name,
      packageName: b.packageName,
      date: b.date,
      amount: b.amount,
      status: b.status,
    });
    setShowModal(true);
  };

  async function handleSave() {
    setSaving(true);
    try {
      const bookingData = {
        name: form.name,
        packageName: form.packageName,
        date: form.date,
        amount: form.amount,
        status: form.status,
      };

      const url = editing ? `/api/bookings/${editing.id}` : "/api/bookings";
      const method = editing ? "PUT" : "POST";
      const body = editing ? bookingData : { ...bookingData, id: undefined };
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Failed to save booking");
      }

      await fetchBookings();
      setShowModal(false);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Failed to save booking";
      setError(msg);
      setTimeout(() => setError(null), 5000);
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("Are you sure you want to delete this booking?")) return;
    setDeleting(id);
    try {
      const res = await fetch(`/api/bookings/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete booking");
      await fetchBookings();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Failed to delete booking";
      setError(msg);
      setTimeout(() => setError(null), 5000);
    } finally {
      setDeleting(null);
    }
  }

  async function handleStatusChange(id: string, newStatus: string) {
    try {
      await fetch(`/api/bookings/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      setBookings((prev) =>
        prev.map((b) => (b.id === id ? { ...b, status: newStatus as Booking["status"] } : b))
      );
    } catch {
      setError("Failed to update booking status.");
      setTimeout(() => setError(null), 5000);
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-secondary" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-text dark:text-white">
            Bookings
          </h2>
          <p className="text-sm text-text-light dark:text-white/60">
            Manage customer bookings and status
          </p>
        </div>
        <button onClick={openAdd} className="inline-flex items-center gap-2 rounded-xl gradient-gold px-4 py-2.5 text-sm font-semibold text-white">
          <Plus className="h-4 w-4" />
          Add Booking
        </button>
      </div>

      {error && (
        <div className="flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 dark:bg-red-900/20 dark:border-red-800/50">
          <AlertTriangle className="h-4 w-4 text-red-500" />
          <p className="text-sm text-red-700 dark:text-red-400">{error}</p>
        </div>
      )}

      <div className="flex items-center gap-2 rounded-xl border border-border bg-white px-4 py-3 dark:bg-navy-800 dark:border-white/10">
        <Search className="h-4 w-4 text-text-light dark:text-white/40" />
        <input
          type="text"
          placeholder="Search bookings..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 bg-transparent text-sm text-text outline-none dark:text-white"
        />
      </div>

      <div className="overflow-x-auto rounded-2xl bg-white luxury-shadow dark:bg-navy-800 dark:border dark:border-white/10">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border dark:border-white/10">
              <th className="px-5 py-4 text-left text-xs font-medium text-text-light dark:text-white/40 uppercase tracking-wider">
                Customer
              </th>
              <th className="px-5 py-4 text-left text-xs font-medium text-text-light dark:text-white/40 uppercase tracking-wider">
                Package
              </th>
              <th className="px-5 py-4 text-left text-xs font-medium text-text-light dark:text-white/40 uppercase tracking-wider">
                Date
              </th>
              <th className="px-5 py-4 text-left text-xs font-medium text-text-light dark:text-white/40 uppercase tracking-wider">
                Amount
              </th>
              <th className="px-5 py-4 text-left text-xs font-medium text-text-light dark:text-white/40 uppercase tracking-wider">
                Status
              </th>
              <th className="px-5 py-4 text-right text-xs font-medium text-text-light dark:text-white/40 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border dark:divide-white/10">
            {filtered.map((booking, i) => (
              <motion.tr
                key={booking.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <td className="px-5 py-4">
                  <p className="text-sm font-medium text-text dark:text-white">
                    {booking.name}
                  </p>
                </td>
                <td className="px-5 py-4">
                  <p className="text-sm text-text-light dark:text-white/60 flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {booking.packageName}
                  </p>
                </td>
                <td className="px-5 py-4">
                  <p className="text-sm text-text-light dark:text-white/60" style={{ fontFamily: "var(--font-mono)" }}>
                    {booking.date}
                  </p>
                </td>
                <td className="px-5 py-4">
                  <p className="text-sm font-semibold text-sky-500" style={{ fontFamily: "var(--font-mono)" }}>
                    ${booking.amount.toLocaleString()}
                  </p>
                </td>
                <td className="px-5 py-4">
                  <select
                    value={booking.status}
                    onChange={(e) => handleStatusChange(booking.id, e.target.value)}
                    className={`rounded-full px-2.5 py-0.5 text-xs font-medium border-none cursor-pointer ${
                      booking.status === "Confirmed"
                        ? "bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400"
                        : "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/10 dark:text-yellow-400"
                    }`}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Confirmed">Confirmed</option>
                  </select>
                </td>
                <td className="px-5 py-4 text-right">
                  <div className="flex items-center justify-end gap-1">
                    <button
                      onClick={() => openEdit(booking)}
                      className="flex h-8 w-8 items-center justify-center rounded-lg hover:bg-gold-50 dark:hover:bg-white/10"
                    >
                      <Edit2 className="h-4 w-4 text-text-light dark:text-white/60" />
                    </button>
                    <button
                      onClick={() => handleDelete(booking.id)}
                      disabled={deleting === booking.id}
                      className="flex h-8 w-8 items-center justify-center rounded-lg hover:bg-red-50 dark:hover:bg-red-500/10 disabled:opacity-50"
                    >
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </button>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl bg-white p-6 dark:bg-navy-800"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-text dark:text-white">
                {editing ? "Edit Booking" : "Add Booking"}
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="flex h-8 w-8 items-center justify-center rounded-lg hover:bg-gold-50 dark:hover:bg-white/10"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-text dark:text-white mb-1">
                  Name
                </label>
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-text outline-none dark:bg-navy-900 dark:border-white/10 dark:text-white"
                  placeholder="Customer name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text dark:text-white mb-1">
                  Package
                </label>
                <input
                  value={form.packageName}
                  onChange={(e) => setForm({ ...form, packageName: e.target.value })}
                  className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-text outline-none dark:bg-navy-900 dark:border-white/10 dark:text-white"
                  placeholder="Package name"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-text dark:text-white mb-1">
                    Date
                  </label>
                  <input
                    type="date"
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-text outline-none dark:bg-navy-900 dark:border-white/10 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text dark:text-white mb-1">
                    Amount ($)
                  </label>
                  <input
                    type="number"
                    value={form.amount}
                    onChange={(e) =>
                      setForm({ ...form, amount: parseInt(e.target.value) || 0 })
                    }
                    className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-text outline-none dark:bg-navy-900 dark:border-white/10 dark:text-white"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-text dark:text-white mb-1">
                  Status
                </label>
                <select
                  value={form.status}
                  onChange={(e) =>
                    setForm({ ...form, status: e.target.value as "Confirmed" | "Pending" })
                  }
                  className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-text outline-none dark:bg-navy-900 dark:border-white/10 dark:text-white"
                >
                  <option value="Pending">Pending</option>
                  <option value="Confirmed">Confirmed</option>
                </select>
              </div>
            </div>
            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setShowModal(false)}
                className="rounded-xl border border-border px-4 py-2.5 text-sm font-medium text-text dark:text-white dark:border-white/20"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                disabled={saving}
                className="inline-flex items-center gap-2 rounded-xl gradient-gold px-4 py-2.5 text-sm font-semibold text-white disabled:opacity-50"
              >
                {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
                {editing ? "Update" : "Save"}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
