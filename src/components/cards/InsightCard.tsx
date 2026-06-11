import type { Insight } from '@/types'
import { OpportunityBadge } from './Badges'

export function InsightCard({ insight }: { insight: Insight }) {
  return (
    <div className="card">
      <h3 className="mb-2 text-sm font-medium text-text-primary">{insight.title}</h3>
      <p className="mb-4 text-sm leading-relaxed text-text-secondary">{insight.detail}</p>

      <div className="flex items-center justify-between">
        <div className="text-xs text-text-secondary">
          <div className="mb-1.5">Confidence</div>
          <div className="h-1 w-24 rounded-full bg-bg-elevated">
            <div
              className="h-1 rounded-full bg-accent"
              style={{ width: `${insight.confidence}%` }}
            />
          </div>
        </div>
        <OpportunityBadge level={insight.opportunity} />
      </div>
    </div>
  )
}