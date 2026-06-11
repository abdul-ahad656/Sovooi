export type RiskLevel = 'High' | 'Medium' | 'Low'
export type TrendDirection = 'up' | 'down' | 'flat'
export type Sentiment = 'Positive' | 'Neutral' | 'Negative'
export type AlertSeverity = 'Critical' | 'High' | 'Medium' | 'Low'
export type OpportunityLevel = 'High' | 'Medium' | 'Low'

export interface TableRow {
  id: string | number
  name: string
  value: string | number
}

export interface Competitor {
  id: string
  name: string
  rating: number
  reviewCount: number
  sentimentScore: number
  trend: TrendDirection
  riskLevel: RiskLevel
  strengths: string[]
  weaknesses: string[]
  complaintBreakdown: { category: string; value: number }[]
  sentimentHistory: { month: string; score: number }[]
  aiRecommendation: string
}

export interface Review {
  id: string
  business: string
  rating: number
  text: string
  category: ComplaintCategory
  sentiment: Sentiment
  date: string
}

export type ComplaintCategory =
  | 'Long wait times'
  | 'Poor customer support'
  | 'High prices'
  | 'Staff behavior'
  | 'Product quality'
  | 'Cleanliness'
  | 'Parking issues'

export interface Alert {
  id: string
  severity: AlertSeverity
  title: string
  description: string
  confidence: number
  trendImpact: 'High' | 'Medium' | 'Low'
  suggestedAction: string
  date: string
}

export interface Insight {
  id: string
  title: string
  detail: string
  confidence: number
  opportunity: OpportunityLevel
}

export interface WeeklyTrendPoint {
  week: string
  sentiment: number
  ourRating?: number
  marketAvgRating?: number
  [key: string]: unknown
}

export interface ComplaintTrendPoint {
  week: string
  waitTimes: number
  support: number
  prices: number
  [key: string]: unknown
}

export interface KpiSummary {
  competitorsMonitored: number
  reviewsAnalyzed: number
  activeAlerts: number
  criticalAlerts: number
  opportunitiesFound: number
  highImpactOpportunities: number
}

export interface BusinessProfile {
  name: string
  industry: string
  location: string
  ownerName: string
  ownerInitials: string
}

export interface WeeklyReport {
  weekLabel: string
  executiveSummary: string
  topIndustryIssues: string[]
  competitorWeaknesses: string[]
  emergingRisks: string[]
  growthOpportunities: string[]
  aiRecommendations: string[]
  trend: WeeklyTrendPoint[]
}