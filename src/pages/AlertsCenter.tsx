import { TopNav } from '@/components/layout/TopNav'
import { AlertCard } from '@/components/cards/AlertCard'
import { alerts } from '@/data/alerts'

export function AlertsCenter() {
  return (
    <div>
      <TopNav
        title="Alerts center"
        subtitle="AI-generated early warnings based on competitor and market signals"
      />

      <div className="flex flex-col gap-3">
        {alerts.map((alert) => (
          <AlertCard key={alert.id} alert={alert} />
        ))}
      </div>
    </div>
  )
}