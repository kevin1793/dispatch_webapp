import React from "react";

export default function AdminDemoDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-zinc-900 text-slate-100 p-6">
      {/* Header */}
      <div className="mb-10 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
          <p className="text-slate-400 text-sm">
            System overview & control
          </p>
        </div>

        <button className="rounded-lg bg-slate-700/40 px-4 py-2 text-sm hover:bg-slate-700/60 transition">
          System Settings
        </button>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {[
          { label: "Total Jobs Today", value: "42" },
          { label: "On-Time Rate", value: "96%" },
          { label: "Active Drivers", value: "9" },
          { label: "Exceptions", value: "2", danger: true },
        ].map((item, idx) => (
          <div
            key={idx}
            className="rounded-xl border border-white/10 bg-white/5 p-6"
          >
            <p className="text-sm text-slate-400">{item.label}</p>
            <p
              className={`mt-2 text-3xl font-semibold ${
                item.danger ? "text-red-400" : "text-white"
              }`}
            >
              {item.value}
            </p>
          </div>
        ))}
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Performance & Trends */}
        <div className="lg:col-span-2 rounded-xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-lg font-semibold mb-4">
            Performance Snapshot
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            {[
              { label: "Avg Pickup Time", value: "18 min" },
              { label: "Avg Delivery Time", value: "52 min" },
              { label: "Jobs / Driver", value: "4.6" },
              { label: "Peak Hour", value: "1–3 PM" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="rounded-lg border border-white/5 bg-black/20 p-4"
              >
                <p className="text-slate-400 text-xs">
                  {stat.label}
                </p>
                <p className="mt-1 font-medium">{stat.value}</p>
              </div>
            ))}
          </div>

          {/* Placeholder chart */}
          <div className="mt-6 h-40 rounded-lg border border-white/5 bg-black/30 flex items-center justify-center text-slate-500 text-sm">
            Delivery Performance Chart
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* System Alerts */}
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-lg font-semibold mb-4">
              System Alerts
            </h2>
            <ul className="space-y-3 text-sm">
              <li className="text-yellow-400">
                ⚠ SLA breach risk detected
              </li>
              <li className="text-slate-400">
                Driver capacity nearing limit
              </li>
            </ul>
          </div>

          {/* Management */}
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-lg font-semibold mb-4">
              Management
            </h2>

            <div className="space-y-3 text-sm">
              <button className="w-full rounded-lg border border-white/10 px-4 py-2 text-left hover:bg-white/10 transition">
                Manage Drivers
              </button>
              <button className="w-full rounded-lg border border-white/10 px-4 py-2 text-left hover:bg-white/10 transition">
                Manage Dispatchers
              </button>
              <button className="w-full rounded-lg border border-white/10 px-4 py-2 text-left hover:bg-white/10 transition">
                Job Status Rules
              </button>
              <button className="w-full rounded-lg border border-white/10 px-4 py-2 text-left hover:bg-white/10 transition">
                Audit Logs
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
