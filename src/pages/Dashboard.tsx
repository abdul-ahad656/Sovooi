import { TopNav } from '@/components/layout/TopNav'
import { MetricCard } from '@/components/cards/MetricCard'
import { LineTrendChart } from '@/components/charts/LineTrendChart'
import { BarComparisonChart } from '@/components/charts/BarComparisonChart'
import { businessProfile } from '@/data/business'
import { competitors } from '@/data/competitors'
import { complaintCategoryTotals } from '@/data/reviews'
import {
  emergingIssues,
  industryRiskScore,
  kpiSummary,
  ratingTrend,
  sentimentTrend,
  weeklySnapshot,
} from '@/data/trends'
import { Link } from 'react-router-dom'

const icons = {
  competitors: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
      <path d="M3 21h18" />
      <path d="M5 21V8l4-4 4 4v13" />
      <path d="M13 21V11l4-3 4 3v10" />
    </svg>
  ),
  reviews: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
      <path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.4 8.5 8.5 0 0 1-4-1L3 20l1.1-3.4A8.38 8.38 0 0 1 12.5 3a8.5 8.5 0 0 1 8.5 8.5z" />
    </svg>
  ),
  alerts: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
      <path d="M3.3 16a1 1 0 0 0 .8 1.6h15.8a1 1 0 0 0 .8-1.6c-1-1.3-2.7-2.6-2.7-7a5.2 5.2 0 0 0-10.2 0c0 4.4-1.7 5.7-2.7 7z" />
    </svg>
  ),
  opportunities: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
      <path d="M9 18h6" />
      <path d="M10 22h4" />
      <path d="M12 2a6 6 0 0 0-4 10.5c.7.6 1 1.5 1 2.5h6c0-1 .3-1.9 1-2.5A6 6 0 0 0 12 2z" />
    </svg>
  ),
}

const complaintBarData = complaintCategoryTotals.map((c) => ({
  category: c.category,
  value: c.value,
}))

const competitorRatingData = competitors.map((c) => ({
  name: c.name,
  rating: c.rating,
}))

const issueSeverityClass: Record<string, string> = {
  danger: 'badge-danger',
  warning: 'badge-warning',
}

export function Dashboard() {
  return (
    <div>
      <TopNav
        title="Dashboard"
        subtitle={`${businessProfile.name} · ${businessProfile.industry} · ${businessProfile.location}`}
      />

      <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          label="Competitors monitored"
          value={kpiSummary.competitorsMonitored}
          sub="within 3 mile radius"
          icon={icons.competitors}
        />
        <MetricCard
          label="Reviews analyzed"
          value={kpiSummary.reviewsAnalyzed.toLocaleString()}
          sub="last 90 days"
          icon={icons.reviews}
        />
        <MetricCard
          label="Active alerts"
          value={kpiSummary.activeAlerts}
          sub={`${kpiSummary.criticalAlerts} critical`}
          icon={icons.alerts}
        />
        <MetricCard
          label="Opportunities found"
          value={kpiSummary.opportunitiesFound}
          sub={`${kpiSummary.highImpactOpportunities} high impact`}
          icon={icons.opportunities}
        />
      </div>

      <div className="mb-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="card">
          <h2 className="card-title">Sentiment trend</h2>
          <LineTrendChart
            data={sentimentTrend}
            xKey="week"
            series={[{ dataKey: 'sentiment', color: '#3B82F6', name: 'Sentiment' }]}
            yDomain={[60, 90]}
          />
        </div>
        <div className="card">
          <h2 className="card-title">Industry complaint trend</h2>
          <BarComparisonChart
            data={complaintBarData}
            xKey="category"
            barKey="value"
            color="#EF4444"
          />
        </div>
      </div>

      <div className="mb-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="card">
          <h2 className="card-title">Competitor performance comparison</h2>
          <BarComparisonChart
            data={competitorRatingData}
            xKey="name"
            barKey="rating"
            color="#22C55E"
            layout="vertical"
            domain={[0, 5]}
            height={240}
          />
        </div>
        <div className="card">
          <h2 className="card-title">Rating trend analysis</h2>
          <LineTrendChart
            data={ratingTrend}
            xKey="week"
            series={[
              { dataKey: 'ourRating', color: '#6366F1', name: businessProfile.name },
              { dataKey: 'marketAvgRating', color: '#9CA3AF', name: 'Market average', dashed: true },
            ]}
            yDomain={[3.8, 4.6]}
            height={240}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="card">
          <h2 className="card-title">Emerging issues</h2>
          <div className="flex flex-col gap-2.5 text-sm">
            {emergingIssues.map((issue) => (
              <div key={issue.label} className="flex items-center justify-between">
                <span className="text-text-primary">{issue.label}</span>
                <span className={`badge ${issueSeverityClass[issue.severity]}`}>
                  {issue.change}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h2 className="card-title">Industry risk score</h2>
          <div className="text-3xl font-semibold text-warning-text">
            {industryRiskScore.score}
            <span className="text-sm font-normal text-text-secondary">
              /{industryRiskScore.max}
            </span>
          </div>
          <p className="mt-2 text-xs leading-relaxed text-text-secondary">
            {industryRiskScore.description}
          </p>
        </div>

        <div className="card">
          <h2 className="card-title">Weekly snapshot</h2>
          <p className="text-sm leading-relaxed text-text-secondary">
            {weeklySnapshot.reviewsScanned} new reviews scanned · {weeklySnapshot.newAlerts}{' '}
            new alerts · sentiment {weeklySnapshot.sentimentChange > 0 ? 'up' : 'down'}{' '}
            {Math.abs(weeklySnapshot.sentimentChange)}pts ·{' '}
            {weeklySnapshot.newOpportunities} new opportunity surfaced
          </p>
          <Link to="/report" className="btn mt-3 w-full justify-center text-xs">
            View full report
          </Link>
        </div>
      </div>
    </div>
  )
}