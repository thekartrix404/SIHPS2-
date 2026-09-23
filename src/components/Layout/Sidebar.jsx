import { NavLink } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext'

export default function Sidebar() {
  const { t } = useLanguage()

  const navItems = [
    { path: '/', icon: 'grid_view', label: t('navDashboard', 'Dashboard') },
    { path: '/explore-business', icon: 'travel_explore', label: t('navExplore', 'Explore Business') },
    { path: '/swot-analysis', icon: 'troubleshoot', label: t('navSwot', 'My Business & Diagnosis') },
    { path: '/market-analysis', icon: 'query_stats', label: t('navMarket', 'Market Analysis') },
    { path: '/financial-planner', icon: 'account_balance', label: t('navFinance', 'Financial Planner') },
    { path: '/business-connections', icon: 'handshake', label: t('navConnect', 'Business Connections') },
    { path: '/franchise-hub', icon: 'storefront', label: t('navFranchise', 'Franchise Hub') },
    { path: '/reports', icon: 'description', label: t('navReports', 'Reports & Dossier') },
    { path: '/settings', icon: 'tune', label: t('navSettings', 'Profile & Settings') },
  ]

  return (
    <aside className="fixed left-0 top-0 h-full w-72 bg-surface-container-lowest shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-50 flex flex-col justify-between overflow-y-auto">
      <div className="flex flex-col">
        {/* Brand */}
        <div className="px-space-md py-space-lg flex items-center gap-space-sm bg-surface-container-lowest">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-on-primary text-[18px]">agriculture</span>
          </div>
          <div className="flex flex-col">
            <span className="font-headline-sm text-headline-sm text-primary leading-tight tracking-tight">{t('brandName', 'BizOrbit')}</span>
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">{t('tagline', 'Hyper-Local Advisory')}</span>
          </div>
        </div>

        {/* Badge */}
        <div className="px-space-md pb-space-sm">
          <div className="inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm w-full">
            <span className="material-symbols-outlined text-[14px] text-secondary">verified</span>
            <span className="truncate">{t('whatsappBadge', 'WhatsApp-First AI Advisory')}</span>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex flex-col gap-1 px-space-md py-space-xs">
          {navItems.map(item => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `flex items-center gap-space-sm px-space-md py-space-sm rounded-lg transition-all ${
                  isActive
                    ? 'bg-primary-container text-on-primary-container font-semibold shadow-sm'
                    : 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'
                }`
              }
            >
              <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
              <span className="font-body-md text-body-md">{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Footer */}
      <div className="p-space-md bg-surface-container-low">
        <div className="bg-surface-container-lowest p-space-sm rounded-lg flex flex-col gap-1">
          <div className="flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-secondary text-[16px]">contact_emergency</span>
            <span className="font-label-md text-label-md text-on-surface">{t('districtNodal', 'District Support Nodal')}</span>
          </div>
          <span className="font-body-sm text-body-sm text-on-surface-variant">{t('helpline', 'Helpline: 1800-BIZORBIT')}</span>
          <span className="font-label-sm text-label-sm text-primary">{t('deskActive', 'PMEGP & Mudra Desk Active')}</span>
        </div>
      </div>
    </aside>
  )
}
