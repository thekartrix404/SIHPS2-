import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

export default function MarketAnalysis() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col w-full">
      {/* Header Section */}
      <div className="px-space-lg pt-space-lg pb-space-sm flex flex-col gap-space-md">
        <div className="flex flex-wrap items-center justify-between gap-space-sm">
          <div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
            <Link to="/" className="hover:text-primary transition-colors uppercase tracking-wider flex items-center gap-1 font-semibold">
              <span className="material-symbols-outlined text-[16px]">arrow_back</span>
              <span>{t('backToDashboard', 'Dashboard')}</span>
            </Link>
            <span>/</span>
            <span className="text-on-surface font-semibold uppercase tracking-wider">{t('navMarket', 'Market Analysis')}</span>
          </div>
          <div className="flex items-center gap-space-sm">
            <Link to="/swot-analysis" className="inline-flex items-center gap-1 px-space-sm py-1 rounded-full bg-surface-container text-primary font-label-sm text-label-sm hover:bg-surface-container-high transition-colors">
              <span className="material-symbols-outlined text-[14px]">troubleshoot</span>
              <span>{t('viewSwot', 'View SWOT Diagnostic')}</span>
            </Link>
            <div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm shadow-sm">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              <span className="font-semibold text-on-surface">Live Data Feed:</span>
              <span>e-NAM & Agmarknet Synced 8m ago</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-md pb-space-xs">
          <div>
            <h1 className="font-headline-xl text-headline-xl text-primary tracking-tight">{t('marketIntelligence', 'Hyper-Local Market Intelligence')}</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-0.5">
              {t('marketSub', 'Demand estimation, competitor density, supply chain mapping, and seasonal modeling for Bilaspur Block.')}
            </p>
          </div>
          <div className="flex items-center gap-space-sm">
            <Link to="/" className="inline-flex items-center gap-space-xs px-space-md py-space-xs bg-surface-container-lowest text-on-surface rounded-lg font-label-lg text-label-lg shadow-sm hover:bg-surface-container transition-all">
              <span className="material-symbols-outlined text-[18px]">dashboard</span>
              <span>{t('backToOverview', 'Back to Overview')}</span>
            </Link>
            <button className="inline-flex items-center gap-space-xs px-space-md py-space-xs bg-primary text-on-primary rounded-lg font-label-lg text-label-lg shadow-sm hover:bg-primary-container transition-all">
              <span className="material-symbols-outlined text-[18px]">download</span>
              <span>{t('exportPdf', 'Export Feasibility PDF')}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Feasibility Score Hero */}
      <div className="px-space-lg pb-space-md">
        <div className="p-space-lg bg-surface-container-lowest rounded-xl shadow-sm relative overflow-hidden">
          <div className="absolute -left-16 -bottom-16 w-64 h-64 rounded-full bg-secondary/10 blur-3xl pointer-events-none"></div>
          <div className="relative z-10 flex flex-col xl:flex-row items-stretch gap-space-lg">
            {/* Feasibility Score Circle */}
            <div className="xl:w-72 shrink-0 p-space-md bg-surface-container-low rounded-xl flex flex-col items-center justify-center text-center">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant mb-space-xs font-semibold">Hyper-Local Feasibility Score</span>
              <div className="relative w-36 h-36 flex items-center justify-center my-space-xs">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
                  <circle className="stroke-surface-container-high" cx="60" cy="60" fill="none" r="50" strokeWidth="10" />
                  <circle className="stroke-secondary" cx="60" cy="60" fill="none" r="50" strokeDasharray="314.15" strokeDashoffset="75.4" strokeLinecap="round" strokeWidth="10" />
                </svg>
                <div className="absolute flex flex-col items-center">
                  <span className="font-display-lg text-display-lg text-secondary leading-none">76</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">OUT OF 100</span>
                </div>
              </div>
              <div className="inline-flex items-center gap-space-xs px-space-sm py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-md text-label-md mt-space-xs">
                <span className="material-symbols-outlined text-[16px]">verified</span>
                <span>High Viability Zone</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">Top 20% feasibility in Rampur District for agri-processing</p>
            </div>

            {/* Feasibility Breakdown */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-space-sm">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Feasibility Dimension Breakdown</h3>
                  <span className="font-label-sm text-label-sm text-secondary uppercase font-semibold">8.5 km Catchment Radius</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-space-lg gap-y-space-md pt-space-xs">
                  {[
                    { label: 'Demand Gap (Unmet)', value: 82, color: 'bg-secondary', note: 'Strong unserved demand' },
                    { label: 'Competitor Saturation', value: 18, color: 'bg-primary', note: 'Very Low — 1 unit/8km', invert: true },
                    { label: 'Supply Chain Access', value: 71, color: 'bg-tertiary', note: 'FPO within 6.2 km' },
                    { label: 'Infrastructure Readiness', value: 64, color: 'bg-primary-container', note: 'Grid + road adequate' },
                    { label: 'Seasonal Stability', value: 58, color: 'bg-surface-tint', note: 'Moderate monsoon risk' },
                    { label: 'Scheme Accessibility', value: 91, color: 'bg-secondary', note: 'PMEGP + Mudra eligible' },
                  ].map(metric => (
                    <div key={metric.label} className="flex flex-col gap-1">
                      <div className="flex justify-between items-center text-body-sm font-body-sm">
                        <span className="text-on-surface font-semibold flex items-center gap-1.5">
                          <span className={`w-2 h-2 rounded-full ${metric.color}`}></span>
                          {metric.label}
                        </span>
                        <span className="text-on-surface-variant font-label-md text-label-md">{metric.value}%</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-surface-container">
                        <div className={`h-2 rounded-full ${metric.color}`} style={{ width: `${metric.value}%` }}></div>
                      </div>
                      <span className="font-body-sm text-body-sm text-on-surface-variant text-[11px]">{metric.note}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="px-space-lg pb-space-xl grid grid-cols-1 xl:grid-cols-12 gap-space-lg">
        {/* LEFT COLUMN */}
        <div className="xl:col-span-7 flex flex-col gap-space-lg">

          {/* Demand Estimation */}
          <div className="p-space-lg bg-surface-container-lowest rounded-xl shadow-sm flex flex-col gap-space-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-secondary text-[20px]">query_stats</span>
                <h2 className="font-headline-md text-headline-md text-on-surface">Local Demand Estimation</h2>
              </div>
              <span className="font-label-sm text-label-sm text-on-surface-variant font-semibold">Census + Mandi Feed</span>
            </div>

            {/* Demand Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm">
              {[
                { label: 'Daily Demand', value: '3,800 kg', sub: 'Across 14 Panchayats', icon: 'shopping_basket', trend: '+8% YoY' },
                { label: 'Organized Supply', value: '1,440 kg', sub: '38% currently met', icon: 'local_shipping', trend: '2 units active' },
                { label: 'Unmet Gap', value: '2,360 kg', sub: '62% addressable', icon: 'trending_up', trend: 'High opportunity' },
              ].map(card => (
                <div key={card.label} className="p-space-md bg-surface-container-low rounded-lg flex flex-col">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm uppercase text-on-surface-variant">{card.label}</span>
                    <span className="material-symbols-outlined text-secondary text-[18px]">{card.icon}</span>
                  </div>
                  <span className="font-headline-lg text-headline-lg text-on-surface font-bold mt-space-xs">{card.value}</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">{card.sub}</span>
                  <span className="font-label-sm text-label-sm text-secondary font-semibold mt-1">{card.trend}</span>
                </div>
              ))}
            </div>

            {/* Demand by Product Category */}
            <div className="p-space-md bg-surface-container rounded-lg">
              <span className="font-label-md text-label-md text-on-surface font-semibold mb-space-sm block">Demand by Product Category (Daily)</span>
              <div className="flex flex-col gap-space-sm">
                {[
                  { name: 'Wheat Flour (Atta)', demand: '1,200 kg', pct: 32, met: 25, color: 'bg-primary' },
                  { name: 'Rice & Pulses', demand: '900 kg', pct: 24, met: 40, color: 'bg-secondary' },
                  { name: 'Spices & Masala', demand: '450 kg', pct: 12, met: 15, color: 'bg-tertiary' },
                  { name: 'Dairy Products', demand: '650 kg', pct: 17, met: 55, color: 'bg-primary-container' },
                  { name: 'Oil & Ghee', demand: '350 kg', pct: 9, met: 60, color: 'bg-surface-tint' },
                  { name: 'Others', demand: '250 kg', pct: 6, met: 30, color: 'bg-outline' },
                ].map(cat => (
                  <div key={cat.name} className="flex items-center gap-space-md">
                    <span className="font-body-sm text-body-sm text-on-surface w-36 shrink-0">{cat.name}</span>
                    <div className="flex-1">
                      <div className="w-full h-3 rounded-full bg-surface-container-high overflow-hidden flex">
                        <div className={`${cat.color} h-full`} style={{ width: `${cat.pct}%` }}></div>
                      </div>
                    </div>
                    <span className="font-label-sm text-label-sm text-on-surface w-16 text-right">{cat.demand}</span>
                    <span className={`font-label-sm text-label-sm w-16 text-right font-bold ${cat.met < 30 ? 'text-error' : cat.met < 50 ? 'text-on-surface-variant' : 'text-secondary'}`}>{cat.met}% met</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Price Intelligence */}
          <div className="p-space-lg bg-surface-container-lowest rounded-xl shadow-sm flex flex-col gap-space-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-primary text-[20px]">currency_rupee</span>
                <h2 className="font-headline-md text-headline-md text-on-surface">Mandi Price Intelligence</h2>
              </div>
              <span className="font-label-sm text-label-sm px-space-xs py-0.5 rounded bg-secondary-container text-on-secondary-container font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
                e-NAM Live
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-surface-container-high">
                    <th className="font-label-sm text-label-sm uppercase text-on-surface-variant py-space-sm pr-space-md">Commodity</th>
                    <th className="font-label-sm text-label-sm uppercase text-on-surface-variant py-space-sm pr-space-md">Farmgate (₹/kg)</th>
                    <th className="font-label-sm text-label-sm uppercase text-on-surface-variant py-space-sm pr-space-md">Mandi Rate</th>
                    <th className="font-label-sm text-label-sm uppercase text-on-surface-variant py-space-sm pr-space-md">Retail Rate</th>
                    <th className="font-label-sm text-label-sm uppercase text-on-surface-variant py-space-sm">Your Spread</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { commodity: 'Wheat', farmgate: '₹22', mandi: '₹26', retail: '₹34', spread: '₹8/kg', positive: true },
                    { commodity: 'Rice (Basmati)', farmgate: '₹38', mandi: '₹45', retail: '₹62', spread: '₹17/kg', positive: true },
                    { commodity: 'Mustard Oil', farmgate: '₹145', mandi: '₹165', retail: '₹195', spread: '₹30/L', positive: true },
                    { commodity: 'Turmeric', farmgate: '₹85', mandi: '₹110', retail: '₹160', spread: '₹50/kg', positive: true },
                    { commodity: 'Milk (Raw)', farmgate: '₹34', mandi: '₹38', retail: '₹54', spread: '₹16/L', positive: true },
                  ].map(row => (
                    <tr key={row.commodity} className="border-b border-surface-container-high/50 hover:bg-surface-container-low transition-colors">
                      <td className="font-body-md text-body-md text-on-surface font-semibold py-space-sm pr-space-md">{row.commodity}</td>
                      <td className="font-body-md text-body-md text-on-surface-variant py-space-sm pr-space-md">{row.farmgate}</td>
                      <td className="font-body-md text-body-md text-on-surface py-space-sm pr-space-md">{row.mandi}</td>
                      <td className="font-body-md text-body-md text-on-surface font-semibold py-space-sm pr-space-md">{row.retail}</td>
                      <td className="py-space-sm">
                        <span className="inline-flex items-center gap-0.5 px-space-xs py-0.5 rounded bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm font-bold">
                          <span className="material-symbols-outlined text-[12px]">arrow_upward</span>
                          {row.spread}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-space-sm rounded-lg bg-surface-container flex items-center gap-space-sm">
              <span className="material-symbols-outlined text-primary text-[18px]">lightbulb</span>
              <p className="font-body-sm text-body-sm text-on-surface">
                <strong className="text-primary">Insight:</strong> Value-added processing (wheat → atta, milk → paneer) yields 28-45% higher margins than raw commodity trading. Source: <span className="text-secondary font-semibold">Agmarknet, Bilaspur APMC</span>
              </p>
            </div>
          </div>

          {/* Seasonal Demand Model */}
          <div className="p-space-lg bg-surface-container-lowest rounded-xl shadow-sm flex flex-col gap-space-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-tertiary text-[20px]">calendar_month</span>
                <h2 className="font-headline-md text-headline-md text-on-surface">Seasonal Demand Model</h2>
              </div>
              <span className="font-label-sm text-label-sm text-on-surface-variant font-semibold">12-Month Projection</span>
            </div>

            {/* SVG Line Chart */}
            <div className="p-space-md bg-surface-container rounded-lg">
              <div className="flex items-center gap-space-md mb-space-sm font-label-sm text-label-sm">
                <span className="flex items-center gap-1 text-on-surface-variant"><span className="w-2.5 h-0.5 bg-primary inline-block rounded"></span> Demand Index</span>
                <span className="flex items-center gap-1 text-on-surface-variant"><span className="w-2.5 h-0.5 bg-secondary inline-block rounded"></span> Your Capacity</span>
                <span className="flex items-center gap-1 text-on-surface-variant"><span className="w-2.5 h-0.5 bg-error inline-block rounded border-dashed"></span> Risk Periods</span>
              </div>
              <div className="w-full h-40">
                <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 480 120">
                  {/* Grid lines */}
                  {[0, 30, 60, 90].map(y => (
                    <line key={y} stroke="#eaedff" strokeWidth="1" x1="0" x2="480" y1={y} y2={y} />
                  ))}
                  {/* Monsoon risk zone */}
                  <rect fill="#ba1a1a" fillOpacity="0.06" height="120" rx="4" width="120" x="240" y="0" />
                  <text fill="#ba1a1a" fontFamily="Plus Jakarta Sans" fontSize="8" fontWeight="600" x="280" y="12">Monsoon Risk</text>
                  {/* Festival peak zone */}
                  <rect fill="#006a61" fillOpacity="0.06" height="120" rx="4" width="80" x="360" y="0" />
                  <text fill="#006a61" fontFamily="Plus Jakarta Sans" fontSize="8" fontWeight="600" x="374" y="12">Festival Peak</text>
                  {/* Demand line */}
                  <path d="M0,70 L40,65 L80,60 L120,55 L160,50 L200,45 L240,65 L280,75 L320,60 L360,30 L400,20 L440,25 L480,35" fill="none" stroke="#003b1b" strokeLinecap="round" strokeWidth="2.5" />
                  {/* Capacity line */}
                  <path d="M0,55 L480,55" fill="none" stroke="#006a61" strokeDasharray="6,4" strokeWidth="1.5" />
                  <text fill="#006a61" fontFamily="Plus Jakarta Sans" fontSize="8" x="400" y="50">500 kg/day</text>
                  {/* Peak dots */}
                  <circle cx="360" cy="30" fill="#003b1b" r="4" stroke="#fff" strokeWidth="2" />
                  <circle cx="400" cy="20" fill="#003b1b" r="4" stroke="#fff" strokeWidth="2" />
                </svg>
              </div>
              <div className="flex justify-between px-1 font-label-sm text-label-sm text-on-surface-variant mt-1">
                {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map(m => (
                  <span key={m}>{m}</span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm">
              {[
                { period: 'Rabi Harvest (Jan–Mar)', impact: '+15% surplus grain supply', icon: 'grass', color: 'text-primary' },
                { period: 'Monsoon (Jul–Sep)', impact: '−20% logistics disruption', icon: 'thunderstorm', color: 'text-error' },
                { period: 'Festival Season (Oct–Nov)', impact: '+40% demand spike', icon: 'celebration', color: 'text-secondary' },
              ].map(season => (
                <div key={season.period} className="p-space-sm bg-surface-container-low rounded-lg flex items-start gap-space-xs">
                  <span className={`material-symbols-outlined ${season.color} text-[20px] shrink-0 mt-0.5`}>{season.icon}</span>
                  <div>
                    <span className="font-label-md text-label-md text-on-surface font-semibold block">{season.period}</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">{season.impact}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="xl:col-span-5 flex flex-col gap-space-lg">

          {/* Competitor Density Map */}
          <div className="p-space-lg bg-surface-container-lowest rounded-xl shadow-sm flex flex-col gap-space-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-primary text-[20px]">location_on</span>
                <h2 className="font-headline-md text-headline-md text-on-surface">Competitor Density Map</h2>
              </div>
              <span className="font-label-sm text-label-sm px-space-xs py-0.5 rounded bg-primary-fixed text-on-primary-fixed font-bold">Low Saturation</span>
            </div>

            {/* Map Visualization */}
            <div className="relative w-full h-64 rounded-xl overflow-hidden bg-surface-container">
              <div className="w-full h-full bg-gradient-to-br from-primary/8 via-surface-container to-secondary/8 flex flex-col justify-between p-space-sm">
                {/* Concentric circles visualization */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 256">
                  <circle cx="200" cy="128" fill="none" r="100" stroke="#003b1b" strokeDasharray="4,4" strokeOpacity="0.2" strokeWidth="1" />
                  <circle cx="200" cy="128" fill="none" r="60" stroke="#006a61" strokeDasharray="4,4" strokeOpacity="0.3" strokeWidth="1" />
                  <circle cx="200" cy="128" fill="none" r="30" stroke="#006a61" strokeOpacity="0.4" strokeWidth="1" />
                  {/* Your location */}
                  <circle cx="200" cy="128" fill="#003b1b" r="6" stroke="#fff" strokeWidth="2" />
                  <circle cx="200" cy="128" fill="#003b1b" fillOpacity="0.2" r="12">
                    <animate attributeName="r" dur="2s" repeatCount="indefinite" values="12;18;12" />
                    <animate attributeName="opacity" dur="2s" repeatCount="indefinite" values="0.3;0.05;0.3" />
                  </circle>
                  {/* Competitor */}
                  <circle cx="330" cy="95" fill="#ba1a1a" r="5" stroke="#fff" strokeWidth="1.5" />
                  <text fill="#ba1a1a" fontFamily="Plus Jakarta Sans" fontSize="8" fontWeight="600" x="340" y="98">Milak BMC</text>
                  {/* FPO */}
                  <circle cx="155" cy="85" fill="#006a61" r="5" stroke="#fff" strokeWidth="1.5" />
                  <text fill="#006a61" fontFamily="Plus Jakarta Sans" fontSize="8" fontWeight="600" x="110" y="82">Bilaspur FPO</text>
                  {/* NH-87 */}
                  <line stroke="#004c75" strokeDasharray="8,4" strokeOpacity="0.5" strokeWidth="2" x1="0" x2="400" y1="200" y2="170" />
                  <text fill="#004c75" fontFamily="Plus Jakarta Sans" fontSize="9" fontWeight="700" x="320" y="165">NH-87</text>
                  {/* Labels */}
                  <text fill="#717970" fontFamily="Plus Jakarta Sans" fontSize="8" x="250" y="128">5 km</text>
                  <text fill="#717970" fontFamily="Plus Jakarta Sans" fontSize="8" x="290" y="128">8.5 km</text>
                </svg>
                <div className="relative z-10 flex justify-between items-start">
                  <div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded bg-surface-container-lowest/90 backdrop-blur-md shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    <span className="font-label-sm text-label-sm text-on-surface font-bold">Your Unit (Bilaspur)</span>
                  </div>
                  <span className="px-space-xs py-0.5 bg-surface-container-lowest/90 backdrop-blur text-on-surface-variant font-label-sm text-label-sm rounded shadow-sm">
                    Radius: 8.5 km
                  </span>
                </div>
              </div>
            </div>

            {/* Competitor List */}
            <div className="flex flex-col gap-space-sm">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Competitor Profiles (8.5 km Radius)</span>
              {[
                { name: 'Milak Agri Hub', dist: '8.4 km', type: 'Cold Storage + Processing', capacity: '1,200 kg/day', threat: 'Low', threatColor: 'text-secondary bg-secondary-container' },
                { name: 'Rampur Flour Mill', dist: '12.1 km', type: 'Wheat Milling Only', capacity: '800 kg/day', threat: 'Negligible', threatColor: 'text-on-surface-variant bg-surface-container' },
              ].map(comp => (
                <div key={comp.name} className="p-space-sm bg-surface-container-low rounded-lg flex items-center justify-between">
                  <div className="flex items-center gap-space-sm">
                    <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center">
                      <span className="material-symbols-outlined text-on-surface-variant text-[18px]">store</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-space-xs">
                        <span className="font-label-md text-label-md text-on-surface font-semibold">{comp.name}</span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">({comp.dist})</span>
                      </div>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">{comp.type} • {comp.capacity}</span>
                    </div>
                  </div>
                  <span className={`font-label-sm text-label-sm px-space-xs py-0.5 rounded font-semibold ${comp.threatColor}`}>{comp.threat}</span>
                </div>
              ))}
              <div className="p-space-sm rounded-lg bg-primary-fixed/30 flex items-center gap-space-sm">
                <span className="material-symbols-outlined text-primary text-[18px]">verified</span>
                <span className="font-body-sm text-body-sm text-on-surface"><strong className="text-primary">Verdict:</strong> Extremely low competitor density. Nearest direct competitor is 8.4 km away — high village aggregation exclusivity.</span>
              </div>
            </div>
          </div>

          {/* Supply Chain Availability */}
          <div className="p-space-lg bg-surface-container-lowest rounded-xl shadow-sm flex flex-col gap-space-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-secondary text-[20px]">local_shipping</span>
                <h2 className="font-headline-md text-headline-md text-on-surface">Supply Chain Assessment</h2>
              </div>
            </div>
            <div className="flex flex-col gap-space-sm">
              {[
                { source: 'Bilaspur FPO (Wheat)', distance: '6.2 km', reliability: 95, cost: '₹22/kg', icon: 'agriculture', status: 'Verified' },
                { source: 'Rampur APMC Mandi', distance: '14 km', reliability: 88, cost: 'Variable', icon: 'store', status: 'Active' },
                { source: 'Packaging Supplier (Bareilly)', distance: '45 km', reliability: 76, cost: '₹2.5/unit', icon: 'inventory_2', status: 'Active' },
                { source: 'Diesel / Power (Local)', distance: '3 km', reliability: 60, cost: '₹95/L', icon: 'bolt', status: 'Risk' },
              ].map(supply => (
                <div key={supply.source} className="p-space-sm bg-surface-container-low rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-on-surface-variant text-[18px]">{supply.icon}</span>
                      <span className="font-label-md text-label-md text-on-surface font-semibold">{supply.source}</span>
                    </div>
                    <span className={`font-label-sm text-label-sm px-space-xs py-0.5 rounded font-semibold ${
                      supply.status === 'Verified' ? 'bg-secondary-container text-on-secondary-container' :
                      supply.status === 'Risk' ? 'bg-error-container text-on-error-container' :
                      'bg-surface-container-high text-on-surface-variant'
                    }`}>{supply.status}</span>
                  </div>
                  <div className="flex items-center gap-space-md font-body-sm text-body-sm text-on-surface-variant">
                    <span>{supply.distance}</span>
                    <span>•</span>
                    <span>Cost: {supply.cost}</span>
                    <span>•</span>
                    <span>Reliability: <strong className={supply.reliability >= 80 ? 'text-secondary' : supply.reliability >= 60 ? 'text-on-surface' : 'text-error'}>{supply.reliability}%</strong></span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Infrastructure Risk Flags */}
          <div className="p-space-lg bg-surface-container-lowest rounded-xl shadow-sm flex flex-col gap-space-md">
            <div className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-error text-[20px]">warning</span>
              <h2 className="font-headline-md text-headline-md text-on-surface">Infrastructure Risk Flags</h2>
            </div>
            <div className="flex flex-col gap-space-sm">
              {[
                { flag: 'Power Grid Reliability', detail: 'Average 4-6 hours daily outage in summer. Solar + diesel backup recommended.', severity: 'Medium', sevColor: 'bg-surface-container-high text-on-surface-variant', icon: 'bolt' },
                { flag: 'Monsoon Road Access', detail: 'Kharif-season flooding disrupts NH-87 link road 15-20 days/year.', severity: 'Medium', sevColor: 'bg-surface-container-high text-on-surface-variant', icon: 'flood' },
                { flag: 'Cold Chain Continuity', detail: 'No public cold storage within 10 km — your unit fills a critical gap.', severity: 'Opportunity', sevColor: 'bg-secondary-container text-on-secondary-container', icon: 'ac_unit' },
                { flag: 'Internet Connectivity', detail: '4G coverage adequate. WhatsApp channel operates smoothly.', severity: 'Low', sevColor: 'bg-surface-container text-on-surface-variant', icon: 'wifi' },
              ].map(risk => (
                <div key={risk.flag} className="p-space-sm bg-surface-container-low rounded-lg flex items-start gap-space-sm">
                  <span className="material-symbols-outlined text-on-surface-variant text-[20px] shrink-0 mt-0.5">{risk.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-label-md text-label-md text-on-surface font-semibold">{risk.flag}</span>
                      <span className={`font-label-sm text-label-sm px-space-xs py-0.5 rounded font-semibold ${risk.sevColor}`}>{risk.severity}</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">{risk.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
