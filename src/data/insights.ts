import type { Insight } from '@/types'

export const insights: Insight[] = [
  {
    id: 'insight-1',
    title: 'Customers in your market are becoming increasingly price-sensitive',
    detail:
      'Mentions of "expensive" and "overpriced" rose 22% across competitors over the last 30 days. A value-tier menu item could capture price-conscious switchers.',
    confidence: 81,
    opportunity: 'Medium',
  },
  {
    id: 'insight-2',
    title: 'Businesses responding to reviews within 2 hours maintain higher ratings',
    detail:
      'Businesses replying within 2 hours average 0.4 stars higher than those that don\'t. Brew & Co. currently averages 14 hours response time.',
    confidence: 88,
    opportunity: 'High',
  },
  {
    id: 'insight-3',
    title: 'Weekend staffing issues appear to affect customer satisfaction',
    detail:
      'Saturday and Sunday reviews mention "understaffed" three times more often than weekday reviews across the category.',
    confidence: 74,
    opportunity: 'Medium',
  },
  {
    id: 'insight-4',
    title: 'Wait time complaints are growing faster than any other category',
    detail:
      'Wait time mentions are up 38% week-over-week, outpacing all other complaint categories industry-wide and signaling a near-term opportunity.',
    confidence: 90,
    opportunity: 'High',
  },
]