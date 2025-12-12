"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

// Icons
import {
  ChevronDown,
  ChevronRight,
  Home,
  Music,
  Mic,
  Users,
  Settings,
  ListChecks,
} from "lucide-react";

const menuItems = [
  {
    label: "Dashboard",
    icon: <Home size={18} />,
    href: "/admin",
    children: [
      { label: "Overview", href: "/admin" },
      { label: "Stats", href: "/admin/stats" },
      { label: "Reports", href: "/admin/reports" },
    ],
  },
  {
    label: "Songs",
    icon: <Music size={18} />,
    href: "/admin/songs",
    children: [
      { label: "All Songs", href: "/admin/songs" },
      { label: "Add Song", href: "/admin/songs/create" },
      { label: "Genres", href: "/admin/songs/genres" },
    ],
  },
  {
    label: "Artists",
    icon: <Mic size={18} />,
    href: "/admin/artists",
    children: [
      { label: "All Artists", href: "/admin/artists" },
      { label: "Add Artist", href: "/admin/artists/create" },
      { label: "Top Artists", href: "/admin/artists/top" },
    ],
  },
  {
    label: "Users",
    icon: <Users size={18} />,
    href: "/admin/users",
    children: [
      { label: "All Users", href: "/admin/users" },
      { label: "Active Users", href: "/admin/users/active" },
      { label: "Blocked Users", href: "/admin/users/blocked" },
    ],
  },
  {
    label: "Categories",
    icon: <ListChecks size={18} />,
    href: "/admin/categories",
    children: [
      { label: "All Categories", href: "/admin/categories" },
      { label: "Add Category", href: "/admin/categories/create" },
    ],
  },
  {
    label: "Settings",
    icon: <Settings size={18} />,
    href: "/admin/settings",
    children: [
      { label: "Profile Settings", href: "/admin/settings/profile" },
      { label: "Security", href: "/admin/settings/security" },
    ],
  },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white border-r border-gray-200 flex flex-col overflow-y-auto shadow-sm">
      {/* Header */}
      <div className="px-5 py-5 border-b border-gray-200">
        <h2 className="text-xl font-bold text-gray-900 tracking-wide">Admin Panel</h2>
        <p className="text-sm text-gray-500">Manage everything smoothly</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4">
        <ul className="space-y-1">
          {menuItems.map((item, index) => {
            const active =
              pathname === item.href || pathname.startsWith(item.href + "/");

            const isOpen = openIndex === index;

            return (
              <li key={item.href}>
                {/* Main Menu Button */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className={`w-full flex items-center justify-between px-5 py-3 text-base font-medium rounded-r-full transition-all duration-300
                    ${
                      active
                        ? "bg-red-500 text-white shadow-md"
                        : "text-gray-700 hover:bg-red-50 hover:text-red-600"
                    }
                  `}
                >
                  <span className="flex items-center gap-3">
                    {item.icon}
                    {item.label}
                  </span>

                  {isOpen ? (
                    <ChevronDown size={18} />
                  ) : (
                    <ChevronRight size={18} />
                  )}
                </button>

                {/* Sub Menu */}
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    isOpen ? "max-h-56 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <ul className="pl-10 py-1 space-y-1">
                    {item.children.map((sub) => {
                      const subActive = pathname === sub.href;

                      return (
                        <li key={sub.href}>
                          <Link
                            href={sub.href}
                            className={`block px-3 py-2 rounded-lg text-sm transition-all duration-300 
                              ${
                                subActive
                                  ? "text-red-600 font-semibold bg-red-100 shadow-sm"
                                  : "text-gray-600 hover:text-red-600 hover:bg-gray-100"
                              }
                            `}
                          >
                            {sub.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
