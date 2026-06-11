import { useState } from 'react'
import { TopNav } from '@/components/layout/TopNav'
import { CompetitorTable } from '@/components/tables/CompetitorTable'
import { RiskBadge } from '@/components/cards/Badges'
import { DistributionPieChart } from '@/components/charts/DistributionPieChart'
import { LineTrendChart } from '@/components/charts/LineTrendChart'
import { competitors } from '@/data/competitors'

const pieColors = ['#EF4444', '#3B82F6', '#F59E0B', '#6366F1', '#9CA3AF']

export function CompetitorIntelligence() {
  const [selectedId, setSelectedId] = useState(competitors[0].id)
  const selected = competitors.find((c) => c.id === selectedId) ?? competitors[0]

  const complaintData = selected.complaintBreakdown.map((c, i) => ({
    name: c.category,
    value: c.value,
    color: pieColors[i % pieColors.length],
  }))

  return (
    <div>
      <TopNav
        title="Competitor intelligence"
        subtitle={`${competitors.length} competitors discovered within 3 miles of your business`}
      />

      <div className="mb-6">
        <CompetitorTable
          competitors={competitors}
          selectedId={selectedId}
          onSelect={setSelectedId}
        />
      </div>

      <div className="card">
        <div className="mb-4 flex items-start justify-between">
          <div>
            <h2 className="text-base font-medium text-text-primary">{selected.name}</h2>
            <p className="mt-1 text-sm text-text-secondary">
              {selected.rating.toFixed(1)} stars · {selected.reviewCount.toLocaleString()}{' '}
              reviews · sentiment {selected.sentimentScore}/100
            </p>
          </div>
          <RiskBadge level={selected.riskLevel} />
        </div>

        <div className="mb-5 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <h3 className="mb-2 text-sm font-medium text-success-text">Strengths</h3>
            <ul className="list-disc space-y-1.5 pl-5 text-sm text-text-secondary">
              {selected.strengths.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-2 text-sm font-medium text-danger-text">Weaknesses</h3>
            <ul className="list-disc space-y-1.5 pl-5 text-sm text-text-secondary">
              {selected.weaknesses.map((w) => (
                <li key={w}>{w}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mb-5 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <h3 className="mb-2 text-sm font-medium text-text-primary">Complaint breakdown</h3>
            <DistributionPieChart data={complaintData} height={180} />
          </div>
          <div>
            <h3 className="mb-2 text-sm font-medium text-text-primary">Sentiment over time</h3>
            <LineTrendChart
              data={selected.sentimentHistory}
              xKey="month"
              series={[{ dataKey: 'score', color: '#22C55E', name: 'Sentiment' }]}
              height={180}
            />
          </div>
        </div>

        <div className="rounded-lg bg-info-muted px-4 py-3">
          <h3 className="mb-1 flex items-center gap-1.5 text-sm font-medium text-info-text">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="M9 18h6" />
              <path d="M10 22h4" />
              <path d="M12 2a6 6 0 0 0-4 10.5c.7.6 1 1.5 1 2.5h6c0-1 .3-1.9 1-2.5A6 6 0 0 0 12 2z" />
            </svg>
            AI recommendation
          </h3>
          <p className="text-sm text-info-text">{selected.aiRecommendation}</p>
        </div>
      </div>
    </div>
  )
}