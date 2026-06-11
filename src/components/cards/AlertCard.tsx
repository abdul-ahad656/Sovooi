import type { Alert } from '@/types'
import { SeverityBadge } from './Badges'

const severityBorderMap: Record<Alert['severity'], string> = {
  Critical: 'border-l-danger',
  High: 'border-l-danger',
  Medium: 'border-l-warning',
  Low: 'border-l-border',
}

export function AlertCard({ alert }: { alert: Alert }) {
  return (
    <div
      className={`rounded-xl border border-border ${severityBorderMap[alert.severity]} border-l-[3px] bg-bg-surface p-4`}
    >
      <div className="mb-2 flex items-start justify-between gap-4">
        <h3 className="text-sm font-medium text-text-primary">{alert.title}</h3>
        <SeverityBadge severity={alert.severity} />
      </div>

      <p className="mb-3 text-sm text-text-secondary">{alert.description}</p>

      <div className="mb-3 flex flex-wrap gap-x-6 gap-y-1 text-xs text-text-secondary">
        <span>
          Confidence:{' '}
          <span className="font-medium text-text-primary">{alert.confidence}%</span>
        </span>
        <span>
          Trend impact:{' '}
          <span className="font-medium text-text-primary">{alert.trendImpact}</span>
        </span>
        <span className="text-text-tertiary">{alert.date}</span>
      </div>

      <div className="flex items-start gap-2 rounded-lg bg-bg-elevated px-3 py-2 text-sm text-text-primary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mt-0.5 h-4 w-4 shrink-0 text-accent-hover"
        >
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
        <span>{alert.suggestedAction}</span>
      </div>
    </div>
  )
}