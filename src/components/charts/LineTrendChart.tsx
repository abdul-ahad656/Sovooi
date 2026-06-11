import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

interface SeriesConfig {
  dataKey: string
  color: string
  name: string
  dashed?: boolean
}

interface LineTrendChartProps {
  data: Record<string, unknown>[]
  xKey: string
  series: SeriesConfig[]
  yDomain?: [number, number]
  height?: number
}

export function LineTrendChart({
  data,
  xKey,
  series,
  yDomain,
  height = 220,
}: LineTrendChartProps) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <LineChart data={data} margin={{ top: 4, right: 8, left: -16, bottom: 0 }}>
        <CartesianGrid stroke="#1E2228" vertical={false} />
        <XAxis
          dataKey={xKey}
          stroke="#6B7280"
          tick={{ fill: '#9CA3AF', fontSize: 12 }}
          tickLine={false}
          axisLine={{ stroke: '#262B33' }}
        />
        <YAxis
          domain={yDomain ?? ['auto', 'auto']}
          stroke="#6B7280"
          tick={{ fill: '#9CA3AF', fontSize: 12 }}
          tickLine={false}
          axisLine={false}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: '#1A1E25',
            border: '1px solid #262B33',
            borderRadius: 8,
            fontSize: 12,
          }}
          labelStyle={{ color: '#F4F5F7' }}
        />
        {series.map((s) => (
          <Line
            key={s.dataKey}
            type="monotone"
            dataKey={s.dataKey}
            name={s.name}
            stroke={s.color}
            strokeWidth={2}
            strokeDasharray={s.dashed ? '5 4' : undefined}
            dot={{ r: 2 }}
            activeDot={{ r: 4 }}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  )
}