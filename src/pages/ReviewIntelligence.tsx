import { TopNav } from '@/components/layout/TopNav'
import { DistributionPieChart } from '@/components/charts/DistributionPieChart'
import { BarComparisonChart } from '@/components/charts/BarComparisonChart'
import { LineTrendChart } from '@/components/charts/LineTrendChart'
import { ReviewFeedItem } from '@/components/cards/ReviewFeedItem'
import { complaintCategoryTotals, reviews, sentimentDistribution } from '@/data/reviews'
import { complaintTrend } from '@/data/trends'
import { kpiSummary } from '@/data/trends'

const complaintBarData = complaintCategoryTotals.map((c) => ({
  category: c.category,
  value: c.value,
}))

export function ReviewIntelligence() {
  return (
    <div>
      <TopNav
        title="Review intelligence"
        subtitle={`${kpiSummary.reviewsAnalyzed.toLocaleString()} reviews analyzed across your industry, last 90 days`}
      />

      <div className="mb-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="card">
          <h2 className="card-title">Sentiment distribution</h2>
          <DistributionPieChart data={sentimentDistribution} height={200} />
        </div>
        <div className="card">
          <h2 className="card-title">Complaint categories</h2>
          <BarComparisonChart
            data={complaintBarData}
            xKey="category"
            barKey="value"
            color="#7F77DD"
          />
        </div>
      </div>

      <div className="card mb-6">
        <h2 className="card-title">Complaint trend over time</h2>
        <LineTrendChart
          data={complaintTrend}
          xKey="week"
          series={[
            { dataKey: 'waitTimes', color: '#EF4444', name: 'Wait times' },
            { dataKey: 'support', color: '#3B82F6', name: 'Support', dashed: true },
            { dataKey: 'prices', color: '#F59E0B', name: 'Prices', dashed: true },
          ]}
        />
      </div>

      <div>
        <h2 className="mb-3 text-sm font-medium text-text-primary">Recent review feed</h2>
        <div className="flex flex-col gap-2.5">
          {reviews.map((review) => (
            <ReviewFeedItem key={review.id} review={review} />
          ))}
        </div>
      </div>
    </div>
  )
}