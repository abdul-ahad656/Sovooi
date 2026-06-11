import type { Alert } from '@/types'

export const alerts: Alert[] = [
  {
    id: 'alert-1',
    severity: 'Critical',
    title: 'Negative reviews mentioning wait times increased by 38% this week',
    description:
      'Across your 12 monitored competitors, mentions of long wait times rose sharply, concentrated during the 8-10am peak window.',
    confidence: 92,
    trendImpact: 'High',
    suggestedAction: 'Review staffing schedules during peak hours (8-10am) to reduce average order time.',
    date: '2026-06-09',
  },
  {
    id: 'alert-2',
    severity: 'High',
    title: 'Parking complaints are trending across 4 nearby competitors',
    description:
      'Daily Grind Cafe, Brewtopia, Espresso Lane, and Morning Ritual have all received new parking-related complaints in the last 7 days.',
    confidence: 85,
    trendImpact: 'Medium',
    suggestedAction: 'Highlight your free on-site parking in listings, social posts, and signage.',
    date: '2026-06-08',
  },
  {
    id: 'alert-3',
    severity: 'Medium',
    title: 'Customer frustration with response times has increased significantly',
    description:
      'Reviews mentioning slow responses to complaints or feedback rose 14% market-wide over the past two weeks.',
    confidence: 78,
    trendImpact: 'Medium',
    suggestedAction: 'Reply to all new reviews within 2 hours to stay ahead of this trend.',
    date: '2026-06-07',
  },
  {
    id: 'alert-4',
    severity: 'Low',
    title: 'Minor uptick in price sensitivity mentions',
    description:
      'Mentions of "expensive" and "overpriced" increased modestly across the category, particularly for specialty drinks.',
    confidence: 64,
    trendImpact: 'Low',
    suggestedAction: 'Consider a loyalty discount or value-tier menu item to capture price-sensitive customers.',
    date: '2026-06-05',
  },
]