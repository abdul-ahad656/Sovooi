import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

interface BarComparisonChartProps {
  data: Record<string, unknown>[]
  xKey: string
  barKey: string
  color?: string
  layout?: 'horizontal' | 'vertical'
  height?: number
  domain?: [number, number]
}

export function BarComparisonChart({
  data,
  xKey,
  barKey,
  color = '#6366F1',
  layout = 'horizontal',
  height = 220,
  domain,
}: BarComparisonChartProps) {
  const isVertical = layout === 'vertical'

  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart
        data={data}
        layout={isVertical ? 'vertical' : 'horizontal'}
        margin={{ top: 4, right: 8, left: isVertical ? 16 : -16, bottom: 0 }}
      >
        <CartesianGrid stroke="#1E2228" horizontal={!isVertical} vertical={isVertical} />
        {isVertical ? (
          <>
            <XAxis
              type="number"
              domain={domain}
              stroke="#6B7280"
              tick={{ fill: '#9CA3AF', fontSize: 12 }}
              tickLine={false}
              axisLine={{ stroke: '#262B33' }}
            />
            <YAxis
              type="category"
              dataKey={xKey}
              stroke="#6B7280"
              tick={{ fill: '#9CA3AF', fontSize: 12 }}
              tickLine={false}
              axisLine={false}
              width={120}
            />
          </>
        ) : (
          <>
            <XAxis
              dataKey={xKey}
              stroke="#6B7280"
              tick={{ fill: '#9CA3AF', fontSize: 11 }}
              tickLine={false}
              axisLine={{ stroke: '#262B33' }}
              interval={0}
              angle={-30}
              textAnchor="end"
              height={56}
            />
            <YAxis
              domain={domain}
              stroke="#6B7280"
              tick={{ fill: '#9CA3AF', fontSize: 12 }}
              tickLine={false}
              axisLine={false}
            />
          </>
        )}
        <Tooltip
          cursor={{ fill: 'rgba(255,255,255,0.04)' }}
          contentStyle={{
            backgroundColor: '#1A1E25',
            border: '1px solid #262B33',
            borderRadius: 8,
            fontSize: 12,
          }}
          labelStyle={{ color: '#F4F5F7' }}
        />
        <Bar dataKey={barKey} fill={color} radius={isVertical ? [0, 4, 4, 0] : [4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}