import type { AlertSeverity, OpportunityLevel, RiskLevel, Sentiment } from '@/types'

type BadgeTone = 'success' | 'warning' | 'danger' | 'info' | 'neutral'

export function Badge({ tone, children }: { tone: BadgeTone; children: React.ReactNode }) {
  return <span className={`badge badge-${tone}`}>{children}</span>
}

const riskToneMap: Record<RiskLevel, BadgeTone> = {
  Low: 'success',
  Medium: 'warning',
  High: 'danger',
}

export function RiskBadge({ level }: { level: RiskLevel }) {
  return <Badge tone={riskToneMap[level]}>{level}</Badge>
}

const severityToneMap: Record<AlertSeverity, BadgeTone> = {
  Critical: 'danger',
  High: 'danger',
  Medium: 'warning',
  Low: 'neutral',
}

export function SeverityBadge({ severity }: { severity: AlertSeverity }) {
  return <Badge tone={severityToneMap[severity]}>{severity}</Badge>
}

const sentimentToneMap: Record<Sentiment, BadgeTone> = {
  Positive: 'success',
  Neutral: 'neutral',
  Negative: 'danger',
}

export function SentimentBadge({ sentiment }: { sentiment: Sentiment }) {
  return <Badge tone={sentimentToneMap[sentiment]}>{sentiment}</Badge>
}

const opportunityToneMap: Record<OpportunityLevel, BadgeTone> = {
  High: 'success',
  Medium: 'warning',
  Low: 'neutral',
}

export function OpportunityBadge({ level }: { level: OpportunityLevel }) {
  return <Badge tone={opportunityToneMap[level]}>Opportunity: {level}</Badge>
}

export function CategoryBadge({ children }: { children: React.ReactNode }) {
  return <Badge tone="neutral">{children}</Badge>
}