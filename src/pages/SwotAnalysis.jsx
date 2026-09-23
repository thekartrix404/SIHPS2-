import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

export default function SwotAnalysis() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col w-full">
      {/* Journey Tracker Rail */}
      <div className="w-full bg-surface-container-low px-space-lg py-space-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between overflow-x-auto text-xs font-label-sm py-1">
          {[
            { num: '✓', label: t('stage1', '1. Discover'), done: true, path: '/' },
            { num: '✓', label: t('stage2', '2. Validate'), done: true, path: '/swot-analysis' },
            { num: '3', label: t('stage3', '3. Feasibility (Market)'), done: false, activeLink: true, path: '/market-analysis' },
            { num: '4', label: 'SWOT Analysis', active: true },
            { num: '5', label: t('stage4', 'Financial Planner') },
            { num: '6', label: 'Action Plan' },
            { num: '7', label: t('stage6', 'Connect') },
            { num: '8', label: t('stage7', 'Franchise / Scale') },
          ].map((step, i, arr) => (
            <div key={i} className="flex items-center gap-space-sm shrink-0">
              {i > 0 && <div className={`h-0.5 w-6 shrink-0 ${step.done || step.active ? (step.active ? 'bg-secondary' : 'bg-primary-container') : 'bg-surface-container-highest'}`}></div>}
              {step.path ? (
                <Link to={step.path} className="flex items-center gap-1.5 hover:text-primary transition-colors">
                  <span className={`flex items-center justify-center w-5 h-5 rounded-full font-bold text-[10px] ${
                    step.active ? 'bg-secondary text-on-secondary shadow-sm' :
                    step.done ? 'bg-primary-container text-on-primary' :
                    step.activeLink ? 'bg-secondary-container text-on-secondary-container ring-1 ring-secondary' :
                    'bg-surface-container-high text-on-surface-variant'
                  }`}>{step.num}</span>
                  <span className={`font-label-md text-label-md ${step.active ? 'text-secondary font-bold' : step.activeLink ? 'text-secondary font-semibold hover:underline' : 'text-on-surface-variant'}`}>{step.label}</span>
                </Link>
              ) : (
                <div className="flex items-center gap-1.5">
                  <span className={`flex items-center justify-center w-5 h-5 rounded-full font-bold text-[10px] ${
                    step.active ? 'bg-secondary text-on-secondary shadow-sm' :
                    'bg-surface-container-high text-on-surface-variant'
                  }`}>{step.num}</span>
                  <span className={`font-label-md text-label-md ${step.active ? 'text-secondary font-bold' : 'text-on-surface-variant'}`}>{step.label}</span>
                </div>
              )}
              {step.active && <span className="px-space-xs py-0.5 rounded-full bg-secondary-container text-on-secondary-container text-[10px] uppercase font-bold">Active</span>}
            </div>
          ))}
        </div>
      </div>

      <div className="w-full px-space-lg py-space-md max-w-7xl mx-auto flex flex-col gap-space-lg">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
          <div className="flex flex-col gap-space-xs">
            <div className="flex items-center gap-space-xs text-on-surface-variant font-label-md text-label-md">
              <Link to="/" className="hover:text-primary cursor-pointer">{t('brandName', 'BizOrbit')} {t('navDashboard', 'Dashboard')}</Link>
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              <Link to="/market-analysis" className="hover:text-primary cursor-pointer">{t('navMarket', 'Market Analysis')}</Link>
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              <span className="text-primary font-semibold">{t('navSwot', 'SWOT Analytics')}</span>
            </div>
            <div className="flex items-center gap-space-sm flex-wrap">
              <h1 className="font-headline-xl text-headline-xl text-primary tracking-tight">{t('swotTitle', 'AI-Powered SWOT Analysis & Visual Intelligence')}</h1>
              <span className="inline-flex items-center gap-1 px-space-sm py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm">
                <span className="material-symbols-outlined text-[14px]">verified</span>
                RAG-Grounded
              </span>
              <span className="inline-flex items-center gap-1 px-space-sm py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
                Live Telemetry Active
              </span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl">
              {t('swotSub', 'Multi-dimensional quantitative synthesis evaluating local market telemetry, competitor geofencing, seasonal indexes, and MSME debt service benchmarks.')}
            </p>
          </div>
          <div className="flex items-center gap-space-sm shrink-0">
            <button className="flex items-center gap-space-xs px-space-md py-space-sm rounded-lg bg-surface-container-lowest text-on-surface hover:bg-surface-container shadow-sm transition-all font-label-lg text-label-lg">
              <span className="material-symbols-outlined text-[18px] text-secondary">visibility</span>
              <span>{t('viewFeasibilityReport', 'View Feasibility Report')}</span>
            </button>
            <button className="flex items-center gap-space-xs px-space-md py-space-sm rounded-lg bg-surface-container-lowest text-on-surface hover:bg-surface-container shadow-sm transition-all font-label-lg text-label-lg">
              <span className="material-symbols-outlined text-[18px] text-primary">download</span>
              <span>{t('exportDossierPdf', 'Export Dossier PDF')}</span>
            </button>
          </div>
        </div>

        {/* Business Context Summary Bar */}
        <div className="w-full bg-surface-container-lowest rounded-xl shadow-sm p-space-md flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-space-md">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-space-md flex-1">
            <div className="flex flex-col">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">{t('targetEnterprise', 'Target Enterprise')}</span>
              <div className="flex items-center gap-space-xs mt-0.5">
                <span className="material-symbols-outlined text-primary text-[18px]">precision_manufacturing</span>
                <span className="font-headline-sm text-headline-sm text-on-surface font-semibold truncate">{t('userTitle', 'Agri-Processing Unit')}</span>
              </div>
              <span className="font-body-sm text-body-sm text-on-surface-variant">{t('locationTag', 'Bilaspur Block, Rampur (UP)')}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">{t('availableMargin', 'Available Margin')}</span>
              <div className="flex items-center gap-space-xs mt-0.5">
                <span className="material-symbols-outlined text-secondary text-[18px]">account_balance_wallet</span>
                <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">₹1,00,000</span>
              </div>
              <span className="font-body-sm text-body-sm text-on-surface-variant">{t('ownEquity', 'Self-Financing Equity (Liquid)')}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">{t('enterpriseStatus', 'Enterprise Status')}</span>
              <div className="flex items-center gap-space-xs mt-0.5">
                <span className="material-symbols-outlined text-secondary text-[18px]">verified_user</span>
                <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Operating 1.5 Yrs</span>
              </div>
              <span className="font-body-sm text-body-sm text-on-surface-variant">Udyam Registered</span>
            </div>
            <div className="flex flex-col">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">{t('evaluationReadiness', 'Evaluation Readiness')}</span>
              <div className="flex items-center gap-space-xs mt-1">
                <span className="inline-flex items-center gap-1 px-space-xs py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                  Opp: 74%
                </span>
                <span className="inline-flex items-center gap-1 px-space-xs py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  Readiness: 84%
                </span>
              </div>
              <span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Bankable Profile Rank: Tier-1</span>
            </div>
          </div>
        </div>

        {/* RADAR CHART & GAUGES */}
        <div className="w-full bg-surface-container-lowest rounded-xl shadow-md p-space-lg relative overflow-hidden border border-outline-variant/30">
          <div className="flex flex-col gap-space-md">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm pb-space-sm border-b border-surface-container-high">
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-secondary text-[24px]">radar</span>
                <div>
                  <h2 className="font-headline-md text-headline-md text-on-surface font-bold">{t('strategicPosture', 'Enterprise Strategic Posture & Factor Intensity')}</h2>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">Benchmarked against agri-processing enterprises in Rampur District</span>
                </div>
              </div>
              <div className="flex items-center gap-space-sm shrink-0">
                <span className="flex items-center gap-1.5 font-label-sm text-label-sm text-on-surface"><span className="w-3 h-3 rounded-sm bg-primary inline-block"></span> {t('yourScore', 'Your Score')}</span>
                <span className="flex items-center gap-1.5 font-label-sm text-label-sm text-on-surface-variant"><span className="w-3 h-3 rounded-sm bg-outline-variant/60 inline-block border border-dashed border-outline"></span> {t('districtBenchmark', 'District Benchmark')}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
              {/* Radar Chart */}
              <div className="lg:col-span-6 flex flex-col items-center justify-center p-space-sm bg-surface-container-lowest rounded-xl">
                <div className="relative w-full max-w-[380px] aspect-square flex items-center justify-center">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 320 320">
                    <defs>
                      <radialGradient cx="50%" cy="50%" id="radarGlow" r="50%">
                        <stop offset="0%" stopColor="#006a61" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#003b1b" stopOpacity="0.03" />
                      </radialGradient>
                      <linearGradient id="polyGrad" x1="0%" x2="100%" y1="0%" y2="100%">
                        <stop offset="0%" stopColor="#14532d" stopOpacity="0.55" />
                        <stop offset="100%" stopColor="#006a61" stopOpacity="0.35" />
                      </linearGradient>
                    </defs>
                    {/* Grid */}
                    <polygon fill="none" points="160,50 270,160 160,270 50,160" stroke="#dae2fd" strokeWidth="1" />
                    <polygon fill="none" points="160,77.5 242.5,160 160,242.5 77.5,160" stroke="#eaedff" strokeWidth="1" />
                    <polygon fill="none" points="160,105 215,160 160,215 105,160" stroke="#eaedff" strokeWidth="1" />
                    <polygon fill="none" points="160,132.5 187.5,160 160,187.5 132.5,160" stroke="#eaedff" strokeWidth="1" />
                    {/* Axes */}
                    <line stroke="#c0c9be" strokeDasharray="3,3" strokeWidth="1" x1="160" x2="160" y1="35" y2="285" />
                    <line stroke="#c0c9be" strokeDasharray="3,3" strokeWidth="1" x1="35" x2="285" y1="160" y2="160" />
                    {/* Scale Labels */}
                    <text fill="#717970" fontFamily="Plus Jakarta Sans" fontSize="9" x="164" y="62">100%</text>
                    <text fill="#717970" fontFamily="Plus Jakarta Sans" fontSize="9" x="164" y="90">75%</text>
                    <text fill="#717970" fontFamily="Plus Jakarta Sans" fontSize="9" x="164" y="117">50%</text>
                    <text fill="#717970" fontFamily="Plus Jakarta Sans" fontSize="9" x="164" y="145">25%</text>
                    {/* Benchmark Polygon */}
                    <polygon fill="none" points="160,94 237,160 160,220.5 88.5,160" stroke="#717970" strokeDasharray="4,4" strokeWidth="1.5" />
                    {/* Your Enterprise Polygon */}
                    <polygon fill="url(#polyGrad)" points="160,63.2 230.4,160 160,260.1 102.8,160" stroke="#003b1b" strokeWidth="2.5" />
                    {/* Vertices */}
                    <circle cx="160" cy="63.2" fill="#003b1b" r="5" stroke="#ffffff" strokeWidth="2" />
                    <circle cx="230.4" cy="160" fill="#ba1a1a" r="5" stroke="#ffffff" strokeWidth="2" />
                    <circle cx="160" cy="260.1" fill="#006a61" r="5" stroke="#ffffff" strokeWidth="2" />
                    <circle cx="102.8" cy="160" fill="#ba1a1a" r="5" stroke="#ffffff" strokeWidth="2" />
                    {/* Labels */}
                    <text fill="#003b1b" fontFamily="Plus Jakarta Sans" fontSize="11" fontWeight="700" textAnchor="middle" x="160" y="24">STRENGTHS: 88/100</text>
                    <text fill="#404941" fontFamily="Plus Jakarta Sans" fontSize="9" textAnchor="middle" x="160" y="36">Internal Assets & Retention</text>
                    <text fill="#404941" fontFamily="Plus Jakarta Sans" fontSize="11" fontWeight="700" textAnchor="start" x="242" y="156">WEAKNESSES: 64</text>
                    <text fill="#717970" fontFamily="Plus Jakarta Sans" fontSize="9" textAnchor="start" x="242" y="168">Idle Capacity</text>
                    <text fill="#006a61" fontFamily="Plus Jakarta Sans" fontSize="11" fontWeight="700" textAnchor="middle" x="160" y="295">OPPORTUNITIES: 91/100</text>
                    <text fill="#404941" fontFamily="Plus Jakarta Sans" fontSize="9" textAnchor="middle" x="160" y="307">Scheme Access & Value-Add</text>
                    <text fill="#ba1a1a" fontFamily="Plus Jakarta Sans" fontSize="11" fontWeight="700" textAnchor="end" x="88" y="156">THREATS: 52</text>
                    <text fill="#717970" fontFamily="Plus Jakarta Sans" fontSize="9" textAnchor="end" x="88" y="168">Seasonal & Fuel</text>
                  </svg>
                </div>
                <div className="mt-2 text-center">
                  <span className="inline-flex items-center gap-1 font-body-sm text-body-sm text-on-surface-variant">
                    <span className="material-symbols-outlined text-[15px] text-primary">insights</span>
                    Strategic Stance: <strong className="text-primary font-semibold">Aggressive Value-Addition & Market Capture</strong>
                  </span>
                </div>
              </div>

              {/* Gauges */}
              <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-space-sm">
                {/* Gauge 1 */}
                <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col items-center text-center justify-between shadow-xs">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">{t('strategicLeverage', 'Strategic Leverage')}</span>
                  <div className="relative w-28 h-28 my-1 flex items-center justify-center">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" fill="none" r="40" stroke="#dae2fd" strokeWidth="8" />
                      <circle cx="50" cy="50" fill="none" r="40" stroke="#14532d" strokeDasharray="251.2" strokeDashoffset="45.2" strokeLinecap="round" strokeWidth="8" />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="font-headline-lg text-headline-lg font-bold text-primary leading-none">82</span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">/100</span>
                    </div>
                  </div>
                  <div className="w-full">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm font-bold">High Growth Pos</span>
                    <p className="font-body-sm text-[11px] text-on-surface-variant mt-1">Top decile capability in local block</p>
                  </div>
                </div>

                {/* Gauge 2 */}
                <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col items-center text-center justify-between shadow-xs">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">{t('vulnerabilityIndex', 'Vulnerability Index')}</span>
                  <div className="relative w-28 h-28 my-1 flex items-center justify-center">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" fill="none" r="40" stroke="#dae2fd" strokeWidth="8" />
                      <circle cx="50" cy="50" fill="none" r="40" stroke="#006a61" strokeDasharray="251.2" strokeDashoffset="180.9" strokeLinecap="round" strokeWidth="8" />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="font-headline-lg text-headline-lg font-bold text-secondary leading-none">28%</span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">Low-Med</span>
                    </div>
                  </div>
                  <div className="w-full">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-bold">Buffer Insulated</span>
                    <p className="font-body-sm text-[11px] text-on-surface-variant mt-1">Controllable via value-add & solar</p>
                  </div>
                </div>

                {/* Gauge 3 */}
                <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col items-center text-center justify-between shadow-xs">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">{t('bankableRating', 'Bankable Rating')}</span>
                  <div className="my-2 flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full bg-primary-container text-on-primary flex items-center justify-center shadow-sm">
                      <span className="material-symbols-outlined text-[28px]">account_balance</span>
                    </div>
                    <span className="font-headline-sm text-headline-sm font-bold text-on-surface mt-1">Tier-1 MSME</span>
                    <div className="w-24 h-6 mt-1">
                      <svg className="w-full h-full" viewBox="0 0 100 24">
                        <path d="M0,18 L20,16 L40,19 L60,11 L80,7 L100,4" fill="none" stroke="#006a61" strokeLinecap="round" strokeWidth="2.5" />
                        <circle cx="100" cy="4" fill="#003b1b" r="3" />
                      </svg>
                    </div>
                  </div>
                  <div className="w-full">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm font-bold">PMEGP Fast-Track</span>
                    <p className="font-body-sm text-[11px] text-on-surface-variant mt-1">Approval probability 94%</p>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Synthesis */}
            <div className="p-space-md bg-surface-container-low rounded-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-space-sm border-l-4 border-primary">
              <div className="flex items-start gap-space-sm">
                <span className="material-symbols-outlined text-secondary text-[22px] shrink-0 mt-0.5">psychology</span>
                <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                  <strong className="text-primary font-semibold">Executive AI Synthesis:</strong> Your strong local buyer network (21 B2B accounts) and processing infrastructure are currently limited by <strong className="text-error">36% idle capacity</strong> and single-product reliance. Activating evening value-addition processing and onboarding 3 new highway buyers converts your vulnerability into a <strong className="text-secondary font-semibold">+₹28,000 monthly revenue surge</strong>.
                </p>
              </div>
              <div className="shrink-0">
                <span className="font-label-sm text-label-sm px-space-sm py-1 bg-surface-container-highest rounded-full text-on-surface font-semibold">PMEGP Term Loan ₹9.0L Pre-Qual</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 SWOT QUADRANTS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-lg">
          {/* STRENGTHS */}
          <div className="bg-surface-container-lowest rounded-xl shadow-md overflow-hidden flex flex-col border border-primary/20">
            <div className="bg-primary px-space-md py-space-sm flex items-center justify-between text-on-primary">
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-[20px]">verified</span>
                <h2 className="font-headline-sm text-headline-sm tracking-tight font-semibold">{t('swotStrengths', 'STRENGTHS')}</h2>
                <span className="font-label-sm text-label-sm opacity-80">(Internal Capital & Capabilities)</span>
              </div>
              <span className="bg-on-primary/20 px-space-xs py-0.5 rounded text-[11px] font-label-sm font-semibold">4 Factors</span>
            </div>
            <div className="p-space-md flex flex-col gap-space-md">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm p-space-sm bg-surface-container-low rounded-xl">
                <div className="flex flex-col items-center justify-center p-space-xs bg-surface-container-lowest rounded-lg border border-surface-container-high text-center">
                  <span className="font-label-sm text-label-sm font-bold text-on-surface uppercase">Buyer Retention</span>
                  <div className="relative w-24 h-24 my-2 flex items-center justify-center">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" fill="none" r="40" stroke="#eaedff" strokeWidth="9" />
                      <circle cx="50" cy="50" fill="none" r="40" stroke="#86f2e4" strokeDasharray="251.2" strokeDashoffset="0" strokeWidth="9" />
                      <circle cx="50" cy="50" fill="none" r="40" stroke="#003b1b" strokeDasharray="251.2" strokeDashoffset="20.1" strokeWidth="9" />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="font-headline-md text-headline-md font-bold text-primary leading-none">92%</span>
                      <span className="text-[9px] text-on-surface-variant uppercase font-semibold">Repeat B2B</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center p-space-sm bg-surface-container-lowest rounded-lg border border-surface-container-high">
                  <span className="font-label-sm text-label-sm font-bold text-on-surface uppercase mb-1">Asset & Supply Resilience</span>
                  {[
                    { label: 'Processing Equipment', value: '₹6.20L', pct: 88, color: 'bg-primary' },
                    { label: 'Supply Reliability', value: '98% Stable', pct: 98, color: 'bg-secondary' },
                    { label: 'Margin Equity Cushion', value: '₹1.00L', pct: 75, color: 'bg-primary-container' },
                  ].map(bar => (
                    <div key={bar.label} className="mb-1.5">
                      <div className="flex justify-between text-[11px] font-label-sm">
                        <span className="text-on-surface">{bar.label}</span>
                        <span className="font-bold text-primary">{bar.value}</span>
                      </div>
                      <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden mt-0.5">
                        <div className={`${bar.color} h-full rounded-full`} style={{ width: `${bar.pct}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-space-sm divide-y divide-surface-container-high/60">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-primary text-[18px]">storefront</span>
                    <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Established Local Commercial Base</span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface">21 verified B2B recurring commercial buyers across the Bilaspur block.</p>
                </div>
                <div className="pt-space-sm flex flex-col gap-1">
                  <div className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-primary text-[18px]">precision_manufacturing</span>
                    <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Operational Processing Infrastructure</span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface">800kg/day processing capacity with active FSSAI license and cold storage backup.</p>
                </div>
              </div>
            </div>
          </div>

          {/* WEAKNESSES */}
          <div className="bg-surface-container-lowest rounded-xl shadow-md overflow-hidden flex flex-col border border-surface-container-highest">
            <div className="bg-surface-container-highest px-space-md py-space-sm flex items-center justify-between text-on-surface">
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-on-surface-variant text-[20px]">warning</span>
                <h2 className="font-headline-sm text-headline-sm tracking-tight font-semibold">{t('swotWeaknesses', 'WEAKNESSES')}</h2>
                <span className="font-label-sm text-label-sm text-on-surface-variant">(Internal Bottlenecks)</span>
              </div>
              <span className="bg-surface-container px-space-xs py-0.5 rounded text-[11px] font-label-sm font-semibold">4 Gaps</span>
            </div>
            <div className="p-space-md flex flex-col gap-space-md">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm p-space-sm bg-surface-container-low rounded-xl">
                <div className="flex flex-col items-center justify-center p-space-xs bg-surface-container-lowest rounded-lg border border-surface-container-high text-center">
                  <span className="font-label-sm text-label-sm font-bold text-on-surface uppercase">Capacity Utilization Gap</span>
                  <div className="relative w-24 h-24 my-2 flex items-center justify-center">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" fill="none" r="40" stroke="#eaedff" strokeWidth="9" />
                      <circle cx="50" cy="50" fill="none" r="40" stroke="#14532d" strokeDasharray="251.2" strokeDashoffset="90.4" strokeWidth="9" />
                      <circle cx="50" cy="50" fill="none" r="40" stroke="#ba1a1a" strokeDasharray="251.2" strokeDashoffset="160.8" strokeWidth="9" />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="font-headline-md text-headline-md font-bold text-error leading-none">36%</span>
                      <span className="text-[9px] text-error font-bold uppercase">Idle</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-between p-space-sm bg-surface-container-lowest rounded-lg border border-surface-container-high">
                  <div>
                    <div className="flex justify-between text-[11px] font-label-sm mb-1">
                      <span className="font-bold text-on-surface uppercase">Product Revenue Split</span>
                      <span className="text-error font-bold">94% Vulnerable</span>
                    </div>
                    <div className="flex h-3 w-full rounded-full overflow-hidden">
                      <div className="bg-error h-full" style={{ width: '94%' }}></div>
                      <div className="bg-secondary h-full" style={{ width: '6%' }}></div>
                    </div>
                    <div className="flex justify-between text-[10px] text-on-surface-variant mt-1">
                      <span>Raw Processing (94%)</span>
                      <span>Value-Add (6%)</span>
                    </div>
                  </div>
                  <div className="mt-2 pt-2 border-t border-surface-container-high">
                    <div className="flex justify-between text-[11px] font-label-sm mb-0.5">
                      <span className="font-bold text-on-surface">Working Capital Buffer</span>
                      <span className="text-error font-bold">18 / 45 Days</span>
                    </div>
                    <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
                      <div className="bg-error h-full rounded-full" style={{ width: '40%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-space-sm divide-y divide-surface-container-high/60">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-error text-[18px]">hourglass_empty</span>
                    <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Underutilized Evening Capacity</span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface">300kg idle processing capacity every evening leaks ₹700+/day in amortized value.</p>
                  <div className="flex items-center gap-space-xs text-primary bg-primary-fixed/30 px-space-sm py-1 rounded">
                    <span className="material-symbols-outlined text-[16px]">arrow_circle_right</span>
                    <span className="font-label-md text-label-md font-semibold">Action: Launch evening value-addition processing line.</span>
                  </div>
                </div>
                <div className="pt-space-sm flex flex-col gap-1">
                  <div className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-error text-[18px]">receipt</span>
                    <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">No Digital Bookkeeping</span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface">Missing electronic GST/Udyam trail weakens formal bank appraisal.</p>
                  <div className="flex items-center gap-space-xs text-primary bg-primary-fixed/30 px-space-sm py-1 rounded">
                    <span className="material-symbols-outlined text-[16px]">arrow_circle_right</span>
                    <span className="font-label-md text-label-md font-semibold">Action: Onboard to BizOrbit billing engine.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* OPPORTUNITIES */}
          <div className="bg-surface-container-lowest rounded-xl shadow-md overflow-hidden flex flex-col border border-secondary/20">
            <div className="bg-secondary px-space-md py-space-sm flex items-center justify-between text-on-secondary">
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-[20px]">trending_up</span>
                <h2 className="font-headline-sm text-headline-sm tracking-tight font-semibold">{t('swotOpportunities', 'OPPORTUNITIES')}</h2>
                <span className="font-label-sm text-label-sm opacity-80">(External Growth Vectors)</span>
              </div>
              <span className="bg-on-secondary/20 px-space-xs py-0.5 rounded text-[11px] font-label-sm font-semibold">5 Vectors</span>
            </div>
            <div className="p-space-md flex flex-col gap-space-sm">
              {[
                { icon: 'alt_route', title: 'NH-87 Highway Corridor Expansion', desc: '8 verified eateries buy at ₹5/kg premium. Estimated +₹18,000/mo.', tag: '+₹5/kg Spread' },
                { icon: 'savings', title: 'PMEGP 25% Capital Subsidy Access', desc: 'Your profile pre-qualifies for ₹2.5L subsidy on ₹10L project outlay.', tag: '₹2.5L Subsidy' },
                { icon: 'agriculture', title: 'FPO Bulk Procurement Network', desc: 'Bilaspur FPO 6.2km away — group procurement saves 12% on raw material.', tag: '12% Savings' },
                { icon: 'solar_power', title: 'Solar Cold Chain Grant (MNRE)', desc: 'State subsidy for solar-backed cold storage — 40% capital cost covered.', tag: '40% Grant' },
                { icon: 'local_shipping', title: 'Mandi Direct Linkage via e-NAM', desc: 'Direct mandi listing eliminates middleman, adds ₹3-5/kg margin.', tag: 'e-NAM Ready' },
              ].map(item => (
                <div key={item.title} className="p-space-sm bg-surface-container-low rounded-lg flex items-start gap-space-sm hover:bg-surface-container transition-all">
                  <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">{item.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-space-xs">
                      <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">{item.title}</span>
                      <span className="px-space-xs py-0.5 rounded bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-bold shrink-0">{item.tag}</span>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* THREATS */}
          <div className="bg-surface-container-lowest rounded-xl shadow-md overflow-hidden flex flex-col border border-error/20">
            <div className="bg-error px-space-md py-space-sm flex items-center justify-between text-on-error">
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-[20px]">shield</span>
                <h2 className="font-headline-sm text-headline-sm tracking-tight font-semibold">{t('swotThreats', 'THREATS')}</h2>
                <span className="font-label-sm text-label-sm opacity-80">(External Risk Factors)</span>
              </div>
              <span className="bg-on-error/20 px-space-xs py-0.5 rounded text-[11px] font-label-sm font-semibold">4 Risks</span>
            </div>
            <div className="p-space-md flex flex-col gap-space-sm">
              {[
                { icon: 'thermostat', title: 'Seasonal Yield Variability', desc: 'Summer months reduce raw material availability by 20-30%. Pre-contracted procurement buffers needed.', severity: 'High', sevColor: 'text-error bg-error-container' },
                { icon: 'local_gas_station', title: 'Diesel & Power Cost Escalation', desc: 'Grid outages force generator reliance — ₹3,200/mo fuel overhead eats into margins.', severity: 'Medium', sevColor: 'text-on-surface-variant bg-surface-container-high' },
                { icon: 'groups', title: 'Middleman Poaching Risk', desc: 'Unorganized agents target high-yield farmers with cash advances, disrupting your supply chain.', severity: 'Medium', sevColor: 'text-on-surface-variant bg-surface-container-high' },
                { icon: 'flood', title: 'Monsoon Logistics Disruption', desc: 'Kharif season road flooding delays last-mile delivery 15-20 days annually.', severity: 'Low', sevColor: 'text-on-surface-variant bg-surface-container' },
              ].map(item => (
                <div key={item.title} className="p-space-sm bg-surface-container-low rounded-lg flex items-start gap-space-sm hover:bg-surface-container transition-all">
                  <span className="material-symbols-outlined text-error text-[20px] shrink-0 mt-0.5">{item.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-space-xs">
                      <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">{item.title}</span>
                      <span className={`px-space-xs py-0.5 rounded font-label-sm text-label-sm font-bold shrink-0 ${item.sevColor}`}>{item.severity}</span>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant mt-0.5">{item.desc}</p>
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
