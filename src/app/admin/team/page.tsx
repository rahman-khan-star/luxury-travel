"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Plus,
  Edit2,
  Trash2,
  X,
  Save,
  GripVertical,
  ToggleLeft,
  ToggleRight,
} from "lucide-react";
import { teamMembers as initialTeamMembers } from "@/data";
import type { TeamMember } from "@/types";

export default function AdminTeamPage() {
  const [members, setMembers] = useState<TeamMember[]>(initialTeamMembers);
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState<TeamMember | null>(null);
  const [form, setForm] = useState({
    name: "",
    designation: "",
    photo: "",
    phone: "",
    whatsapp: "",
    description: "",
    isActive: true,
    displayOrder: 1,
  });

  const openAdd = () => {
    setEditing(null);
    setForm({
      name: "",
      designation: "",
      photo: "",
      phone: "",
      whatsapp: "",
      description: "",
      isActive: true,
      displayOrder: members.length + 1,
    });
    setShowModal(true);
  };

  const openEdit = (m: TeamMember) => {
    setEditing(m);
    setForm({
      name: m.name,
      designation: m.designation,
      photo: m.photo,
      phone: m.phone,
      whatsapp: m.whatsapp,
      description: m.description || "",
      isActive: m.isActive,
      displayOrder: m.displayOrder,
    });
    setShowModal(true);
  };

  const handleSave = () => {
    const newMember: TeamMember = {
      id: editing?.id || String(Date.now()),
      name: form.name,
      designation: form.designation,
      photo: form.photo || "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
      phone: form.phone,
      whatsapp: form.whatsapp,
      description: form.description,
      isActive: form.isActive,
      displayOrder: form.displayOrder,
    };

    if (editing) {
      setMembers(members.map((m) => (m.id === editing.id ? newMember : m)));
    } else {
      setMembers([...members, newMember]);
    }
    setShowModal(false);
  };

  const handleDelete = (id: string) => {
    if (confirm("Delete this team member?")) {
      setMembers(members.filter((m) => m.id !== id));
    }
  };

  const toggleActive = (id: string) => {
    setMembers(
      members.map((m) => (m.id === id ? { ...m, isActive: !m.isActive } : m))
    );
  };

  const moveUp = (index: number) => {
    if (index === 0) return;
    const sorted = [...members].sort((a, b) => a.displayOrder - b.displayOrder);
    const temp = sorted[index].displayOrder;
    sorted[index].displayOrder = sorted[index - 1].displayOrder;
    sorted[index - 1].displayOrder = temp;
    setMembers(sorted);
  };

  const moveDown = (index: number) => {
    const sorted = [...members].sort((a, b) => a.displayOrder - b.displayOrder);
    if (index >= sorted.length - 1) return;
    const temp = sorted[index].displayOrder;
    sorted[index].displayOrder = sorted[index + 1].displayOrder;
    sorted[index + 1].displayOrder = temp;
    setMembers(sorted);
  };

  const sorted = [...members].sort((a, b) => a.displayOrder - b.displayOrder);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-text dark:text-white">
            Team Members
          </h2>
          <p className="text-sm text-text-light dark:text-white/60">
            Manage your agency team members and their profiles
          </p>
        </div>
        <button onClick={openAdd} className="inline-flex items-center gap-2 rounded-xl gradient-gold px-4 py-2.5 text-sm font-semibold text-white">
          <Plus className="h-4 w-4" />
          Add Member
        </button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {sorted.map((m, i) => (
          <motion.div
            key={m.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className={`rounded-2xl bg-white p-5 luxury-shadow dark:bg-navy-800 dark:border dark:border-white/10 ${
              !m.isActive ? "opacity-50" : ""
            }`}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <Image
                  src={m.photo}
                  alt={m.name}
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-sm font-bold text-text dark:text-white">
                    {m.name}
                  </h3>
                  <p className="text-xs text-sky-500 font-medium">
                    {m.designation}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => moveUp(i)}
                  disabled={i === 0}
                  className="flex h-7 w-7 items-center justify-center rounded-lg hover:bg-sky-50 dark:hover:bg-white/10 disabled:opacity-30"
                >
                  <GripVertical className="h-3.5 w-3.5 rotate-180 text-text-light dark:text-white/60" />
                </button>
                <button
                  onClick={() => moveDown(i)}
                  disabled={i === sorted.length - 1}
                  className="flex h-7 w-7 items-center justify-center rounded-lg hover:bg-sky-50 dark:hover:bg-white/10 disabled:opacity-30"
                >
                  <GripVertical className="h-3.5 w-3.5 text-text-light dark:text-white/60" />
                </button>
              </div>
            </div>

            {m.description && (
              <p className="text-xs text-text-light dark:text-white/60 line-clamp-2 mb-3">
                {m.description}
              </p>
            )}

            <div className="flex items-center gap-2 text-xs text-text-light dark:text-white/40 mb-3">
              <span>{m.phone}</span>
              <span>|</span>
              <span>{m.whatsapp}</span>
            </div>

            <div className="flex items-center justify-between">
              <button
                onClick={() => toggleActive(m.id)}
                className="flex items-center gap-1.5 text-xs font-medium"
              >
                {m.isActive ? (
                  <>
                    <ToggleRight className="h-5 w-5 text-emerald-500" />
                    <span className="text-emerald-500">Active</span>
                  </>
                ) : (
                  <>
                    <ToggleLeft className="h-5 w-5 text-slate-400" />
                    <span className="text-slate-400">Inactive</span>
                  </>
                )}
              </button>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => openEdit(m)}
                  className="flex h-7 w-7 items-center justify-center rounded-lg hover:bg-sky-50 dark:hover:bg-white/10"
                >
                  <Edit2 className="h-3.5 w-3.5 text-text-light dark:text-white/60" />
                </button>
                <button
                  onClick={() => handleDelete(m.id)}
                  className="flex h-7 w-7 items-center justify-center rounded-lg hover:bg-red-50 dark:hover:bg-red-500/10"
                >
                  <Trash2 className="h-3.5 w-3.5 text-red-500" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
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
                {editing ? "Edit Team Member" : "Add Team Member"}
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="flex h-8 w-8 items-center justify-center rounded-lg hover:bg-sky-50 dark:hover:bg-white/10"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-text dark:text-white mb-1">
                    Full Name
                  </label>
                  <input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-text outline-none dark:bg-navy-900 dark:border-white/10 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text dark:text-white mb-1">
                    Designation
                  </label>
                  <input
                    value={form.designation}
                    onChange={(e) =>
                      setForm({ ...form, designation: e.target.value })
                    }
                    className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-text outline-none dark:bg-navy-900 dark:border-white/10 dark:text-white"
                    placeholder="e.g. CEO, Travel Consultant"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-text dark:text-white mb-1">
                  Profile Photo URL
                </label>
                <input
                  value={form.photo}
                  onChange={(e) =>
                    setForm({ ...form, photo: e.target.value })
                  }
                  className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-text outline-none dark:bg-navy-900 dark:border-white/10 dark:text-white"
                  placeholder="https://..."
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-text dark:text-white mb-1">
                    Phone Number
                  </label>
                  <input
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-text outline-none dark:bg-navy-900 dark:border-white/10 dark:text-white"
                    placeholder="+971..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text dark:text-white mb-1">
                    WhatsApp Number
                  </label>
                  <input
                    value={form.whatsapp}
                    onChange={(e) =>
                      setForm({ ...form, whatsapp: e.target.value })
                    }
                    className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-text outline-none dark:bg-navy-900 dark:border-white/10 dark:text-white"
                    placeholder="+971..."
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-text dark:text-white mb-1">
                  Short Description
                </label>
                <textarea
                  rows={3}
                  value={form.description}
                  onChange={(e) =>
                    setForm({ ...form, description: e.target.value })
                  }
                  className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-text outline-none resize-none dark:bg-navy-900 dark:border-white/10 dark:text-white"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-text dark:text-white mb-1">
                    Display Order
                  </label>
                  <input
                    type="number"
                    min={1}
                    value={form.displayOrder}
                    onChange={(e) =>
                      setForm({ ...form, displayOrder: parseInt(e.target.value) || 1 })
                    }
                    className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-text outline-none dark:bg-navy-900 dark:border-white/10 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text dark:text-white mb-1">
                    Status
                  </label>
                  <button
                    type="button"
                    onClick={() => setForm({ ...form, isActive: !form.isActive })}
                    className="flex items-center gap-2 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-text outline-none dark:bg-navy-900 dark:border-white/10 dark:text-white"
                  >
                    {form.isActive ? (
                      <>
                        <ToggleRight className="h-5 w-5 text-emerald-500" />
                        <span>Active</span>
                      </>
                    ) : (
                      <>
                        <ToggleLeft className="h-5 w-5 text-slate-400" />
                        <span>Inactive</span>
                      </>
                    )}
                  </button>
                </div>
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
                className="inline-flex items-center gap-2 rounded-xl gradient-gold px-4 py-2.5 text-sm font-semibold text-white"
              >
                <Save className="h-4 w-4" />
                {editing ? "Update" : "Save"}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
