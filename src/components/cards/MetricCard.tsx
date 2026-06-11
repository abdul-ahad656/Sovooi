import type { ReactNode } from 'react'

interface MetricCardProps {
  label: string
  value: string | number
  sub?: string
  icon?: ReactNode
}

export function MetricCard({ label, value, sub, icon }: MetricCardProps) {
  return (
    <div className="rounded-xl bg-bg-elevated p-4">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-[13px] text-text-secondary">{label}</span>
        {icon && <span className="text-text-tertiary">{icon}</span>}
      </div>
      <div className="text-2xl font-semibold text-text-primary">{value}</div>
      {sub && <div className="mt-1 text-xs text-text-secondary">{sub}</div>}
    </div>
  )
}