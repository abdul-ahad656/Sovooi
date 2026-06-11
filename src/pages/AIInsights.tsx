import { TopNav } from '@/components/layout/TopNav'
import { InsightCard } from '@/components/cards/InsightCard'
import { insights } from '@/data/insights'

export function AIInsights() {
  return (
    <div>
      <TopNav
        title="AI insights"
        subtitle="Patterns and opportunities surfaced from market-wide review analysis"
      />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {insights.map((insight) => (
          <InsightCard key={insight.id} insight={insight} />
        ))}
      </div>
    </div>
  )
}