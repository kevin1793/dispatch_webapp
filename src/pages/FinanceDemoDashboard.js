import React from "react";

export default function FinanceDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-zinc-900 text-slate-100 p-6">
      {/* Header */}
      <div className="mb-10 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Finance & Revenue</h1>
          <p className="text-slate-400 text-sm">
            Financial overview — today
          </p>
        </div>

        <button className="rounded-lg border border-white/10 px-4 py-2 text-sm hover:bg-white/10 transition">
          Export Report
        </button>
      </div>

      {/* Revenue KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {[
          { label: "Total Revenue", value: "$12,450" },
          { label: "Driver Payouts", value: "$7,320" },
          { label: "Gross Margin", value: "$5,130" },
          { label: "Margin %", value: "41%" },
        ].map((item, idx) => (
          <div
            key={idx}
            className="rounded-xl border border-white/10 bg-white/5 p-6"
          >
            <p className="text-sm text-slate-400">{item.label}</p>
            <p className="mt-2 text-3xl font-semibold">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue Breakdown */}
        <div className="lg:col-span-2 rounded-xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-lg font-semibold mb-4">
            Revenue Breakdown
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-6">
            {[
              { label: "Avg / Job", value: "$296" },
              { label: "Avg Driver Pay", value: "$174" },
              { label: "Jobs Completed", value: "42" },
              { label: "Top Client", value: "Warehouse A" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="rounded-lg border border-white/5 bg-black/20 p-4"
              >
                <p className="text-xs text-slate-400">{stat.label}</p>
                <p className="mt-1 font-medium">{stat.value}</p>
              </div>
            ))}
          </div>

          {/* Chart Placeholder */}
          <div className="h-44 rounded-lg border border-white/5 bg-black/30 flex items-center justify-center text-slate-500 text-sm">
            Revenue vs Payout Chart
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Payout Status */}
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-lg font-semibold mb-4">
              Driver Payout Status
            </h2>

            <ul className="space-y-3 text-sm">
              <li className="flex justify-between">
                <span>Pending</span>
                <span className="text-yellow-400">$1,120</span>
              </li>
              <li className="flex justify-between">
                <span>Processed</span>
                <span className="text-green-400">$6,200</span>
              </li>
              <li className="flex justify-between">
                <span>Disputed</span>
                <span className="text-red-400">$180</span>
              </li>
            </ul>
          </div>

          {/* Risk & Flags */}
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-lg font-semibold mb-4">
              Financial Flags
            </h2>

            <ul className="space-y-3 text-sm">
              <li className="text-yellow-400">
                ⚠ Low margin on Client: Retail Store
              </li>
              <li className="text-slate-400">
                Driver payout pending &gt; 48h
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
