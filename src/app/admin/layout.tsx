"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  MapPin,
  Package,
  MessageSquare,
  FileText,
  Star,
  Settings,
  LogOut,
  Menu,
  X,
  ChevronLeft,
  Bell,
  User,
  Home,
} from "lucide-react";

const sidebarLinks = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Destinations", href: "/admin/destinations", icon: MapPin },
  { label: "Tour Packages", href: "/admin/packages", icon: Package },
  { label: "Testimonials", href: "/admin/testimonials", icon: Star },
  { label: "Blog Posts", href: "/admin/blog", icon: FileText },
  { label: "Messages", href: "/admin/messages", icon: MessageSquare },
  { label: "Settings", href: "/admin/settings", icon: Settings },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("admin_auth");
    if (auth === "true") {
      setIsLoggedIn(true);
    } else if (pathname !== "/admin/login") {
      router.push("/admin/login");
    }
  }, [pathname, router]);

  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  if (!isLoggedIn) {
    return null;
  }

  const handleLogout = () => {
    localStorage.removeItem("admin_auth");
    router.push("/admin/login");
  };

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      {/* Desktop Sidebar */}
      <aside
        className={`hidden lg:flex flex-col border-r border-border bg-white dark:bg-navy-900 dark:border-white/10 transition-all duration-300 ${
          sidebarOpen ? "w-64" : "w-20"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-5 border-b border-border dark:border-white/10">
          {sidebarOpen && (
            <Link href="/admin" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl gradient-gold">
                <span className="text-sm font-bold text-white">WA</span>
              </div>
              <span className="text-sm font-bold text-text dark:text-white truncate">
                WADI AL DHAID
              </span>
            </Link>
          )}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="flex h-8 w-8 items-center justify-center rounded-lg hover:bg-gold-50 dark:hover:bg-white/10 transition-colors"
          >
            <ChevronLeft
              className={`h-4 w-4 text-text-light dark:text-white/60 transition-transform ${
                !sidebarOpen ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-1">
          {sidebarLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/admin" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all ${
                  isActive
                    ? "bg-secondary/10 text-secondary"
                    : "text-text-light hover:bg-gold-50 hover:text-text dark:text-white/60 dark:hover:bg-white/10 dark:hover:text-white"
                }`}
                title={!sidebarOpen ? link.label : undefined}
              >
                <link.icon className="h-5 w-5 shrink-0" />
                {sidebarOpen && <span>{link.label}</span>}
              </Link>
            );
          })}
        </nav>

        <div className="px-3 py-4 border-t border-border dark:border-white/10">
          <Link
            href="/"
            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-text-light hover:bg-gold-50 hover:text-text dark:text-white/60 dark:hover:bg-white/10 dark:hover:text-white transition-all"
          >
            <Home className="h-5 w-5" />
            {sidebarOpen && <span>View Website</span>}
          </Link>
          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition-all"
          >
            <LogOut className="h-5 w-5" />
            {sidebarOpen && <span>Logout</span>}
          </button>
        </div>
      </aside>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/50 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              className="fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-navy-900 border-r border-border dark:border-white/10 lg:hidden"
            >
              <div className="flex items-center justify-between px-4 py-5 border-b border-border dark:border-white/10">
                <Link href="/admin" className="flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl gradient-gold">
                    <span className="text-sm font-bold text-white">WA</span>
                  </div>
                  <span className="text-sm font-bold text-text dark:text-white">
                    WADI AL DHAID
                  </span>
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="flex h-8 w-8 items-center justify-center rounded-lg"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="px-3 py-4 space-y-1">
                {sidebarLinks.map((link) => {
                  const isActive =
                    pathname === link.href ||
                    (link.href !== "/admin" &&
                      pathname.startsWith(link.href));
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all ${
                        isActive
                          ? "bg-secondary/10 text-secondary"
                          : "text-text-light hover:bg-gold-50 hover:text-text dark:text-white/60 dark:hover:bg-white/10"
                      }`}
                    >
                      <link.icon className="h-5 w-5" />
                      <span>{link.label}</span>
                    </Link>
                  );
                })}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="flex items-center justify-between px-4 lg:px-6 py-3 border-b border-border bg-white dark:bg-navy-900 dark:border-white/10">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden flex h-9 w-9 items-center justify-center rounded-lg hover:bg-gold-50 dark:hover:bg-white/10"
            >
              <Menu className="h-5 w-5 text-text dark:text-white" />
            </button>
            <h1 className="text-lg font-bold text-text dark:text-white">
              {sidebarLinks.find(
                (l) =>
                  l.href === pathname ||
                  (l.href !== "/admin" && pathname.startsWith(l.href))
              )?.label || "Admin"}
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative flex h-9 w-9 items-center justify-center rounded-lg hover:bg-gold-50 dark:hover:bg-white/10">
              <Bell className="h-5 w-5 text-text-light dark:text-white/60" />
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-secondary" />
            </button>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-white text-xs font-bold">
                A
              </div>
              <span className="hidden sm:block text-sm font-medium text-text dark:text-white">
                Admin
              </span>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-6 bg-background dark:bg-navy-950">
          {children}
        </main>
      </div>
    </div>
  );
}
