interface TopNavProps {
  title: string
  subtitle?: string
}

export function TopNav({ title, subtitle }: TopNavProps) {
  return (
    <div className="mb-6 flex items-center justify-between">
      <div>
        <h1 className="text-xl font-semibold tracking-tight text-text-primary">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-1 text-sm text-text-secondary">{subtitle}</p>
        )}
      </div>
    </div>
  )
}