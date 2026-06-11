import { NavLink } from 'react-router-dom'
import { businessProfile } from '@/data/business'

interface NavItem {
  to: string
  label: string
  icon: JSX.Element
}

function Icon({ children }: { children: React.ReactNode }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-[18px] w-[18px] shrink-0"
    >
      {children}
    </svg>
  )
}

const navItems: NavItem[] = [
  {
    to: '/',
    label: 'Dashboard',
    icon: (
      <Icon>
        <rect x="3" y="3" width="7" height="9" rx="1" />
        <rect x="14" y="3" width="7" height="5" rx="1" />
        <rect x="14" y="12" width="7" height="9" rx="1" />
        <rect x="3" y="16" width="7" height="5" rx="1" />
      </Icon>
    ),
  },
  {
    to: '/competitors',
    label: 'Competitor intel',
    icon: (
      <Icon>
        <path d="M3 21h18" />
        <path d="M5 21V8l4-4 4 4v13" />
        <path d="M13 21V11l4-3 4 3v10" />
      </Icon>
    ),
  },
  {
    to: '/reviews',
    label: 'Review intelligence',
    icon: (
      <Icon>
        <path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.4 8.5 8.5 0 0 1-4-1L3 20l1.1-3.4A8.38 8.38 0 0 1 12.5 3a8.5 8.5 0 0 1 8.5 8.5z" />
      </Icon>
    ),
  },
  {
    to: '/alerts',
    label: 'Alerts center',
    icon: (
      <Icon>
        <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
        <path d="M3.3 16a1 1 0 0 0 .8 1.6h15.8a1 1 0 0 0 .8-1.6c-1-1.3-2.7-2.6-2.7-7a5.2 5.2 0 0 0-10.2 0c0 4.4-1.7 5.7-2.7 7z" />
      </Icon>
    ),
  },
  {
    to: '/insights',
    label: 'AI insights',
    icon: (
      <Icon>
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M12 2a6 6 0 0 0-4 10.5c.7.6 1 1.5 1 2.5h6c0-1 .3-1.9 1-2.5A6 6 0 0 0 12 2z" />
      </Icon>
    ),
  },
  {
    to: '/report',
    label: 'Weekly report',
    icon: (
      <Icon>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6" />
        <path d="M9 13h6" />
        <path d="M9 17h6" />
      </Icon>
    ),
  },
  {
    to: '/onboarding',
    label: 'Onboarding',
    icon: (
      <Icon>
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      </Icon>
    ),
  },
]

export function Sidebar() {
  return (
    <aside className="flex h-full w-60 shrink-0 flex-col border-r border-border bg-bg-surface px-3 py-4">
      <div className="flex items-center gap-2 px-2 pb-6">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-muted text-accent-hover">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <circle cx="12" cy="12" r="2" />
            <path d="M16.24 7.76a6 6 0 0 1 0 8.49" />
            <path d="M7.76 16.24a6 6 0 0 1 0-8.49" />
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
            <path d="M4.93 4.93a10 10 0 0 0 0 14.14" />
          </svg>
        </div>
        <span className="text-[15px] font-semibold tracking-tight">Sovoii</span>
      </div>

      <nav className="flex flex-col gap-1">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) =>
              `nav-link ${isActive ? 'nav-link-active' : ''}`
            }
          >
            {item.icon}
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto border-t border-border pt-3 px-2">
        <div className="flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-bg-elevated text-[11px] font-medium">
            {businessProfile.ownerInitials}
          </div>
          <div className="overflow-hidden">
            <p className="truncate text-sm font-medium text-text-primary">
              {businessProfile.ownerName}
            </p>
            <p className="truncate text-xs text-text-secondary">
              {businessProfile.name}
            </p>
          </div>
        </div>
      </div>
    </aside>
  )
}