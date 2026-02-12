import { useState } from 'react'
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
  Cell,
} from 'recharts'
import { Spotlight } from '@/components/ui/spotlight'
import { cn } from '@/lib/utils'

// Three colors: Green, Red, Green (dark)
const GREEN = '#22c55e'
const RED = '#ef4444'
const DARK_GREEN = '#15803d'

// Mining filler data – Development Charging Reconciliation
const powderFactorData = [
  { date: 'Jan-14', value: 1.09 },
  { date: 'Jan-15', value: 1.05 },
  { date: 'Jan-16', value: 1.03 },
  { date: 'Jan-17', value: 1.01 },
  { date: 'Jan-18', value: 0.94 },
]

const emulsionComparisonData = [
  { date: 'Jan-14', effective: 430, planned: 398 },
  { date: 'Jan-15', effective: 380, planned: 398 },
  { date: 'Jan-16', effective: 405, planned: 398 },
  { date: 'Jan-17', effective: 392, planned: 398 },
  { date: 'Jan-18', effective: 370, planned: 398 },
]

const densityTrendData = [
  { date: 'Jan-14', high: 0.94, low: 0.76 },
  { date: 'Jan-15', high: 0.90, low: 0.72 },
  { date: 'Jan-16', high: 0.93, low: 0.73 },
  { date: 'Jan-17', high: 0.91, low: 0.74 },
  { date: 'Jan-18', high: 0.93, low: 0.75 },
]

const emulsionWastageData = [
  { date: 'Jan-14', value: -25 },
  { date: 'Jan-15', value: -380 },
  { date: 'Jan-16', value: -8 },
  { date: 'Jan-17', value: -42 },
  { date: 'Jan-18', value: 15 },
]

// Mining-related filler for "others"
const topHeadingsData = [
  { heading: 'BXC_825_D2_SPL_02', blasts: 47 },
  { heading: 'NRC_712_A1_DEV_01', blasts: 34 },
  { heading: 'SHT_901_C3_SPL_05', blasts: 29 },
]

const recentBlastsData = [
  { heading: 'BXC_825_D2_SPL_02', zone: 'North', date: 'Jan-18', status: 'Reconciled' },
  { heading: 'NRC_712_A1_DEV_01', zone: 'South', date: 'Jan-17', status: 'Pending' },
  { heading: 'SHT_901_C3_SPL_05', zone: 'East', date: 'Jan-16', status: 'Reconciled' },
]

const timeRanges = ['12 months', '30 days', '7 days', '24 hours']

