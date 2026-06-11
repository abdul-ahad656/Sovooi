import { useMemo, useState } from 'react'
import type { Competitor, RiskLevel } from '@/types'
import { RiskBadge } from '@/components/cards/Badges'
import { TrendIndicator } from '../cards/TrendIndicator'

interface CompetitorTableProps {
  competitors: Competitor[]
  selectedId: string
  onSelect: (id: string) => void
}

type SortKey = 'rating' | 'reviewCount' | 'sentimentScore'

const sortOptions: { value: SortKey; label: string }[] = [
  { value: 'rating', label: 'Sort by rating' },
  { value: 'reviewCount', label: 'Sort by reviews' },
  { value: 'sentimentScore', label: 'Sort by sentiment' },
]

const riskOptions: ('All' | RiskLevel)[] = ['All', 'High', 'Medium', 'Low']

export function CompetitorTable({ competitors, selectedId, onSelect }: CompetitorTableProps) {
  const [search, setSearch] = useState('')
  const [riskFilter, setRiskFilter] = useState<'All' | RiskLevel>('All')
  const [sortKey, setSortKey] = useState<SortKey>('rating')

  const filtered = useMemo(() => {
    let result = competitors.filter((c) =>
      c.name.toLowerCase().includes(search.toLowerCase()),
    )

    if (riskFilter !== 'All') {
      result = result.filter((c) => c.riskLevel === riskFilter)
    }

    result = [...result].sort((a, b) => b[sortKey] - a[sortKey])

    return result
  }, [competitors, search, riskFilter, sortKey])

  return (
    <div>
      <div className="mb-3 flex flex-wrap gap-2">
        <input
          type="text"
          placeholder="Search competitors..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input max-w-[260px]"
        />
        <select
          className="select w-40"
          value={riskFilter}
          onChange={(e) => setRiskFilter(e.target.value as 'All' | RiskLevel)}
        >
          {riskOptions.map((r) => (
            <option key={r} value={r}>
              {r === 'All' ? 'All risk levels' : r}
            </option>
          ))}
        </select>
        <select
          className="select w-40"
          value={sortKey}
          onChange={(e) => setSortKey(e.target.value as SortKey)}
        >
          {sortOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <div className="overflow-hidden rounded-xl border border-border">
        <table className="w-full table-fixed border-collapse text-sm">
          <thead>
            <tr className="bg-bg-elevated text-left">
              <th className="px-4 py-2.5 font-medium text-text-secondary">Business name</th>
              <th className="w-20 px-4 py-2.5 font-medium text-text-secondary">Rating</th>
              <th className="w-24 px-4 py-2.5 font-medium text-text-secondary">Reviews</th>
              <th className="w-24 px-4 py-2.5 font-medium text-text-secondary">Sentiment</th>
              <th className="w-16 px-4 py-2.5 font-medium text-text-secondary">Trend</th>
              <th className="w-24 px-4 py-2.5 font-medium text-text-secondary">Risk</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((c) => (
              <tr
                key={c.id}
                onClick={() => onSelect(c.id)}
                className={`cursor-pointer border-t border-border transition-colors hover:bg-bg-hover ${
                  c.id === selectedId ? 'bg-accent-muted/40' : ''
                }`}
              >
                <td className="px-4 py-2.5 font-medium text-text-primary">{c.name}</td>
                <td className="px-4 py-2.5">
                  <span className="inline-flex items-center gap-1 text-text-primary">
                    <span className="text-warning-text">★</span>
                    {c.rating.toFixed(1)}
                  </span>
                </td>
                <td className="px-4 py-2.5 text-text-secondary">
                  {c.reviewCount.toLocaleString()}
                </td>
                <td className="px-4 py-2.5 text-text-secondary">{c.sentimentScore}</td>
                <td className="px-4 py-2.5">
                  <TrendIndicator direction={c.trend} />
                </td>
                <td className="px-4 py-2.5">
                  <RiskBadge level={c.riskLevel} />
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={6} className="px-4 py-6 text-center text-text-secondary">
                  No competitors match your filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}