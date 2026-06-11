import { TopNav } from '@/components/layout/TopNav'
import { LineTrendChart } from '@/components/charts/LineTrendChart'
import { businessProfile } from '@/data/business'
import { weeklyReport } from '@/data/trends'

interface ReportSectionProps {
  title: string
  items: string[]
}

function ReportSection({ title, items }: ReportSectionProps) {
  return (
    <section className="mb-6">
      <h2 className="mb-2 text-sm font-medium text-text-primary">{title}</h2>
      <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-text-secondary">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  )
}

export function WeeklyReport() {
  return (
    <div className="max-w-2xl">
      <TopNav
        title="Weekly intelligence report"
        subtitle={`${businessProfile.name} · ${weeklyReport.weekLabel}`}
      />

      <section className="mb-6 rounded-lg bg-bg-elevated px-4 py-3.5">
        <h2 className="mb-1.5 text-sm font-medium text-text-primary">Executive summary</h2>
        <p className="text-sm leading-relaxed text-text-secondary">
          {weeklyReport.executiveSummary}
        </p>
      </section>

      <ReportSection title="Top industry issues" items={weeklyReport.topIndustryIssues} />
      <ReportSection title="Competitor weaknesses" items={weeklyReport.competitorWeaknesses} />
      <ReportSection title="Emerging risks" items={weeklyReport.emergingRisks} />
      <ReportSection title="Growth opportunities" items={weeklyReport.growthOpportunities} />
      <ReportSection title="AI recommendations" items={weeklyReport.aiRecommendations} />

      <section>
        <h2 className="mb-2 text-sm font-medium text-text-primary">Trend analysis</h2>
        <div className="card">
          <LineTrendChart
            data={weeklyReport.trend}
            xKey="week"
            series={[{ dataKey: 'sentiment', color: '#3B82F6', name: 'Sentiment' }]}
          />
        </div>
      </section>
    </div>
  )
}