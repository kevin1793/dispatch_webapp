import React from "react";

export default function DispatcherDemoDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-zinc-900 text-slate-100 p-6">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Dispatcher Console</h1>
          <p className="text-slate-400 text-sm">
            Live operations — today
          </p>
        </div>

        <button className="rounded-lg bg-indigo-500/20 text-indigo-300 px-4 py-2 text-sm hover:bg-indigo-500/30 transition">
          + Create Job
        </button>
      </div>

      {/* KPI Strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: "New", value: "6" },
          { label: "Assigned", value: "4" },
          { label: "Scheduled", value: "5" },
          { label: "In Progress", value: "3" },
        ].map((item, idx) => (
          <div
            key={idx}
            className="rounded-xl border border-white/10 bg-white/5 p-4"
          >
            <p className="text-xs text-slate-400">{item.label}</p>
            <p className="mt-1 text-2xl font-semibold">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Jobs Queue */}
        <div className="lg:col-span-2 rounded-xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-lg font-semibold mb-4">
            Jobs Queue
          </h2>

          <div className="space-y-3">
            {[
              {
                id: "#1051",
                location: "Warehouse A",
                status: "New",
              },
              {
                id: "#1052",
                location: "Retail Store",
                status: "Assigned",
              },
              {
                id: "#1053",
                location: "Office Park",
                status: "Scheduled",
              },
              {
                id: "#1054",
                location: "Industrial Zone",
                status: "In Progress",
              },
            ].map((job, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between rounded-lg border border-white/5 bg-black/20 p-4 hover:bg-black/30 transition"
              >
                <div>
                  <p className="font-medium">{job.id}</p>
                  <p className="text-xs text-slate-400">
                    {job.location}
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <span
                    className={`rounded-full px-3 py-1 text-xs ${
                      job.status === "New"
                        ? "bg-slate-500/20 text-slate-300"
                        : job.status === "Assigned"
                        ? "bg-indigo-500/20 text-indigo-300"
                        : job.status === "Scheduled"
                        ? "bg-cyan-500/20 text-cyan-300"
                        : "bg-green-500/20 text-green-300"
                    }`}
                  >
                    {job.status}
                  </span>

                  <button className="text-xs text-slate-400 hover:text-white transition">
                    Open →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Alerts */}
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-lg font-semibold mb-4">
              Alerts
            </h2>
            <ul className="space-y-3 text-sm">
              <li className="text-yellow-400">
                ⚠ Job #1053 pickup in 10 min
              </li>
              <li className="text-red-400">
                ❗ Driver Alex K. idle too long
              </li>
            </ul>
          </div>

          {/* Drivers */}
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-lg font-semibold mb-4">
              Drivers
            </h2>
            <ul className="space-y-3 text-sm">
              {[
                { name: "John D.", jobs: 1 },
                { name: "Maria S.", jobs: 2 },
                { name: "Alex K.", jobs: 0 },
              ].map((driver, idx) => (
                <li
                  key={idx}
                  className="flex items-center justify-between"
                >
                  <div>
                    <p>{driver.name}</p>
                    <p className="text-xs text-slate-400">
                      {driver.jobs} active jobs
                    </p>
                  </div>
                  <span className="text-green-400 text-xs">
                    ● Online
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
