import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'

interface PieSlice {
  name: string
  value: number
  color: string
}

interface DistributionPieChartProps {
  data: PieSlice[]
  height?: number
  showLegend?: boolean
}

export function DistributionPieChart({
  data,
  height = 200,
  showLegend = true,
}: DistributionPieChartProps) {
  const total = data.reduce((sum, d) => sum + d.value, 0)

  return (
    <div>
      <ResponsiveContainer width="100%" height={height}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            innerRadius="55%"
            outerRadius="85%"
            paddingAngle={2}
          >
            {data.map((entry) => (
              <Cell key={entry.name} fill={entry.color} stroke="none" />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: '#1A1E25',
              border: '1px solid #262B33',
              borderRadius: 8,
              fontSize: 12,
            }}
          />
        </PieChart>
      </ResponsiveContainer>
      {showLegend && (
        <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-text-secondary">
          {data.map((d) => (
            <span key={d.name} className="inline-flex items-center gap-1.5">
              <span
                className="inline-block h-2.5 w-2.5 rounded-sm"
                style={{ backgroundColor: d.color }}
              />
              {d.name} {Math.round((d.value / total) * 100)}%
            </span>
          ))}
        </div>
      )}
    </div>
  )
}