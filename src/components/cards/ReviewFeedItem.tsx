import type { Review } from '@/types'
import { CategoryBadge, SentimentBadge } from './Badges'

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="text-warning-text">
      {'★'.repeat(rating)}
      <span className="text-bg-elevated">{'★'.repeat(5 - rating)}</span>
    </span>
  )
}

export function ReviewFeedItem({ review }: { review: Review }) {
  return (
    <div className="rounded-lg border border-border px-4 py-3">
      <div className="mb-1.5 flex items-center justify-between">
        <span className="text-sm font-medium text-text-primary">{review.business}</span>
        <StarRating rating={review.rating} />
      </div>
      <p className="mb-2.5 text-sm text-text-secondary">{review.text}</p>
      <div className="flex flex-wrap gap-2">
        <CategoryBadge>{review.category}</CategoryBadge>
        <SentimentBadge sentiment={review.sentiment} />
      </div>
    </div>
  )
}