"use client";

import { useEffect, useState } from "react";

type DashboardStats = {
  userCount: number;
  songCount: number;
};

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000";

const AdminDashboardPage = () => {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch users
        const userRes = await fetch(`${API_BASE}/api/user/getuser`, {
          credentials: "include",
        });
        const userJson = await userRes.json();

        // Fetch songs (admin endpoint so it can see all songs)
        const songRes = await fetch(`${API_BASE}/api/landing/songs/admin/all`, {
          credentials: "include",
        });
        const songJson = await songRes.json();

        const userCount = Array.isArray(userJson.data) ? userJson.data.length : 0;
        const songCount = Array.isArray(songJson.data) ? songJson.data.length : 0;

        setStats({ userCount, songCount });
      } catch (err) {
        console.error("Failed to load dashboard stats", err);
        setError("Failed to load dashboard data");
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return (
    <main className="w-full">
      <div className="max-w-5xl mx-auto">
        <header className="mb-6">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Admin Dashboard
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Overview of users and landing page songs.
          </p>
        </header>

        {loading && (
          <div className="text-sm text-gray-500">Loading dashboard...</div>
        )}

        {error && (
          <div className="mb-4 rounded-md bg-red-50 border border-red-200 px-4 py-2 text-sm text-red-700">
            {error}
          </div>
        )}

        {!loading && !error && stats && (
          <section className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-white shadow-sm border border-gray-100 p-4 flex flex-col justify-between">
              <div>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                  Total Users
                </p>
                <p className="mt-2 text-3xl font-semibold text-gray-900">
                  {stats.userCount}
                </p>
              </div>
              <p className="mt-3 text-xs text-gray-500">
                Number of registered users on the platform.
              </p>
            </div>

            <div className="rounded-xl bg-white shadow-sm border border-gray-100 p-4 flex flex-col justify-between">
              <div>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                  Total Songs
                </p>
                <p className="mt-2 text-3xl font-semibold text-gray-900">
                  {stats.songCount}
                </p>
              </div>
              <p className="mt-3 text-xs text-gray-500">
                Number of songs created for the landing page.
              </p>
            </div>
          </section>
        )}
      </div>
    </main>
  );
};

export default AdminDashboardPage;


