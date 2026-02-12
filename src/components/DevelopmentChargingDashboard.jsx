import {
  LineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
  Cell,
} from 'recharts'

const CHART_COLORS = {
  primary: '#171717',
  secondary: '#dc2626',
  positive: '#16a34a',
  negative: '#dc2626',
}

const dates = ['Jan-14', 'Jan-15', 'Jan-16', 'Jan-18']

const powderFactorData = [
  { date: 'Jan-14', value: 1.09 },
  { date: 'Jan-16', value: 1.03 },
  { date: 'Jan-18', value: 0.94 },
]

const densityData = [
  { date: 'Jan-14', high: 0.94, low: 0.76 },
  { date: 'Jan-15', high: 0.9, low: 0.72 },
  { date: 'Jan-16', high: 0.93, low: 0.73 },
  { date: 'Jan-18', high: 0.93, low: 0.75 },
]

const wastageData = [
  { date: 'Jan-14', value: -25.13 },
  { date: 'Jan-15', value: -380 },
  { date: 'Jan-16', value: -7.59 },
  { date: 'Jan-18', value: 15.29 },
]

const emulsionData = [
  { date: 'Jan-14', effective: 430, planned: 398.5 },
  { date: 'Jan-15', effective: 380, planned: 398.5 },
  { date: 'Jan-16', effective: 405, planned: 398.5 },
  { date: 'Jan-18', effective: 369.71, planned: 398.5 },
]

const percentDiffData = [
  { date: 'Jan-14', value: 7.3 },
  { date: 'Jan-15', value: 100 },
  { date: 'Jan-16', value: 1.6 },
  { date: 'Jan-18', value: -7.8 },
]

function RedpathLogo() {
  return (
    <div className="flex items-center gap-1">
      <div className="flex h-8 w-8 items-center justify-center rounded bg-red-600 text-white font-bold text-sm">
        R
      </div>
      <span className="text-sm font-semibold text-slate-800">REDPATH</span>
    </div>
  )
}

export default function DevelopmentChargingDashboard() {
  return (
    <div className="w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-sm">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 bg-slate-200/80 px-4 py-3 md:px-6">
        <RedpathLogo />
        <h3 className="text-center text-lg font-semibold text-slate-800 md:text-xl">
          Development Charging Reconciliation
        </h3>
        <div className="flex flex-wrap items-center gap-2 text-sm">
          <select className="rounded border border-slate-300 bg-white px-2 py-1.5 text-slate-700">
            <option>2026</option>
          </select>
          <select className="rounded border border-slate-300 bg-white px-2 py-1.5 text-slate-700">
            <option>Multiple selections</option>
          </select>
          <select className="rounded border border-slate-300 bg-white px-2 py-1.5 text-slate-700">
            <option>BXC_825_D2_SPL_02</option>
          </select>
        </div>
      </div>

      {/* Charts grid */}
      <div className="grid grid-cols-1 gap-4 p-4 lg:grid-cols-2 md:p-6">
        {/* 1. Powder Factor (Kg/t) */}
        <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
          <h4 className="mb-3 text-sm font-medium text-slate-800">Powder Factor (Kg/t)</h4>
          <ResponsiveContainer width="100%" height={180}>
            <LineChart data={powderFactorData} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="date" tick={{ fontSize: 11, fill: '#64748b' }} />
              <YAxis domain={[0.9, 1.1]} tick={{ fontSize: 11, fill: '#64748b' }} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke={CHART_COLORS.primary}
                strokeWidth={2}
                dot={{ fill: CHART_COLORS.primary, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* 2. Low and High Density Trend */}
        <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
          <h4 className="mb-3 text-sm font-medium text-slate-800">Low and High Density Trend</h4>
          <ResponsiveContainer width="100%" height={180}>
            <LineChart data={densityData} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="date" tick={{ fontSize: 11, fill: '#64748b' }} />
              <YAxis domain={[0.7, 1.1]} tick={{ fontSize: 11, fill: '#64748b' }} />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="high"
                name="High Density Trend"
                stroke={CHART_COLORS.primary}
                strokeWidth={2}
                dot={{ fill: CHART_COLORS.primary, r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="low"
                name="Low Density Trend"
                stroke={CHART_COLORS.secondary}
                strokeWidth={2}
                dot={{ fill: CHART_COLORS.secondary, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* 3. Emulsion Wastage (Kg) */}
        <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
          <h4 className="mb-3 text-sm font-medium text-slate-800">Emulsion Wastage (Kg)</h4>
          <ResponsiveContainer width="100%" height={180}>
            <BarChart data={wastageData} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="date" tick={{ fontSize: 11, fill: '#64748b' }} />
              <YAxis domain={[-400, 50]} tick={{ fontSize: 11, fill: '#64748b' }} />
              <ReferenceLine y={0} stroke="#94a3b8" strokeDasharray="3 3" />
              <Tooltip />
              <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                {wastageData.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={entry.value < 0 ? CHART_COLORS.positive : CHART_COLORS.negative}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* 4. Emulsion Comparison */}
        <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
          <h4 className="mb-3 text-sm font-medium text-slate-800">Emulsion Comparison</h4>
          <ResponsiveContainer width="100%" height={180}>
            <LineChart data={emulsionData} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="date" tick={{ fontSize: 11, fill: '#64748b' }} />
              <YAxis domain={[360, 430]} tick={{ fontSize: 11, fill: '#64748b' }} />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="effective"
                name="Effective Emulsion for Blast"
                stroke={CHART_COLORS.primary}
                strokeWidth={2}
                dot={{ fill: CHART_COLORS.primary, r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="planned"
                name="Planned Emulsion"
                stroke={CHART_COLORS.secondary}
                strokeWidth={2}
                strokeDasharray="4 4"
                dot={{ fill: CHART_COLORS.secondary, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* 5. % Diff - full width on second row */}
        <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm lg:col-span-2">
          <h4 className="mb-3 text-sm font-medium text-slate-800">
            % Diff Between Actual Effective and Planned Charge
          </h4>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={percentDiffData} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
              <defs>
                <linearGradient id="positiveFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={CHART_COLORS.negative} stopOpacity={0.4} />
                  <stop offset="100%" stopColor={CHART_COLORS.negative} stopOpacity={0} />
                </linearGradient>
                <linearGradient id="negativeFill" x1="0" y1="1" x2="0" y2="0">
                  <stop offset="0%" stopColor={CHART_COLORS.positive} stopOpacity={0.4} />
                  <stop offset="100%" stopColor={CHART_COLORS.positive} stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="date" tick={{ fontSize: 11, fill: '#64748b' }} />
              <YAxis domain={[-20, 110]} tick={{ fontSize: 11, fill: '#64748b' }} tickFormatter={(v) => `${v}%`} />
              <ReferenceLine y={0} stroke="#94a3b8" strokeDasharray="3 3" />
              <Tooltip formatter={(value) => [`${value}%`, '% Diff']} />
              <Area
                type="monotone"
                dataKey="value"
                stroke={CHART_COLORS.primary}
                strokeWidth={2}
                fill="url(#positiveFill)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
