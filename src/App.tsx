import { Route, Routes } from 'react-router-dom'
import { AppLayout } from '@/components/layout/AppLayout'
import { Dashboard } from '@/pages/Dashboard'
import { CompetitorIntelligence } from '@/pages/CompetitorIntelligence'
import { ReviewIntelligence } from '@/pages/ReviewIntelligence'
import { AlertsCenter } from '@/pages/AlertsCenter'
import { AIInsights } from '@/pages/AIInsights'
import { WeeklyReport } from '@/pages/WeeklyReport'
import { OnboardingWizard } from '@/pages/OnboardingWizard'

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/competitors" element={<CompetitorIntelligence />} />
        <Route path="/reviews" element={<ReviewIntelligence />} />
        <Route path="/alerts" element={<AlertsCenter />} />
        <Route path="/insights" element={<AIInsights />} />
        <Route path="/report" element={<WeeklyReport />} />
        <Route path="/onboarding" element={<OnboardingWizard />} />
      </Route>
    </Routes>
  )
}

export default App