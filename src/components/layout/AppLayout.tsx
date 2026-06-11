import { Outlet } from 'react-router-dom'
import { Sidebar } from './Sidebar'

export function AppLayout() {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-bg text-text-primary">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-[1400px] px-8 py-6">
          <Outlet />
        </div>
      </main>
    </div>
  )
}