import type { ComplaintTrendPoint, KpiSummary, WeeklyReport, WeeklyTrendPoint } from '@/types'

export const kpiSummary: KpiSummary = {
  competitorsMonitored: 12,
  reviewsAnalyzed: 8420,
  activeAlerts: 4,
  criticalAlerts: 1,
  opportunitiesFound: 7,
  highImpactOpportunities: 2,
}

export const sentimentTrend: WeeklyTrendPoint[] = [
  { week: 'W1', sentiment: 78 },
  { week: 'W2', sentiment: 77 },
  { week: 'W3', sentiment: 76 },
  { week: 'W4', sentiment: 75 },
  { week: 'W5', sentiment: 74 },
  { week: 'W6', sentiment: 73 },
  { week: 'W7', sentiment: 72 },
  { week: 'W8', sentiment: 71 },
]

export const ratingTrend: WeeklyTrendPoint[] = [
  { week: 'Jan', sentiment: 0, ourRating: 4.2, marketAvgRating: 4.2 },
  { week: 'Feb', sentiment: 0, ourRating: 4.1, marketAvgRating: 4.25 },
  { week: 'Mar', sentiment: 0, ourRating: 4.1, marketAvgRating: 4.3 },
  { week: 'Apr', sentiment: 0, ourRating: 4.0, marketAvgRating: 4.3 },
  { week: 'May', sentiment: 0, ourRating: 4.1, marketAvgRating: 4.35 },
  { week: 'Jun', sentiment: 0, ourRating: 4.1, marketAvgRating: 4.4 },
]

export const complaintTrend: ComplaintTrendPoint[] = [
  { week: 'W1', waitTimes: 80, support: 70, prices: 60 },
  { week: 'W2', waitTimes: 85, support: 72, prices: 62 },
  { week: 'W3', waitTimes: 92, support: 75, prices: 65 },
  { week: 'W4', waitTimes: 98, support: 80, prices: 68 },
  { week: 'W5', waitTimes: 105, support: 85, prices: 70 },
  { week: 'W6', waitTimes: 118, support: 88, prices: 72 },
  { week: 'W7', waitTimes: 130, support: 92, prices: 74 },
  { week: 'W8', waitTimes: 142, support: 98, prices: 76 },
]

export const emergingIssues = [
  { label: 'Wait times', change: '+38%', severity: 'danger' as const },
  { label: 'Parking', change: '+19%', severity: 'warning' as const },
  { label: 'Response time', change: '+14%', severity: 'warning' as const },
]

export const industryRiskScore = {
  score: 62,
  max: 100,
  label: 'Elevated',
  description: 'Elevated — driven by service speed complaints across the category',
}

export const weeklySnapshot = {
  reviewsScanned: 412,
  newAlerts: 3,
  sentimentChange: -2,
  newOpportunities: 1,
}

export const weeklyReport: WeeklyReport = {
  weekLabel: 'Week of June 8 - 14, 2026',
  executiveSummary:
    'Sentiment across your competitive set declined slightly this week, driven primarily by a sharp rise in wait-time complaints. Two competitors are showing elevated risk indicators, while three new opportunities were identified related to service speed and review responsiveness.',
  topIndustryIssues: [
    'Wait time complaints up 38% week-over-week',
    'Customer support response time mentioned in 1 of 8 negative reviews',
    'Parking availability raised across 4 nearby competitors',
  ],
  competitorWeaknesses: [
    'The Roasted Bean: inconsistent staff behavior cited in 30% of recent negative reviews',
    'Daily Grind Cafe: rating dropped from 4.4 to 4.2 over the past month',
  ],
  emergingRisks: [
    'Industry risk score rose to 62/100, up from 54 last week',
    'Price sensitivity mentions trending upward across the category',
  ],
  growthOpportunities: [
    'Promote your faster average wait time vs. The Roasted Bean and Daily Grind Cafe',
    'Highlight free parking, an emerging pain point for nearby competitors',
  ],
  aiRecommendations: [
    'Reduce average review response time from 14 hours to under 2 hours',
    'Add a second barista during 8-10am peak hours',
    'Run a parking-focused promotion targeting commuters',
  ],
  trend: sentimentTrend,
}