export default function AnalyticsDashboard() {
  const [range, setRange] = useState('30 days')

  return (
    <div className="relative w-full overflow-hidden rounded-xl border border-slate-600/50 shadow-sm">
      <div className="relative overflow-hidden rounded-[11px] bg-navy-1000">
      {/* Navy spotlight background for graph area */}
      <div
        className={cn(
          'pointer-events-none absolute inset-0 select-none [background-size:40px_40px]',
          '[background-image:linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)]'
        )}
        aria-hidden
      />
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="#3b82f6"
      />
      <div className="relative z-10 space-y-3 p-3 md:p-4">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-slate-600/50 bg-slate-800/80 px-3 py-2 md:px-4 backdrop-blur-sm">
          <h3 className="text-base font-semibold text-white">Development Charging Reconciliation</h3>
          <div className="flex flex-wrap items-center gap-1.5">
            {timeRanges.map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => setRange(r)}
                className={`rounded px-2 py-1 text-xs font-medium transition-colors ${
                  range === r ? 'bg-sky-500 text-white' : 'bg-slate-700/80 text-slate-200 hover:bg-slate-600'
                }`}
              >
                {r}
              </button>
            ))}
            <select className="rounded border border-slate-500 bg-slate-700/80 px-1.5 py-1 text-xs text-slate-200">
              <option>2026</option>
            </select>
          </div>
        </div>

        {/* Charts: 2 per row – dark theme to match dashboard */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {/* 1. Powder factor (kg/t) */}
          <div className="rounded-lg border border-slate-600/50 bg-slate-800/80 p-3 backdrop-blur-sm">
            <h4 className="mb-1.5 text-xs font-semibold text-slate-100">Powder factor (kg/t)</h4>
            <ResponsiveContainer width="100%" height={160}>
              <LineChart data={powderFactorData} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
                <XAxis dataKey="date" tick={{ fontSize: 11, fill: '#94a3b8' }} />
                <YAxis domain={[0.9, 1.15]} tick={{ fontSize: 11, fill: '#94a3b8' }} />
                <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569', borderRadius: '6px' }} labelStyle={{ color: '#e2e8f0' }} />
                <Line
                  type="monotone"
                  dataKey="value"
                  name="Powder factor (kg/t)"
                  stroke={GREEN}
                  strokeWidth={2}
                  dot={{ fill: GREEN, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* 2. Emulsion comparison – Effective vs Planned */}
          <div className="rounded-lg border border-slate-600/50 bg-slate-800/80 p-3 backdrop-blur-sm">
            <h4 className="mb-1.5 text-xs font-semibold text-slate-100">
              Emulsion comparison (Effective vs planned)
            </h4>
            <ResponsiveContainer width="100%" height={160}>
              <LineChart data={emulsionComparisonData} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
                <XAxis dataKey="date" tick={{ fontSize: 11, fill: '#94a3b8' }} />
                <YAxis domain={[360, 440]} tick={{ fontSize: 11, fill: '#94a3b8' }} />
                <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569', borderRadius: '6px' }} labelStyle={{ color: '#e2e8f0' }} />
                <Legend wrapperStyle={{ fontSize: 10, color: '#e2e8f0' }} />
                <Line
                  type="monotone"
                  dataKey="effective"
                  name="Effective emulsion for blast"
                  stroke={GREEN}
                  strokeWidth={2}
                  dot={{ fill: GREEN, r: 4 }}
                />
                <Line
                  type="monotone"
                  dataKey="planned"
                  name="Planned emulsion"
                  stroke={RED}
                  strokeWidth={2}
                  strokeDasharray="4 4"
                  dot={{ fill: RED, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* 3. Low and high density trend */}
          <div className="rounded-lg border border-slate-600/50 bg-slate-800/80 p-3 backdrop-blur-sm">
            <h4 className="mb-1.5 text-xs font-semibold text-slate-100">Low and high density trend</h4>
            <ResponsiveContainer width="100%" height={160}>
              <LineChart data={densityTrendData} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
                <XAxis dataKey="date" tick={{ fontSize: 11, fill: '#94a3b8' }} />
                <YAxis domain={[0.7, 1.0]} tick={{ fontSize: 11, fill: '#94a3b8' }} />
                <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569', borderRadius: '6px' }} labelStyle={{ color: '#e2e8f0' }} />
                <Legend wrapperStyle={{ fontSize: 10, color: '#e2e8f0' }} />
                <Line
                  type="monotone"
                  dataKey="high"
                  name="High density trend"
                  stroke={DARK_GREEN}
                  strokeWidth={2}
                  dot={{ fill: DARK_GREEN, r: 4 }}
                />
                <Line
                  type="monotone"
                  dataKey="low"
                  name="Low density trend"
                  stroke={RED}
                  strokeWidth={2}
                  dot={{ fill: RED, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* 4. Emulsion wastage (kg) */}
          <div className="rounded-lg border border-slate-600/50 bg-slate-800/80 p-3 backdrop-blur-sm">
            <h4 className="mb-1.5 text-xs font-semibold text-slate-100">Emulsion wastage (kg)</h4>
            <ResponsiveContainer width="100%" height={160}>
              <BarChart data={emulsionWastageData} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
                <XAxis dataKey="date" tick={{ fontSize: 11, fill: '#94a3b8' }} />
                <YAxis domain={[-420, 80]} tick={{ fontSize: 11, fill: '#94a3b8' }} />
                <ReferenceLine y={0} stroke="#64748b" strokeDasharray="3 3" />
                <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569', borderRadius: '6px' }} labelStyle={{ color: '#e2e8f0' }} />
                <Bar dataKey="value" radius={[4, 4, 0, 0]} name="Wastage (kg)">
                  {emulsionWastageData.map((entry, index) => (
                    <Cell
                      key={index}
                      fill={entry.value <= 0 ? GREEN : RED}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <p className="mt-1 text-[10px] text-slate-400">
              Green = savings, Red = wastage
            </p>
          </div>
        </div>

        {/* Others – mining filler */}
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
          <div className="rounded-lg border border-slate-600/50 bg-slate-800/80 p-3 backdrop-blur-sm">
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-sm font-semibold text-slate-100">Top headings (blasts)</h3>
              <button type="button" className="text-xs text-slate-400 hover:text-slate-200 hover:underline">
                View more
              </button>
            </div>
            <div className="space-y-1.5">
            {topHeadingsData.map((row, i) => (
              <div key={row.heading} className="flex items-center justify-between text-xs">
                <span className="font-medium text-slate-200">{row.heading}</span>
                <span
                  className="rounded px-1.5 py-0.5 text-[10px] font-medium"
                  style={{
                    backgroundColor: i === 0 ? `${GREEN}30` : i === 1 ? `${RED}30` : `${DARK_GREEN}30`,
                    color: i === 0 ? '#86efac' : i === 1 ? '#fdba74' : '#86efac',
                  }}
                >
                  {row.blasts} blasts
                </span>
              </div>
            ))}
            </div>
          </div>

          <div className="rounded-lg border border-slate-600/50 bg-slate-800/80 backdrop-blur-sm">
            <div className="flex flex-wrap items-center justify-between gap-1 border-b border-slate-600/50 px-3 py-2">
              <h3 className="text-sm font-semibold text-slate-100">Recent blasts</h3>
              <button type="button" className="text-xs text-slate-400 hover:text-slate-200 hover:underline">
                See all
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-slate-600/50 bg-slate-700/50 text-left text-slate-300">
                    <th className="px-2 py-1.5 font-medium">Heading</th>
                    <th className="px-2 py-1.5 font-medium">Zone</th>
                    <th className="px-2 py-1.5 font-medium">Date</th>
                    <th className="px-2 py-1.5 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentBlastsData.map((row, i) => (
                    <tr key={i} className="border-b border-slate-600/30 hover:bg-slate-700/40">
                      <td className="px-2 py-1.5 font-medium text-slate-200">{row.heading}</td>
                      <td className="px-2 py-1.5 text-slate-400">{row.zone}</td>
                      <td className="px-2 py-1.5 text-slate-400">{row.date}</td>
                      <td className="px-2 py-1.5">
                        <span
                          className={`inline-flex rounded-full px-1.5 py-0.5 text-[10px] font-medium ${
                            row.status === 'Reconciled'
                              ? 'bg-emerald-500/20 text-emerald-400'
                              : 'bg-amber-500/20 text-amber-400'
                          }`}
                        >
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}
