import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TopNav } from '@/components/layout/TopNav'
import { RiskBadge } from '@/components/cards/Badges'
import { businessProfile } from '@/data/business'
import { competitors } from '@/data/competitors'
import { insights } from '@/data/insights'

const steps = [
  'Business name',
  'Industry',
  'Location',
  'Competitor discovery',
  'Generated insights',
  'Dashboard access',
]

const industryOptions = [
  'Coffee shop / cafe',
  'Restaurant',
  'Retail store',
  'Salon & spa',
  'Auto repair',
]

export function OnboardingWizard() {
  const [step, setStep] = useState(1)
  const [businessName, setBusinessName] = useState(businessProfile.name)
  const [industry, setIndustry] = useState(businessProfile.industry)
  const [location, setLocation] = useState(businessProfile.location)
  const navigate = useNavigate()

  const isLastStep = step === steps.length

  function handleNext() {
    if (isLastStep) {
      navigate('/')
      return
    }
    setStep((s) => Math.min(steps.length, s + 1))
  }

  function handleBack() {
    setStep((s) => Math.max(1, s - 1))
  }

  return (
    <div className="max-w-xl">
      <TopNav
        title="Business onboarding"
        subtitle={`Step ${step} of ${steps.length}: ${steps[step - 1]}`}
      />

      <div className="mb-6 flex gap-1.5">
        {steps.map((_, i) => (
          <div
            key={i}
            className={`h-1 flex-1 rounded-full ${
              i < step ? 'bg-accent' : 'bg-bg-elevated'
            }`}
          />
        ))}
      </div>

      <div className="card mb-6 min-h-[260px]">
        {step === 1 && (
          <div>
            <label className="mb-1.5 block text-sm text-text-secondary" htmlFor="business-name">
              Business name
            </label>
            <input
              id="business-name"
              type="text"
              className="input"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
            />
            <p className="mt-3 text-xs text-text-tertiary">
              This is the name Sovoii will use to identify your business across review
              platforms.
            </p>
          </div>
        )}

        {step === 2 && (
          <div>
            <label className="mb-1.5 block text-sm text-text-secondary" htmlFor="industry">
              Industry
            </label>
            <select
              id="industry"
              className="select"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
            >
              {industryOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <p className="mt-3 text-xs text-text-tertiary">
              Sovoii uses your industry to find relevant competitors and benchmark
              complaint categories.
            </p>
          </div>
        )}

        {step === 3 && (
          <div>
            <label className="mb-1.5 block text-sm text-text-secondary" htmlFor="location">
              Location
            </label>
            <input
              id="location"
              type="text"
              className="input"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <p className="mt-3 text-xs text-text-tertiary">
              We'll search for competitors within a configurable radius of this location.
            </p>
          </div>
        )}

        {step === 4 && (
          <div>
            <p className="mb-3 text-sm text-text-secondary">
              Sovoii found {competitors.length + 8} competitors near {location}:
            </p>
            <div className="flex flex-col gap-2">
              {competitors.slice(0, 4).map((c) => (
                <div
                  key={c.id}
                  className="flex items-center justify-between rounded-lg border border-border px-3 py-2 text-sm"
                >
                  <span className="text-text-primary">{c.name}</span>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-1 text-text-secondary">
                      <span className="text-warning-text">★</span>
                      {c.rating.toFixed(1)}
                    </span>
                    <RiskBadge level={c.riskLevel} />
                  </div>
                </div>
              ))}
              <p className="pt-1 text-center text-xs text-text-tertiary">
                + 8 more competitors discovered
              </p>
            </div>
          </div>
        )}

        {step === 5 && (
          <div>
            <p className="mb-3 text-sm text-text-secondary">
              Initial insights generated from {(8420).toLocaleString()} reviews:
            </p>
            <div className="flex flex-col gap-2.5">
              {insights.slice(0, 2).map((insight) => (
                <div key={insight.id} className="rounded-lg border border-border px-3 py-2.5">
                  <p className="text-sm font-medium text-text-primary">{insight.title}</p>
                  <p className="mt-1 text-xs text-text-secondary">
                    Confidence: {insight.confidence}%
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {step === 6 && (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-success-muted text-success-text">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <p className="text-base font-medium text-text-primary">You're all set</p>
            <p className="mt-1 text-sm text-text-secondary">
              Your Sovoii dashboard is ready with live competitor intelligence for{' '}
              {businessName}.
            </p>
          </div>
        )}
      </div>

      <div className="flex justify-between">
        <button className="btn" onClick={handleBack} disabled={step === 1}>
          Back
        </button>
        <button className="btn btn-primary" onClick={handleNext}>
          {isLastStep ? 'Go to dashboard' : 'Continue'}
        </button>
      </div>
    </div>
  )
}