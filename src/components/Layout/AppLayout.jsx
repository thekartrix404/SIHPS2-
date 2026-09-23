import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'

export default function AppLayout() {
  return (
    <div className="bg-surface font-body-md text-on-surface">
      <Sidebar />
      <div className="pl-72 flex flex-col min-h-screen">
        <Header />
        <main className="relative pt-16 flex-1 w-full bg-surface pb-space-xl">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
