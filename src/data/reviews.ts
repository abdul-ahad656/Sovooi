import type { ComplaintCategory, Review } from '@/types'

export const reviews: Review[] = [
  {
    id: 'rev-1',
    business: 'The Roasted Bean',
    rating: 2,
    text: 'Waited 25 minutes for a simple latte. Staff seemed overwhelmed and there was no apology.',
    category: 'Long wait times',
    sentiment: 'Negative',
    date: '2026-06-09',
  },
  {
    id: 'rev-2',
    business: 'Espresso Lane',
    rating: 5,
    text: 'Quick service and the barista remembered my order from last week. Great experience overall.',
    category: 'Staff behavior',
    sentiment: 'Positive',
    date: '2026-06-09',
  },
  {
    id: 'rev-3',
    business: 'Brewtopia',
    rating: 3,
    text: 'Coffee is good but it is getting pricey for a small cup compared to other places nearby.',
    category: 'High prices',
    sentiment: 'Neutral',
    date: '2026-06-08',
  },
  {
    id: 'rev-4',
    business: 'Daily Grind Cafe',
    rating: 2,
    text: 'No parking nearby and the lot was full again this morning. Had to circle for ten minutes.',
    category: 'Parking issues',
    sentiment: 'Negative',
    date: '2026-06-08',
  },
  {
    id: 'rev-5',
    business: 'Caffeine Co.',
    rating: 4,
    text: 'Clean space, comfortable seating, decent wifi for working most of the day.',
    category: 'Cleanliness',
    sentiment: 'Positive',
    date: '2026-06-07',
  },
  {
    id: 'rev-6',
    business: 'Morning Ritual',
    rating: 2,
    text: 'Only one person working the counter on a Saturday morning. Line was out the door.',
    category: 'Long wait times',
    sentiment: 'Negative',
    date: '2026-06-07',
  },
  {
    id: 'rev-7',
    business: 'The Roasted Bean',
    rating: 1,
    text: 'Asked a question about the menu and the barista was rude about it. Won\'t be back.',
    category: 'Staff behavior',
    sentiment: 'Negative',
    date: '2026-06-06',
  },
  {
    id: 'rev-8',
    business: 'Brewtopia',
    rating: 5,
    text: 'My go-to spot. Always fast, always friendly, and the seasonal drinks are excellent.',
    category: 'Product quality',
    sentiment: 'Positive',
    date: '2026-06-06',
  },
]

export const complaintCategoryTotals: { category: ComplaintCategory; value: number }[] = [
  { category: 'Long wait times', value: 142 },
  { category: 'Poor customer support', value: 98 },
  { category: 'High prices', value: 76 },
  { category: 'Staff behavior', value: 64 },
  { category: 'Product quality', value: 51 },
  { category: 'Cleanliness', value: 38 },
  { category: 'Parking issues', value: 33 },
]

export const sentimentDistribution = [
  { name: 'Positive', value: 58, color: '#22C55E' },
  { name: 'Neutral', value: 24, color: '#9CA3AF' },
  { name: 'Negative', value: 18, color: '#EF4444' },
]