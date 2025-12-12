"use client";

import AdminSidebar from "@/components/admin/AdminSidebar";
import type { ReactNode } from "react";

const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar />
      <div className="flex-1 ml-64 p-6 md:p-10">{children}</div>
    </div>
  );
};

export default AdminLayout;