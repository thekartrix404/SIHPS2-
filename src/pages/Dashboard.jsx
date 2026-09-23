import { Link } from 'react-router-dom'

export default function Dashboard() {
  return (
    <div className="flex flex-col w-full">
      {/* Top Progress & Context */}
      <div className="px-space-lg pt-space-lg pb-space-sm flex flex-col gap-space-md">
        {/* Breadcrumb & Sync */}
        <div className="flex flex-wrap items-center justify-between gap-space-sm">
          <div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
            <span className="hover:text-primary cursor-pointer uppercase tracking-wider">GraminMitra AI</span>
            <span>/</span>
            <span className="text-on-surface font-semibold uppercase tracking-wider">Executive Overview</span>
          </div>
          <div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm shadow-sm">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
            <span className="font-semibold text-on-surface">Live Mandi & Census Telemetry:</span>
            <span>Bilaspur Sub-Division, Synced 12m ago</span>
          </div>
        </div>

        {/* Executive Greeting */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-md pb-space-xs">
          <div>
            <h1 className="font-headline-xl text-headline-xl text-primary tracking-tight">Good morning, Suresh</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-0.5">
              Here is your hyper-local business health and regional growth overview for Bilaspur Block.
            </p>
          </div>
          <div className="flex items-center gap-space-sm">
            <button className="inline-flex items-center gap-space-xs px-space-md py-space-xs bg-surface-container-lowest text-on-surface rounded-lg font-label-lg text-label-lg shadow-sm hover:bg-surface-container transition-all">
              <span className="material-symbols-outlined text-[18px] text-secondary">tune</span>
              <span>District Filters</span>
            </button>
            <button className="inline-flex items-center gap-space-xs px-space-md py-space-xs bg-primary text-on-primary rounded-lg font-label-lg text-label-lg shadow-sm hover:bg-primary-container transition-all">
              <span className="material-symbols-outlined text-[18px]">download</span>
              <span>Export Monthly Dossier</span>
            </button>
          </div>
        </div>

        {/* Enterprise Maturity Track */}
        <div className="p-space-md bg-surface-container-lowest rounded-xl shadow-sm">
          <div className="flex items-center justify-between pb-space-xs text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
            <span>Enterprise Maturity Track</span>
            <span className="font-semibold text-primary">Stage 03 of 07 • Feasibility & Planning</span>
          </div>
          <div className="grid grid-cols-7 gap-space-xs items-center pt-space-xs">
            {[
              { stage: '1. Discover', path: '/' },
              { stage: '2. Validate (SWOT)', path: '/swot-analysis' },
              { stage: '3. Feasibility (Market)', path: '/market-analysis' },
            ].map((item, i) => (
              <Link key={i} to={item.path} className={`flex flex-col gap-1.5 transition-transform hover:scale-105 ${i < 2 ? 'opacity-80' : ''}`} title={`Go to ${item.stage}`}>
                <div className={`h-2${i === 2 ? '.5' : ''} rounded-full ${i === 2 ? 'bg-secondary shadow-sm relative flex items-center justify-end pr-1 ring-2 ring-secondary/30' : 'bg-primary-container flex items-center justify-end pr-0.5'}`}>
                  {i < 2 && <span className="material-symbols-outlined text-[10px] text-on-primary font-bold">check</span>}
                  {i === 2 && <span className="w-1.5 h-1.5 rounded-full bg-surface-container-lowest animate-ping"></span>}
                </div>
                <span className={`font-label-sm text-label-sm truncate ${i === 2 ? 'text-primary font-bold' : 'text-on-surface-variant'}`}>{item.stage}</span>
              </Link>
            ))}
            {['4. Finance', '5. Start & Scale', '6. Connect', '7. Franchise'].map((stage, i) => (
              <div key={i + 3} className="flex flex-col gap-1.5 opacity-40">
                <div className="h-2 rounded-full bg-surface-container-high"></div>
                <span className="font-label-sm text-label-sm text-on-surface-variant truncate">{stage}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hero: Business Health Scorecard */}
      <div className="px-space-lg pt-space-sm pb-space-md">
        <div className="p-space-lg bg-surface-container-lowest rounded-xl shadow-sm relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-secondary-fixed-dim/20 blur-3xl pointer-events-none"></div>
          <div className="relative z-10 flex flex-col xl:flex-row items-stretch gap-space-lg">
            {/* Circular Score */}
            <div className="xl:w-80 shrink-0 p-space-md bg-surface-container-low rounded-xl flex flex-col items-center justify-center text-center">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant mb-space-xs font-semibold">Business Feasibility Score</span>
              <div className="relative w-36 h-36 flex items-center justify-center my-space-xs">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
                  <circle className="stroke-surface-container-high" cx="60" cy="60" fill="none" r="50" strokeWidth="10" />
                  <circle className="stroke-primary-container" cx="60" cy="60" fill="none" r="50" strokeDasharray="314.15" strokeDashoffset="87.9" strokeLinecap="round" strokeWidth="10" />
                </svg>
                <div className="absolute flex flex-col items-center">
                  <span className="font-display-lg text-display-lg text-primary leading-none">72</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">OUT OF 100</span>
                </div>
              </div>
              <div className="inline-flex items-center gap-space-xs px-space-sm py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-md text-label-md mt-space-xs">
                <span className="material-symbols-outlined text-[16px]">trending_up</span>
                <span>Good Growth Foundation</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">Top 15% percentile in Rampur Agri-Processing Cluster</p>
            </div>

            {/* Metric Bars */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-space-sm">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Component Readiness Diagnostic</h3>
                  <span className="font-label-sm text-label-sm text-secondary uppercase font-semibold">NABARD & District MSME Benchmark</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-space-lg gap-y-space-md pt-space-xs">
                  {[
                    { label: 'Market Opportunity', value: 68, color: 'bg-secondary', note: '(Moderate)', link: '/market-analysis', linkText: 'View Market Gap →' },
                    { label: 'Financial Readiness', value: 84, color: 'bg-primary-container', note: '(Strong)' },
                    { label: 'Growth Potential', value: 79, color: 'bg-primary', note: '(High)' },
                    { label: 'Operational Efficiency', value: 71, color: 'bg-tertiary', note: '(Stable)' },
                  ].map(metric => (
                    <div key={metric.label} className="flex flex-col gap-1">
                      <div className="flex justify-between items-center text-body-sm font-body-sm">
                        <span className="text-on-surface font-semibold flex items-center gap-1.5">
                          <span className={`w-2 h-2 rounded-full ${metric.color}`}></span>
                          {metric.label}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-on-surface-variant font-label-md text-label-md">{metric.value}% {metric.note}</span>
                          {metric.link && (
                            <Link to={metric.link} className="text-secondary hover:underline font-semibold text-xs flex items-center gap-0.5">
                              {metric.linkText}
                            </Link>
                          )}
                        </div>
                      </div>
                      <div className="w-full h-2 rounded-full bg-surface-container">
                        <div className={`h-2 rounded-full ${metric.color}`} style={{ width: `${metric.value}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Insight Strip */}
              <div className="mt-space-md p-space-sm rounded-lg bg-surface-container flex items-center justify-between gap-space-md">
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-secondary text-[22px]">lightbulb</span>
                  <p className="font-body-md text-body-md text-on-surface">
                    <span className="font-semibold text-primary">Strategic Leverage:</span> Adding a value-addition line (flour milling) can lift your feasibility score to <strong className="text-secondary">86/100</strong>.
                  </p>
                </div>
                <Link to="/market-analysis" className="shrink-0 px-space-md py-1.5 rounded-lg bg-surface-container-lowest text-primary hover:bg-primary hover:text-on-primary transition-all font-label-md text-label-md shadow-sm inline-flex items-center gap-1 font-semibold">
                  <span>Explore Action Path</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions Hub */}
      <div className="px-space-lg pb-space-md">
        <div className="flex items-center justify-between mb-space-xs">
          <h2 className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">Executive Command Shortcuts</h2>
          <span className="font-label-sm text-label-sm text-on-surface-variant">Click to open advisory module</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-space-sm">
          {[
            { icon: 'query_stats', title: 'Market Analysis', desc: 'Demand gap & mandi prices', path: '/market-analysis', color: 'text-primary', hoverBg: 'group-hover:bg-primary group-hover:text-on-primary' },
            { icon: 'troubleshoot', title: 'Analyze My Business', desc: 'SWOT & business diagnosis', path: '/swot-analysis', color: 'text-secondary', hoverBg: 'group-hover:bg-secondary group-hover:text-on-secondary' },
            { icon: 'travel_explore', title: 'Find Opportunities', desc: 'Explore high-demand sectors', path: '/market-analysis', color: 'text-tertiary', hoverBg: 'group-hover:bg-tertiary group-hover:text-on-tertiary' },
            { icon: 'calculate', title: 'Plan Expansion', desc: 'Model CapEx & feasibility', path: '/market-analysis', color: 'text-primary-container', hoverBg: 'group-hover:bg-primary-container group-hover:text-on-primary' },
            { icon: 'handshake', title: 'Supply & Partners', desc: '3 verified B2B matches', path: '/market-analysis', color: 'text-secondary-container', hoverBg: 'group-hover:bg-secondary-container group-hover:text-on-secondary-container' },
          ].map(card => (
            <Link key={card.title} to={card.path} className="group p-space-md bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between cursor-pointer border border-transparent hover:border-primary/20">
              <div className="flex items-center justify-between mb-space-sm">
                <div className={`w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center ${card.color} ${card.hoverBg} transition-all`}>
                  <span className="material-symbols-outlined text-[22px]">{card.icon}</span>
                </div>
                <span className="material-symbols-outlined text-primary text-[18px] opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
              </div>
              <div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold group-hover:text-primary transition-colors">{card.title}</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">{card.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Primary Analytical Layout (60/40 Split) */}
      <div className="px-space-lg pb-space-xl grid grid-cols-1 xl:grid-cols-12 gap-space-lg">
        {/* LEFT COLUMN */}
        <div className="xl:col-span-7 flex flex-col gap-space-lg">
          {/* Enterprise Snapshot */}
          <div className="p-space-lg bg-surface-container-lowest rounded-xl shadow-sm flex flex-col gap-space-md">
            <div className="flex flex-wrap items-center justify-between gap-space-xs">
              <div>
                <div className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-secondary text-[20px]">store</span>
                  <h2 className="font-headline-md text-headline-md text-on-surface">Current Enterprise Snapshot</h2>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Suresh Agri-Processing & Cold Storage Unit • Reg: UP-RMP-2024-5821</p>
              </div>
              <span className="px-space-sm py-0.5 rounded-full bg-surface-container text-secondary font-label-sm text-label-sm font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                Operation Status: Active
              </span>
            </div>

            {/* 4 Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
              {/* Revenue */}
              <div className="p-space-md bg-surface-container-low rounded-lg flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="font-label-md text-label-md uppercase text-on-surface-variant">Monthly Gross Revenue</span>
                  <span className="p-1 rounded bg-surface-container-lowest text-primary">
                    <span className="material-symbols-outlined text-[18px]">payments</span>
                  </span>
                </div>
                <div className="my-space-xs">
                  <span className="font-headline-lg text-headline-lg text-on-surface font-bold">₹3,45,000</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-0.5 px-space-xs py-0.5 rounded bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm font-bold">
                    <span className="material-symbols-outlined text-[14px]">arrow_upward</span>
                    +12.4% MoM
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">vs. Prev Month</span>
                </div>
              </div>

              {/* Expenses */}
              <div className="p-space-md bg-surface-container-low rounded-lg flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="font-label-md text-label-md uppercase text-on-surface-variant">Operational Expenses</span>
                  <span className="p-1 rounded bg-surface-container-lowest text-tertiary">
                    <span className="material-symbols-outlined text-[18px]">receipt_long</span>
                  </span>
                </div>
                <div className="my-space-xs">
                  <span className="font-headline-lg text-headline-lg text-on-surface font-bold">₹2,82,000</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-body-sm text-body-sm text-on-surface font-semibold">Net Operating Margin: 18.2%</span>
                  <span className="font-body-sm text-body-sm text-secondary">₹63,000 Surplus</span>
                </div>
              </div>

              {/* B2B Buyers */}
              <div className="p-space-md bg-surface-container-low rounded-lg flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="font-label-md text-label-md uppercase text-on-surface-variant">Active B2B Buyers</span>
                  <span className="p-1 rounded bg-surface-container-lowest text-secondary">
                    <span className="material-symbols-outlined text-[18px]">groups</span>
                  </span>
                </div>
                <div className="my-space-xs flex items-baseline gap-space-xs">
                  <span className="font-headline-lg text-headline-lg text-on-surface font-bold">21</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">accounts in Bilaspur</span>
                </div>
                <div className="flex items-center gap-space-xs font-label-sm text-label-sm text-on-surface-variant">
                  <span className="px-space-xs py-0.5 rounded bg-surface-container font-semibold text-on-surface">14 Local Shops</span>
                  <span className="px-space-xs py-0.5 rounded bg-surface-container font-semibold text-on-surface">7 Wholesale</span>
                </div>
              </div>

              {/* Capacity */}
              <div className="p-space-md bg-surface-container-low rounded-lg flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="font-label-md text-label-md uppercase text-on-surface-variant">Processing Capacity</span>
                  <span className="p-1 rounded bg-surface-container-lowest text-primary">
                    <span className="material-symbols-outlined text-[18px]">precision_manufacturing</span>
                  </span>
                </div>
                <div className="my-space-xs flex items-baseline justify-between">
                  <span className="font-headline-lg text-headline-lg text-on-surface font-bold">64%</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">500kg of 800kg/day</span>
                </div>
                <div>
                  <div className="w-full h-1.5 rounded-full bg-surface-container">
                    <div className="h-1.5 rounded-full bg-secondary" style={{ width: '64%' }}></div>
                  </div>
                  <span className="font-body-sm text-body-sm text-on-surface-variant mt-1 block">300kg idle capacity available</span>
                </div>
              </div>
            </div>

            {/* Cash Flow Chart */}
            <div className="p-space-md bg-surface-container rounded-lg">
              <div className="flex items-center justify-between mb-space-xs">
                <span className="font-label-md text-label-md text-on-surface font-semibold">Weekly Cash Flow Comparison (Last 4 Weeks)</span>
                <div className="flex items-center gap-space-md font-label-sm text-label-sm">
                  <span className="flex items-center gap-1 text-on-surface-variant"><span className="w-2.5 h-2.5 rounded bg-primary"></span> Revenue</span>
                  <span className="flex items-center gap-1 text-on-surface-variant"><span className="w-2.5 h-2.5 rounded bg-surface-dim"></span> Expenses</span>
                </div>
              </div>
              <div className="w-full h-24 pt-space-xs">
                <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 400 90">
                  <rect className="fill-primary" height="55" rx="4" width="28" x="25" y="25" />
                  <rect className="fill-surface-dim" height="42" rx="4" width="28" x="57" y="38" />
                  <rect className="fill-primary" height="62" rx="4" width="28" x="125" y="18" />
                  <rect className="fill-surface-dim" height="46" rx="4" width="28" x="157" y="34" />
                  <rect className="fill-primary" height="65" rx="4" width="28" x="225" y="15" />
                  <rect className="fill-surface-dim" height="50" rx="4" width="28" x="257" y="30" />
                  <rect className="fill-primary" height="72" rx="4" width="28" x="325" y="8" />
                  <rect className="fill-surface-dim" height="52" rx="4" width="28" x="357" y="28" />
                  <line stroke="#CBD5E1" strokeWidth="1" x1="10" x2="390" y1="82" y2="82" />
                </svg>
              </div>
              <div className="flex justify-between px-6 font-label-sm text-label-sm text-on-surface-variant">
                <span>W1 (₹76k)</span>
                <span>W2 (₹84k)</span>
                <span>W3 (₹89k)</span>
                <span>W4 (₹96k)</span>
              </div>
            </div>
          </div>

          {/* AI Business Directives */}
          <div className="p-space-lg bg-surface-container-lowest rounded-xl shadow-sm flex flex-col gap-space-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-primary text-[22px]">auto_awesome</span>
                <h2 className="font-headline-md text-headline-md text-on-surface">Targeted AI Business Directives</h2>
              </div>
              <span className="font-label-sm text-label-sm text-on-surface-variant font-semibold">RAG-Grounded • Scheme-Matched</span>
            </div>
            <div className="flex flex-col gap-space-md">
              {/* Card 1 */}
              <div className="p-space-md bg-surface-container-low rounded-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md hover:bg-surface-container transition-all">
                <div className="flex items-start gap-space-md">
                  <div className="p-space-sm rounded-lg bg-primary-fixed text-primary shrink-0 mt-1">
                    <span className="material-symbols-outlined text-[24px]">alt_route</span>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-space-xs">
                      <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">PMEGP Scheme — Perfect Match</span>
                      <span className="px-space-xs py-0.5 rounded bg-primary-container text-on-primary-container font-label-sm text-label-sm font-bold">25% Subsidy</span>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                      Your agri-processing unit qualifies for PMEGP subsidy of ₹2.5L on a ₹10L project outlay. With your existing ₹1L equity, you can unlock ₹6.5L bank term loan at 8% p.a.
                    </p>
                    <div className="flex items-center gap-space-md mt-space-xs text-on-surface-variant font-label-sm text-label-sm">
                      <span>Subsidy: ₹2,50,000</span>
                      <span>•</span>
                      <span>EMI: ~₹9,400/mo for 7 years</span>
                    </div>
                  </div>
                </div>
                <button className="shrink-0 w-full md:w-auto px-space-md py-space-xs bg-primary text-on-primary font-label-lg text-label-lg rounded-lg shadow-sm hover:bg-primary-container transition-all">
                  Start Application
                </button>
              </div>

              {/* Card 2 */}
              <div className="p-space-md bg-surface-container-low rounded-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md hover:bg-surface-container transition-all">
                <div className="flex items-start gap-space-md">
                  <div className="p-space-sm rounded-lg bg-secondary-container text-on-secondary-container shrink-0 mt-1">
                    <span className="material-symbols-outlined text-[24px]">thermostat</span>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-space-xs">
                      <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Utilize 300kg Excess Processing Capacity</span>
                      <span className="px-space-xs py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-bold">Capacity Alpha</span>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                      Your cold storage unit operates with idle overhead between 6:00 PM and 6:00 AM. It can readily support value-added processing batches — flour packaging or spice grinding.
                    </p>
                    <div className="flex items-center gap-space-md mt-space-xs text-on-surface-variant font-label-sm text-label-sm">
                      <span>Capex Needed: Minimal (Grinder ₹35k)</span>
                      <span>•</span>
                      <span>Value-Add Spread: +28%</span>
                    </div>
                  </div>
                </div>
                <Link to="/market-analysis" className="shrink-0 w-full md:w-auto px-space-md py-space-xs bg-secondary text-on-secondary font-label-lg text-label-lg rounded-lg shadow-sm hover:bg-on-secondary-container transition-all text-center inline-flex items-center justify-center gap-1">
                  <span>Model Value-Addition</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Link>
              </div>

              {/* Card 3 */}
              <div className="p-space-md bg-surface-container-low rounded-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md hover:bg-surface-container transition-all">
                <div className="flex items-start gap-space-md">
                  <div className="p-space-sm rounded-lg bg-tertiary-fixed text-on-tertiary-fixed shrink-0 mt-1">
                    <span className="material-symbols-outlined text-[24px]">agriculture</span>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-space-xs">
                      <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">FPO Bulk Procurement Match</span>
                      <span className="px-space-xs py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm font-bold">12% Cost Reduction</span>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                      Located within 6.2 km. Group procurement through GraminMitra enables direct delivery of raw wheat with zero distributor markup.
                    </p>
                    <div className="flex items-center gap-space-md mt-space-xs text-on-surface-variant font-label-sm text-label-sm">
                      <span>Verified Entity: FPO-UP-0881</span>
                      <span>•</span>
                      <span>Monthly Savings: ₹8,400</span>
                    </div>
                  </div>
                </div>
                <Link to="/market-analysis" className="shrink-0 w-full md:w-auto px-space-md py-space-xs bg-surface-container-lowest text-on-surface font-label-lg text-label-lg rounded-lg shadow-sm hover:bg-surface-container transition-all text-center inline-flex items-center justify-center gap-1 border border-outline/10">
                  <span>View Supplier Match</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="xl:col-span-5 flex flex-col gap-space-lg">
          {/* Catchment Intelligence */}
          <div className="p-space-lg bg-surface-container-lowest rounded-xl shadow-sm flex flex-col gap-space-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-secondary text-[20px]">explore</span>
                <h2 className="font-headline-md text-headline-md text-on-surface">Catchment Intelligence</h2>
              </div>
              <span className="font-label-sm text-label-sm px-space-xs py-0.5 rounded bg-primary-fixed text-on-primary-fixed font-bold">Low Saturation</span>
            </div>
            <div className="grid grid-cols-2 gap-space-sm">
              <div className="p-space-sm bg-surface-container-low rounded-lg flex flex-col">
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Catchment Population</span>
                <span className="font-headline-sm text-headline-sm text-on-surface font-bold mt-1">14,800 Citizens</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">Across 14 Panchayats</span>
              </div>
              <div className="p-space-sm bg-surface-container-low rounded-lg flex flex-col">
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Captive Daily Demand</span>
                <span className="font-headline-sm text-headline-sm text-on-surface font-bold mt-1">800 kg / Day</span>
                <span className="font-body-sm text-body-sm text-secondary font-semibold">~62% Unmet by organized units</span>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="relative w-full h-56 rounded-xl overflow-hidden bg-surface-container">
              <div className="w-full h-full bg-gradient-to-br from-primary/10 via-surface-container to-secondary/10 flex flex-col justify-between p-space-sm">
                <div className="flex justify-between items-start">
                  <div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded bg-surface-container-lowest/90 backdrop-blur-md shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-error animate-ping"></span>
                    <span className="font-label-sm text-label-sm text-on-surface font-bold">Bilaspur Processing Hub (Current)</span>
                  </div>
                  <span className="px-space-xs py-0.5 bg-surface-container-lowest/90 backdrop-blur text-on-surface-variant font-label-sm text-label-sm rounded shadow-sm">
                    Radius: 8.5 km
                  </span>
                </div>
                <div className="p-space-xs rounded-lg bg-surface-container-lowest/95 backdrop-blur-md shadow-sm flex items-center justify-around text-center">
                  <div>
                    <span className="block font-label-sm text-label-sm font-bold text-primary">1 Unit / 8km</span>
                    <span className="block text-[10px] text-on-surface-variant font-label-sm">Competitor Density</span>
                  </div>
                  <div className="w-px h-6 bg-surface-container-high"></div>
                  <div>
                    <span className="block font-label-sm text-label-sm font-bold text-secondary">3 Collection Points</span>
                    <span className="block text-[10px] text-on-surface-variant font-label-sm">In 5km Radius</span>
                  </div>
                  <div className="w-px h-6 bg-surface-container-high"></div>
                  <div>
                    <span className="block font-label-sm text-label-sm font-bold text-tertiary">NH-87 Corridor</span>
                    <span className="block text-[10px] text-on-surface-variant font-label-sm">Direct Mandi Access</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-space-sm rounded-lg bg-surface-container flex items-center gap-space-sm">
              <span className="material-symbols-outlined text-secondary text-[20px]">verified</span>
              <div className="flex-1 text-body-sm font-body-sm text-on-surface">
                <strong>Favorable Market Gap:</strong> Nearest competitor is 8.4 km away. High village aggregation exclusivity.
              </div>
            </div>
            <Link
              to="/market-analysis"
              className="w-full py-space-sm px-space-md bg-primary text-on-primary rounded-lg font-label-lg text-label-lg shadow-sm hover:bg-primary-container transition-all flex items-center justify-center gap-space-xs font-semibold"
            >
              <span className="material-symbols-outlined text-[18px]">query_stats</span>
              <span>Open Detailed Market Analysis</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>

          {/* Financial Health & Scheme */}
          <div className="p-space-lg bg-surface-container-lowest rounded-xl shadow-sm flex flex-col gap-space-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-primary text-[20px]">account_balance</span>
                <h2 className="font-headline-md text-headline-md text-on-surface">Financial Health & Scheme</h2>
              </div>
              <span className="font-label-sm text-label-sm px-space-xs py-0.5 rounded bg-surface-container-high text-on-surface font-semibold">PMEGP Term Unit</span>
            </div>
            <div className="p-space-md bg-surface-container-low rounded-lg flex flex-col gap-space-sm">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-label-sm uppercase text-on-surface-variant">Approved Project Outlay</span>
                <span className="font-headline-sm text-headline-sm font-bold text-on-surface">₹10,00,000</span>
              </div>
              <div className="w-full h-3 rounded-full bg-surface-container flex overflow-hidden">
                <div className="bg-primary-container h-full" style={{ width: '10%' }} title="Promoter Equity (10%)"></div>
                <div className="bg-secondary h-full" style={{ width: '25%' }} title="Government Subsidy (25%)"></div>
                <div className="bg-tertiary h-full" style={{ width: '65%' }} title="Bank Term Loan (65%)"></div>
              </div>
              <div className="grid grid-cols-3 gap-space-xs pt-space-xs text-center">
                <div className="flex flex-col">
                  <span className="text-[11px] font-label-sm text-on-surface-variant">Own Equity (10%)</span>
                  <span className="font-label-md text-label-md font-semibold text-primary">₹1,00,000</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-label-sm text-on-surface-variant">PMEGP Subsidy (25%)</span>
                  <span className="font-label-md text-label-md font-semibold text-secondary">₹2,50,000</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-label-sm text-on-surface-variant">Bank Loan (65%)</span>
                  <span className="font-label-md text-label-md font-semibold text-tertiary">₹6,50,000</span>
                </div>
              </div>
            </div>

            {/* Scheme Cards */}
            <div className="flex flex-col gap-space-sm">
              {[
                { icon: 'savings', label: 'Mudra Loan', status: 'Pre-Qualified', statusColor: 'text-secondary bg-secondary-container', detail: '₹50,000 – ₹10,00,000 • 7.9% p.a.' },
                { icon: 'volunteer_activism', label: 'Stand-Up India', status: 'Check Eligibility', statusColor: 'text-on-surface-variant bg-surface-container-high', detail: '₹10L – ₹1Cr for SC/ST/Women' },
                { icon: 'account_balance_wallet', label: 'PM SVANidhi', status: 'Not Applicable', statusColor: 'text-on-surface-variant bg-surface-container', detail: 'For street vendors — not matched' },
              ].map(scheme => (
                <div key={scheme.label} className="p-space-sm bg-surface-container-low rounded-lg flex items-center justify-between">
                  <div className="flex items-center gap-space-sm">
                    <span className="material-symbols-outlined text-primary text-[20px]">{scheme.icon}</span>
                    <div>
                      <span className="font-label-md text-label-md text-on-surface font-semibold">{scheme.label}</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant block">{scheme.detail}</span>
                    </div>
                  </div>
                  <span className={`font-label-sm text-label-sm px-space-xs py-0.5 rounded ${scheme.statusColor} font-semibold`}>{scheme.status}</span>
                </div>
              ))}
            </div>
          </div>

          {/* WhatsApp Channel Preview */}
          <div className="p-space-lg bg-surface-container-lowest rounded-xl shadow-sm flex flex-col gap-space-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-secondary text-[20px]">chat</span>
                <h2 className="font-headline-md text-headline-md text-on-surface">WhatsApp Advisory Channel</h2>
              </div>
              <span className="font-label-sm text-label-sm px-space-xs py-0.5 rounded bg-secondary-container text-on-secondary-container font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
                Active
              </span>
            </div>
            <div className="bg-surface-container-low rounded-lg p-space-md flex flex-col gap-space-sm">
              <div className="flex gap-space-sm">
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-on-secondary text-[16px]">smart_toy</span>
                </div>
                <div className="bg-surface-container-lowest p-space-sm rounded-lg rounded-tl-none max-w-[80%] shadow-sm">
                  <p className="font-body-md text-body-md text-on-surface">नमस्ते सुरेश जी! 🙏 आपकी agri-processing unit की feasibility report तैयार है। PMEGP subsidy ₹2.5L approved हो सकती है।</p>
                  <span className="font-label-sm text-label-sm text-on-surface-variant mt-1 block">10:30 AM</span>
                </div>
              </div>
              <div className="flex gap-space-sm justify-end">
                <div className="bg-primary-fixed p-space-sm rounded-lg rounded-tr-none max-w-[80%] shadow-sm">
                  <p className="font-body-md text-body-md text-on-primary-fixed">Haan ji, documents kya chahiye?</p>
                  <span className="font-label-sm text-label-sm text-on-primary-fixed-variant mt-1 block">10:32 AM</span>
                </div>
              </div>
              <div className="flex gap-space-sm">
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-on-secondary text-[16px]">smart_toy</span>
                </div>
                <div className="bg-surface-container-lowest p-space-sm rounded-lg rounded-tl-none max-w-[80%] shadow-sm">
                  <p className="font-body-md text-body-md text-on-surface">आपको चाहिए: ✅ Aadhaar Card ✅ Udyam Registration ✅ Bank Statement (6 months) ✅ Gram Panchayat NOC — मैं checklist PDF भेज रहा हूँ 📄</p>
                  <span className="font-label-sm text-label-sm text-on-surface-variant mt-1 block">10:33 AM</span>
                </div>
              </div>
            </div>
            <button className="w-full py-space-sm bg-secondary text-on-secondary rounded-lg font-label-lg text-label-lg shadow-sm hover:bg-on-secondary-container transition-all flex items-center justify-center gap-space-xs">
              <span className="material-symbols-outlined text-[18px]">open_in_new</span>
              Open WhatsApp Channel
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
