"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  const navItem = (
    <nav className="space-y-2">
      {[
        { href: "/news/sports", label: "Sports" },
        { href: "/news/tech", label: "Tech" },
        { href: "/news/local", label: "Local" },
      ].map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="
            block px-3 py-2 rounded-lg font-medium
            text-neutral-700 hover:text-blue-700
            hover:bg-blue-100 transition-all
            shadow-sm hover:shadow
          "
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );

  return (
    <div className="py-8">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Latest News</h1>

        {/* Drawer Toggle */}
        <button
          className="lg:hidden p-2 rounded-md bg-neutral-200"
          onClick={() => setOpen(true)}
        >
          <Menu size={22} />
        </button>
      </div>

      {/* Drawer Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-64 bg-white shadow-xl z-50 p-4 
          transform transition-transform duration-300 lg:hidden
          ${open ? "translate-x-0" : "-translate-x-full"}
          lg:static lg:translate-x-0 lg:block lg:w-1/5 lg:bg-neutral-100 lg:shadow-sm lg:rounded-lg
        `}
      >
        <div className="flex justify-between items-center mb-4 lg:hidden">
          <h2 className="text-xl font-semibold">Menu</h2>
          <button onClick={() => setOpen(false)}>
            <X size={22} />
          </button>
        </div>
        {navItem}
      </aside>

      {/* Content Area */}
      <main className="lg:ml-4 lg:flex gap-4">
        <div className="hidden lg:flex bg-neutral-100 min-h-[400px] rounded shadow-sm p-4 lg:w-1/5">
          {navItem}
        </div>

        <div className="bg-neutral-100 min-h-[400px] rounded shadow-sm p-4 lg:w-4/5">
          {children}
        </div>
      </main>
    </div>
  );
}
